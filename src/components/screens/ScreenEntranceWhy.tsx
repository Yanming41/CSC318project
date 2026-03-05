import React from "react";
import { DoorOpen, Eye, Elevator, ArrowLeft, Shield } from "lucide-react";

const ScreenEntranceWhy: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="text-lg font-semibold">Why Entrance A?</h2>
      <p className="text-sm text-muted-foreground mt-0.5">Here's why we recommend this entrance</p>
    </div>

    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><DoorOpen className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Opens to main lobby</p>
          <p className="text-xs text-muted-foreground">Building directory visible right away</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Elevator className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Elevator & stairs nearby</p>
          <p className="text-xs text-muted-foreground">Quick access to all floors</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Eye className="w-4 h-4" /></div>
        <div>
          <p className="text-sm font-medium">Look for glass double doors</p>
          <p className="text-xs text-muted-foreground">"Wilson Hall" sign above entrance</p>
        </div>
      </div>
    </div>

    {/* Visual cue - show image directly */}
    <div className="transit-img-placeholder">
      <div className="text-center">
        <Eye className="w-8 h-8 mx-auto text-muted-foreground mb-1" />
        <p className="text-xs text-muted-foreground">Entrance A - Glass double doors</p>
      </div>
    </div>

    <div className="transit-card">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Other entrances</p>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="transit-badge-warning">B</span>
          <p className="text-xs text-muted-foreground">Residence wing - needs keycard for classrooms</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="transit-badge-danger">C</span>
          <p className="text-xs text-muted-foreground">Service door - may be locked after 5 PM</p>
        </div>
      </div>
    </div>

    <button className="transit-btn w-full" onClick={() => onNavigate("entranceSelection")}>
      Got it
    </button>
  </div>
);

export default ScreenEntranceWhy;
