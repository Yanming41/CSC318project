import React from "react";
import { WIZARD_JUMPS, HAPPY_PATH, SCREENS } from "@/data/screenData";

interface WizardPanelProps {
  onNavigate: (id: string) => void;
  currentScreen: string;
}

const WizardPanel: React.FC<WizardPanelProps> = ({ onNavigate, currentScreen }) => {
  const currentIdx = HAPPY_PATH.indexOf(currentScreen);

  return (
    <div className="wizard-panel">
      <h3 className="font-sketch text-lg mb-2">🧙 Wizard Controls</h3>

      {/* Happy path navigation */}
      <div className="mb-3">
        <p className="text-xs font-bold mb-1">Happy Path:</p>
        <div className="flex flex-wrap gap-1">
          {HAPPY_PATH.map((id) => (
            <button
              key={id}
              className={`wireframe-chip text-[10px] ${currentScreen === id ? "bg-foreground text-primary-foreground" : ""}`}
              onClick={() => onNavigate(id)}
            >
              {SCREENS[id].screenNumber}. {SCREENS[id].title.split("/")[0].trim().slice(0, 12)}
            </button>
          ))}
        </div>
      </div>

      {/* Jump targets */}
      <div>
        <p className="text-xs font-bold mb-1">Jump to Alt/Error States:</p>
        <div className="flex flex-wrap gap-1">
          {WIZARD_JUMPS.map((jump) => (
            <button
              key={jump.target}
              className={`wireframe-chip text-[10px] ${currentScreen === jump.target ? "bg-foreground text-primary-foreground" : ""}`}
              onClick={() => onNavigate(jump.target)}
            >
              {jump.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WizardPanel;
