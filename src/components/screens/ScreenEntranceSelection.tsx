import React from "react";
import { DoorOpen, CheckCircle2, AlertTriangle, XCircle, HelpCircle, ArrowLeft } from "lucide-react";

const entrances = [
  {
    label: "Entrance A",
    sublabel: "Classroom Entrance",
    desc: "Main lobby with directory",
    badge: "Recommended",
    badgeClass: "transit-badge-success",
    Icon: CheckCircle2,
  },
  {
    label: "Entrance B",
    sublabel: "Residence Wing",
    desc: "Student residence area",
    badge: "Not for classes",
    badgeClass: "transit-badge-warning",
    Icon: AlertTriangle,
  },
  {
    label: "Entrance C",
    sublabel: "Service Door",
    desc: "May be locked after 5 PM",
    badge: "Restricted",
    badgeClass: "transit-badge-danger",
    Icon: XCircle,
  },
];

const ScreenEntranceSelection: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="px-1">
      <h2 className="transit-hero-text">Choose your entrance</h2>
      <p className="text-sm text-muted-foreground mt-1">Wilson Hall has 3 entrances</p>
    </div>

    {/* Building map with entrance pins */}
    <div className="transit-card">
      <div className="relative bg-[hsl(var(--secondary))] rounded-xl" style={{ height: 140 }}>
        {/* Simplified building outline */}
        <div className="absolute inset-4 border-2 border-[hsl(var(--muted-foreground))] rounded-lg opacity-40" />
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-muted-foreground">Wilson Hall</span>
        {/* Entrance markers */}
        <div className="absolute top-1/2 left-2 -translate-y-1/2 w-7 h-7 rounded-full bg-[hsl(152,72%,40%)] flex items-center justify-center text-white text-xs font-bold shadow-md">A</div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[hsl(28,95%,52%)] flex items-center justify-center text-white text-xs font-bold shadow-md">B</div>
        <div className="absolute top-1/2 right-2 -translate-y-1/2 w-7 h-7 rounded-full bg-[hsl(4,80%,52%)] flex items-center justify-center text-white text-xs font-bold shadow-md">C</div>
      </div>
    </div>

    {/* Entrance options */}
    <div className="space-y-2.5">
      {entrances.map((e, i) => (
        <button
          key={i}
          className="transit-card-interactive w-full text-left"
          onClick={() => onNavigate("entryConfirm")}
        >
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--accent))] flex items-center justify-center flex-shrink-0">
              <DoorOpen className="w-6 h-6 text-[hsl(var(--accent-foreground))]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-base">{e.label}</p>
                <span className={e.badgeClass}>{e.badge}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">{e.sublabel} - {e.desc}</p>
            </div>
          </div>
        </button>
      ))}
    </div>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("entranceWhy")}>
      <HelpCircle className="w-4 h-4" /> Why this entrance?
    </button>

    <button className="transit-btn-ghost w-full flex items-center justify-center gap-1" onClick={() => onNavigate("resolution")}>
      <ArrowLeft className="w-4 h-4" /> Back
    </button>
  </div>
);

export default ScreenEntranceSelection;
