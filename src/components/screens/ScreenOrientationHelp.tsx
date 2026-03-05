import React from "react";
import { BookOpen, Hash, Signpost, ArrowLeft } from "lucide-react";

const ScreenOrientationHelp: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="text-lg font-semibold">Orientation help</h2>
      <p className="text-sm text-muted-foreground mt-0.5">Use these cues to find where you are</p>
    </div>

    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><BookOpen className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Building directory</p>
          <p className="text-xs text-muted-foreground">Located in main lobby - lists all rooms by floor</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Hash className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Room number pattern</p>
          <p className="text-xs text-muted-foreground">1xxx = Floor 1, 2xxx = Floor 2</p>
          <p className="text-xs text-muted-foreground">2-digit rooms (e.g. 65) = Basement</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Signpost className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Floor signs</p>
          <p className="text-xs text-muted-foreground">Check near elevators and stairwells</p>
        </div>
      </div>
    </div>

    <button className="transit-btn w-full" onClick={() => onNavigate("floorSelection")}>
      Back to floor selection
    </button>
  </div>
);

export default ScreenOrientationHelp;
