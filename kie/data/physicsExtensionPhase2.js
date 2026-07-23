/**
 * physicsExtensionPhase2.js  —  Kadoma knowledge base: فیزیک، فاز ۲
 * -----------------------------------------------------------------------
 * Source: user-provided physics extension (فیزیک_مرحله_دوم.txt), reflowed
 * into valid JSON and re-exported verbatim.
 * Shape: { kadoma_kb_extension_phase_2: { metadata,
 * konkur_exam_questions_analysis: [...per-question frequency/analysis...] } }
 * -----------------------------------------------------------------------
 */
export const PHYSICS_KB_PHASE_2 = {
  "kadoma_kb_extension_phase_2": {
    "metadata": {
      "extension_phase": "Phase 2 - Konkur Intelligence & Chapter/Topic Analytics",
      "curriculum_alignment": "Bilingual educational taxonomy optimized for Iranian Konkur",
      "target_system": "Kadoma Diagnostic & Recommendation Engine"
    },
    "konkur_exam_questions_analysis": [
      {
        "exam_year": 1403,
        "exam_type": "Tajrobi_Main_July",
        "question_number": 182,
        "chapter": "Physics_3_G12_CH1_Kinematics",
        "topic": "Relative Motion & Overtaking (ملاقات دو متحرک)",
        "subtopic": "Constant Acceleration vs Constant Velocity",
        "micro_skill": "Simultaneous Equation Solving & Relative Displacement Analysis",
        "difficulty": "hard",
        "cognitive_level": "evaluation_and_synthesis",
        "required_math": "Quadratic Equation Solving (t^2 - bt + c = 0), Discriminant (Delta) Analysis",
        "required_visualization": "Drawing a single t-axis or a clean v-t graph for both objects to avoid coordinate confusion.",
        "hidden_concepts": [
          "Overtaking condition: x_1(t) = x_2(t)",
          "At the moment of maximum distance between them, their velocities are equal: v_1(t) = v_2(t)"
        ],
        "combined_topics": "Kinematics with basic algebra",
        "trap_type": "Sign of initial position (x_0). Students often miss the direction of the relative velocity vector, leading to incorrect time calculations.",
        "common_wrong_reasoning": "Using the average velocity of one segment as constant velocity for the entire motion to simplify, which leads to incorrect intercept points.",
        "examiner_intention": "To test the student's ability to coordinate two moving frames without relying on rote-learned formulas, forcing them to draw and interpret a v-t graph.",
        "textbook_reference": "Physics 3, Page 14, Practice 1-7 (Intersection of two ladybugs - simplified analogy)"
      },
      {
        "exam_year": 1404,
        "exam_type": "Tajrobi_Main_May",
        "question_number": 194,
        "chapter": "Physics_3_G12_CH2_Dynamics",
        "topic": "Newton's Second Law & Friction",
        "subtopic": "Block pushed against a vertical wall at an angle (جسم تکیه داده شده به دیوار)",
        "micro_skill": "Vector decomposition on horizontal & vertical axes, determining friction direction.",
        "difficulty": "very_hard",
        "cognitive_level": "synthesis",
        "required_math": "Trigonometric values (sin 37, cos 37), algebraic systems.",
        "required_visualization": "Free-Body Diagram (FBD) including Normal force, applied force components, gravity, and friction.",
        "hidden_concepts": [
          "F_N is determined solely by the horizontal component of the pushing force: F_N = F * cos(theta)",
          "The direction of static friction (f_s) is opposite to the *tendency of motion*, not necessarily opposite to gravity."
        ],
        "combined_topics": "Dynamics + Vector Mathematics",
        "trap_type": "Assuming f_s_max is always equal to f_s. Many students calculated mu_s * F_N and set it as the answer, ignoring that the block was not on the threshold of sliding.",
        "common_wrong_reasoning": "Setting f_s = m*g blindly without comparing the vertical component of the pushing force (F * sin(theta)) to the gravitational force (m*g).",
        "examiner_intention": "To punish students who memorize 'friction always opposes gravity' or 'F_N is always equal to F_push'.",
        "textbook_reference": "Physics 3, Page 52, Example 2-10 (Ladder equilibrium logic adapted to block on wall)"
      },
      {
        "exam_year": 1405,
        "exam_type": "Riazi_Main_July",
        "question_number": 164,
        "chapter": "Physics_1_G10_CH3_Work_Energy",
        "topic": "Work-Energy Theorem & Conservation of Mechanical Energy",
        "subtopic": "Projectile launch with air resistance (پرتابه با مقاومت هوا)",
        "micro_skill": "Identifying conservative vs non-conservative forces, energy tracking.",
        "difficulty": "medium_hard",
        "cognitive_level": "analysis",
        "required_math": "Basic multiplication and fractions, percentage change calculation.",
        "required_visualization": "Energy flow diagram showing E_initial -> E_final + Q_loss (Heat due to air resistance).",
        "hidden_concepts": [
          "Non-conservative force work: W_f = E_final - E_initial",
          "Angle of launch does not affect the energy loss if the path length and average air resistance are specified."
        ],
        "combined_topics": "Physics 1 Chapter 3 + Physics 3 Chapter 1 (Trajectory trajectory conceptually)",
        "trap_type": "Confusing path distance (d) with displacement (h) when calculating the work done by air resistance (W_f_D = -f_D * d, not -f_D * h).",
        "common_wrong_reasoning": "Calculating gravitational potential energy using the total path distance instead of vertical height change.",
        "examiner_intention": "To test the distinct understanding of path-dependent work (friction/air resistance) vs. path-independent work (gravity).",
        "textbook_reference": "Physics 1, Page 65, Example 3-2 (Work of drag force)"
      }
    ],
    "chapter_analytics": {
      "Physics_3_G12_CH1_Kinematics": {
        "total_questions_average_per_year": 4,
        "Tajrobi_test_percentage": 13.3,
        "importance_trend": "stable_high",
        "frequency_trend": "shifting_towards_graphical_analysis",
        "most_tested_topics": [
          "v-t Graph analysis (slope and area combined)",
          "Constant acceleration equations under multi-segment conditions (تغییر شتاب در چند مرحله)",
          "Meeting point / overtaking scenarios (ملاقات دو متحرک)"
        ],
        "least_tested_topics": [
          "Instantaneous acceleration from tangent lines on v-t curves",
          "One-dimensional relative velocity derivation (فرمول سرعت نسبی به صورت تئوری)"
        ],
        "high_yield_topics": [
          "v-t graph area for displacement and average speed"
        ],
        "low_yield_topics": [
          "Average acceleration in non-linear equations"
        ],
        "common_traps": [
          "Assuming t=0 is always the starting point of constant acceleration. In Konkur, the acceleration often changes after a few seconds of uniform motion.",
          "Miscalculating the average speed because of treating it as the average of initial and final velocities in a non-uniform acceleration segment."
        ]
      },
      "Physics_3_G12_CH2_Dynamics": {
        "total_questions_average_per_year": 3.5,
        "Tajrobi_test_percentage": 11.6,
        "importance_trend": "increasing_complexity",
        "frequency_trend": "integration_with_kinematics",
        "most_tested_topics": [
          "Elevator systems with normal force variations (ترازو در آسانسور)",
          "Maximum static friction on inclined surfaces or with extra external forces",
          "Momentum change (Delta p) combined with F_net * Delta t (کاربرد قانون دوم بر حسب تکانه)"
        ],
        "least_tested_topics": [
          "Newton's Law of Gravitation calculations for deep space objects",
          "Hooke's law in multiple spring setups (which is formally out of textbook bounds but sometimes tested conceptually)"
        ],
        "high_yield_topics": [
          "Friction state diagnostics (Is the box moving or static?)",
          "Connecting net force from dynamics to kinematics graphs (F_net - t to v - t)"
        ],
        "low_yield_topics": [
          "Inertia conceptual questions (mainly tested as simple options, rarely as independent questions)"
        ],
        "common_traps": [
          "Setting F_N = m*g automatically on elevators. If the elevator accelerates up, F_N = m(g+a). If down, F_N = m(g-a).",
          "Setting f_s = mu_s * F_N without verifying if the applied force is large enough to exceed the threshold of sliding."
        ]
      }
    },
    "topic_analytics": {
      "V_T_Graph_Slope_Area": {
        "exam_frequency_ratio": 0.9,
        "pattern": "A composite graph containing a triangle and a rectangle; students must find a time 't' where displacement or velocity satisfies a specific condition.",
        "difficulty_trend": "increasing",
        "probability_of_future_question": 0.95,
        "forgetting_risk_score": 0.4,
        "learning_priority": 1,
        "review_priority": 1
      },
      "Elevator_Normal_Force": {
        "exam_frequency_ratio": 0.6,
        "pattern": "A person standing on a scale inside an elevator. The elevator starts from rest, accelerates, moves uniformly, and then decelerates to a stop.",
        "difficulty_trend": "stable_medium",
        "probability_of_future_question": 0.7,
        "forgetting_risk_score": 0.65,
        "learning_priority": 2,
        "review_priority": 2
      },
      "Momentum_Newton_Second_Law": {
        "exam_frequency_ratio": 0.5,
        "pattern": "An object colliding with a wall or floor. The force-time (F-t) graph is given, and students must find the rebound velocity using momentum changes.",
        "difficulty_trend": "stable_high",
        "probability_of_future_question": 0.8,
        "forgetting_risk_score": 0.55,
        "learning_priority": 1,
        "review_priority": 2
      }
    }
  }
};

export default PHYSICS_KB_PHASE_2;
