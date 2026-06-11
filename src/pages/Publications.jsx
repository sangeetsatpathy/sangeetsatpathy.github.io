import React from "react";
import { ExternalLink } from "lucide-react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";

const publications = [
  {
    title: "Automated Detection of Vehicles for the Visually Impaired to Cross Roads",
    type: "Research Project",
    venue: "2024 Foothill College Research & Service Leadership Symposium (RSLS)",
    description: "Developed a mobile app using computer vision to detect moving cars and alert visually impaired users about crossing safety. Analyzed object detection model performance across different scenarios.",
    links: [
      { label: "Research Poster", url: "https://drive.google.com/file/d/1VltIeBdj0qVDzbGFKxElvcAwcsXBNloZ/view" },
    ],
  },
  {
    title: "The Effects of the Coronavirus on the Brain",
    type: "Literature Review",
    venue: "C&C Editorials, Volume 1, Issue 1 — December 2021",
    description: "A comprehensive literature review examining the neurological impacts of COVID-19, published in the inaugural issue of C&C Editorials.",
    links: [
      { label: "Publication", url: "https://www.asciencepro.org/issue1" },
    ],
  },
  {
    title: "Addiction: A Summary",
    type: "Literature Review",
    venue: "C&C Editorials, Volume 1, Issue 2 — February 2022",
    description: "A review of the mechanisms, psychology, and societal impacts of addiction, exploring both biological and environmental factors.",
    links: [
      { label: "Publication", url: "https://www.asciencepro.org/issue2" },
    ],
  },
  {
    title: "Effect of Nature on Urban Health",
    type: "Literature Review",
    venue: "C&C Editorials, Volume 1, Issue 3 — March 2022",
    description: "An exploration of how natural environments and green spaces affect physical and mental health outcomes in urban populations.",
    links: [],
  },
  {
    title: "Dr. Bernard Harris Supernova Award Research",
    type: "STEM Research",
    venue: "Boy Scouts of America — December 2021",
    description: "Research on the plastic recycling industry and Old Faithful eruption inference, conducted for the Dr. Bernard Harris Supernova Award recognizing superior achievement in STEM fields.",
    links: [],
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
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

          <div className="space-y-0">
            {publications.map((pub, i) => (
              <GraceGlow key={i}>
                <div className="border-t border-border/30 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
                  <div className="md:col-span-4">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                      {pub.type}
                    </p>
                    <p className="font-mono text-xs text-foreground/40" style={{ lineHeight: 1.6 }}>
                      {pub.venue}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl md:text-2xl tracking-[0.03em] text-foreground mb-4">
                      {pub.title}
                    </h3>
                    <p className="font-body text-base text-foreground/60 mb-6" style={{ lineHeight: 1.6 }}>
                      {pub.description}
                    </p>
                    {pub.links.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {pub.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs tracking-[0.2em] uppercase text-primary/60 hover:text-primary transition-colors duration-500 flex items-center gap-2 min-h-[44px]"
                          >
                            {link.label}
                            <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
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