import React from "react";
import { DoorOpen, Eye, ArrowUpDown, ArrowLeft, Shield } from "lucide-react";

const ScreenEntranceWhy: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Why Entrance A?</h2>
      <p className="text-sm text-muted-foreground mt-1">Here's why we recommend this entrance</p>
    </div>

    <div className="transit-card space-y-0">
      <div className="transit-info-row">
        <div className="transit-info-icon"><DoorOpen className="w-5 h-5" /></div>
        <div>
          <p className="text-base font-semibold">Opens to main lobby</p>
          <p className="text-xs text-muted-foreground">Building directory visible right away</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><ArrowUpDown className="w-5 h-5" /></div>
        <div>
          <p className="text-base font-semibold">Elevator & stairs nearby</p>
          <p className="text-xs text-muted-foreground">Quick access to all floors</p>
        </div>
      </div>
      <div className="transit-info-row">
        <div className="transit-info-icon"><Eye className="w-5 h-5" /></div>
        <div>
          <p className="text-base font-semibold">Look for glass double doors</p>
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
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Other entrances</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="transit-badge-warning">B</span>
          <p className="text-sm text-muted-foreground">Residence wing - needs keycard for classrooms</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="transit-badge-danger">C</span>
          <p className="text-sm text-muted-foreground">Service door - may be locked after 5 PM</p>
        </div>
      </div>
    </div>

    <button className="transit-btn w-full" onClick={() => onNavigate("entranceSelection")}>
      Got it
    </button>
  </div>
);

export default ScreenEntranceWhy;
