import { CourtCase } from "@/data/cases";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

interface CaseCardProps {
  courtCase: CourtCase;
  onClick: () => void;
}

const CaseCard = ({ courtCase, onClick }: CaseCardProps) => {
  const correct = courtCase.prediction === courtCase.actualOutcome;

  return (
    <button
      onClick={onClick}
      className="group w-full rounded-lg border border-border bg-card p-5 text-left transition-all duration-200 hover:border-accent hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <Badge variant="outline" className="shrink-0 border-accent/30 text-accent font-body text-xs">
          {courtCase.category}
        </Badge>
        <div className="flex items-center gap-1.5">
          {correct ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          ) : (
            <XCircle className="h-4 w-4 text-destructive" />
          )}
          <span className="font-body text-xs text-muted-foreground">
            {correct ? "Correct" : "Incorrect"}
          </span>
        </div>
      </div>
      <h3 className="mb-1.5 font-display text-lg font-semibold text-card-foreground leading-tight group-hover:text-accent transition-colors">
        {courtCase.name}
      </h3>
      <p className="mb-3 font-body text-xs text-muted-foreground">
        {courtCase.term} Term · {courtCase.docketNumber} · {courtCase.voteSplit}
      </p>
      <p className="font-body text-sm text-muted-foreground line-clamp-2 leading-relaxed">
        {courtCase.question}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-accent opacity-0 transition-opacity group-hover:opacity-100">
        <span className="font-body text-xs font-medium">View details</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </button>
  );
};

export default CaseCard;
