import React from "react";
import { Search, RotateCcw, Compass, MapPin } from "lucide-react";

const ScreenCantFind: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Got lost at this step?</h2>
      <p className="text-sm text-muted-foreground mt-1">Try these recovery steps</p>
    </div>

    <div className="space-y-2">
      <button className="transit-card-interactive w-full text-left flex items-center gap-3" onClick={() => onNavigate("lastMile")}>
        <div className="transit-info-icon"><Search className="w-5 h-5" /></div>
        <div>
          <p className="font-bold text-base">Check nearest room number</p>
          <p className="text-xs text-muted-foreground">Look for the closest visible sign and re-orient</p>
        </div>
      </button>

      <button className="transit-card-interactive w-full text-left flex items-center gap-3" onClick={() => onNavigate("entryConfirm")}>
        <div className="transit-info-icon"><RotateCcw className="w-5 h-5" /></div>
        <div>
          <p className="font-bold text-base">Return to lobby</p>
          <p className="text-xs text-muted-foreground">Go back to the directory and restart</p>
        </div>
      </button>

      <button className="transit-card-interactive w-full text-left flex items-center gap-3" onClick={() => onNavigate("lastMile")}>
        <div className="transit-info-icon"><MapPin className="w-5 h-5" /></div>
        <div>
          <p className="font-bold text-base">Restart from here</p>
          <p className="text-xs text-muted-foreground">Re-navigate from your current floor</p>
        </div>
      </button>

      <button className="transit-card-interactive w-full text-left flex items-center gap-3" onClick={() => onNavigate("orientationHelp")}>
        <div className="transit-info-icon"><Compass className="w-5 h-5" /></div>
        <div>
          <p className="font-bold text-base">Orientation help</p>
          <p className="text-xs text-muted-foreground">Room numbering patterns and floor info</p>
        </div>
      </button>
    </div>
  </div>
);

export default ScreenCantFind;
