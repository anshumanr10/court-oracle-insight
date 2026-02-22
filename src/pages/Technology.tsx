import {
  Database,
  Brain,
  Code2,
  FileText,
  BarChart3,
  SlidersHorizontal,
  PieChart,
  TrendingUp,
  Lightbulb,
  Mic,
  MessageSquare,
  Scaling } from
"lucide-react";
import aiModelBg from "@/assets/ai-model-bg.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent } from
"@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart as RePieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis } from
"recharts";

/* ───────────────────────────────────────────
   PLACEHOLDER DATA — replace with real values
   ─────────────────────────────────────────── */

const dataSources = [
{ name: "Supreme Court Database (SCDB)", records: "28,000+", description: "Historical case outcomes, justice votes, and issue classifications from 1946–present." },
{ name: "Oyez Project", records: "9,000+", description: "Oral argument transcripts and audio metadata for modern-era cases." },
{ name: "Court Listener / RECAP", records: "15,000+", description: "Lower court opinions, briefs, and docket entries linked to Supreme Court petitions." }];


const frameworks = [
{ name: "ModernBERT / DeBERTa", role: "Encoder", icon: Brain },
{ name: "PyTorch", role: "Training framework", icon: Code2 },
{ name: "ConvoKit", role: "Transcript API", icon: MessageSquare }];


const baseModel = {
  name: "Legal-BERT (custom fine-tune)",
  params: "110M",
  pretraining: "Legal corpora + SCOTUS opinions",
  description: "A domain-adapted BERT variant pre-trained on 50 GB of legal text, then fine-tuned on our labeled dataset of Supreme Court outcomes."
};

// Preprocessing progress placeholder
const preprocessingSteps = [
{ step: "Raw text extraction", complete: 100 },
{ step: "Citation normalization", complete: 100 },
{ step: "Stop-word & legal boilerplate removal", complete: 100 },
{ step: "Tokenization (WordPiece)", complete: 100 },
{ step: "Feature engineering (200+ variables)", complete: 100 }];


// Token distribution chart data
const tokenDistribution = [
{ range: "0-128", count: 420 },
{ range: "129-256", count: 1850 },
{ range: "257-384", count: 3200 },
{ range: "385-512", count: 2100 },
{ range: "513+", count: 430 }];


const tokenChartConfig = {
  count: { label: "Cases", color: "hsl(16 55% 42%)" }
};

// Cleaning impact chart
const cleaningImpact = [
{ stage: "Raw", accuracy: 62 },
{ stage: "Cleaned", accuracy: 71 },
{ stage: "Normalized", accuracy: 75 },
{ stage: "Tokenized", accuracy: 78 },
{ stage: "+ Features", accuracy: 83 }];


const cleaningChartConfig = {
  accuracy: { label: "Accuracy %", color: "hsl(16 55% 42%)" }
};

// Hyperparameter tuning data
const hpLearningRate = [
{ lr: "1e-5", f1: 0.74 },
{ lr: "2e-5", f1: 0.81 },
{ lr: "3e-5", f1: 0.83 },
{ lr: "5e-5", f1: 0.79 },
{ lr: "1e-4", f1: 0.68 }];


const hpChartConfig = {
  f1: { label: "F1 Score", color: "hsl(16 55% 42%)" }
};

// Feature ablation
const featureAblation = [
{ feature: "All features", f1: 0.83 },
{ feature: "− Oral args", f1: 0.77 },
{ feature: "− Justice history", f1: 0.75 },
{ feature: "− Issue codes", f1: 0.80 },
{ feature: "− Circuit origin", f1: 0.81 },
{ feature: "− Amicus count", f1: 0.82 }];


const ablationChartConfig = {
  f1: { label: "F1 Score", color: "hsl(16 45% 62%)" }
};

// Data split
const dataSplit = [
{ name: "Training", value: 70, color: "hsl(16 55% 42%)" },
{ name: "Validation", value: 15, color: "hsl(16 45% 62%)" },
{ name: "Test", value: 15, color: "hsl(36 33% 72%)" }];


// Benchmark results
const benchmarks = [
{ metric: "Accuracy", ours: 83, baseline: 66 },
{ metric: "Precision", ours: 85, baseline: 64 },
{ metric: "Recall", ours: 81, baseline: 68 },
{ metric: "F1 Score", ours: 83, baseline: 66 },
{ metric: "AUC-ROC", ours: 89, baseline: 71 }];


const benchmarkRadarConfig = {
  ours: { label: "Our Model", color: "hsl(16 55% 42%)" },
  baseline: { label: "Baseline", color: "hsl(36 33% 72%)" }
};

// Future improvements
const improvements = [
{
  icon: FileText,
  title: "Deeper Case Context",
  description: "Incorporate full lower-court opinion text and legislative history to capture richer legal context beyond briefs and oral arguments."
},
{
  icon: Mic,
  title: "Audio Feature Extraction",
  description: "Analyze vocal tone, hesitation patterns, and interruption frequency from oral argument audio recordings as predictive signals."
},
{
  icon: MessageSquare,
  title: "Sentiment Analysis",
  description: "Apply fine-grained sentiment and stance detection to justice questions during oral arguments to gauge individual leanings."
},
{
  icon: Scaling,
  title: "Larger Model Architecture",
  description: "Scale to a larger transformer (e.g., 340M+ parameters) with extended context windows for processing full case dockets end-to-end."
}];


/* ───────────────────────────────────────────
   COMPONENT
   ─────────────────────────────────────────── */

const SectionHeading = ({ number, title, subtitle }: {number: string;title: string;subtitle: string;}) =>
<div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
        {number}
      </span>
      <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{title}</h2>
    </div>
    <p className="ml-11 font-body text-sm text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>
  </div>;


const Technology = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-earth-gradient py-20 overflow-hidden">
        <img
          src={aiModelBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30" />

        <div className="absolute inset-0 bg-background/60" />
        <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">Our Model
            <span className="text-gradient-accent">Model</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-base text-muted-foreground leading-relaxed">
            A comprehensive look at how we built, trained, and evaluated our Supreme Court prediction model — from raw data to deployment.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-6 py-16 space-y-24">

        {/* ── SECTION 1: Data, APIs & Model ── */}
        <section>
          <SectionHeading
            number="1"
            title="Data + Frameworks"
            subtitle="The foundation of our pipeline: curated datasets, fine-tuned encoder" />


          <Tabs defaultValue="data" className="ml-0">
            <TabsList className="mb-6">
              <TabsTrigger value="data">Data Sources</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks & APIs</TabsTrigger>
              <TabsTrigger value="model">Base Model</TabsTrigger>
            </TabsList>

            <TabsContent value="data">
              <div className="grid gap-4 md:grid-cols-3">
                {dataSources.map((ds) =>
                <Card key={ds.name}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        <CardTitle className="text-sm font-semibold">{ds.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="mb-2">{ds.records} records</Badge>
                      <p className="text-xs text-muted-foreground leading-relaxed">{ds.description}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="frameworks">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {frameworks.map((fw) =>
                <Card key={fw.name} className="text-center">
                    <CardContent className="pt-6">
                      <fw.icon className="mx-auto h-8 w-8 text-primary mb-3" />
                      <p className="font-display text-sm font-semibold text-foreground">{fw.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{fw.role}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent value="model">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{baseModel.name}</h3>
                      <div className="flex gap-2 mt-2 mb-3">
                        <Badge variant="outline">{baseModel.params} parameters</Badge>
                        <Badge variant="secondary">{baseModel.pretraining}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{baseModel.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* ── SECTION 2: Data Preprocessing ── */}
        <section>
          <SectionHeading
            number="2"
            title="Data Cleaning & Preprocessing"
            subtitle="How raw legal texts were transformed into model-ready features through cleaning, normalization, and tokenization." />


          {/* Pipeline steps */}
          <div className="mb-10">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Pipeline Progress</h3>
            <div className="space-y-3">
              {preprocessingSteps.map((s) =>
              <div key={s.step} className="flex items-center gap-4">
                  <span className="w-56 text-sm text-muted-foreground shrink-0">{s.step}</span>
                  <Progress value={s.complete} className="h-2 flex-1" />
                  <span className="text-xs font-medium text-foreground w-10 text-right">{s.complete}%</span>
                </div>
              )}
            </div>
          </div>

          {/* Charts */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Token Length Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={tokenChartConfig} className="h-[250px] w-full">
                  <BarChart data={tokenDistribution}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="range" fontSize={12} />
                    <YAxis fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" fill="var(--color-count)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Accuracy by Preprocessing Stage</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={cleaningChartConfig} className="h-[250px] w-full">
                  <LineChart data={cleaningImpact}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="stage" fontSize={12} />
                    <YAxis domain={[50, 90]} fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="accuracy" stroke="var(--color-accuracy)" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* ── SECTION 3: Hyperparameter Tuning ── */}
        <section>
          <SectionHeading
            number="3"
            title="Hyperparameter Tuning & Feature Selection"
            subtitle="Systematic experiments to find optimal model configuration and identify the most impactful features." />


          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Learning Rate vs. F1 Score</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={hpChartConfig} className="h-[250px] w-full">
                  <LineChart data={hpLearningRate}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="lr" fontSize={12} />
                    <YAxis domain={[0.6, 0.9]} fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="f1" stroke="var(--color-f1)" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Feature Ablation Study</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={ablationChartConfig} className="h-[250px] w-full">
                  <BarChart data={featureAblation} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0.65, 0.85]} fontSize={12} />
                    <YAxis dataKey="feature" type="category" fontSize={11} width={120} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="f1" fill="var(--color-f1)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* ── SECTION 4: Data Split & Benchmarks ── */}
        <section>
          <SectionHeading
            number="4"
            title="Data Split & Benchmarks"
            subtitle="Our train/validation/test methodology and how the model stacks up against established baselines." />


          <div className="grid gap-6 md:grid-cols-2">
            {/* Pie chart for split */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Data Split</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <ChartContainer config={{}} className="h-[250px] w-full">
                  <RePieChart>
                    <Pie
                      data={dataSplit}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={3}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, value }) => `${name} ${value}%`}>

                      {dataSplit.map((entry, i) =>
                      <Cell key={i} fill={entry.color} />
                      )}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RePieChart>
                </ChartContainer>
                <div className="flex gap-4 mt-2">
                  {dataSplit.map((d) =>
                  <div key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: d.color }} />
                      {d.name}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Radar chart for benchmarks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Model vs. Baseline</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={benchmarkRadarConfig} className="h-[250px] w-full">
                  <RadarChart data={benchmarks}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" fontSize={11} />
                    <PolarRadiusAxis domain={[0, 100]} tick={false} />
                    <Radar name="Our Model" dataKey="ours" stroke="hsl(16 55% 42%)" fill="hsl(16 55% 42%)" fillOpacity={0.25} />
                    <Radar name="Baseline" dataKey="baseline" stroke="hsl(36 33% 72%)" fill="hsl(36 33% 72%)" fillOpacity={0.2} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RadarChart>
                </ChartContainer>
                <div className="flex justify-center gap-6 mt-2">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "hsl(16 55% 42%)" }} />
                    Our Model
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: "hsl(36 33% 72%)" }} />
                    Baseline
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Metric summary table */}
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 font-display font-semibold text-foreground">Metric</th>
                      <th className="text-center py-2 font-display font-semibold text-foreground">Our Model</th>
                      <th className="text-center py-2 font-display font-semibold text-foreground">Baseline</th>
                      <th className="text-center py-2 font-display font-semibold text-foreground">Δ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarks.map((b) =>
                    <tr key={b.metric} className="border-b border-border/50">
                        <td className="py-2.5 text-muted-foreground">{b.metric}</td>
                        <td className="py-2.5 text-center font-medium text-foreground">{b.ours}%</td>
                        <td className="py-2.5 text-center text-muted-foreground">{b.baseline}%</td>
                        <td className="py-2.5 text-center font-medium text-primary">+{b.ours - b.baseline}%</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ── SECTION 5: Future Improvements ── */}
        <section>
          <SectionHeading
            number="5"
            title="Areas for Improvement"
            subtitle="Where we're headed next — expanding data inputs, incorporating new signal types, and scaling model capacity." />


          <div className="grid gap-4 sm:grid-cols-2">
            {improvements.map((item) =>
            <Card key={item.title} className="group hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>);

};

export default Technology;