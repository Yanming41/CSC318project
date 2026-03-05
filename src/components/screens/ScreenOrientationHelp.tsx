import React from "react";

const ScreenOrientationHelp: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-box">
      <h2 className="font-sketch text-xl mb-2">🧭 Orientation Help</h2>
      <p className="text-sm mb-3">Use these landmarks to figure out where you are:</p>

      <div className="space-y-2 text-sm">
        <div className="wireframe-solid">
          <p className="font-bold">📋 Building Directory</p>
          <p className="text-xs">Located in main lobby — lists all rooms by floor</p>
        </div>
        <div className="wireframe-solid">
          <p className="font-bold">🔢 Room Number Pattern</p>
          <p className="text-xs">First digit = floor (1xxx = Floor 1, 2xxx = Floor 2)</p>
          <p className="text-xs">2-digit rooms (e.g. 65) may mean basement level</p>
        </div>
        <div className="wireframe-solid">
          <p className="font-bold">🪧 Look for Signage</p>
          <p className="text-xs">Floor signs near elevators and stairwells</p>
        </div>
      </div>
    </div>

    <button className="wireframe-button w-full" onClick={() => onNavigate("floorSelection")}>
      ← Back to floor selection
    </button>

    <p className="wireframe-annotation text-center">Overlay — swap back after reading</p>
  </div>
);

export default ScreenOrientationHelp;
