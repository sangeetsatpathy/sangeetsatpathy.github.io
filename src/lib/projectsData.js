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

This project proposed a CUSUM-based online drift detector as a drop-in replacement for MACPro's known boundary signal, monitoring episode reward, TD error, and trajectory embedding distance to trigger boundary declarations without pre-labeled task boundaries. The results were surprising — and revealed something more fundamental than a detection problem.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/cs229-project" },
    ],
    media: [],
    sections: [
      {
        title: "Experiments and Findings",
        content: `I ran three experiments on the StarCraft Multi-Agent Challenge (SMAC-Hard) environment, 2s3z map, with opponents alternating between "attack nearest" and "attack weakest" scripts across 10,000 episodes. Experiment 1 tested for catastrophic forgetting in QMIX — surprisingly, training on one opponent script improved performance against the other, suggesting the two strategies may not be distinct enough to stress-test a continual learning system. Experiment 2 evaluated the CUSUM detector across a broad hyperparameter sweep; the signals were extremely noisy around the true boundary, with the FPR/FNR tradeoff proving unavoidable across all settings. Experiment 3 revealed the deeper reason: MACPro's global trajectory encoder produces unstable µ embeddings even with known boundaries, a fundamental architectural limitation independent of the detection problem. Together, these findings suggest robust task-agnostic MARL requires either more structurally distinct task definitions, a trajectory encoder decoupled from policy training, or change-point detectors that don't rely on the encoder being informative prior to detection.`,
      },
      {
        title: "Project Paper",
        pdf: "https://drive.google.com/file/d/1-4N-MtEv2wlXsY7S0dTmOkaQc-izXYUb/preview",
      },
      {
        title: "Project Poster",
        pdf: "https://drive.google.com/file/d/1XtNs_I9FLK5rydONnIuN9P4efvKu80bT/preview",
      },
    ],
  },
  {
    slug: "cs107e-laser-tag",
    title: "Distributed Laser Tag System",
    category: "Stanford · CS107E · Bare-Metal",
    year: "2025",
    role: "Lead Developer",
    tech: ["C", "Bare-Metal", "MangoPi", "IR", "RF", "SPI", "Interrupts"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/eade4edf0_generated_1fca43ba.png",
    imageAlt: "Glowing lines of code on dark surface representing bare-metal programming",
    summary: "A fully distributed laser tag system built from scratch in bare-metal C on MangoPi hardware.",
    description: `Built a real-time multiplayer laser tag system from scratch in bare-metal C, running directly on Raspberry Pi hardware without an operating system. The project focused on low-level systems programming, hardware interfacing, and distributed communication between multiple devices.

Each player device consists of a Raspberry Pi connected to an IR emitter (for shooting), IR receiver (for hit detection), RF transceiver, and physical trigger. When a player fires, the system emits an IR signal and simultaneously sends a wireless packet indicating a "shot" event. If another device detects the IR signal, it generates a "hit" event and communicates it back to a central controller.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/laser-tag-distributed-system" },
    ],
    media: [
      { type: "video", src: "https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/raw/refs/heads/master/cs107e_vids/IMG_5173.MOV" },
      { type: "video", src: "https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/raw/refs/heads/master/cs107e_vids/IMG_5176.MOV" },
    ],
    sections: [
      {
        title: "Technical Deep Dive",
        content: `At the core of the system is an event-driven architecture built using interrupts. Hardware interrupts are used to detect IR hits and incoming RF packets, enabling low-latency responses without relying on an operating system. Each device runs a main control loop that processes asynchronous events, manages communication, and updates local state.

A central "manager" node aggregates events from all devices and determines valid hits by correlating "shot" and "hit" packets within a small time window. It maintains a live leaderboard using device IDs and timestamps, effectively acting as a lightweight distributed game server.

Working at the bare-metal level required directly interfacing with GPIO, handling communication protocols, and writing modular drivers for peripherals such as RF modules and sensors. One of the main challenges was debugging unreliable wireless communication — improved through better packet handling, testing strategies, and modular code design.

Skills demonstrated: low-level systems programming in C (no OS, direct hardware control), interrupts and event-driven design, distributed systems and real-time synchronization, hardware-software integration (GPIO, IR sensors, RF communication), and debugging complex multi-device systems.`,
      },
    ],
  },
  {
    slug: "neural-network-scratch",
    title: "Neural Network from Scratch",
    category: "Personal · Machine Learning · Python",
    year: "2025",
    role: "Sole Developer",
    tech: ["Python", "NumPy", "MNIST", "Batch Normalization", "Xavier Init"],
    image: "",
    imageAlt: "Neural network diagram",
    summary: "A fully-connected neural network built from scratch — no ML libraries — that classifies handwritten digits with 83% accuracy.",
    description: `Programmed and trained a working fully-connected neural network from scratch using no libraries to aid in the architecture, achieving 83% accuracy on handwritten digit classification. Ran tests on test accuracy and confidence across various activation functions and model architectures.

The only libraries imported were used to load the training dataset or aid in exporting and reading weight files. Everything else — forward pass, backpropagation, weight updates — was implemented from first principles.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/NeuralNetworkFromScratch" },
    ],
    media: [],
    sections: [
      {
        title: "What I Learned Building It",
        content: `Throughout the process, I was debugging errors (both compiler and conceptual) in the neural network, discovering necessary architectural elements along the way — building a deep understanding of the mathematics behind neural nets.

To solve the vanishing gradient problem inherent in sigmoid activation functions, I learned to use batch normalization — helping pre-activation values stabilize, including figuring out how to implement batch normalization for inference.

In debugging why weights were not effectively learning feature recognition, I realized that equal weight initialization was hindering efficacy. After setting up random weight initialization, pre-activation variances were exploding — so I implemented Xavier initialization.

In debugging why test accuracies were decreasing across epochs, I decreased the learning rate from 0.1 to 0.001. Upon looking into why prediction probabilities lacked confidence, I realized I was feeding last-layer logits into activation functions before softmaxing, killing confidence. With these learnings — and many more — I finally achieved test accuracies of 83% with only one hidden layer of size 30.`,
      },
    ],
  },
  {
    slug: "reddit-political-classification",
    title: "Reddit Political Classification",
    category: "Personal · NLP · Machine Learning",
    year: "2025",
    role: "Sole Developer",
    tech: ["Python", "NLP", "scikit-learn", "Logistic Regression", "SVM", "Random Forest", "MLP"],
    image: "",
    imageAlt: "Political classification NLP project",
    summary: "Classifies political orientation as Liberal or Conservative from text, trained on Reddit posts from r/Conservative and r/Liberal.",
    description: `Classifies political orientation as either Liberal or Conservative based on a message. Trained on Reddit messages sent in r/Conservative and r/Liberal. Automated political stance classification using natural language processing and machine learning.

Built an end-to-end NLP classification pipeline that processed and cleaned Reddit text (tokenization, stop-word removal, n-gram features) to predict a person's political orientation with high precision.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/Reddit-Political-Classification" },
    ],
    media: [],
    sections: [
      {
        title: "Pipeline & Models",
        content: `This project ingests raw Reddit text, transforms it via feature engineering, trains classification models, and evaluates performance — with a strong focus on interpretability and real-world application.

Compared model performance across several classifiers: Logistic Regressor, K-Nearest Neighbors, Support Vector Machine, Random Forest, and Multilayer Perceptron.`,
      },
    ],
  },
  {
    slug: "ames-housing-regression",
    title: "Ames Housing Regression",
    category: "Personal · Data Science · Machine Learning",
    year: "2025",
    role: "Sole Developer",
    tech: ["Python", "Pandas", "scikit-learn", "Regression", "Feature Engineering"],
    image: "",
    imageAlt: "Housing regression project",
    summary: "A regression model predicting house sale prices using the Ames Housing dataset (70+ features), with a full data science pipeline.",
    description: `Developed a robust regression model to predict house sale prices using the rich Ames Housing dataset with over 70 features.

Applied a complete data science pipeline — from raw data exploration and cleaning to model selection, tuning, and evaluation. The goal: build a model that generalizes well and extract actionable insights about what drives housing values.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/Ames-Housing-Project" },
    ],
    media: [],
    sections: [
      {
        title: "Approach",
        content: `This work demonstrates skills relevant to data science, machine learning engineering, and analytics — including feature engineering, model validation, and interpretability.

Key steps included handling missing data, encoding categorical variables, engineering interaction features, cross-validated model selection, and hyperparameter tuning to minimize generalization error.`,
      },
    ],
  },
  {
    slug: "eda-project",
    title: "Exploratory Data Analysis Project",
    category: "Personal · Data Science · Python",
    year: "2025",
    role: "Sole Developer",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "",
    imageAlt: "Data analysis and visualization project",
    summary: "End-to-end data analysis pipeline analyzing diet-health correlations in India and world development statistics including GDP and carbon emissions.",
    description: `Designed and implemented an end-to-end data analysis pipeline using Python (Pandas, NumPy, Matplotlib), performing data cleaning, exploratory data analysis, and visualization to extract actionable insights from large datasets.

Analyzed correlations between various diets in India with health implications. Also analyzed world development statistics, such as GDP, carbon emissions, and other indicators across countries.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/DataAnalysisProject" },
    ],
    media: [],
    sections: [],
  },
  {
    slug: "trashtron",
    title: "TrashTron",
    category: "Reubotics · Robotics · Computer Vision",
    year: "2023–2024",
    role: "Designer & Developer",
    tech: ["Python", "YOLOv5", "CAD", "Onshape", "Dynamixel Motors", "3D Printing"],
    image: "",
    imageAlt: "TrashTron autonomous trash-collecting robot",
    summary: "An autonomous robot that detects, moves to, and picks up plastic trash bottles — designed, machined, and programmed from scratch.",
    description: `Designed (using Onshape CAD software), assembled, machined, and programmed a robot named TrashTron with the guidance of Robotics Subject Matter Expert Dr. Reuben Brewer at Reubotics.

TrashTron is a mobile robot with a gripper-arm that autonomously detects, moves to, and picks up plastic trash bottles lying on the ground. Built using Dynamixel AX-18A and XC-330 motors, with communication set up through the Pyserial module.`,
    links: [
      { label: "Code", url: "https://github.com/sangeetsatpathy/TrashTron-Code" },
      { label: "Reubotics", url: "https://www.reubotics.com/#/interns/" },
      { label: "Demo Video", url: "https://www.youtube.com/watch?v=8wo4DTQ7WL4" },
    ],
    media: [],
    sections: [
      {
        title: "Build Details",
        content: `Used Dynamixel AX-18A and XC-330 motors. Set up communication to motors through the Pyserial module, given the packet length, instruction packets, parity, etc.

Parts used included 8mm shafts, flanged ball bearings, clamping shaft collars, shims, and an assortment of socket head screws. Tools used included Allen wrenches, hand taps, reamers, and a hand drill. All main parts were 3D printed on a Bambu Lab X1 Carbon printer.

Stress-tested the design in Onshape CAD and calculated expected torque on the motor to make gear ratios torque-oriented.

Cut, re-lengthened, and soldered wires to fit the design. Tested power distribution using a multimeter.

Wrote a program using computer vision concepts to train a custom YOLOv5 object detection model to help TrashTron detect, move to, and pick up plastic trash bottles.`,
      },
    ],
  },
  {
    slug: "vehicle-detection",
    title: "Vehicle Detection for the Visually Impaired",
    category: "Research · Computer Vision · Accessibility",
    year: "2023–2025",
    role: "Lead Researcher",
    tech: ["Python", "OpenCV", "Object Detection", "Mobile Development"],
    image: "https://media.db.com/images/public/6a2a04b74f12fd3acc3ff5ed/996effab1_generated_15965d6d.png",
    imageAlt: "Brass telescope on ancient parapet representing computer vision and detection research",
    summary: "A mobile app using computer vision to detect moving cars and alert visually impaired users about crossing safety.",
    description: `Recognizing the limitations of existing apps designed for crosswalks, this research focused on developing an innovative solution — a mobile app that utilizes computer vision to detect moving cars on the road and alerts users through vibrations about the safety of crossing.

The ultimate goal was to contribute valuable insights into the feasibility and benefits of such technology, paving the way for future advancements in assisting visually impaired individuals in crossing residential roads safely.`,
    links: [
      { label: "Research Poster", url: "https://drive.google.com/file/d/1VltIeBdj0qVDzbGFKxElvcAwcsXBNloZ/view?usp=sharing" },
      { label: "AAR Project Page", url: "https://aar.pausd.org/projects-2020/automated-detection-cars-visually-impaired-cross-roads" },
      { label: "Code", url: "https://github.com/sangeetsatpathy/AutomatedDetectionOfVehicles_ForVisuallyImpaired" },
    ],
    media: [],
    sections: [
      {
        title: "Research Details",
        content: `Built the app and tested the object detection model in different scenarios, analyzing successful detections and detection failures across a range of lighting conditions, road types, and vehicle speeds.

Accepted and presented at the Foothill College Research & Service Leadership Symposium (RSLS) May 2024: "Automated Detection of Cars for the Visually Impaired to Cross Roads."`,
      },
    ],
  },
];

export function getProjectBySlug(/** @type {string} */ slug) {
  return projects.find((p) => p.slug === slug) || null;
}
