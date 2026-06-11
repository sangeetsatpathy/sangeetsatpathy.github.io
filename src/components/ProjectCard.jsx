import React from "react";
import { Link } from "react-router-dom";
import GraceGlow from "./GraceGlow";

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block focus:outline-none focus:ring-2 focus:ring-primary">
      <GraceGlow className="relative aspect-[3/2] bg-card overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-105 group-hover:grayscale"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] flex flex-col justify-end p-6 z-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-primary mb-2">
            {project.category}
          </p>
          <h3 className="font-display text-lg md:text-xl tracking-wide text-foreground">
            {project.title}
          </h3>
        </div>
        {/* Always-visible title on mobile */}
        <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-4 z-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-1">
            {project.category}
          </p>
          <h3 className="font-display text-sm tracking-wide text-foreground">
            {project.title}
          </h3>
        </div>
      </GraceGlow>
    </Link>
  );
}