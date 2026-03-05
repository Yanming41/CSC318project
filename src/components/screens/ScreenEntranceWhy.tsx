import React from "react";

const ScreenEntranceWhy: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-box">
      <h2 className="font-sketch text-xl mb-2">❓ Why Entrance A?</h2>
      <div className="space-y-2 text-sm">
        <p>• Entrance A opens directly into the <strong>main lobby</strong></p>
        <p>• You'll see the <strong>building directory</strong> right away</p>
        <p>• Elevator and stairs access nearby</p>
        <p>• Classroom wings branch from this lobby</p>
      </div>
      <div className="wireframe-annotation mt-3">
        Entrance B leads to residence — no classroom access without keycard.
        Entrance C is a service door — may be locked after 5pm.
      </div>
    </div>

    {/* Visual cue */}
    <div className="wireframe-box text-center py-4">
      <div className="text-3xl">🏛</div>
      <p className="text-xs mt-1">Look for: Glass double doors with "Wilson Hall" sign</p>
    </div>

    <button className="wireframe-button w-full" onClick={() => onNavigate("entranceSelection")}>
      ← Back to entrances
    </button>

    <p className="wireframe-annotation text-center">Overlay screen — swap back after reading</p>
  </div>
);

export default ScreenEntranceWhy;
