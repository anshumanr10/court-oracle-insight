import { useState } from "react";
import { cases, CourtCase } from "@/data/cases";
import CaseCard from "@/components/CaseCard";
import CaseDetail from "@/components/CaseDetail";
import { Scale, CheckCircle2 } from "lucide-react";
import gavelBg from "@/assets/gavel-bg.jpg";

const Index = () => {
  const [selectedCase, setSelectedCase] = useState<CourtCase | null>(null);

  const correctCount = cases.filter((c) => c.prediction === c.actualOutcome).length;

  if (selectedCase) {
    return (
      <div className="container mx-auto max-w-4xl px-6 py-10">
        <CaseDetail courtCase={selectedCase} onBack={() => setSelectedCase(null)} />
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={gavelBg} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl px-6 text-center">
          <div className="mb-4 flex justify-center">
            <Scale className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Supreme Court <span className="text-gradient-accent">Predictions</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground leading-relaxed">
            Our AI-powered model analyzes case briefs, oral arguments, and historical patterns
            to predict Supreme Court outcomes before decisions are announced.
          </p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">65%</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Our Model (2019 Term)</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-muted-foreground">58%</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Legal Experts</p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                <p className="font-display text-3xl font-bold text-foreground">{correctCount}/{cases.length}</p>
              </div>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Correct</p>
            </div>
          </div>
        </div>
      </section>

      {/* Per-Justice Accuracy */}
      <section className="container mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">Per-Justice Accuracy (2019 Term)</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 mb-12">
          {[
            { name: "Breyer", ours: 69.1, baseline: 54.2, votes: 55 },
            { name: "Ginsburg", ours: 65.5, baseline: 52.7, votes: 55 },
            { name: "Gorsuch", ours: 56.4, baseline: 51.3, votes: 55 },
            { name: "Alito", ours: 58.2, baseline: 52.1, votes: 55 },
            { name: "Kagan", ours: 59.3, baseline: 51.7, votes: 54 },
            { name: "Kavanaugh", ours: 59.3, baseline: 52.8, votes: 54 },
            { name: "Sotomayor", ours: 51.9, baseline: 50.0, votes: 54 },
            { name: "Thomas", ours: 50.9, baseline: 51.4, votes: 55 },
          ].map((j) => (
            <div key={j.name} className="rounded-lg border bg-card p-4 shadow-sm">
              <p className="font-display text-sm font-semibold text-foreground mb-2">{j.name}</p>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-bold text-primary">{j.ours}%</span>
                <span className="text-xs text-muted-foreground">vs {j.baseline}%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{j.votes} votes</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases Grid */}
      <section className="container mx-auto max-w-5xl px-6 py-12">
        <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">Select a Case</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((c) => (
            <CaseCard key={c.id} courtCase={c} onClick={() => setSelectedCase(c)} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
