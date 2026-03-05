import React from "react";
import { type ScreenData } from "@/data/screenData";

const FacilitatorPanel: React.FC<{ data: ScreenData }> = ({ data }) => (
  <div className="facilitator-panel">
    <h3 className="text-base font-semibold mb-2">Facilitator Notes</h3>
    <div className="space-y-2 text-sm">
      <div>
        <span className="font-semibold">Goal:</span> {data.facilitator.goal}
      </div>
      <div>
        <span className="font-semibold text-[hsl(var(--transit-green))]">Say:</span> "{data.facilitator.say}"
      </div>
      <div>
        <span className="font-semibold text-[hsl(var(--transit-red))]">Don't say:</span> "{data.facilitator.dontSay}"
      </div>
      <div className="text-xs text-muted-foreground">
        {data.designReqs.join(", ")} | {data.jobStories.join(", ")}
      </div>
    </div>
  </div>
);

export default FacilitatorPanel;
