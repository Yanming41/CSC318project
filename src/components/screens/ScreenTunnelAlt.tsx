import React from "react";
import { Sun, Timer, ChevronRight, ArrowLeft } from "lucide-react";

const ScreenTunnelAlt: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Above-ground route</h2>
      <p className="text-sm text-muted-foreground mt-1">Walk outside instead of through the connector</p>
    </div>

    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><span className="text-sm font-bold">1</span></div>
        <p className="text-base font-medium">Exit building through Entrance A</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><span className="text-sm font-bold">2</span></div>
        <p className="text-base font-medium">Walk along St. George St (~3 min)</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><span className="text-sm font-bold">3</span></div>
        <p className="text-base font-medium">Re-enter through next building's main entrance</p>
      </div>
    </div>

    <div className="transit-card flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-muted-foreground" />
        <span className="text-base font-bold">+2 min vs connector</span>
      </div>
      <div className="flex items-center gap-2">
        <Sun className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">Outdoor, well-lit</span>
      </div>
    </div>

    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("lastMile")}>
      Take this route <ChevronRight className="w-4 h-4" />
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("tunnel")}>
      <ArrowLeft className="w-4 h-4" /> Back to connector route
    </button>
  </div>
);

export default ScreenTunnelAlt;
