import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";

function Expandable({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 text-left py-3 min-h-[44px] group"
      >
        {open ? (
          <ChevronDown size={14} className="text-primary flex-shrink-0" />
        ) : (
          <ChevronRight size={14} className="text-muted-foreground flex-shrink-0" />
        )}
        <span className="font-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors">
          {title}
        </span>
      </button>
      {open && <div className="pl-7 pb-4">{children}</div>}
    </div>
  );
}

function CourseList({ courses }) {
  return (
    <ul className="space-y-1.5">
      {courses.map((c, i) => {
        const course = typeof c === "string" ? { label: c } : c;
        return (
          <li key={i} className="font-body text-sm text-foreground/75" style={{ lineHeight: 1.6 }}>
            {course.url ? (
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-foreground transition-colors"
              >
                {course.label}
              </a>
            ) : (
              course.label
            )}
          </li>
        );
      })}
    </ul>
  );
}

const certificates = [
  { label: "NAFTrack Certificate — Engineering (NAF, June 2025)", url: "https://naf.org/our-academies/career-pathways/academy-of-engineering/" },
  { label: "Certificate of Achievement — Research, Design, and Development for Global Good (Foothill College, June 2024)", url: "https://catalog.foothill.edu/degrees-certificates/learning-in-new-media-classrooms/#text" },
  { label: "Certificate of Achievement — Software Development in C++ (Foothill College, December 2023)", url: "https://catalog.foothill.edu/degrees-certificates/computer-science/index.html#text" },
  { label: "Certificate of Achievement — Software Development in Python (Foothill College, December 2023)", url: "https://catalog.foothill.edu/degrees-certificates/computer-science/index.html#text" },
  { label: "Certificate of Achievement — Advanced Software Development (Foothill College, March 2023)", url: "https://catalog.foothill.edu/degrees-certificates/computer-science/index.html#text" },
  { label: "Certificate of Achievement — Software Development in Java (Foothill College, March 2023)", url: "https://catalog.foothill.edu/degrees-certificates/computer-science/index.html#text" },
  { label: "Certified Onshape Associate — CAD (Onshape, May 2022)", url: "https://learn.onshape.com/courses/certified-onshape-associate" },
  { label: "NESA Lifetime Member (August 2023)" },
  { label: "PADI Open Water Diver Certification (August 2019)" },
];

export default function Education() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-primary mb-4">
              The Archive of Knowledge
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-20">
              Education
            </h1>
          </PageTransition>

          {/* Stanford */}
          <div className="border-t border-border/30 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Expected June 2028
                </p>
                <p className="font-mono text-sm font-semibold text-primary">Stanford University</p>
                <p className="font-mono text-sm text-foreground/65 mt-1">GPA: 3.922 / 4.0</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl tracking-[0.05em] uppercase text-foreground mb-2">
                  BS, Electrical Engineering & Computer Science
                </h3>
                 <Expandable title="Planned Courses 2026–2027" defaultOpen>
                  <CourseList courses={[
                    { label: "EE102A (Signals and Systems I)", url: "https://explorecourses.stanford.edu/search?q=EE102A" },
                    { label: "EE108 (Digital System Design)", url: "https://explorecourses.stanford.edu/search?q=EE108" },
                    { label: "EE278 (Probability and Statistical Inference)", url: "https://web.stanford.edu/class/ee278/" },
                    { label: "EE65 (Modern Physics for Engineers)", url: "https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&catalog&q=physics+65" },
                    { label: "CS161 (Design and Analysis of Algorithms)", url: "https://cs161-stanford.github.io/" },
                    { label: "EE263 (Singular Value Decomposition)", url: "https://ee263.stanford.edu/" },
                    { label: "CS140E (Operating Systems Implementation)", url: "https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&q=CS140E" },
                    { label: "CS231N (Deep Learning for Computer Vision)", url: "https://cs231n.stanford.edu/" },
                    { label: "EE102B (Signals and Systems II)", url: "https://explorecourses.stanford.edu/search?q=EE102B" },
                    { label: "EE142 (Engineering Electromagnetics)", url: "https://explorecourses.stanford.edu/search?view=catalog&filter-coursestatus-Active=on&page=0&q=EE142" },
                  ]} />
                </Expandable>
                
                <Expandable title="Courses 2025–2026" defaultOpen>
                  <CourseList courses={[
                    { label: "Quantum Computing (CS259Q)", url: "https://bulletin.stanford.edu/courses/2136071" },
                    { label: "Machine Learning (CS229)", url: "https://cs229.stanford.edu/" },
                    { label: "Computer Systems from the Ground Up (CS107E)", url: "https://web.stanford.edu/class/cs107e/" },
                    { label: "Circuits I (EE101A)", url: "https://bulletin.stanford.edu/courses/2031031" },
                    { label: "Automata & Complexity Theory (CS154)", url: "https://bulletin.stanford.edu/courses/1056821" },
                    { label: "Probability for Computer Scientists (CS109)", url: "https://web.stanford.edu/class/cs109/" },
                    { label: "Programming Abstractions (CS106B)", url: "https://web.stanford.edu/class/cs106b/" },
                    { label: "Enrichment Adventures in Programming Abstractions (CS106M)", url: "https://web.stanford.edu/class/cs106m/syllabus" },
                    { label: "Differential Equations with Linear Algebra (Math 53)", url: "https://web.stanford.edu/class/math53/" },
                  ]} />
                </Expandable>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="border-t border-border/30 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Aug 2021 – June 2025
                </p>
                <p className="font-mono text-sm font-semibold text-primary">Henry M. Gunn High School</p>
                <p className="font-mono text-sm text-foreground/65 mt-1">GPA: 4.0 UW / 4.45 W</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl tracking-[0.05em] uppercase text-foreground mb-2">
                  High School Diploma
                </h3>
                <Expandable title="Relevant Courses" defaultOpen>
                  <CourseList courses={[
                    { label: "Engineering Technology (Gunn Robotics Team)", url: "https://www.gunnrobotics.com/" },
                    "AP Physics C (Mechanics, Electricity and Magnetism)",
                    "Digital Electronics",
                    "AP Calculus BC",
                    "AP Chemistry",
                    { label: "AAR (Advanced Authentic Research)", url: "https://aar.pausd.org/" },
                    "Principles of Engineering and Robotics Honors",
                    "AP Computer Science A",
                    "Introduction to Engineering  and Design Honors"
                  ]} />
                </Expandable>

                <p className="font-body text-base text-foreground/75 mb-4" style={{ lineHeight: 1.6 }}>
                  French National Honor Society · Track & Field (2022, 2023)
                </p>
              </div>
            </div>
          </div>

          {/* Dual Enrollment */}
          <div className="border-t border-border/30 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Aug 2021 – May 2025
                </p>
                <p className="font-mono text-sm font-semibold text-primary">
                  <a href="https://deanza.edu/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    De Anza College
                  </a>
                  {" & "}
                  <a href="https://foothill.edu/index.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground transition-colors">
                    Foothill College
                  </a>
                </p>
                <p className="font-mono text-sm text-foreground/65 mt-1">GPA: 4.0 · Dean's List</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl tracking-[0.05em] uppercase text-foreground mb-2">
                  Dual Enrollment
                </h3>
                <Expandable title="De Anza College (2024–2025)">
                  <CourseList courses={[
                    "Multivariable Calculus Part 2 (Math 1D)",
                    "Linear Algebra (Math 2B)",
                  ]} />
                </Expandable>
                <Expandable title="Foothill College (2023–2024)">
                  <CourseList courses={[
                    "Discrete Mathematics (Math 22)", "Multivariable Calculus Part 1 (Math 1C)",
                    "Search/Research Internet (LINC 66C)", "Design Thinking (LINC 77)",
                    "Cloud-Based Data Analysis (LINC 63)", "Online Collaboration Tools (LINC 90C)",
                    "Global Project-Based Learning (LINC 58)", "Cloud-Based Publishing (LINC 66E)",
                    "Multi-media Project Production (LINC 79)",
                  ]} />
                </Expandable>
                <Expandable title="Foothill College (2022–2023)">
                  <CourseList courses={[
                    "Advanced Data Structures & Algorithms in Java (CS 1C)",
                    "Intro to Database Management Systems (CS 31A)",
                    "Elementary Statistics (Math 10)",
                    "Intermediate Software Design in C++ (CS 2B)",
                  ]} />
                </Expandable>
                <Expandable title="Foothill College (2021–2022)">
                  <CourseList courses={[
                    "Object-Oriented Programming in Java (CS 1A)", "Object-Oriented Programming in Python (CS 3A)", "Object-Oriented Programming in C++ (CS 2A)", "Intermediate Software Design in Java (CS 1B)",
                    "Intermediate Software Design in Python (CS 3B)", "JavaScript for Programmers (CS 22A)",
                  ]} />
                </Expandable>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="border-t border-border/30 py-12">
            <h2 className="font-display text-lg tracking-[0.15em] uppercase text-foreground mb-8">
              Certificates
            </h2>
            <ul className="space-y-3">
              {certificates.map((cert, i) => (
                <li key={i} className="font-body text-base text-foreground/80 pl-4 border-l-2 border-primary/30" style={{ lineHeight: 1.6 }}>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 hover:text-primary transition-colors"
                    >
                      {cert.label}
                    </a>
                  ) : (
                    cert.label
                  )}
                </li>
              ))}
            </ul>
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