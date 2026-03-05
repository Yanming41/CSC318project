import React, { useState } from "react";
import { CheckCircle2, Home } from "lucide-react";

const ScreenSuccess: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="space-y-5">
      {/* Success icon */}
      <div className="text-center pt-4">
        <div className="w-20 h-20 rounded-full bg-[hsl(var(--transit-green))] mx-auto flex items-center justify-center mb-4 shadow-lg">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight">You've arrived!</h2>
        <p className="text-lg text-muted-foreground mt-1 font-medium">WI 1017 - Wilson Hall</p>
      </div>

      {/* Confidence rating */}
      <div className="transit-card text-center">
        <p className="text-base font-semibold mb-3">How confident did you feel?</p>
        <div className="flex justify-center gap-2.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              className={`w-12 h-12 rounded-full text-base font-bold transition-all ${rating === n
                  ? "bg-[hsl(var(--primary))] text-white shadow-md scale-110"
                  : "bg-[hsl(var(--secondary))] text-foreground hover:bg-[hsl(var(--muted))]"
                }`}
              onClick={() => setRating(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-3">1 = Not confident  /  5 = Very confident</p>
      </div>

      {rating && (
        <div className="transit-action-banner-green justify-center">
          <CheckCircle2 className="w-5 h-5" />
          <span className="banner-text">Thanks! You rated: {rating}/5</span>
        </div>
      )}

      <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("home")}>
        <Home className="w-5 h-5" /> New navigation
      </button>
    </div>
  );
};

export default ScreenSuccess;
