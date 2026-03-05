import React from "react";
import { MapPin, Building2, ChevronRight, ArrowLeft, Timer } from "lucide-react";

const ScreenResolution: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    {/* Auto-resolved badge */}
    <div className="flex items-center gap-2 px-1">
      <span className="transit-badge-success">Auto-resolved</span>
      <span className="text-sm text-muted-foreground">WI = Wilson Hall</span>
    </div>

    {/* Building card */}
    <div className="transit-card">
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
          <Building2 className="w-7 h-7 text-[hsl(var(--accent-foreground))]" />
        </div>
        <div className="flex-1">
          <h2 className="transit-hero-text">Wilson Hall</h2>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">73 St. George St</p>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">Arts & Science - Central Campus</p>
        </div>
      </div>
    </div>

    {/* Walk time estimate */}
    <div className="transit-action-banner">
      <Timer className="w-6 h-6" />
      <div>
        <span className="banner-text">8 min walk</span>
        <span className="text-sm opacity-80 ml-2">• 600 m away</span>
      </div>
    </div>

    {/* Map preview (placeholder) */}
    <div className="transit-img-placeholder">
      <div className="text-center">
        <MapPin className="w-8 h-8 mx-auto text-muted-foreground mb-1" />
        <p className="text-xs text-muted-foreground">Campus map preview</p>
      </div>
    </div>

    {/* Nearby landmarks */}
    <div className="transit-card">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Nearby</p>
      <p className="text-sm font-medium">Robarts Library, St. George Station</p>
    </div>

    {/* Actions */}
    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("entranceSelection")}>
      Navigate here <ChevronRight className="w-5 h-5" />
    </button>

    <button className="transit-btn-ghost w-full" onClick={() => onNavigate("ambiguous")}>
      Not the right building?
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("home")}>
      <ArrowLeft className="w-4 h-4" /> Back
    </button>
  </div>
);

export default ScreenResolution;
