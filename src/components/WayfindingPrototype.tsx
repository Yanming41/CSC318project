import React, { useState, useCallback } from "react";
import { SCREENS, HAPPY_PATH, WIZARD_JUMPS, type ScreenData } from "@/data/screenData";
import ScreenHome from "@/components/screens/ScreenHome";
import ScreenResolution from "@/components/screens/ScreenResolution";
import ScreenAmbiguous from "@/components/screens/ScreenAmbiguous";
import ScreenEntranceSelection from "@/components/screens/ScreenEntranceSelection";
import ScreenEntranceWhy from "@/components/screens/ScreenEntranceWhy";
import ScreenEntryConfirm from "@/components/screens/ScreenEntryConfirm";
import ScreenFloorSelection from "@/components/screens/ScreenFloorSelection";
import ScreenOrientationHelp from "@/components/screens/ScreenOrientationHelp";
import ScreenTunnel from "@/components/screens/ScreenTunnel";
import ScreenTunnelAlt from "@/components/screens/ScreenTunnelAlt";
import ScreenLastMile from "@/components/screens/ScreenLastMile";
import ScreenCantFind from "@/components/screens/ScreenCantFind";
import ScreenSuccess from "@/components/screens/ScreenSuccess";
import ScreenWrongEntrance from "@/components/screens/ScreenWrongEntrance";
import ScreenLostIndoors from "@/components/screens/ScreenLostIndoors";
import ScreenTaskPack from "@/components/screens/ScreenTaskPack";
import FacilitatorPanel from "@/components/FacilitatorPanel";
import WizardPanel from "@/components/WizardPanel";

const SCREEN_COMPONENTS: Record<string, React.FC<{ onNavigate: (id: string) => void }>> = {
  home: ScreenHome,
  resolution: ScreenResolution,
  ambiguous: ScreenAmbiguous,
  entranceSelection: ScreenEntranceSelection,
  entranceWhy: ScreenEntranceWhy,
  entryConfirm: ScreenEntryConfirm,
  floorSelection: ScreenFloorSelection,
  orientationHelp: ScreenOrientationHelp,
  tunnel: ScreenTunnel,
  tunnelAlt: ScreenTunnelAlt,
  lastMile: ScreenLastMile,
  cantFind: ScreenCantFind,
  success: ScreenSuccess,
  wrongEntrance: ScreenWrongEntrance,
  lostIndoors: ScreenLostIndoors,
  taskPack: ScreenTaskPack,
};

const WayfindingPrototype: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [showFacilitator, setShowFacilitator] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [printMode, setPrintMode] = useState(false);

  const screenData = SCREENS[currentScreen];
  const ScreenComponent = SCREEN_COMPONENTS[currentScreen];

  const handleNavigate = useCallback((id: string) => {
    setCurrentScreen(id);
  }, []);

  if (printMode) {
    return (
      <div className="p-4">
        <div className="no-print mb-4 flex gap-2">
          <button className="wireframe-button-outline" onClick={() => setPrintMode(false)}>
            ← Exit Print Mode
          </button>
          <button className="wireframe-button" onClick={() => window.print()}>
            🖨 Print
          </button>
        </div>
        {Object.entries(SCREEN_COMPONENTS).map(([id, Component]) => {
          const data = SCREENS[id];
          return (
            <div key={id} className="screen-container mb-8" style={{ maxWidth: "100%", minHeight: "auto" }}>
              <div className="screen-header">
                <span className="font-sketch text-lg">Screen {data.screenNumber}: {data.title}</span>
                <span className="wireframe-annotation">{data.designReqs.join(", ")} | {data.jobStories.join(", ")}</span>
              </div>
              <div className="screen-body pb-4">
                <Component onNavigate={() => {}} />
              </div>
              <div className="p-3 border-t-2 border-dashed border-foreground">
                <p className="wireframe-annotation">Facilitator Goal: {data.facilitator.goal}</p>
                <p className="wireframe-annotation">Say: "{data.facilitator.say}"</p>
                <p className="wireframe-annotation">Don't say: "{data.facilitator.dontSay}"</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {/* Top bar */}
      <div className="no-print max-w-sm mx-auto mb-4 flex flex-wrap items-center gap-2">
        <h1 className="font-sketch text-2xl flex-1">🏫 Campus Wayfinding Prototype</h1>
        <button
          className={`wireframe-chip text-xs ${showFacilitator ? "bg-foreground text-primary-foreground" : ""}`}
          onClick={() => setShowFacilitator(!showFacilitator)}
        >
          📋 Facilitator
        </button>
        <button
          className={`wireframe-chip text-xs ${showWizard ? "bg-foreground text-primary-foreground" : ""}`}
          onClick={() => setShowWizard(!showWizard)}
        >
          🧙 Wizard
        </button>
        <button className="wireframe-chip text-xs" onClick={() => setPrintMode(true)}>
          🖨 Print
        </button>
      </div>

      {/* Screen */}
      <div className="screen-container">
        <div className="screen-header">
          <span className="font-sketch text-sm">Screen {screenData.screenNumber}</span>
          <span className="font-sketch text-sm">{screenData.title}</span>
          <div className="flex gap-1">
            {screenData.designReqs.map((dr) => (
              <span key={dr} className="wireframe-status text-[10px]">{dr}</span>
            ))}
          </div>
        </div>

        <div className="screen-body pb-20">
          {ScreenComponent && <ScreenComponent onNavigate={handleNavigate} />}
        </div>
      </div>

      {/* Facilitator Panel */}
      {showFacilitator && (
        <div className="no-print max-w-sm mx-auto">
          <FacilitatorPanel data={screenData} />
        </div>
      )}

      {/* Wizard Panel */}
      {showWizard && (
        <div className="no-print max-w-sm mx-auto">
          <WizardPanel
            onNavigate={handleNavigate}
            currentScreen={currentScreen}
          />
        </div>
      )}
    </div>
  );
};

export default WayfindingPrototype;
