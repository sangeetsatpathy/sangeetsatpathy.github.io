import React, { useState } from "react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Plus } from "lucide-react";
import MediaGallery from "../components/MediaGallery";

const experiences = [
  {
    title: "Software Engineering Intern",
    org: "Apple",
    period: "June 2026 – September 2026",
    description: "Working in the Apple Ads team. Developing high throughput, low latency internal dashboard system for analyzing ingested data.",
    details: `Working within Apple's Ads infrastructure team, contributing to a high-throughput, low-latency internal dashboard system used to analyze large volumes of ingested advertising data.

The system is designed for performance at scale — processing real-time data streams and surfacing insights to internal teams. Work involves backend development with a focus on efficiency, reliability, and minimal latency under high load.`,
    media: [],
  },
  {
    title: "Undergraduate Researcher",
    org: "Stanford CHARM Lab",
    period: "January 2026 – Present",
    description: "Designed surgical training taskpads, trained YOLO object detection models for surgical cylinder identification, engineered drop-detection systems, and developed metrics pipelines for teleoperation analysis under Dr. Allison Okamura.",
    details: `Working under PhD Student Mary Kate Gale and visiting Master's student Shujiro Shobayashi in the lab of Dr. Allison Okamura at Stanford's CHARM Lab.

Designed and built a surgical training taskpad from scratch — including conductive-paint peg detection, LED feedback circuitry, and Arduino firmware to emit lift/place signals for downstream analysis.

Helped develop a metrics pipeline for a DVRK teleoperation study comparing expert and novice robotic surgeons, integrating Arduino peg-detection signals with real-time performance feedback.

Trained and deployed a YOLO object detection model to identify surgical cylinders and pegs, and implemented HSV color segmentation on cropped detections to assess correct cylinder placement orientation.

Engineered a drop-detection system using bounding-box velocity analysis, and prototyped an XGBoost classifier to distinguish "held" vs. "dropped" cylinder states with low latency.`,
    media: [],
  },
  {
    title: "Software Developer",
    org: "Nandighosh",
    period: "December 2025 – Present",
    description: "Developing a full-stack e-commerce web application for a small business selling Odia tapestries, featuring user authentication, product ordering, order tracking, and admin dashboard.",
    details: `Developing a full-stack e-commerce web application for a small business selling Odia tapestries — handwoven textiles with deep cultural roots in Odisha, India.

Built entirely without frontend frameworks, demonstrating deep understanding of vanilla JavaScript, DOM manipulation, and server-side architecture.

Features include user authentication and session management, product catalog with search and filtering, shopping cart and checkout flow, order history and tracking, and a comprehensive admin dashboard for inventory and catalog management.

The backend is built on Node.js with MongoDB, exposing a REST API consumed by the frontend. The project is currently in active development.`,
    media: [],
  },
  {
    title: "Software Engineer",
    org: "Stanford Student Space Initiative",
    period: "September 2025 – Present",
    description: "Developing flight software for SAMWISE, an imaging CubeSat demonstrating next-generation small-satellite capabilities including deployable solar power, precision attitude sensing, and high-rate communications.",
    details: `Developing flight software for SAMWISE, an imaging CubeSat built by Stanford SSI to demonstrate next-generation small-satellite capabilities. The mission integrates deployable solar power, precision attitude sensing, and high-rate communications into a compact platform.

Contributions include adding a lightweight heartbeat-check mechanism for the Payload Raspberry Pi to improve subsystem robustness — allowing the spacecraft to detect an unresponsive payload and attempt automatic recovery.

Working across the flight-software stack, including power management, subsystem coordination, and command-handling logic. The system is designed for autonomous operation, with safeguards to ensure stable imaging and communication throughout the mission.

SAMWISE serves as a technology demonstrator showing how small satellites can execute sophisticated, multi-subsystem missions in low-Earth orbit.`,
    media: [],
  },
  {
    title: "Engineering Intern — 5G Network Analysis",
    org: "Verizon",
    period: "June 2024 – July 2024",
    description: "Analyzed large-scale performance datasets for Verizon's C-band 5G FWA network, performing data-driven root-cause analysis on site-level issues and contributing to cell-site planning and optimization.",
    details: `Worked within Verizon's network engineering team on large-scale performance analysis for the C-band 5G Fixed Wireless Access (FWA) network.

Analyzed site-level performance datasets to identify patterns indicative of degraded service, performing data-driven root-cause analysis on underperforming cell sites.

Contributed to cell-site planning and optimization workflows, helping prioritize remediation efforts based on quantitative performance metrics. Work spanned data analysis, visualization, and presenting findings to engineering stakeholders.`,
    media: [],
  },
  {
    title: "Machinist, CAD Designer, Curriculum Lead, Publicity Lead",
    org: "Gunn Robotics Team (FRC 192)",
    period: "August 2023 – June 2025",
    description: "Led strategy, prototyping, CAD modeling, and precision machining for competition robots. Efforts culminated in a first-place victory at the 2024 FIRST Idaho Regional.",
    details: `Served in multiple leadership and technical roles on Gunn Robotics Team (GRT), FRC Team 192, over two competitive seasons.

As Machinist and CAD Designer, responsibilities included strategizing and brainstorming robot designs for optimal scoring efficiency, developing and testing prototypes using 3D-printed, laser-cut, and wooden parts, creating precise CAD models, and machining metal stock using CNC, lathe, mill, drill press, and bandsaw.

As Curriculum Lead, developed and delivered technical training content for new team members across mechanical, electrical, and software disciplines.

The 2024 robot, "Dissonance," featured a roller-intake system, 2-stage elevator, winch-powered climb mechanism, and a double-roller shooter with adjustable launch angle. These efforts culminated in a first-place victory at the 2024 FIRST Idaho Regional, securing a spot at the 2024 World Championship.`,
    media: [],
  },
  {
    title: "Engineering Intern — ThingSpace IoT",
    org: "Verizon",
    period: "June 2023 – July 2023",
    description: "Developed backend services for Verizon's ThingSpace IoT management platform, enhancing Connectivity Management APIs for enterprise device provisioning and monitoring.",
    details: `Worked on Verizon's ThingSpace IoT platform, an enterprise-grade system for managing large fleets of connected devices across industries including logistics, healthcare, and utilities.

Developed and enhanced backend services supporting the Connectivity Management API, which enables enterprise customers to provision, activate, and monitor IoT devices at scale.

Work involved understanding existing API architecture, implementing enhancements to device provisioning and monitoring endpoints, and contributing to internal documentation and testing.`,
    media: [],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);

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
                <button
                  onClick={() => setSelected(exp)}
                  className="w-full text-left border-t border-border/30 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group cursor-pointer"
                >
                  {/* Left: metadata */}
                  <div className="md:col-span-4">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      {exp.period}
                    </p>
                    <p className="font-mono text-sm text-primary">{exp.org}</p>
                  </div>

                  {/* Right: content */}
                  <div className="md:col-span-7">
                    <h3 className="font-display text-xl md:text-2xl tracking-[0.05em] uppercase text-foreground mb-4">
                      {exp.title}
                    </h3>
                    <p className="font-body text-base text-foreground/70" style={{ lineHeight: 1.6 }}>
                      {exp.description}
                    </p>
                  </div>

                  {/* Expand indicator */}
                  <div className="md:col-span-1 flex items-start justify-end pt-1">
                    <Plus
                      size={16}
                      className="text-primary/30 group-hover:text-primary transition-colors duration-500"
                    />
                  </div>
                </button>
              </GraceGlow>
            ))}
            <div className="border-t border-border/30" />
          </div>
        </div>
      </div>

      {/* Detail modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl bg-background border-border/40 max-h-[80vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader className="mb-6">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                  {selected.period} · {selected.org}
                </p>
                <DialogTitle className="font-display text-xl md:text-2xl tracking-[0.05em] uppercase text-foreground">
                  {selected.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {selected.details.split("\n\n").map((para, i) => (
                  <p key={i} className="font-body text-base text-foreground/70" style={{ lineHeight: 1.7 }}>
                    {para}
                  </p>
                ))}
              </div>
              <MediaGallery media={selected.media} />
            </>
          )}
        </DialogContent>
      </Dialog>

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
