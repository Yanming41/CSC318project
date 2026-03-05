import React from "react";

const ScreenAmbiguous: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-box text-center">
      <h2 className="font-sketch text-xl">⚠ Multiple Matches for "WI"</h2>
      <p className="text-xs text-muted-foreground">Tap the correct building</p>
    </div>

    {[
      { name: "Wilson Hall", addr: "73 St. George St", area: "Central" },
      { name: "Wycliffe College", addr: "5 Hoskin Ave", area: "North" },
      { name: "Winnett Hall (hypothetical)", addr: "100 College St", area: "East" },
    ].map((b, i) => (
      <button
        key={i}
        className="wireframe-card w-full text-left"
        onClick={() => onNavigate("resolution")}
      >
        <p className="font-bold">{b.name}</p>
        <p className="text-xs">{b.addr} · {b.area}</p>
      </button>
    ))}

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("home")}>
      ← Back to search
    </button>

    <p className="wireframe-annotation text-center">Edge state: ambiguous abbreviation</p>
  </div>
);

export default ScreenAmbiguous;
