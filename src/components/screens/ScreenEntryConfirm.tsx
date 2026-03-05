import React from "react";
import { Navigation, ArrowUp, ArrowLeft, Footprints, ChevronRight } from "lucide-react";

const ScreenEntryConfirm: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">You entered via</p>
      <h2 className="transit-hero-text mt-1">Entrance A - Main Lobby</h2>
    </div>

    {/* Lobby photo - shown directly */}
    <div className="transit-img-placeholder">
      <div className="text-center">
        <Navigation className="w-8 h-8 mx-auto text-muted-foreground mb-1" />
        <p className="text-xs text-muted-foreground">Lobby interior - you are here</p>
      </div>
    </div>

    {/* Key destination banner */}
    <div className="transit-action-banner">
      <Navigation className="w-6 h-6" />
      <div>
        <span className="banner-text">Room 1017</span>
        <span className="text-sm opacity-80 ml-2">• Floor 1</span>
      </div>
    </div>

    {/* Indoor orientation cues */}
    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><ArrowUp className="w-5 h-5" /></div>
        <div>
          <p className="text-base font-semibold">Directory board on your left</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Footprints className="w-5 h-5" /></div>
        <div>
          <p className="text-base font-semibold">Elevator ahead, stairs to the right</p>
        </div>
      </div>
    </div>

    {/* Next action */}
    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("floorSelection")}>
      Go to Floor 1 <ChevronRight className="w-5 h-5" />
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
