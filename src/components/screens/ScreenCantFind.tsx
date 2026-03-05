import React from "react";

const ScreenCantFind: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="wireframe-box text-center">
      <h2 className="font-sketch text-xl">😕 Can't Find the Room?</h2>
      <p className="text-sm text-muted-foreground mt-1">Don't worry — try these recovery steps</p>
    </div>

    <div className="space-y-2">
      <button className="wireframe-card w-full text-left" onClick={() => onNavigate("lastMile")}>
        <p className="font-bold">🔍 Check landmark</p>
        <p className="text-xs">Look for nearest visible room number and re-orient</p>
      </button>
      <button className="wireframe-card w-full text-left" onClick={() => onNavigate("entryConfirm")}>
        <p className="font-bold">🔙 Return to anchor</p>
        <p className="text-xs">Go back to the lobby directory and start again</p>
      </button>
      <button className="wireframe-card w-full text-left" onClick={() => onNavigate("orientationHelp")}>
        <p className="font-bold">🧭 Orientation help</p>
        <p className="text-xs">Review room numbering patterns and floor info</p>
      </button>
      <div className="wireframe-card w-full text-left opacity-60">
        <p className="font-bold">🗣 Ask someone (optional)</p>
        <p className="text-xs">Find a student or staff member nearby</p>
      </div>
    </div>

    <p className="wireframe-annotation text-center">Recovery screen for DR5 — wizard can swap here</p>
  </div>
);

export default ScreenCantFind;
