import React from "react";
import { CheckCircle2, Sun, DoorOpen, Timer, ChevronRight, ArrowLeft, ShieldAlert } from "lucide-react";

const ScreenTunnel: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Connector passage</h2>
      <p className="text-sm text-muted-foreground mt-1">Your route goes through a building connector</p>
    </div>

    {/* Walk time metric */}
    <div className="transit-action-banner-green">
      <Timer className="w-6 h-6" />
      <div>
        <span className="banner-text">~1 min walk</span>
        <span className="text-sm opacity-80 ml-2">• well-lit route</span>
      </div>
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
        <div className="transit-info-icon" style={{ background: "hsl(var(--transit-green) / 0.14)", color: "hsl(var(--transit-green))" }}>
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-base font-bold" style={{ color: "hsl(var(--transit-green))" }}>You're on track</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Sun className="w-5 h-5" /></div>
        <p className="text-base font-medium">Well-lit public route</p>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><DoorOpen className="w-5 h-5" /></div>
        <p className="text-base font-medium">Exit 30 steps ahead</p>
      </div>
    </div>

    {/* Social proof */}
    <div className="transit-card text-center">
      <p className="text-sm text-muted-foreground italic">"Commonly used route - students walk it daily."</p>
    </div>

    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("lastMile")}>
      Continue <ChevronRight className="w-5 h-5" />
    </button>

    <button className="transit-btn-outline w-full flex items-center justify-center gap-2" onClick={() => onNavigate("tunnelAlt")}>
      <ShieldAlert className="w-5 h-5" /> Prefer outdoor route?
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("floorSelection")}>
      <ArrowLeft className="w-4 h-4" /> Back
    </button>
  </div>
);

export default ScreenTunnel;
