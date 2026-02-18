export const presentation = {
  meta: {
    kicker: "Thesis Presentation",
    title: "Separation and Purification of Human Serum Albumin",
    shortTitle: "HSA Purification Deck"
  },
  slides: [
    {
      id: 1,
      title: "Separation and Purification of Human Serum Albumin from Blood Serum Using Surface-Modified Bentonite",
      paragraphs: [
        "Saeed Barzegar",
        "Supervisor: Dr. Javanbakht",
        "Amirkabir University of Technology",
        "2024"
      ]
    },
    {
      id: 2,
      title: "Scientific Context: Albumin in Plasma",
      lead: "Composition of Blood Plasma",
      bullets: [
        "585 amino acids",
        "~69 kDa molecular weight",
        "Synthesized in liver (~12 g/day)",
        "Responsible for 75-80% of plasma oncotic pressure"
      ],
      paragraphs: [
        "Human Serum Albumin (HSA) is the most abundant protein in blood plasma.",
        "Due to its high concentration and multifunctionality, albumin is a major target in therapeutic purification."
      ],
      figures: ["Insert plasma composition figure"]
    },
    {
      id: 3,
      title: "Biological and Clinical Importance",
      lead: "Albumin plays a central physiological role:",
      bullets: [
        "Transport of fatty acids, hormones, and drugs",
        "Osmotic pressure regulation",
        "Plasma buffering",
        "Drug delivery systems",
        "Plasma expanders",
        "Biopharmaceutical formulations"
      ],
      paragraphs: [
        "The increasing medical demand requires efficient and scalable purification strategies."
      ]
    },
    {
      id: 4,
      title: "The Core Separation Problem",
      lead: "Serum contains multiple proteins with:",
      bullets: [
        "Overlapping molecular weight",
        "Similar surface charge at physiological pH",
        "Competitive adsorption behavior"
      ],
      paragraphs: [
        "Therefore, selective separation of albumin from complex biological matrices remains challenging."
      ]
    },
    {
      id: 5,
      title: "Why Albumin Is Difficult to Separate",
      bullets: [
        "Globular structure similar to IgG",
        "Comparable physicochemical properties",
        "Overlapping isoelectric regions",
        "Strong intermolecular interactions in serum"
      ],
      paragraphs: [
        "These similarities complicate conventional separation."
      ]
    },
    {
      id: 6,
      title: "Limitations of Current Technologies",
      lead: "Conventional purification relies on chromatography:",
      bullets: [
        "Ion-exchange",
        "Affinity chromatography",
        "Size exclusion",
        "High resin cost",
        "Multi-step operation",
        "Energy-intensive processing",
        "Limited reusability"
      ],
      paragraphs: [
        "Alternative low-cost approaches are required."
      ]
    },
    {
      id: 7,
      title: "Patent and Market Perspective",
      paragraphs: [
        "Patent trends and market expansion show strong industrial interest.",
        "However, cost-effective adsorption platforms remain underexplored."
      ],
      figures: [
        "Insert albumin market growth chart",
        "Insert patent statistics figure"
      ]
    },
    {
      id: 8,
      title: "Identified Research Gap",
      lead: "There is no method that simultaneously provides:",
      bullets: [
        "High selectivity",
        "Low cost",
        "Regenerability",
        "Mechanistic clarity",
        "Real-serum applicability"
      ],
      paragraphs: ["This gap motivated the present work."]
    },
    {
      id: 9,
      title: "Conceptual Framework",
      lead: "We proposed a rational adsorption-based strategy:",
      bullets: [
        "Natural bentonite as base material",
        "Surface modification to tailor affinity",
        "Integration of molecular modeling and experimental validation"
      ],
      paragraphs: [
        "This approach enables controlled surface-protein interaction design."
      ]
    },
    {
      id: 10,
      title: "Why Bentonite?",
      lead: "Bentonite offers:",
      bullets: [
        "Abundance and low cost",
        "High surface area layered structure",
        "Tunable surface chemistry",
        "Chemical and thermal stability"
      ],
      paragraphs: ["However, raw bentonite lacks selectivity."]
    },
    {
      id: 11,
      title: "Need for Surface Functionalization",
      lead: "To achieve selective albumin adsorption:",
      bullets: [
        "Electrostatic interactions must be engineered",
        "Hydrophobic interactions must be balanced",
        "Surface charge must be tailored"
      ],
      paragraphs: ["Thus, surface modification becomes essential."]
    },
    {
      id: 12,
      title: "Molecular Docking-Based Precursor Screening",
      paragraphs: [
        "Several silane precursors were computationally evaluated.",
        "Molecular docking simulations were used to compare binding energy, interaction modes, and selectivity potential.",
        "Among the screened candidates, DTSACL exhibited the most favorable predicted interaction with HSA.",
        "Therefore, DTSACL was selected as the surface modifier."
      ],
      figures: ["Insert comparative docking energy graph of silane candidates"]
    },
    {
      id: 13,
      title: "DTSACL Functionalization Strategy",
      lead: "DTSACL contains:",
      bullets: [
        "Quaternary ammonium headgroup for electrostatic attraction",
        "C18 alkyl chain for hydrophobic enhancement",
        "Silane functionality for covalent anchoring"
      ],
      paragraphs: [
        "This design allows balanced affinity rather than irreversible binding."
      ],
      figures: ["Insert chemical structure"]
    },
    {
      id: 14,
      title: "Docking Analysis for Selectivity (HSA vs IgG)",
      lead: "Docking simulations were performed for HSA and IgG to evaluate selectivity.",
      bullets: [
        "Lower binding energy for HSA",
        "More favorable binding orientation for HSA",
        "Weaker and less optimal interaction with IgG"
      ],
      paragraphs: [
        "This computational comparison predicted selective adsorption behavior."
      ],
      figures: ["Insert HSA vs IgG docking comparison graph"]
    },
    {
      id: 15,
      title: "Experimental Workflow",
      lead: "Two integrated phases:",
      bullets: [
        "Computational screening and selectivity prediction",
        "Laboratory synthesis and validation"
      ],
      paragraphs: [
        "This combined approach strengthens mechanistic reliability."
      ]
    },
    {
      id: 16,
      title: "Synthesis of DTSACL-Modified Bentonite",
      bullets: [
        "Bentonite pre-dried at 105 deg C",
        "Reaction with 20 wt% DTSACL under reflux",
        "Heating from 70 to 120 deg C",
        "2-hour reaction",
        "Ethanol washing",
        "Final drying"
      ],
      paragraphs: ["This ensured stable covalent grafting."]
    },
    {
      id: 17,
      title: "Material Characterization",
      bullets: [
        "FTIR confirmed functional groups",
        "XRD indicated structural integrity",
        "TGA demonstrated organic loading",
        "SEM revealed surface morphology changes"
      ],
      figures: [
        "Insert FTIR spectrum",
        "Insert XRD pattern",
        "Insert TGA curve",
        "Insert SEM image"
      ]
    },
    {
      id: 18,
      title: "Experimental Design (CCD)",
      lead: "Three variables:",
      bullets: [
        "pH",
        "Initial HSA concentration",
        "Adsorbent dosage",
        "Statistical optimization",
        "Interaction analysis",
        "Response surface modeling"
      ],
      paragraphs: [
        "Central Composite Design enabled optimization and mechanism-driven analysis."
      ],
      figures: ["Insert ANOVA and response surface plots"]
    },
    {
      id: 19,
      title: "Adsorption Experiments",
      lead: "Batch adsorption under controlled conditions:",
      bullets: [
        "pH adjustment",
        "Controlled agitation",
        "Centrifugation",
        "HPLC quantification"
      ],
      figures: ["Insert HPLC chromatogram"]
    },
    {
      id: 20,
      title: "Isotherm Analysis",
      paragraphs: [
        "Langmuir and Freundlich models were applied.",
        "Results suggested monolayer-dominated adsorption with measurable surface heterogeneity."
      ],
      figures: ["Insert isotherm plots"]
    },
    {
      id: 21,
      title: "Kinetic Study",
      paragraphs: [
        "Pseudo-second-order model provided the best fit.",
        "Results indicate a chemisorption-dominated interaction mechanism."
      ],
      figures: ["Insert kinetic plots"]
    },
    {
      id: 22,
      title: "Thermodynamic Analysis",
      bullets: [
        "DeltaG0 < 0 indicates spontaneous adsorption",
        "DeltaH0 indicates interaction nature",
        "DeltaS0 reflects interfacial entropy change"
      ],
      paragraphs: ["Adsorption process is thermodynamically favorable."],
      figures: ["Insert thermodynamic graphs"]
    },
    {
      id: 23,
      title: "Regeneration and Recyclability",
      paragraphs: [
        "Three regeneration systems were tested.",
        "Ethanol-based elution proved effective.",
        "Four adsorption-desorption cycles showed stable performance."
      ],
      figures: ["Insert SDS-PAGE gel image"]
    },
    {
      id: 24,
      title: "Selectivity Validation (Experimental)",
      lead: "IgG adsorption was evaluated under optimized HSA conditions.",
      bullets: [
        "Lower IgG adsorption capacity",
        "Different kinetic behavior"
      ],
      paragraphs: [
        "Results were consistent with molecular docking predictions."
      ],
      figures: ["Insert comparative adsorption graph"]
    },
    {
      id: 25,
      title: "Effect of pH and Surface Charge",
      paragraphs: [
        "Maximum adsorption was observed around pH 6.2.",
        "This aligns with electrostatic interaction between modified surface and albumin charge distribution."
      ],
      figures: [
        "Insert pH adsorption curve",
        "Insert zeta potential plot (if available)"
      ]
    },
    {
      id: 26,
      title: "Packed Column Experiment",
      paragraphs: [
        "Continuous flow system was implemented.",
        "Breakthrough behavior was monitored.",
        "Results demonstrate applicability in dynamic conditions."
      ],
      figures: ["Insert breakthrough curve"]
    },
    {
      id: 27,
      title: "Binary Protein Separation",
      paragraphs: [
        "HSA/IgG mixture separation was performed.",
        "Selective retention was observed."
      ],
      figures: ["Insert binary chromatogram"]
    },
    {
      id: 28,
      title: "Real Human Serum Application",
      paragraphs: [
        "Real serum was applied to the packed column.",
        "Eluted fractions were analyzed by SDS-PAGE.",
        "Results demonstrate real-matrix performance."
      ],
      figures: ["Insert gel image"]
    },
    {
      id: 29,
      title: "Overall Performance Summary",
      bullets: [
        "Selective adsorption",
        "Regenerability",
        "Reproducibility",
        "Real serum validation",
        "Mechanistic support via docking"
      ]
    },
    {
      id: 30,
      title: "Scientific Contribution",
      bullets: [
        "Rational silane precursor screening",
        "Computational prediction of selectivity",
        "Mechanistic adsorption modeling",
        "Practical demonstration in real serum"
      ]
    },
    {
      id: 31,
      title: "Industrial Outlook",
      lead: "Potential advantages over chromatography:",
      bullets: [
        "Lower cost",
        "Reusable adsorbent",
        "Scalable packed column design",
        "Simplified purification pathway"
      ]
    },
    {
      id: 32,
      title: "Final Conclusion",
      lead: "DTSACL-modified bentonite provides:",
      bullets: [
        "Controlled surface affinity",
        "Selective HSA adsorption over IgG",
        "Reusability and stability",
        "Applicability to real biological systems"
      ],
      paragraphs: [
        "This work presents a promising adsorption-based alternative for protein purification."
      ]
    }
  ]
};
