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
    id: "dobbs-v-jackson",
    name: "Dobbs v. Jackson Women's Health Organization",
    docketNumber: "19-1392",
    term: "2021",
    arguedDate: "December 1, 2021",
    decidedDate: "June 24, 2022",
    petitioner: "Thomas E. Dobbs",
    respondent: "Jackson Women's Health Organization",
    lowerCourt: "Fifth Circuit Court of Appeals",
    question: "Whether all pre-viability prohibitions on elective abortions are unconstitutional.",
    summary: "The Court held that the Constitution does not confer a right to abortion. Roe v. Wade and Planned Parenthood v. Casey were overruled, returning abortion regulation to the states.",
    prediction: "reverse",
    predictionConfidence: 0.78,
    actualOutcome: "reverse",
    voteSplit: "6-3",
    majorityAuthor: "Justice Alito",
    category: "Civil Rights",
  },
  {
    id: "nysrpa-v-bruen",
    name: "New York State Rifle & Pistol Assn. v. Bruen",
    docketNumber: "20-843",
    term: "2021",
    arguedDate: "November 3, 2021",
    decidedDate: "June 23, 2022",
    petitioner: "New York State Rifle & Pistol Association",
    respondent: "Kevin P. Bruen",
    lowerCourt: "Second Circuit Court of Appeals",
    question: "Whether the state's denial of petitioners' applications for concealed-carry licenses violated the Second Amendment.",
    summary: "The Court struck down New York's proper-cause requirement for concealed carry permits, holding that the Second and Fourteenth Amendments protect an individual's right to carry a handgun for self-defense outside the home.",
    prediction: "reverse",
    predictionConfidence: 0.82,
    actualOutcome: "reverse",
    voteSplit: "6-3",
    majorityAuthor: "Justice Thomas",
    category: "Second Amendment",
  },
  {
    id: "students-for-fair-admissions-v-harvard",
    name: "Students for Fair Admissions v. Harvard",
    docketNumber: "20-1199",
    term: "2022",
    arguedDate: "October 31, 2022",
    decidedDate: "June 29, 2023",
    petitioner: "Students for Fair Admissions",
    respondent: "President and Fellows of Harvard College",
    lowerCourt: "First Circuit Court of Appeals",
    question: "Whether race-conscious admissions programs at Harvard and UNC violate the Equal Protection Clause.",
    summary: "The Court held that Harvard's and UNC's race-conscious admissions programs violate the Equal Protection Clause, effectively ending affirmative action in college admissions.",
    prediction: "reverse",
    predictionConfidence: 0.85,
    actualOutcome: "reverse",
    voteSplit: "6-3",
    majorityAuthor: "Chief Justice Roberts",
    category: "Equal Protection",
  },
  {
    id: "biden-v-nebraska",
    name: "Biden v. Nebraska",
    docketNumber: "22-506",
    term: "2022",
    arguedDate: "February 28, 2023",
    decidedDate: "June 30, 2023",
    petitioner: "Joseph R. Biden, President of the United States",
    respondent: "State of Nebraska",
    lowerCourt: "Eighth Circuit Court of Appeals",
    question: "Whether the HEROES Act authorizes the Secretary of Education to cancel $430 billion in student loan debt.",
    summary: "The Court held that the HEROES Act does not authorize the Secretary's loan forgiveness program, applying the major questions doctrine to find that such sweeping authority requires clear congressional authorization.",
    prediction: "affirm",
    predictionConfidence: 0.71,
    actualOutcome: "affirm",
    voteSplit: "6-3",
    majorityAuthor: "Chief Justice Roberts",
    category: "Administrative Law",
  },
  {
    id: "moore-v-harper",
    name: "Moore v. Harper",
    docketNumber: "21-1271",
    term: "2022",
    arguedDate: "December 7, 2022",
    decidedDate: "June 27, 2023",
    petitioner: "Timothy K. Moore",
    respondent: "Rebecca Harper",
    lowerCourt: "North Carolina Supreme Court",
    question: "Whether the Elections Clause vests state legislatures with exclusive authority over federal election rules, free from state court judicial review.",
    summary: "The Court rejected the independent state legislature theory, holding that state courts may review state legislatures' regulations of federal elections under state constitutional provisions.",
    prediction: "affirm",
    predictionConfidence: 0.62,
    actualOutcome: "reverse",
    voteSplit: "6-3",
    majorityAuthor: "Chief Justice Roberts",
    category: "Election Law",
  },
  {
    id: "trump-v-anderson",
    name: "Trump v. Anderson",
    docketNumber: "23-719",
    term: "2023",
    arguedDate: "February 8, 2024",
    decidedDate: "March 4, 2024",
    petitioner: "Donald J. Trump",
    respondent: "Norma Anderson",
    lowerCourt: "Colorado Supreme Court",
    question: "Whether a state may disqualify a presidential candidate from the ballot under Section 3 of the Fourteenth Amendment.",
    summary: "The Court unanimously reversed Colorado's disqualification of Trump from the ballot, holding that states lack the power to enforce Section 3 of the Fourteenth Amendment against federal officeholders and candidates.",
    prediction: "reverse",
    predictionConfidence: 0.91,
    actualOutcome: "reverse",
    voteSplit: "9-0",
    majorityAuthor: "Per Curiam",
    category: "Constitutional Law",
  },
];
