import React from "react";

const ScreenLostIndoors: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-box text-center">
      <div className="text-3xl mb-2">😰</div>
      <h2 className="font-sketch text-xl">Lost Indoors?</h2>
      <p className="text-sm text-muted-foreground mt-1">Let's get you re-oriented</p>
    </div>

    <div className="wireframe-solid">
      <p className="text-sm font-bold">🔙 Return to anchor point:</p>
      <p className="text-sm mt-1">Head back to the <strong>lobby directory</strong> (main entrance area)</p>
      <p className="text-xs text-muted-foreground mt-1">Look for elevator/stairwell — lobby is usually at ground level</p>
    </div>

    <div className="wireframe-box">
      <p className="text-sm font-bold">🔢 Check your surroundings:</p>
      <ul className="text-sm mt-1 space-y-1 list-disc list-inside">
        <li>What room numbers do you see? (e.g., 2xxx = Floor 2)</li>
        <li>Can you find a floor sign near stairs/elevator?</li>
        <li>Is there a directory or map on the wall?</li>
      </ul>
    </div>

    <div className="space-y-2">
      <button className="wireframe-button w-full" onClick={() => onNavigate("entryConfirm")}>
        🏛 Go to lobby / Re-orient
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("floorSelection")}>
        🔢 I know my floor now
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("orientationHelp")}>
        🧭 Orientation help
      </button>
    </div>

    <p className="wireframe-annotation text-center">Error recovery — wizard can swap here</p>
  </div>
);

export default ScreenLostIndoors;
