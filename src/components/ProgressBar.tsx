import React from "react";
import { NAV_STAGES, SCREEN_STAGE } from "@/data/screenData";

interface ProgressBarProps {
  currentScreen: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentScreen }) => {
  const currentStage = SCREEN_STAGE[currentScreen] ?? 0;

  return (
    <div className="px-4 py-2 bg-card">
      <div className="flex items-center gap-1">
        {NAV_STAGES.map((stage) => (
          <div key={stage.id} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full h-1.5 rounded-full transition-all ${
                stage.id < currentStage
                  ? "bg-[hsl(145,60%,42%)]"
                  : stage.id === currentStage
                  ? "bg-[hsl(174,62%,38%)]"
                  : "bg-[hsl(var(--border))]"
              }`}
            />
            <span
              className={`text-[10px] font-medium ${
                stage.id <= currentStage
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {stage.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
