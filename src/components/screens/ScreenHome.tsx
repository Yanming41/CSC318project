import React, { useState } from "react";
import { Search, MapPin, Clock, ChevronRight } from "lucide-react";
import { BUILDING_DB } from "@/data/screenData";

const ScreenHome: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input.trim()) return;
    const code = input.trim().toUpperCase().split(/\s+/)[0];
    const matches = BUILDING_DB[code];
    if (matches && matches.length === 1) {
      onNavigate("resolution");
    } else if (matches && matches.length > 1) {
      onNavigate("ambiguous");
    } else {
      onNavigate("resolution");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          className="transit-input pl-10 pr-4"
          placeholder="Building code + room (e.g. WI 1017)"
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

      {/* Campus Map Placeholder */}
      <div
        className="transit-card-interactive"
        onClick={() => onNavigate("resolution")}
      >
        <div className="rounded-xl overflow-hidden bg-[hsl(var(--secondary))] flex items-center justify-center" style={{ height: 160 }}>
          <div className="text-center">
            <MapPin className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground font-medium">Tap to browse campus map</p>
          </div>
        </div>
      </div>

      {/* Quick Access / Timetable */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-1">From your timetable</p>
        <div className="space-y-2">
          {[
            { code: "WI 1017", name: "Wilson Hall", time: "10:00 AM" },
            { code: "SS 2127", name: "Sidney Smith Hall", time: "1:00 PM" },
            { code: "BA 2135", name: "Bahen Centre", time: "3:00 PM" },
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
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">{item.code}</p>
                <p className="text-xs text-muted-foreground">{item.name}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{item.time}</p>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Already in building */}
      <button
        className="transit-btn-ghost w-full text-center text-sm"
        onClick={() => onNavigate("entryConfirm")}
      >
        Already inside a building?
      </button>
    </div>
  );
};

export default ScreenHome;
