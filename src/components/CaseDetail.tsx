import { CourtCase } from "@/data/cases";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2, XCircle, Scale, Gavel, TrendingUp } from "lucide-react";

interface CaseDetailProps {
  courtCase: CourtCase;
  onBack: () => void;
}

const outcomeLabel = (o: string) =>
  o === "affirm" ? "Affirm" : o === "reverse" ? "Reverse" : "Vacate";

const CaseDetail = ({ courtCase, onBack }: CaseDetailProps) => {
  const correct = courtCase.prediction === courtCase.actualOutcome;

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to cases
      </button>

      <div className="mb-6">
        <Badge variant="outline" className="mb-3 border-accent/30 text-accent font-body text-xs">
          {courtCase.category}
        </Badge>
        <h1 className="font-display text-3xl font-bold text-foreground leading-tight mb-2">
          {courtCase.name}
        </h1>
        <p className="font-body text-sm text-muted-foreground">
          {courtCase.term} Term · Docket {courtCase.docketNumber} · Decided {courtCase.decidedDate}
        </p>
      </div>

      {/* Prediction vs Outcome */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-navy p-5">
          <div className="mb-2 flex items-center gap-2 text-primary-foreground/60">
            <TrendingUp className="h-4 w-4" />
            <span className="font-body text-xs font-medium uppercase tracking-wider">Our Prediction</span>
          </div>
          <p className="font-display text-2xl font-bold text-accent">
            {outcomeLabel(courtCase.prediction)}
          </p>
          <div className="mt-2 h-2 w-full rounded-full bg-navy-light overflow-hidden">
            <div
              className="h-full rounded-full bg-accent transition-all duration-700"
              style={{ width: `${courtCase.predictionConfidence * 100}%` }}
            />
          </div>
          <p className="mt-1 font-body text-xs text-primary-foreground/50">
            {Math.round(courtCase.predictionConfidence * 100)}% confidence
          </p>
        </div>

        <div className="rounded-lg bg-navy p-5">
          <div className="mb-2 flex items-center gap-2 text-primary-foreground/60">
            <Gavel className="h-4 w-4" />
            <span className="font-body text-xs font-medium uppercase tracking-wider">Actual Outcome</span>
          </div>
          <p className="font-display text-2xl font-bold text-primary-foreground">
            {outcomeLabel(courtCase.actualOutcome)}
          </p>
          <p className="mt-2 font-body text-xs text-primary-foreground/50">
            {courtCase.voteSplit} · {courtCase.majorityAuthor}
          </p>
        </div>

        <div className={`rounded-lg p-5 ${correct ? "bg-emerald-950/40 border border-emerald-500/20" : "bg-red-950/40 border border-red-500/20"}`}>
          <div className="mb-2 flex items-center gap-2">
            {correct ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            ) : (
              <XCircle className="h-4 w-4 text-red-400" />
            )}
            <span className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Result
            </span>
          </div>
          <p className={`font-display text-2xl font-bold ${correct ? "text-emerald-400" : "text-red-400"}`}>
            {correct ? "Correct" : "Incorrect"}
          </p>
          <p className="mt-2 font-body text-xs text-muted-foreground">
            {correct
              ? "Model successfully predicted the outcome"
              : `Model predicted ${outcomeLabel(courtCase.prediction)}, actual was ${outcomeLabel(courtCase.actualOutcome)}`}
          </p>
        </div>
      </div>

      {/* Case Info */}
      <div className="space-y-6">
        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <Scale className="h-4 w-4 text-accent" />
            Question Presented
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground">{courtCase.question}</p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-foreground">Summary</h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground">{courtCase.summary}</p>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border p-4">
            <h3 className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">Petitioner</h3>
            <p className="font-body text-sm font-medium text-foreground">{courtCase.petitioner}</p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <h3 className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">Respondent</h3>
            <p className="font-body text-sm font-medium text-foreground">{courtCase.respondent}</p>
          </div>
          <div className="rounded-lg border border-border p-4 md:col-span-2">
            <h3 className="mb-1 font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">Lower Court</h3>
            <p className="font-body text-sm font-medium text-foreground">{courtCase.lowerCourt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
