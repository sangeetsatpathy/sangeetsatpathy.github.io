import React from "react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";

const experiences = [
  {
    title: "Software Engineering Intern",
    org: "Apple",
    period: "June 2026 – September 2026",
    description: "Working in the Apple Ads team. Developing high throughput, low latency internal dashboard system for analyzing ingested data.",
  },
  {
    title: "Undergraduate Researcher",
    org: "Stanford CHARM Lab",
    period: "January 2026 – Present",
    description: "Designed surgical training taskpads, trained YOLO object detection models for surgical cylinder identification, engineered drop-detection systems, and developed metrics pipelines for teleoperation analysis under Dr. Allison Okamura.",
  },
  {
    title: "Software Developer",
    org: "Nandighosh",
    period: "December 2025 – Present",
    description: "Developing a full-stack e-commerce web application for a small business selling Odia tapestries, featuring user authentication, product ordering, order tracking, and admin dashboard.",
  },
  {
    title: "Software Engineer",
    org: "Stanford Student Space Initiative",
    period: "September 2025 – Present",
    description: "Developing flight software for SAMWISE, an imaging CubeSat demonstrating next-generation small-satellite capabilities including deployable solar power, precision attitude sensing, and high-rate communications.",
  },
  {
    title: "Engineering Intern — 5G Network Analysis",
    org: "Verizon",
    period: "June 2024 – July 2024",
    description: "Analyzed large-scale performance datasets for Verizon's C-band 5G FWA network, performing data-driven root-cause analysis on site-level issues and contributing to cell-site planning and optimization.",
  },
  {
    title: "Machinist, CAD Designer, Curriculum Lead, Publicity Lead",
    org: "Gunn Robotics Team (FRC 192)",
    period: "August 2023 – June 2025",
    description: "Led strategy, prototyping, CAD modeling, and precision machining for competition robots. Efforts culminated in a first-place victory at the 2024 FIRST Idaho Regional.",
  },
  {
    title: "Engineering Intern — ThingSpace IoT",
    org: "Verizon",
    period: "June 2023 – July 2023",
    description: "Developed backend services for Verizon's ThingSpace IoT management platform, enhancing Connectivity Management APIs for enterprise device provisioning and monitoring.",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              The Chronicle
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-6">
              Experience
            </h1>
            <p className="font-body text-lg text-foreground/50 max-w-2xl mb-20" style={{ lineHeight: 1.6 }}>
              A record of positions held, systems built, and problems solved.
            </p>
          </PageTransition>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <GraceGlow key={i}>
                <div className="border-t border-border/30 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  {/* Left: metadata */}
                  <div className="md:col-span-4">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      {exp.period}
                    </p>
                    <p className="font-mono text-sm text-primary">{exp.org}</p>
                  </div>

                  {/* Right: content */}
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl md:text-2xl tracking-[0.05em] uppercase text-foreground mb-4">
                      {exp.title}
                    </h3>
                    <p className="font-body text-base text-foreground/70" style={{ lineHeight: 1.6 }}>
                      {exp.description}
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
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Sangeet Satpathy · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}