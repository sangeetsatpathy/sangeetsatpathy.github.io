// @ts-nocheck
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Plus } from "lucide-react";
import MediaGallery, { Lightbox } from "../components/MediaGallery";
import SectionAccordion from "../components/SectionAccordion";

const GH = "https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/raw/refs/heads/master";

const experiences = [
  {
    title: "Software Engineering Intern",
    org: "Apple",
    logo: "/images/apple.png",
    period: "June 2026 – September 2026",
    description: "Working in the Apple Ads team. Developing high throughput, low latency internal dashboard system for analyzing ingested data.",
    details: `Working within Apple's Ads infrastructure team, contributing to a high-throughput, low-latency internal dashboard system used to analyze large volumes of ingested advertising data.

The system is designed for performance at scale — processing real-time data streams and surfacing insights to internal teams. Work involves backend development with a focus on efficiency, reliability, and minimal latency under high load.`,
    media: [],
    sections: [],
  },
  {
    title: "Undergraduate Researcher",
    org: "Stanford CHARM Lab",
    logo: "/images/stanford.png",
    period: "January 2026 – Present",
    description: "Designed surgical training taskpads, trained YOLO object detection models for surgical cylinder identification, engineered drop-detection systems, and developed metrics pipelines for teleoperation analysis under Dr. Allison Okamura.",
    details: `Working under PhD Student Mary Kate Gale and visiting Master's student Shujiro Shobayashi in the lab of Dr. Allison Okamura at Stanford's CHARM Lab.

Designed and built a surgical training taskpad from scratch — including conductive-paint peg detection, LED feedback circuitry, and Arduino firmware to emit lift/place signals for downstream analysis.

Helped develop a metrics pipeline for a DVRK teleoperation study comparing expert and novice robotic surgeons, integrating Arduino peg-detection signals with real-time performance feedback.

Trained and deployed a YOLO object detection model to identify surgical cylinders and pegs, and implemented HSV color segmentation on cropped detections to assess correct cylinder placement orientation.

Engineered a drop-detection system using bounding-box velocity analysis, and prototyped an XGBoost classifier to distinguish "held" vs. "dropped" cylinder states with low latency.`,
    media: [
      { type: "image", src: `${GH}/charm_vids/charm_taskpad.png`, alt: "Surgical Training Taskpad" },
      { type: "video", src: `${GH}/charm_vids/object_detection.mp4`, alt: "YOLO Object Detection" },
      { type: "video", src: `${GH}/charm_vids/hsv.mp4`, alt: "HSV Color Segmentation" },
      { type: "video", src: `${GH}/charm_vids/drop.mp4`, alt: "Drop Detection" },
      { type: "video", src: `${GH}/charm_vids/orientation_check.mp4`, alt: "Orientation Check" },
    ],
    sections: [],
  },
  {
    title: "Software Developer",
    org: "Nandighosh",
    logo: null,
    period: "December 2025 – Present",
    description: "Developing a full-stack e-commerce web application for a small business selling Odia tapestries, featuring user authentication, product ordering, order tracking, and admin dashboard.",
    details: `Developing a full-stack e-commerce web application for a small business selling Odia tapestries — handwoven textiles with deep cultural roots in Odisha, India.

Built entirely without frontend frameworks, demonstrating deep understanding of vanilla JavaScript, DOM manipulation, and server-side architecture.

Features include user authentication and session management, product catalog with search and filtering, shopping cart and checkout flow, order history and tracking, and a comprehensive admin dashboard for inventory and catalog management.

The backend is built on Node.js with MongoDB, exposing a REST API consumed by the frontend. The project is currently in active development.`,
    media: [],
    sections: [],
  },
  {
    title: "Software Engineer",
    org: "Stanford Student Space Initiative",
    logo: "/images/stanford.png",
    period: "September 2025 – Present",
    description: "Developing flight software for SAMWISE, an imaging CubeSat demonstrating next-generation small-satellite capabilities including deployable solar power, precision attitude sensing, and high-rate communications.",
    details: `Developing flight software for SAMWISE, an imaging CubeSat built to demonstrate next-generation small-satellite capabilities. The mission integrates deployable solar power, precision attitude sensing, and high-rate communications into a compact platform. My work contributes to the core software that coordinates and manages these systems.

Task example: added a lightweight heartbeat-check mechanism for the Payload Raspberry Pi to improve subsystem robustness, allowing the spacecraft to detect an unresponsive payload and attempt automatic recovery.

Working across the flight-software stack, including power management, subsystem coordination, and command-handling logic. The system is designed for autonomous operation, with safeguards to ensure stable imaging and communication throughout the mission. SAMWISE ultimately serves as a technology demonstrator showing how small satellites can execute sophisticated, multi-subsystem missions in low-Earth orbit.`,
    media: [],
    sections: [],
  },
  {
    title: "Engineering Intern — 5G Network Analysis",
    org: "Verizon",
    logo: "/images/verizon.png",
    period: "June 2024 – July 2024",
    description: "Analyzed large-scale performance datasets for Verizon's C-band 5G FWA network, performing data-driven root-cause analysis on site-level issues and contributing to cell-site planning and optimization.",
    details: `Analyzed large-scale performance datasets for Verizon's C-band 5G Fixed Wireless Access (FWA) network across multiple Northern California counties, identifying patterns related to throughput degradation, drop-rate anomalies, and RF interference to improve 5G Home Internet reliability.

Performed data-driven root-cause analysis on site-level issues — such as misconfigured antenna tilt, build errors, and timing/synchronization faults — using KPI trends, RF metrics, and geospatial coverage models, leading to measurable improvements in customer network experience.

Contributed to the data and modeling workflows underlying cell-site planning and optimization, including antenna coverage simulations (power, height, azimuth), signal propagation analysis, and EMF compliance checks; collaborated with engineering teams to validate designs and track system performance over time.

Gained hands-on experience with key wireless technologies and metrics (5G SA vs. NSA, TDD vs. FDD, guard periods, QAM, and RF KPIs), applying this domain knowledge to interpret network data and support performance optimization decisions.

Sole intern from PAUSD. 6 weeks, 32 hours per week. Through the NAF Academy of Engineering internship program.`,
    media: [],
    sections: [],
  },
  {
    title: "Machinist, CAD Designer, Curriculum Lead, Publicity Lead",
    org: "Gunn Robotics Team (FRC 192)",
    logo: "/images/grt.png",
    period: "August 2023 – June 2025",
    description: "Led strategy, prototyping, CAD modeling, and precision machining for competition robots. Efforts culminated in a first-place victory at the 2024 FIRST Idaho Regional.",
    details: `The Gunn Robotics Team (FRC 192) is a completely student-run team that participates in the annual FIRST Robotics Competition. I served in multiple leadership and technical roles over two competitive seasons.`,
    media: [],
    sections: [
      {
        title: "Machinist & CAD Designer",
        content: `Active leader in strategizing and brainstorming robot designs for optimal scoring efficiency, reliability, and ease of control.

Developed and tested prototypes using 3D-printed, laser-cut, and wooden parts to analyze the benefits and setbacks of each design.

Upon finalizing robot designs, developed precise CAD models of robot parts to visualize mechanisms before building.

Used the CNC, lathe, mill, drill press, vertical bandsaw (wood and metal), and horizontal bandsaw to cut metal stock down to specified dimensions.

After helping assemble, wire, and program the robot, provided critical feedback during testing phases to enhance robot performance.

These efforts culminated in a first-place victory at the March 2024 FIRST Idaho Regional, securing a spot at the 2024 World Championship.`,
      },
      {
        title: "Curriculum Lead",
        content: `As Curriculum Lead for the 2024 GRT Summer Camp, developed an introductory curriculum with concepts spanning robotics, computer science, engineering, and math.

This curriculum was taught at the Summer Camp and helped incoming 9th graders decide to learn engineering in high school.

Designed and guided camp participants through fun robotics challenges where they applied their learning.`,
      },
      {
        title: "Publicity Lead",
        content: `Historically, GRT has been extremely competitive in admissions, with far more applicants than available positions. However, GRT applications from within Gunn High School were significantly lower in the 2023–2024 academic year. This unique role was created to give GRT a significant on-campus presence.

Responsibilities included coordinating with the Student Executive Council and Student Activities Director to market the team, planning and conducting social media publicity campaigns, reshaping brand awareness of GRT, building partnerships with other campus organizations, and designing and running robot showcases — such as the "T-shirt Launcher" which shoots T-shirts into the audience during school events.`,
      },
      {
        title: "Haunted House Mechanisms",
        content: `During off-season, the team participates in community outreach events, including building a Haunted House for an elementary school.

Designed, CAD-modeled, and machined wooden Halloween-themed mechanisms powered by pneumatics: ghosts popping out from the house, skeletons petting styrofoam cats, moving creepers, and more.`,
        media: [
          { type: "video", src: `${GH}/HH_1.mp4` },
          { type: "video", src: `${GH}/HH_2.mp4` },
          { type: "video", src: `${GH}/HH_3.mp4` },
        ],
      },
      {
        title: "Shop Project Robot",
        content: `Before the competition season, GRT hosts a "Shop Project" competition where both GRT classes compete against each other in a FIRST-style mini robotics competition. This helps the team practice for the competition season.

My shop project robot used a funnel to intake game pieces and used pneumatics to transfer the pieces into the shooter. The one-wheeled flywheel shooter had a ramp designed to launch the note at a precise angle into the scoring objective.`,
        media: [
          { type: "image", src: "https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/blob/master/shop_project_pic.png?raw=true", alt: "Shop Project Robot CAD" },
          { type: "video", src: `${GH}/Final_ShopProject_Video.mp4` },
        ],
      },
      {
        title: "Dissonance — The Robot That Won Regionals",
        content: `Dissonance was GRT's robot for the 2024 FIRST "Crescendo!" challenge. It features a roller-intake system powered by linkages, a 2-stage elevator mechanism, a winch-powered climb mechanism, and a double-roller shooter mechanism with an adjustable launch angle.`,
        media: [
          { type: "image", src: "https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/blob/master/dissonance_pic.png?raw=true", alt: "Dissonance Robot CAD" },
          { type: "video", src: `${GH}/Final_Dissonance_Video.mp4` },
        ],
      },
    ],
  },
  {
    title: "Engineering Intern — ThingSpace IoT",
    org: "Verizon",
    logo: "/images/verizon.png",
    period: "June 2023 – July 2023",
    description: "Developed backend services for Verizon's ThingSpace IoT management platform, enhancing Connectivity Management APIs for enterprise device provisioning and monitoring.",
    details: `Developed backend services for Verizon's ThingSpace IoT management platform, enhancing the Connectivity Management APIs that allow enterprise customers to provision devices, manage network access, query device status, and monitor usage at scale.

Implemented and optimized REST APIs for core device-lifecycle operations — including activation, suspension, deactivation, and status checks — ensuring reliability, correctness, and consistent behavior across millions of IoT endpoints.

Collaborated with cross-functional engineering teams to integrate support for diverse IoT hardware (modems, modules, chipsets) into the platform, validating API functionality against real-world device behavior and network conditions.

Applied knowledge of LTE-MBB and LTE-MTC cellular technologies to inform API design decisions, improve integration with underlying connectivity systems, and enhance the platform's ability to manage low-power, wide-area IoT devices.

6 weeks, 32 hours per week. One of 10 students selected for the NAF internship (1 of 2 from PAUSD), from 34 applicants across 3 NAF Academy high schools in the SF Bay Area.`,
    media: [],
    sections: [],
  },
  {
    title: "High School Apprentice",
    org: "Google",
    logo: "/images/google.png",
    period: "July 2023",
    description: "Two-week apprenticeship exploring multiple fields within technology at Google.",
    details: `Learned about several fields in technology: Product Management, User Experience, Generative AI, Machine Learning, Finance, and Software Development.

2 weeks, 10 hours per week.`,
    media: [],
    sections: [],
  },
  {
    title: "Computer Science Tutor",
    org: "theCoderSchool Palo Alto",
    logo: null,
    period: "February 2023 – March 2025",
    description: "Taught Python and Java to elementary and middle school students on a 1:1 basis, developing and adapting curriculum to each student's level.",
    details: `Taught Python and Java to elementary and middle school students on a 1:1 basis.

Developed and modified curriculum as per each individual student's knowledge level, meeting them where they were and progressively building their skills.

3 hours per week.`,
    media: [],
    sections: [],
  },
  {
    title: "Scientific Researcher & Journalist",
    org: "Advanced Science Exploratory Program",
    logo: null,
    period: "September 2021 – August 2022",
    description: "Wrote and published scientific articles on neuroscience topics in C&C Editorials, developing skills in scientific interpretation and communication.",
    details: `Wrote scientific articles by researching several topics related to neuroscience. These articles were published in ASciencePro's journal, C&C Editorials:

"The Effects of the Coronavirus on the Brain" — Issue 1
"Addiction: A Summary" — Issue 2
"Effect of Nature on Urban Health" — Issue 3

Through this experience, developed rigorous skills in the interpretation of scientific research, the dissemination of scientific material to a non-scientific audience, the utilization of written, video-based, and podcast formats to summarize key findings, and the interrogation of a study's methodological rigor and articulation of methods and findings.`,
    media: [],
    sections: [],
  },
  {
    title: "Mathematics Tutor",
    org: "Self-Employed",
    logo: null,
    period: "June 2021 – May 2023",
    description: "Tutored two middle school students on Algebra 1 and Geometry Honors, teaching concepts in advance and assigning challenging problems.",
    details: `Tutored 2 middle school students on Algebra 1 and Geometry Honors concepts.

Taught concepts in advance of their coursework and gave them difficult problems to solve, pushing them beyond the standard curriculum.`,
    media: [],
    sections: [],
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

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
                  {/* Left: logo + metadata */}
                  <div className="md:col-span-4">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.org}
                        className="h-7 w-auto mb-3 object-contain grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-500"
                      />
                    )}
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
        <DialogContent className="max-w-3xl w-full bg-background border-border/40 max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader className="mb-6">
                {selected.logo && (
                  <img
                    src={selected.logo}
                    alt={selected.org}
                    className="h-8 w-auto mb-4 object-contain opacity-80"
                  />
                )}
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
              <MediaGallery media={selected.media} onOpenLightbox={setLightboxItem} />
              <SectionAccordion sections={selected.sections} onOpenLightbox={setLightboxItem} />
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox rendered outside the Dialog so Radix never sees the clicks */}
      {createPortal(
        <AnimatePresence>
          {lightboxItem && (
            <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
          )}
        </AnimatePresence>,
        document.body
      )}

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
