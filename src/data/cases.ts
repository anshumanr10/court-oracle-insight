export interface CourtCase {
  id: string;
  name: string;
  docketNumber: string;
  term: string;
  arguedDate: string;
  decidedDate: string;
  petitioner: string;
  respondent: string;
  lowerCourt: string;
  question: string;
  summary: string;
  prediction: "affirm" | "reverse" | "vacate";
  predictionConfidence: number;
  actualOutcome: "affirm" | "reverse" | "vacate";
  voteSplit: string;
  majorityAuthor: string;
  category: string;
}

export const cases: CourtCase[] = [
  {
    id: "rucho-v-common-cause",
    name: "Rucho v. Common Cause",
    docketNumber: "18-422",
    term: "2019",
    arguedDate: "March 26, 2019",
    decidedDate: "June 27, 2019",
    petitioner: "Robert A. Rucho",
    respondent: "Common Cause",
    lowerCourt: "Middle District of North Carolina",
    question: "Whether partisan gerrymandering claims are justiciable under the Constitution.",
    summary: "The Court held that partisan gerrymandering claims present political questions beyond the reach of the federal courts. The 5-4 ruling concluded that there are no judicially manageable standards for resolving such claims.",
    prediction: "reverse",
    predictionConfidence: 0.72,
    actualOutcome: "reverse",
    voteSplit: "5-4",
    majorityAuthor: "Chief Justice Roberts",
    category: "Election Law",
  },
  {
    id: "department-of-commerce-v-new-york",
    name: "Department of Commerce v. New York",
    docketNumber: "18-966",
    term: "2019",
    arguedDate: "April 23, 2019",
    decidedDate: "June 27, 2019",
    petitioner: "Department of Commerce",
    respondent: "State of New York",
    lowerCourt: "Southern District of New York",
    question: "Whether the Secretary of Commerce's decision to add a citizenship question to the 2020 census was lawful.",
    summary: "The Court held that while the Secretary has broad authority over census content, the stated rationale for adding the citizenship question was pretextual and contrived, blocking its inclusion on the 2020 census.",
    prediction: "reverse",
    predictionConfidence: 0.65,
    actualOutcome: "affirm",
    voteSplit: "5-4",
    majorityAuthor: "Chief Justice Roberts",
    category: "Administrative Law",
  },
  {
    id: "american-legion-v-american-humanist",
    name: "American Legion v. American Humanist Assn.",
    docketNumber: "17-1717",
    term: "2019",
    arguedDate: "February 27, 2019",
    decidedDate: "June 20, 2019",
    petitioner: "The American Legion",
    respondent: "American Humanist Association",
    lowerCourt: "Fourth Circuit Court of Appeals",
    question: "Whether a 40-foot Latin cross war memorial on public land violates the Establishment Clause of the First Amendment.",
    summary: "The Court held that the Bladensburg Peace Cross does not violate the Establishment Clause. The 7-2 ruling found that the monument's longstanding presence and secular associations with remembering the fallen gave it a presumption of constitutionality.",
    prediction: "reverse",
    predictionConfidence: 0.80,
    actualOutcome: "reverse",
    voteSplit: "7-2",
    majorityAuthor: "Justice Alito",
    category: "First Amendment",
  },
  {
    id: "gamble-v-united-states",
    name: "Gamble v. United States",
    docketNumber: "17-646",
    term: "2019",
    arguedDate: "December 6, 2018",
    decidedDate: "June 17, 2019",
    petitioner: "Terence Gamble",
    respondent: "United States",
    lowerCourt: "Eleventh Circuit Court of Appeals",
    question: "Whether the separate-sovereigns exception to the Double Jeopardy Clause should be overruled.",
    summary: "The Court upheld the separate-sovereigns doctrine in a 7-2 decision, holding that successive prosecutions by separate sovereigns (state and federal) do not violate the Double Jeopardy Clause.",
    prediction: "affirm",
    predictionConfidence: 0.74,
    actualOutcome: "affirm",
    voteSplit: "7-2",
    majorityAuthor: "Justice Alito",
    category: "Criminal Law",
  },
  {
    id: "kisor-v-wilkie",
    name: "Kisor v. Wilkie",
    docketNumber: "18-15",
    term: "2019",
    arguedDate: "March 27, 2019",
    decidedDate: "June 26, 2019",
    petitioner: "James L. Kisor",
    respondent: "Robert L. Wilkie, Secretary of Veterans Affairs",
    lowerCourt: "Federal Circuit Court of Appeals",
    question: "Whether Auer v. Robbins, which directs courts to defer to an agency's reasonable interpretation of its own ambiguous regulation, should be overruled.",
    summary: "The Court declined to overrule Auer deference but significantly narrowed it, holding that courts must exhaust all traditional tools of interpretation before deferring to an agency's reading of its own regulation.",
    prediction: "reverse",
    predictionConfidence: 0.68,
    actualOutcome: "affirm",
    voteSplit: "5-4",
    majorityAuthor: "Justice Kagan",
    category: "Administrative Law",
  },
  {
    id: "flowers-v-mississippi",
    name: "Flowers v. Mississippi",
    docketNumber: "17-9572",
    term: "2019",
    arguedDate: "March 20, 2019",
    decidedDate: "June 21, 2019",
    petitioner: "Curtis Flowers",
    respondent: "State of Mississippi",
    lowerCourt: "Mississippi Supreme Court",
    question: "Whether the Mississippi Supreme Court erred in how it applied Batson v. Kentucky when reviewing the prosecution's use of peremptory strikes in petitioner's sixth trial.",
    summary: "The Court reversed in a 7-2 decision, holding that the State's use of peremptory strikes in Flowers' sixth trial was motivated in substantial part by race, violating the Equal Protection Clause under Batson v. Kentucky.",
    prediction: "reverse",
    predictionConfidence: 0.85,
    actualOutcome: "reverse",
    voteSplit: "7-2",
    majorityAuthor: "Justice Kavanaugh",
    category: "Criminal Law",
  },
];
