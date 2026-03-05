import React from "react";

const ScreenEntranceSelection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <h2 className="font-sketch text-xl text-center">🚪 Choose Your Entrance</h2>
    <p className="text-xs text-muted-foreground text-center">Wilson Hall has 3 entrances</p>

    {/* Simple building outline */}
    <div className="wireframe-box text-center py-4">
      <div className="border-2 border-foreground mx-auto w-48 h-32 relative">
        <span className="absolute -top-3 left-4 bg-card px-1 text-xs font-bold">Wilson Hall</span>
        <span className="absolute top-1/2 -left-3 bg-card px-1 text-[10px]">A</span>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card px-1 text-[10px]">B</span>
        <span className="absolute top-1/2 -right-3 bg-card px-1 text-[10px]">C</span>
      </div>
      <p className="wireframe-annotation mt-2">[Building outline with entrance markers]</p>
    </div>

    {/* Entrance cards */}
    {[
      { label: "A – Classroom Entrance", desc: "Main lobby, directory inside", tag: "✅ Recommended" },
      { label: "B – Residence Entrance", desc: "Student residence wing", tag: "⚠ Not for classes" },
      { label: "C – Loading / Service", desc: "Seasonal closure risk", tag: "❌ May be locked" },
    ].map((e, i) => (
      <button
        key={i}
        className="wireframe-card w-full text-left"
        onClick={() => onNavigate("entryConfirm")}
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold">{e.label}</p>
            <p className="text-xs text-muted-foreground">{e.desc}</p>
          </div>
          <span className="text-[10px] whitespace-nowrap">{e.tag}</span>
        </div>
      </button>
    ))}

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("entranceWhy")}>
      ❓ Why this entrance?
    </button>

    <button className="wireframe-chip text-xs" onClick={() => onNavigate("resolution")}>
      ← Back
    </button>
  </div>
);

export default ScreenEntranceSelection;
