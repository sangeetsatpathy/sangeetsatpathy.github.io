import React, { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";

function PdfAccordion({ label, src }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4 border-t border-border/20 pt-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-mono text-sm font-semibold tracking-[0.25em] uppercase text-primary/70 hover:text-primary transition-colors duration-300 group"
      >
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
          <ChevronDown size={12} />
        </motion.span>
        {open ? "Hide" : "View"} {label}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 border border-border/30 overflow-hidden">
              <iframe
                src={src}
                className="w-full"
                style={{ height: "520px" }}
                allow="autoplay"
                title={label}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const researchPapers = [
  {
    title: "Investigating Optimal Movement Patterns Amongst Robotic Surgeons",
    type: "Research Paper",
    venue: "Accepted for presentation at IROS 2026",
    status: "Accepted",
    description: "Analyzing teleoperation data from expert and novice robotic surgeons to identify movement signatures that correlate with surgical performance outcomes. Part of ongoing research at Stanford's CHARM Lab under Dr. Allison Okamura. Accepted for presentation at IROS 2026.",
    links: [],
    pdfs: [],
  },
];

const highSchoolWorks = [
  {
    title: "Automated Detection of Vehicles for the Visually Impaired to Cross Roads",
    type: "Research Project",
    venue: "2024 Foothill College Research & Service Leadership Symposium (RSLS)",
    description: "Recognizing the limitations of existing apps designed for crosswalks, this research focuses on developing a mobile app that utilizes computer vision to detect moving cars on the road and alerts users through vibrations about the safety of crossing. Built and tested an object detection model across multiple real-world scenarios, analyzing successful detections and detection failures.",
    links: [
      { label: "RSLS 2024 Program", url: "https://foothill.edu/rsl-symposium/2024-program.html" },
      { label: "Research Poster", url: "https://drive.google.com/file/d/1VltIeBdj0qVDzbGFKxElvcAwcsXBNloZ/view" },
    ],
    pdfs: [
      { label: "Paper", src: "https://drive.google.com/file/d/1USBhEPknNVOxlyTQX0RbFf5KLuYOEheh/preview" },
    ],
  },
  {
    title: "The Effects of the Coronavirus on the Brain",
    type: "Literature Review",
    venue: "C&C Editorials, Volume 1, Issue 1 — December 2021",
    description: "A comprehensive literature review examining the neurological impacts of COVID-19, published in the inaugural issue of C&C Editorials.",
    links: [
      { label: "Issue 1", url: "https://www.asciencepro.org/issue1" },
    ],
    pdfs: [
      { label: "Paper", src: "https://drive.google.com/file/d/1MYNKNkxkS690H3Pt15j8NxtUjAaaRFL7/preview" },
    ],
  },
  {
    title: "Addiction: A Summary",
    type: "Literature Review",
    venue: "C&C Editorials, Volume 1, Issue 2 — February 2022",
    description: "A review of the mechanisms, psychology, and societal impacts of addiction, exploring both biological and environmental factors.",
    links: [
      { label: "Issue 2", url: "https://www.asciencepro.org/issue2" },
    ],
    pdfs: [
      { label: "Paper", src: "https://drive.google.com/file/d/1Wh85EHv9MaVb4dsiEz1xBVq2tN_UZ3GW/preview" },
    ],
  },
  {
    title: "Effect of Nature on Urban Health",
    type: "Literature Review",
    venue: "C&C Editorials, Volume 1, Issue 3 — March 2022",
    description: "An exploration of how natural environments and green spaces affect physical and mental health outcomes in urban populations.",
    links: [],
    pdfs: [
      { label: "Paper", src: "https://drive.google.com/file/d/1XO16O5a5xHPKrj70vGebgOXZZoN8i4nU/preview" },
    ],
  },
  {
    title: "Dr. Bernard Harris Supernova Award Research",
    type: "STEM Research",
    venue: "Boy Scouts of America — December 2021",
    description: "Research completed for the Dr. Bernard Harris Supernova Award, which recognizes superior achievement in STEM. Required completing research across two Activity Topics: the plastic recycling industry (Environmental Science) and predicting Old Faithful eruptions (Mathematics).",
    links: [],
    pdfs: [
      { label: "Environmental Science: New Things From Old", src: "https://drive.google.com/file/d/1fJ_qR6LztsBFdDCm_fMOXIqQjzRgzv49/preview" },
      { label: "Mathematics: Predicting Old Faithful's Next Eruption", src: "https://drive.google.com/file/d/1eDHAaIae8NZcEyQApKUj1-kXY4jBMsXw/preview" },
    ],
  },
];

function PubCard({ pub }) {
  return (
    <GraceGlow>
      <div className="border-t border-border/30 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-primary">
              {pub.type}
            </p>
            {pub.status && (
              <span className="font-mono text-sm font-semibold tracking-[0.2em] uppercase px-2 py-0.5 border border-primary/30 text-primary/70">
                {pub.status}
              </span>
            )}
          </div>
          <p className="font-mono text-sm text-foreground/60" style={{ lineHeight: 1.6 }}>
            {pub.venue}
          </p>
        </div>
        <div className="md:col-span-8">
          <h3 className="font-display text-xl md:text-2xl tracking-[0.03em] text-foreground mb-4">
            {pub.title}
          </h3>
          <p className="font-body text-base text-foreground/60 mb-4" style={{ lineHeight: 1.6 }}>
            {pub.description}
          </p>
          {pub.links.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-2">
              {pub.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm tracking-[0.2em] uppercase text-primary/60 hover:text-primary transition-colors duration-500 flex items-center gap-2 min-h-[44px]"
                >
                  {link.label}
                  <ExternalLink size={12} />
                </a>
              ))}
            </div>
          )}
          {pub.pdfs.map((pdf) => (
            <PdfAccordion key={pdf.src} label={pdf.label} src={pdf.src} />
          ))}
        </div>
      </div>
    </GraceGlow>
  );
}

export default function Publications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              The Scrolls
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-6">
              Publications
            </h1>
            <p className="font-body text-lg text-foreground/50 max-w-2xl mb-20" style={{ lineHeight: 1.6 }}>
              Research papers, literature reviews, and scholarly explorations across
              computer vision, neuroscience, environmental science, and STEM.
            </p>
          </PageTransition>

          {/* Research Papers */}
          <div className="mb-16">
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-1">
              Section I
            </p>
            <h2 className="font-display text-2xl md:text-3xl tracking-[0.08em] uppercase text-foreground mb-2">
              Research Papers
            </h2>
            <div className="space-y-0">
              {researchPapers.map((pub, i) => (
                <PubCard key={i} pub={pub} />
              ))}
              <div className="border-t border-border/30" />
            </div>
          </div>

          {/* High School Works */}
          <div>
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-1">
              Section II
            </p>
            <h2 className="font-display text-2xl md:text-3xl tracking-[0.08em] uppercase text-foreground mb-2">
              High School Works
            </h2>
            <div className="space-y-0">
              {highSchoolWorks.map((pub, i) => (
                <PubCard key={i} pub={pub} />
              ))}
              <div className="border-t border-border/30" />
            </div>
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
