import {
  Database,
  Brain,
  Code2,
  FileText,
  BarChart3,
  Mic,
  MessageSquare,
  Scaling } from
"lucide-react";
import aiModelBg from "@/assets/ai-model-bg.jpg";
import modelArchitecture from "@/assets/model-architecture.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent } from
"@/components/ui/chart";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
} from "recharts";

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
{ name: "scikit-learn", role: "Classical ML & evaluation", icon: BarChart3 },
{ name: "ConvoKit", role: "Transcript API", icon: MessageSquare }];


const baseModel = {
  name: "Legal-BERT (custom fine-tune)",
  params: "110M",
  pretraining: "Legal corpora + SCOTUS opinions",
  description: "A domain-adapted BERT variant pre-trained on 50 GB of legal text, then fine-tuned on our labeled dataset of Supreme Court outcomes."
};

// Preprocessing progress placeholder
const preprocessingSteps = ["Raw JSON", "Clean Data", "Chunking Transcripts", "Train Model"];


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



// Data split
const dataSplit = [
{ name: "Training", value: 70, color: "hsl(16 55% 42%)" },
{ name: "Validation", value: 15, color: "hsl(16 45% 62%)" },
{ name: "Test", value: 15, color: "hsl(36 33% 72%)" }];



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


          {/* Pipeline flow */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {preprocessingSteps.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="rounded-lg border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm">
                    {step}
                  </div>
                  {i < preprocessingSteps.length - 1 && (
                    <span className="text-primary font-bold text-lg">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Example Case Transcript</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md bg-muted/50 p-4 font-mono text-xs text-muted-foreground leading-relaxed max-h-[400px] overflow-y-auto whitespace-pre-wrap">
{`DECIDED: Jun 11, 1956

Warren
Number 5 on the docket, United States of America versus E.I.du Pont de Nemours & Company. Mr. Weston.

Petitioner
If it please this Court. This suit was instituted late in 1947. The Government's complaint charged that du Pont had been monopolizing interstate commerce in cellophane from about 1923...

Frankfurter
Before you move on to the conclusion of law, what are we to understand as the Government's position in regards to what I call findings of fact, do you challenge any of them or all of them or what?

...

---
JUSTICE VOTES:
Warren: Petitioner
Douglas: Petitioner
Black: Petitioner
Minton: Respondent
Burton: Respondent
Reed: Respondent
Frankfurter: Respondent

OUTCOME: Respondent won.`}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ── SECTION 3: Model Architecture ── */}
        <section>
          <SectionHeading
            number="3"
            title="Model Architecture"
            subtitle="An overview of our end-to-end architecture — from transcript input through cross-attention to predicted justice votes." />

          <Card>
            <CardContent className="pt-6 flex justify-center">
              <img
                src={modelArchitecture}
                alt="Model architecture diagram showing input transcript phases, encoder backbone, turn pooling, cross-attention, and output heads"
                className="max-w-full h-auto rounded-md"
              />
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ── SECTION 4: Data Split ── */}
        <section>
          <SectionHeading
            number="4"
            title="Data Split"
            subtitle="Our train/validation/test methodology for partitioning the Supreme Court case dataset." />

          <Card className="max-w-lg mx-auto">
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