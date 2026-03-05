import React from "react";

const ScreenWrongEntrance: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-box text-center">
      <div className="text-3xl mb-2">⚠️</div>
      <h2 className="font-sketch text-xl">Wrong Entrance Detected</h2>
      <p className="text-sm mt-1">You might be in the <strong>Residence Wing</strong></p>
    </div>

    <div className="wireframe-solid">
      <p className="text-sm font-bold">Signs you're in the wrong area:</p>
      <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
        <li>Hallway has apartment-style doors</li>
        <li>No room numbers in 10xx range</li>
        <li>Keycard-required doors ahead</li>
      </ul>
    </div>

    <div className="wireframe-box">
      <p className="text-sm font-bold">🔙 Backtrack Plan:</p>
      <p className="text-sm mt-1">Turn around → Exit → Walk left along building → Enter through Entrance A (glass doors with "Wilson Hall" sign)</p>
    </div>

    <div className="space-y-2">
      <button className="wireframe-button w-full" onClick={() => onNavigate("entranceSelection")}>
        ← Go back to entrance selection
      </button>
      <button className="wireframe-button-outline w-full" onClick={() => onNavigate("entryConfirm")}>
        I found the right entrance →
      </button>
    </div>

    <p className="wireframe-annotation text-center">Error recovery — wizard can swap here</p>
  </div>
);

export default ScreenWrongEntrance;
