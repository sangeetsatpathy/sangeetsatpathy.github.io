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

This project proposed a CUSUM-based online drift detector as a drop-in replacement for MACPro's known boundary signal, monitoring episode reward, TD error, and trajectory embedding distance to trigger boundary declarations without pre-labeled task boundaries.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/cs229-project" },
    ],
    media: [],
    sections: [
      {
        title: "Experiments and Findings",
        content: `I ran three experiments on the StarCraft Multi-Agent Challenge (SMAC-Hard) environment, 2s3z map, with opponents alternating between "attack nearest" and "attack weakest" scripts across 10,000 episodes. Experiment 1 tested for catastrophic forgetting in QMIX — surprisingly, training on one opponent script improved performance against the other, suggesting the two strategies may not be distinct enough to stress-test a continual learning system. Experiment 2 evaluated the CUSUM detector across a broad hyperparameter sweep; the signals were extremely noisy around the true boundary, with the FPR/FNR tradeoff proving unavoidable across all settings. Experiment 3 revealed the deeper reason: MACPro's global trajectory encoder produces unstable µ embeddings even with known boundaries, a fundamental architectural limitation independent of the detection problem. Together, these findings suggest robust task-agnostic MARL requires either more structurally distinct task definitions, a trajectory encoder decoupled from policy training, or change-point detectors that don't rely on the encoder being informative prior to detection.`,
      },
    ],
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
    sections: [],
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
    sections: [],
  },
];

export function getProjectBySlug(/** @type {string} */ slug) {
  return projects.find((p) => p.slug === slug) || null;
}
