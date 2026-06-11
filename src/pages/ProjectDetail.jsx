import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import MediaGallery from "../components/MediaGallery";
import SectionAccordion from "../components/SectionAccordion";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import { getProjectBySlug } from "../lib/projectsData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <CornerNav />
        <FilmGrain />
        <div className="text-center">
          <h1 className="font-display text-3xl tracking-[0.1em] uppercase mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="font-mono text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors"
          >
            ← Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      {/* Back link */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <Link
          to="/projects"
          className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/40 hover:text-primary transition-colors duration-500 flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          Archive
        </Link>
      </div>

      {/* Mobile back */}
      <div className="md:hidden pt-6 px-6">
        <Link
          to="/projects"
          className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/40 hover:text-primary transition-colors duration-500 flex items-center gap-2 min-h-[44px]"
        >
          <ArrowLeft size={14} />
          Archive
        </Link>
      </div>

      {/* Split layout */}
      <div className="md:flex md:h-screen">
        {/* Left: fixed image */}
        <div className="md:w-2/5 md:fixed md:inset-y-0 md:left-0">
          <div className="h-64 md:h-full relative overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/30 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden" />
          </div>
        </div>

        {/* Right: scrollable content */}
        <div className="md:w-3/5 md:ml-[40%] md:overflow-y-auto">
          <div className="px-6 md:px-16 lg:px-24 py-12 md:py-24">
            <PageTransition>
              {/* Category */}
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
                {project.category}
              </p>

              {/* Title */}
              <h1 className="font-display text-3xl md:text-5xl tracking-[0.05em] uppercase text-foreground leading-tight mb-12">
                {project.title}
              </h1>

              {/* Metadata block */}
              <div className="border border-border/30 p-6 mb-12">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                      Role
                    </p>
                    <p className="font-mono text-sm text-foreground">{project.role}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                      Year
                    </p>
                    <p className="font-mono text-sm text-foreground">{project.year}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1 border border-border/30 text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                {project.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-body text-base md:text-lg text-foreground/70"
                    style={{ lineHeight: 1.6 }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border/30">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                    Links
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-primary hover:text-foreground transition-colors duration-500 flex items-center gap-2 min-h-[44px]"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <SectionAccordion sections={project.sections} />

              <MediaGallery media={project.media} />

              {/* Next project suggestion */}
              <div className="mt-20 pt-8 border-t border-border/30">
                <Link
                  to="/projects"
                  className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-500"
                >
                  ← Back to All Projects
                </Link>
              </div>
            </PageTransition>
          </div>
        </div>
      </div>
    </div>
  );
}