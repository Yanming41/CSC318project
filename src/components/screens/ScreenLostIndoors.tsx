import React from "react";
import { Hash, Compass } from "lucide-react";

const ScreenLostIndoors: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="text-lg font-semibold">Lost indoors?</h2>
      <p className="text-sm text-muted-foreground mt-0.5">Let's get you re-oriented</p>
    </div>

    <div className="transit-card">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Check your surroundings</p>
      <ul className="space-y-1.5 text-sm">
        <li className="flex items-start gap-2">
          <Hash className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          What room numbers do you see? (2xxx = Floor 2)
        </li>
        <li className="flex items-start gap-2">
          <Compass className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          Look for a floor sign near stairs/elevator
        </li>
      </ul>
    </div>

    <div className="space-y-2">
      <button className="transit-btn w-full" onClick={() => onNavigate("entryConfirm")}>
        Go to lobby / Re-orient
      </button>
      <button className="transit-btn-outline w-full" onClick={() => onNavigate("floorSelection")}>
        I know my floor now
      </button>
      <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("orientationHelp")}>
        <Compass className="w-4 h-4" /> Orientation help
      </button>
    </div>
  </div>
);

export default ScreenLostIndoors;
