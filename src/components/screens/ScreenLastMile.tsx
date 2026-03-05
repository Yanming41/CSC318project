import React, { useState } from "react";

const checkpoints = [
  {
    title: "Checkpoint 1: Corridor Start",
    description: "You should see room numbers starting at 1001 on your left.",
    emoji: "📍",
    imageLabel: "[Photo: corridor start, room 1001 visible]",
  },
  {
    title: "Checkpoint 2: Mid-Corridor",
    description: "Room numbers increasing: 1008... 1012... Keep going.",
    emoji: "🚶",
    imageLabel: "[Photo: mid-corridor, room 1012 sign]",
  },
  {
    title: "Checkpoint 3: Near Room",
    description: "You should see 1015, 1016 on your right. 1017 is the next door.",
    emoji: "🎯",
    imageLabel: "[Photo: door with room 1016 sign, arrow to 1017]",
  },
];

const ScreenLastMile: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [step, setStep] = useState(0);
  const current = checkpoints[step];
  const isLast = step === checkpoints.length - 1;

  return (
    <div className="space-y-4">
      <h2 className="font-sketch text-xl text-center">🎯 Last-Meter Confirmation</h2>

      {/* Progress */}
      <div className="wireframe-progress justify-center">
        {checkpoints.map((_, i) => (
          <div key={i} className={`wireframe-progress-dot ${i <= step ? "active" : ""}`} />
        ))}
        <span className="text-xs ml-2">Checkpoint {step + 1} of {checkpoints.length}</span>
      </div>

      {/* Current checkpoint */}
      <div className="wireframe-solid">
        <div className="text-center text-3xl mb-2">{current.emoji}</div>
        <h3 className="font-sketch text-lg text-center">{current.title}</h3>
        <p className="text-sm mt-2 text-center">{current.description}</p>
      </div>

      {/* Image placeholder */}
      <div className="wireframe-box text-center py-6">
        <div className="text-4xl">📸</div>
        <p className="text-xs text-muted-foreground">{current.imageLabel}</p>
      </div>

      {/* Numbering explanation */}
      <div className="wireframe-box">
        <p className="text-xs">💡 <strong>Numbering hint:</strong> 10xx = Floor 1, rooms increase left to right</p>
      </div>

      {/* Navigation */}
      <div className="flex gap-2">
        <button
          className="wireframe-button-outline flex-1"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
        >
          ← Prev
        </button>
        {isLast ? (
          <button className="wireframe-button flex-1" onClick={() => onNavigate("success")}>
            🏁 Finish — I'm here!
          </button>
        ) : (
          <button className="wireframe-button flex-1" onClick={() => setStep(step + 1)}>
            Next →
          </button>
        )}
      </div>

      <button className="wireframe-chip text-xs" onClick={() => onNavigate("cantFind")}>
        😕 I can't find it
      </button>

      <button className="wireframe-chip text-xs" onClick={() => onNavigate("tunnel")}>
        ← Back
      </button>
    </div>
  );
};

export default ScreenLastMile;
