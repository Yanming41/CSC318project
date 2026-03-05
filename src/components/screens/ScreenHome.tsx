import React, { useState } from "react";

const ScreenHome: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [input, setInput] = useState("");

  const chips = ["WI 1017", "SS 2127", "UC 65"];

  const handleStart = () => {
    if (input.trim()) onNavigate("resolution");
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="font-sketch text-3xl mb-1">🏫 Campus Wayfinder</h2>
        <p className="text-sm text-muted-foreground">UofT St. George Campus</p>
      </div>

      {/* Search input */}
      <div className="wireframe-box">
        <label className="text-sm font-bold block mb-1">Where are you going?</label>
        <input
          className="wireframe-input"
          placeholder="e.g. WI 1017 or BA 2135"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="wireframe-annotation mt-1">Enter building code + room number</p>
      </div>

      {/* Quick chips */}
      <div>
        <p className="text-xs font-bold mb-2">Quick examples:</p>
        <div className="flex gap-2 flex-wrap">
          {chips.map((c) => (
            <button
              key={c}
              className="wireframe-chip"
              onClick={() => {
                setInput(c);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Start button */}
      <button
        className="wireframe-button w-full text-lg"
        onClick={handleStart}
      >
        ▶ Start Wayfinding
      </button>

      <p className="wireframe-annotation text-center">
        Screen 1 · DR1 · JS1 — Abbreviation input
      </p>
    </div>
  );
};

export default ScreenHome;
