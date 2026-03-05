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
    title: "Home",
    screenNumber: 1,
    designReqs: ["DR1"],
    jobStories: ["JS1"],
    facilitator: {
      goal: "User enters building code + room number or selects from map.",
      say: "You need to get to class. Your timetable shows 'WI 1017'.",
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
      goal: "System auto-resolves abbreviation. User confirms building.",
      say: "The system found a match. Is this the right building?",
      dontSay: "Don't confirm the building for them.",
    },
  },
  ambiguous: {
    id: "ambiguous",
    title: "Multiple Matches",
    screenNumber: 3,
    designReqs: ["DR1"],
    jobStories: ["JS1"],
    facilitator: {
      goal: "User picks correct building from multiple matches.",
      say: "There are multiple matches for that code.",
      dontSay: "Don't tell them which one to pick.",
    },
  },
  entranceSelection: {
    id: "entranceSelection",
    title: "Choose Entrance",
    screenNumber: 4,
    designReqs: ["DR2"],
    jobStories: ["JS2"],
    facilitator: {
      goal: "User selects correct entrance using visual map.",
      say: "You've arrived at the building. Which entrance will you use?",
      dontSay: "Don't point out which entrance is correct.",
    },
  },
  entryConfirm: {
    id: "entryConfirm",
    title: "You're Inside",
    screenNumber: 5,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User sees lobby photo and indoor start info directly.",
      say: "You just entered the building. Where do you go next?",
      dontSay: "Don't tell them which floor or direction.",
    },
  },
  floorSelection: {
    id: "floorSelection",
    title: "Floor & Direction",
    screenNumber: 6,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User selects floor and sees corridor direction.",
      say: "You need to decide which floor to go to.",
      dontSay: "Don't give the floor number.",
    },
  },
  tunnel: {
    id: "tunnel",
    title: "Connector",
    screenNumber: 7,
    designReqs: ["DR4"],
    jobStories: ["JS4"],
    facilitator: {
      goal: "User navigates connector with reassurance cues.",
      say: "Your route goes through a connector. Continue when ready.",
      dontSay: "Don't minimize their anxiety or rush them.",
    },
  },
  tunnelAlt: {
    id: "tunnelAlt",
    title: "Alternative Route",
    screenNumber: 8,
    designReqs: ["DR4"],
    jobStories: ["JS4"],
    facilitator: {
      goal: "User sees above-ground alternative.",
      say: "There's an alternative route available.",
      dontSay: "Don't recommend one route over another.",
    },
  },
  lastMile: {
    id: "lastMile",
    title: "Find Your Room",
    screenNumber: 9,
    designReqs: ["DR5"],
    jobStories: ["JS5"],
    facilitator: {
      goal: "User follows 5 checkpoints with inline images to find room.",
      say: "You're almost there. Follow the checkpoints.",
      dontSay: "Don't tell them which side of the hall.",
    },
  },
  cantFind: {
    id: "cantFind",
    title: "Can't Find Room",
    screenNumber: 10,
    designReqs: ["DR5"],
    jobStories: ["JS5"],
    facilitator: {
      goal: "User uses recovery options when lost near room.",
      say: "What would you do if you can't find the room?",
      dontSay: "Don't give recovery steps.",
    },
  },
  success: {
    id: "success",
    title: "Arrived",
    screenNumber: 11,
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
    title: "Wrong Entrance",
    screenNumber: 12,
    designReqs: ["DR2", "DR3"],
    jobStories: ["JS2", "JS3"],
    facilitator: {
      goal: "User recovers from wrong entrance choice.",
      say: "Something doesn't look right. What do you do?",
      dontSay: "Don't tell them they're in the wrong place.",
    },
  },
  lostIndoors: {
    id: "lostIndoors",
    title: "Lost Indoors",
    screenNumber: 13,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User re-orients using current location cues.",
      say: "You seem lost. What would you do?",
      dontSay: "Don't direct them back.",
    },
  },
  entranceWhy: {
    id: "entranceWhy",
    title: "Why This Entrance",
    screenNumber: 14,
    designReqs: ["DR2"],
    jobStories: ["JS2"],
    facilitator: {
      goal: "User understands entrance recommendation rationale.",
      say: "You can see more info about an entrance.",
      dontSay: "Don't read the explanation aloud.",
    },
  },
  orientationHelp: {
    id: "orientationHelp",
    title: "Orientation Help",
    screenNumber: 15,
    designReqs: ["DR3"],
    jobStories: ["JS3"],
    facilitator: {
      goal: "User uses landmark cues to orient.",
      say: "Not sure? You can get orientation help.",
      dontSay: "Don't describe the landmarks.",
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

export const WIZARD_JUMPS = [
  { label: "Multiple Matches", target: "ambiguous" },
  { label: "Wrong Entrance", target: "wrongEntrance" },
  { label: "Alt Route", target: "tunnelAlt" },
  { label: "Can't Find Room", target: "cantFind" },
  { label: "Lost Indoors", target: "lostIndoors" },
  { label: "Why Entrance?", target: "entranceWhy" },
  { label: "Orientation", target: "orientationHelp" },
  { label: "Task Pack", target: "taskPack" },
];

export const NAV_STAGES = [
  { id: 1, label: "Building" },
  { id: 2, label: "Entrance" },
  { id: 3, label: "Floor" },
  { id: 4, label: "Route" },
  { id: 5, label: "Room" },
];

export const SCREEN_STAGE: Record<string, number> = {
  home: 1,
  resolution: 1,
  ambiguous: 1,
  entranceSelection: 2,
  entranceWhy: 2,
  entryConfirm: 3,
  floorSelection: 3,
  orientationHelp: 3,
  tunnel: 4,
  tunnelAlt: 4,
  lastMile: 5,
  cantFind: 5,
  success: 5,
  wrongEntrance: 2,
  lostIndoors: 3,
};

export const BUILDING_DB: Record<string, { name: string; address: string; area: string }[]> = {
  WI: [{ name: "Wilson Hall", address: "73 St. George St", area: "Central Campus" }],
  SS: [{ name: "Sidney Smith Hall", address: "100 St. George St", area: "Central Campus" }],
  BA: [
    { name: "Bahen Centre", address: "40 St. George St", area: "Central Campus" },
    { name: "Bancroft Building (hypothetical)", address: "21 Sussex Ave", area: "North Campus" },
  ],
  UC: [{ name: "University College", address: "15 King's College Cir", area: "Central Campus" }],
  MP: [{ name: "McLennan Physical Labs", address: "60 St. George St", area: "Central Campus" }],
  MY: [{ name: "Myhal Centre", address: "55 St. George St", area: "Central Campus" }],
  SF: [{ name: "Sandford Fleming Building", address: "10 King's College Rd", area: "Central Campus" }],
  GB: [{ name: "Galbraith Building", address: "35 St. George St", area: "Central Campus" }],
  RW: [{ name: "Robarts Library", address: "130 St. George St", area: "Central Campus" }],
  EX: [{ name: "Exam Centre", address: "255 McCaul St", area: "West Campus" }],
};
