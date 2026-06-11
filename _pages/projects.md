---
layout: archive
title: "Personal Projects"
permalink: /projects/
author_profile: true
---

<div class="projects-grid">

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Stanford CS229 · Dec 2025</span>
  <h3 class="card-title">Task-Agnostic MACPro: Detecting Behavioral Changes in Opponents</h3>
  <p class="card-desc">Proposed a CUSUM-based online drift detector to remove the known-boundary assumption in the MACPro continual MARL algorithm, revealing a deeper architectural limitation in the trajectory encoder.</p>
  <div class="card-tags">
    <span>Python</span><span>MARL</span><span>QMIX</span><span>SMAC</span><span>Reinforcement Learning</span>
  </div>
  <details>
    <summary>Experiments &amp; Findings</summary>
    <p>I ran three experiments on the StarCraft Multi-Agent Challenge (SMAC-Hard) environment, 2s3z map, with opponents alternating between "attack nearest" and "attack weakest" scripts across 10,000 episodes. Experiment 1 tested for catastrophic forgetting in QMIX — surprisingly, training on one opponent script improved performance against the other, suggesting the two strategies may not be distinct enough to stress-test a continual learning system. Experiment 2 evaluated the CUSUM detector across a broad hyperparameter sweep; the signals were extremely noisy around the true boundary, with the FPR/FNR tradeoff proving unavoidable across all settings. Experiment 3 revealed the deeper reason: MACPro's global trajectory encoder produces unstable µ embeddings even with known boundaries, a fundamental architectural limitation independent of the detection problem. Together, these findings suggest robust task-agnostic MARL requires either more structurally distinct task definitions, a trajectory encoder decoupled from policy training, or change-point detectors that don't rely on the encoder being informative prior to detection.</p>
  </details>
  <details>
    <summary>Project Paper</summary>
    <iframe src="https://drive.google.com/file/d/1-4N-MtEv2wlXsY7S0dTmOkaQc-izXYUb/preview" width="100%" height="420" allow="autoplay"></iframe>
  </details>
  <details>
    <summary>Project Poster</summary>
    <iframe src="https://drive.google.com/file/d/1XtNs_I9FLK5rydONnIuN9P4efvKu80bT/preview" width="100%" height="420" allow="autoplay"></iframe>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/cs229-project" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">CS107E — Bare-Metal C, Raspberry Pi · Mar 2026</span>
  <h3 class="card-title">Laser Tag Distributed System</h3>
  <p class="card-desc">Real-time multiplayer laser tag system built from scratch in bare-metal C on Raspberry Pi — no OS, direct hardware control, interrupt-driven event architecture, and a central manager node for live scoring.</p>
  <div class="card-tags">
    <span>C</span><span>Bare-Metal</span><span>Raspberry Pi</span><span>Interrupts</span><span>Distributed Systems</span><span>RF / IR</span>
  </div>
  <details>
    <summary>Learn more</summary>
    <p>Each player device consists of a Raspberry Pi connected to an IR emitter (for shooting), IR receiver (for hit detection), RF transceiver, and physical trigger. When a player fires, the system emits an IR signal and simultaneously sends a wireless packet indicating a "shot" event. If another device detects the IR signal, it generates a "hit" event and communicates it back to a central controller.</p>
    <p>At the core of the system is an event-driven architecture built using interrupts. Hardware interrupts are used to detect IR hits and incoming RF packets, enabling low-latency responses without relying on an operating system. A central "manager" node aggregates events from all devices and determines valid hits by correlating "shot" and "hit" packets within a small time window, maintaining a live leaderboard using device IDs and timestamps.</p>
    <p><i>Demo Video 1:</i></p>
    <div style="display: table-cell">
      <video id="cs107e-vid1" width="280" height="210" autoplay muted>
        <source src="https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/raw/refs/heads/master/cs107e_vids/IMG_5173.MOV" type="video/quicktime">
        Your browser does not support the video tag.
      </video>
      <div style="display: flex; justify-content: center;">
        <button onclick="cs107ePlayPause('cs107e-vid1')">Play/Pause</button>
        <button onclick="cs107eReset('cs107e-vid1')">Reset</button>
      </div>
    </div>
    <p><i>Demo Video 2:</i></p>
    <div style="display: table-cell">
      <video id="cs107e-vid2" width="280" height="210" autoplay muted>
        <source src="https://github.com/sangeetsatpathy/sangeetsatpathy.github.io/raw/refs/heads/master/cs107e_vids/IMG_5176.MOV" type="video/quicktime">
        Your browser does not support the video tag.
      </video>
      <div style="display: flex; justify-content: center;">
        <button onclick="cs107ePlayPause('cs107e-vid2')">Play/Pause</button>
        <button onclick="cs107eReset('cs107e-vid2')">Reset</button>
      </div>
    </div>
    <script>
    function cs107ePlayPause(id) { var v=document.getElementById(id); if(v.paused) v.play(); else v.pause(); }
    function cs107eReset(id) { var v=document.getElementById(id); v.currentTime=0; v.play(); }
    </script>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/laser-tag-distributed-system" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Personal Project · Sep 2025</span>
  <h3 class="card-title">Neural Network from Scratch</h3>
  <p class="card-desc">Fully-connected neural network in pure Python (no ML libraries) that classifies handwritten MNIST digits with 83% accuracy — built to deeply understand the mathematics of training.</p>
  <div class="card-tags">
    <span>Python</span><span>NumPy</span><span>Deep Learning</span><span>Backpropagation</span><span>Xavier Init</span>
  </div>
  <details>
    <summary>Learn more</summary>
    <p>Throughout the process, I was debugging both compiler and conceptual errors in the neural network, discovering necessary architectural elements along the way. To solve the vanishing gradient problem inherent in sigmoid activations, I implemented batch normalization — including the inference mode. After diagnosing exploding pre-activation variances from equal weight initialization, I switched to Xavier initialization. After test accuracy started decreasing across epochs, I reduced the learning rate from 0.1 to 0.001. I also discovered I was feeding last-layer logits into activation functions before softmax, killing confidence scores. The final model achieves 83% accuracy with one hidden layer of size 30.</p>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/NeuralNetworkFromScratch" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Personal Project · Aug 2025</span>
  <h3 class="card-title">Reddit Political Classification</h3>
  <p class="card-desc">NLP pipeline that classifies Reddit messages as Liberal or Conservative with high precision, trained on r/Liberal and r/Conservative posts.</p>
  <div class="card-tags">
    <span>Python</span><span>NLP</span><span>Sklearn</span><span>SVM</span><span>Random Forest</span><span>MLP</span>
  </div>
  <details>
    <summary>Learn more</summary>
    <p>Built an end-to-end NLP classification pipeline: tokenization, stop-word removal, n-gram feature engineering, model training, and evaluation. Compared Logistic Regression, K-Nearest Neighbors, Support Vector Machine, Random Forest, and Multilayer Perceptron classifiers — with a focus on interpretability and real-world applicability.</p>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/Reddit-Political-Classification" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Personal Project · Jul 2025</span>
  <h3 class="card-title">Ames Housing Price Regression</h3>
  <p class="card-desc">Robust regression model predicting house sale prices from the Ames Housing dataset (70+ features), demonstrating a complete data science pipeline from EDA to model selection.</p>
  <div class="card-tags">
    <span>Python</span><span>Regression</span><span>Feature Engineering</span><span>Data Science</span><span>Pandas</span>
  </div>
  <details>
    <summary>Learn more</summary>
    <p>Applied a complete data science pipeline — raw data exploration and cleaning, feature engineering, model selection, hyperparameter tuning, and evaluation. Goal: build a model that generalizes well and extract actionable insights about what drives housing values. Demonstrates skills in feature engineering, model validation, and interpretability relevant to ML engineering and analytics roles.</p>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/Ames-Housing-Project" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Personal Project · Jul 2025</span>
  <h3 class="card-title">Exploratory Data Analysis Pipeline</h3>
  <p class="card-desc">End-to-end data analysis pipeline analyzing diet–health correlations across India and global development statistics (GDP, carbon emissions, and more).</p>
  <div class="card-tags">
    <span>Python</span><span>Pandas</span><span>NumPy</span><span>Matplotlib</span><span>EDA</span>
  </div>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/DataAnalysisProject" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Reubotics Internship · Nov 2023 – Nov 2024</span>
  <h3 class="card-title">TrashTron</h3>
  <p class="card-desc">Mobile robot that autonomously detects, navigates to, and picks up plastic trash bottles — designed, machined, assembled, and programmed from scratch under Dr. Reuben Brewer at <a href="https://www.reubotics.com/#/interns/" target="_blank">Reubotics</a>.</p>
  <div class="card-tags">
    <span>Python</span><span>YOLOv5</span><span>Computer Vision</span><span>Robotics</span><span>Onshape CAD</span><span>Dynamixel</span><span>PySerial</span>
  </div>
  <details>
    <summary>Demo Video</summary>
    <div style="width:100%; max-width:560px; aspect-ratio:16/9">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8wo4DTQ7WL4?si=zhz7DXyHIy3SCeGf" title="TrashTron Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </details>
  <details>
    <summary>Engineering details</summary>
    <ul>
      <li>Used Dynamixel AX-18A and XC-330 motors; set up serial communication via PySerial handling packet length, instruction packets, and parity.</li>
      <li>Parts: 8mm shafts, flanged ball bearings, clamping shaft collars, shims, socket head screws. All main parts 3D-printed on a Bambu Lab X1 Carbon.</li>
      <li>Stress-tested design in Onshape CAD and calculated expected motor torque to set torque-oriented gear ratios.</li>
      <li>Cut, re-lengthened, and soldered wires; tested power distribution with a multimeter.</li>
      <li>Trained a custom YOLOv5 object detection model for bottle detection and pick-up targeting.</li>
    </ul>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/TrashTron-Code" class="card-link" target="_blank">Code →</a>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════ -->
<div class="project-card">
  <span class="card-context">Research · Aug 2023 – Jun 2025</span>
  <h3 class="card-title">Automated Detection of Vehicles for the Visually Impaired</h3>
  <p class="card-desc">Mobile app using computer vision to detect moving cars and alert visually impaired users via vibrations whether it is safe to cross a road. Accepted and presented at RSLS 2024.</p>
  <div class="card-tags">
    <span>Python</span><span>YOLO</span><span>Computer Vision</span><span>Mobile App</span><span>Accessibility</span>
  </div>
  <details>
    <summary>Learn more</summary>
    <ul>
      <li>Built a mobile app and tested the object detection model across multiple real-world scenarios, analyzing detection successes and failures.</li>
      <li>Accepted and presented at the <a href="https://foothill.edu/rsl-symposium/2024-program.html" target="_blank">Foothill College RSLS May 2024</a>: <em>"Automated Detection of Cars for the Visually Impaired to Cross Roads."</em></li>
      <li><a href="https://aar.pausd.org/projects-2020/automated-detection-cars-visually-impaired-cross-roads" target="_blank">AAR Project Blurb</a> &nbsp;·&nbsp; <a href="https://drive.google.com/file/d/1VltIeBdj0qVDzbGFKxElvcAwcsXBNloZ/view?usp=sharing" target="_blank">Presentation Poster</a></li>
    </ul>
  </details>
  <div class="card-links">
    <a href="https://github.com/sangeetsatpathy/AutomatedDetectionOfVehicles_ForVisuallyImpaired" class="card-link" target="_blank">Code →</a>
  </div>
</div>

</div>
