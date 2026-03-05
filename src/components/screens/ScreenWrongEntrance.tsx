import React from "react";
import { AlertTriangle, ArrowLeft, ChevronRight } from "lucide-react";

const ScreenWrongEntrance: React.FC<{ onNavigate: (id: string) => void }> = ({ onNavigate }) => (
  <div className="space-y-4">
    <div className="flex items-center gap-3 px-1">
      <div className="w-10 h-10 rounded-full bg-[hsl(30,90%,55%,0.12)] flex items-center justify-center flex-shrink-0">
        <AlertTriangle className="w-5 h-5 text-[hsl(30,90%,55%)]" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Wrong entrance</h2>
        <p className="text-sm text-muted-foreground">You may be in the Residence Wing</p>
      </div>
    </div>

    <div className="transit-card">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Signs you're in the wrong area</p>
      <ul className="space-y-1.5 text-sm">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-1.5 flex-shrink-0" />
          Apartment-style doors in hallway
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-1.5 flex-shrink-0" />
          No room numbers in 10xx range
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--muted-foreground))] mt-1.5 flex-shrink-0" />
          Keycard-required doors ahead
        </li>
      </ul>
    </div>

    <div className="transit-card">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">How to recover</p>
      <p className="text-sm">Turn around, exit, walk left along building, enter through Entrance A (glass doors with "Wilson Hall" sign)</p>
    </div>

    <button className="transit-btn w-full flex items-center justify-center gap-2" onClick={() => onNavigate("entranceSelection")}>
      <ArrowLeft className="w-4 h-4" /> Go back to entrance selection
    </button>

    <button className="transit-btn-outline w-full flex items-center justify-center gap-2" onClick={() => onNavigate("entryConfirm")}>
      I found the right entrance <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

export default ScreenWrongEntrance;
