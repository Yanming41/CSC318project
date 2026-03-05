import React from "react";
import { CheckCircle2, Sun, DoorOpen, Timer, ChevronRight, ArrowLeft, ShieldAlert } from "lucide-react";

const ScreenTunnel: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="text-lg font-semibold">Connector passage</h2>
      <p className="text-sm text-muted-foreground mt-0.5">Your route goes through a building connector</p>
    </div>

    {/* Tunnel photo - shown directly */}
    <div className="transit-img-placeholder">
      <div className="text-center">
        <DoorOpen className="w-8 h-8 mx-auto text-muted-foreground mb-1" />
        <p className="text-xs text-muted-foreground">Connector hallway ahead</p>
      </div>
    </div>

    {/* Reassurance cues */}
    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><CheckCircle2 className="w-4 h-4" /></div>
        <p className="text-sm font-medium">You're on track</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Sun className="w-4 h-4" /></div>
        <p className="text-sm">Well-lit public route</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><DoorOpen className="w-4 h-4" /></div>
        <p className="text-sm">Exit 30 steps ahead</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Timer className="w-4 h-4" /></div>
        <p className="text-sm">~1 min walk</p>
      </div>
    </div>

    {/* Social proof */}
    <div className="transit-card text-center">
      <p className="text-sm text-muted-foreground italic">"Commonly used route - students walk it daily."</p>
    </div>

    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("lastMile")}>
      Continue <ChevronRight className="w-4 h-4" />
    </button>

    <button className="transit-btn-outline w-full flex items-center justify-center gap-2" onClick={() => onNavigate("tunnelAlt")}>
      <ShieldAlert className="w-4 h-4" /> Prefer outdoor route?
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("floorSelection")}>
      <ArrowLeft className="w-4 h-4" /> Back
    </button>
  </div>
);

export default ScreenTunnel;
