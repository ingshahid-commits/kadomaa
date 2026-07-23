/**
 * physics12.js  —  Kadoma knowledge base
 * -----------------------------------------------------------------------
 * Source: user-provided physics knowledge-graph export (phy12.txt),
 * converted to the same shape as chemistry10/11/12.js (knowledge_base[] of
 * chapters, each with topics[] carrying learning_metadata.importance_score)
 * so it works with the existing curriculumAdapter.js unchanged. Topics were
 * grouped into their chapter by matching the topic id prefix (e.g. "t2_3"
 * -> chapter_number 2) to chapter_number - every field preserved verbatim,
 * only the grouping changed.
 * -----------------------------------------------------------------------
 */
export const PHYSICS_12_KB = {
  "textbook_metadata": {
    "title": "فیزیک (پایه دوازدهم)",
    "grade": "پایه دوازدهم",
    "branch": "ریاضی/تجربی"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "حرکت بر خط راست",
      "chapter_objectives": [
        "درک مفاهیم مکان، جابه‌جایی، مسافت، تندی متوسط و سرعت متوسط",
        "تحلیل نمودارهای مکان-زمان و سرعت-زمان",
        "محاسبه سرعت لحظه‌ای و شتاب از روی نمودارها",
        "بررسی حرکت با سرعت ثابت و استخراج معادله مکان-زمان",
        "بررسی حرکت با شتاب ثابت و استخراج معادلات حرکت",
        "حل مسائل مربوط به حرکت با شتاب ثابت (معادلات سرعت-زمان، مکان-زمان و سرعت-جابه‌جایی)"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 7,
      "overall_importance": 9,
      "prerequisite_chapters": [
        "ریاضیات",
        "فیزیک دهم"
      ],
      "next_chapters": [
        2,
        3,
        4
      ],
      "topics": [
        {
          "id": "t1_1",
          "title": "مفاهیم پایه حرکت: مکان، جابه‌جایی، مسافت، تندی و سرعت",
          "core_knowledge": {
            "explanation": "مکان یک جسم در هر لحظه، موقعیت آن را نسبت به یک مبدأ مشخص می‌کند. جابه‌جایی بردار تغییر مکان است و مسافت، طول مسیر طی شده را نشان می‌دهد. تندی متوسط برابر با مسافت تقسیم بر زمان و سرعت متوسط برابر با جابه‌جایی تقسیم بر زمان است.",
            "complete_definition": "مکان، موقعیت یک جسم نسبت به مبدأ مختصات است. جابه‌جایی، تغییر مکان جسم است که به صورت بردار \\(\\vec{d} = \\vec{r}_2 - \\vec{r}_1\\) تعریف می‌شود. مسافت، طول کل مسیری است که جسم طی می‌کند. تندی متوسط، مسافت طی شده در واحد زمان است و سرعت متوسط، جابه‌جایی در واحد زمان است.",
            "key_concepts": [
              "مکان",
              "جابه‌جایی",
              "مسافت",
              "تندی متوسط",
              "سرعت متوسط",
              "بردار یکه"
            ],
            "terminology": {
              "جابه‌جایی": "تغییر مکان (کمیت برداری)",
              "مسافت": "طول مسیر طی شده (کمیت نرده‌ای)",
              "تندی متوسط": "نسبت مسافت به زمان",
              "سرعت متوسط": "نسبت جابه‌جایی به زمان"
            },
            "formulas": {
              "تندی متوسط": "v_av = Δl / Δt",
              "سرعت متوسط": "v_av = Δx / Δt (در یک بعد)"
            },
            "laws": null,
            "principles": [
              "اندازه سرعت متوسط با تندی متوسط در حرکت مستقیم بدون تغییر جهت برابر است.",
              "جابه‌جایی می‌تواند صفر باشد اما مسافت صفر نیست."
            ],
            "processes": [
              "محاسبه جابه‌جایی و سرعت متوسط از روی داده‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "بردارها (ریاضی)",
              "مفهوم حرکت (علوم نهم)"
            ],
            "next_topics": [
              "t1_2",
              "t1_3"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "تحلیل حرکت",
              "قوانین نیوتون"
            ]
          },
          "relationships": {
            "related_topics": [
              "مفاهیم حرکت در دو بعد"
            ],
            "similar_concepts": [
              "سرعت لحظه‌ای"
            ],
            "differences": [
              "تندی متوسط نرده‌ای است، سرعت متوسط برداری است."
            ],
            "frequently_confused_with": [
              "سرعت لحظه‌ای"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 7,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص جابه‌جایی و مسافت",
              "محاسبه سرعت متوسط و تندی متوسط",
              "تشخیص کمیت نرده‌ای و برداری"
            ],
            "hidden_points": [
              "تفاوت سرعت متوسط و تندی متوسط در مسیرهای غیرمستقیم"
            ],
            "trick_points": [
              "سوالات با حرکت رفت و برگشت"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص مفاهیم"
            ],
            "calculation_question_types": [
              "محاسبه سرعت متوسط"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص جابه‌جایی از مسافت",
              "فراموش کردن جهت در سرعت متوسط"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص جابه‌جایی از مسافت"
            ],
            "warning_points": [
              "سرعت متوسط کمیتی برداری است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و ضروری برای مباحث بعدی.",
            "study_strategy": "تمرین با مثال‌های مختلف",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_2"
          },
          "memory_support": {
            "memory_tips": "جابه‌جایی = بردار، مسافت = عدد.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تصویر یک مسیر پیچ‌درپیچ (مسافت) و یک خط راست از起点 تا终点 (جابه‌جایی)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱-۱ (مسیر دونده)",
              "مثال ۱-۲ (کفش‌دوزک)",
              "فعالیت ۱-۱"
            ],
            "important_examples": [
              "مقایسه مسافت و جابه‌جایی در مسیر رفت و برگشت"
            ],
            "real_life_examples": [
              "مسیر طی شده توسط خودرو (مسافت)",
              "فاصله مستقیم دو شهر (جابه‌جایی)"
            ]
          }
        },
        {
          "id": "t1_2",
          "title": "نمودار مکان-زمان و سرعت متوسط",
          "core_knowledge": {
            "explanation": "نمودار مکان-زمان موقعیت جسم را در هر لحظه نشان می‌دهد. سرعت متوسط در یک بازه زمانی برابر با شیب خط واصل بین دو نقطه متناظر در این نمودار است. یک خط مستقیم در این نمودار نشان‌دهنده سرعت ثابت است.",
            "complete_definition": "نمودار مکان-زمان (x-t) نموداری است که مکان جسم را بر حسب زمان رسم می‌کند. شیب خط واصل بین دو نقطه از این نمودار، سرعت متوسط جسم در آن بازه زمانی است. هر چه شیب بیشتر باشد، سرعت بیشتر است.",
            "key_concepts": [
              "نمودار مکان-زمان",
              "شیب خط",
              "سرعت متوسط",
              "خط مماس",
              "سرعت لحظه‌ای"
            ],
            "terminology": {
              "نمودار مکان-زمان": "نمودار x بر حسب t",
              "شیب": "نسبت تغییرات محور عمودی به تغییرات محور افقی"
            },
            "formulas": {
              "سرعت متوسط از نمودار": "v_av = (x2 - x1) / (t2 - t1)"
            },
            "laws": null,
            "principles": [
              "سرعت متوسط بین دو نقطه برابر شیب خط واصل آنهاست.",
              "سرعت لحظه‌ای برابر شیب خط مماس بر نمودار در آن لحظه است."
            ],
            "processes": [
              "تحلیل نمودار مکان-زمان",
              "محاسبه سرعت از روی نمودار"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_1"
            ],
            "next_topics": [
              "t1_3",
              "t1_4"
            ],
            "concept_dependencies": [
              "نیاز به درک جابه‌جایی"
            ],
            "required_background": null,
            "builds_upon": [
              "جابه‌جایی"
            ],
            "enables_learning_of": [
              "حرکت با سرعت ثابت",
              "حرکت با شتاب ثابت"
            ]
          },
          "relationships": {
            "related_topics": [
              "نمودارهای فیزیک"
            ],
            "similar_concepts": [
              "نمودار سرعت-زمان"
            ],
            "differences": [
              "نمودار مکان-زمان مکان را نشان می‌دهد، سرعت-زمان سرعت را."
            ],
            "frequently_confused_with": [
              "نمودار سرعت-زمان"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "خواندن نمودار مکان-زمان",
              "محاسبه سرعت متوسط از روی نمودار",
              "تشخیص حرکت با سرعت ثابت",
              "تشخیص سرعت لحظه‌ای از شیب مماس"
            ],
            "hidden_points": [
              "رابطه شیب و سرعت"
            ],
            "trick_points": [
              "سوالات با نمودارهای پیچیده"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تحلیل نمودار"
            ],
            "calculation_question_types": [
              "محاسبه سرعت از شیب"
            ],
            "analytical_question_types": [
              "تفسیر حرکت از روی نمودار"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در محاسبه شیب (انتخاب نقاط اشتباه)",
              "ناتوانی در تشخیص سرعت لحظه‌ای از مماس"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "رسم خط مماس",
              "تشخیص سرعت لحظه‌ای"
            ],
            "warning_points": [
              "شیب مثبت = حرکت در جهت مثبت، شیب منفی = حرکت در جهت منفی."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت کلیدی در تحلیل حرکت.",
            "study_strategy": "تمرین تحلیل نمودارهای مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t1_3"
          },
          "memory_support": {
            "memory_tips": "شیب خط = سرعت.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نمودار مکان-زمان مانند یک نقشه از مسیر حرکت است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۴ (نمودار ذره)",
              "مثال ۱-۵ (موتورسوار)",
              "مثال ۱-۶"
            ],
            "important_examples": [
              "محاسبه سرعت متوسط در بازه‌های زمانی مختلف",
              "تشخیص حرکت ساکن از روی نمودار"
            ],
            "real_life_examples": [
              "ردیابی یک خودرو با GPS"
            ]
          }
        },
        {
          "id": "t1_3",
          "title": "حرکت با سرعت ثابت",
          "core_knowledge": {
            "explanation": "در حرکت با سرعت ثابت، اندازه و جهت سرعت ثابت است. معادله مکان-زمان به صورت x = vt + x0 است. نمودار مکان-زمان یک خط راست با شیب ثابت و نمودار سرعت-زمان یک خط افقی است.",
            "complete_definition": "حرکت با سرعت ثابت (یکنواخت) به حرکتی گفته می‌شود که در آن سرعت جسم (اندازه و جهت) در طول زمان تغییر نمی‌کند. معادله مکان-زمان: x = vt + x0. در این حرکت، سرعت متوسط با سرعت لحظه‌ای برابر است.",
            "key_concepts": [
              "حرکت یکنواخت",
              "سرعت ثابت",
              "معادله مکان-زمان",
              "x = vt + x0"
            ],
            "terminology": {
              "حرکت یکنواخت": "حرکت با سرعت ثابت",
              "مکان اولیه (x0)": "مکان جسم در t=0"
            },
            "formulas": {
              "معادله مکان-زمان": "x = vt + x0",
              "جابه‌جایی": "Δx = v Δt"
            },
            "laws": null,
            "principles": [
              "در حرکت با سرعت ثابت، شتاب صفر است.",
              "نمودار مکان-زمان یک خط راست است."
            ],
            "processes": [
              "نوشتن معادله حرکت",
              "حل مسائل برخورد"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_2"
            ],
            "next_topics": [
              "t1_4"
            ],
            "concept_dependencies": [
              "نیاز به درک سرعت متوسط"
            ],
            "required_background": null,
            "builds_upon": [
              "سرعت"
            ],
            "enables_learning_of": [
              "حرکت با شتاب ثابت"
            ]
          },
          "relationships": {
            "related_topics": [
              "حرکت با شتاب ثابت"
            ],
            "similar_concepts": [],
            "differences": [
              "در حرکت با شتاب ثابت، سرعت تغییر می‌کند."
            ],
            "frequently_confused_with": [
              "حرکت با شتاب صفر (فقط سرعت ثابت)"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 7,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص حرکت با سرعت ثابت",
              "نوشتن معادله مکان-زمان",
              "محاسبه زمان یا مکان برخورد دو متحرک"
            ],
            "hidden_points": [
              "شرایط برخورد (x1 = x2)"
            ],
            "trick_points": [
              "سوالات برخورد"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه x, t, v"
            ],
            "analytical_question_types": [
              "تحلیل برخورد دو متحرک"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن x0 در معادله",
              "اشتباه در علامت سرعت (جهت)"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "مسائل برخورد"
            ],
            "warning_points": [
              "علامت سرعت نشان‌دهنده جهت حرکت است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "ساده‌ترین نوع حرکت.",
            "study_strategy": "تمرین با مثال‌های برخورد",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_4"
          },
          "memory_support": {
            "memory_tips": "x = vt + x0",
            "mnemonic_devices": null,
            "visual_imagination_tips": "ماشینی که با سرعت ثابت در جاده حرکت می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۱۰ (نمودار مکان-زمان)",
              "مثال ۱-۱۱ (نمودار مکان-زمان دو متحرک)"
            ],
            "important_examples": [
              "محاسبه زمان و مکان برخورد دو متحرک"
            ],
            "real_life_examples": [
              "حرکت قطار با سرعت ثابت",
              "خطوط انتقال"
            ]
          }
        },
        {
          "id": "t1_4",
          "title": "حرکت با شتاب ثابت",
          "core_knowledge": {
            "explanation": "در حرکت با شتاب ثابت، سرعت به طور یکنواخت تغییر می‌کند. معادلات اصلی این حرکت عبارتند از: v = at + v0, x = 1/2 at^2 + v0t + x0, v^2 = v0^2 + 2aΔx. نمودار مکان-زمان یک سهمی و نمودار سرعت-زمان یک خط راست است.",
            "complete_definition": "حرکت با شتاب ثابت (یکنواخت) حرکتی است که در آن شتاب جسم (اندازه و جهت) در طول زمان ثابت می‌ماند. معادلات حرکت: v = v0 + at, x = x0 + v0t + 1/2 at^2, v^2 = v0^2 + 2a(x - x0).",
            "key_concepts": [
              "شتاب ثابت",
              "معادلات حرکت",
              "v = v0 + at",
              "x = x0 + v0t + 1/2 at^2",
              "v^2 = v0^2 + 2aΔx"
            ],
            "terminology": {
              "شتاب": "نرخ تغییر سرعت",
              "حرکت تندشونده": "حرکتی که در آن تندی افزایش می‌یابد.",
              "حرکت کندشونده": "حرکتی که در آن تندی کاهش می‌یابد."
            },
            "formulas": {
              "سرعت-زمان": "v = v0 + at",
              "مکان-زمان": "x = x0 + v0t + 1/2 at^2",
              "سرعت-جابه‌جایی": "v^2 = v0^2 + 2aΔx"
            },
            "laws": null,
            "principles": [
              "مساحت زیر نمودار سرعت-زمان برابر با جابه‌جایی است.",
              "شیب نمودار سرعت-زمان برابر با شتاب است."
            ],
            "processes": [
              "حل مسائل با استفاده از معادلات حرکت",
              "تحلیل نمودارها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_3"
            ],
            "next_topics": [
              "t2_1"
            ],
            "concept_dependencies": [
              "نیاز به درک سرعت"
            ],
            "required_background": null,
            "builds_upon": [
              "حرکت با سرعت ثابت"
            ],
            "enables_learning_of": [
              "دینامیک",
              "سقوط آزاد"
            ]
          },
          "relationships": {
            "related_topics": [
              "دینامیک"
            ],
            "similar_concepts": [
              "حرکت با شتاب متغیر"
            ],
            "differences": [
              "در حرکت با شتاب ثابت، a ثابت است."
            ],
            "frequently_confused_with": [
              "حرکت با سرعت ثابت"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 10,
            "reasoning_load": 8,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "استفاده از معادلات حرکت",
              "تحلیل نمودارهای سرعت-زمان و مکان-زمان",
              "محاسبه جابه‌جایی از مساحت زیر نمودار سرعت-زمان",
              "تشخیص حرکت تندشونده و کندشونده"
            ],
            "hidden_points": [
              "رابطه بین سرعت، شتاب و جابه‌جایی"
            ],
            "trick_points": [
              "مسائل با چند مرحله (ترمز، شتاب)",
              "استفاده از نمودارها"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص نوع حرکت"
            ],
            "calculation_question_types": [
              "محاسبه v, x, t, a"
            ],
            "analytical_question_types": [
              "تحلیل نمودارهای v-t و x-t"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "استفاده از فرمول اشتباه",
              "فراموش کردن علامت شتاب (منفی برای ترمز)",
              "اشتباه در تبدیل یکاها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص علامت شتاب",
              "مسائل با چند مرحله (ترمز و سپس حرکت با سرعت ثابت)"
            ],
            "warning_points": [
              "شتاب در خلاف جهت حرکت منفی است (کندشونده)."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین مبحث حرکت.",
            "study_strategy": "تمرین زیاد با معادلات و نمودارها",
            "review_strategy": "مرور روزانه و حل مسائل متنوع",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_1"
          },
          "memory_support": {
            "memory_tips": "سه معادله اصلی حرکت با شتاب ثابت را به خاطر بسپارید.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "خودرویی که شتاب می‌گیرد (تندشونده) یا ترمز می‌کند (کندشونده)."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۱۱ (هواپیما)",
              "مثال ۱-۱۲ (نمودار x-t)",
              "مثال ۱-۱۳ (ترمز)",
              "مثال ۱-۱۴ (نمودار v-t)"
            ],
            "important_examples": [
              "حرکت با شتاب ثابت روی خط راست",
              "محاسبه مسافت ترمز"
            ],
            "real_life_examples": [
              "شتاب‌گیری خودرو",
              "ترمز کردن"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "دینامیک",
      "chapter_objectives": [
        "مرور و گسترش قوانین حرکت نیوتون",
        "بررسی نیروهای خاص (وزن، نیروی عمودی سطح، اصطکاک، نیروی کشسانی فنر، کشش طناب)",
        "درک و کاربرد تکانه و قانون دوم نیوتون بر حسب تکانه",
        "بررسی نیروی گرانشی و قانون گرانش عمومی نیوتون",
        "حل مسائل دینامیکی با استفاده از قوانین نیوتون"
      ],
      "estimated_total_learning_time": "PT14H",
      "overall_difficulty": 8,
      "overall_importance": 10,
      "prerequisite_chapters": [
        1
      ],
      "next_chapters": [
        3,
        4
      ],
      "topics": [
        {
          "id": "t2_1",
          "title": "قوانین حرکت نیوتون",
          "core_knowledge": {
            "explanation": "قوانین نیوتون اساس مکانیک کلاسیک را تشکیل می‌دهند. قانون اول (لختی): جسم در حالت سکون یا حرکت با سرعت ثابت می‌ماند مگر نیروی خالص بر آن وارد شود. قانون دوم: F_net = ma. قانون سوم: کنش و واکنش هم‌اندازه، هم‌راستا و در خلاف جهت یکدیگرند.",
            "complete_definition": "قانون اول نیوتون (لختی): اگر بر جسمی نیروی خالص وارد نشود، جسم ساکن باقی می‌ماند یا با سرعت ثابت حرکت می‌کند. قانون دوم نیوتون: شتاب یک جسم با نیروی خالص وارد بر آن نسبت مستقیم و با جرم آن نسبت وارون دارد: F_net = ma. قانون سوم نیوتون (کنش و واکنش): هرگاه جسمی به جسم دیگر نیرو وارد کند، جسم دوم نیز به همان اندازه و در خلاف جهت به جسم اول نیرو وارد می‌کند.",
            "key_concepts": [
              "قانون اول نیوتون",
              "قانون دوم نیوتون",
              "قانون سوم نیوتون",
              "نیروی خالص",
              "لختی",
              "کنش و واکنش"
            ],
            "terminology": {
              "لختی": "میل جسم به حفظ حالت حرکت",
              "نیروی خالص": "برآیند نیروهای وارد بر جسم",
              "کنش و واکنش": "نیروهای هم‌اندازه و در خلاف جهت که دو جسم به یکدیگر وارد می‌کنند."
            },
            "formulas": {
              "قانون دوم نیوتون": "F_net = ma"
            },
            "laws": [
              "قوانین نیوتون"
            ],
            "principles": [
              "نیروهای کنش و واکنش بر دو جسم مختلف وارد می‌شوند.",
              "شتاب در جهت نیروی خالص است."
            ],
            "processes": [
              "تحلیل نیروهای وارد بر جسم",
              "محاسبه شتاب با استفاده از قانون دوم"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "حرکت با شتاب ثابت"
            ],
            "next_topics": [
              "t2_2",
              "t2_3",
              "t2_4"
            ],
            "concept_dependencies": [
              "نیاز به درک حرکت و شتاب"
            ],
            "required_background": null,
            "builds_upon": [
              "حرکت"
            ],
            "enables_learning_of": [
              "دینامیک پیشرفته"
            ]
          },
          "relationships": {
            "related_topics": [
              "دینامیک"
            ],
            "similar_concepts": [
              "قوانین کپلر"
            ],
            "differences": [
              "قوانین نیوتون برای حرکت اجسام در ابعاد معمولی است."
            ],
            "frequently_confused_with": [
              "قوانین کپلر"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 10,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "بیان قوانین نیوتون",
              "تشخیص قانون سوم (کنش و واکنش)",
              "محاسبه شتاب با استفاده از قانون دوم",
              "تحلیل نیروها"
            ],
            "hidden_points": [
              "تشخیص اینکه نیروهای کنش و واکنش بر دو جسم مختلف وارد می‌شوند."
            ],
            "trick_points": [
              "سوالات مربوط به قانون سوم (وزن و نیروی عمودی سطح)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان قوانین",
              "تشخیص کنش و واکنش"
            ],
            "calculation_question_types": [
              "محاسبه شتاب از نیروی خالص"
            ],
            "analytical_question_types": [
              "تحلیل نیروها در سیستم‌های مختلف"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص کنش و واکنش (بر دو جسم مختلف)",
              "فراموش کردن قانون اول (لختی)"
            ],
            "misconceptions": [
              "نیروی کنش و واکنش همیشه یکدیگر را خنثی می‌کنند."
            ],
            "difficult_parts": [
              "تشخیص قانون سوم",
              "تحلیل نیروها در سیستم‌های پیچیده"
            ],
            "warning_points": [
              "نیروهای کنش و واکنش بر دو جسم مختلف وارد می‌شوند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبانی دینامیک.",
            "study_strategy": "تمرین تشخیص کنش و واکنش و محاسبه شتاب",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "قانون دوم: F = ma.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "هل دادن یک جعبه روی زمین (نیروی شما و اصطکاک)."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۱ (قایق موتوری)",
              "مثال ۲-۲ (توپ فوتبال)",
              "مثال ۲-۳ (دو شخص با کفش چرخ‌دار)"
            ],
            "important_examples": [
              "نیروهای کنش و واکنش در هل دادن جعبه",
              "سقوط آزاد و قانون دوم"
            ],
            "real_life_examples": [
              "راه رفتن (نیروی اصطکاک به جلو)",
              "رانندگی"
            ]
          }
        },
        {
          "id": "t2_2",
          "title": "نیروهای خاص: وزن، اصطکاک، فنر و کشش طناب",
          "core_knowledge": {
            "explanation": "وزن (W = mg) نیروی گرانشی زمین است. نیروی عمودی سطح (FN) عکس‌العمل سطح به جسم است. نیروی اصطکاک به دو نوع ایستایی (fs ≤ μs FN) و جنبشی (fk = μk FN) تقسیم می‌شود. نیروی کشسانی فنر: F = -kx. کشش طناب: نیرویی که طناب به جسم وارد می‌کند.",
            "complete_definition": "وزن، نیروی جاذبه زمین بر جسم است: W = mg. نیروی عمودی سطح، عکس‌العمل سطح به جسم است. اصطکاک ایستایی بیشینه: fs,max = μs FN. اصطکاک جنبشی: fk = μk FN. نیروی کشسانی فنر: F = -kx. کشش طناب: نیرویی که طناب در راستای خود به جسم وارد می‌کند.",
            "key_concepts": [
              "وزن",
              "نیروی عمودی سطح",
              "نیروی اصطکاک ایستایی",
              "نیروی اصطکاک جنبشی",
              "ضریب اصطکاک",
              "نیروی کشسانی فنر",
              "قانون هوک",
              "کشش طناب"
            ],
            "terminology": {
              "نیروی عمودی سطح (FN)": "نیروی عمود بر سطح که توسط سطح به جسم وارد می‌شود.",
              "ضریب اصطکاک ایستایی (μs)": "نسبت بیشینه نیروی اصطکاک ایستایی به نیروی عمودی سطح.",
              "ضریب اصطکاک جنبشی (μk)": "نسبت نیروی اصطکاک جنبشی به نیروی عمودی سطح.",
              "ثابت فنر (k)": "نسبت نیروی کشسانی به تغییر طول فنر."
            },
            "formulas": {
              "وزن": "W = mg",
              "اصطکاک ایستایی بیشینه": "fs,max = μs FN",
              "اصطکاک جنبشی": "fk = μk FN",
              "نیروی کشسانی فنر": "F = -kx"
            },
            "laws": [
              "قانون هوک"
            ],
            "principles": [
              "ضریب اصطکاک جنبشی معمولاً کمتر از ضریب اصطکاک ایستایی است.",
              "نیروی اصطکاک به مساحت سطح تماس بستگی ندارد."
            ],
            "processes": [
              "تحلیل نیروهای وارد بر جسم",
              "محاسبه نیروی اصطکاک و شتاب"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1"
            ],
            "next_topics": [
              "t2_3",
              "t2_4"
            ],
            "concept_dependencies": [
              "نیاز به درک قوانین نیوتون"
            ],
            "required_background": null,
            "builds_upon": [
              "قوانین نیوتون"
            ],
            "enables_learning_of": [
              "حل مسائل دینامیکی پیشرفته"
            ]
          },
          "relationships": {
            "related_topics": [
              "دینامیک"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "نیروی گرانشی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "محاسبه وزن",
              "محاسبه نیروی عمودی سطح",
              "تشخیص اصطکاک ایستایی و جنبشی",
              "محاسبه نیروی اصطکاک",
              "قانون هوک",
              "نیروی کشش طناب"
            ],
            "hidden_points": [
              "تفاوت بین نیروی اصطکاک ایستایی و جنبشی"
            ],
            "trick_points": [
              "سوالات با سطوح شیب‌دار (خارج از کتاب)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص نوع نیرو"
            ],
            "calculation_question_types": [
              "محاسبه fs, fk, FN, W"
            ],
            "analytical_question_types": [
              "تحلیل حرکت با در نظر گرفتن اصطکاک"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "استفاده از μk به جای μs در آستانه حرکت",
              "فراموش کردن FN در محاسبه اصطکاک",
              "اشتباه در تشخیص جهت نیروی اصطکاک"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تحلیل آسانسور (نیروی عمودی سطح متغیر)",
              "تمایز بین fs و fk"
            ],
            "warning_points": [
              "نیروی اصطکاک ایستایی همواره با نیروی وارد شده برابر است تا آستانه حرکت."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "نیروهای رایج در مسائل دینامیک.",
            "study_strategy": "تمرین با مثال‌های مختلف (جعبه روی سطح، آسانسور، فنر)",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t2_3"
          },
          "memory_support": {
            "memory_tips": "f_s,max = μ_s F_N, f_k = μ_k F_N.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "کشیدن یک جعبه روی زمین (اصطکاک) و فنر (نیروی کشسانی)."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۴ (چترباز)",
              "مثال ۲-۵ (آسانسور)",
              "مثال ۲-۷ (کارگر)",
              "مثال ۲-۸ (نردبان)",
              "مثال ۲-۸ (فنر)",
              "مثال ۲-۹ (سطل مصالح)"
            ],
            "important_examples": [
              "حرکت جسم روی سطح افقی با اصطکاک",
              "آسانسور (وزن ظاهری)"
            ],
            "real_life_examples": [
              "ترمز کردن خودرو",
              "وزن در آسانسور",
              "فنر خودرو"
            ]
          }
        },
        {
          "id": "t2_3",
          "title": "تکانه و قانون دوم نیوتون",
          "core_knowledge": {
            "explanation": "تکانه (p) حاصلضرب جرم در سرعت است: p = mv. قانون دوم نیوتون را می‌توان بر حسب تکانه نوشت: F_net = Δp/Δt. تغییر تکانه (ضربه) برابر با حاصلضرب نیرو در زمان است: J = FΔt = Δp.",
            "complete_definition": "تکانه خطی یک جسم برابر است با حاصلضرب جرم در سرعت آن: \\(\\vec{p} = m\\vec{v}\\). قانون دوم نیوتون به صورت \\(\\vec{F}_{net} = \\Delta\\vec{p}/\\Delta t\\) نیز بیان می‌شود. تغییر تکانه (ضربه) برابر با \\(\\vec{J} = \\vec{F}_{net}\\Delta t = \\Delta\\vec{p}\\).",
            "key_concepts": [
              "تکانه (p)",
              "ضربه (J)",
              "قانون دوم نیوتون بر حسب تکانه",
              "نیروی متوسط"
            ],
            "terminology": {
              "تکانه": "حاصلضرب جرم در سرعت",
              "ضربه": "تغییر تکانه، برابر با نیروی متوسط ضرب در زمان"
            },
            "formulas": {
              "تکانه": "p = mv",
              "قانون دوم بر حسب تکانه": "F_net = Δp/Δt",
              "ضربه": "J = F_net Δt = Δp"
            },
            "laws": [
              "قانون دوم نیوتون"
            ],
            "principles": [
              "تغییر تکانه برابر با سطح زیر نمودار نیرو-زمان است.",
              "نیروی متوسط برابر با تغییر تکانه تقسیم بر زمان است."
            ],
            "processes": [
              "محاسبه تکانه و تغییر تکانه",
              "محاسبه نیروی متوسط در برخوردها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1"
            ],
            "next_topics": [
              "t2_4"
            ],
            "concept_dependencies": [
              "نیاز به درک نیرو و شتاب"
            ],
            "required_background": null,
            "builds_upon": [
              "قوانین نیوتون"
            ],
            "enables_learning_of": [
              "برخوردها",
              "حفاظت تکانه"
            ]
          },
          "relationships": {
            "related_topics": [
              "برخوردها"
            ],
            "similar_concepts": [
              "انرژی جنبشی"
            ],
            "differences": [
              "تکانه کمیتی برداری است، انرژی جنبشی نرده‌ای است."
            ],
            "frequently_confused_with": [
              "انرژی جنبشی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تعریف تکانه",
              "محاسبه تغییر تکانه",
              "محاسبه نیروی متوسط از تغییر تکانه",
              "رابطه تکانه و نیرو"
            ],
            "hidden_points": [
              "نیروی متوسط در مدت زمان کوتاه بسیار بزرگ است."
            ],
            "trick_points": [
              "سوالات مربوط به برخورد و تغییر تکانه"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [
              "محاسبه p, Δp, F_av"
            ],
            "analytical_question_types": [
              "تحلیل نمودار F-t"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن ماهیت برداری تکانه (علامت‌ها)",
              "استفاده از تندی به جای سرعت در محاسبه تکانه"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص جهت تغییر تکانه",
              "محاسبه از روی نمودار"
            ],
            "warning_points": [
              "تکانه کمیتی برداری است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در برخوردها.",
            "study_strategy": "تمرین محاسبه تغییر تکانه در برخوردها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "p = mv, F_net = Δp/Δt.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "برخورد یک خودرو به دیوار (تغییر تکانه ناگهانی و نیروی زیاد)."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۱۱ (گلوله)",
              "مثال ۲-۱۲ (تصادف خودرو)"
            ],
            "important_examples": [
              "نیروی متوسط در برخورد خودرو به دیوار",
              "رابطه تکانه و انرژی جنبشی"
            ],
            "real_life_examples": [
              "ضربه چکش به میخ",
              "تصادف",
              "کیسه هوا"
            ]
          }
        },
        {
          "id": "t2_4",
          "title": "نیروی گرانشی",
          "core_knowledge": {
            "explanation": "قانون گرانش عمومی نیوتون: هر دو ذره در عالم با نیرویی که با حاصلضرب جرم‌ها نسبت مستقیم و با مربع فاصله نسبت وارون دارد، یکدیگر را جذب می‌کنند: F = G m1 m2 / r^2. وزن جسم در سطح زمین برابر با نیروی گرانشی وارد بر آن است.",
            "complete_definition": "قانون گرانش عمومی: نیروی گرانشی بین دو ذره با جرم‌های m1 و m2 که به فاصله r از هم قرار دارند، برابر است با F = G m1 m2 / r^2. ثابت گرانش عمومی G = 6.67 × 10^-11 N·m²/kg². وزن جسم در سطح زمین: W = mg که g = GM_e / R_e^2 ≈ 9.8 N/kg.",
            "key_concepts": [
              "قانون گرانش عمومی",
              "ثابت گرانش عمومی (G)",
              "شتاب گرانشی (g)",
              "وزن",
              "نیروی گرانشی"
            ],
            "terminology": {
              "قانون گرانش عمومی": "قانونی که نیروی جاذبه بین دو جرم را محاسبه می‌کند.",
              "ثابت گرانش عمومی (G)": "ثابتی با مقدار 6.67×10^-11 N·m²/kg²."
            },
            "formulas": {
              "نیروی گرانشی": "F = G m1 m2 / r^2",
              "وزن": "W = mg",
              "شتاب گرانشی": "g = GM_e / R_e^2"
            },
            "laws": [
              "قانون گرانش عمومی"
            ],
            "principles": [
              "نیروی گرانشی بین اجسام کوچک ناچیز است.",
              "شتاب گرانشی با فاصله از مرکز زمین کاهش می‌یابد."
            ],
            "processes": [
              "محاسبه نیروی گرانشی",
              "محاسبه وزن در ارتفاع"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_2"
            ],
            "next_topics": [
              "t3_1",
              "t3_2"
            ],
            "concept_dependencies": [
              "نیاز به درک وزن"
            ],
            "required_background": null,
            "builds_upon": [
              "وزن"
            ],
            "enables_learning_of": [
              "گرانش"
            ]
          },
          "relationships": {
            "related_topics": [
              "نجوم",
              "مدارها"
            ],
            "similar_concepts": [
              "نیروی الکتریکی (قانون کولن)"
            ],
            "differences": [
              "نیروی گرانشی همواره جاذبه است."
            ],
            "frequently_confused_with": [
              "وزن"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "بیان قانون گرانش عمومی",
              "محاسبه نیروی گرانشی",
              "محاسبه شتاب گرانشی در ارتفاع",
              "تفاوت وزن و جرم"
            ],
            "hidden_points": [
              "نیروی گرانشی بین اجسام معمولی ناچیز است."
            ],
            "trick_points": [
              "سوالات با ضرایب بسیار کوچک"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان قانون"
            ],
            "calculation_question_types": [
              "محاسبه F, g"
            ],
            "analytical_question_types": [
              "مقایسه وزن در نقاط مختلف"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن توان 2 در مخرج (r^2)",
              "اشتباه در تبدیل یکاها"
            ],
            "misconceptions": [
              "نیروی گرانشی در ارتفاع صفر می‌شود."
            ],
            "difficult_parts": [
              "محاسبات با اعداد توانی"
            ],
            "warning_points": [
              "نیروی گرانشی با مربع فاصله نسبت وارون دارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "قانون بنیادی در اخترشناسی.",
            "study_strategy": "تمرین محاسبات نیروی گرانشی",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_1"
          },
          "memory_support": {
            "memory_tips": "F = G m1 m2 / r^2.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "سقوط سیب (گرانش) و چرخش ماه به دور زمین."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۱۳ (زمین و ماه)",
              "مثال ۲-۱۴ (دو کره)",
              "مثال ۲-۱۵ (ماهواره)",
              "مثال ۲-۱۶ (شتاب گرانشی)"
            ],
            "important_examples": [
              "نیروی گرانشی بین زمین و ماه",
              "محاسبه وزن در ارتفاع"
            ],
            "real_life_examples": [
              "وزن در سطح زمین",
              "ماهواره‌ها"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "نوسان و امواج",
      "chapter_objectives": [
        "درک نوسان دوره‌ای، حرکت هماهنگ ساده (SHM) و کمیت‌های مربوطه (دامنه، دوره، بسامد)",
        "بررسی انرژی در حرکت هماهنگ ساده",
        "بررسی سامانه جرم-فنر و آونگ ساده",
        "درک مفهوم موج، انواع موج (عرضی، طولی، الکترومغناطیسی)",
        "بررسی مشخصه‌های موج (طول موج، دامنه، دوره، بسامد، تندی انتشار)",
        "تحلیل بازتاب و شکست امواج و قوانین مربوطه",
        "بررسی امواج صوتی و الکترومغناطیسی و کاربردهای آنها"
      ],
      "estimated_total_learning_time": "PT16H",
      "overall_difficulty": 8,
      "overall_importance": 9,
      "prerequisite_chapters": [
        1,
        2
      ],
      "next_chapters": [
        4
      ],
      "topics": [
        {
          "id": "t3_1",
          "title": "حرکت هماهنگ ساده (SHM)",
          "core_knowledge": {
            "explanation": "حرکت هماهنگ ساده (SHM) یک نوسان دوره‌ای است که در آن نیروی بازگرداننده با جابه‌جایی متناسب است (F = -kx). مکان به صورت x = A cos(ωt) تغییر می‌کند. دوره تناوب سامانه جرم-فنر: T = 2π√(m/k). دوره تناوب آونگ ساده: T = 2π√(L/g). انرژی مکانیکی SHM: E = 1/2 kA^2.",
            "complete_definition": "حرکت هماهنگ ساده (SHM) نوعی حرکت نوسانی است که در آن نیروی بازگرداننده با جابه‌جایی نسبت مستقیم و در خلاف جهت آن است (F = -kx). مکان به صورت x(t) = A cos(ωt) (یا سینوسی) بیان می‌شود. بسامد زاویه‌ای ω = √(k/m) = 2π/T. انرژی مکانیکی ثابت است: E = 1/2 kA^2 = 1/2 mω^2 A^2.",
            "key_concepts": [
              "حرکت هماهنگ ساده (SHM)",
              "نیروی بازگرداننده",
              "دامنه (A)",
              "دوره تناوب (T)",
              "بسامد (f)",
              "بسامد زاویه‌ای (ω)",
              "سامانه جرم-فنر",
              "آونگ ساده",
              "انرژی در SHM"
            ],
            "terminology": {
              "دامنه (A)": "بیشترین جابه‌جایی از نقطه تعادل",
              "دوره تناوب (T)": "زمان یک نوسان کامل",
              "بسامد (f)": "تعداد نوسان در ثانیه",
              "بسامد زاویه‌ای (ω)": "2πf"
            },
            "formulas": {
              "مکان": "x = A cos(ωt)",
              "ω": "√(k/m) = 2π/T = 2πf",
              "دوره جرم-فنر": "T = 2π√(m/k)",
              "دوره آونگ": "T = 2π√(L/g)",
              "انرژی مکانیکی": "E = 1/2 kA^2"
            },
            "laws": null,
            "principles": [
              "در SHM، انرژی مکانیکی پایسته است.",
              "دوره تناوب آونگ به جرم و دامنه بستگی ندارد."
            ],
            "processes": [
              "محاسبه دوره، بسامد و مکان در SHM",
              "حل مسائل جرم-فنر و آونگ"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "قانون هوک",
              "انرژی"
            ],
            "next_topics": [
              "t3_2",
              "t3_3"
            ],
            "concept_dependencies": [
              "نیاز به درک نیروی کشسانی و انرژی"
            ],
            "required_background": null,
            "builds_upon": [
              "نیروی کشسانی"
            ],
            "enables_learning_of": [
              "امواج"
            ]
          },
          "relationships": {
            "related_topics": [
              "امواج",
              "نوسان"
            ],
            "similar_concepts": [
              "نوسان میرا",
              "نوسان واداشته"
            ],
            "differences": [
              "در SHM، نیروی بازگرداننده با جابه‌جایی متناسب است."
            ],
            "frequently_confused_with": [
              "حرکت دایره‌ای یکنواخت"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تعریف SHM",
              "محاسبه دوره و بسامد جرم-فنر",
              "محاسبه دوره آونگ ساده",
              "محاسبه انرژی مکانیکی",
              "استفاده از رابطه x = A cos(ωt)"
            ],
            "hidden_points": [
              "رابطه بین T و f",
              "مستقل بودن دوره آونگ از جرم"
            ],
            "trick_points": [
              "سوالات مربوط به محاسبه T برای سامانه‌های مختلف"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [
              "محاسبه T, f, ω, E"
            ],
            "analytical_question_types": [
              "تحلیل سامانه جرم-فنر"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن ضریب 2π در ω",
              "استفاده از فرمول نادرست برای دوره تناوب",
              "اشتباه در تبدیل یکاها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک مفهوم SHM",
              "استفاده از روابط مکان-زمان"
            ],
            "warning_points": [
              "دوره آونگ به جرم و دامنه بستگی ندارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در نوسان و امواج.",
            "study_strategy": "تمرین با سامانه جرم-فنر و آونگ",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t3_2"
          },
          "memory_support": {
            "memory_tips": "T = 2π√(m/k) برای فنر، T = 2π√(L/g) برای آونگ.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "وزنه‌ای که به فنر آویزان است و نوسان می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۱ (جسم و فنر)",
              "مثال ۳-۳ (نوسانگر)",
              "مثال ۳-۴ (آونگ)",
              "فعالیت ۳-۲"
            ],
            "important_examples": [
              "سامانه جرم-فنر",
              "آونگ ساده",
              "محاسبه g با آونگ"
            ],
            "real_life_examples": [
              "ضربان قلب",
              "تاب",
              "آونگ ساعت"
            ]
          }
        },
        {
          "id": "t3_2",
          "title": "امواج مکانیکی: انواع، مشخصه‌ها و تندی انتشار",
          "core_knowledge": {
            "explanation": "موج، آشفتگی‌ای است که انرژی را در یک محیط منتقل می‌کند. امواج مکانیکی برای انتشار به محیط مادی نیاز دارند. دو نوع اصلی: عرضی (نوسان عمود بر انتشار) و طولی (نوسان در راستای انتشار). مشخصه‌های موج: طول موج (λ)، دامنه (A)، دوره (T)، بسامد (f) و تندی انتشار (v = λ/T = λf).",
            "complete_definition": "موج، یک آشفتگی است که در محیط منتشر می‌شود و انرژی را منتقل می‌کند. امواج مکانیکی (مانند صوت و امواج روی آب) نیاز به محیط مادی دارند. موج عرضی: نوسان عمود بر انتشار. موج طولی: نوسان در راستای انتشار. تندی انتشار موج: v = λ/T = λf.",
            "key_concepts": [
              "موج",
              "موج عرضی",
              "موج طولی",
              "طول موج (λ)",
              "دامنه (A)",
              "دوره (T)",
              "بسامد (f)",
              "تندی انتشار (v)",
              "جبهه موج"
            ],
            "terminology": {
              "موج عرضی": "موجی که در آن ذرات عمود بر جهت انتشار نوسان می‌کنند.",
              "موج طولی": "موجی که در آن ذرات در راستای انتشار نوسان می‌کنند.",
              "طول موج": "فاصله بین دو قله یا دو دره متوالی (برای امواج عرضی) یا دو تراکم متوالی (برای امواج طولی).",
              "تندی انتشار": "مسافتی که موج در واحد زمان طی می‌کند."
            },
            "formulas": {
              "تندی انتشار": "v = λ/T = λf"
            },
            "laws": null,
            "principles": [
              "تندی انتشار موج به ویژگی‌های محیط بستگی دارد.",
              "با افزایش بسامد (در محیط ثابت)، طول موج کاهش می‌یابد."
            ],
            "processes": [
              "محاسبه مشخصه‌های موج از روی شکل یا داده‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "SHM"
            ],
            "next_topics": [
              "t3_3",
              "t3_4",
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک نوسان"
            ],
            "required_background": null,
            "builds_upon": [
              "نوسان"
            ],
            "enables_learning_of": [
              "بازتاب و شکست امواج",
              "امواج الکترومغناطیسی"
            ]
          },
          "relationships": {
            "related_topics": [
              "امواج الکترومغناطیسی"
            ],
            "similar_concepts": [
              "امواج الکترومغناطیسی (نیاز به محیط ندارند)"
            ],
            "differences": [
              "امواج مکانیکی به محیط نیاز دارند."
            ],
            "frequently_confused_with": [
              "امواج الکترومغناطیسی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص موج عرضی و طولی",
              "محاسبه طول موج، دامنه، دوره و بسامد از روی شکل",
              "محاسبه تندی انتشار",
              "رابطه v = λf"
            ],
            "hidden_points": [
              "تشخیص موج طولی در فنر"
            ],
            "trick_points": [
              "سوالات مربوط به شناسایی مشخصه‌ها از روی شکل موج"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص نوع موج"
            ],
            "calculation_question_types": [
              "محاسبه v, λ, f"
            ],
            "analytical_question_types": [
              "تحلیل شکل موج"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص موج عرضی و طولی",
              "فراموش کردن رابطه v = λf"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص طول موج در موج طولی (تراکم و انبساط)"
            ],
            "warning_points": [
              "تندی انتشار به محیط بستگی دارد، نه به چشمه."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای امواج.",
            "study_strategy": "تمرین تحلیل شکل‌های موج",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "v = λf",
            "mnemonic_devices": null,
            "visual_imagination_tips": "امواج روی آب (عرضی) و امواج صوتی (طولی)."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۵ (موج سطحی در تشت)",
              "مثال ۳-۶ (فنر)",
              "مثال ۳-۷ (نور مرئی)"
            ],
            "important_examples": [
              "محاسبه تندی انتشار موج روی آب",
              "امواج در فنر و تار"
            ],
            "real_life_examples": [
              "امواج صوتی",
              "امواج روی آب",
              "امواج لرزه‌ای"
            ]
          }
        },
        {
          "id": "t3_3",
          "title": "امواج الکترومغناطیسی و طیف آن",
          "core_knowledge": {
            "explanation": "امواج الکترومغناطیسی از نوسان‌های میدان‌های الکتریکی و مغناطیسی عمود بر هم تشکیل شده‌اند. این امواج برای انتشار به محیط مادی نیاز ندارند و در خلا با تندی c = 3.00 × 10^8 m/s حرکت می‌کنند. طیف الکترومغناطیسی شامل امواج رادیویی، مایکروویو، فروسرخ، نور مرئی، فرابنفش، اشعه X و اشعه گاما است.",
            "complete_definition": "امواج الکترومغناطیسی از نوسان‌های میدان الکتریکی و مغناطیسی عمود بر هم و عمود بر جهت انتشار تشکیل شده‌اند. این امواج در خلا با تندی نور (c = 3.00 × 10^8 m/s) حرکت می‌کنند. طیف الکترومغناطیسی شامل همه طول موج‌های ممکن از امواج رادیویی با طول موج بلند تا اشعه گاما با طول موج کوتاه است.",
            "key_concepts": [
              "امواج الکترومغناطیسی",
              "میدان الکتریکی",
              "میدان مغناطیسی",
              "طیف الکترومغناطیسی",
              "نور مرئی",
              "تندی نور (c)",
              "تابش"
            ],
            "terminology": {
              "امواج الکترومغناطیسی": "امواحی که از نوسان میدان‌های الکتریکی و مغناطیسی به وجود می‌آیند.",
              "طیف الکترومغناطیسی": "گستره کامل امواج الکترومغناطیسی بر حسب طول موج یا بسامد."
            },
            "formulas": {
              "تندی نور": "c = 3.00 × 10^8 m/s",
              "رابطه موج": "c = λf"
            },
            "laws": null,
            "principles": [
              "امواج الکترومغناطیسی به محیط مادی نیاز ندارند.",
              "همه امواج الکترومغناطیسی در خلا با تندی c منتشر می‌شوند."
            ],
            "processes": [
              "محاسبه طول موج یا بسامد با استفاده از c = λf"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_2"
            ],
            "next_topics": [
              "t4_1",
              "t4_2"
            ],
            "concept_dependencies": [
              "نیاز به درک مشخصه‌های موج"
            ],
            "required_background": null,
            "builds_upon": [
              "امواج"
            ],
            "enables_learning_of": [
              "اثر فوتوالکتریک",
              "طیف خطی"
            ]
          },
          "relationships": {
            "related_topics": [
              "نور"
            ],
            "similar_concepts": [
              "امواج مکانیکی"
            ],
            "differences": [
              "امواج الکترومغناطیسی در خلا منتشر می‌شوند."
            ],
            "frequently_confused_with": [
              "امواج مکانیکی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص موج الکترومغناطیسی",
              "رسم طیف الکترومغناطیسی",
              "محاسبه طول موج یا بسامد با c = λf",
              "کاربردهای امواج الکترومغناطیسی"
            ],
            "hidden_points": [
              "نور مرئی بخش کوچکی از طیف است."
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه λ یا f از c"
            ],
            "analytical_question_types": [
              "مقایسه امواج مختلف طیف"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن تندی نور (c)",
              "اشتباه در ترتیب طیف الکترومغناطیسی"
            ],
            "misconceptions": [
              "همه امواج الکترومغناطیسی مرئی هستند."
            ],
            "difficult_parts": [
              "به خاطر سپردن ترتیب طیف"
            ],
            "warning_points": [
              "c = 3 × 10^8 m/s در خلا"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای فیزیک مدرن.",
            "study_strategy": "حفظ طیف و کاربردها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t4_1"
          },
          "memory_support": {
            "memory_tips": "طیف: رادیویی، مایکروویو، فروسرخ، مرئی، فرابنفش، X، گاما.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تصویر طیف الکترومغناطیسی."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۷ (نور مرئی)",
              "فعالیت ۳-۷ (تلفن همراه)"
            ],
            "important_examples": [
              "محاسبه بسامد نور مرئی",
              "تلفن همراه (امواج رادیویی)"
            ],
            "real_life_examples": [
              "رادیو، تلویزیون، مایکروویو، اشعه X"
            ]
          }
        },
        {
          "id": "t3_4",
          "title": "امواج صوتی (ویژگی‌ها و شدت صوت)",
          "core_knowledge": {
            "explanation": "صوت یک موج طولی مکانیکی است. تندی صوت به محیط انتشار بستگی دارد و در جامدات بیشتر از مایعات و گازها است. شدت صوت (I) انرژی عبوری از واحد سطح در واحد زمان است. تراز شدت صوت (β) بر حسب دسی بل (dB) بیان می‌شود: β = 10 log(I/I0).",
            "complete_definition": "صوت یک موج طولی است که در محیط‌های مادی (گاز، مایع، جامد) منتشر می‌شود. تندی صوت به دما و جنس محیط بستگی دارد. شدت صوت (I) آهنگ انرژی عبوری از واحد سطح عمود بر انتشار است. تراز شدت صوت: β = 10 log(I/I0) dB که I0 = 10^-12 W/m² آستانه شنوایی است.",
            "key_concepts": [
              "موج صوتی",
              "تندی صوت",
              "شدت صوت (I)",
              "تراز شدت صوت (β)",
              "دسی بل (dB)",
              "آستانه شنوایی",
              "آستانه درد"
            ],
            "terminology": {
              "شدت صوت": "توان عبوری از واحد سطح (W/m²)",
              "تراز شدت صوت": "لگاریتم نسبت شدت به شدت مرجع"
            },
            "formulas": {
              "تراز شدت صوت": "β = 10 log(I/I0) dB",
              "I0": "1.00 × 10^-12 W/m²"
            },
            "laws": null,
            "principles": [
              "صوت در جامدات سریع‌تر از مایعات و گازها منتشر می‌شود.",
              "تراز شدت صوت بر حسب لگاریتم بیان می‌شود."
            ],
            "processes": [
              "محاسبه شدت یا تراز شدت صوت"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_2"
            ],
            "next_topics": [
              "t3_5",
              "t3_6"
            ],
            "concept_dependencies": [
              "نیاز به درک موج"
            ],
            "required_background": null,
            "builds_upon": [
              "امواج مکانیکی"
            ],
            "enables_learning_of": [
              "کاربردهای صوت (سونار، سونوگرافی)"
            ]
          },
          "relationships": {
            "related_topics": [
              "امواج الکترومغناطیسی (تفاوت)"
            ],
            "similar_concepts": [],
            "differences": [
              "صوت موج مکانیکی طولی است."
            ],
            "frequently_confused_with": [
              "امواج الکترومغناطیسی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص صوت به عنوان موج طولی",
              "عوامل مؤثر بر تندی صوت",
              "محاسبه تراز شدت صوت",
              "محاسبه شدت صوت"
            ],
            "hidden_points": [
              "لگاریتم در فرمول تراز شدت صوت"
            ],
            "trick_points": [
              "سوالات مربوط به نسبت شدت‌ها (تفاوت dB)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [
              "محاسبه β از I و بالعکس"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن I0 در فرمول",
              "اشتباه در محاسبه لگاریتم"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "استفاده از لگاریتم",
              "تبدیل dB به I"
            ],
            "warning_points": [
              "I0 = 10^-12 W/m²"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در زندگی.",
            "study_strategy": "تمرین با جدول تراز شدت صوت",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t3_5"
          },
          "memory_support": {
            "memory_tips": "β = 10 log(I/I0)",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مقایسه صدای زمزمه و انفجار (تفاوت dB)."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۹ (شدت و تراز شدت)",
              "جدول ۳-۲"
            ],
            "important_examples": [
              "محاسبه شدت از روی dB",
              "مقایسه شدت‌ها"
            ],
            "real_life_examples": [
              "آلودگی صوتی",
              "سونوگرافی",
              "پژواک (اکو)"
            ]
          }
        },
        {
          "id": "t3_5",
          "title": "بازتاب و شکست امواج",
          "core_knowledge": {
            "explanation": "بازتاب: برخورد موج با یک مانع و برگشت آن. قانون بازتاب: زاویه تابش = زاویه بازتابش. شکست: تغییر جهت موج در عبور از مرز دو محیط که در آن تندی موج تغییر می‌کند. قانون شکست عمومی: v1/v2 = sinθ1/sinθ2. ضریب شکست (n): نسبت تندی نور در خلا به تندی نور در محیط.",
            "complete_definition": "بازتاب موج: وقتی موج به مانع برخورد می‌کند، بخشی از آن بازمی‌گردد. قانون بازتاب: θ_i = θ_r. شکست موج: تغییر جهت موج در عبور از مرز دو محیط با تندی‌های متفاوت. قانون شکست (اسنل): n1 sinθ1 = n2 sinθ2. ضریب شکست: n = c/v.",
            "key_concepts": [
              "بازتاب",
              "شکست",
              "قانون بازتاب",
              "قانون اسنل",
              "ضریب شکست (n)",
              "پاشندگی نور",
              "موج تخت",
              "جبهه موج"
            ],
            "terminology": {
              "بازتاب": "برگشت موج از سطح یک مانع",
              "شکست": "تغییر جهت موج در ورود به محیط جدید",
              "ضریب شکست (n)": "نسبت تندی نور در خلا به تندی نور در محیط"
            },
            "formulas": {
              "قانون اسنل": "n1 sinθ1 = n2 sinθ2",
              "ضریب شکست": "n = c/v"
            },
            "laws": [
              "قانون بازتاب",
              "قانون شکست (اسنل)"
            ],
            "principles": [
              "در شکست، بسامد موج ثابت می‌ماند.",
              "با ورود موج به محیط با تندی کمتر، طول موج کاهش می‌یابد."
            ],
            "processes": [
              "تحلیل بازتاب و شکست امواج",
              "محاسبه زاویه شکست با قانون اسنل"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_2",
              "امواج الکترومغناطیسی (نور)"
            ],
            "next_topics": [
              "t3_6"
            ],
            "concept_dependencies": [
              "نیاز به درک مشخصه‌های موج"
            ],
            "required_background": null,
            "builds_upon": [
              "امواج"
            ],
            "enables_learning_of": [
              "عدسی‌ها",
              "فیبر نوری"
            ]
          },
          "relationships": {
            "related_topics": [
              "نور",
              "فیبر نوری"
            ],
            "similar_concepts": [
              "پراش"
            ],
            "differences": [
              "شکست تغییر جهت، بازتاب برگشت."
            ],
            "frequently_confused_with": [
              "پراش"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 7,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "بیان قوانین بازتاب و شکست",
              "محاسبه زاویه با قانون اسنل",
              "محاسبه ضریب شکست",
              "کاربردهای بازتاب و شکست (سراب، فیبر نوری)"
            ],
            "hidden_points": [
              "رابطه بین v, λ و n"
            ],
            "trick_points": [
              "سوالات با تیغه متوازی السطوح"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان قوانین"
            ],
            "calculation_question_types": [
              "محاسبه θ با قانون اسنل"
            ],
            "analytical_question_types": [
              "تحلیل پدیده سراب",
              "پاشندگی نور"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "استفاده از sin به جای cos",
              "فراموش کردن n در قانون اسنل"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "کاربرد قانون اسنل",
              "محاسبه زاویه شکست"
            ],
            "warning_points": [
              "n = c/v, هرچه n بیشتر، تندی کمتر."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد گسترده در نورشناسی.",
            "study_strategy": "تمرین با قانون اسنل",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_6"
          },
          "memory_support": {
            "memory_tips": "قانون اسنل: n1 sinθ1 = n2 sinθ2.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نور هنگام ورود به آب خم می‌شود."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۱۱ (تیغه متوازی السطوح)",
              "مثال ۳-۱۲ (پاشندگی نور)",
              "فعالیت ۳-۱۰"
            ],
            "important_examples": [
              "قانون اسنل برای تیغه متوازی السطوح",
              "پدیده سراب"
            ],
            "real_life_examples": [
              "عینک",
              "دوربین",
              "فیبر نوری",
              "رنگین‌کمان"
            ]
          }
        },
        {
          "id": "t3_6",
          "title": "اثر دوپلر (کیفی)",
          "core_knowledge": {
            "explanation": "اثر دوپلر: تغییر در بسامد درک شده توسط ناظر به دلیل حرکت نسبی چشمه یا ناظر. اگر چشمه به ناظر نزدیک شود، بسامد افزایش و اگر دور شود، بسامد کاهش می‌یابد. این اثر برای امواج صوتی و الکترومغناطیسی صادق است.",
            "complete_definition": "اثر دوپلر: وقتی چشمه صوت یا ناظر نسبت به هم حرکت کنند، بسامد درک شده توسط ناظر با بسامد گسیل شده متفاوت است. اگر چشمه و ناظر به هم نزدیک شوند، بسامد افزایش می‌یابد و اگر دور شوند، کاهش می‌یابد. این اثر در امواج صوتی و الکترومغناطیسی مشاهده می‌شود.",
            "key_concepts": [
              "اثر دوپلر",
              "چشمه متحرک",
              "ناظر متحرک",
              "افزایش بسامد",
              "کاهش بسامد"
            ],
            "terminology": {
              "اثر دوپلر": "تغییر بسامد به دلیل حرکت نسبی چشمه و ناظر"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "نزدیک شدن چشمه به ناظر → افزایش بسامد.",
              "دور شدن چشمه از ناظر → کاهش بسامد."
            ],
            "processes": [
              "تشخیص افزایش یا کاهش بسامد در اثر دوپلر"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "امواج صوتی"
            ],
            "next_topics": [
              "t4_1"
            ],
            "concept_dependencies": [
              "نیاز به درک بسامد"
            ],
            "required_background": null,
            "builds_upon": [
              "امواج صوتی"
            ],
            "enables_learning_of": [
              "کاربردهای اثر دوپلر"
            ]
          },
          "relationships": {
            "related_topics": [
              "رادار",
              "ستاره‌شناسی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1H",
            "review_interval": "P10D",
            "forgetting_risk": 4,
            "difficulty_score": 3,
            "importance_score": 4,
            "reasoning_load": 3,
            "memory_load": 4
          },
          "exam_metadata": {
            "importance_for_konkur": 4,
            "probability_in_exam": 20,
            "exam_points": [
              "تشخیص اثر دوپلر",
              "تشخیص افزایش یا کاهش بسامد"
            ],
            "hidden_points": [
              "کاربرد در تعیین سرعت"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل کیفی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص افزایش یا کاهش بسامد"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کیفی و مفهومی.",
            "study_strategy": "مطالعه مثال‌های کتاب (ماشین آتش‌نشانی)",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t4_1"
          },
          "memory_support": {
            "memory_tips": "نزدیک شدن = بسامد بیشتر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "آژیر آمبولانس هنگام نزدیک شدن."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳-۲۷ و ۳-۲۸ (اثر دوپلر)"
            ],
            "important_examples": [
              "ماشین آتش‌نشانی",
              "صدای قطار"
            ],
            "real_life_examples": [
              "آژیر",
              "رادار سرعت‌گیری"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "آشنایی با فیزیک اتمی و هسته‌ای",
      "chapter_objectives": [
        "درک اثر فوتوالکتریک و نظریه فوتونی نور",
        "بررسی طیف خطی هیدروژن و معادلات بالمر و ریدبرگ",
        "آشنایی با مدل‌های اتمی (تامسون، رادرفورد، بور)",
        "بررسی مبانی لیزر و گسیل القایی",
        "شناخت ساختار هسته، ایزوتوپ‌ها و نیروی هسته‌ای",
        "بررسی پرتوزایی طبیعی (واپاشی α, β, γ) و نیمه‌عمر"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 7,
      "overall_importance": 8,
      "prerequisite_chapters": [
        1,
        2,
        3
      ],
      "next_chapters": [],
      "topics": [
        {
          "id": "t4_1",
          "title": "اثر فوتوالکتریک و فوتون",
          "core_knowledge": {
            "explanation": "اثر فوتوالکتریک: گسیل الکترون‌ها از سطح فلز در اثر تابش نور با بسامد کافی. اینشتین توضیح داد که نور به صورت بسته‌های انرژی (فوتون) عمل می‌کند: E = hf. انرژی فوتون برای خارج کردن الکترون (تابع کار) و باقی‌مانده به انرژی جنبشی الکترون تبدیل می‌شود. اثر فوتوالکتریک با نظریه موجی نور قابل توجیه نبود.",
            "complete_definition": "اثر فوتوالکتریک پدیده گسیل الکترون از سطح یک فلز در اثر تابش نور (یا تابش الکترومغناطیسی) است. نظریه فوتونی اینشتین: نور از فوتون‌هایی با انرژی E = hf تشکیل شده است. یک فوتون با یک الکترون برهم‌کنش می‌کند. برای گسیل الکترون، انرژی فوتون باید از تابع کار (W) فلز بیشتر باشد.",
            "key_concepts": [
              "اثر فوتوالکتریک",
              "فوتون",
              "انرژی فوتون (E = hf)",
              "تابع کار (W)",
              "بسامد آستانه",
              "ثابت پلانک (h)",
              "الکترون ولت (eV)"
            ],
            "terminology": {
              "فوتون": "بسته انرژی نور",
              "تابع کار": "حداقل انرژی لازم برای خارج کردن الکترون از فلز",
              "بسامد آستانه": "حداقل بسامد برای وقوع اثر فوتوالکتریک"
            },
            "formulas": {
              "انرژی فوتون": "E = hf = hc/λ",
              "hc": "1240 eV·nm (مقدار مفید)"
            },
            "laws": null,
            "principles": [
              "اثر فوتوالکتریک با افزایش شدت نور (در بسامد ثابت) فقط تعداد فوتوالکترون‌ها را افزایش می‌دهد.",
              "انرژی جنبشی فوتوالکترون‌ها به شدت نور بستگی ندارد."
            ],
            "processes": [
              "محاسبه انرژی فوتون",
              "تشخیص وقوع اثر فوتوالکتریک"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "امواج الکترومغناطیسی",
              "انرژی"
            ],
            "next_topics": [
              "t4_2",
              "t4_3"
            ],
            "concept_dependencies": [
              "نیاز به درک نور"
            ],
            "required_background": null,
            "builds_upon": [
              "نظریه کوانتومی"
            ],
            "enables_learning_of": [
              "مدل بور",
              "طیف خطی"
            ]
          },
          "relationships": {
            "related_topics": [
              "مدل بور",
              "طیف خطی"
            ],
            "similar_concepts": [
              "تابش جسم سیاه"
            ],
            "differences": [
              "اثر فوتوالکتریک گسیل الکترون است."
            ],
            "frequently_confused_with": [
              "تابش گرمایی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "توضیح اثر فوتوالکتریک",
              "محاسبه انرژی فوتون",
              "تشخیص اینکه نظریه موجی نمی‌تواند آن را توجیه کند.",
              "کاربرد hc = 1240 eV·nm"
            ],
            "hidden_points": [
              "مفهوم الکترون ولت (eV)"
            ],
            "trick_points": [
              "سوالات با تبدیل واحد (J به eV)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "توضیح پدیده",
              "مقایسه با نظریه موجی"
            ],
            "calculation_question_types": [
              "محاسبه E از λ یا f"
            ],
            "analytical_question_types": [
              "تحلیل اثر تغییر شدت و بسامد"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن hc = 1240 eV·nm",
              "تشخیص ندادن تفاوت شدت و بسامد"
            ],
            "misconceptions": [
              "شدت نور بر انرژی جنبشی فوتوالکترون‌ها تأثیر دارد."
            ],
            "difficult_parts": [
              "درک کوانتومی بودن نور",
              "استفاده از eV"
            ],
            "warning_points": [
              "انرژی فوتون فقط به بسامد بستگی دارد، نه به شدت."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه فیزیک کوانتومی.",
            "study_strategy": "تمرین با تبدیل واحد و محاسبه انرژی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t4_2"
          },
          "memory_support": {
            "memory_tips": "E = hf, hc = 1240 eV·nm.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نور مانند گلوله (فوتون) به فلز برخورد کرده و الکترون را بیرون می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۴-۱ (چشمه نور)",
              "تمرین ۴-۱",
              "شکل ۴-۱ و ۴-۲"
            ],
            "important_examples": [
              "محاسبه انرژی فوتون نور مرئی",
              "محاسبه تعداد فوتون‌ها"
            ],
            "real_life_examples": [
              "سلول‌های خورشیدی",
              "دوربین‌های دید در شب"
            ]
          }
        },
        {
          "id": "t4_2",
          "title": "طیف خطی و مدل اتمی بور",
          "core_knowledge": {
            "explanation": "طیف خطی گازها (طیف گسیلی و جذبی) خطوطی با طول موج‌های مشخص است که نشان‌دهنده کوانتیده بودن انرژی اتم‌هاست. مدل بور برای اتم هیدروژن: الکترون‌ها در مدارهای کوانتیده با انرژی‌های En = -13.6/n^2 eV حرکت می‌کنند. گسیل یا جذب فوتون با انتقال الکترون بین ترازها رخ می‌دهد: ΔE = hf.",
            "complete_definition": "طیف خطی اتم‌ها نشان می‌دهد که انرژی الکترون‌ها در اتم کوانتیده است. مدل بور: الکترون در اتم هیدروژن در مدارهای دایره‌ای با انرژی معین (En = -13.6/n^2 eV) حرکت می‌کند. با جهش الکترون بین ترازها، فوتونی با انرژی ΔE = |E_upper - E_lower| = hf گسیل یا جذب می‌شود.",
            "key_concepts": [
              "طیف خطی",
              "طیف گسیلی",
              "طیف جذبی",
              "مدل بور",
              "تراز انرژی",
              "عدد کوانتومی (n)",
              "انرژی یونش",
              "معادله ریدبرگ"
            ],
            "terminology": {
              "مدل بور": "مدلی که در آن الکترون‌ها در مدارهای کوانتیده حرکت می‌کنند.",
              "تراز انرژی": "سطح انرژی مجاز الکترون در اتم.",
              "عدد کوانتومی (n)": "عدد صحیح 1, 2, 3, ... که تراز انرژی را مشخص می‌کند.",
              "انرژی یونش": "انرژی لازم برای جدا کردن الکترون از اتم (13.6 eV برای هیدروژن)."
            },
            "formulas": {
              "انرژی تراز": "E_n = -13.6/n^2 eV",
              "انرژی فوتون": "ΔE = hf = hc/λ",
              "معادله ریدبرگ": "1/λ = R (1/n_L^2 - 1/n_U^2)"
            },
            "laws": null,
            "principles": [
              "الکترون‌ها فقط در مدارهای مجاز (کوانتیده) حرکت می‌کنند.",
              "در انتقال بین ترازها، فوتون گسیل یا جذب می‌شود."
            ],
            "processes": [
              "محاسبه انرژی فوتون در انتقال بین ترازها",
              "محاسبه طول موج با معادله ریدبرگ"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_1"
            ],
            "next_topics": [
              "t4_3",
              "t4_4"
            ],
            "concept_dependencies": [
              "نیاز به درک فوتون"
            ],
            "required_background": null,
            "builds_upon": [
              "اثر فوتوالکتریک"
            ],
            "enables_learning_of": [
              "لیزر",
              "فیزیک هسته‌ای"
            ]
          },
          "relationships": {
            "related_topics": [
              "لیزر"
            ],
            "similar_concepts": [
              "طیف اتمی"
            ],
            "differences": [
              "طیف خطی گسسته، طیف پیوسته پیوسته است."
            ],
            "frequently_confused_with": [
              "طیف پیوسته"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 8,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "محاسبه انرژی ترازها (En = -13.6/n^2)",
              "محاسبه انرژی و طول موج فوتون گسیل شده",
              "رسم نمودار تراز انرژی",
              "محاسبه انرژی یونش",
              "معادله ریدبرگ"
            ],
            "hidden_points": [
              "طیف جذبی و گسیلی مکمل یکدیگرند."
            ],
            "trick_points": [
              "سوالات با n های مختلف"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تحلیل انتقالات"
            ],
            "calculation_question_types": [
              "محاسبه E, λ"
            ],
            "analytical_question_types": [
              "تحلیل نمودار تراز انرژی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت منفی در E_n",
              "اشتباه در فرمول ΔE = E_upper - E_lower",
              "استفاده از n اشتباه در معادله ریدبرگ"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "محاسبه طول موج با معادله ریدبرگ",
              "درک نمودار تراز انرژی"
            ],
            "warning_points": [
              "انرژی یونش 13.6 eV = E∞ - E1 = 0 - (-13.6)"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین مبحث فیزیک اتمی.",
            "study_strategy": "تمرین با مدل بور و معادله ریدبرگ",
            "review_strategy": "مرور روزانه تا تسلط کامل",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t4_3"
          },
          "memory_support": {
            "memory_tips": "E_n = -13.6/n^2 eV",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نردبان انرژی اتم هیدروژن."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۴-۲ (اولین و دومین خط براکت)",
              "مثال ۴-۳ (کوتاه‌ترین و بلندترین طول موج پفوند)",
              "مثال ۴-۴ (دومین حالت برانگیخته)"
            ],
            "important_examples": [
              "محاسبه طول موج خط قرمز هیدروژن",
              "محاسبه انرژی یونش"
            ],
            "real_life_examples": [
              "المپ‌های نئونی",
              "طیف‌سنجی"
            ]
          }
        },
        {
          "id": "t4_3",
          "title": "لیزر",
          "core_knowledge": {
            "explanation": "لیزر (تقویت نور با گسیل القایی تابش) بر اساس گسیل القایی کار می‌کند. در گسیل القایی، یک فوتون ورودی، اتم برانگیخته را به تراز پایین‌تر واداشته و دو فوتون هم‌فاز، هم‌بسامد و هم‌جهت گسیل می‌کند. شرط وارونی جمعیت برای عملکرد لیزر ضروری است.",
            "complete_definition": "لیزر (Light Amplification by Stimulated Emission of Radiation) دستگاهی است که با استفاده از گسیل القایی، باریکه‌ای از نور هم‌فاز، هم‌بسامد و هم‌جهت تولید می‌کند. در گسیل القایی، یک فوتون با انرژی مناسب، اتم برانگیخته را تحریک کرده و دو فوتون مشابه گسیل می‌شوند. وارونی جمعیت (تعداد اتم‌های برانگیخته بیشتر از حالت پایه) برای تقویت نور لازم است.",
            "key_concepts": [
              "لیزر",
              "گسیل القایی",
              "گسیل خودبه‌خود",
              "وارونی جمعیت",
              "تراز شبه‌پایدار",
              "هم‌فاز",
              "هم‌بسامد"
            ],
            "terminology": {
              "گسیل القایی": "گسیل فوتون توسط یک اتم برانگیخته در اثر تحریک توسط فوتون ورودی",
              "وارونی جمعیت": "حالتی که تعداد اتم‌های برانگیخته بیشتر از تعداد اتم‌های حالت پایه است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در گسیل القایی، فوتون ورودی و گسیل شده هم‌فاز، هم‌بسامد و هم‌جهت هستند.",
              "برای لیزر، وارونی جمعیت و تراز شبه‌پایدار لازم است."
            ],
            "processes": [
              "توضیح عملکرد لیزر بر اساس گسیل القایی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_2"
            ],
            "next_topics": [
              "t4_5"
            ],
            "concept_dependencies": [
              "نیاز به درک گسیل فوتون"
            ],
            "required_background": null,
            "builds_upon": [
              "مدل بور"
            ],
            "enables_learning_of": [
              "کاربردهای لیزر"
            ]
          },
          "relationships": {
            "related_topics": [
              "مدل بور"
            ],
            "similar_concepts": [
              "گسیل خودبه‌خود"
            ],
            "differences": [
              "گسیل القایی با تحریک فوتون انجام می‌شود."
            ],
            "frequently_confused_with": [
              "گسیل خودبه‌خود"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 30,
            "exam_points": [
              "توضیح عملکرد لیزر",
              "تشخیص گسیل القایی",
              "شرط وارونی جمعیت"
            ],
            "hidden_points": [
              "تفاوت گسیل القایی و خودبه‌خود"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "توضیح"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل عملکرد لیزر"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص گسیل القایی و خودبه‌خود"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک وارونی جمعیت"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد مهم فیزیک کوانتومی.",
            "study_strategy": "مطالعه شکل‌ها و توضیح عملکرد",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t4_5"
          },
          "memory_support": {
            "memory_tips": "لیزر = گسیل القایی = نور هم‌فاز.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "فوتون‌ها مانند سربازانی که هم‌قدم راهپیمایی می‌کنند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴-۱۸ (گسیل القایی)",
              "شکل ۴-۱۹ (وارونی جمعیت)",
              "لیزر He-Ne"
            ],
            "important_examples": [
              "لیزر هلیم-نئون"
            ],
            "real_life_examples": [
              "برش لیزر",
              "جراحی با لیزر",
              "خواننده CD"
            ]
          }
        },
        {
          "id": "t4_4",
          "title": "ساختار هسته و ایزوتوپ‌ها",
          "core_knowledge": {
            "explanation": "هسته اتم از پروتون‌ها و نوترون‌ها (نوکلئون‌ها) تشکیل شده است. عدد اتمی (Z) تعداد پروتون‌ها و عدد جرمی (A) تعداد کل نوکلئون‌هاست. ایزوتوپ‌ها اتم‌های یک عنصر با تعداد نوترون متفاوت هستند. نیروی هسته‌ای نیروی جاذبه‌ای است که نوکلئون‌ها را در هسته کنار هم نگه می‌دارد.",
            "complete_definition": "هسته اتم از پروتون‌ها (بار مثبت) و نوترون‌ها (بدون بار) تشکیل شده است. عدد اتمی (Z) = تعداد پروتون‌ها. عدد جرمی (A) = تعداد پروتون‌ها + تعداد نوترون‌ها. ایزوتوپ‌ها: هسته‌هایی با Z یکسان و A متفاوت. نیروی هسته‌ای، نیروی جاذبه‌ای قوی است که نوکلئون‌ها را در هسته نگه می‌دارد.",
            "key_concepts": [
              "هسته",
              "پروتون",
              "نوترون",
              "نوکلئون",
              "عدد اتمی (Z)",
              "عدد جرمی (A)",
              "ایزوتوپ",
              "نیروی هسته‌ای",
              "کاستی جرم",
              "انرژی بستگی"
            ],
            "terminology": {
              "عدد اتمی (Z)": "تعداد پروتون‌های هسته",
              "عدد جرمی (A)": "تعداد کل نوکلئون‌ها",
              "ایزوتوپ": "هسته‌هایی با Z یکسان و A متفاوت",
              "نیروی هسته‌ای": "نیروی جاذبه‌ای قوی بین نوکلئون‌ها"
            },
            "formulas": {
              "A": "Z + N"
            },
            "laws": null,
            "principles": [
              "نیروی هسته‌ای بسیار قوی‌تر از نیروی الکتریکی است.",
              "ایزوتوپ‌ها خواص شیمیایی یکسان دارند."
            ],
            "processes": [
              "محاسبه تعداد نوترون‌ها از A و Z",
              "تشخیص ایزوتوپ‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار اتم (شیمی دهم)"
            ],
            "next_topics": [
              "t4_5"
            ],
            "concept_dependencies": [
              "نیاز به درک اتم"
            ],
            "required_background": null,
            "builds_upon": [
              "ساختار اتم"
            ],
            "enables_learning_of": [
              "پرتوزایی"
            ]
          },
          "relationships": {
            "related_topics": [
              "شیمی (ایزوتوپ‌ها)"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "یون‌ها"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص Z, A, N از نماد هسته",
              "تشخیص ایزوتوپ‌ها",
              "شناسایی عنصر از Z"
            ],
            "hidden_points": [
              "نیروی هسته‌ای"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص ایزوتوپ"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه N از A-Z"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در محاسبه تعداد نوترون‌ها (A-Z)",
              "تشخیص ندادن ایزوتوپ‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": [
              "Z = تعداد پروتون‌ها = عدد اتمی"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه فیزیک هسته‌ای.",
            "study_strategy": "تمرین با نمادهای مختلف هسته‌ها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_5"
          },
          "memory_support": {
            "memory_tips": "A = Z + N",
            "mnemonic_devices": null,
            "visual_imagination_tips": "هسته مانند یک توپ کوچک از پروتون و نوترون."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۴-۲ (ویژگی‌های ذرات)",
              "جدول ۴-۳ (ایزوتوپ‌ها)",
              "تمرین ۴-۴"
            ],
            "important_examples": [
              "کربن-12 و کربن-14",
              "اورانیم-235 و اورانیم-238"
            ],
            "real_life_examples": [
              "تاریخ‌گذاری کربن-14"
            ]
          }
        },
        {
          "id": "t4_5",
          "title": "پرتوزایی طبیعی و نیمه‌عمر",
          "core_knowledge": {
            "explanation": "پرتوزایی طبیعی: واپاشی خودبه‌خودی هسته‌های ناپایدار با گسیل ذرات α (هسته هلیم)، β (الکترون) یا γ (فوتون پرانرژی). نیمه‌عمر (T1/2) مدت زمانی است که نیمی از هسته‌های یک نمونه پرتوزا واپاشی می‌کنند. تعداد هسته‌های باقی‌مانده: N = N0 (1/2)^n که n = t / T1/2.",
            "complete_definition": "پرتوزایی طبیعی، فرایند واپاشی خودبه‌خودی هسته‌های ناپایدار با گسیل ذرات α (4He)، β (الکترون) و γ (فوتون) است. نیمه‌عمر (T1/2) مدت زمانی است که طی آن نیمی از هسته‌های یک نمونه پرتوزا واپاشی می‌کنند. تعداد هسته‌های باقی‌مانده: N = N0 (1/2)^(t/T1/2).",
            "key_concepts": [
              "پرتوزایی طبیعی",
              "واپاشی α",
              "واپاشی β",
              "واپاشی γ",
              "نیمه‌عمر (T1/2)",
              "ذره آلفا",
              "ذره بتا",
              "پرتو گاما"
            ],
            "terminology": {
              "واپاشی α": "گسیل ذره α (4He)",
              "واپاشی β": "گسیل الکترون (تبدیل نوترون به پروتون)",
              "واپاشی γ": "گسیل فوتون پرانرژی (هسته برانگیخته به پایه)",
              "نیمه‌عمر": "زمان کاهش تعداد هسته‌ها به نصف"
            },
            "formulas": {
              "واپاشی α": "A_Z X → A-4_{Z-2} Y + 4_2 He",
              "واپاشی β": "A_Z X → A_{Z+1} Y + e^-",
              "نیمه‌عمر": "N = N0 (1/2)^n, n = t/T1/2"
            },
            "laws": null,
            "principles": [
              "در واپاشی α، Z دو واحد و A چهار واحد کاهش می‌یابد.",
              "در واپاشی β، Z یک واحد افزایش و A ثابت می‌ماند.",
              "نیمه‌عمر برای هر ایزوتوپ ثابت است."
            ],
            "processes": [
              "نوشتن معادلات واپاشی",
              "محاسبه تعداد هسته‌های باقی‌مانده"
            ],
            "mechanisms": null,
            "reaction_types": [
              "واپاشی هسته‌ای"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_4"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک ساختار هسته"
            ],
            "required_background": null,
            "builds_upon": [
              "ساختار هسته"
            ],
            "enables_learning_of": [
              "کاربردهای پرتوزایی"
            ]
          },
          "relationships": {
            "related_topics": [
              "شیمی (واپاشی)"
            ],
            "similar_concepts": [
              "واکنش هسته‌ای"
            ],
            "differences": [
              "پرتوزایی طبیعی خودبه‌خودی است."
            ],
            "frequently_confused_with": [
              "واکنش هسته‌ای"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 7,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 60,
            "exam_points": [
              "نوشتن معادلات واپاشی α, β, γ",
              "تشخیص تغییرات Z و A در واپاشی",
              "محاسبه نیمه‌عمر",
              "محاسبه تعداد هسته‌های باقی‌مانده"
            ],
            "hidden_points": [
              "رابطه بین واپاشی α و β"
            ],
            "trick_points": [
              "سوالات مربوط به محاسبه n (تعداد نیمه‌عمرها)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص نوع واپاشی"
            ],
            "calculation_question_types": [
              "محاسبه N, n, t"
            ],
            "analytical_question_types": [
              "تحلیل زنجیره واپاشی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تغییر Z و A در واپاشی α و β",
              "فراموش کردن فرمول N = N0 (1/2)^n"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "نوشتن معادلات واپاشی",
              "تشخیص نوع واپاشی"
            ],
            "warning_points": [
              "در واپاشی α: Z-2, A-4. در واپاشی β: Z+1, A ثابت."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در پزشکی و باستان‌شناسی.",
            "study_strategy": "تمرین با معادلات واپاشی و محاسبات نیمه‌عمر",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "α: Z-2, A-4. β: Z+1, A ثابت.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نیمه‌عمر مانند پایین آمدن پله‌ها (هر پله نصف مقدار قبلی)."
          },
          "examples": {
            "textbook_examples": [
              "واپاشی اورانیم-238 (α)",
              "مثال ۴-۵ (ید-131)",
              "جدول واپاشی ها"
            ],
            "important_examples": [
              "واپاشی α اورانیم",
              "واپاشی β",
              "تاریخ‌گذاری کربن-14"
            ],
            "real_life_examples": [
              "آشکارساز دود",
              "پرتودرمانی",
              "تاریخ‌گذاری"
            ]
          }
        }
      ]
    }
  ]
};

export default { PHYSICS_12_KB };
