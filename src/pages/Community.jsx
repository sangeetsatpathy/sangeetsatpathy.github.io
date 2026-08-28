import React from "react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";

const categories = [
  {
    name: "Founded & Led",
    entries: [
      {
        title: "STEMStart! — Founder & President",
        org: "Non-Profit",
        period: "2021 – Present",
        description:
          "Founded a non-profit teaching STEM to under-represented youth through free, hands-on workshops. 8 workshops held across the SF Bay Area, 241 participants served, with partnerships spanning Planet Bee, UC Berkeley Lawrence Hall of Science, and subject-matter experts from Stanford and Silicon Valley. Topics included Bee-keeping, Hydraulics, Linkages, Nuclear Science, and Electrical Engineering. Winner of the 2024 Glenn A. and Melinda W. Adams Eagle Scout Service Project of the Year Award (Pacific Skyline Council).",
      },
      {
        title: "Founder & President",
        org: "Gunn Intramural Sports Club",
        period: "Jan 2023 – June 2025",
        description:
          "Founded an inclusive recreational sports club at Gunn High School open to all grades and skill levels. Ran high-attendance weekly sessions in Flag Football, Basketball, Volleyball, Dodgeball, Tennis, Badminton, Frisbee, and Soccer — giving students a stress-free outlet amid a demanding academic environment.",
      },
    ],
  },
  {
    name: "Civic & Representation",
    entries: [
      {
        title: "Sole Youth Executive Board Member",
        org: "Pacific Skyline Council, BSA",
        period: "Feb 2024 – Jan 2026",
        description:
          "Served as the only youth member on the governing board of the Pacific Skyline Council — one of 272 BSA councils nationwide, supporting 4,500+ youth across the SF Peninsula. Participated in board governance, policy-making, and program planning as the voice of all PacSky youth members.",
      },
      {
        title: "Student Representative",
        org: "PAUSD District Committees",
        period: "2022 – 2024",
        description:
          "Selected as student voice on two PAUSD (Palo Alto Unified School District) committees: the AI & Technology Committee (2023–24), developing district guidelines on technology ethics and academic integrity; and the Dual Enrollment Committee (2023), as the sole representative from both district high schools, shaping policy on college access for students.",
      },
    ],
  },
  {
    name: "Scouting",
    entries: [
      {
        title: "Eagle Scout & 4 Eagle Palms",
        org: "Boy Scouts of America — Troop 37",
        period: "July 2023",
        description:
          "Attained the rank of Eagle Scout with 4 Eagle Palms after over five years of scouting. Eagle Scout is earned by fewer than 4% of Scouts and represents sustained commitment to leadership, service, and character. The Eagle Scout project was STEMStart!, which subsequently won the 2024 Pacific Skyline Council Service Project of the Year.",
      },
      {
        title: "Scouting Leadership — Six Roles",
        org: "Troop 37, Los Altos",
        period: "2018 – 2025",
        description:
          "Served continuously in six elected or appointed leadership roles across the troop: Den Chief (3 terms) — mentoring Cub Scout dens; Assistant Senior Patrol Leader — training junior officers and running weekly meetings; Troop Guide (3 terms) — teaching skills and rank advancement to new Scouts; Patrol Leader (3 terms) — leading patrol meetings and activities; Quartermaster — managing troop equipment inventory; Troop Webmaster — maintaining the troop website.",
      },
      {
        title: "National Outdoor Achievement Awards (×4)",
        org: "Boy Scouts of America",
        period: "2023 – 2024",
        description:
          "Four National Outdoor Achievement Awards across distinct disciplines: Camping (August 2024) — recognizing sustained high-mileage camping experience; Conservation (August 2024) — recognizing environmental stewardship and conservation projects; Hiking (February 2023) — recognizing long-distance trail completion; Aquatics (February 2023) — recognizing proficiency across open-water swimming, kayaking, snorkeling, scuba, and paddleboarding.",
      },
      {
        title: "Dr. Bernard Harris Supernova Award",
        org: "National BSA STEM Award",
        period: "May 2022",
        description:
          "National-level BSA STEM award requiring completion of core requirements plus two advanced activity topics of the Scout's choosing. Selected topics: Plastic Recycling (Science) — analyzing tire/toy recycling and evaluating the feasibility of fusing plastics with cotton fiber for paper production; Data Inference for Old Faithful Eruptions (Math) — using Desmos graphing tools to model eruption cycle patterns and predict future eruptions.",
      },
    ],
  },
  {
    name: "Service",
    entries: [
      {
        title: "Presidential Volunteer Service Award — Gold (×4)",
        org: "AmeriCorps",
        period: "2018, 2022, 2023, 2024",
        description:
          "Four-time Gold Award recipient — the highest PVSA recognition tier, requiring 100+ volunteer hours annually. Service included food bank distribution, trail clearing, invasive species removal, community garden planting, beach cleanups, clothing and food drives, bench construction in public parks, and organizing Memorial Day flag planting.",
      },
    ],
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              The Citizen
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-6">
              Beyond Engineering
            </h1>
            <p className="font-body text-lg text-foreground/50 max-w-2xl mb-20" style={{ lineHeight: 1.6 }}>
              Service, leadership, and community — the work that happens outside the lab.
            </p>
          </PageTransition>

          <div>
            {categories.map((cat, ci) => (
              <div key={ci}>
                <div className="border-t border-border/30 pt-10 pb-2">
                  <p className="font-mono text-sm font-semibold tracking-[0.4em] uppercase text-primary/80">
                    {cat.name}
                  </p>
                </div>
                {cat.entries.map((entry, i) => (
                  <GraceGlow key={i}>
                    <div className="border-t border-border/20 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
                      <div className="md:col-span-3">
                        <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-1">
                          {entry.period}
                        </p>
                        <p className="font-mono text-sm font-semibold tracking-[0.2em] uppercase text-primary/85">
                          {entry.org}
                        </p>
                      </div>
                      <div className="md:col-span-9">
                        <h3 className="font-display text-lg md:text-xl tracking-[0.05em] uppercase text-foreground mb-3">
                          {entry.title}
                        </h3>
                        <p className="font-body text-base text-foreground/60" style={{ lineHeight: 1.6 }}>
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </GraceGlow>
                ))}
              </div>
            ))}
            <div className="border-t border-border/30" />
          </div>
        </div>
      </div>

      <footer className="border-t border-border/30 px-6 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <p className="font-mono text-sm tracking-[0.15em] uppercase text-muted-foreground">
            Sangeet Satpathy · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
