import React from "react";

const ScreenTaskPack: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <h2 className="font-sketch text-2xl text-center">📋 EES Task Pack</h2>
    <p className="text-xs text-muted-foreground text-center">3 goal-based tasks for Expert Evaluation Session</p>

    <div className="wireframe-solid">
      <h3 className="font-sketch text-lg">Task A — Abbreviation Resolution</h3>
      <p className="text-xs mb-1 text-muted-foreground">Tests: DR1 (Abbreviation-to-Building Resolution)</p>
      <div className="border-l-2 border-foreground pl-3 mt-2">
        <p className="text-sm font-bold">Scenario:</p>
        <p className="text-sm">You're a student running late for a lecture. Your schedule only shows "WI 1017" — you've never been to this building before and don't know what "WI" stands for.</p>
        <p className="text-sm font-bold mt-2">Goal:</p>
        <p className="text-sm">Figure out which building you need to go to and confirm you have the right one.</p>
      </div>
    </div>

    <div className="wireframe-solid">
      <h3 className="font-sketch text-lg">Task B — Entrance + Indoor Orientation</h3>
      <p className="text-xs mb-1 text-muted-foreground">Tests: DR2 + DR3 (Entrance ID + Indoor Anchors)</p>
      <div className="border-l-2 border-foreground pl-3 mt-2">
        <p className="text-sm font-bold">Scenario:</p>
        <p className="text-sm">You've arrived at Wilson Hall. The building has multiple entrances and some look like they belong to a different facility. You need to get to room 1017.</p>
        <p className="text-sm font-bold mt-2">Goal:</p>
        <p className="text-sm">Choose the correct entrance and figure out which floor and direction to go once inside.</p>
      </div>
    </div>

    <div className="wireframe-solid">
      <h3 className="font-sketch text-lg">Task C — Tunnel + Last Mile</h3>
      <p className="text-xs mb-1 text-muted-foreground">Tests: DR4 + DR5 (Reassurance + Room Confirmation)</p>
      <div className="border-l-2 border-foreground pl-3 mt-2">
        <p className="text-sm font-bold">Scenario:</p>
        <p className="text-sm">Your route to the classroom goes through a tunnel/connector between buildings. You're not comfortable in narrow enclosed spaces but you're already running late.</p>
        <p className="text-sm font-bold mt-2">Goal:</p>
        <p className="text-sm">Navigate through (or around) the connector and find the exact classroom door without wandering or asking others.</p>
      </div>
    </div>

    <div className="wireframe-box">
      <p className="text-xs font-bold">⚠ Facilitator Reminder:</p>
      <p className="text-xs">Tasks are goal-based — do NOT give step-by-step click instructions. Let the participant explore the prototype naturally.</p>
    </div>

    <button className="wireframe-button w-full" onClick={() => onNavigate("home")}>
      🏠 Back to Prototype Start
    </button>
  </div>
);

export default ScreenTaskPack;
