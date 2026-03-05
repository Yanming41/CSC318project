import React, { useState } from "react";

const ScreenSuccess: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="text-5xl mb-2">🎉</div>
        <h2 className="font-sketch text-3xl">Arrived!</h2>
        <p className="text-lg mt-1">WI 1017 — Wilson Hall</p>
      </div>

      <div className="wireframe-solid text-center">
        <p className="text-sm font-bold mb-3">How confident did you feel?</p>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-10 h-10 border-2 border-foreground rounded-full text-lg font-bold transition-all ${
                rating === n ? "bg-foreground text-primary-foreground" : "hover:bg-secondary"
              }`}
              onClick={() => setRating(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">1 = Not confident → 5 = Very confident</p>
      </div>

      {rating && (
        <div className="wireframe-box text-center">
          <p className="text-sm">Thanks! You rated: <strong>{rating}/5</strong></p>
        </div>
      )}

      <button className="wireframe-button w-full" onClick={() => onNavigate("home")}>
        🏠 Start New Wayfinding
      </button>

      <p className="wireframe-annotation text-center">Screen 13 · Success · Collect test data</p>
    </div>
  );
};

export default ScreenSuccess;
