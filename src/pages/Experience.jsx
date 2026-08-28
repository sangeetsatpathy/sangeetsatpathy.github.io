// @ts-nocheck
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";
import { Plus, X } from "lucide-react";
import MediaGallery, { Lightbox } from "../components/MediaGallery";
import SectionAccordion from "../components/SectionAccordion";
import LinkedText from "../components/LinkedText";
import { experiences } from "../lib/experienceData";

export default function Experience() {
  const [selected, setSelected] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Escape closes panel (when lightbox isn't open)
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape" && !lightboxItem) setSelected(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxItem]);

  // Lock body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-4">
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
                  className="w-full text-left border-t border-border/30 py-12 md:py-16 px-4 -mx-4 md:px-6 md:-mx-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group cursor-pointer transition-colors duration-300 hover:bg-primary/5 rounded-lg"
                >
                  {/* Left: logo + metadata */}
                  <div className="md:col-span-4">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.org}
                        className="h-20 w-auto mb-3 object-contain opacity-90"
                      />
                    )}
                    <p className="font-mono text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">
                      {exp.period}
                    </p>
                    <p className="font-mono text-sm text-primary">{exp.org}</p>
                  </div>

                  {/* Right: content */}
                  <div className="md:col-span-6">
                    <h3 className="font-display text-xl md:text-2xl tracking-[0.05em] uppercase text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                      {exp.title}
                    </h3>
                    <p className="font-body text-base text-foreground/70" style={{ lineHeight: 1.6 }}>
                      <LinkedText text={exp.description} stopPropagation />
                    </p>
                  </div>

                  {/* Expand indicator */}
                  <div className="md:col-span-2 flex items-start justify-end gap-2 pt-1">
                    <span className="font-mono text-sm font-bold tracking-[0.1em] uppercase text-primary text-right">
                      Click to
                      <br />
                      Learn More
                    </span>
                    <Plus
                      size={16}
                      className="text-primary/30 group-hover:text-primary transition-colors duration-500 flex-shrink-0 mt-0.5"
                    />
                  </div>
                </button>
              </GraceGlow>
            ))}
            <div className="border-t border-border/30" />
          </div>
        </div>
      </div>

      {/* Experience panel — plain portal, no Radix, no DismissableLayer interference */}
      {createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              key="exp-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ position: "fixed", inset: 0, zIndex: 50 }}
              className="bg-black/80 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                className="relative w-full max-w-3xl bg-background border border-border/40 rounded-lg max-h-[85vh] overflow-y-auto p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="mb-6">
                  {selected.logo && (
                    <img src={selected.logo} alt={selected.org} className="h-8 w-auto mb-4 object-contain opacity-80" />
                  )}
                  <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary mb-2">
                    {selected.period} · {selected.org}
                  </p>
                  <h2 className="font-display text-xl md:text-2xl tracking-[0.05em] uppercase text-foreground">
                    {selected.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {selected.details.split("\n\n").map((para, i) => (
                    <p key={i} className="font-body text-base text-foreground/70" style={{ lineHeight: 1.7 }}>
                      <LinkedText text={para} />
                    </p>
                  ))}
                </div>
                <MediaGallery media={selected.media} onOpenLightbox={setLightboxItem} />
                <SectionAccordion sections={selected.sections} onOpenLightbox={setLightboxItem} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Lightbox — sibling portal at higher z-index, completely independent */}
      {createPortal(
        <AnimatePresence>
          {lightboxItem && (
            <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
          )}
        </AnimatePresence>,
        document.body
      )}

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
