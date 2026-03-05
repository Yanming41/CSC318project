import React from "react";
import { WIZARD_JUMPS, HAPPY_PATH, SCREENS } from "@/data/screenData";

interface WizardPanelProps {
  onNavigate: (id: string) => void;
  currentScreen: string;
}

const WizardPanel: React.FC<WizardPanelProps> = ({ onNavigate, currentScreen }) => (
  <div className="wizard-panel">
    <h3 className="text-base font-semibold mb-2">Wizard Controls</h3>

    <div className="mb-3">
      <p className="text-xs font-semibold mb-1.5">Happy Path:</p>
      <div className="flex flex-wrap gap-1">
        {HAPPY_PATH.map((id) => (
          <button
            key={id}
            className={`transit-chip text-[10px] ${currentScreen === id ? "active" : ""}`}
            onClick={() => onNavigate(id)}
          >
            {SCREENS[id].screenNumber}. {SCREENS[id].title.slice(0, 14)}
          </button>
        ))}
      </div>
    </div>

    <div>
      <p className="text-xs font-semibold mb-1.5">Alt / Error States:</p>
      <div className="flex flex-wrap gap-1">
        {WIZARD_JUMPS.map((jump) => (
          <button
            key={jump.target}
            className={`transit-chip text-[10px] ${currentScreen === jump.target ? "active" : ""}`}
            onClick={() => onNavigate(jump.target)}
          >
            {jump.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default WizardPanel;
