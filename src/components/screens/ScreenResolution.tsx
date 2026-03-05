import React from "react";

const ScreenResolution: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-annotation">System resolved "WI" →</div>

    <div className="wireframe-solid text-center">
      <h2 className="font-sketch text-2xl">✅ Wilson Hall</h2>
      <p className="text-sm mt-1">73 St. George Street</p>
      <p className="text-xs text-muted-foreground">Arts & Science · Central Campus</p>
    </div>

    {/* Simple diagram placeholder */}
    <div className="wireframe-box text-center py-6">
      <div className="text-4xl mb-2">🗺</div>
      <p className="text-xs text-muted-foreground">[Simple campus area map]</p>
      <p className="text-xs">Near: Robarts Library, St. George Station</p>
    </div>

    <div className="space-y-2">
      <button className="wireframe-button w-full" onClick={() => onNavigate("entranceSelection")}>
        ✓ Confirm this building
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("ambiguous")}>
        🤔 Not sure? Show alternatives
      </button>
    </div>

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("home")}>
      ← Back to search
    </button>
  </div>
);

export default ScreenResolution;
