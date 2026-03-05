import React from "react";
import { Building2, MapPin, ArrowLeft } from "lucide-react";

const ScreenAmbiguous: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Multiple matches for "BA"</h2>
      <p className="text-sm text-muted-foreground mt-1">Select the correct building</p>
    </div>

    {[
      { name: "Bahen Centre", addr: "40 St. George St", area: "Central Campus" },
      { name: "Bancroft Building", addr: "21 Sussex Ave", area: "North Campus" },
    ].map((b, i) => (
      <button
        key={i}
        className="transit-card-interactive w-full text-left flex items-center gap-3"
        onClick={() => onNavigate("resolution")}
      >
        <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
          <Building2 className="w-6 h-6 text-[hsl(var(--accent-foreground))]" />
        </div>
        <div className="flex-1">
          <p className="font-bold text-base">{b.name}</p>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">{b.addr} - {b.area}</p>
          </div>
        </div>
      </button>
    ))}

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("home")}>
      <ArrowLeft className="w-4 h-4" /> Back to search
    </button>
  </div>
);

export default ScreenAmbiguous;
