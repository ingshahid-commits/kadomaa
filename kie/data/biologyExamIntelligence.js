/**
 * biologyExamIntelligence.js  —  Kadoma knowledge base: تحلیل آزمون‌های زیست
 * -----------------------------------------------------------------------
 * Source: user-provided real-Konkur exam analysis (takzist.txt), reflowed
 * into valid JSON and re-exported verbatim.
 * Shape: { exam_intelligence: [...per-question analysis...],
 * chapter_analytics, cross_book_dependencies, ai_advisor_decision_metadata,
 * statistical_answers_precomputed, examiner_archetypes }
 * This is question-level / examiner-behavior intelligence, not a chapter
 * list - it complements biology10/11/12 rather than feeding
 * CurriculumEngine.ingestExam() directly. Intended consumer: an
 * AI-advisor / smart-notification style module that wants exam-pattern
 * and "examiner archetype" context per chapter_id.
 * -----------------------------------------------------------------------
 */
export const BIOLOGY_EXAM_INTELLIGENCE = {
  "exam_intelligence": [
    {
      "exam_year": 1404,
      "exam_type": "Ordibehesht_Sarasari",
      "questions": [
        {
          "question_number": 1,
          "chapter_id": "G12_C3",
          "topic": "Inheritance",
          "subtopic": "Hemophilia",
          "micro_skill": "Pedigree Analysis/Probability",
          "cognitive_level": "Applying",
          "difficulty": 6,
          "required_reasoning": "Deductive",
          "hidden_concept": "Recessive X-linked behavior in males vs females",
          "prerequisite_topics": [
            "G11_C6_Meiosis"
          ],
          "concept_combination": [
            "G12_C3",
            "G11_C6"
          ],
          "trap_type": "Gender-specific expression",
          "examiner_intention": "Test the ability to correlate genotype with phenotype in sex-linked disorders."
        },
        {
          "question_number": 15,
          "chapter_id": "G12_C6",
          "topic": "Photosynthesis",
          "subtopic": "Pigments/Action Spectrum",
          "micro_skill": "Graph Interpretation",
          "cognitive_level": "Analysis",
          "difficulty": 8,
          "required_analysis": "Comparing absorption vs action spectra",
          "hidden_concept": "Relation between O2 production and specific wavelengths",
          "trap_type": "Quantitative graph misreading",
          "examiner_intention": "Assess understanding of the relationship between light absorption and the efficiency of the light-dependent reactions."
        }
      ]
    },
    {
      "exam_year": 1403,
      "exam_type": "Tir_Sarasari",
      "questions": [
        {
          "question_number": 1,
          "chapter_id": "G10_C6",
          "topic": "Plant Tissues",
          "subtopic": "Xylem",
          "micro_skill": "Structural Differentiation",
          "cognitive_level": "Knowledge/Recall",
          "difficulty": 4,
          "textbook_reference": "Biology 1, Page 89",
          "trap_type": "Lignin vs Cellulose wall comparison",
          "examiner_intention": "Testing foundational knowledge of vascular plant anatomy."
        }
      ]
    }
  ],
  "chapter_analytics": {
    "G12_C3_Inheritance": {
      "total_questions": 14,
      "question_percentage": 10.5,
      "yearly_frequency": 3.5,
      "importance_trend": "Increasing",
      "trend_graph_data": {
        "1401": 3,
        "1402": 3,
        "1403": 4,
        "1404": 4
      },
      "most_tested_topics": [
        "Genetics Probabilities",
        "Modern Genetics"
      ],
      "common_traps": [
        "Male hemizygosity",
        "Codominance vs Incomplete dominance definitions"
      ],
      "hidden_patterns": "Almost always combined with G11_C6 (Meiosis)."
    },
    "G10_C4_Circulation": {
      "total_questions": 18,
      "question_percentage": 12.0,
      "yearly_frequency": 4.5,
      "average_questions_per_exam": 4.2,
      "importance_trend": "Stable_High",
      "most_tested_topics": [
        "Cardiac Cycle",
        "ECG Analysis",
        "Vessel Anatomy"
      ],
      "hardest_question_style": "Combination of ECG waves with Valve status",
      "hidden_patterns": "The examiner often links blood pressure in Ch 4 to filtration rates in G10_Ch 5 (Excretion)."
    }
  },
  "cross_book_dependencies": [
    {
      "source_node": "G11_C6_Cell_Division",
      "target_node": "G12_C3_Inheritance",
      "dependency_weight": 0.95,
      "reasoning": "Mastery of chromosomal separation in Meiosis I/II is the absolute bottleneck for solving non-disjunction and link-based genetics problems."
    },
    {
      "source_node": "G10_C2_Digestion",
      "target_node": "G11_C4_Endocrine",
      "dependency_weight": 0.7,
      "reasoning": "Hormonal control of gastrin and secretin bridges metabolism and regulation."
    }
  ],
  "ai_advisor_decision_metadata": {
    "diagnostic_rules": [
      "IF student fails G12_C3 probability THEN check G11_C6 Meiosis fundamentals",
      "IF student confuses ECG waves THEN review G11_C1 Myocardial conduction system"
    ],
    "recovery_paths": {
      "Genetics_Fail": [
        "Meiosis structural review",
        "Allelic interaction table",
        "Probability tree practice"
      ],
      "Metabolism_Fail": [
        "Enzyme kinetics (G12_C1)",
        "Organelle structure (G10_C1)",
        "ATP cycle"
      ]
    },
    "forgetting_patterns": {
      "Plant_Anatomy": "High risk - Requires review every 14 days due to terminology load",
      "Human_Physiology": "Medium risk - Logic-based, review every 30 days"
    }
  },
  "statistical_answers_precomputed": {
    "ch7_appearance_1400_1404": 12,
    "highest_frequency_chapter": "G12_C1_Molecules_of_Life",
    "frequent_concept_combinations": [
      [
        "Meiosis",
        "Pedigree"
      ],
      [
        "Hormones",
        "Homeostasis"
      ],
      [
        "Photosynthesis",
        "Plant_Structure"
      ]
    ],
    "declining_importance_chapters": [
      "G10_C1_The_Living_World"
    ],
    "sudden_popularity_topics": [
      "Biotechnology_Applications",
      "Bioinformatics_G12"
    ],
    "hidden_textbook_notes_frequency": {
      "Footnotes": 0.15,
      "Image_Captions": 0.28,
      "Activity_Questions": 0.35
    }
  },
  "examiner_archetypes": {
    "The_Logician": "Focuses on 'If-Then' scenarios in physiology (e.g., if ADH decreases, what happens to blood pressure?)",
    "The_Visualizer": "Uses textbook diagrams but modifies labels or orientations to test true spatial understanding",
    "The_Linguist": "Relies on subtle Farsi nuances (e.g., هر vs برخی, همیشه vs بیشتر اوقات)"
  }
};

export default BIOLOGY_EXAM_INTELLIGENCE;
