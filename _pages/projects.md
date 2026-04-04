---
layout: archive
title: "Personal Projects"
permalink: /projects/
author_profile: true
---
<h2>Laser Tag Distributed System (Bare-Metal C, Raspberry Pi | <a href="https://cs107e.github.io/">CS107E</a>)</h2>
<h3>March 2026</h3>
I built a real-time multiplayer laser tag system from scratch in bare-metal C, running directly on Raspberry Pi hardware without an operating system. The project focused on low-level systems programming, hardware interfacing, and distributed communication between multiple devices.

<details>
<summary>Learn more</summary>
Each player device consists of a Raspberry Pi connected to an IR emitter (for shooting), IR receiver (for hit detection), RF transceiver, and physical trigger. When a player fires, the system emits an IR signal and simultaneously sends a wireless packet indicating a “shot” event. If another device detects the IR signal, it generates a “hit” event and communicates it back to a central controller.

At the core of the system is an event-driven architecture built using interrupts. Hardware interrupts are used to detect IR hits and incoming RF packets, enabling low-latency responses without relying on an operating system. Each device runs a main control loop that processes asynchronous events, manages communication, and updates local state.

A central “manager” node aggregates events from all devices and determines valid hits by correlating “shot” and “hit” packets within a small time window. It maintains a live leaderboard using device IDs and timestamps, effectively acting as a lightweight distributed game server.

Working at the bare-metal level required directly interfacing with GPIO, handling communication protocols, and writing modular drivers for peripherals such as RF modules and sensors. One of the main challenges was debugging unreliable wireless communication; I improved system robustness through better packet handling, testing strategies, and modular code design.

This project gave me hands-on experience with:
<ul>
<li>Low-level systems programming in C (no OS, direct hardware control)</li>
<li>Interrupts and event-driven design</li>
<li>Distributed systems and real-time synchronization</li>
<li>Hardware-software integration (GPIO, IR sensors, RF communication)</li>
<li>Debugging complex, multi-device systems</li>
</ul>
</details>
<hr>

<h2> Neural Network from Scratch</h2>
<h3> Sep 2025 </h3>
Programmed and trained a working fully-connected neural network from scratch (using no libraries to aid in the architecture of the neural network) that classifies handwritten digits with 83% accuracy. Ran tests on test accuracy and confidence across various activation functions and model architectures. The only libraries imported were used to load the training dataset or aid in exporting and reading weight files.

<details>
<summary>Learn more</summary>
Throughout the process, I was debugging errors (both compiler and conceptual errors) in the Neural Network, discovering necessary architectural elements along the way, allowing me to get a deep understanding of the mathematics behind neural nets.

For example, to solve the vanishing gradient problem inherent in sigmoid activation functions, I learned to use batch normalization -- helping my pre-activation values stabilize. This included figuring out how to implement batch normalization for inference. In debugging why my weights were not effectively "learning" feature recognition, I realized that equal weight initialization was hindering the Neural Net's efficacy. After setting up random weight initialization, I realized my pre-activation variances were exploding; so I set up Xavier initialization. In debugging why my test accuracies were decreasing across epochs, I decreased my learning rate from 0.1 to 0.001. Upon looking into why my prediction probabilities were lacking confidence, I realized that I was feeding last-layer logits into activation functions before softmaxing them, killing Neural Net confidence. With these learnings, along with many more, I was able to finally acquire test accuracies of 83% with only one hidden layer (of size 30)!

<a href="https://github.com/sangeetsatpathy/NeuralNetworkFromScratch">Project Code</a>
</details>

<hr>



<h2> Reddit Political Classification Project</h2>
<h3> Aug 2025 </h3>

Classifies political orientation as either Liberal or Conservative based on a message! Trained on Reddit messages sent in r/Conservative and r/Liberal. Automated political stance classification using natural language processing (NLP) and machine learning. 

<details>
<summary>Learn more</summary>
Built an end-to-end NLP classification pipeline that processed and cleaned Reddit text (tokenization, stop-word removal, n-gram features) to predict a person’s political orientation with high precision.  This project ingests raw Reddit text, transforms it via feature engineering, trains classification models, and evaluates performance — with a strong focus on interpretability and real-world application.

Compared model performance on several classifiers: Logistic Regressor, K-Nearest Neighbors, Support Vector, Random Forest, and Multilayer Perceptron.

<a href="https://github.com/sangeetsatpathy/Reddit-Political-Classification">Project Code</a>
</details>

<hr>


<h2> Ames Housing Regression Project</h2>
<h3> July 2025 </h3>

In this project, I developed a robust regression model to predict house sale prices using the rich Ames Housing dataset (70+ features).


<details>
<summary>Learn more</summary>
I applied a complete data science pipeline — from raw data exploration and cleaning to model selection, tuning, and evaluation. The goal: build a model that generalizes well and extract actionable insights about what drives housing values.

This work demonstrates skills relevant to roles in data science, machine learning engineering, and analytics — including feature engineering, model validation, and interpretability.
</details>

<a href="https://github.com/sangeetsatpathy/Ames-Housing-Project">Project Code</a>

<hr>



<h2> Exploratory Data Analysis (EDA) Project</h2>
<h3> July 2025 </h3>

Designed and implemented an end-to-end data analysis pipeline using Python (Pandas, NumPy, Matplotlib), performing data cleaning, exploratory data analysis, and visualization to extract actionable insights from large datasets. Analyzed correlations between various diets in India with health implications. Also analyzed world development statistics, such as GDP, carbon emissions, etc.

<a href="https://github.com/sangeetsatpathy/DataAnalysisProject">Project Code</a>

<hr>

<h2> TrashTron | <a href="https://www.reubotics.com/#/interns/">Reubotics</a> </h2>

<h3> November 2023 - November 2024</h3>

<div style="text-align:justify">Designed (using Onshape's CAD software), assembled, machined, and programmed a Robot (named <b>TrashTron</b>) with the guidance of the Robotics Subject Matter Expert, Dr. Reuben Brewer. 
TrashTron is a mobile robot with a gripper-arm that autonomously detects, moves to, and picks up plastic trash bottles lying on the ground.</div> <br>
<div style="width:560px; height:316px">
<iframe width="178%" height="100%" src="https://www.youtube.com/embed/8wo4DTQ7WL4?si=zhz7DXyHIy3SCeGf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<br>
<details>
<summary>Learn more</summary>
<ul>
<li>Used Dynamixel AX-18A and XC-330 Motors for this project. Setup communication to motors through the Pyserial module, given the packet length, instruction packets, parity, etc.</li>
<li>Parts used to make TrashTron included 8mm shafts, flanged ball bearings, clamping shaft collars, shims, and an assortment of socket head screws. Tools used included Allen wrenches, hand taps, reamers, and a hand drill. All main parts were 3-D printed on a Bambu Lab X1 Carbon printer.</li>
<li>Stress-tested the design in the CAD software (Onshape) and calculated expected torque on the motor. This was used to make the gear ratios torque-oriented.</li>
 <li>Cut, re-lengthened, and soldered wires in order to make the wires fit my design. Additionally, I tested the power distribution of my wiring using a multimeter.</li>
<li>Wrote a program using Computer Vision concepts to train a custom Machine Learning Model (YOLOv5 Object Detection Model) to help TrashTron detect, move to, and pick up the plastic trash bottle.</li>
</ul>

<a href="https://github.com/sangeetsatpathy/TrashTron-Code">Project Code</a>

</details>
<hr>


<h2> Automated Detection of Vehicles for the Visually Impaired to Cross Roads	         				       </h2>
<h3>August 2023 - June 2025</h3>


Recognizing the limitations of existing apps designed for crosswalks, this research focuses on developing an innovative solution—
a mobile app that utilizes computer vision to detect moving cars on the road 
and alerts users through vibrations about the safety of crossing.

<details>
<summary>Learn more</summary>
<ul>
<li>The ultimate goal of this project was to contribute valuable insights into the feasibility and benefits of such technology,
 paving the way for future advancements in assisting visually impaired individuals in crossing residential roads safely. </li>
<li>I built an app and tested the object detection model in different scenarios, and analyzed successful detections and detection failures.</li>
<li>Accepted and Presented at the <a href="https://foothill.edu/rsl-symposium/2024-program.html">Foothill College Research & Service Leadership Symposium (RSLS) May 2024</a>: "Automated Detection of Cars for the Visually Impaired to Cross Roads"</li>
<li>
    Here is the <a href="https://aar.pausd.org/projects-2020/automated-detection-cars-visually-impaired-cross-roads">AAR Project Blurb</a> and the <a href="https://drive.google.com/file/d/1VltIeBdj0qVDzbGFKxElvcAwcsXBNloZ/view?usp=sharing">Poster</a> that was presented.</li>
</ul>

<a href="https://github.com/sangeetsatpathy/AutomatedDetectionOfVehicles_ForVisuallyImpaired">Project Code</a>
</details>



<hr>