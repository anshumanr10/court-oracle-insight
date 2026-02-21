import { useState } from "react";
import { cases, CourtCase } from "@/data/cases";
import CaseCard from "@/components/CaseCard";
import CaseDetail from "@/components/CaseDetail";
import { Scale, CheckCircle2 } from "lucide-react";
import gavelBg from "@/assets/gavel-bg.jpg";

const Index = () => {
  const [selectedCase, setSelectedCase] = useState<CourtCase | null>(null);

  const correctCount = cases.filter((c) => c.prediction === c.actualOutcome).length;
  const accuracy = Math.round((correctCount / cases.length) * 100);

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
          <img src={gavelBg} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-background/70" />
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
              <p className="font-display text-3xl font-bold text-primary">{cases.length}</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Cases Analyzed</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">{accuracy}%</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">Accuracy</p>
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
