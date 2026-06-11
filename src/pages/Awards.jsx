import React from "react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";

const awards = [
  {
    title: "California State Seal of Civic Engagement",
    date: "June 2025",
    description: "Recognition for demonstrating excellence in civics education and participation, acknowledging understanding of the US and California constitutions and engagement in civic action projects.",
  },
  {
    title: "Golden State Seal Merit Diploma",
    date: "June 2025",
    description: "Recognition for demonstrating mastery over at least 6 subject areas.",
  },
  {
    title: "2025 National Merit Finalist",
    date: "February 2025",
    description: "Among less than 1% of US High School Seniors, selected from over 1.3 million juniors who took the PSAT exam across approximately 21,000 high schools nationwide.",
  },
  {
    title: "AP Scholar with Distinction (×2)",
    date: "July 2025 & July 2024",
    description: "Awarded for maintaining an average score of at least 3.5 on all AP Exams with scores of 3 or higher on five or more exams. Received a score of 5 on ten AP Exams.",
  },
  {
    title: "Presidential Volunteer Service Award — Gold (×4)",
    date: "2018, 2022, 2023, 2024",
    description: "Four-time Gold Award recipient, the highest level of recognition for volunteer service. Activities include food bank distribution, trail clearing, invasive species removal, community garden planting, and organizing Memorial Day flag planting.",
  },
  {
    title: "2024 FIRST Regional Robotics Winner — Idaho Regional",
    date: "March 2024",
    description: "First-place victory at the 2024 FIRST Robotics Competition Idaho Regional as Machinist, CAD Designer, and strategic lead, securing a spot at the World Championships.",
  },
  {
    title: "VMware Hacks — Team MVP & Biggest Social Impact",
    date: "August 2021",
    description: "Individual MVP award and team award for developing 'QuestLocale', a platform connecting elderly users with gig workers for care-related tasks.",
  },
  {
    title: "World Language Department Award (×2)",
    date: "May 2024 & May 2025",
    description: "Presented by Gunn High School French teachers for excellence as French Club Treasurer.",
  },
  {
    title: "Le Grand Concours — Bronze Award",
    date: "May 2022",
    description: "Bronze Award in the National French Contest, an annual competition sponsored by the American Association of Teachers of French.",
  },
  {
    title: "FIRST Tech Challenge — Think Award, Innovate Award, Top Ranked 3rd",
    date: "2019–2020",
    description: "Multiple awards with FTC Team Polaris #13345, including Think Award for outstanding Engineering Notebook and Collins Aerospace Innovate Award at multiple qualifying tournaments.",
  },
];

export default function Awards() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              The Honors
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-6">
              Awards
            </h1>
            <p className="font-body text-lg text-foreground/50 max-w-2xl mb-20" style={{ lineHeight: 1.6 }}>
              Recognitions earned across academics, engineering, community service, and language.
            </p>
          </PageTransition>

          <div className="space-y-0">
            {awards.map((award, i) => (
              <GraceGlow key={i}>
                <div className="border-t border-border/30 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
                  <div className="md:col-span-3">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                      {award.date}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-lg md:text-xl tracking-[0.05em] uppercase text-foreground mb-3">
                      {award.title}
                    </h3>
                    <p className="font-body text-base text-foreground/60" style={{ lineHeight: 1.6 }}>
                      {award.description}
                    </p>
                  </div>
                </div>
              </GraceGlow>
            ))}
            <div className="border-t border-border/30" />
          </div>
        </div>
      </div>

      <footer className="border-t border-border/30 px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Sangeet Satpathy · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}