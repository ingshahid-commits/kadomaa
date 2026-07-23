/**
 * biology10.js  —  Kadoma knowledge base: زیست‌شناسی (۱), پایه دهم
 * -----------------------------------------------------------------------
 * Source: user-provided textbook knowledge base (zist_1.txt), reflowed
 * into valid JSON and re-exported verbatim as a JS module - no content
 * was altered, only whitespace/line-wrap was normalized.
 * Shape: { textbook_metadata, knowledge_base: [ {chapter_number,
 * chapter_title, topics:[...]} ], knowledge_graph, learning_metadata_summary,
 * ai_advisor_metadata }
 * NOTE: this file uses `knowledge_base` (not `chapters`) as the chapter
 * array key - see curriculumAdapter.js which normalizes this difference.
 * -----------------------------------------------------------------------
 */
export const BIOLOGY_10_KB = {
  "textbook_metadata": {
    "title": "Biology (1) - زیست‌شناسی (۱)",
    "grade": "10th Grade (پایه دهم)",
    "branch": "Experimental Sciences (رشته علوم تجربی)",
    "publication_year": "1402 (2023-2024)",
    "curriculum": "Iranian National Curriculum for Konkur Preparation"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "دنیای زنده (The Living World)",
      "topics": [
        {
          "id": "ch1_t1",
          "title": "زیست‌شناسی چیست؟ (What is Biology?)",
          "explanation": "Biology as a branch of natural sciences exploring living organisms and life processes. It emphasizes the limitations of experimental science (cannot judge aesthetics or ethics) and the holistic approach.",
          "complete_definition": "The scientific study of life and living organisms, focusing on structures, functions, and interactions within the scope of observable and measurable phenomena.",
          "key_concepts": [
            "Experimental Science Limitations",
            "Holism (کل‌نگری)",
            "Interdisciplinary Nature",
            "Genetic Information",
            "Biological Ethics"
          ],
          "principles": [
            "Science only deals with observable causes.",
            "The whole is greater than the sum of its parts (Holism)."
          ],
          "terminology": [
            "کل‌نگری (Holism)",
            "اخلاق زیستی (Bioethics)",
            "دنا (DNA)"
          ],
          "important_notes": [
            "Biology provides solutions for food security, health, and environmental protection (e.g., Lake Urmia restoration)."
          ],
          "exam_points": [
            "Biological claims must be measurable.",
            "Personalized medicine uses DNA profiles for specific treatments."
          ],
          "prerequisite_topics": [
            "Basic Science Methodology"
          ],
          "learning_metadata": {
            "difficulty_score": 3,
            "importance_score": 5,
            "memory_load": "low",
            "reasoning_load": "low",
            "estimated_learning_time": "45 min"
          }
        },
        {
          "id": "ch1_t2",
          "title": "گستره حیات (Levels of Biological Organization)",
          "explanation": "Hierarchical levels of life from atoms to the biosphere.",
          "complete_definition": "The structured organization of life into levels where each level exhibits emergent properties.",
          "key_concepts": [
            "Atom",
            "Molecule",
            "Organelle",
            "Cell",
            "Tissue",
            "Organ",
            "Organ System",
            "Organism",
            "Population",
            "Community",
            "Ecosystem",
            "Biome",
            "Biosphere"
          ],
          "terminology": [
            "هم‌ایستایی (Homeostasis)",
            "بوم‌سازگان (Ecosystem)",
            "زیست‌کره (Biosphere)"
          ],
          "exam_points": [
            "Population: Same species, same time, same place.",
            "Ecosystem: Community + non-living factors."
          ],
          "learning_metadata": {
            "difficulty_score": 4,
            "importance_score": 7,
            "memory_load": "medium",
            "reasoning_load": "medium"
          }
        },
        {
          "id": "ch1_t3",
          "title": "یاخته و بافت (Cell and Tissue)",
          "explanation": "Structure of eukaryotic cells, membrane transport mechanisms, and basic human tissues.",
          "key_concepts": [
            "Organelles (Mitochondria, Ribosome, Golgi, etc.)",
            "Cell Membrane Structure (Phospholipids, Proteins, Cholesterol)",
            "Passive Transport (Diffusion, Osmosis, Facilitated Diffusion)",
            "Active Transport (ATP-dependent, Sodium-Potassium Pump)",
            "Endocytosis/Exocytosis",
            "Epithelial, Connective, Muscle, Nervous Tissues"
          ],
          "processes": [
            {
              "name": "Osmosis (گذرندگی)",
              "steps": [
                "Diffusion of water across a semi-permeable membrane.",
                "Movement from high water concentration to low water concentration.",
                "Osmotic pressure regulates cell volume."
              ]
            }
          ],
          "exam_points": [
            "Na+/K+ pump: 3 Na+ out, 2 K+ in per ATP.",
            "Connective tissue types: Loose, Dense, Adipose, Blood, Bone, Cartilage.",
            "Epithelial types: Squamous, Cuboidal, Columnar (Simple or Stratified)."
          ],
          "learning_metadata": {
            "difficulty_score": 7,
            "importance_score": 10,
            "memory_load": "high",
            "reasoning_load": "high"
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "گوارش و جذب مواد (Digestion and Absorption)",
      "topics": [
        {
          "id": "ch2_t1",
          "title": "ساختار و عملکرد لوله گوارش",
          "explanation": "Mechanical and chemical digestion in the human GI tract.",
          "key_concepts": [
            "Tissue layers (Mucosa, Submucosa, Muscularis, Serosa)",
            "Peristaltic vs. Segmental movements",
            "Digestion in Mouth (Amylase, Lysozyme, Mucin)",
            "Digestion in Stomach (Pepsin, HCl, Gastrin)",
            "Small Intestine (Bile, Pancreatic juice, Villi/Microvilli)"
          ],
          "exam_points": [
            "Pyloric sphincter regulates stomach emptying.",
            "Intrinsic factor (Stomach) is essential for B12 absorption.",
            "Bile has no enzymes but aids lipid emulsification."
          ],
          "learning_metadata": {
            "difficulty_score": 8,
            "importance_score": 10,
            "estimated_learning_time": "240 min"
          }
        },
        {
          "id": "ch2_t2",
          "title": "تنوع گوارش در جانداران",
          "explanation": "Comparative digestion in paramecium, hydra, insects, birds, and ruminants.",
          "key_concepts": [
            "Intracellular Digestion (Vacuoles)",
            "Gastrovascular Cavity",
            "Digestive Tract (Crop, Gizzard, Gastric ceca)",
            "Ruminant Stomach (Rumen, Reticulum, Omasum, Abomasum)"
          ],
          "exam_points": [
            "Abomasum is the 'true' stomach of ruminants.",
            "Gizzard is for mechanical grinding using pebbles."
          ],
          "learning_metadata": {
            "difficulty_score": 6,
            "importance_score": 8
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "تبادالت گازی (Gas Exchange)",
      "topics": [
        {
          "id": "ch3_t1",
          "title": "دستگاه تنفس در انسان",
          "explanation": "Anatomy and physiology of the human respiratory system.",
          "key_concepts": [
            "Conducting Zone vs Respiratory Zone",
            "Larynx, Trachea (C-shaped cartilage), Bronchi, Bronchioles",
            "Alveoli structure and Surfactant",
            "Hemoglobin and CO2 transport (Bicarbonate mechanism)"
          ],
          "exam_points": [
            "Surfactant prevents alveolar collapse.",
            "Carbon Monoxide (CO) binds irreversibly to hemoglobin (Carbonylhemoglobin).",
            "Negative pressure breathing mechanism."
          ]
        },
        {
          "id": "ch3_t2",
          "title": "حجم‌ها و ظرفیت‌های تنفسی",
          "explanation": "Spirometry and measurement of lung air volumes.",
          "key_concepts": [
            "Tidal Volume (TV)",
            "Inspiratory Reserve Volume (IRV)",
            "Expiratory Reserve Volume (ERV)",
            "Residual Volume (RV)",
            "Vital Capacity (VC)",
            "Total Lung Capacity (TLC)"
          ],
          "exam_points": [
            "Vital Capacity = TV + IRV + ERV.",
            "Residual Volume cannot be measured by a simple spirometer."
          ]
        }
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "گردش مواد در بدن (Circulation of Materials)",
      "topics": [
        {
          "id": "ch4_t1",
          "title": "قلب (The Heart)",
          "explanation": "Anatomy, cardiac cycle, and conduction system.",
          "key_concepts": [
            "Valves (Tricuspid, Bicuspid/Mitral, Semilunar)",
            "Conduction System (SA Node, AV Node)",
            "Cardiac Cycle (Atrial Systole 0.1s, Ventricular Systole 0.3s, General Diastole 0.4s)",
            "ECG (P, QRS, T waves)",
            "Cardiac Output"
          ],
          "exam_points": [
            "SA node (پیشاهنگ) is the primary pacemaker.",
            "First heart sound (Lubb): AV valves closing.",
            "Second heart sound (Dupp): Semilunar valves closing."
          ]
        },
        {
          "id": "ch4_t2",
          "title": "رگ‌ها و خون (Vessels and Blood)",
          "explanation": "Arteries, Veins, Capillaries, and blood components.",
          "key_concepts": [
            "Arterial pressure and Pulse",
            "Capillary exchange (Filtration/Reabsorption)",
            "Lymphatic System",
            "RBCs (Hematocrit, Anemia, Erythropoietin)",
            "WBC types (Neutrophils, Lymphocytes, etc.)",
            "Platelets and Blood Clotting"
          ],
          "exam_points": [
            "Albumin maintains blood osmotic pressure.",
            "Veins have valves (crescent valves) and skeletal muscle pump aid."
          ]
        }
      ]
    },
    {
      "chapter_number": 5,
      "chapter_title": "تنظیم اسمزی و دفع مواد زائد (Excretion)",
      "topics": [
        {
          "id": "ch5_t1",
          "title": "کلیه‌ها و تشکیل ادرار",
          "explanation": "Anatomy of the kidney and the nephron.",
          "key_concepts": [
            "Nephron (Glomerulus, Bowman's capsule, Proximal/Distal tubules, Loop of Henle)",
            "Filtration (تراوش)",
            "Reabsorption (بازجذب)",
            "Secretion (ترشح)",
            "ADH (Antidiuretic Hormone) regulation"
          ],
          "exam_points": [
            "Filtration is non-selective (based on size).",
            "Glucose and amino acids are 100% reabsorbed in proximal tubule (normally)."
          ]
        }
      ]
    },
    {
      "chapter_number": 6,
      "chapter_title": "از یاخته تا گیاه (Plant Cells and Tissues)",
      "topics": [
        {
          "id": "ch6_t1",
          "title": "ویژگی‌های یاخته گیاهی",
          "explanation": "Unique structures of plant cells.",
          "key_concepts": [
            "Cell Wall (Primary, Secondary, Middle Lamella)",
            "Plasmodesmata and Pits (الن)",
            "Vacuoles and Turgor pressure",
            "Plastids (Chloroplast, Chromoplast, Amyloplast)"
          ],
          "terminology": [
            "تورژسانس (Turgor)",
            "پلاسمولیز (Plasmolysis)"
          ],
          "exam_points": [
            "Secondary wall is inside the primary wall.",
            "Lignin deposition leads to secondary wall formation and cell death."
          ]
        },
        {
          "id": "ch6_t2",
          "title": "سامانه‌های بافتی گیاه",
          "explanation": "Meristematic, Dermal, Ground, and Vascular tissues.",
          "key_concepts": [
            "Meristems (Apical, Lateral)",
            "Dermal Tissue (Epidermis, Guard cells, Trichomes, Root hairs)",
            "Ground Tissue (Parenchyma, Collenchyma, Sclerenchyma)",
            "Vascular Tissue (Xylem - Tracheids/Vessels, Phloem - Sieve tubes/Companion cells)"
          ],
          "exam_points": [
            "Sclerenchyma is dead at maturity (fiber and sclereids).",
            "Companion cells provide metabolic support to sieve tube elements."
          ]
        }
      ]
    },
    {
      "chapter_number": 7,
      "chapter_title": "جذب و انتقال مواد در گیاهان (Absorption and Transport)",
      "topics": [
        {
          "id": "ch7_t1",
          "title": "تغذیه و جذب در ریشه",
          "explanation": "Mineral and water uptake from soil.",
          "key_concepts": [
            "Nitrogen Fixation (Rhizobium, Cyanobacteria)",
            "Mycorrhiza",
            "Root pathways (Apoplastic, Symplastic, Transmembrane)",
            "Casparian strip (Endodermis)"
          ],
          "exam_points": [
            "Casparian strip forces water into the symplastic pathway.",
            "Insectivorous plants live in nitrogen-poor soils."
          ]
        },
        {
          "id": "ch7_t2",
          "title": "انتقال در آوندها",
          "explanation": "Movement of xylem sap and phloem sap.",
          "key_concepts": [
            "Xylem Transport (Root pressure, Transpiration-Cohesion-Tension theory)",
            "Stomatal regulation (K+ and Cl- ion flux)",
            "Phloem Transport (Pressure-Flow hypothesis)",
            "Source and Sink"
          ],
          "exam_points": [
            "Transpiration is the main driver of xylem sap ascent.",
            "Active loading of sucrose into phloem at the source."
          ]
        }
      ]
    }
  ],
  "knowledge_graph": {
    "relationships": [
      {
        "source": "ch1_t3",
        "target": "ch4_t1",
        "type": "requires",
        "description": "Cellular respiration requires circulatory delivery of nutrients."
      },
      {
        "source": "ch4_t2",
        "target": "ch5_t1",
        "type": "used_by",
        "description": "Kidney filtration depends on blood pressure from the heart."
      },
      {
        "source": "ch2_t1",
        "target": "ch4_t2",
        "type": "strong_connection",
        "description": "Absorbed nutrients are transported via the Hepatic Portal Vein."
      },
      {
        "source": "ch6_t2",
        "target": "ch7_t2",
        "type": "requires",
        "description": "Vascular tissue structure is necessary to understand transport mechanisms."
      }
    ]
  },
  "learning_metadata_summary": {
    "total_estimated_time": "1800 minutes",
    "overall_difficulty_avg": 6.5,
    "high_forgetting_risk_topics": [
      "ch4_t1",
      "ch5_t1",
      "ch7_t2"
    ]
  },
  "ai_advisor_metadata": {
    "mastery_threshold": 0.85,
    "practice_recommendation": "Use active recall for tissue layers and procedural diagrams.",
    "student_warning": "Konkur examiners frequently combine Chapter 4 (Circulation) with Chapter 5 (Excretion). Study them as an integrated system."
  }
};

export default BIOLOGY_10_KB;
