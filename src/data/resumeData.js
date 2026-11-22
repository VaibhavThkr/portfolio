export const resumeData = {
  personal: {
    name: "Thakur Vaibhav Singh",
    email: "thkrvbhvsngh@gmail.com",
    phone: "+91 9392968591",
    location: "Hyderabad, India (Open to Relocate)",
    linkedin: "https://www.linkedin.com/in/thakur-vaibhav-singh/",
    github: "https://github.com/VaibhavThkr",
    gateRank: "GATE 2026 (BM) AIR 154",
    roles: [
      "Biomedical & Embedded Systems Engineer",
      "MedTech Hardware & Firmware Developer",
      "Biomechanics & Wearables Researcher",
      "GATE 2026 (BM) AIR 154"
    ],
    summary: "Final-year B.E. Biomedical Engineering student (Osmania University, GATE 2026 AIR 154) with hands-on experience designing, integrating, and validating embedded hardware and firmware for medical, diagnostic, and electromechanical systems using Embedded C, ESP32, AVR/Arduino, 8051, Raspberry Pi, UART/SPI/I2C/ESP-NOW, and Proteus. Bringing end-to-end MedTech R&D expertise bridging embedded electronics and sensor interfacing directly with clinical signal physiology (PPG, EMG, IMU), mechanical CAD/FEA prototyping (SolidWorks, ANSYS), and ISO 13485:2016-aligned V&V documentation. Backed by two peer-reviewed publications (Springer, Elsevier)."
  },
  education: [
    {
      institution: "University College of Engineering (A), Osmania University",
      location: "Hyderabad, Telangana",
      degree: "B.E. in Biomedical Engineering",
      period: "August 2023 – June 2027",
      coursework: "Biomedical Equipment & Instrumentation, Biomedical Signal Processing, Medical Imaging Systems, Medical Device Regulations, Analog & Digital Electronics."
    },
    {
      institution: "Sri Chaitanya Junior College",
      location: "ECIL, Hyderabad",
      degree: "Intermediate (MPC)",
      period: "April 2020 – May 2023"
    },
    {
      institution: "Nalanda High School",
      location: "Neredmet, Hyderabad",
      degree: "Secondary School Certificate (SSC)",
      period: "April 2020"
    }
  ],
  skills: {
    "Embedded Systems & Microcontrollers": [
      "Embedded C", "Python", "ESP32", "ESP32-C3", "Arduino (AVR)", "8051 / 8085", "Raspberry Pi", "Keil uVision", "Arduino IDE"
    ],
    "Hardware, Circuits & Protocols": [
      "Analog & Digital Electronics", "Schematic & Circuit Design (Proteus)", "UART", "SPI", "I2C", "BLE / Wi-Fi", "ESP-NOW", 
      "Sensor Interfacing (IMUs, Load Cells/HX711, EMG, MAX30102, MLX90614, FSR)", 
      "Motor & PWM Drivers (PCA9685, TMC2209, TB6600HG, L298N)", "Power Supply Integration", "Soldering & Prototyping"
    ],
    "Testing, Validation & Documentation": [
      "Hardware Debugging & Troubleshooting", "Verification & Validation (V&V)", "Root Cause Analysis", 
      "Signal & Image Analysis (MATLAB, OpenCV)", "Technical Specifications", "BOMs & Test Plans"
    ],
    "Mechanical & Medical Domain": [
      "SolidWorks (CAD)", "ANSYS (FEA)", "Materialise Mimics", "OpenSim", "3D Printing", 
      "Biomedical Instrumentation", "ISO 13485:2016 QMS", "Medical Device Regulations"
    ],
    "Soft Skills & Leadership": [
      "Technical Documentation", "Cross-Functional Collaboration", "Problem Solving", "Analytical Thinking", "Project Presentation"
    ]
  },
  experience: [
    {
      role: "Research Intern",
      organization: "Biomedical Sensors and Systems Lab, University of Memphis, USA (Remote)",
      period: "May 2026 – Present",
      location: "Remote / USA",
      badge: "Ongoing Research",
      details: [
        "Develop and validate computational models of physical and biomechanical joint systems using OpenSim, Materialise Mimics, and Python to support sensor-driven medical analysis.",
        "Process multi-variable sensor and kinematic datasets, troubleshoot simulation environments, and collaborate with international engineering teams to validate physical system parameters.",
        "Conduct kinematic and musculoskeletal biomechanics studies on knee, elbow, and shoulder joint dynamics."
      ]
    },
    {
      role: "Research Intern",
      organization: "National Institute of Pharmaceutical Education and Research (NIPER)",
      period: "May 2026 – June 2026",
      location: "Hyderabad, India",
      badge: "Completed",
      details: [
        "Developed a portable, embedded Lateral Flow Assay (LFA) diagnostic reader on Raspberry Pi integrating camera optics, OLED display interface, and Python/OpenCV firmware for automated point-of-care result interpretation.",
        "Engineered an end-to-end signal and image processing pipeline (ROI extraction, dynamic thresholding, and pixel-intensity analysis) and performed functional validation for repeatable Test/Control line detection.",
        "Executed calibration routines and optical verification ensuring high-confidence diagnostic classification."
      ]
    }
  ],
  publications: [
    {
      title: "A Multimodal Control Approach for Smart Wheelchairs Using Accelerometer and EMG Gesture Interfaces",
      journal: "Springer, IFIP IoT ’25 — IFIPAICT Vol. 781, pp. 468–475",
      date: "Sept 2026",
      publisher: "Springer",
      type: "Peer-Reviewed Conference Paper",
      link: "https://link.springer.com",
      description: "Designed and integrated an analog EMG front-end, MPU6050 6-DOF IMU, Arduino (AVR) microcontroller, UART Bluetooth telemetry, L298N high-power motor driver, and ultrasonic obstacle avoidance to create a dual-modality hands-free control system for smart wheelchairs.",
      tags: ["Springer", "EMG Biosignals", "MPU6050", "Embedded AVR", "Smart Wheelchairs"]
    },
    {
      title: "Data-driven differential classification of running-related injuries: A comparative machine learning analysis of walking versus running kinematics",
      journal: "Array, Elsevier",
      date: "Nov 2026",
      publisher: "Elsevier",
      type: "Peer-Reviewed Journal Article",
      link: "https://www.sciencedirect.com",
      description: "Developed machine learning differential classification pipelines evaluating continuous multi-axial kinematic time-series data between walking and running gait cycles to detect biomechanical risk markers and classify running-related musculoskeletal injuries.",
      tags: ["Elsevier", "Machine Learning", "Gait Kinematics", "Biomechanics", "Differential Classification"]
    }
  ],
  presentations: [
    {
      title: "Mitigating SANS: A Novel Wearable Device for Real-Time Non-Invasive ICP Monitoring in Spaceflight",
      type: "Poster Presentation",
      conference: "National Symposium on Instrumentation - 45 (ISOI / IISc Bangalore & OUCE)",
      award: "1st Prize Winner",
      date: "Dec 2025 - Jan 2026",
      tags: ["Wearable Telemetry", "Aerospace Medicine", "Non-Invasive ICP", "1st Prize"]
    },
    {
      title: "Thermal vision-based Sleep apnea detection using CNN and LSTM networks",
      type: "Poster Presentation",
      conference: "National Level Technical Symposium, Spoorthy Engineering College",
      award: "1st Prize Winner",
      date: "2025",
      tags: ["Thermal Imaging", "CNN-LSTM", "Sleep Apnea", "Diagnostics"]
    },
    {
      title: "A Multimodal Control Approach for Smart Wheelchairs Using Accelerometer and EMG Gesture Interfaces",
      type: "Paper Presentation",
      conference: "IFIP IoT ’25 International Conference",
      award: "Accepted & Published",
      date: "Sept 2026",
      tags: ["EMG", "Robotics", "Assistive Tech"]
    },
    {
      title: "Gamified computer vision-based palm rehabilitation system",
      type: "Model Presentation",
      conference: "Meditech 2K24, University College of Engineering (A), Osmania University",
      award: "Consolation Prize",
      date: "2024",
      tags: ["Computer Vision", "Palm Rehab", "Gamification"]
    }
  ],
  projects: [
    {
      title: "Personalized Musculoskeletal Digital Twin for Joint Contact Force Estimation",
      category: "Embedded & Biomechanics",
      description: "Architecting a real-time wearable lower-limb telemetry ecosystem integrating decentralized ESP32-C3 Supermini nodes, MPU9250 6-DOF IMUs (I2C/SPI), and FSR-instrumented insoles communicating over low-latency ESP-NOW protocol.",
      features: [
        "Decentralized ESP32-C3 wireless nodes synchronized over low-latency ESP-NOW protocol.",
        "Multi-node sensor acquisition with ground-reaction-force boundary detection via FSR sensors.",
        "Feeds real-time inputs into personalized neuromusculoskeletal modeling and TinyML/LSTM pipelines for knee joint contact force estimation."
      ],
      tags: ["ESP32-C3", "MPU9250", "FSR", "ESP-NOW", "OpenSim", "TinyML"]
    },
    {
      title: "2D Multi-Directional Electromechanical Biotribometer for Hip Joint Wear Testing",
      category: "Hardware & Biotribology",
      description: "Engineered a 2D multi-directional pin-on-disk test platform with an 80×50 mm active X-Y stroke, integrating NEMA 17 stepper motors, TMC2209 silent drivers, 12V 10A SMPS power circuitry, decoupled vertical load carriage, and dual-axis load cells.",
      features: [
        "Precision multi-directional motion controlled via TMC2209 stepper drivers and dedicated SMPS.",
        "Decoupled vertical load carriage with dual-axis load cells for shear friction measurement.",
        "Python kinematics scripts translating OpenSim 3D hip joint trajectories into figure-8 sliding paths, validated with ANSYS Archard wear simulations."
      ],
      tags: ["NEMA 17", "TMC2209", "Dual-Axis Load Cells", "ANSYS", "SolidWorks", "Python"]
    },
    {
      title: "Smart Robotic Hand for Remote Vital-Parameters Assessment",
      category: "Embedded & Robotics",
      description: "Engineered an embedded multi-sensor medical prototype integrating an ESP32 microcontroller, PCA9685 PWM driver (6 precision servos), MAX30102 pulse oximeter, MLX90614 infrared thermometer, and FSR grip trigger over I2C.",
      features: [
        "Articulated 6-servo gripper actuated via PCA9685 PWM driver over I2C bus.",
        "Simultaneous real-time pulse oximetry (SpO2/HR) and contactless infrared temperature sensing.",
        "Synchronized telemetry streaming data packets to a Raspberry Pi Python diagnostic GUI with custom 3D-printed enclosures."
      ],
      tags: ["ESP32", "Raspberry Pi", "MAX30102", "MLX90614", "PCA9685", "I2C"]
    },
    {
      title: "Design and Fabrication of a Portable Stepper-Driven Tribometer",
      category: "Hardware & Instrumentation",
      description: "Designed and built a low-cost electromechanical pin-on-disk test rig integrating an ESP32, stepper motor speed/timer control firmware, 16×2 LCD, 4×3 keypad, and a 24-bit HX711 load-cell amplifier circuit for friction and wear measurement.",
      features: [
        "Programmable speed and cycle duration control via keypad interface and alphanumeric LCD.",
        "High-resolution 24-bit ADC signal acquisition from calibrated load-cell transducers.",
        "Drafted full technical specifications, BOMs, and validation test plans to analyze biomaterial wear."
      ],
      tags: ["ESP32", "HX711", "TB6600HG", "Load Cell", "Biomaterials"]
    },
    {
      title: "Real-Time Wireless Gait Parameters Monitoring System",
      category: "Wearables & Signal Processing",
      description: "Built an edge-native wireless wearable device using ESP32 and MPU6050 IMU (I2C) to capture and transmit continuous time-series gait kinematics (heel strike, stance period, toe-off).",
      features: [
        "Wearable heel-mounted sensor unit streaming real-time acceleration and angular velocity over Wi-Fi.",
        "Low-latency embedded telemetry firmware optimized for continuous battery operation.",
        "Signal filtering, gait phase segmentation, and kinematic trajectory plotting in MATLAB."
      ],
      tags: ["ESP32", "MPU6050", "Wi-Fi Telemetry", "MATLAB", "Biomechanics"]
    },
    {
      title: "Computer Vision-Based Upper Limb Rehabilitation System",
      category: "AI & Healthcare",
      description: "Computer vision-based GUI developed in Python and OpenCV for therapeutic rehabilitation of wrist, elbow, and shoulder joints.",
      features: [
        "Real-time visual pose estimation and automated range-of-motion assessment.",
        "Audio-visual feedback cues with repetition counting and historical progress tracking.",
        "Pre-loaded clinical exercise demonstration videos for guided patient recovery."
      ],
      tags: ["OpenCV", "Python", "Pose Estimation", "Rehabilitation"]
    },
    {
      title: "Gamified Palm Rehabilitation System",
      category: "AI & Healthcare",
      description: "Interactive computer vision rehabilitation tool allowing patients suffering from motor impairment to play games using hand and palm gestures for physical therapy.",
      features: [
        "Real-time palm gesture tracking mapped to interactive gameplay controls.",
        "Enhances patient therapy compliance through personalized gamified biofeedback."
      ],
      tags: ["Computer Vision", "Python", "Rehabilitation", "Gamification"]
    },
    {
      title: "Fabrication of PCL Nanofibers via Air-Blown Method",
      category: "Biomaterials & Nanotechnology",
      description: "Fabricated polycaprolactone (PCL) biodegradable nanofiber scaffolds using pressurized air-blown solution spraying for tissue engineering.",
      features: [
        "Optimized compressed air pressure and polymer solution viscosity for uniform fiber deposition.",
        "Fabricated biomaterial scaffolds suitable for cellular attachment and extracellular matrix mimicking."
      ],
      tags: ["Biomaterials", "Nanofibers", "Tissue Engineering"]
    }
  ],
  activities: [
    {
      role: "Chairperson",
      organization: "IEEE EMBS OUCE Student Chapter",
      period: "July 2026 – Apr 2027",
      details: [
        "Spearhead the annual chapter roadmap, technical workshops, and industry-academia MedTech initiatives.",
        "Co-organized the National-Level Hands-on Workshop on Building Smart Biomedical Devices using IoT (Feb 2026)."
      ]
    },
    {
      role: "Design Lead",
      organization: "IEEE Student Branch, Osmania University",
      period: "Apr 2025 – Apr 2026",
      details: [
        "Managed and guided a team of 12 design volunteers for all graphical identity, branding, and event collateral.",
        "Delivered promotional assets for flagship conferences and technical symposia."
      ]
    },
    {
      role: "Committee Member & Stage Management",
      organization: "TEDxOsmaniaU 2025",
      period: "Aug 2025 – Nov 2025",
      details: [
        "Awarded official Letter of Recommendation (LOR) from the Managing Director of TEDxOsmaniaU 2025.",
        "Executed stage management and speaker coordination during the main event and theme reveal."
      ]
    },
    {
      role: "Lead Volunteer & Design Head",
      organization: "National Symposium on Instrumentation - 45 (ISOI / IISc Bangalore)",
      period: "Dec 2025 – Jan 2026",
      details: [
        "Headed the design team delivering brochures, invitations, stage backdrops, posters, and certificates.",
        "Oversaw on-ground stage logistics and session coordination ensuring seamless symposium execution."
      ]
    },
    {
      role: "Industry Visit Participant",
      organization: "Andhra Pradesh MedTech Zone (AMTZ), Visakhapatnam",
      period: "2025",
      details: [
        "Explored state-of-the-art medical device manufacturing, cleanrooms, rapid prototyping, and regulatory testing labs."
      ]
    }
  ],
  achievements: [
    {
      title: "GATE 2026 AIR 154 (Biomedical Engineering)",
      description: "Achieved All India Rank 154 in the national Graduate Aptitude Test in Engineering (GATE 2026 BM), validating strong engineering foundation."
    },
    {
      title: "ISO 13485:2016 Certification",
      description: "Completed ISO 13485:2016 Medical Devices Quality Management Systems (QMS) certification."
    },
    {
      title: "1st Prize - NSI-45 (ISOI / IISc Bangalore)",
      description: "Won 1st Prize in national poster competition for 'Mitigating SANS: A Novel Wearable Device for Real-Time Non-Invasive ICP Monitoring in Spaceflight'."
    },
    {
      title: "1st Prize - Spoorthy Eng. College Technical Symposium",
      description: "Awarded 1st Prize for presenting 'Thermal vision-based Sleep apnea detection using CNN and LSTM networks'."
    },
    {
      title: "1st Prize - Biomaterials & Fabrication Quiz",
      description: "Won 1st Prize in hands-on workshop quiz competition conducted by the Department of Biomedical Engineering, OUCE."
    },
    {
      title: "Consolation Prize - Meditech 2K24",
      description: "Presented 'Gamified computer vision-based palm rehabilitation system' at the national medical innovation symposium."
    }
  ]
};
