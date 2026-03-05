import React from "react";

const ScreenTunnel: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    {/* Status */}
    <div className="wireframe-progress justify-center">
      <div className="wireframe-progress-dot active" />
      <div className="wireframe-progress-dot active" />
      <div className="wireframe-progress-dot active" />
      <span className="text-xs ml-2">Step 3 of 3 · Almost there</span>
    </div>

    <h2 className="font-sketch text-xl text-center">🔗 Tunnel / Connector</h2>

    {/* Reassurance box */}
    <div className="wireframe-solid space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-lg">✅</span>
        <p className="text-sm font-bold">You're on track</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">🔆</span>
        <p className="text-sm">Well-lit public route</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">🚪</span>
        <p className="text-sm">Nearest exit: 30 steps ahead</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg">⏱</span>
        <p className="text-sm">~1 min walk through connector</p>
      </div>
    </div>

    {/* Tunnel image placeholder */}
    <div className="wireframe-box text-center py-6">
      <div className="text-4xl">🚇</div>
      <p className="text-xs text-muted-foreground">[Photo of tunnel/connector]</p>
    </div>

    {/* Calming microcopy */}
    <div className="wireframe-box text-center">
      <p className="text-sm italic">"This is a commonly used route. Other students walk it daily."</p>
    </div>

    <div className="space-y-2">
      <button className="wireframe-button w-full" onClick={() => onNavigate("lastMile")}>
        Continue → Almost at room
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("tunnelAlt")}>
        😟 Prefer a safer alternative?
      </button>
    </div>

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("floorSelection")}>
      ← Back
    </button>
  </div>
);

export default ScreenTunnel;
