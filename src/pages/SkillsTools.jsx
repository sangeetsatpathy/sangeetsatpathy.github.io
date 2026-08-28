import React from "react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";
import { skillCategories } from "../lib/skillsData";

export default function SkillsTools() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              The Toolkit
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-6">
              Skills & Tools
            </h1>
            <p className="font-body text-lg text-foreground/50 max-w-2xl mb-20" style={{ lineHeight: 1.6 }}>
              Concepts, languages, and tools built up across research, coursework, and independent projects.
            </p>
          </PageTransition>

          <div className="space-y-16">
            {skillCategories.map((s) => (
              <GraceGlow key={s.category}>
                <div className="border-t border-border/30 pt-8">
                  <h2 className="font-display text-xl md:text-2xl tracking-[0.05em] uppercase text-foreground mb-6">
                    {s.category}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-sm text-foreground/80 border border-primary/30 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GraceGlow>
            ))}
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
