import React from "react";
import { Navigation, ArrowUp, ArrowLeft, Stairs, ChevronRight } from "lucide-react";

const ScreenEntryConfirm: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <p className="text-xs text-muted-foreground">You entered via</p>
      <h2 className="text-lg font-semibold">Entrance A - Main Lobby</h2>
    </div>

    {/* Lobby photo - shown directly */}
    <div className="transit-img-placeholder">
      <div className="text-center">
        <Navigation className="w-8 h-8 mx-auto text-muted-foreground mb-1" />
        <p className="text-xs text-muted-foreground">Lobby interior - you are here</p>
      </div>
    </div>

    {/* Indoor orientation cues */}
    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><ArrowUp className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Directory board on your left</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Stairs className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Elevator ahead, stairs to the right</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Navigation className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Room 1017 is on Floor 1</p>
        </div>
      </div>
    </div>

    {/* Next action */}
    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("floorSelection")}>
      Go to Floor 1 <ChevronRight className="w-4 h-4" />
    </button>

    <button className="transit-btn-outline w-full" onClick={() => onNavigate("floorSelection")}>
      I need a different floor
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("entranceSelection")}>
      <ArrowLeft className="w-4 h-4" /> Wrong entrance? Go back
    </button>
  </div>
);

export default ScreenEntryConfirm;
