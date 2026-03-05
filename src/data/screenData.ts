import React from "react";

// Screen data types
export interface ScreenData {
  id: string;
  title: string;
  screenNumber: number;
  designReqs: string[];
  jobStories: string[];
  facilitator: {
    goal: string;
    say: string;
    dontSay: string;
  };
}

export const SCREENS: Record<string, ScreenData> = {
  home: {
    id: "home",
    title: "Home / Quick Start",
    screenNumber: 1,
    designReqs: ["DR1"],
    jobStories: ["JS1"],
    facilitator: {
      goal: "User enters building code + room number to start wayfinding.",
      say: "You need to get to class. You only know the code 'WI 1017'.",
      dontSay: "Don't explain what WI stands for or where to type it.",
    },
  },
  resolution: {
    id: "resolution",
    title: "Building Resolved",
    screenNumber: 2,
    designReqs: ["DR1"],
    jobStories: ["JS1"],
    facilitator: {
      goal: "User confirms the resolved building is correct.",
      say: "The system found a match. Is this the right building?",
      dontSay: "Don't confirm the building for them.",
    },
  },
  ambiguous: {
    id: "ambiguous",
    title: "Ambiguous Abbreviation",
    screenNumber: 3,
    designReqs: ["DR1"],
    jobStories: ["JS1"],
    facilitator: {
      goal: "User disambiguates between multiple building matches.",
      say: "The system found multiple matches for that code.",
      dontSay: "Don't tell them which one to pick.",
    },
  },
  entranceSelection: {
    id: "entranceSelection",
    title: "Entrance Selection",
    screenNumber: 4,
    designReqs: ["DR2"],
    jobStories: ["JS2"],
    facilitator: {
      goal: "User selects the correct entrance for classrooms.",
      say: "You've arrived at the building. Which entrance will you use?",
      dontSay: "Don't point out which entrance is correct.",
    },
  },
  entranceWhy: {
    id: "entranceWhy",
    title: "Why This Entrance? (Overlay)",
    screenNumber: 5,
    designReqs: ["DR2"],
    jobStories: ["JS2"],
    facilitator: {
      goal: "User learns why an entrance is recommended.",
      say: "You can see more info about an entrance.",
      dontSay: "Don't read the explanation aloud.",
    },
  },
  entryConfirm: {
    id: "entryConfirm",
    title: "Entry Confirmation + Indoor Start",
    screenNumber: 6,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User confirms entry and begins indoor orientation.",
      say: "You just entered the building. Where do you go next?",
      dontSay: "Don't tell them which floor or direction.",
    },
  },
  floorSelection: {
    id: "floorSelection",
    title: "Floor Selection + Direction",
    screenNumber: 7,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User selects the correct floor and corridor direction.",
      say: "You need to decide which floor to go to.",
      dontSay: "Don't give the floor number.",
    },
  },
  orientationHelp: {
    id: "orientationHelp",
    title: "Orientation Help (Overlay)",
    screenNumber: 8,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User uses landmark cues to orient themselves.",
      say: "Not sure? You can get orientation help.",
      dontSay: "Don't describe the landmarks.",
    },
  },
  tunnel: {
    id: "tunnel",
    title: "Tunnel / Connector Segment",
    screenNumber: 9,
    designReqs: ["DR4"],
    jobStories: ["JS4"],
    facilitator: {
      goal: "User navigates through a tunnel/connector with reassurance.",
      say: "Your route goes through a connector. Continue when ready.",
      dontSay: "Don't minimize their anxiety or rush them.",
    },
  },
  tunnelAlt: {
    id: "tunnelAlt",
    title: "Safer Alternative Route",
    screenNumber: 10,
    designReqs: ["DR4"],
    jobStories: ["JS4"],
    facilitator: {
      goal: "User can opt for an above-ground route to avoid tunnels.",
      say: "There's an alternative route available.",
      dontSay: "Don't recommend one route over another.",
    },
  },
  lastMile: {
    id: "lastMile",
    title: "Last-Meter Room Confirmation",
    screenNumber: 11,
    designReqs: ["DR5"],
    jobStories: ["JS5"],
    facilitator: {
      goal: "User locates the exact room door.",
      say: "You're almost there. Find the room.",
      dontSay: "Don't tell them which side of the hall.",
    },
  },
  cantFind: {
    id: "cantFind",
    title: "Can't Find Room (Recovery)",
    screenNumber: 12,
    designReqs: ["DR5"],
    jobStories: ["JS5"],
    facilitator: {
      goal: "User recovers from being lost near the room.",
      say: "What would you do if you can't find the room?",
      dontSay: "Don't give recovery steps.",
    },
  },
  success: {
    id: "success",
    title: "Success / Arrived",
    screenNumber: 13,
    designReqs: ["DR5"],
    jobStories: ["JS5"],
    facilitator: {
      goal: "User confirms arrival and rates confidence.",
      say: "You've arrived. How confident did you feel?",
      dontSay: "Don't influence their confidence rating.",
    },
  },
  wrongEntrance: {
    id: "wrongEntrance",
    title: "Wrong Entrance (Error Recovery)",
    screenNumber: 14,
    designReqs: ["DR2", "DR3"],
    jobStories: ["JS2", "JS3"],
    facilitator: {
      goal: "User recovers from entering wrong entrance.",
      say: "Something doesn't look right. What do you do?",
      dontSay: "Don't tell them they're in the wrong place.",
    },
  },
  lostIndoors: {
    id: "lostIndoors",
    title: "Lost Indoors (Error Recovery)",
    screenNumber: 15,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User uses anchor point to re-orient.",
      say: "You seem lost. What would you do?",
      dontSay: "Don't direct them back.",
    },
  },
  taskPack: {
    id: "taskPack",
    title: "EES Task Pack",
    screenNumber: 16,
    designReqs: ["DR1", "DR2", "DR3", "DR4", "DR5"],
    jobStories: ["JS1", "JS2", "JS3", "JS4", "JS5"],
    facilitator: {
      goal: "Reference card for facilitator during testing sessions.",
      say: "Use these tasks for the evaluation session.",
      dontSay: "Don't give step-by-step instructions to participants.",
    },
  },
};

// The main navigation flow (happy path)
export const HAPPY_PATH = [
  "home",
  "resolution",
  "entranceSelection",
  "entryConfirm",
  "floorSelection",
  "tunnel",
  "lastMile",
  "success",
];

// Wizard jump targets
export const WIZARD_JUMPS = [
  { label: "→ Ambiguous Abbreviation", target: "ambiguous" },
  { label: "→ Wrong Entrance", target: "wrongEntrance" },
  { label: "→ Safer Tunnel Route", target: "tunnelAlt" },
  { label: "→ Can't Find Room", target: "cantFind" },
  { label: "→ Lost Indoors", target: "lostIndoors" },
  { label: "→ Entrance Why Overlay", target: "entranceWhy" },
  { label: "→ Orientation Help", target: "orientationHelp" },
  { label: "→ EES Task Pack", target: "taskPack" },
];
