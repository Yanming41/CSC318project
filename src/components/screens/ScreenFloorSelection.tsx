import React from "react";

const ScreenFloorSelection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    {/* Status */}
    <div className="wireframe-progress justify-center">
      <div className="wireframe-progress-dot active" />
      <div className="wireframe-progress-dot active" />
      <div className="wireframe-progress-dot" />
      <span className="text-xs ml-2">Step 2 of 3 major decisions</span>
    </div>

    <h2 className="font-sketch text-xl text-center">🔢 Select Floor</h2>

    {/* Floor diagram */}
    <div className="wireframe-box text-center">
      <div className="space-y-1">
        {["Floor 3", "Floor 2", "Floor 1 ← Room 1017", "Basement"].map((f, i) => (
          <div
            key={i}
            className={`border-2 border-foreground py-2 px-3 text-sm cursor-pointer transition-all ${
              f.includes("1017") ? "bg-foreground text-primary-foreground font-bold" : "hover:bg-secondary"
            }`}
            onClick={() => onNavigate("tunnel")}
          >
            {f}
          </div>
        ))}
      </div>
      <p className="wireframe-annotation mt-2">[Simple floor stack diagram]</p>
    </div>

    {/* Corridor direction */}
    <div className="wireframe-box">
      <h3 className="font-sketch text-lg">🧭 Corridor Direction</h3>
      <p className="text-sm mt-1">Room 10xx → Turn <strong>LEFT</strong> from elevator</p>
      <p className="text-xs text-muted-foreground">Rooms increase: 1001 → 1020 along the corridor</p>
    </div>

    {/* Checkpoint image placeholder */}
    <div className="wireframe-box text-center py-4">
      <div className="text-3xl">📸</div>
      <p className="text-xs text-muted-foreground">[Checkpoint photo: Floor 1 corridor view]</p>
    </div>

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("orientationHelp")}>
      🤔 I'm not sure → Get orientation help
    </button>

    <button className="wireframe-button w-full" onClick={() => onNavigate("tunnel")}>
      Continue to corridor →
    </button>

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("entryConfirm")}>
      ← Back
    </button>
  </div>
);

export default ScreenFloorSelection;
