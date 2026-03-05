import React from "react";
import { type ScreenData } from "@/data/screenData";

const FacilitatorPanel: React.FC<{ data: ScreenData }> = ({ data }) => (
  <div className="facilitator-panel">
    <h3 className="font-sketch text-lg mb-2">📋 Facilitator Notes</h3>
    <div className="space-y-2 text-sm">
      <div>
        <span className="font-bold">Goal:</span> {data.facilitator.goal}
      </div>
      <div>
        <span className="font-bold">✅ Say:</span> "{data.facilitator.say}"
      </div>
      <div>
        <span className="font-bold">🚫 Don't say:</span> "{data.facilitator.dontSay}"
      </div>
      <div className="wireframe-annotation">
        Design Reqs: {data.designReqs.join(", ")} | Job Stories: {data.jobStories.join(", ")}
      </div>
    </div>
  </div>
);

export default FacilitatorPanel;
