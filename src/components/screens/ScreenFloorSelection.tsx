import React from "react";
import { ArrowLeft, ChevronRight, CornerDownLeft, Compass } from "lucide-react";

const floors = [
  { label: "Floor 3", room: false },
  { label: "Floor 2", room: false },
  { label: "Floor 1", room: false },
  { label: "Basement", room: true, hint: "Room 500U" },
];

const ScreenFloorSelection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Confirm the floor</h2>
      <p className="text-sm text-muted-foreground mt-1">Room 500U is on <span className="font-bold text-foreground">Basement</span></p>
    </div>

    {/* Floor buttons */}
    <div className="space-y-2.5">
      {floors.map((f, i) => (
        <button
          key={i}
          className={`w-full text-left rounded-2xl px-4 py-4 transition-all ${f.room
              ? "bg-[hsl(var(--primary))] text-white font-bold shadow-md"
              : "transit-card-interactive"
            }`}
          onClick={() => onNavigate("lastMile")}
        >
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold">{f.label}</span>
            {f.room && (
              <span className="text-sm font-semibold opacity-90">{f.hint} →</span>
            )}
          </div>
        </button>
      ))}
    </div>

    {/*/!* Direction info *!/*/}
    {/*<div className="transit-card">*/}
    {/*  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Direction</p>*/}
    {/*  <div className="flex items-center gap-3">*/}
    {/*    <div className="transit-info-icon"><CornerDownLeft className="w-5 h-5" /></div>*/}
    {/*    <div>*/}
    {/*      <p className="text-base font-bold">Turn LEFT from elevator</p>*/}
    {/*      <p className="text-sm text-muted-foreground">Rooms 1001 - 1020 along corridor</p>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*/!* Corridor photo - shown directly *!/*/}
    {/*<div className="transit-img-placeholder">*/}
    {/*  <div className="text-center">*/}
    {/*    <Compass className="w-8 h-8 mx-auto text-muted-foreground mb-1" />*/}
    {/*    <p className="text-xs text-muted-foreground">Floor 1 corridor view</p>*/}
    {/*  </div>*/}
    {/*</div>*/}

    {/*<button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("tunnel")}>*/}
    {/*  Continue <ChevronRight className="w-5 h-5" />*/}
    {/*</button>*/}

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("orientationHelp")}>
      <Compass className="w-4 h-4" /> I'm not sure where I am
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("entryConfirm")}>
      <ArrowLeft className="w-4 h-4" /> Back
    </button>
  </div>
);

export default ScreenFloorSelection;
