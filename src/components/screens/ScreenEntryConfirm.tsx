import React from "react";

const ScreenEntryConfirm: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-solid text-center">
      <p className="text-xs text-muted-foreground">You entered via:</p>
      <h2 className="font-sketch text-xl">🚪 Entrance A — Main Lobby</h2>
    </div>

    {/* Status */}
    <div className="wireframe-progress justify-center">
      <div className="wireframe-progress-dot active" />
      <div className="wireframe-progress-dot" />
      <div className="wireframe-progress-dot" />
      <span className="text-xs ml-2">Step 1 of 3 major decisions</span>
    </div>

    {/* Indoor anchor */}
    <div className="wireframe-box">
      <h3 className="font-sketch text-lg">📍 You are at: Lobby / Directory</h3>
      <div className="text-sm mt-2 space-y-1">
        <p>• Building directory board is to your left</p>
        <p>• Elevator ahead, stairs to the right</p>
        <p>• Room 1017 → Floor 1</p>
      </div>
    </div>

    {/* Indoor image placeholder */}
    <div className="wireframe-box text-center py-6">
      <div className="text-4xl">🏢</div>
      <p className="text-xs text-muted-foreground">[Photo of lobby entrance interior]</p>
    </div>

    {/* Next decisions */}
    <div className="space-y-2">
      <p className="text-xs font-bold">Next: Choose your floor</p>
      <button className="wireframe-button w-full" onClick={() => onNavigate("floorSelection")}>
        Go to Floor 1 →
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("floorSelection")}>
        Go to Basement →
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("floorSelection")}>
        🛗 Take elevator / 🪜 Stairs
      </button>
    </div>

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("entranceSelection")}>
      ← Wrong entrance? Go back
    </button>
  </div>
);

export default ScreenEntryConfirm;
