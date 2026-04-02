import React, { useState } from "react";
import { Search, Clock, ChevronRight, Plus } from "lucide-react";
import { BUILDING_DB } from "@/data/screenData";

interface Building {
    id: string;
    name: string;
    code: string;
    x: number;
    y: number;
}

// Define building locations on your map (adjust x/y based on actual positions)
const MAP_BUILDINGS: Building[] = [
    { id: "wi", name: "Wilson Hall", code: "WI", x: 35, y: 45 },
    { id: "ss", name: "Sidney Smith Hall", code: "SS", x: 50, y: 40 },
    { id: "ba", name: "Bahen Centre", code: "BA", x: 45, y: 55 },
    { id: "uc", name: "University College", code: "UC", x: 60, y: 50 },
    { id: "mp", name: "McLennan Physical Labs", code: "MP", x: 40, y: 60 },
];

const ScreenHome: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
    const [input, setInput] = useState("");
    const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);
    const dragStartTime = React.useRef<number>(0);
    const [roomInput, setRoomInput] = useState("");

    const handleSearch = () => {
        const query = input.trim().toUpperCase().replace(/\s+/g, "");

        if (!query) return;

        if (query === "WI500U") {
            onNavigate("resolution"); // same as timetable button
        } else {
            alert("No information available for this location yet.");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSearch();
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        dragStartTime.current = Date.now();
        setStartPos({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        dragStartTime.current = Date.now();
        const touch = e.touches[0];
        setStartPos({
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y,
        });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        setPosition({
            x: touch.clientX - startPos.x,
            y: touch.clientY - startPos.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleBuildingClick = (building: Building, e: React.MouseEvent) => {
        e.stopPropagation();
        const dragDuration = Date.now() - dragStartTime.current;
        if (dragDuration < 200) {
            setSelectedBuilding(building.id);
            setInput(`${building.code} 1017`);
        }
    };

    const handleRoomSubmit = () => {
        const room = roomInput.trim().toUpperCase();

        if (selectedBuilding === "wi" && room === "500U") {
            onNavigate("resolution");
        } else {
            alert("No information available for this room yet.");
        }
    };

    const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2));
    const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.6));
    const handleReset = () => {
        setPosition({ x: 0, y: 0 });
        setScale(1);
        setSelectedBuilding(null);
    };

    React.useEffect(() => {
        const handleMouseUpGlobal = () => setIsDragging(false);
        window.addEventListener("mouseup", handleMouseUpGlobal);
        window.addEventListener("touchend", handleMouseUpGlobal);
        return () => {
            window.removeEventListener("mouseup", handleMouseUpGlobal);
            window.removeEventListener("touchend", handleMouseUpGlobal);
        };
    }, []);

    return (
        <div className="space-y-5">
            {/* Hero greeting */}
            <div className="px-1">
                <h2 className="transit-hero-text">Where are you heading?</h2>
                <p className="text-sm text-muted-foreground mt-1">Enter a building code + room number</p>
            </div>

            <button className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center text-white shadow-sm">
                <Plus className="w-5 h-5"/>
            </button>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"/>
                <input
                    className="transit-input pl-11 pr-4"
                    placeholder="e.g. WI 1017"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            {input.trim() && (
                <button className="transit-btn w-full" onClick={handleSearch}>
                    Search
                </button>
            )}

            {/* Interactive Campus Map */}
            <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        Or tap a building on the map
                    </p>
                    <div className="flex gap-2">
                        <button className="transit-chip text-xs" onClick={handleZoomIn}>+</button>
                        <button className="transit-chip text-xs" onClick={handleZoomOut}>−</button>
                        <button className="transit-chip text-xs" onClick={handleReset}>Reset</button>
                    </div>
                </div>

                <div
                    className="transit-card relative overflow-hidden cursor-grab active:cursor-grabbing"
                    style={{ height: 300 }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                            transition: isDragging ? "none" : "transform 0.2s ease-out",
                            transformOrigin: "center center",
                        }}
                    >
                        <img
                            src="/CSC318project/public/Campus_Overview.jpg"
                            alt="Campus map"
                            className="w-full h-full object-cover pointer-events-none select-none"
                            draggable={false}
                        />

                        {/* Building Markers */}
                        {MAP_BUILDINGS.map((building) => (
                            <button
                                key={building.id}
                                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all ${
                                    selectedBuilding === building.id ? "scale-125 z-10" : "hover:scale-110"
                                }`}
                                style={{
                                    left: `${building.x}%`,
                                    top: `${building.y}%`,
                                }}
                                onClick={(e) => handleBuildingClick(building, e)}
                            >
                                <div
                                    className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all ${
                                        selectedBuilding === building.id
                                            ? "bg-[hsl(var(--primary))] ring-4 ring-[hsl(var(--primary))] ring-opacity-30"
                                            : "bg-white border-2 border-[hsl(var(--primary))]"
                                    }`}
                                >
                                    <div className={`text-xs font-bold ${
                                        selectedBuilding === building.id ? "text-white" : "text-[hsl(var(--primary))]"
                                    }`}>
                                        {building.code}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Selected Building Info */}
                {selectedBuilding && (
                    <div className="transit-card bg-[hsl(var(--accent))] space-y-3">
                        <div>
                            <p className="text-sm font-bold">
                                {MAP_BUILDINGS.find((b) => b.id === selectedBuilding)?.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Code: {MAP_BUILDINGS.find((b) => b.id === selectedBuilding)?.code}
                            </p>
                        </div>

                        {selectedBuilding === "wi" ? (
                            <>
                                {/* Room input */}
                                <div className="relative">
                                    <input
                                        className="transit-input pr-4"
                                        placeholder="Enter room (e.g. 500U)"
                                        value={roomInput}
                                        onChange={(e) => setRoomInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") handleRoomSubmit();
                                        }}
                                    />
                                </div>

                                {roomInput.trim() && (
                                    <button className="transit-btn w-full" onClick={handleRoomSubmit}>
                                        Go
                                    </button>
                                )}
                            </>
                        ) : (
                            <button
                                className="transit-chip active"
                                onClick={() => alert("No information available for this building yet.")}
                            >
                                Select →
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Quick Access / Timetable */}
            <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2.5 px-1">From your
                    timetable</p>
                <div className="space-y-2.5">
                    {[
                        {code: "WI 500U", name: "Wilson Hall", time: "10:00 AM"},
                        {code: "SS 2127", name: "Sidney Smith Hall", time: "1:00 PM"},
                        {code: "BA 2135", name: "Bahen Centre", time: "3:00 PM"},
                    ].map((item) => (
                        <button
                            key={item.code}
                            className="transit-card-interactive w-full text-left flex items-center gap-3"
                            onClick={() => {
                                setInput(item.code);
                                onNavigate("resolution");
                            }}
                        >
                            <div className="transit-info-icon">
                                <Clock className="w-5 h-5"/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-bold text-base">{item.code}</p>
                                <p className="text-xs text-muted-foreground">{item.name}</p>
                            </div>
                            <div className="text-right flex items-center gap-2">
                                <p className="text-sm font-semibold"
                                   style={{color: "hsl(var(--primary))"}}>{item.time}</p>
                                <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Already in building */}
            <button
                className="transit-btn-ghost w-full text-center"
                onClick={() => onNavigate("entryConfirm")}
            >
                Already inside a building?
            </button>
        </div>
    );
};

export default ScreenHome;