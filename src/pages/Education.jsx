import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import CornerNav from "../components/CornerNav";
import FilmGrain from "../components/FilmGrain";
import PageTransition from "../components/PageTransition";
import GraceGlow from "../components/GraceGlow";

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
      {courses.map((c, i) => (
        <li key={i} className="font-body text-sm text-foreground/75" style={{ lineHeight: 1.6 }}>
          {c}
        </li>
      ))}
    </ul>
  );
}

const skills = [
  {
    category: "Machine Learning & AI",
    items: "Computer Vision (Object Detection, Object Tracking, YOLO), Reinforcement Learning (Continual RL, MARL), Deep Learning (Neural Networks), Natural Language Processing, Tokenization, Supervised Learning (Regression, Classification), Machine Learning Algorithms, ML Lifecycle (Data Processing, Feature Engineering, Hyperparameter Tuning, Model Evaluation), Statistical Analysis, Probability — scikit-learn, Pandas, NumPy, OpenCV, Matplotlib",
  },
  {
    category: "Robotics",
    items: "CAD (Computer-Aided Design), Mechanical Design, PID Control, Electrical Wiring & Soldering, Kinematics, Machining (Lathe, Mill)",
  },
  {
    category: "Programming Languages, Web & Databases",
    items: "Python, C++, Java, C, JavaScript, HTML, CSS, SQL, MongoDB",
  },
  {
    category: "Software Engineering",
    items: "Algorithms, Data Structures, API Development (REST, Postman), Full-Stack Development, Object-Oriented Design, Debugging, Testing, Node.js, Git, AWS EC2",
  },
  {
    category: "Systems & Low-Level",
    items: "Embedded Systems, Bare-Metal Programming, Interrupts, Event-Driven Systems, Computer Architecture, Distributed Systems, IoT, RF Protocols, Serial Communication (SPI, I2C, UART)",
  },
];

const certificates = [
  "NAFTrack Certificate — Engineering (NAF, June 2025)",
  "Certificate of Achievement — Research, Design, and Development for Global Good (Foothill College, June 2024)",
  "Certificate of Achievement — Software Development in C++ (Foothill College, December 2023)",
  "Certificate of Achievement — Software Development in Python (Foothill College, December 2023)",
  "Certificate of Achievement — Advanced Software Development (Foothill College, March 2023)",
  "Certificate of Achievement — Software Development in Java (Foothill College, March 2023)",
  "Certified Onshape Associate — CAD (Onshape, May 2022)",
  "NESA Lifetime Member (August 2023)",
  "PADI Open Water Diver Certification (August 2019)",
];

export default function Education() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CornerNav />
      <FilmGrain />

      <div className="pt-24 md:pt-32 px-6 md:px-16 pb-32">
        <div className="max-w-5xl mx-auto">
          <PageTransition>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              The Archive of Knowledge
            </p>
            <h1 className="font-display text-4xl md:text-6xl tracking-[0.1em] uppercase text-foreground mb-20">
              Education
            </h1>
          </PageTransition>

          {/* Skills */}
          <GraceGlow>
            <div className="border border-border/30 p-6 md:p-10 mb-16">
              <h2 className="font-display text-lg tracking-[0.15em] uppercase text-foreground mb-8">
                Skills & Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((s) => (
                  <div key={s.category}>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                      {s.category}
                    </p>
                    <p className="font-body text-base text-foreground/80" style={{ lineHeight: 1.7 }}>
                      {s.items}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </GraceGlow>

          {/* Stanford */}
          <div className="border-t border-border/30 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Expected June 2028
                </p>
                <p className="font-mono text-sm text-primary">Stanford University</p>
                <p className="font-mono text-xs text-foreground/65 mt-1">GPA: 3.922 / 4.0</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl tracking-[0.05em] uppercase text-foreground mb-2">
                  BS, Electrical Engineering & Computer Science
                </h3>
                <Expandable title="Courses 2025–2026" defaultOpen>
                  <CourseList courses={[
                    "Quantum Computing (CS259Q)",
                    "Machine Learning (CS229)",
                    "Computer Systems from the Ground Up (CS107E)",
                    "Circuits I (EE101A)",
                    "Automata & Complexity Theory (CS154)",
                    "Probability for Computer Scientists (CS109)",
                    "Programming Abstractions (CS106B)",
                    "Enrichment Adventures in Programming Abstractions (CS106M)",
                    "Differential Equations with Linear Algebra (Math 53)",
                  ]} />
                </Expandable>
              </div>
            </div>
          </div>

          {/* High School */}
          <div className="border-t border-border/30 py-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-4">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Aug 2021 – June 2025
                </p>
                <p className="font-mono text-sm text-primary">Henry M. Gunn High School</p>
                <p className="font-mono text-xs text-foreground/65 mt-1">GPA: 4.0 UW / 4.45 W</p>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-xl tracking-[0.05em] uppercase text-foreground mb-2">
                  High School Diploma
                </h3>
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
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  Aug 2021 – May 2025
                </p>
                <p className="font-mono text-sm text-primary">De Anza & Foothill College</p>
                <p className="font-mono text-xs text-foreground/65 mt-1">GPA: 4.0 · Dean's List</p>
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
                    "OOP in Java (CS 1A)", "OOP in Python (CS 3A)", "Intermediate Java (CS 1B)",
                    "OOP in C++ (CS 2A)", "Intermediate Python (CS 3B)", "JavaScript for Programmers (CS 22A)",
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
                  {cert}
                </li>
              ))}
            </ul>
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