import { Brain, Database, BarChart3, Cpu, GitBranch, Layers } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    description:
      "We aggregate decades of Supreme Court case data including briefs, oral argument transcripts, amicus filings, lower court opinions, and justice voting histories from public records and legal databases.",
  },
  {
    icon: Layers,
    title: "Feature Engineering",
    description:
      "Raw legal texts are transformed into structured features: ideological direction scores, issue area classifications, petitioner/respondent characteristics, circuit of origin, and over 200 additional predictive variables.",
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description:
      "Transformer-based language models fine-tuned on legal corpora extract semantic features from oral argument transcripts and case briefs, capturing nuanced legal reasoning patterns invisible to traditional models.",
  },
  {
    icon: GitBranch,
    title: "Ensemble Modeling",
    description:
      "Multiple model architectures—random forests, gradient-boosted trees, and deep neural networks—are combined via stacking to produce robust predictions that outperform any single model.",
  },
  {
    icon: Cpu,
    title: "Justice-Level Modeling",
    description:
      "Individual justice models capture each justice's unique jurisprudential tendencies, ideological leanings, and question patterns during oral arguments to predict individual votes before aggregating to case-level outcomes.",
  },
  {
    icon: BarChart3,
    title: "Calibrated Confidence",
    description:
      "Platt scaling and isotonic regression calibrate raw model outputs into true probabilities, ensuring our stated confidence levels accurately reflect real-world prediction accuracy over time.",
  },
];

const Technology = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-earth-gradient py-20">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            The <span className="text-gradient-accent">Technology</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-primary-foreground/60 leading-relaxed">
            A deep dive into the machine learning pipeline that powers our Supreme Court outcome predictions.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className="container mx-auto max-w-4xl px-6 py-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-earth border-2 border-primary md:h-16 md:w-16">
                  <step.icon className="h-5 w-5 text-accent md:h-6 md:w-6" />
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Performance */}
      <section className="border-t border-border bg-muted/50 py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center font-display text-2xl font-semibold text-foreground">
            Model Performance
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: "Overall Accuracy", value: "83%", sub: "Across all predicted cases" },
              { label: "Reverse Prediction", value: "87%", sub: "When model predicts reversal" },
              { label: "Affirm Prediction", value: "79%", sub: "When model predicts affirmation" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-card p-6 text-center">
                <p className="font-display text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 font-body text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-0.5 font-body text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
