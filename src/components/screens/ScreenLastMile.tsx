import React, { useState } from "react";
import { MapPin, MoveRight, Target, ArrowLeft, ChevronRight, HelpCircle } from "lucide-react";

const checkpoints = [
  {
    title: "Corridor start",
    description: "Room numbers start at 1001 on your left",
    imageLabel: "Corridor entrance - Room 1001 visible",
    Icon: MapPin,
  },
  {
    title: "Keep walking",
    description: "Numbers increasing: 1005... 1008...",
    imageLabel: "Mid-corridor - arrow pointing forward",
    Icon: MoveRight,
  },
  {
    title: "Passing 1010",
    description: "Room 1010 on your right, keep going",
    imageLabel: "Room 1010 sign - arrow ahead",
    Icon: MoveRight,
  },
  {
    title: "Almost there",
    description: "You should see 1015, 1016 on your right",
    imageLabel: "Room 1016 sign - arrow to next door",
    Icon: Target,
  },
  {
    title: "Room 1017",
    description: "Next door on the right - you're here!",
    imageLabel: "Room 1017 door - you are here",
    Icon: Target,
  },
];

const ScreenLastMile: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => {
  const [step, setStep] = useState(0);
  const current = checkpoints[step];
  const isLast = step === checkpoints.length - 1;

  return (
    <div className="space-y-4">
      <div className="px-1">
        <h2 className="transit-hero-text">Find your room</h2>
      </div>

      {/* Step counter badge */}
      <div className="transit-action-banner">
        <current.Icon className="w-6 h-6" />
        <div>
          <span className="banner-text">Step {step + 1}</span>
          <span className="text-sm opacity-80 ml-1">of {checkpoints.length}</span>
        </div>
      </div>

      {/* 5-step progress bar */}
      <div className="flex items-center gap-1.5">
        {checkpoints.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-full transition-all ${i < step
                ? "bg-[hsl(var(--transit-green))]"
                : i === step
                  ? "bg-[hsl(var(--primary))]"
                  : "bg-[hsl(var(--border))]"
              }`}
          />
        ))}
      </div>

      {/* Checkpoint image - shown directly with arrow */}
      <div className="transit-img-placeholder relative">
        <div className="text-center">
          <current.Icon className="w-8 h-8 mx-auto text-muted-foreground mb-1" />
          <p className="text-xs text-muted-foreground">{current.imageLabel}</p>
        </div>
        {/* Direction arrow overlay */}
        {!isLast && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <ChevronRight className="w-12 h-12 text-[hsl(var(--primary))] opacity-60" />
          </div>
        )}
      </div>

      {/* Current checkpoint info */}
      <div className="transit-card">
        <h3 className="font-bold text-xl">{current.title}</h3>
        <p className="text-sm text-muted-foreground mt-1.5">{current.description}</p>
      </div>

      {/* Numbering hint */}
      <div className="transit-card text-sm text-muted-foreground">
        <span className="font-bold text-foreground">Numbering hint:</span> 10xx = Floor 1, rooms increase left to right
      </div>

      {/* Navigation */}
      <div className="flex gap-2">
        <button
          className="transit-btn-outline flex-1"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          style={step === 0 ? { opacity: 0.4 } : {}}
        >
          Prev
        </button>
        {isLast ? (
          <button className="transit-btn flex-1" onClick={() => onNavigate("success")}>
            I'm here!
          </button>
        ) : (
          <button className="transit-btn flex-1 flex items-center justify-center gap-1" onClick={() => setStep(step + 1)}>
            Next <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("cantFind")}>
        <HelpCircle className="w-4 h-4" /> I can't find it
      </button>

      <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("tunnel")}>
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
    </div>
  );
};

export default ScreenLastMile;
