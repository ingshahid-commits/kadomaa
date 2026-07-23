/**
 * physics11.js  —  Kadoma knowledge base
 * -----------------------------------------------------------------------
 * Source: user-provided physics knowledge-graph export (phy11.txt),
 * converted to the same shape as chemistry10/11/12.js (knowledge_base[] of
 * chapters, each with topics[] carrying learning_metadata.importance_score)
 * so it works with the existing curriculumAdapter.js unchanged. Topics were
 * grouped into their chapter by matching the topic id prefix (e.g. "t2_3"
 * -> chapter_number 2) to chapter_number - every field preserved verbatim,
 * only the grouping changed.
 * -----------------------------------------------------------------------
 */
export const PHYSICS_11_KB = {
  "textbook_metadata": {
    "title": "فیزیک (پایه یازدهم)",
    "grade": "پایه یازدهم",
    "branch": "ریاضی/تجربی"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "الکتریسیته ساکن",
      "chapter_objectives": [
        "آشنایی با بار الکتریکی، قانون کولن و محاسبه نیروی الکتریکی",
        "درک مفهوم میدان الکتریکی و محاسبه آن برای بارهای نقطه‌ای",
        "بررسی انرژی پتانسیل الکتریکی و اختلاف پتانسیل",
        "آشنایی با خازن‌ها، ظرفیت و انرژی ذخیره شده در آنها"
      ],
      "estimated_total_learning_time": "PT14H",
      "overall_difficulty": 7,
      "overall_importance": 9,
      "prerequisite_chapters": [
        "فیزیک دهم",
        "ریاضیات"
      ],
      "next_chapters": [
        2,
        3
      ],
      "topics": [
        {
          "id": "t1_1",
          "title": "بار الکتریکی و قانون کولن",
          "core_knowledge": {
            "explanation": "بار الکتریکی یک ویژگی بنیادی ماده است که در دو نوع مثبت و منفی وجود دارد. بارهای همنام یکدیگر را دفع و بارهای ناهمنام یکدیگر را جذب می‌کنند. بار الکتریکی کوانتیده است و مضربی از بار بنیادی (e = 1.6×10^-19 C) است. قانون کولن نیروی الکتریکی بین دو بار نقطه‌ای را محاسبه می‌کند.",
            "complete_definition": "قانون کولن بیان می‌کند که اندازه نیروی الکتریکی بین دو بار نقطه‌ای با حاصلضرب بزرگی بارها نسبت مستقیم و با مربع فاصله آنها نسبت وارون دارد: F = k|q1q2|/r^2. این نیرو در راستای خط واصل دو بار است و برای بارهای همنام دافعه و برای ناهمنام جاذبه است.",
            "key_concepts": [
              "بار الکتریکی",
              "بار مثبت",
              "بار منفی",
              "قانون کولن",
              "ثابت الکتروستاتیکی (k)",
              "کوانتیده بودن بار",
              "بار بنیادی (e)"
            ],
            "terminology": {
              "بار بنیادی (e)": "کوچکترین مقدار بار الکتریکی که برابر با 1.6×10^-19 C است.",
              "کوانتیده بودن بار": "بار الکتریکی فقط به صورت مضرب صحیحی از بار بنیادی وجود دارد (q = ne).",
              "ثابت کولن (k)": "ثابتی با مقدار تقریبی 9×10^9 N·m²/C²"
            },
            "formulas": {
              "قانون کولن": "F = k|q1q2|/r^2",
              "کوانتیده بودن بار": "q = ne"
            },
            "laws": [
              "قانون کولن"
            ],
            "principles": [
              "بارهای همنام دافع و ناهمنام جاذب هستند.",
              "بار الکتریکی در یک دستگاه منزوی پایسته است."
            ],
            "processes": [
              "محاسبه نیروی الکتریکی بین دو یا چند بار"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "نیرو (فیزیک دهم)",
              "مفهوم بار (علوم هشتم)"
            ],
            "next_topics": [
              "t1_2",
              "t1_3",
              "t1_4"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "میدان الکتریکی",
              "انرژی پتانسیل الکتریکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "نیروی گرانشی"
            ],
            "similar_concepts": [
              "نیروی مغناطیسی"
            ],
            "differences": [
              "نیروی الکتریکی می‌تواند هم جاذبه و هم دافعه باشد، اما گرانشی فقط جاذبه است."
            ],
            "frequently_confused_with": [
              "نیروی گرانشی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 9,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "بیان قانون کولن",
              "محاسبه نیروی الکتریکی",
              "تشخیص کوانتیده بودن بار",
              "محاسبه تعداد الکترون‌ها"
            ],
            "hidden_points": [
              "مقایسه نیروی الکتریکی با گرانشی"
            ],
            "trick_points": [
              "سوالات با چند بار در یک خط یا مثلث"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان قانون",
              "تشخیص نوع بار"
            ],
            "calculation_question_types": [
              "محاسبه نیروی الکتریکی",
              "محاسبه بار خالص"
            ],
            "analytical_question_types": [
              "تحلیل نیروی خالص"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن مقدار مطلق بارها در قانون کولن",
              "اشتباه در جهت نیرو (جاذبه یا دافعه)",
              "عدم تشخیص اینکه بار الکتریکی کوانتیده است"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تعیین جهت نیروی خالص در سیستم‌های چندباره"
            ],
            "warning_points": [
              "در قانون کولن، بارها را به صورت مقدار مطلق قرار دهید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم بنیادی الکتریسیته.",
            "study_strategy": "تمرین محاسبه نیروی الکتریکی در پیکربندی‌های مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t1_2"
          },
          "memory_support": {
            "memory_tips": "F = k|q1q2|/r^2",
            "mnemonic_devices": null,
            "visual_imagination_tips": "بارهای همنام مانند آهنرباهای همنام دفع و ناهمنام جذب می‌کنند."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۳ (محاسبه نیروی بین بارها)",
              "مثال ۱-۴ (نیروی خالص)",
              "تمرین ۱-۱ (شمار الکترون‌ها)"
            ],
            "important_examples": [
              "نیروی الکتریکی در اتم هیدروژن",
              "نیروی دافعه بین پروتون‌ها در هسته"
            ],
            "real_life_examples": [
              "آذرخش",
              "الکتریسیته ساکن"
            ]
          }
        },
        {
          "id": "t1_2",
          "title": "میدان الکتریکی",
          "core_knowledge": {
            "explanation": "میدان الکتریکی خاصیتی در فضای اطراف یک بار الکتریکی است که به بارهای دیگر نیرو وارد می‌کند. میدان الکتریکی در یک نقطه به صورت نیروی وارد بر واحد بار مثبت در آن نقطه تعریف می‌شود: E = F/q0. میدان الکتریکی حاصل از یک بار نقطه‌ای از رابطه E = k|q|/r^2 به دست می‌آید و خطوط میدان از بار مثبت خارج و به بار منفی وارد می‌شوند.",
            "complete_definition": "میدان الکتریکی یک کمیت برداری است که در هر نقطه از فضا به عنوان نیروی وارد بر واحد بار مثبت (بار آزمون) در آن نقطه تعریف می‌شود: E = F/q0. میدان الکتریکی ناشی از بار نقطه‌ای q در فاصله r برابر E = k|q|/r^2 است و جهت آن برای بار مثبت دور از بار و برای بار منفی به سمت بار است.",
            "key_concepts": [
              "میدان الکتریکی",
              "بار آزمون",
              "خطوط میدان",
              "میدان یکنواخت",
              "برهم‌نهی میدان‌ها"
            ],
            "terminology": {
              "بار آزمون": "بار مثبت کوچکی که برای اندازه‌گیری میدان به کار می‌رود.",
              "خطوط میدان الکتریکی": "خطوط فرضی که جهت میدان را نشان می‌دهند و از بار مثبت شروع و به بار منفی ختم می‌شوند.",
              "میدان یکنواخت": "میدانی که در آن جهت و اندازه میدان در همه نقاط یکسان است."
            },
            "formulas": {
              "تعریف میدان": "E = F/q0",
              "میدان بار نقطه‌ای": "E = k|q|/r^2",
              "برهم‌نهی میدان‌ها": "E_total = E1 + E2 + ... (برداری)"
            },
            "laws": null,
            "principles": [
              "میدان الکتریکی یک کمیت برداری است.",
              "جهت میدان در هر نقطه، جهت نیروی وارد بر بار مثبت است."
            ],
            "processes": [
              "محاسبه میدان الکتریکی حاصل از یک یا چند بار",
              "رسم خطوط میدان"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_1",
              "بردارها"
            ],
            "next_topics": [
              "t1_3"
            ],
            "concept_dependencies": [
              "نیاز به درک قانون کولن"
            ],
            "required_background": null,
            "builds_upon": [
              "قانون کولن"
            ],
            "enables_learning_of": [
              "انرژی پتانسیل الکتریکی",
              "خازن‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "میدان مغناطیسی"
            ],
            "similar_concepts": [
              "میدان گرانشی"
            ],
            "differences": [
              "میدان الکتریکی می‌تواند از بار مثبت یا منفی ناشی شود."
            ],
            "frequently_confused_with": [
              "نیروی الکتریکی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 8,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "تعریف میدان الکتریکی",
              "محاسبه میدان بار نقطه‌ای",
              "برهم‌نهی میدان‌ها",
              "رسم خطوط میدان"
            ],
            "hidden_points": [
              "تشخیص میدان یکنواخت"
            ],
            "trick_points": [
              "سوالات با چند بار در نقاط مختلف"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "رسم خطوط"
            ],
            "calculation_question_types": [
              "محاسبه میدان الکتریکی"
            ],
            "analytical_question_types": [
              "تحلیل برهم‌نهی میدان‌ها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در جهت میدان (برای بار منفی)",
              "فراموش کردن ماهیت برداری میدان در برهم‌نهی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "جمع برداری میدان‌ها",
              "رسم خطوط میدان"
            ],
            "warning_points": [
              "جهت میدان برای بار مثبت دور از بار و برای بار منفی به سمت بار است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم کلیدی در الکتریسیته.",
            "study_strategy": "تمرین محاسبه میدان در نقاط مختلف اطراف بارها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t1_3"
          },
          "memory_support": {
            "memory_tips": "E = k|q|/r^2, جهت میدان از مثبت به منفی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "خطوط میدان مانند رشته‌های نامرئی از بار مثبت به منفی کشیده می‌شوند."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۵ (میدان حاصل از بار)",
              "مثال ۱-۷ (برهم‌نهی میدان‌ها)",
              "مثال ۱-۸"
            ],
            "important_examples": [
              "میدان الکتریکی در اتم هیدروژن",
              "میدان الکتریکی دو بار"
            ],
            "real_life_examples": [
              "میدان در اطراف کره باردار (مولد وان دوگراف)"
            ]
          }
        },
        {
          "id": "t1_3",
          "title": "انرژی پتانسیل الکتریکی و اختلاف پتانسیل",
          "core_knowledge": {
            "explanation": "انرژی پتانسیل الکتریکی، انرژی ذخیره شده در یک سامانه بارها به دلیل موقعیت آنهاست. اختلاف پتانسیل الکتریکی (ولتاژ) بین دو نقطه، تغییر انرژی پتانسیل به ازای واحد بار است: ΔV = ΔU/q. ولتاژ در مدارها توسط باتری‌ها تأمین می‌شود و یکای آن ولت (V) است.",
            "complete_definition": "انرژی پتانسیل الکتریکی (U) انرژی ذخیره شده در یک سامانه بارهاست. اختلاف پتانسیل الکتریکی بین دو نقطه، انرژی پتانسیل الکتریکی به ازای واحد بار است: ΔV = ΔU/q. یکای اختلاف پتانسیل، ولت (V) است که برابر 1 ژول بر کولن است. باتری‌ها اختلاف پتانسیل را در مدار برقرار می‌کنند.",
            "key_concepts": [
              "انرژی پتانسیل الکتریکی",
              "اختلاف پتانسیل (ولتاژ)",
              "ولت",
              "باتری",
              "پایانه مثبت و منفی"
            ],
            "terminology": {
              "انرژی پتانسیل الکتریکی": "انرژی ذخیره شده در آرایش بارها",
              "اختلاف پتانسیل": "کار انجام شده بر واحد بار برای جابه‌جایی بین دو نقطه"
            },
            "formulas": {
              "اختلاف پتانسیل": "ΔV = ΔU/q",
              "پتانسیل": "V = U/q"
            },
            "laws": null,
            "principles": [
              "اختلاف پتانسیل مستقل از بار آزمون است.",
              "در حرکت در جهت میدان، پتانسیل کاهش می‌یابد."
            ],
            "processes": [
              "محاسبه انرژی پتانسیل و اختلاف پتانسیل"
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
              "نیاز به درک میدان الکتریکی"
            ],
            "required_background": null,
            "builds_upon": [
              "میدان الکتریکی"
            ],
            "enables_learning_of": [
              "خازن‌ها",
              "مدارهای الکتریکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انرژی پتانسیل گرانشی"
            ],
            "similar_concepts": [],
            "differences": [
              "انرژی پتانسیل الکتریکی به بار و میدان بستگی دارد."
            ],
            "frequently_confused_with": [
              "نیروی الکتریکی"
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
              "تعریف اختلاف پتانسیل",
              "محاسبه تغییر انرژی پتانسیل",
              "محاسبه تندی از روی اختلاف پتانسیل (قضیه کار-انرژی)"
            ],
            "hidden_points": [
              "رابطه ΔV و E در میدان یکنواخت"
            ],
            "trick_points": [
              "سوالات با میدان یکنواخت"
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
              "محاسبه ΔU",
              "محاسبه تندی"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت بار در محاسبه ΔU",
              "اشتباه در تشخیص جهت تغییر پتانسیل"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "رابطه بین کار، انرژی پتانسیل و میدان"
            ],
            "warning_points": [
              "ΔU = qΔV, علامت q مهم است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در مدارهای الکتریکی.",
            "study_strategy": "تمرین محاسبه انرژی و اختلاف پتانسیل",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_4"
          },
          "memory_support": {
            "memory_tips": "ΔV = ΔU/q, ولت = ژول/کولن.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "اختلاف پتانسیل مانند اختلاف ارتفاع است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۹ (پروتون در میدان)",
              "جدول ۲-۱ (ولتاژهای متداول)"
            ],
            "important_examples": [
              "انرژی پتانسیل الکترون در میدان یکنواخت"
            ],
            "real_life_examples": [
              "باتری خودرو (12 ولت)",
              "برق خانگی (220 ولت)"
            ]
          }
        },
        {
          "id": "t1_4",
          "title": "خازن‌ها و ظرفیت الکتریکی",
          "core_knowledge": {
            "explanation": "خازن وسیله‌ای برای ذخیره بار و انرژی الکتریکی است که از دو رسانا (صفحه) تشکیل شده و با عایق (دی‌الکتریک) از هم جدا شده‌اند. ظرفیت خازن (C) نسبت بار به اختلاف پتانسیل است: C = Q/V. ظرفیت خازن تخت به مساحت صفحه‌ها، فاصله و ثابت دی‌الکتریک بستگی دارد: C = κε0 A/d. خازن‌ها انرژی را در میدان الکتریکی خود ذخیره می‌کنند.",
            "complete_definition": "خازن قطعه‌ای الکترونیکی است که می‌تواند بار و انرژی الکتریکی را ذخیره کند. ظرفیت خازن (C) به صورت نسبت بار ذخیره شده (Q) به اختلاف پتانسیل (V) تعریف می‌شود: C = Q/V. ظرفیت یک خازن تخت با رابطه C = κε0 A/d داده می‌شود. انرژی ذخیره شده در خازن برابر U = 1/2 CV^2 = 1/2 QV = Q^2/(2C) است.",
            "key_concepts": [
              "خازن",
              "ظرفیت (C)",
              "خازن تخت",
              "دی‌الکتریک",
              "ثابت دی‌الکتریک (κ)",
              "انرژی خازن",
              "فاراد"
            ],
            "terminology": {
              "ظرفیت خازن": "نسبت بار به ولتاژ (C = Q/V)",
              "دی‌الکتریک": "ماده عایق بین صفحات خازن",
              "ثابت دی‌الکتریک (κ)": "نسبت ظرفیت خازن با دی‌الکتریک به خازن بدون آن"
            },
            "formulas": {
              "ظرفیت": "C = Q/V",
              "خازن تخت": "C = κε0 A/d",
              "انرژی خازن": "U = 1/2 CV^2 = 1/2 QV = Q^2/(2C)"
            },
            "laws": null,
            "principles": [
              "ظرفیت خازن به هندسه و ماده عایق بستگی دارد، نه به بار یا ولتاژ.",
              "با افزایش فاصله صفحات ظرفیت کاهش می‌یابد."
            ],
            "processes": [
              "محاسبه ظرفیت خازن تخت",
              "محاسبه انرژی ذخیره شده"
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
              "نیاز به درک پتانسیل"
            ],
            "required_background": null,
            "builds_upon": [
              "انرژی پتانسیل"
            ],
            "enables_learning_of": [
              "مدارهای الکترونیکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "مدارهای الکتریکی"
            ],
            "similar_concepts": [
              "باتری"
            ],
            "differences": [
              "خازن انرژی را سریعاً تخلیه می‌کند، باتری به آرامی."
            ],
            "frequently_confused_with": [
              "باتری"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
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
              "تعریف ظرفیت",
              "محاسبه ظرفیت خازن تخت",
              "اثر دی‌الکتریک",
              "انرژی خازن"
            ],
            "hidden_points": [
              "یکاهای فاراد",
              "استفاده از پیشوندها (pF, µF)"
            ],
            "trick_points": [
              "سوالات با تغییر فاصله یا دی‌الکتریک"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تحلیل"
            ],
            "calculation_question_types": [
              "محاسبه C, Q, V, U"
            ],
            "analytical_question_types": [
              "اثر تغییر پارامترها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن ثابت دی‌الکتریک",
              "اشتباه در یکاها (میکروفاراد، پیکوفاراد)"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "محاسبه ظرفیت با دی‌الکتریک"
            ],
            "warning_points": [
              "ظرفیت خازن به Q و V بستگی ندارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "قطعه مهم در الکترونیک.",
            "study_strategy": "تمرین محاسبات ظرفیت و انرژی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t2_1"
          },
          "memory_support": {
            "memory_tips": "C = Q/V, C = κε0 A/d, U = 1/2 CV^2.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "خازن مانند یک انبار کوچک برای بار و انرژی است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۱-۱۳ (ظرفیت خازن)",
              "مثال ۱-۱۴ (کلید صفحه کلید)",
              "مثال ۱-۱۵ (انرژی خازن)",
              "مثال ۱-۱۶ (دفیبریلاتور)"
            ],
            "important_examples": [
              "خازن صفحه کلید رایانه",
              "خازن در دستگاه دفیبریلاتور"
            ],
            "real_life_examples": [
              "فلاش دوربین",
              "صفحه کلید رایانه"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "جریان الکتریکی و مدارهای جریان مستقیم",
      "chapter_objectives": [
        "درک مفهوم جریان الکتریکی و محاسبه آن",
        "بررسی مقاومت الکتریکی و قانون اهم",
        "آشنایی با عوامل مؤثر بر مقاومت و محاسبه آن",
        "بررسی نیروی محرکه الکتریکی، مدارها و ترکیب مقاومت‌ها",
        "محاسبه توان الکتریکی در مدارها"
      ],
      "estimated_total_learning_time": "PT16H",
      "overall_difficulty": 8,
      "overall_importance": 10,
      "prerequisite_chapters": [
        1
      ],
      "next_chapters": [
        3
      ],
      "topics": [
        {
          "id": "t2_1",
          "title": "جریان الکتریکی و مقاومت",
          "core_knowledge": {
            "explanation": "جریان الکتریکی شارش خالص بار در یک رسانا است که با I = Δq/Δt اندازه‌گیری می‌شود. مقاومت الکتریکی (R) مخالفت رسانا با عبور جریان است و از رابطه R = V/I (قانون اهم) برای رساناهای اهمی پیروی می‌کند. مقاومت الکتریکی به طول و سطح مقطع رسانا و جنس آن بستگی دارد: R = ρ L/A.",
            "complete_definition": "جریان الکتریکی (I) میزان شارش بار الکتریکی از یک سطح مقطع است: I = Δq/Δt. یکای آن آمپر (A) است. مقاومت الکتریکی (R) نسبت اختلاف پتانسیل به جریان است: R = V/I. مقاومت سیم به طول (L)، سطح مقطع (A) و مقاومت ویژه (ρ) ماده بستگی دارد: R = ρ L/A.",
            "key_concepts": [
              "جریان الکتریکی (I)",
              "آمپر",
              "مقاومت الکتریکی (R)",
              "اهم",
              "قانون اهم",
              "مقاومت ویژه (ρ)",
              "رسانا",
              "عایق",
              "نیم‌رسانا"
            ],
            "terminology": {
              "جریان الکتریکی": "شارش بار در واحد زمان",
              "مقاومت الکتریکی": "ممانعت رسانا از عبور جریان",
              "رسانای اهمی": "رسانایی که از قانون اهم پیروی می‌کند (V/I ثابت است)."
            },
            "formulas": {
              "جریان": "I = Δq/Δt",
              "قانون اهم": "R = V/I",
              "مقاومت": "R = ρ L/A"
            },
            "laws": [
              "قانون اهم"
            ],
            "principles": [
              "مقاومت به دما بستگی دارد (با افزایش دما، مقاومت فلزات زیاد می‌شود)."
            ],
            "processes": [
              "محاسبه جریان، مقاومت و اختلاف پتانسیل"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_3"
            ],
            "next_topics": [
              "t2_2",
              "t2_3"
            ],
            "concept_dependencies": [
              "نیاز به درک اختلاف پتانسیل"
            ],
            "required_background": null,
            "builds_upon": [
              "الکتریسیته"
            ],
            "enables_learning_of": [
              "مدارهای الکتریکی",
              "توان"
            ]
          },
          "relationships": {
            "related_topics": [
              "مدارهای الکتریکی"
            ],
            "similar_concepts": [
              "هدایت الکتریکی"
            ],
            "differences": [
              "مقاومت وارون هدایت است."
            ],
            "frequently_confused_with": [
              "مقاومت ویژه"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 9,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "تعریف جریان",
              "محاسبه جریان از بار و زمان",
              "قانون اهم",
              "محاسبه مقاومت",
              "عوامل مؤثر بر مقاومت"
            ],
            "hidden_points": [
              "تشخیص رسانای اهمی از روی نمودار V-I"
            ],
            "trick_points": [
              "سوالات با یکاهای مختلف (mAh)"
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
              "محاسبه I, V, R",
              "محاسبه مقاومت از ρ, L, A"
            ],
            "analytical_question_types": [
              "تحلیل نمودار I-V"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در یکاها (mA به A)",
              "فراموش کردن قانون اهم",
              "اشتباه در فرمول مقاومت (R = ρL/A)"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص رسانای اهمی"
            ],
            "warning_points": [
              "قانون اهم فقط برای رساناهای اهمی برقرار است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه مدارهای الکتریکی.",
            "study_strategy": "تمرین محاسبات جریان و مقاومت",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "I = Δq/Δt, V = IR, R = ρL/A.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "جریان مانند جریان آب در لوله و مقاومت مانند باریک شدن لوله است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۱ (باتری ماشین حساب)",
              "مثال ۲-۲ (المل چراغ قوه)",
              "مثال ۲-۳ (اجاق برقی)"
            ],
            "important_examples": [
              "محاسبه جریان از روی بار و زمان",
              "محاسبه مقاومت با قانون اهم"
            ],
            "real_life_examples": [
              "آمپر باتری (Ah)",
              "مقاومت الکتریکی بدن"
            ]
          }
        },
        {
          "id": "t2_2",
          "title": "نیروی محرکه الکتریکی و مدارهای ساده",
          "core_knowledge": {
            "explanation": "منبع نیروی محرکه الکتریکی (مانند باتری) با انجام کار بر روی بارها، جریان را در مدار برقرار می‌کند. نیروی محرکه (emf) برابر با اختلاف پتانسیل دو سر منبع در حالت مدار باز است. منابع واقعی دارای مقاومت داخلی (r) هستند و اختلاف پتانسیل دو سر آنها V = ε - Ir است. جریان در مدار ساده از I = ε/(R+r) به دست می‌آید.",
            "complete_definition": "نیروی محرکه الکتریکی (emf) انرژی‌ای است که منبع به ازای هر واحد بار به بارها می‌دهد. یکای آن ولت (V) است. باتری‌های واقعی مقاومت داخلی (r) دارند. اختلاف پتانسیل پایانه‌های باتری V = ε - Ir است. در مدار ساده، I = ε/(R+r).",
            "key_concepts": [
              "نیروی محرکه الکتریکی (emf)",
              "مقاومت داخلی (r)",
              "مدار بسته",
              "اختلاف پتانسیل پایانه‌ها"
            ],
            "terminology": {
              "نیروی محرکه (emf)": "کار انجام شده بر واحد بار توسط منبع",
              "مقاومت داخلی": "مقاومت درون منبع"
            },
            "formulas": {
              "اختلاف پتانسیل پایانه‌ها": "V = ε - Ir",
              "جریان مدار": "I = ε/(R+r)"
            },
            "laws": null,
            "principles": [
              "در باتری‌های نو، مقاومت داخلی کم است.",
              "در باتری‌های فرسوده، مقاومت داخلی زیاد است."
            ],
            "processes": [
              "محاسبه جریان در مدار با باتری واقعی",
              "محاسبه اختلاف پتانسیل دو سر باتری"
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
              "نیاز به درک مقاومت"
            ],
            "required_background": null,
            "builds_upon": [
              "مقاومت"
            ],
            "enables_learning_of": [
              "مدارهای پیشرفته"
            ]
          },
          "relationships": {
            "related_topics": [
              "مدارهای الکتریکی"
            ],
            "similar_concepts": [
              "منبع ولتاژ آرمانی"
            ],
            "differences": [
              "منبع واقعی مقاومت داخلی دارد."
            ],
            "frequently_confused_with": [
              "اختلاف پتانسیل"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "محاسبه جریان با مقاومت داخلی",
              "محاسبه اختلاف پتانسیل پایانه‌ها",
              "شناخت اثر مقاومت داخلی"
            ],
            "hidden_points": [
              "اختلاف پتانسیل پایانه‌ها کمتر از emf در مدار بسته است."
            ],
            "trick_points": [
              "سوالات با مدارهای دارای مقاومت داخلی"
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
              "محاسبه I",
              "محاسبه V"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن مقاومت داخلی در محاسبه جریان",
              "تشخیص ندادن V پایانه‌ها با emf"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص اختلاف بین emf و V"
            ],
            "warning_points": [
              "در مدار بسته، V = ε - Ir < ε"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مدل واقعی باتری.",
            "study_strategy": "تمرین محاسبات با باتری واقعی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_3"
          },
          "memory_support": {
            "memory_tips": "I = ε/(R+r), V = ε - Ir.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مقاومت داخلی مانند یک مقاومت مخفی درون باتری است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۴ (مدار با مقاومت داخلی)",
              "فعالیت اندازه‌گیری مقاومت داخلی"
            ],
            "important_examples": [
              "مدار ساده با باتری و مقاومت"
            ],
            "real_life_examples": [
              "باتری نو و فرسوده",
              "ماهی‌های الکتریکی"
            ]
          }
        },
        {
          "id": "t2_3",
          "title": "توان الکتریکی",
          "core_knowledge": {
            "explanation": "توان الکتریکی آهنگ مصرف یا تولید انرژی الکتریکی است: P = IV. توان مصرفی در یک مقاومت به صورت P = IV = I^2R = V^2/R محاسبه می‌شود. یکای توان، وات (W) است. انرژی مصرفی از حاصلضرب توان در زمان به دست می‌آید که معمولاً بر حسب کیلووات-ساعت (kWh) بیان می‌شود.",
            "complete_definition": "توان الکتریکی (P) نرخ تبدیل انرژی الکتریکی به شکل‌های دیگر انرژی است: P = IV. یکای آن وات (W = J/s) است. در مقاومت‌ها، توان مصرفی برابر P = I^2R = V^2/R است. انرژی الکتریکی مصرفی برابر E = Pt است که بر حسب کیلووات-ساعت (kWh) اندازه‌گیری می‌شود.",
            "key_concepts": [
              "توان الکتریکی (P)",
              "وات (W)",
              "انرژی الکتریکی",
              "کیلووات-ساعت (kWh)",
              "قانون ژول"
            ],
            "terminology": {
              "توان الکتریکی": "آهنگ مصرف انرژی الکتریکی",
              "کیلووات-ساعت": "یکای انرژی برابر با 3.6×10^6 ژول"
            },
            "formulas": {
              "توان": "P = IV",
              "توان در مقاومت": "P = I^2R = V^2/R",
              "انرژی": "E = Pt"
            },
            "laws": [
              "قانون ژول"
            ],
            "principles": [
              "توان مصرفی در وسایل برقی روی آنها نوشته شده است."
            ],
            "processes": [
              "محاسبه توان مصرفی وسایل برقی",
              "محاسبه هزینه برق"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1",
              "t2_2"
            ],
            "next_topics": [
              "t2_4"
            ],
            "concept_dependencies": [
              "نیاز به درک جریان و ولتاژ"
            ],
            "required_background": null,
            "builds_upon": [
              "مدارهای الکتریکی"
            ],
            "enables_learning_of": [
              "مدارهای خانگی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انرژی"
            ],
            "similar_concepts": [
              "توان مکانیکی"
            ],
            "differences": [
              "توان الکتریکی با جریان و ولتاژ محاسبه می‌شود."
            ],
            "frequently_confused_with": [
              "انرژی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 8,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "محاسبه توان مصرفی",
              "محاسبه انرژی مصرفی (kWh)",
              "محاسبه هزینه برق",
              "استفاده از روابط P = VI, P = I^2R, P = V^2/R"
            ],
            "hidden_points": [
              "تفاوت بین W و kWh"
            ],
            "trick_points": [
              "سوالات مربوط به هزینه برق"
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
              "محاسبه P, E, هزینه"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تبدیل ساعت به ثانیه",
              "فراموش کردن ×1000 برای تبدیل kW به W"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "محاسبه هزینه برق"
            ],
            "warning_points": [
              "1 kWh = 1000 W × 3600 s = 3.6×10^6 J"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در زندگی.",
            "study_strategy": "تمرین محاسبه هزینه وسایل برقی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "P = IV = I^2R = V^2/R.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "توان مانند سرعت مصرف انرژی است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۵ (بخاری برقی)",
              "مثال ۲-۶ (مدار ساده)"
            ],
            "important_examples": [
              "محاسبه مصرف برق بخاری",
              "محاسبه توان خروجی باتری"
            ],
            "real_life_examples": [
              "برچسب انرژی لوازم خانگی",
              "قبض برق"
            ]
          }
        },
        {
          "id": "t2_4",
          "title": "ترکیب مقاومت‌ها (متوالی و موازی)",
          "core_knowledge": {
            "explanation": "مقاومت‌ها را می‌توان به صورت متوالی (سری) یا موازی بست. در اتصال متوالی، جریان یکسان و ولتاژ تقسیم می‌شود و مقاومت معادل از R_eq = R1 + R2 + ... به دست می‌آید. در اتصال موازی، ولتاژ یکسان و جریان تقسیم می‌شود و مقاومت معادل از 1/R_eq = 1/R1 + 1/R2 + ... محاسبه می‌شود.",
            "complete_definition": "در اتصال سری (متوالی)، مقاومت‌ها پشت سر هم بسته می‌شوند و جریان یکسانی از همه عبور می‌کند. مقاومت معادل: R_eq = ΣR_i. در اتصال موازی، یک سر همه مقاومت‌ها و سر دیگر آنها به هم وصل می‌شود و اختلاف پتانسیل یکسانی دارند. مقاومت معادل: 1/R_eq = Σ(1/R_i).",
            "key_concepts": [
              "اتصال متوالی (سری)",
              "اتصال موازی",
              "مقاومت معادل",
              "جریان در مدار",
              "ولتاژ در مدار"
            ],
            "terminology": {
              "مقاومت معادل": "یک مقاومت که می‌تواند جایگزین ترکیب مقاومت‌ها شود.",
              "اتصال سری": "مقاومت‌های یک پس از دیگری"
            },
            "formulas": {
              "سری": "R_eq = R1 + R2 + ...",
              "موازی": "1/R_eq = 1/R1 + 1/R2 + ..."
            },
            "laws": null,
            "principles": [
              "در سری: V = V1 + V2 + ... و I = I1 = I2 = ...",
              "در موازی: I = I1 + I2 + ... و V = V1 = V2 = ..."
            ],
            "processes": [
              "محاسبه مقاومت معادل",
              "تحلیل مدارهای ترکیبی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1",
              "t2_2"
            ],
            "next_topics": [
              "t3_1"
            ],
            "concept_dependencies": [
              "نیاز به درک قانون اهم"
            ],
            "required_background": null,
            "builds_upon": [
              "مدارهای ساده"
            ],
            "enables_learning_of": [
              "مدارهای پیچیده",
              "سیم‌کشی خانگی"
            ]
          },
          "relationships": {
            "related_topics": [
              "سیم‌کشی ساختمان"
            ],
            "similar_concepts": [
              "ترکیب خازن‌ها"
            ],
            "differences": [
              "فرمول ترکیب معکوس است."
            ],
            "frequently_confused_with": [
              "ترکیب خازن‌ها"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2.5H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 8,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 85,
            "exam_points": [
              "محاسبه مقاومت معادل سری",
              "محاسبه مقاومت معادل موازی",
              "تحلیل مدارهای ترکیبی",
              "محاسبه جریان و ولتاژ"
            ],
            "hidden_points": [
              "شناخت اتصال سری و موازی در شکل"
            ],
            "trick_points": [
              "مدارهای ترکیبی پیچیده"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص نوع اتصال"
            ],
            "calculation_question_types": [
              "محاسبه R_eq",
              "محاسبه I و V"
            ],
            "analytical_question_types": [
              "تحلیل مدارهای ترکیبی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فرمول موازی را به جای سری و بلعکس به کار بردن",
              "اشتباه در تشخیص اتصال سری و موازی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تحلیل مدارهای ترکیبی",
              "تشخیص اتصال در مدار"
            ],
            "warning_points": [
              "در سری جریان یکسان، در موازی ولتاژ یکسان است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت کلیدی در مدارها.",
            "study_strategy": "تمرین با مدارهای مختلف و محاسبه جریان و ولتاژ",
            "review_strategy": "مرور هر 3 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t3_1"
          },
          "memory_support": {
            "memory_tips": "سری: R_eq = R1 + R2 (جمع). موازی: 1/R_eq = 1/R1 + 1/R2 (عکس جمع).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "سری: یک خیابان طولانی. موازی: چند خیابان موازی."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۷ (ولت سنج و آمپرسنج)",
              "مثال ۲-۸ (مدار موازی)",
              "مثال ۲-۹ (ترکیب مقاومت‌ها)",
              "مثال ۲-۱۰ (مدار خانه)"
            ],
            "important_examples": [
              "مدار سیم‌کشی خانه (موازی)",
              "محاسبه جریان فیوز"
            ],
            "real_life_examples": [
              "سیم‌کشی خانه",
              "فیوز"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "مغناطیس و القای الکترومغناطیسی",
      "chapter_objectives": [
        "آشنایی با مغناطیس و میدان مغناطیسی",
        "بررسی نیروی مغناطیسی وارد بر ذرات باردار متحرک و سیم‌های حامل جریان",
        "تحلیل میدان مغناطیسی ناشی از سیم‌ها، حلقه‌ها و سیملوله‌ها",
        "درک پدیده القای الکترومغناطیسی و قانون فاراده",
        "بررسی قانون لنز و کاربردهای آن",
        "آشنایی با جریان متناوب و مبدل‌ها"
      ],
      "estimated_total_learning_time": "PT16H",
      "overall_difficulty": 8,
      "overall_importance": 9,
      "prerequisite_chapters": [
        1,
        2
      ],
      "next_chapters": [],
      "topics": [
        {
          "id": "t3_1",
          "title": "میدان مغناطیسی و خطوط میدان",
          "core_knowledge": {
            "explanation": "آهنرباها دو قطب شمال (N) و جنوب (S) دارند. اطراف آهنربا میدان مغناطیسی وجود دارد که با خطوط میدان نشان داده می‌شود. خطوط میدان از قطب N خارج و به قطب S وارد می‌شوند. میدان مغناطیسی زمین مانند یک آهنربای میله‌ای است که قطب شمال آن در نزدیکی قطب جنوب جغرافیایی قرار دارد.",
            "complete_definition": "میدان مغناطیسی ناحیه‌ای اطراف آهنربا یا جریان الکتریکی است که نیروی مغناطیسی وارد می‌کند. خطوط میدان مغناطیسی از قطب شمال (N) خارج شده و به قطب جنوب (S) وارد می‌شوند. میدان مغناطیسی زمین شبیه یک آهنربای میله‌ای بزرگ است.",
            "key_concepts": [
              "آهنربا",
              "قطب شمال (N)",
              "قطب جنوب (S)",
              "خطوط میدان مغناطیسی",
              "میدان یکنواخت",
              "میدان مغناطیسی زمین"
            ],
            "terminology": {
              "میدان مغناطیسی": "ناحیه‌ای که در آن نیروی مغناطیسی حس می‌شود.",
              "قطب‌های آهنربا": "نقاطی که خاصیت مغناطیسی در آنها متمرکز است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "خطوط میدان هرگز یکدیگر را قطع نمی‌کنند.",
              "خطوط میدان حلقه‌های بسته هستند."
            ],
            "processes": [
              "رسم خطوط میدان مغناطیسی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مغناطیس (علوم هشتم)"
            ],
            "next_topics": [
              "t3_2",
              "t3_3",
              "t3_4"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "نیروی مغناطیسی",
              "القای الکترومغناطیسی"
            ]
          },
          "relationships": {
            "related_topics": [
              "میدان الکتریکی"
            ],
            "similar_concepts": [],
            "differences": [
              "خطوط میدان مغناطیسی بسته هستند."
            ],
            "frequently_confused_with": [
              "میدان الکتریکی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
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
              "شناخت قطب‌های آهنربا",
              "رسم خطوط میدان",
              "مقایسه با میدان الکتریکی"
            ],
            "hidden_points": [
              "میدان مغناطیسی زمین"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "رسم"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در جهت خطوط میدان",
              "تصور اینکه قطب‌های مغناطیسی مانند بارهای الکتریکی مجزا وجود دارند."
            ],
            "misconceptions": [
              "تک قطبی مغناطیسی وجود دارد."
            ],
            "difficult_parts": [],
            "warning_points": [
              "خطوط میدان از N به S خارج از آهنربا است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و مفهومی.",
            "study_strategy": "مطالعه و رسم خطوط میدان",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t3_2"
          },
          "memory_support": {
            "memory_tips": "خطوط میدان از N به S خارج از آهنربا.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "آهنربا مانند یک حباب که میدان از یک سر خارج و از سر دیگر وارد می‌شود."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳-۳ (آهنربا و براده آهن)",
              "شکل ۳-۶ (خطوط میدان آهنربا)"
            ],
            "important_examples": [
              "میدان مغناطیسی زمین",
              "آزمایش براده آهن"
            ],
            "real_life_examples": [
              "قطب‌نما",
              "آهنرباهای یخچال"
            ]
          }
        },
        {
          "id": "t3_2",
          "title": "نیروی مغناطیسی بر ذره باردار متحرک",
          "core_knowledge": {
            "explanation": "نیروی مغناطیسی بر یک ذره باردار متحرک در میدان مغناطیسی وارد می‌شود اگر سرعت آن با میدان موازی نباشد: F = |q|vB sinθ. جهت نیرو با قاعده دست راست تعیین می‌شود. یکای میدان مغناطیسی تسلا (T) است. این نیرو بر راستای سرعت و میدان عمود است و کار انجام نمی‌دهد.",
            "complete_definition": "نیروی مغناطیسی وارد بر بار متحرک q با سرعت v در میدان مغناطیسی B: F = |q|vB sinθ. جهت نیرو عمود بر صفحه v و B است و برای بار مثبت با قاعده دست راست تعیین می‌شود. نیروی مغناطیسی کار انجام نمی‌دهد (چون بر سرعت عمود است).",
            "key_concepts": [
              "نیروی مغناطیسی",
              "بار متحرک",
              "قاعده دست راست",
              "تسلا (T)",
              "زاویه بین سرعت و میدان"
            ],
            "terminology": {
              "نیروی لورنتس": "نیروی وارد بر بار متحرک در میدان الکتریکی و مغناطیسی",
              "تسلا (T)": "یکای میدان مغناطیسی در SI"
            },
            "formulas": {
              "نیروی مغناطیسی": "F = |q|vB sinθ"
            },
            "laws": null,
            "principles": [
              "نیروی مغناطیسی بر سرعت عمود است (کار صفر).",
              "نیروی مغناطیسی جهت حرکت را تغییر می‌دهد ولی تندی را تغییر نمی‌دهد."
            ],
            "processes": [
              "محاسبه نیروی مغناطیسی",
              "تعیین جهت با قاعده دست راست"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_1",
              "بردارها"
            ],
            "next_topics": [
              "t3_3"
            ],
            "concept_dependencies": [
              "نیاز به درک میدان مغناطیسی"
            ],
            "required_background": null,
            "builds_upon": [
              "میدان مغناطیسی"
            ],
            "enables_learning_of": [
              "موتور الکتریکی",
              "طیف‌سنج جرمی"
            ]
          },
          "relationships": {
            "related_topics": [
              "نیروی الکتریکی"
            ],
            "similar_concepts": [
              "نیروی مغناطیسی بر سیم حامل جریان"
            ],
            "differences": [
              "نیروی مغناطیسی بر بار ساکن وارد نمی‌شود."
            ],
            "frequently_confused_with": [
              "نیروی الکتریکی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 8,
            "reasoning_load": 8,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "محاسبه نیروی مغناطیسی بر بار",
              "تعیین جهت نیرو",
              "شرط بیشینه نیرو (sinθ=1)"
            ],
            "hidden_points": [
              "کار صفر نیروی مغناطیسی"
            ],
            "trick_points": [
              "سوالات جهت نیرو (بار منفی)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "جهت یابی"
            ],
            "calculation_question_types": [
              "محاسبه F",
              "محاسبه v از روی F"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در جهت نیرو برای بار منفی",
              "فراموش کردن sinθ در فرمول"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "استفاده از قاعده دست راست",
              "جهت نیرو برای بار منفی"
            ],
            "warning_points": [
              "برای بار منفی، جهت نیرو برعکس است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم برای درک موتورها.",
            "study_strategy": "تمرین با قاعده دست راست",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "F = qvB sinθ",
            "mnemonic_devices": "قاعده دست راست (انگشت شست = جهت v, انگشتان = B, کف دست = F).",
            "visual_imagination_tips": "نیروی مغناطیسی مانند باد جانبی بر یک توپ در حال حرکت است."
          },
          "examples": {
            "textbook_examples": [
              "تمرین ۱-۳ (نیرو بر پروتون)",
              "تمرین ۲-۳ (نیرو بر سه ذره)"
            ],
            "important_examples": [
              "الکترون در میدان مغناطیسی"
            ],
            "real_life_examples": [
              "موتور الکتریکی",
              "لوله‌های تصویر (CRT)"
            ]
          }
        },
        {
          "id": "t3_3",
          "title": "نیروی مغناطیسی بر سیم حامل جریان",
          "core_knowledge": {
            "explanation": "نیروی مغناطیسی بر سیم حامل جریان در میدان مغناطیسی وارد می‌شود: F = Iℓ B sinθ. جهت نیرو با قاعده دست راست تعیین می‌شود. این نیرو اساس کار موتورهای الکتریکی است. در یک موتور، با عبور جریان از حلقه در میدان مغناطیسی، نیروهای وارد بر اضلاع حلقه باعث چرخش آن می‌شود.",
            "complete_definition": "نیروی مغناطیسی بر یک سیم به طول ℓ که حامل جریان I در میدان B است: F = IℓB sinθ. جهت نیرو عمود بر سیم و میدان است و با قاعده دست راست تعیین می‌شود. این نیرو در موتورهای الکتریکی نقش اساسی دارد.",
            "key_concepts": [
              "نیروی مغناطیسی بر سیم",
              "قاعده دست راست",
              "موتور الکتریکی",
              "گشتاور"
            ],
            "terminology": {
              "موتور الکتریکی": "دستگاهی که انرژی الکتریکی را به انرژی مکانیکی تبدیل می‌کند."
            },
            "formulas": {
              "نیروی بر سیم": "F = IℓB sinθ"
            },
            "laws": null,
            "principles": [
              "نیرو بر سیم عمود است.",
              "موتور الکتریکی بر اساس این نیرو کار می‌کند."
            ],
            "processes": [
              "محاسبه نیرو بر سیم",
              "تعیین جهت چرخش موتور"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_1",
              "t2_1"
            ],
            "next_topics": [
              "t3_4"
            ],
            "concept_dependencies": [
              "نیاز به درک میدان و جریان"
            ],
            "required_background": null,
            "builds_upon": [
              "نیروی مغناطیسی"
            ],
            "enables_learning_of": [
              "کاربردهای موتور"
            ]
          },
          "relationships": {
            "related_topics": [
              "موتور الکتریکی"
            ],
            "similar_concepts": [
              "نیرو بر بار متحرک"
            ],
            "differences": [
              "نیرو بر سیم از حرکت بارها ناشی می‌شود."
            ],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "محاسبه نیرو بر سیم",
              "تعیین جهت نیرو",
              "کاربرد در موتور"
            ],
            "hidden_points": [
              "نیرو بر سیم در میدان یکنواخت"
            ],
            "trick_points": [
              "سوالات با زاویه‌های مختلف"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "جهت یابی",
              "کاربرد"
            ],
            "calculation_question_types": [
              "محاسبه F"
            ],
            "analytical_question_types": [
              "تحلیل موتور الکتریکی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن sinθ",
              "اشتباه در جهت نیرو"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تعیین جهت چرخش حلقه در موتور"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه موتورهای الکتریکی.",
            "study_strategy": "تمرین محاسبه نیرو بر سیم و تحلیل موتور",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_4"
          },
          "memory_support": {
            "memory_tips": "F = IℓB sinθ",
            "mnemonic_devices": null,
            "visual_imagination_tips": "سیم حامل جریان در میدان مانند یک موتور کوچک است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۲-۳ (نیرو بر سیم)",
              "تمرین ۱-۳",
              "آزمایش نیرو بر سیم"
            ],
            "important_examples": [
              "نیرو بر سیم در میدان یکنواخت",
              "موتور الکتریکی ساده"
            ],
            "real_life_examples": [
              "موتور برقی",
              "بلندگو"
            ]
          }
        },
        {
          "id": "t3_4",
          "title": "میدان مغناطیسی سیملوله",
          "core_knowledge": {
            "explanation": "سیملوله (سلونوئید) یک سیم پیچیده شده به صورت مارپیچ است که با عبور جریان، میدان مغناطیسی یکنواختی درون خود ایجاد می‌کند. میدان درون سیملوله آرمانی از B = μ0 NI/ℓ به دست می‌آید. با قرار دادن هسته آهنی، میدان تقویت می‌شود و آهنربای الکتریکی ساخته می‌شود.",
            "complete_definition": "سیملوله یا سلونوئید، یک سیم مارپیچی است که با عبور جریان، میدان مغناطیسی تولید می‌کند. میدان درون یک سیملوله آرمانی (طول زیاد و حلقه‌های نزدیک به هم) یکنواخت است و اندازه آن B = μ0 NI/ℓ است. قرار دادن هسته آهنی درون سیملوله، میدان را بسیار تقویت می‌کند (آهنربای الکتریکی).",
            "key_concepts": [
              "سیملوله (سلونوئید)",
              "میدان یکنواخت",
              "تراوایی مغناطیسی خأل (μ0)",
              "آهنربای الکتریکی",
              "هسته آهنی"
            ],
            "terminology": {
              "سیملوله (سلونوئید)": "سیم پیچیده شده به شکل مارپیچ",
              "آهنربای الکتریکی": "آهنربایی که با جریان الکتریکی کار می‌کند"
            },
            "formulas": {
              "میدان درون سیملوله": "B = μ0 NI/ℓ"
            },
            "laws": null,
            "principles": [
              "میدان درون سیملوله یکنواخت است.",
              "هسته آهنی میدان را تقویت می‌کند."
            ],
            "processes": [
              "محاسبه میدان درون سیملوله"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_1",
              "t2_1"
            ],
            "next_topics": [
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک میدان مغناطیسی"
            ],
            "required_background": null,
            "builds_upon": [
              "میدان مغناطیسی"
            ],
            "enables_learning_of": [
              "القای الکترومغناطیسی"
            ]
          },
          "relationships": {
            "related_topics": [
              "آهنربای الکتریکی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "سیم‌پیچ (کویل)"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
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
              "محاسبه میدان سیملوله",
              "نقش هسته آهنی",
              "کاربرد آهنربای الکتریکی"
            ],
            "hidden_points": [
              "شرایط سیملوله آرمانی"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [
              "محاسبه B"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن تعداد دورها (N)",
              "اشتباه در یکاها"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": [
              "μ0 = 4π×10^-7 T·m/A"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد صنعتی مهم.",
            "study_strategy": "تمرین محاسبه میدان سیملوله",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_5"
          },
          "memory_support": {
            "memory_tips": "B = μ0 NI/ℓ",
            "mnemonic_devices": null,
            "visual_imagination_tips": "سیملوله مانند یک آهنربای طویل با میدان یکنواخت درون خود است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۳ (میدان سیملوله)",
              "تمرین ۳-۳"
            ],
            "important_examples": [
              "سیملوله با هسته آهنی",
              "آهنربای الکتریکی صنعتی"
            ],
            "real_life_examples": [
              "آهنربای جرثقیل",
              "درب‌های مغناطیسی"
            ]
          }
        },
        {
          "id": "t3_5",
          "title": "القای الکترومغناطیسی و قانون فاراده",
          "core_knowledge": {
            "explanation": "القای الکترومغناطیسی پدیده تولید جریان الکتریکی در یک مدار به دلیل تغییر شار مغناطیسی عبوری از آن است. نیروی محرکه القایی متوسط با آهنگ تغییر شار رابطه دارد: ε_av = -N ΔΦ/Δt. این قانون توسط فاراده کشف شد و اساس کار مولدهای الکتریکی است.",
            "complete_definition": "قانون فاراده: نیروی محرکه الکتریکی القایی در یک مدار بسته برابر با منفی آهنگ تغییر شار مغناطیسی عبوری از آن است: ε = -N ΔΦ/Δt. شار مغناطیسی عبوری از سطح به صورت Φ = BA cosθ تعریف می‌شود. جریان القایی در مدار با مقاومت R برابر I = ε/R است.",
            "key_concepts": [
              "القای الکترومغناطیسی",
              "شار مغناطیسی (Φ)",
              "وبر (Wb)",
              "قانون فاراده",
              "نیروی محرکه القایی",
              "جریان القایی"
            ],
            "terminology": {
              "شار مغناطیسی": "تعداد خطوط میدان عبوری از یک سطح (Φ = BA cosθ)",
              "قانون فاراده": "ε = -N ΔΦ/Δt"
            },
            "formulas": {
              "شار مغناطیسی": "Φ = BA cosθ",
              "نیروی محرکه القایی": "ε = -N ΔΦ/Δt",
              "جریان القایی": "I = ε/R"
            },
            "laws": [
              "قانون فاراده"
            ],
            "principles": [
              "جریان القایی ناشی از تغییر شار است.",
              "هرچه آهنگ تغییر شار بیشتر باشد، جریان القایی بیشتر است."
            ],
            "processes": [
              "محاسبه شار مغناطیسی",
              "محاسبه نیروی محرکه القایی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_1",
              "t3_4"
            ],
            "next_topics": [
              "t3_6",
              "t3_7"
            ],
            "concept_dependencies": [
              "نیاز به درک میدان مغناطیسی"
            ],
            "required_background": null,
            "builds_upon": [
              "میدان مغناطیسی"
            ],
            "enables_learning_of": [
              "مولدهای جریان متناوب",
              "ترانسفورماتور"
            ]
          },
          "relationships": {
            "related_topics": [
              "مولد الکتریکی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "القای مغناطیسی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2.5H",
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
              "تعریف شار مغناطیسی",
              "محاسبه شار",
              "قانون فاراده",
              "محاسبه نیروی محرکه القایی"
            ],
            "hidden_points": [
              "علامت منفی (قانون لنز)"
            ],
            "trick_points": [
              "سوالات با تغییر زاویه یا مساحت"
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
              "محاسبه Φ",
              "محاسبه ε"
            ],
            "analytical_question_types": [
              "تحلیل تغییرات شار"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن cosθ در شار",
              "اشتباه در تبدیل واحدها (cm^2 به m^2)",
              "فراموش کردن تعداد دورها (N)"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "محاسبه شار با زاویه",
              "تشخیص تغییرات شار"
            ],
            "warning_points": [
              "شار به جهت سطح وابسته است (علامت مثبت یا منفی)."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه تولید برق.",
            "study_strategy": "تمرین محاسبات شار و نیروی محرکه",
            "review_strategy": "مرور هر 3 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t3_6"
          },
          "memory_support": {
            "memory_tips": "Φ = BA cosθ, ε = -N ΔΦ/Δt.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تغییر خطوط میدان عبوری از حلقه باعث ایجاد جریان می‌شود."
          },
          "examples": {
            "textbook_examples": [
              "مثال ۳-۴ (شار و تغییر آن)",
              "مثال ۳-۵ (نیروی محرکه القایی)",
              "مثال ۳-۶ (نمودار شار-زمان)"
            ],
            "important_examples": [
              "تغییر میدان در سیملوله",
              "چرخش حلقه در میدان"
            ],
            "real_life_examples": [
              "مولد برق",
              "کارت‌های بانکی",
              "تندی‌سنج دوچرخه"
            ]
          }
        },
        {
          "id": "t3_6",
          "title": "قانون لنز",
          "core_knowledge": {
            "explanation": "قانون لنز جهت جریان القایی را تعیین می‌کند: جریان القایی در جهتی است که آثار مغناطیسی آن با عامل ایجادکننده آن (تغییر شار) مخالفت کند. به عبارت دیگر، جریان القایی با تغییر شار مخالفت می‌کند. علامت منفی در قانون فاراده بیان‌کننده قانون لنز است.",
            "complete_definition": "قانون لنز: جریان القایی در یک مدار بسته چنان جهتی دارد که میدان مغناطیسی ناشی از آن با تغییر شار مغناطیسی که باعث ایجاد آن شده است، مخالفت کند. این قانون برای تعیین جهت جریان القایی استفاده می‌شود.",
            "key_concepts": [
              "قانون لنز",
              "جهت جریان القایی",
              "مخالفت با تغییر شار"
            ],
            "terminology": {
              "قانون لنز": "جریان القایی با عامل به وجود آورنده خود مخالفت می‌کند."
            },
            "formulas": null,
            "laws": [
              "قانون لنز"
            ],
            "principles": [
              "با افزایش شار، جریان القایی میدانی در جهت مخالف میدان اصلی ایجاد می‌کند.",
              "با کاهش شار، جریان القایی میدانی در جهت میدان اصلی ایجاد می‌کند."
            ],
            "processes": [
              "تعیین جهت جریان القایی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_5"
            ],
            "next_topics": [
              "t3_7"
            ],
            "concept_dependencies": [
              "نیاز به درک قانون فاراده"
            ],
            "required_background": null,
            "builds_upon": [
              "القای الکترومغناطیسی"
            ],
            "enables_learning_of": [
              "کاربردهای القا"
            ]
          },
          "relationships": {
            "related_topics": [
              "قاعده دست راست"
            ],
            "similar_concepts": [
              "اصل عکس‌العمل"
            ],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "بیان قانون لنز",
              "تعیین جهت جریان القایی",
              "کاربرد در تحلیل مدارها"
            ],
            "hidden_points": [
              "علامت منفی در قانون فاراده"
            ],
            "trick_points": [
              "سوالات با آهنربا و حلقه"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "بیان قانون",
              "تعیین جهت"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل جهت جریان"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص جهت جریان القایی",
              "فراموش کردن مخالفت با تغییر شار"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تعیین جهت جریان با ترکیب قانون لنز و قاعده دست راست"
            ],
            "warning_points": [
              "جریان القایی با تغییر شار مخالفت می‌کند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم برای فهم القا.",
            "study_strategy": "تمرین با مثال‌های مختلف آهنربا و حلقه",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t3_7"
          },
          "memory_support": {
            "memory_tips": "جریان القایی با تغییر شار مخالفت می‌کند.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "اگر شار زیاد شود، جریان القایی سعی در کاهش آن دارد."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳-۲۸ (نزدیک و دور شدن آهنربا)"
            ],
            "important_examples": [
              "نزدیک کردن N آهنربا به حلقه",
              "دور کردن N آهنربا از حلقه"
            ],
            "real_life_examples": [
              "ترمزهای مغناطیسی",
              "اجاق القایی"
            ]
          }
        },
        {
          "id": "t3_7",
          "title": "جریان متناوب و مبدل‌ها",
          "core_knowledge": {
            "explanation": "جریان متناوب (AC) جریانی است که جهت آن با زمان تغییر می‌کند و معمولاً به صورت سینوسی است. مولدهای جریان متناوب با چرخش یک پیچه در میدان مغناطیسی کار می‌کنند. مبدل‌ها (ترانسفورماتورها) از القای متقابل برای تغییر ولتاژ جریان متناوب استفاده می‌کنند و نقش مهمی در انتقال توان الکتریکی دارند.",
            "complete_definition": "جریان متناوب (AC) جریانی است که بزرگی و جهت آن با زمان تغییر می‌کند. مولد AC با چرخش پیچه در میدان مغناطیسی، جریان سینوسی تولید می‌کند. مبدل (ترانسفورماتور) با استفاده از القای متقابل بین دو سیم‌پیچ، ولتاژ AC را تغییر می‌دهد و در انتقال برق کاربرد دارد.",
            "key_concepts": [
              "جریان متناوب (AC)",
              "مولد جریان متناوب",
              "بسامد",
              "دوره تناوب",
              "مبدل (ترانسفورماتور)",
              "ولتاژ بالا",
              "انتقال توان"
            ],
            "terminology": {
              "جریان متناوب": "جریانی که جهت آن به طور متناوب عوض می‌شود.",
              "مبدل (ترانسفورماتور)": "دستگاهی برای تغییر ولتاژ AC"
            },
            "formulas": {
              "جریان سینوسی": "I = I_m sin(2πt/T)",
              "نسبت ولتاژ در مبدل": "V_s/V_p = N_s/N_p (ایده‌آل)"
            },
            "laws": null,
            "principles": [
              "مبدل‌ها فقط با AC کار می‌کنند.",
              "انتقال برق با ولتاژ بالا و جریان کم، تلفات را کاهش می‌دهد."
            ],
            "processes": [
              "تولید جریان متناوب",
              "کار مبدل"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_5"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک القا"
            ],
            "required_background": null,
            "builds_upon": [
              "القای الکترومغناطیسی"
            ],
            "enables_learning_of": [
              "سیستم‌های قدرت"
            ]
          },
          "relationships": {
            "related_topics": [
              "انتقال برق"
            ],
            "similar_concepts": [
              "جریان مستقیم (DC)"
            ],
            "differences": [
              "AC جهت تغییر می‌کند، DC ثابت است."
            ],
            "frequently_confused_with": [
              "جریان مستقیم"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص جریان متناوب",
              "چگونگی تولید AC",
              "کاربرد مبدل",
              "انتقال توان"
            ],
            "hidden_points": [
              "دوره و بسامد"
            ],
            "trick_points": [
              "سوالات مربوط به فرمول جریان سینوسی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "کاربرد"
            ],
            "calculation_question_types": [
              "محاسبه جریان در زمان معین"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص AC و DC",
              "عدم درک نقش مبدل"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک جریان سینوسی",
              "نقش مبدل در انتقال توان"
            ],
            "warning_points": [
              "مبدل فقط با AC کار می‌کند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد صنعتی مهم.",
            "study_strategy": "مطالعه تولید و انتقال برق",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "AC جریانی است که با زمان تغییر می‌کند.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "موج سینوسی نشان‌دهنده AC است."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳-۳۴ (مولد AC)",
              "شکل ۳-۳۷ (انتقال برق)",
              "مثال ۳-۸ (معادله جریان)"
            ],
            "important_examples": [
              "تولید برق در نیروگاه",
              "خطوط انتقال برق"
            ],
            "real_life_examples": [
              "برق خانگی (AC)",
              "ترانسفورماتورهای شهری"
            ]
          }
        }
      ]
    }
  ]
};

export default { PHYSICS_11_KB };
