export const notes = [
  {
    slug: "cyclist-position",
    title: "How far is a cyclist from the lane edge?",
    label: "WCTR 2026 · Research",
    intro:
      "Cyclist lateral position matters for road design. Measuring it continuously with a single low-mounted camera makes the choice of geometry as important as the choice of detector.",
    sections: [
      [
        "The research",
        "Anant Shukla and Prof. Indrajit Ghosh co-authored Real-Time Cyclist Lateral Position Detection using CV, accepted at WCTR 2026. The study uses filtering, scanline edge detection and RANSAC fitting on monocular video. The résumé reports a 15–25% reduction in fit error with weighting.",
      ],
      [
        "From pixels to metres",
        "The related LaneDetection application measures the horizon from optical flow and projects lane points into ground coordinates. A small pixel error high in the image can become a large distance error. Near-field estimates are more stable, but they disappear when the line leaves the frame.",
      ],
      [
        "Reading the output",
        "Review the annotated frames alongside the distance plot. Check camera height first when every estimate seems consistently high or low. A gap in the series can indicate a rider farther from the line, so a mean over detected frames can understate the true separation.",
      ],
    ],
    project: "lane-distance",
  },
  {
    slug: "tracing",
    title: "What a forward pass leaves behind",
    label: "Engineering note · AI systems",
    intro:
      "Two models can return similar predictions while spending their time in very different layers. A trace makes that difference inspectable.",
    sections: [
      [
        "Attach at the boundary",
        "llmscope wraps module calls with hooks. A pre-hook marks the start and records input dimensions. The post-hook records the output shape, elapsed time and activation statistics. The forward function can stay focused on its calculation.",
      ],
      [
        "Inspect in context",
        "A single large activation says little on its own. Follow its range and sparsity across adjacent layers, then inspect the attention pattern and latency for the same step. Keep parent and child timings separate when interpreting where time went.",
      ],
      [
        "Replay a run",
        "Persisting the sequence of events makes it possible to return to a surprising layer without rerunning inference. That is particularly helpful when explaining a trace to someone who does not have the model loaded.",
      ],
    ],
    project: "llmscope",
  },
];
