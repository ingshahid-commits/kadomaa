/**
 * physicsExtensionPhase1.js  —  Kadoma knowledge base: فیزیک، فاز ۱
 * -----------------------------------------------------------------------
 * Source: user-provided physics extension (فیزیک_مرحله_اول.txt), reflowed
 * into valid JSON and re-exported verbatim.
 * Shape: { kadoma_kb_extension_phase_1: { knowledge_base_metadata,
 * cross_grade_dependencies, micro_skills_atomic_breakdown,
 * conceptual_traps_and_misconceptions, diagnostic_engine_part_1 } }
 * This is cross-grade dependency / misconception / diagnostic-rule data,
 * not a flat chapter list, so (unlike biology10/11/12) it is not run
 * through CurriculumEngine.ingestExam() - see kie/data/README.md for why
 * and for the intended consumer.
 * -----------------------------------------------------------------------
 */
export const PHYSICS_KB_PHASE_1 = {
  "kadoma_kb_extension_phase_1": {
    "knowledge_base_metadata": {
      "extension_version": "4.0.1",
      "author_profile": "Senior Knowledge Engineer & Iranian Konkur Physics Specialist",
      "educational_philosophy": "Cognitive mastery through prerequisite resolution and dynamic diagnostic tracking",
      "curriculum_framework": "Iranian National Physics Textbooks (Physics 1, 2, 3 - Experimental Sciences & Mathematics)"
    },
    "cross_grade_dependencies": [
      {
        "dependency_id": "DEP_G12_CH2_P_G10_CH3_K",
        "source_concept": {
          "book": "Physics_3_Grade_12",
          "chapter": 2,
          "topic": "Momentum (تکانه)",
          "formula": "p = m * v"
        },
        "target_concept": {
          "book": "Physics_1_Grade_10",
          "chapter": 3,
          "topic": "Kinetic Energy (انرژی جنبشی)",
          "formula": "K = 0.5 * m * v^2"
        },
        "dependency_type": "strong_cross_grade_bridge",
        "bridge_formula": "K = p^2 / (2 * m)",
        "dependency_weight": 0.95,
        "konkur_application": "Highly tested in combined questions where momentum change (Delta p) is linked to kinetic energy variation (Delta K). Students often struggle to transition without the bridge formula.",
        "common_misuse": "Using K = p^2 / 2m when mass is not constant or trying to use Delta K = (Delta p)^2 / 2m directly, which is mathematically invalid."
      },
      {
        "dependency_id": "DEP_G12_CH2_F_G10_CH3_W",
        "source_concept": {
          "book": "Physics_3_Grade_12",
          "chapter": 2,
          "topic": "Friction Force (نیروی اصطکاک)",
          "formula": "f_k = mu_k * F_N"
        },
        "target_concept": {
          "book": "Physics_1_Grade_10",
          "chapter": 3,
          "topic": "Work of Dissipative Forces (کار نیروهای اتلافی)",
          "formula": "W_f = -f_k * d"
        },
        "dependency_type": "strong_cross_grade_prerequisite",
        "dependency_weight": 0.88,
        "konkur_application": "Work-Energy Theorem questions in Grade 10 that include a friction pad on flat or inclined surfaces. The normal force F_N must be calculated using Grade 12 dynamics principles (even if simulated in Grade 10).",
        "diagnostic_trigger": "If a student fails to calculate W_f on an inclined plane, check if they can resolve F_N on an incline (F_N = m * g * cos(theta))."
      },
      {
        "dependency_id": "DEP_G12_CH3_SHM_G10_CH3_MEC",
        "source_concept": {
          "book": "Physics_3_Grade_12",
          "chapter": 3,
          "topic": "Simple Harmonic Motion Energy (انرژی در حرکت هماهنگ ساده)",
          "formula": "E = 0.5 * k * A^2"
        },
        "target_concept": {
          "book": "Physics_1_Grade_10",
          "chapter": 3,
          "topic": "Conservation of Mechanical Energy (پایستگی انرژی مکانیکی)",
          "formula": "E = K + U"
        },
        "dependency_type": "strong_cross_grade_prerequisite",
        "dependency_weight": 0.92,
        "konkur_application": "Konkur problems frequently ask for the ratio of kinetic energy to potential energy (K/U) or kinetic energy to total energy (K/E) at a specific displacement x.",
        "bridge_formula": "U = 0.5 * k * x^2, K = 0.5 * k * (A^2 - x^2)",
        "hidden_assumption": "Zero energy loss (frictionless system) is required for E to remain constant throughout the cycle."
      }
    ],
    "micro_skills_atomic_breakdown": [
      {
        "skill_category": "Kinematics_Graphs",
        "parent_topic": "Motion on a Straight Line",
        "atomic_skills": [
          {
            "id": "MS_X_T_SLOPE",
            "name": "Calculating instantaneous velocity from x-t graph slope",
            "cognitive_complexity": 2,
            "mathematical_requirement": "Tangential slope calculation, basic geometry, understanding of tangent lines.",
            "konkur_trap": "Misinterpreting a negative coordinate (x < 0) as a negative velocity. Velocity sign depends solely on the slope of the tangent, not the quadrant."
          },
          {
            "id": "MS_V_T_AREA",
            "name": "Finding displacement (Delta x) vs. distance (l) from v-t graph area",
            "cognitive_complexity": 3,
            "mathematical_requirement": "Area integration of geometric shapes (triangles, trapezoids).",
            "konkur_trap": "Adding areas below the time axis as positive for displacement. For displacement, areas below the axis are negative; for distance, all areas are strictly positive."
          },
          {
            "id": "MS_V_T_TANGENT_ACC",
            "name": "Determining acceleration direction and sign from v-t curvature",
            "cognitive_complexity": 3,
            "mathematical_requirement": "Slope of tangent line on v-t curve.",
            "konkur_trap": "Confusing the sign of acceleration with the state of motion (speeding up/slowing down). Speeding up occurs when v and a have the same sign; slowing down when they have opposite signs."
          }
        ]
      },
      {
        "skill_category": "Dynamics_Friction",
        "parent_topic": "Friction Force",
        "atomic_skills": [
          {
            "id": "MS_STATIC_FRICTION_THRESHOLD",
            "name": "Distinguishing between static friction (f_s) and maximum static friction (f_s_max)",
            "cognitive_complexity": 4,
            "mathematical_requirement": "Inequality checking: F_applied <= mu_s * F_N.",
            "konkur_trap": "Blindly using f_s = mu_s * F_N in equilibrium states where the applied force is less than f_s_max. Static friction is a self-adjusting force."
          },
          {
            "id": "MS_NORMAL_FORCE_INCLINE",
            "name": "Resolving Normal Force (F_N) on an inclined plane with an external push",
            "cognitive_complexity": 4,
            "mathematical_requirement": "Vector decomposition, trigonometry (sin, cos).",
            "konkur_trap": "Assuming F_N is always m * g * cos(theta) even when an external force is pulling/pushing at an angle relative to the incline."
          }
        ]
      }
    ],
    "conceptual_traps_and_misconceptions": [
      {
        "trap_id": "TRAP_BUOYANCY_WEIGHT",
        "topic": "Buoyancy (نیروی شناوری - فیزیک دهم)",
        "misconception": "Students believe that a heavier object submerged in a fluid always experiences a smaller buoyancy force than a lighter one, or that buoyancy depends on the object's mass.",
        "textbook_reality": "According to Physics 1, Chapter 2 (Archimedes' Principle), buoyancy force F_b = rho_fluid * V_submerged * g depends strictly on the density of the fluid and the volume of the displaced fluid, not the mass or density of the submerged object.",
        "konkur_test_pattern": "Submerging two spheres of identical volume but different materials (e.g., iron and wood) in water. Both experience identical buoyancy forces as long as they are fully submerged.",
        "diagnostic_diagnostic_rule": "IF student selects F_b(iron) > F_b(wood) due to iron being heavier, THEN flag misconception 'Mass-dependent Buoyancy' and trigger recovery path RP_BUOYANCY_VOLUME."
      },
      {
        "trap_id": "TRAP_STATIC_FRICTION_WORK",
        "topic": "Work and Energy (کار و انرژی - فیزیک دهم)",
        "misconception": "Students assume static friction (f_s) cannot do work because there is no relative displacement between the contact surfaces.",
        "textbook_reality": "Static friction can do positive or negative work on an object relative to an inertial reference frame. For example, when a box is on the bed of an accelerating truck, static friction is the force accelerating the box, doing positive work on it.",
        "konkur_test_pattern": "A block placed on a moving conveyor belt or a platform accelerating horizontally. Students are asked to calculate the work done by static friction.",
        "diagnostic_diagnostic_rule": "IF student claims W_fs is always zero, THEN redirect to 'Inertial Reference Frame Work Analysis' modules."
      },
      {
        "trap_id": "TRAP_ACCELERATION_ZERO_HIGHEST_POINT",
        "topic": "Vertical Projectile Motion (حرکت در امتداد قائم - فیزیک دوازدهم)",
        "misconception": "At the highest point of a vertical throw, velocity is zero; therefore, acceleration must also be zero.",
        "textbook_reality": "Velocity is instantaneously zero, but the rate of change of velocity (acceleration) is constantly equal to gravitational acceleration g downwards. If acceleration were zero, the object would hover at the peak indefinitely.",
        "konkur_test_pattern": "Conceptual options asking about the net force and acceleration at the peak of a vertical projectile's path.",
        "diagnostic_diagnostic_rule": "IF student selects a = 0 at the peak, THEN enforce visual simulation of Delta v over a small time interval Delta t around the peak."
      }
    ],
    "diagnostic_engine_part_1": {
      "rules": [
        {
          "rule_id": "DIAG_RULE_01_SLOPE_CONFUSION",
          "condition": "Student calculates velocity as x/t instead of Delta x / Delta t on a non-linear x-t graph.",
          "identified_gap": "Confusion between average speed/velocity from origin and instantaneous velocity (slope of tangent).",
          "cognitive_remedy": {
            "recovery_path": "RP_INSTANTANEOUS_VS_AVERAGE",
            "estimated_recovery_time_mins": 30,
            "remediation_exercises": [
              "Physics 3, Chapter 1, Practice 1-3 (Analyzing average vs. instantaneous velocity)",
              "Kadoma diagnostic worksheet 'Slope as Derivative' (5 geometric slope tasks)"
            ]
          }
        },
        {
          "rule_id": "DIAG_RULE_02_FRICTION_OVERESTIMATION",
          "condition": "Student uses f_s = mu_s * F_N for an object that is confirmed to be stationary and not at its sliding threshold.",
          "identified_gap": "Failure to apply Newton's First Law (equilibrium of forces) before calculating friction.",
          "cognitive_remedy": {
            "recovery_path": "RP_STATIC_FRICTION_EQUILIBRIUM",
            "estimated_recovery_time_mins": 45,
            "remediation_exercises": [
              "Physics 3, Chapter 2, Example 2-6 (Ascertaining friction state)",
              "Interactive simulation: Pulling a heavy crate with variable force."
            ]
          }
        }
      ]
    }
  }
};

export default PHYSICS_KB_PHASE_1;
