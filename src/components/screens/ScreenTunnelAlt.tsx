import React from "react";

const ScreenTunnelAlt: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <h2 className="font-sketch text-xl text-center">🌤 Above-Ground Alternative</h2>

    <div className="wireframe-solid">
      <p className="text-sm mb-2">Instead of the tunnel, you can walk outside:</p>
      <div className="space-y-1 text-sm">
        <p>1. Exit building through Entrance A</p>
        <p>2. Walk along St. George St (~3 min)</p>
        <p>3. Re-enter through the next building's main entrance</p>
      </div>
    </div>

    <div className="wireframe-box text-center">
      <p className="font-bold text-sm">⏱ +2 min vs tunnel</p>
      <p className="text-xs text-muted-foreground">Outdoor, well-lit, wider path</p>
    </div>

    <div className="space-y-2">
      <button className="wireframe-button w-full" onClick={() => onNavigate("lastMile")}>
        Take this route →
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("tunnel")}>
        ← Go back to tunnel route
      </button>
    </div>

    <p className="wireframe-annotation text-center">Alt state for DR4 — wizard swap</p>
  </div>
);

export default ScreenTunnelAlt;
