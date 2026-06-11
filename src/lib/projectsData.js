export const projects = [
  {
    slug: "task-agnostic-macpro",
    title: "Task-Agnostic MACPro",
    category: "Stanford · CS229 · Machine Learning",
    year: "2025",
    role: "Sole Researcher",
    tech: ["Python", "PyTorch", "QMIX", "SMAC", "CUSUM"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/4b9a3ba9b_generated_272fa24c.png",
    imageAlt: "Abstract neural network visualization representing multi-agent reinforcement learning research",
    summary: "Detecting behavioral changes in opponents without pre-labeled task boundaries in multi-agent reinforcement learning.",
    description: `Multi-agent reinforcement learning systems that cooperate toward a shared goal face a core challenge in real-world deployment: opponents and environments shift unpredictably, and no one tells you when. Existing continual MARL algorithms like MACPro handle this by maintaining multiple strategy "heads" — but they assume you know when the task has changed during training.

This project proposed a CUSUM-based online drift detector as a drop-in replacement for MACPro's known boundary signal, monitoring episode reward, TD error, and trajectory embedding distance to trigger boundary declarations without pre-labeled task boundaries.

Three experiments were run on the StarCraft Multi-Agent Challenge (SMAC-Hard) environment, 2s3z map, with opponents alternating between "attack nearest" and "attack weakest" scripts across 10,000 episodes.

Key findings revealed that MACPro's global trajectory encoder produces unstable embeddings even with known boundaries — a fundamental architectural limitation independent of the detection problem. This suggests robust task-agnostic MARL requires either more structurally distinct task definitions, a trajectory encoder decoupled from policy training, or change-point detectors that don't rely on the encoder being informative prior to detection.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/cs229-project" },
    ],
    media: [],
  },
  {
    slug: "charm-lab",
    title: "Surgical Robotics Research",
    category: "Stanford · CHARM Lab · Robotics",
    year: "2026",
    role: "Undergraduate Researcher",
    tech: ["Python", "YOLO", "OpenCV", "XGBoost", "Arduino", "HSV Segmentation"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/6d2e822a5_generated_0f4a9cac.png",
    imageAlt: "Robotic mechanical arm representing surgical robotics research at CHARM Lab",
    summary: "Designing surgical training systems and computer vision pipelines for teleoperation analysis under Dr. Allison Okamura.",
    description: `Designed and built a surgical training taskpad from scratch, including conductive-paint peg detection, LED feedback circuitry, and Arduino firmware to emit lift/place signals for downstream analysis.

Helped develop metrics pipeline for a DVRK teleoperation study analyzing optimal movement patterns between expert and novice robotic surgeons, integrating Arduino peg-detection signals with real-time performance feedback.

Trained and deployed a YOLO object detection model to identify surgical cylinders and pegs; implemented HSV color segmentation on cropped detections to assess correct cylinder placement orientation.

Engineered a drop-detection system using bounding-box velocity analysis and prototyped an XGBoost classifier to distinguish "held" vs. "dropped" cylinder states with low latency.

Worked under PhD Student Mary Kate Gale and visiting Master's student Shujiro Shobayashi in the lab of Dr. Allison Okamura.`,
    links: [
      { label: "CHARM Lab", url: "https://charm.stanford.edu/" },
    ],
    media: [],
  },
  {
    slug: "samwise",
    title: "SAMWISE CubeSat",
    category: "Stanford SSI · Satellites · Flight Software",
    year: "2025–Present",
    role: "Software Engineer",
    tech: ["C", "Python", "Embedded Systems", "Flight Software"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/60dafb5ba_generated_67b680a5.png",
    imageAlt: "Miniature satellite floating in space representing CubeSat development",
    summary: "Developing flight software for an imaging CubeSat demonstrating next-generation small-satellite capabilities.",
    description: `Developing flight software for SAMWISE, an imaging CubeSat built to demonstrate next-generation small-satellite capabilities. The mission integrates deployable solar power, precision attitude sensing, and high-rate communications into a compact platform.

Contributions include adding a lightweight heartbeat-check mechanism for the Payload Raspberry Pi to improve subsystem robustness, allowing the spacecraft to detect an unresponsive payload and attempt automatic recovery.

Working across the flight-software stack, including power management, subsystem coordination, and command-handling logic. The system is designed for autonomous operation, with safeguards to ensure stable imaging and communication throughout the mission.

SAMWISE serves as a technology demonstrator showing how small satellites can execute sophisticated, multi-subsystem missions in low-Earth orbit.`,
    links: [
      { label: "Stanford SSI", url: "https://www.stanfordssi.org/" },
    ],
    media: [],
  },
  {
    slug: "cs107e-laser-tag",
    title: "Distributed Laser Tag System",
    category: "Stanford · CS107E · Bare-Metal",
    year: "2025",
    role: "Lead Developer",
    tech: ["C", "Bare-Metal", "MangoPi", "RF Protocols", "SPI", "Interrupts"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/eade4edf0_generated_1fca43ba.png",
    imageAlt: "Glowing lines of code on dark surface representing bare-metal programming",
    summary: "A fully distributed laser tag system built from scratch in bare-metal C on MangoPi hardware.",
    description: `Built a fully distributed laser tag system entirely in bare-metal C on MangoPi hardware as part of Stanford's CS107E (Computer Systems from the Ground Up).

The system features IR-based hit detection, RF communication between units for real-time score synchronization, custom display drivers for game state visualization, and interrupt-driven event handling for responsive gameplay.

No operating system, no frameworks, no libraries — just direct hardware register manipulation, custom drivers, and pure C. The project demonstrates deep understanding of computer architecture, serial communication protocols (SPI, I2C, UART), interrupts, and event-driven systems design.`,
    links: [],
    media: [],
  },
  {
    slug: "nandighosh",
    title: "Nandighosh E-Commerce",
    category: "Personal · Full-Stack · Web Development",
    year: "2025–Present",
    role: "Lead Developer",
    tech: ["JavaScript", "Node.js", "MongoDB", "REST API", "HTML/CSS"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/94eae02c3_generated_cb97bdcc.png",
    imageAlt: "Medieval marketplace with ornate tapestries representing e-commerce development",
    summary: "A full-stack e-commerce web application for a small business selling Odia tapestries.",
    description: `Developing a full-stack e-commerce web application for a small business selling Odia tapestries, featuring user authentication, product ordering, order tracking, and an admin dashboard for catalog management.

The application is built without any frontend frameworks — demonstrating deep understanding of vanilla JavaScript, DOM manipulation, and server-side architecture.

Features include user authentication and session management, product catalog with search and filtering, shopping cart and checkout flow, order history and tracking, and a comprehensive admin dashboard for inventory management.`,
    links: [],
    media: [],
  },
  {
    slug: "vehicle-detection",
    title: "Vehicle Detection for the Visually Impaired",
    category: "Research · Computer Vision · Accessibility",
    year: "2024",
    role: "Lead Researcher",
    tech: ["Python", "OpenCV", "Object Detection", "Mobile Development"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/996effab1_generated_15965d6d.png",
    imageAlt: "Brass telescope on ancient parapet representing computer vision and detection research",
    summary: "A mobile app using computer vision to detect moving cars and alert visually impaired users about crossing safety.",
    description: `Recognizing the limitations of existing apps designed for crosswalks, this research focused on developing an innovative solution — a mobile app that utilizes computer vision to detect moving cars on the road and alerts users through vibrations about the safety of crossing.

The ultimate goal was to contribute valuable insights into the feasibility and benefits of such technology, paving the way for future advancements in assisting visually impaired individuals in crossing residential roads safely.

Built the app and tested the object detection model in different scenarios, analyzing successful detections and detection failures.

Presented findings at the 2024 Foothill College Research & Service Leadership Symposium (RSLS).`,
    links: [
      { label: "Research Poster", url: "https://drive.google.com/file/d/1VltIeBdj0qVDzbGFKxElvcAwcsXBNloZ/view" },
    ],
    media: [],
  },
  {
    slug: "grt-dissonance",
    title: "Dissonance — FRC 192",
    category: "Gunn Robotics Team · Competition · CAD",
    year: "2024",
    role: "Machinist & CAD Designer",
    tech: ["Java", "CAD", "Pneumatics", "CNC", "Lathe", "Mill"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/319f04fe2_generated_89bee49c.png",
    imageAlt: "Ancient stone tablet with circuit-board engravings representing the fusion of craft and technology",
    summary: "The competition robot that won the 2024 FIRST Idaho Regional, featuring roller-intake, 2-stage elevator, and adjustable shooter.",
    description: `Dissonance was GRT's robot for the 2024 FIRST "Crescendo!" challenge. It features a roller-intake system powered by linkages, a 2-stage elevator mechanism, a winch-powered climb mechanism, and a double-roller shooter mechanism with an adjustable launch angle.

As a Machinist and CAD Designer, responsibilities included strategizing and brainstorming robot designs for optimal scoring efficiency, developing and testing prototypes using 3D-printed, laser-cut, and wooden parts, creating precise CAD models, and machining metal stock using CNC, lathe, mill, drill press, and bandsaws.

These efforts culminated in a first-place victory at the March 2024 FIRST Robotics Competition Idaho Regional, securing a spot at the 2024 World Championship.`,
    links: [
      { label: "Event Results", url: "https://frc-events.firstinspires.org/2024/IDBO/awards" },
    ],
    media: [],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}