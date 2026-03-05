import React, { useState } from "react";
import { CheckCircle2, Home } from "lucide-react";

const ScreenSuccess: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      {/* Success icon */}
      <div className="text-center pt-4">
        <div className="w-16 h-16 rounded-full bg-[hsl(145,60%,42%)] mx-auto flex items-center justify-center mb-3">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-semibold">You've arrived!</h2>
        <p className="text-base text-muted-foreground mt-1">WI 1017 - Wilson Hall</p>
      </div>

      {/* Confidence rating */}
      <div className="transit-card text-center">
        <p className="text-sm font-medium mb-3">How confident did you feel?</p>
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-11 h-11 rounded-full text-sm font-semibold transition-all ${
                rating === n
                  ? "bg-[hsl(174,62%,38%)] text-white"
                  : "bg-[hsl(var(--secondary))] text-foreground hover:bg-[hsl(var(--muted))]"
              }`}
              onClick={() => setRating(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">1 = Not confident  /  5 = Very confident</p>
      </div>

      {rating && (
        <div className="transit-card text-center">
          <p className="text-sm">Thanks! You rated: <span className="font-semibold">{rating}/5</span></p>
        </div>
      )}

      <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("home")}>
        <Home className="w-4 h-4" /> New navigation
      </button>
    </div>
  );
};

export default ScreenSuccess;
