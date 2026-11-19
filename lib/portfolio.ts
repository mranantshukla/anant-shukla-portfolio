export const github = "https://github.com/mranantshukla";
export const linkedin = "https://www.linkedin.com/in/anantastic";
export const email = "anant_s@ce.iitr.ac.in";

export const projects = [
  {
    slug: "lane-distance",
    title: "Lane distance",
    discipline: "Computer vision",
    color: "#b7d5ad",
    subtitle: "Measuring a cyclist’s position from a single camera.",
    problem:
      "Road-safety researchers need lateral distances in metres. A pixel offset from a painted line changes with camera pitch, height and the rider’s position.",
    method:
      "The pipeline estimates the horizon from optical flow, uses a row-anchor ResNet to locate the marking, and projects detections onto the ground plane. Comparing three distance estimates helps flag oblique markings.",
    outcome:
      "Researchers can inspect annotated video alongside a per-frame CSV and a distance plot. The repository reports a 17.7-pixel validation error for the lane detector across its validation split. Camera height remains a source of scale error.",
    stack: ["Python", "ResNet-18", "FastAPI", "Next.js"],
    source: github + "/LaneDetection",
  },
  {
    slug: "llmscope",
    title: "llmscope",
    discipline: "AI systems",
    color: "#a6badf",
    subtitle: "Watching a transformer work, one layer at a time.",
    problem:
      "A slow forward pass gives a developer little information about where time went or which layer produced unusual activations.",
    method:
      "A C++14 tracer attaches pre- and post-forward hooks to modules. It captures tensor shapes, activation statistics and per-layer latency, and lets the developer inspect attention in a keyboard-driven terminal.",
    outcome:
      "A saved trace can be replayed during debugging. Developers can revisit the same run, compare slow blocks and inspect outlying activations without repeating inference.",
    stack: ["C++14", "Forward hooks", "Terminal UI"],
    source: github + "/llmscope",
  },
  {
    slug: "swiggy-sense",
    title: "Swiggy Sense",
    discipline: "Product strategy",
    color: "#edb28d",
    subtitle: "Helping a hungry customer decide what to order.",
    problem:
      "A long list of recommendations still leaves a customer to reconcile taste, budget and timing. The design brief was to make that decision easier.",
    method:
      "The Society of Business project maps the ordering journey into an eight-stage agent workflow with user constraints and guardrails. An interactive prototype demonstrates the proposed experience.",
    outcome:
      "The business case models revenue scenarios from ₹746 crore to ₹2,385 crore and projects a 7.6× return at scale. These figures are scenario estimates, dependent on adoption and unit economics.",
    stack: ["Agent design", "Prototyping", "Business modelling"],
    source: github + "/swiggy-sense-op26",
    demo: "https://mranantshukla.github.io/swiggy-sense-op26/prototype/",
  },
  {
    slug: "customer-value",
    title: "Customer value",
    discipline: "Analytics & consulting",
    color: "#d4c1df",
    subtitle: "Rethinking which customers a D2C brand should retain.",
    problem:
      "The brand had transaction records for 3,900 customers and no labelled churn outcome. Treating every repeat purchase as loyalty could reward customers who bought only during promotions.",
    method:
      "A Python and SQL pipeline brought customer records into a Power BI analysis. Two loyalty frameworks tested how consistently the same groups appeared valuable under different definitions.",
    outcome:
      "The recommendations included an ideal customer profile and a plan to phase out promotions. The work produced a decision framework for the brand. Revenue lift would require follow-up measurement.",
    stack: ["Python", "SQL", "Power BI", "Segmentation"],
    source: "/resume.pdf",
  },
];
export const experience = [
  [
    "May – Jul 2026",
    "Gen AI Intern",
    "AI Velocity",
    "Fine-tuned 7B models for next-edit suggestions in an internal IDE. The résumé reports a 5.21% gain on Zeta Eval for the new task.",
  ],
  [
    "Dec 2023 – present",
    "Co-founder",
    "Updesha Conxultancy",
    "Co-founded an education startup and led strategy, operations and stakeholder management.",
  ],
  [
    "May – Jul 2025",
    "Analytics Intern",
    "VK Global Publications",
    "Used SQL, cohort analysis and campaign tests to guide sales planning. Identified segments for strategies associated with an 18% sales increase.",
  ],
  [
    "Dec 2024 – Jan 2025",
    "Machine Learning Intern",
    "Eazeplace",
    "Developed résumé matching and an OCR-based student ID parser. The parser achieved over 95% extraction accuracy across more than 1,000 cards.",
  ],
];
export const leadership = [
  [
    "Jan 2026 – present",
    "Overall Coordinator",
    "Hostel Affairs Council",
    "Coordinated operations for 8,000+ residents across 18+ hostels, including budgeting and vendor coordination for institute events.",
  ],
  [
    "Jan 2024 – present",
    "Overall Finance Coordinator",
    "Unnat Bharat Abhiyan",
    "Managed an annual CSR budget of ₹5 lakh+ supporting development work across five villages.",
  ],
  [
    "Jun 2025 – present",
    "Joint Secretary",
    "National Service Scheme",
    "Directed 17 teams across flood relief, blood donation and road safety initiatives.",
  ],
];
export const skills = [
  {
    name: "Technology",
    tools: ["Python", "C++", "PyTorch", "LangGraph", "FastAPI", "React"],
    example:
      "Trace a transformer’s forward pass or build a video processing API.",
    project: projects[1],
  },
  {
    name: "Analytics",
    tools: ["SQL", "Power BI", "scikit-learn", "XGBoost", "SHAP"],
    example:
      "Use customer transactions to test competing definitions of loyalty.",
    project: projects[3],
  },
  {
    name: "Consulting",
    tools: [
      "Cohort analysis",
      "A/B testing",
      "Scenario modelling",
      "Stakeholder management",
    ],
    example:
      "Translate a food-ordering prototype into adoption and revenue scenarios.",
    project: projects[2],
  },
];
