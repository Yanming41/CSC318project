import React from "react";
import { ClipboardList, Home } from "lucide-react";

const ScreenTaskPack: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 px-1">
      <ClipboardList className="w-5 h-5 text-[hsl(var(--primary))]" />
      <h2 className="transit-hero-text">EES Task Pack</h2>
    </div>
    <p className="text-sm text-muted-foreground px-1">3 goal-based tasks for Expert Evaluation Session</p>

    <div className="transit-card">
      <h3 className="font-bold text-lg mb-1">Task A - Abbreviation Resolution</h3>
      <p className="text-xs text-muted-foreground mb-2">Tests: DR1</p>
      <div className="border-l-2 border-[hsl(var(--primary))] pl-3">
        <p className="text-sm font-medium">Scenario:</p>
        <p className="text-sm text-muted-foreground">You're running late. Your schedule shows "WI 1017" - you've never been to this building.</p>
        <p className="text-sm font-medium mt-2">Goal:</p>
        <p className="text-sm text-muted-foreground">Figure out which building you need.</p>
      </div>
    </div>

    <div className="transit-card">
      <h3 className="font-bold text-lg mb-1">Task B - Entrance + Indoor</h3>
      <p className="text-xs text-muted-foreground mb-2">Tests: DR2 + DR3</p>
      <div className="border-l-2 border-[hsl(var(--primary))] pl-3">
        <p className="text-sm font-medium">Scenario:</p>
        <p className="text-sm text-muted-foreground">You've arrived at Wilson Hall. Multiple entrances. You need room 1017.</p>
        <p className="text-sm font-medium mt-2">Goal:</p>
        <p className="text-sm text-muted-foreground">Choose entrance and find your floor direction.</p>
      </div>
    </div>

    <div className="transit-card">
      <h3 className="font-bold text-lg mb-1">Task C - Tunnel + Last Mile</h3>
      <p className="text-xs text-muted-foreground mb-2">Tests: DR4 + DR5</p>
      <div className="border-l-2 border-[hsl(var(--primary))] pl-3">
        <p className="text-sm font-medium">Scenario:</p>
        <p className="text-sm text-muted-foreground">Route goes through a connector. You're not comfortable in narrow spaces but running late.</p>
        <p className="text-sm font-medium mt-2">Goal:</p>
        <p className="text-sm text-muted-foreground">Navigate through (or around) and find the room.</p>
      </div>
    </div>

    <div className="transit-card bg-[hsl(var(--accent))]">
      <p className="text-xs font-semibold">Facilitator Reminder:</p>
      <p className="text-xs text-muted-foreground mt-1">Tasks are goal-based. Do NOT give step-by-step instructions. Let participants explore naturally.</p>
    </div>

    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("home")}>
      <Home className="w-4 h-4" /> Back to Start
    </button>
  </div>
);

export default ScreenTaskPack;
