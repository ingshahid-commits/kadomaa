/**
 * physics10.js  —  Kadoma knowledge base
 * -----------------------------------------------------------------------
 * Source: user-provided physics knowledge-graph export (phy10.txt),
 * converted to the same shape as chemistry10/11/12.js (knowledge_base[] of
 * chapters, each with topics[] carrying learning_metadata.importance_score)
 * so it works with the existing curriculumAdapter.js unchanged. Topics were
 * grouped into their chapter by matching the topic id prefix (e.g. "t2_3"
 * -> chapter_number 2) to chapter_number - every field preserved verbatim,
 * only the grouping changed.
 * -----------------------------------------------------------------------
 */
export const PHYSICS_10_KB = {
  "textbook_metadata": {
    "title": "فیزیک (پایه دهم)",
    "grade": "پایه دهم",
    "branch": "ریاضی/تجربی"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "فیزیک و اندازه‌گیری",
      "chapter_objectives": [
        "آشنایی با فیزیک به عنوان دانش بنیادی و نقش مدل‌سازی در آن",
        "شناخت کمیت‌های فیزیکی، نرده‌ای و برداری",
        "آشنایی با دستگاه بین‌المللی یکاها (SI) و پیشوندهای آن",
        "تبدیل یکاها با روش تبدیل زنجیره‌ای",
        "کار با نمادگذاری علمی و رقم‌های بامعنا",
        "درک مفاهیم دقت، خطا و درستی در اندازه‌گیری",
        "محاسبه چگالی و کاربردهای آن"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 6,
      "overall_importance": 8,
      "prerequisite_chapters": [
        "ریاضیات پایه هفتم تا دهم"
      ],
      "next_chapters": [
        2,
        3,
        4
      ],
      "topics": [
        {
          "id": "t1_1",
          "title": "فیزیک، دانش بنیادی و مدل‌سازی",
          "core_knowledge": {
            "explanation": "فیزیک بنیادی‌ترین دانش تجربی است که به مطالعه پدیده‌های طبیعی می‌پردازد. فیزیک‌دانان با استفاده از مدل‌سازی، پدیده‌های پیچیده را ساده کرده و به تحلیل آنها می‌پردازند. مدل‌سازی با نادیده گرفتن اثرهای جزئی، امکان بررسی و پیش‌بینی رفتار پدیده‌ها را فراهم می‌کند.",
            "complete_definition": "فیزیک، علمی تجربی است که به مطالعه ماده، انرژی و برهم‌کنش بین آنها می‌پردازد. مدل‌سازی در فیزیک فرایندی است که طی آن یک پدیده فیزیکی به اندازه کافی ساده و آرمانی می‌شود تا امکان بررسی و تحلیل آن فراهم شود. قوانین و نظریه‌های فیزیکی بر اساس آزمایش و مشاهده شکل می‌گیرند و ممکن است در طول زمان بازنگری شوند.",
            "key_concepts": [
              "فیزیک",
              "مدل فیزیکی",
              "نظریه فیزیکی",
              "قانون فیزیکی",
              "آزمون‌پذیری",
              "تغییرپذیری نظریه‌ها",
              "روش علمی"
            ],
            "terminology": {
              "مدل فیزیکی": "ساده‌سازی و آرمانی‌سازی یک پدیده واقعی",
              "نظریه فیزیکی": "توضیح جامع و قابل آزمون برای گروهی از پدیده‌ها"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "مدل‌سازی با نادیده گرفتن اثرهای جزئی انجام می‌شود.",
              "نظریه‌های فیزیکی بر اساس داده‌های جدید ممکن است تغییر کنند."
            ],
            "processes": [
              "ساده‌سازی یک پدیده (مانند حرکت توپ) برای تحلیل"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [],
            "next_topics": [
              "t1_2",
              "t1_3",
              "t1_4",
              "t1_5"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "همه مفاهیم فیزیکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "روش علمی",
              "تاریخ علم"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1H",
            "review_interval": "P14D",
            "forgetting_risk": 3,
            "difficulty_score": 2,
            "importance_score": 3,
            "reasoning_load": 2,
            "memory_load": 3
          },
          "exam_metadata": {
            "importance_for_konkur": 2,
            "probability_in_exam": 10,
            "exam_points": [
              "تعریف فیزیک",
              "نقش مدل‌سازی"
            ],
            "hidden_points": null,
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "صحیح و غلط"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [],
            "misconceptions": [],
            "difficult_parts": [
              "درک مفهوم مدل‌سازی"
            ],
            "warning_points": [
              "مدل‌سازی نباید اثرهای مهم را نادیده بگیرد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مقدمه‌ای برای آشنایی با ماهیت علم فیزیک.",
            "study_strategy": "مطالعه سطحی",
            "review_strategy": "مرور نادر",
            "minimum_mastery_required": 70,
            "mastery_threshold": 80,
            "recommended_next_topic": "t1_2"
          },
          "memory_support": {
            "memory_tips": "فیزیک = مطالعه ماده، انرژی و برهم‌کنش‌ها.",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "مدل‌سازی حرکت توپ بسکتبال",
              "تغییر مدل اتم"
            ],
            "important_examples": [
              "مدل آرمانی یک جسم نقطه‌ای"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_2",
          "title": "اندازه‌گیری، کمیت‌های نرده‌ای و برداری",
          "core_knowledge": {
            "explanation": "اندازه‌گیری اساس فیزیک است. کمیت‌های فیزیکی به دو دسته نرده‌ای (تنها عدد و یکا) و برداری (عدد، یکا و جهت) تقسیم می‌شوند. در فیزیک، بیان یک کمیت بدون یکا و (برای برداری) بدون جهت، بی‌معناست.",
            "complete_definition": "کمیت فیزیکی، ویژگی قابل اندازه‌گیری یک ماده یا پدیده است. کمیت نرده‌ای با یک عدد و یکا بیان می‌شود (مانند جرم و طول). کمیت برداری علاوه بر عدد و یکا، نیاز به جهت دارد (مانند نیرو، سرعت و جابه‌جایی).",
            "key_concepts": [
              "کمیت فیزیکی",
              "کمیت نرده‌ای",
              "کمیت برداری",
              "یکا",
              "جهت",
              "اندازه‌گیری"
            ],
            "terminology": {
              "کمیت نرده‌ای": "کمیتی که فقط با اندازه (عدد و یکا) مشخص می‌شود.",
              "کمیت برداری": "کمیتی که علاوه بر اندازه، جهت آن نیز باید مشخص شود."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "هر کمیت فیزیکی باید با عدد و یکای مناسب بیان شود.",
              "کمیت برداری باید با عدد، یکا و جهت بیان شود."
            ],
            "processes": [
              "تشخیص کمیت نرده‌ای و برداری"
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
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "تبدیل یکاها",
              "نمادگذاری علمی",
              "دقت و خطا"
            ]
          },
          "relationships": {
            "related_topics": [
              "ریاضی (بردارها)"
            ],
            "similar_concepts": [
              "کمیت اسکالر (در ریاضی)"
            ],
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1H",
            "review_interval": "P10D",
            "forgetting_risk": 4,
            "difficulty_score": 3,
            "importance_score": 5,
            "reasoning_load": 3,
            "memory_load": 4
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "تشخیص کمیت نرده‌ای و برداری",
              "اهمیت یکا و جهت"
            ],
            "hidden_points": null,
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص نرده‌ای و برداری"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص کمیت برداری"
            ],
            "warning_points": [
              "یکا در کمیت‌های فیزیکی الزامی است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و ضروری.",
            "study_strategy": "تمرین تشخیص کمیت‌ها",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_3"
          },
          "memory_support": {
            "memory_tips": "نرده‌ای = فقط عدد و یکا، برداری = عدد، یکا و جهت.",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱-۴ و ۱-۵"
            ],
            "important_examples": [
              "جرم (نرده‌ای)",
              "نیرو (برداری)"
            ],
            "real_life_examples": [
              "تندی 60 km/h (نرده‌ای)",
              "باد شمالی با تندی 20 km/h (برداری)"
            ]
          }
        },
        {
          "id": "t1_3",
          "title": "یکاهای اصلی و فرعی در SI",
          "core_knowledge": {
            "explanation": "دستگاه بین‌المللی یکاها (SI) دارای هفت یکای اصلی (متر، کیلوگرم، ثانیه، کلوین، مول، آمپر، کاندلا) است. یکاهای فرعی از ترکیب یکاهای اصلی به دست می‌آیند. یکاهای اصلی طول، جرم و زمان به ترتیب متر، کیلوگرم و ثانیه هستند.",
            "complete_definition": "دستگاه بین‌المللی یکاها (SI) شامل هفت یکای اصلی است که سایر یکاها (یکاهای فرعی) از ترکیب آنها به دست می‌آیند. یکاهای اصلی عبارتند از: متر (طول)، کیلوگرم (جرم)، ثانیه (زمان)، کلوین (دما)، مول (مقدار ماده)، آمپر (جریان الکتریکی) و کاندلا (شدت روشنایی).",
            "key_concepts": [
              "دستگاه SI",
              "یکای اصلی",
              "یکای فرعی",
              "متر",
              "کیلوگرم",
              "ثانیه",
              "نیوتون",
              "ژول",
              "پاسکال"
            ],
            "terminology": {
              "یکای اصلی": "یکای پایه که از ترکیب با یکاهای دیگر به دست نمی‌آید.",
              "یکای فرعی": "یکایی که از ترکیب یکاهای اصلی به دست می‌آید."
            },
            "formulas": {
              "نیوتون": "N = kg.m/s^2",
              "ژول": "J = kg.m^2/s^2",
              "پاسکال": "Pa = kg/(m.s^2)"
            },
            "laws": null,
            "principles": [
              "هر یکای فرعی از ترکیب یکاهای اصلی به دست می‌آید."
            ],
            "processes": [
              "نوشتن یکای فرعی بر حسب یکاهای اصلی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_2"
            ],
            "next_topics": [
              "t1_4",
              "t1_5"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "تبدیل یکاها",
              "حل مسئله"
            ]
          },
          "relationships": {
            "related_topics": [
              "یکاها (ریاضی)"
            ],
            "similar_concepts": [
              "دستگاه بریتانیایی یکاها"
            ],
            "differences": [
              "SI یکای بین‌المللی است."
            ],
            "frequently_confused_with": [
              "یکاهای فرعی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1H",
            "review_interval": "P10D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 3,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "شناخت یکاهای اصلی SI",
              "تبدیل یکای فرعی به اصلی"
            ],
            "hidden_points": null,
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص یکاها"
            ],
            "calculation_question_types": [
              "تبدیل یکاها"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در یکاهای اصلی و فرعی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "به خاطر سپردن هفت یکای اصلی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "ضروری برای محاسبات.",
            "study_strategy": "حفظ یکاهای اصلی و تمرین تشخیص آنها",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_4"
          },
          "memory_support": {
            "memory_tips": "یکاهای اصلی SI: متر، کیلوگرم، ثانیه، کلوین، مول، آمپر، کاندلا.",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "جدول ۱-۱ (یکاهای اصلی)",
              "جدول ۱-۲ (یکاهای فرعی)"
            ],
            "important_examples": [
              "نیوتون = kg.m/s^2",
              "ژول = kg.m^2/s^2"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_4",
          "title": "تبدیل یکاها و پیشوندهای SI",
          "core_knowledge": {
            "explanation": "برای تبدیل یکاها از روش تبدیل زنجیره‌ای استفاده می‌شود که در آن کمیت در ضریب تبدیل (نسبتی برابر یک) ضرب می‌شود. پیشوندهای SI (مانند کیلو، میلی، میکرو، نانو) برای بیان توان‌های 10 به کار می‌روند.",
            "complete_definition": "تبدیل یکاها فرایند تغییر یکای یک کمیت بدون تغییر اندازه آن است. در روش تبدیل زنجیره‌ای از ضریب‌های تبدیل (کسری برابر با 1) استفاده می‌شود. پیشوندهای SI (جدول ۱-۶) مضرب‌ها و کسرهای یکاهای اصلی و فرعی را مشخص می‌کنند.",
            "key_concepts": [
              "ضریب تبدیل",
              "تبدیل زنجیره‌ای",
              "پیشوند SI",
              "کیلو",
              "میلی",
              "میکرو",
              "نانو"
            ],
            "terminology": {
              "ضریب تبدیل": "نسبتی از یکاها که برابر عدد یک است.",
              "پیشوند": "قسمتی که به یکا اضافه می‌شود و آن را در توانی از 10 ضرب می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "ضریب تبدیل برابر یک است و اندازه کمیت را تغییر نمی‌دهد.",
              "هر پیشوند نشان‌دهنده یک توان از 10 است."
            ],
            "processes": [
              "تبدیل یکاها با استفاده از ضریب تبدیل"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_3"
            ],
            "next_topics": [
              "t1_5"
            ],
            "concept_dependencies": [
              "نیاز به آشنایی با یکاها"
            ],
            "required_background": null,
            "builds_upon": [
              "یکاها"
            ],
            "enables_learning_of": [
              "حل مسئله",
              "محاسبات"
            ]
          },
          "relationships": {
            "related_topics": [
              "ریاضی (توان‌های 10)"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": [
              "یکاهای قدیمی"
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
              "تبدیل یکاها (کیلومتر بر ساعت به متر بر ثانیه)",
              "تبدیل با استفاده از پیشوندها",
              "استفاده از نمادگذاری علمی"
            ],
            "hidden_points": null,
            "trick_points": [
              "سوالات با یکاهای ترکیبی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [],
            "calculation_question_types": [
              "تبدیل یکاها"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن ضریب تبدیل",
              "اشتباه در توان 10 در پیشوندها",
              "عدم حذف یکاها در تبدیل زنجیره‌ای"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تبدیل یکاهای مرکب (مانند km/h به m/s)"
            ],
            "warning_points": [
              "یکاها را در صورت و مخرج ضریب تبدیل بنویسید و ساده کنید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت بسیار مهم و پرکاربرد.",
            "study_strategy": "تمرین زیاد با انواع یکاها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_5"
          },
          "memory_support": {
            "memory_tips": "پیشوندها: k (10^3), m (10^-3), μ (10^-6), n (10^-9).",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "مثال تبدیل 36 km/h به m/s",
              "جدول ۱-۶ (پیشوندها)"
            ],
            "important_examples": [
              "تبدیل cm به m",
              "تبدیل L/min به cm^3/s"
            ],
            "real_life_examples": [
              "تبدیل واحدهای سرعت خودرو",
              "تبدیل واحدهای ظرفیت"
            ]
          }
        },
        {
          "id": "t1_5",
          "title": "نمادگذاری علمی و رقم‌های بامعنا",
          "core_knowledge": {
            "explanation": "نمادگذاری علمی روشی برای نوشتن اعداد بسیار بزرگ یا بسیار کوچک به صورت حاصلضرب عددی بین 1 تا 10 در توانی از 10 است. رقم‌های بامعنا شامل همه ارقام یک عدد هستند که دقت اندازه‌گیری را نشان می‌دهند. قواعد خاصی برای شمارش رقم‌های بامعنا و انجام محاسبات با آنها وجود دارد.",
            "complete_definition": "نمادگذاری علمی عبارت است از نوشتن یک عدد به صورت a × 10^n که در آن 1 ≤ a < 10 و n یک عدد صحیح است. رقم‌های بامعنا، ارقامی هستند که در یک اندازه‌گیری با اطمینان ثبت می‌شوند. صفرهای بین ارقام غیرصفر و صفرهای سمت راست اعشار (در صورت وجود) بامعنا هستند، اما صفرهای سمت چپ بامعنا نیستند.",
            "key_concepts": [
              "نمادگذاری علمی",
              "رقم بامعنا",
              "دقت",
              "گرد کردن"
            ],
            "terminology": {
              "نمادگذاری علمی": "نوشتن اعداد به صورت a × 10^n",
              "رقم بامعنا": "رقمی که در یک اندازه‌گیری معنی‌دار است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در ضرب و تقسیم، تعداد رقم‌های بامعنا برابر با کمترین تعداد رقم‌های بامعنا در بین اعداد است.",
              "در جمع و تفریق، محل ممیز اهمیت دارد."
            ],
            "processes": [
              "نوشتن عدد به صورت نمادگذاری علمی",
              "تشخیص رقم‌های بامعنا",
              "انجام محاسبات با رقم‌های بامعنا"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ریاضی (توان‌های 10)"
            ],
            "next_topics": [
              "t1_6"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "دقت و خطا",
              "محاسبات"
            ]
          },
          "relationships": {
            "related_topics": [
              "ریاضی"
            ],
            "similar_concepts": [
              "گرد کردن"
            ],
            "differences": null,
            "frequently_confused_with": [
              "دقت"
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
            "probability_in_exam": 60,
            "exam_points": [
              "نوشتن اعداد به صورت نمادگذاری علمی",
              "تشخیص تعداد رقم‌های بامعنا",
              "انجام محاسبات با رقم‌های بامعنا"
            ],
            "hidden_points": null,
            "trick_points": [
              "سوالات مربوط به صفرهای بامعنا"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص رقم بامعنا"
            ],
            "calculation_question_types": [
              "نمادگذاری علمی",
              "گرد کردن"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص رقم‌های بامعنا (به ویژه صفرها)",
              "اشتباه در توان 10 در نمادگذاری علمی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص رقم‌های بامعنا",
              "قاعده گرد کردن"
            ],
            "warning_points": [
              "در این کتاب، صفرهای سمت راست عدد (مانند 230) سه رقم بامعنا در نظر گرفته شده‌اند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "برای گزارش نتایج اندازه‌گیری ضروری است.",
            "study_strategy": "تمرین تشخیص رقم‌های بامعنا و گرد کردن",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_6"
          },
          "memory_support": {
            "memory_tips": "صفرهای بین دو عدد غیرصفر بامعنا هستند.",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "جدول ۱-۷ (نمادگذاری علمی)",
              "جدول قواعد (رقم‌های بامعنا)"
            ],
            "important_examples": [
              "نوشتن 0.000907 با سه رقم بامعنا",
              "نوشتن 408 با سه رقم بامعنا"
            ],
            "real_life_examples": [
              "گزارش نتایج آزمایشگاهی"
            ]
          }
        },
        {
          "id": "t1_6",
          "title": "دقت و خطای اندازه‌گیری",
          "core_knowledge": {
            "explanation": "هیچ اندازه‌گیری دقیقی وجود ندارد و هر اندازه‌گیری دارای خطا است. دقت اندازه‌گیری به عوامل مختلفی مانند دقت وسیله، مهارت آزمایشگر و تعداد دفعات اندازه‌گیری بستگی دارد. دقت وسیله با کمینه درجه‌بندی آن مشخص می‌شود. خطای ناشی از اختلاف منظر یکی از خطاهای رایج در خواندن نتایج است.",
            "complete_definition": "دقت اندازه‌گیری به نزدیکی نتایج چند اندازه‌گیری به یکدیگر گفته می‌شود. خطا، اختلاف بین مقدار اندازه‌گیری شده و مقدار واقعی است. دقت وسیله اندازه‌گیری برابر با کمینه درجه‌بندی آن است. مهارت شخص آزمایشگر و تعداد دفعات اندازه‌گیری بر دقت تأثیر می‌گذارند.",
            "key_concepts": [
              "دقت",
              "خطا",
              "دقت وسیله",
              "خطای اختلاف منظر",
              "میانگین",
              "تکرار اندازه‌گیری"
            ],
            "terminology": {
              "دقت": "نزدیکی نتایج به یکدیگر",
              "خطا": "اختلاف بین مقدار اندازه‌گیری شده و واقعی",
              "اختلاف منظر": "خطای ناشی از زاویه دید اشتباه هنگام خواندن نتیجه"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "با تکرار اندازه‌گیری و گرفتن میانگین، خطا کاهش می‌یابد.",
              "دقت وسیله با کمینه درجه‌بندی آن برابر است."
            ],
            "processes": [
              "خواندن نتیجه اندازه‌گیری",
              "گزارش نتیجه با در نظر گرفتن دقت"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_5"
            ],
            "next_topics": [
              "t1_7"
            ],
            "concept_dependencies": [
              "نیاز به درک رقم‌های بامعنا"
            ],
            "required_background": null,
            "builds_upon": [
              "اندازه‌گیری"
            ],
            "enables_learning_of": [
              "گزارش علمی"
            ]
          },
          "relationships": {
            "related_topics": [
              "آمار"
            ],
            "similar_concepts": [
              "درستی"
            ],
            "differences": [
              "دقت تکرارپذیری است، درستی نزدیکی به مقدار واقعی است."
            ],
            "frequently_confused_with": [
              "درستی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1H",
            "review_interval": "P10D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تعریف دقت و خطا",
              "تشخیص دقت وسیله",
              "علت اختلاف منظر"
            ],
            "hidden_points": null,
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص دقت و درستی",
              "ناتوانی در تشخیص خطای اختلاف منظر"
            ],
            "misconceptions": [
              "دقت و درستی یک مفهوم هستند."
            ],
            "difficult_parts": [
              "تشخیص دقت و درستی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در اندازه‌گیری.",
            "study_strategy": "مطالعه مثال‌ها و تمرین تشخیص خطاها",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t1_7"
          },
          "memory_support": {
            "memory_tips": "دقت = تکرارپذیری، درستی = نزدیکی به مقدار واقعی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مثال پرتاب دارت برای درک دقت و درستی."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱-۸ (اختلاف منظر)",
              "شکل ۱-۹ (تکرار اندازه‌گیری)",
              "مثال دارت"
            ],
            "important_examples": [
              "دقت خط‌کش میلی‌متری (1 mm)"
            ],
            "real_life_examples": [
              "اندازه‌گیری در آزمایشگاه"
            ]
          }
        },
        {
          "id": "t1_7",
          "title": "چگالی",
          "core_knowledge": {
            "explanation": "چگالی (ρ) به عنوان نسبت جرم ماده به حجم آن تعریف می‌شود: ρ = m/V. چگالی در SI بر حسب کیلوگرم بر متر مکعب (kg/m^3) اندازه‌گیری می‌شود، اما یکای گرم بر سانتی‌متر مکعب (g/cm^3) نیز رایج است. چگالی یکی از ویژگی‌های فیزیکی مواد است که در تشخیص مواد و تعیین شناوری آنها کاربرد دارد.",
            "complete_definition": "چگالی، جرم واحد حجم یک ماده است و به صورت ρ = m/V تعریف می‌شود. یکای SI آن kg/m^3 است و 1 g/cm^3 = 1000 kg/m^3. چگالی به دما و فشار وابسته است و برای مواد مختلف متفاوت است.",
            "key_concepts": [
              "چگالی",
              "جرم",
              "حجم",
              "یکای چگالی",
              "کاربرد چگالی",
              "شناوری"
            ],
            "terminology": {
              "چگالی": "جرم واحد حجم یک ماده",
              "شناوری": "قابلیت یک جسم برای ماندن روی سطح یک شاره"
            },
            "formulas": {
              "ρ": "m/V",
              "1 g/cm^3": "1000 kg/m^3"
            },
            "laws": null,
            "principles": [
              "چگالی مواد با دما تغییر می‌کند.",
              "هرچه چگالی جسم بیشتر از شاره باشد، در آن فرو می‌رود."
            ],
            "processes": [
              "محاسبه چگالی از جرم و حجم",
              "تعیین جرم از چگالی و حجم"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_4",
              "t1_5"
            ],
            "next_topics": [
              "t2_1"
            ],
            "concept_dependencies": [
              "نیاز به درک جرم و حجم"
            ],
            "required_background": null,
            "builds_upon": [
              "اندازه‌گیری"
            ],
            "enables_learning_of": [
              "فشار",
              "شناوری"
            ]
          },
          "relationships": {
            "related_topics": [
              "فشار",
              "شناوری"
            ],
            "similar_concepts": [
              "چگالی نسبی"
            ],
            "differences": null,
            "frequently_confused_with": [
              "وزن مخصوص"
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
              "تعریف چگالی",
              "محاسبه چگالی",
              "تبدیل یکاهای چگالی",
              "کاربرد چگالی در شناوری"
            ],
            "hidden_points": [
              "تأثیر دما بر چگالی"
            ],
            "trick_points": [
              "سوالات مربوط به تبدیل g/cm^3 به kg/m^3"
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
              "محاسبه چگالی، جرم یا حجم"
            ],
            "analytical_question_types": [
              "تحلیل شناوری بر اساس چگالی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تبدیل یکاهای چگالی",
              "فراموش کردن رابطه ρ = m/V"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تبدیل یکای چگالی"
            ],
            "warning_points": [
              "1 g/cm^3 = 1000 kg/m^3"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم و کاربردی.",
            "study_strategy": "تمرین محاسبه چگالی از روی داده‌ها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_1"
          },
          "memory_support": {
            "memory_tips": "چگالی = جرم/حجم.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مقایسه چگالی آب و روغن."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۱-۸ (چگالی مواد)",
              "مثال محاسبه جرم اوسمیم",
              "فعالیت پرتقال"
            ],
            "important_examples": [
              "محاسبه چگالی خون",
              "محاسبه جرم هوای کلاس"
            ],
            "real_life_examples": [
              "تشخیص طلا از تقلبی (چگالی)",
              "پوکی استخوان (کاهش چگالی)"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "ویژگی‌های فیزیکی مواد",
      "chapter_objectives": [
        "بررسی حالت‌های ماده (جامد، مایع، گاز، پالسما) و ویژگی‌های آنها",
        "درک نیروهای بین مولکولی (هم‌چسبی، دگرچسبی) و پدیده‌های ناشی از آنها (کشش سطحی، ترشوندگی، مویینگی)",
        "محاسبه فشار در شاره‌ها و رابطه P = P0 + ρgh",
        "آشنایی با اصل ارشمیدس و نیروی شناوری",
        "بررسی شاره در حرکت، معادله پیوستگی و اصل برنولی"
      ],
      "estimated_total_learning_time": "PT14H",
      "overall_difficulty": 7,
      "overall_importance": 9,
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
          "title": "حالت‌های ماده و حرکت ذرات",
          "core_knowledge": {
            "explanation": "ماده در سه حالت جامد، مایع و گاز (و پالسما به عنوان حالت چهارم) وجود دارد. در جامدات، ذرات در مکان‌های معینی نوسان می‌کنند و نظم دارند. در مایعات، ذرات آزادانه‌تر حرکت می‌کنند و شکل ظرف را می‌گیرند. در گازها، ذرات با حرکت نامنظم (براونی) در تمام ظرف پخش می‌شوند. پدیده پخش در گازها سریع‌تر از مایع‌هاست.",
            "complete_definition": "ماده از ذرات بسیار ریز (اتم‌ها یا مولکول‌ها) تشکیل شده است که همواره در حرکت هستند. حالت ماده (جامد، مایع، گاز) به میزان حرکت و آرایش این ذرات بستگی دارد. در جامدات، ذرات به هم نزدیک و در مکان‌های معین قرار دارند. در مایعات، ذرات به هم نزدیک ولی آزادانه حرکت می‌کنند. در گازها، ذرات از هم دور و با حرکت سریع و نامنظم، تمام حجم ظرف را پر می‌کنند.",
            "key_concepts": [
              "جامد",
              "مایع",
              "گاز",
              "پالسما",
              "حرکت براونی",
              "پخش",
              "نظم",
              "تراکم‌پذیری"
            ],
            "terminology": {
              "حرکت براونی": "حرکت نامنظم ذرات در یک سیال",
              "پخش (نفوذ)": "پراکنده شدن ذرات یک ماده در ماده دیگر",
              "پالسما": "حالت چهارم ماده، گاز یونیزه شده"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "ذرات ماده همواره در حال حرکت هستند.",
              "با افزایش دما، حرکت ذرات شدیدتر می‌شود.",
              "گازها به راحتی متراکم می‌شوند، مایعات و جامدات نه."
            ],
            "processes": [
              "پخش مواد در گازها و مایعات"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [],
            "next_topics": [
              "t2_2"
            ],
            "concept_dependencies": [],
            "required_background": [
              "علوم تجربی پایه هفتم"
            ],
            "builds_upon": [],
            "enables_learning_of": [
              "نیروهای بین مولکولی",
              "فشار",
              "انبساط گرمایی"
            ]
          },
          "relationships": {
            "related_topics": [
              "فشار",
              "انبساط"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P10D",
            "forgetting_risk": 4,
            "difficulty_score": 3,
            "importance_score": 5,
            "reasoning_load": 3,
            "memory_load": 4
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "تشخیص حالت‌های ماده",
              "علت تراکم‌پذیری گازها",
              "پدیده پخش"
            ],
            "hidden_points": null,
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "توضیح"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و مفهومی.",
            "study_strategy": "مطالعه تفاوت سه حالت ماده",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "جامد (شکل و حجم ثابت) → مایع (شکل متغیر، حجم ثابت) → گاز (شکل و حجم متغیر).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "ذرات جامد در یک شبکه منظم، ذرات مایع نزدیک به هم ولی در حال لغزش، ذرات گاز دور از هم و در حال حرکت سریع."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲-۲ و ۲-۳ (مدل جامد)",
              "شکل ۲-۴ (پخش جوهر)",
              "فعالیت سرنگ"
            ],
            "important_examples": [
              "تراکم‌پذیری گازها",
              "پخش بو"
            ],
            "real_life_examples": [
              "پخش شدن بوی عطر",
              "حل شدن نمک در آب"
            ]
          }
        },
        {
          "id": "t2_2",
          "title": "نیروهای بین مولکولی (هم‌چسبی و دگرچسبی)",
          "core_knowledge": {
            "explanation": "نیروهای جاذبه بین مولکول‌های یک ماده (هم‌چسبی) و بین مولکول‌های مواد مختلف (دگرچسبی) وجود دارد. این نیروها کوتاه‌برد بوده و باعث پدیده‌هایی مانند کشش سطحی، ترشوندگی و مویینگی می‌شوند. کشش سطحی باعث می‌شود سطح مایع مانند یک پوسته کشسان رفتار کند.",
            "complete_definition": "هم‌چسبی، نیروی جاذبه بین مولکول‌های یک ماده است. دگرچسبی، نیروی جاذبه بین مولکول‌های دو ماده مختلف است. کشش سطحی ناشی از هم‌چسبی مولکول‌های سطح مایع است. ترشوندگی به برتری دگرچسبی بر هم‌چسبی بستگی دارد. مویینگی نتیجه ترکیب هم‌چسبی و دگرچسبی در لوله‌های باریک است.",
            "key_concepts": [
              "هم‌چسبی",
              "دگرچسبی",
              "کشش سطحی",
              "ترشوندگی",
              "مویینگی",
              "نیروی بین مولکولی"
            ],
            "terminology": {
              "هم‌چسبی": "جاذبه بین مولکول‌های همسان",
              "دگرچسبی": "جاذبه بین مولکول‌های ناهمسان",
              "کشش سطحی": "نیروی جاذبه مولکول‌های سطح مایع که باعث کاهش سطح می‌شود.",
              "مویینگی": "بالا یا پایین رفتن مایع در لوله‌های باریک"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "نیروهای بین مولکولی کوتاه‌برد هستند.",
              "اگر دگرچسبی > هم‌چسبی، مایع سطح جامد را تر می‌کند."
            ],
            "processes": [
              "تشکیل قطره",
              "بالا رفتن آب در لوله مویین"
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
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [
              "حالت‌های ماده"
            ],
            "enables_learning_of": [
              "فشار",
              "شناوری"
            ]
          },
          "relationships": {
            "related_topics": [
              "چگالی",
              "فشار"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "نیروهای درون مولکولی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص هم‌چسبی و دگرچسبی",
              "توضیح کشش سطحی",
              "توضیح مویینگی",
              "تأثیر مایع شوینده بر کشش سطحی"
            ],
            "hidden_points": [
              "کوتاه‌برد بودن نیروهای بین مولکولی"
            ],
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "توضیح پدیده"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص هم‌چسبی و دگرچسبی",
              "عدم درک علت مویینگی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "توضیح مویینگی آب و جیوه"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای درک رفتار مایعات.",
            "study_strategy": "مطالعه مثال‌های پدیده‌های بین‌مولکولی",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_3"
          },
          "memory_support": {
            "memory_tips": "هم‌چسبی = خودمان، دگرچسبی = با دیگران.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "قطره آب کروی (کشش سطحی)، آب در لوله مویین بالا می‌رود."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲-۷ (هم‌چسبی)",
              "شکل ۲-۸ (کشش سطحی)",
              "شکل ۲-۹ و ۲-۱۰ (مویینگی)"
            ],
            "important_examples": [
              "تفاوت آب و جیوه در مویینگی",
              "اثر مایع شوینده بر کشش سطحی"
            ],
            "real_life_examples": [
              "نشستن حشرات روی آب",
              "دستمال کاغذی (مویینگی)"
            ]
          }
        },
        {
          "id": "t2_3",
          "title": "فشار در شاره‌های ساکن",
          "core_knowledge": {
            "explanation": "فشار (P) به عنوان نیروی عمودی وارد بر واحد سطح تعریف می‌شود: P = F/A. در یک شاره ساکن، فشار در یک نقطه به عمق آن از سطح شاره بستگی دارد و از رابطه P = P0 + ρgh به دست می‌آید. فشار هوا در سطح دریا حدود 1.01 × 10^5 Pa (1 atm) است. فشارسنج جیوه‌ای (بارومتر) و فشارسنج U شکل (مانومتر) ابزارهای اندازه‌گیری فشار هستند.",
            "complete_definition": "فشار در شاره‌ها، نیروی عمودی وارد بر واحد سطح است. در شاره ساکن، فشار در هر نقطه برابر P = P0 + ρgh است که در آن P0 فشار سطح، ρ چگالی شاره، g شتاب گرانش و h عمق نقطه از سطح است. فشارسنج جیوه‌ای فشار جو را با ارتفاع ستون جیوه اندازه‌گیری می‌کند (P = ρgh).",
            "key_concepts": [
              "فشار",
              "پاسکال",
              "فشار شاره",
              "فشار جو",
              "بارومتر",
              "مانومتر",
              "فشار پیمانه‌ای",
              "فشار مطلق"
            ],
            "terminology": {
              "فشار مطلق": "فشار کل (نسبت به خلا)",
              "فشار پیمانه‌ای": "فشار مطلق منهای فشار جو",
              "بارومتر": "فشارسنج جیوه‌ای برای اندازه‌گیری فشار جو"
            },
            "formulas": {
              "P": "P0 + ρgh",
              "P_جو": "ρ_جیوه * g * h"
            },
            "laws": null,
            "principles": [
              "فشار در نقاط هم‌تراز یک شاره ساکن برابر است.",
              "فشار با افزایش عمق در شاره افزایش می‌یابد.",
              "فشار جو با افزایش ارتفاع کاهش می‌یابد."
            ],
            "processes": [
              "محاسبه فشار در عمق معین",
              "کار با بارومتر و مانومتر"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1",
              "t1_7"
            ],
            "next_topics": [
              "t2_4"
            ],
            "concept_dependencies": [
              "نیاز به درک چگالی و نیرو"
            ],
            "required_background": null,
            "builds_upon": [
              "چگالی"
            ],
            "enables_learning_of": [
              "شناوری",
              "برنولی"
            ]
          },
          "relationships": {
            "related_topics": [
              "شناوری",
              "برنولی"
            ],
            "similar_concepts": [
              "فشار در جامدات"
            ],
            "differences": [
              "فشار در شاره‌ها در همه جهات یکسان است."
            ],
            "frequently_confused_with": [
              "نیرو"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2.5H",
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
              "محاسبه فشار در عمق",
              "تبدیل یکاهای فشار (Pa, atm, mmHg)",
              "کاربرد رابطه P = P0 + ρgh",
              "بارومتر",
              "مانومتر"
            ],
            "hidden_points": [
              "فشار پیمانه‌ای و مطلق"
            ],
            "trick_points": [
              "سوالات مربوط به لوله U شکل"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه فشار",
              "تبدیل یکا"
            ],
            "analytical_question_types": [
              "تحلیل فشار در نقاط مختلف"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص فشار مطلق و پیمانه‌ای",
              "فراموش کردن ρgh در محاسبه",
              "عدم تشخیص نقاط هم‌تراز در مانومتر"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تحلیل لوله U شکل",
              "تشخیص فشار پیمانه‌ای"
            ],
            "warning_points": [
              "فشار پیمانه‌ای = اختلاف فشار با جو"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین مبحث شاره‌ها.",
            "study_strategy": "تمرین زیاد با لوله U شکل و بارومتر",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "P = P0 + ρgh",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مثل یک ستون آب که فشار در عمق بیشتر است."
          },
          "examples": {
            "textbook_examples": [
              "مثال زیردریایی",
              "مثال لوله U شکل",
              "فعالیت فشار در عمق"
            ],
            "important_examples": [
              "محاسبه فشار در عمق 93 متری خلیج فارس",
              "محاسبه اختلاف فشار قله دماوند"
            ],
            "real_life_examples": [
              "فشار خون",
              "زیردریایی",
              "فشارسنج باد لاستیک"
            ]
          }
        },
        {
          "id": "t2_4",
          "title": "شناوری و اصل ارشمیدس",
          "core_knowledge": {
            "explanation": "اصل ارشمیدس بیان می‌کند که هر جسم غوطه‌ور در یک شاره، نیرویی رو به بالا (نیروی شناوری) از طرف شاره بر آن وارد می‌شود که برابر با وزن شاره جابه‌جا شده توسط جسم است. اگر نیروی شناوری بزرگتر از وزن جسم باشد، جسم شناور می‌ماند و در غیر این صورت فرو می‌رود.",
            "complete_definition": "اصل ارشمیدس: وقتی تمام یا قسمتی از یک جسم در شاره‌ای فرو رود، شاره نیرویی رو به بالا بر آن وارد می‌کند که بزرگی آن برابر با وزن شاره جابه‌جا شده توسط جسم است. این نیرو را نیروی شناوری می‌نامند. چگالی جسم و شاره تعیین می‌کند که جسم شناور می‌شود، غوطه‌ور می‌شود یا فرو می‌رود.",
            "key_concepts": [
              "نیروی شناوری",
              "اصل ارشمیدس",
              "وزن شاره جابه‌جا شده",
              "شناوری",
              "غوطه‌وری"
            ],
            "terminology": {
              "نیروی شناوری": "نیروی رو به بالای وارد از طرف شاره بر جسم",
              "اصل ارشمیدس": "نیروی شناوری برابر وزن شاره جابه‌جا شده است."
            },
            "formulas": null,
            "laws": [
              "اصل ارشمیدس"
            ],
            "principles": [
              "نیروی شناوری = وزن شاره جابه‌جا شده.",
              "اگر نیروی شناوری > وزن جسم → جسم شناور می‌شود."
            ],
            "processes": [
              "تعیین شناوری بر اساس چگالی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_3",
              "t1_7"
            ],
            "next_topics": [
              "t2_5"
            ],
            "concept_dependencies": [
              "نیاز به درک فشار و چگالی"
            ],
            "required_background": null,
            "builds_upon": [
              "فشار"
            ],
            "enables_learning_of": [
              "همرفت"
            ]
          },
          "relationships": {
            "related_topics": [
              "فشار",
              "چگالی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
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
              "بیان اصل ارشمیدس",
              "تشخیص علت شناوری",
              "کاربرد اصل ارشمیدس"
            ],
            "hidden_points": [
              "وزن شاره جابه‌جا شده"
            ],
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "بیان اصل",
              "کاربرد"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل شناوری"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در بیان اصل ارشمیدس",
              "اشتباه در تشخیص نیروی شناوری"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک وزن شاره جابه‌جا شده"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "اصل مهم در شاره‌ها.",
            "study_strategy": "مطالعه آزمایش اصل ارشمیدس",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_5"
          },
          "memory_support": {
            "memory_tips": "نیروی شناوری = وزن آب جابه‌جا شده.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "جسم شناور روی آب مانند قایق."
          },
          "examples": {
            "textbook_examples": [
              "آزمایش پوشش برگ آلومینیم",
              "شکل ۲-۲۱ و ۲-۲۲ (نیروی شناوری)"
            ],
            "important_examples": [
              "آزمایش نیروسنج و ظرف لوله‌دار"
            ],
            "real_life_examples": [
              "قایق شناور",
              "غواصی",
              "زیردریایی"
            ]
          }
        },
        {
          "id": "t2_5",
          "title": "شاره در حرکت و اصل برنولی",
          "core_knowledge": {
            "explanation": "شاره در حرکت می‌تواند لایه‌ای (یکنواخت) یا آشفته (تلاطم) باشد. برای یک شاره ایده‌آل (تراکم‌ناپذیر، بدون اصطکاک و پایا)، معادله پیوستگی (A1v1 = A2v2) و اصل برنولی برقرار است. اصل برنولی بیان می‌کند که در مسیر حرکت شاره، با افزایش تندی، فشار کاهش می‌یابد. این اصل در بال هواپیما، تفنگ آب‌پاش و ... کاربرد دارد.",
            "complete_definition": "شاره ایده‌آل، شاره‌ای است که تراکم‌ناپذیر، بدون اصطکاک و پایا باشد. معادله پیوستگی (A1v1 = A2v2) برای شاره تراکم‌ناپذیر برقرار است. اصل برنولی می‌گوید در جریان لایه‌ای یک شاره، با افزایش تندی، فشار کاهش می‌یابد.",
            "key_concepts": [
              "معادله پیوستگی",
              "اصل برنولی",
              "آهنگ شارش حجمی",
              "جریان لایه‌ای",
              "جریان آشفته",
              "بال هواپیما"
            ],
            "terminology": {
              "معادله پیوستگی": "A1v1 = A2v2",
              "اصل برنولی": "در جریان شاره، با افزایش تندی فشار کاهش می‌یابد.",
              "جریان لایه‌ای": "جریان منظم و یکنواخت",
              "جریان آشفته": "جریان نامنظم و گردابی"
            },
            "formulas": {
              "آهنگ شارش حجمی": "R = A v",
              "معادله پیوستگی": "A1 v1 = A2 v2"
            },
            "laws": [
              "معادله پیوستگی",
              "اصل برنولی"
            ],
            "principles": [
              "در جریان پایا، آهنگ شارش جرم ثابت است.",
              "برنولی: افزایش تندی → کاهش فشار"
            ],
            "processes": [
              "تحلیل جریان در لوله با سطح مقطع متغیر"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_3"
            ],
            "next_topics": [
              "t3_1"
            ],
            "concept_dependencies": [
              "نیاز به درک فشار"
            ],
            "required_background": null,
            "builds_upon": [
              "فشار"
            ],
            "enables_learning_of": [
              "دینامیک شاره‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "فشار",
              "چگالی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 7,
            "reasoning_load": 7,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "بیان اصل برنولی",
              "کاربرد معادله پیوستگی",
              "کاربردهای برنولی (بال هواپیما، تفنگ آب‌پاش)"
            ],
            "hidden_points": [
              "شرایط شاره ایده‌آل"
            ],
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان اصل",
              "کاربرد"
            ],
            "calculation_question_types": [
              "محاسبه تندی با معادله پیوستگی"
            ],
            "analytical_question_types": [
              "تحلیل جریان"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در بیان برنولی",
              "عدم درک معادله پیوستگی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "کاربرد برنولی در بال هواپیما"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد مهم در فناوری.",
            "study_strategy": "مطالعه مثال‌های برنولی",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_1"
          },
          "memory_support": {
            "memory_tips": "برنولی: تندی بیشتر → فشار کمتر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "کاغذ با دمیدن به سمت بالا می‌رود (فشار بالای کاغذ کمتر)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲-۲۴ و ۲-۲۵ (معادله پیوستگی)",
              "شکل ۲-۲۶ (تفنگ آب‌پاش)",
              "آزمایش کاغذ",
              "بال هواپیما"
            ],
            "important_examples": [
              "تفنگ آب‌پاش",
              "بال هواپیما",
              "لوله کشی ساختمان"
            ],
            "real_life_examples": [
              "اسپری عطر",
              "باد ساحلی",
              "گلوله‌های کات‌دار"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "کار، انرژی و توان",
      "chapter_objectives": [
        "محاسبه انرژی جنبشی از رابطه K = 1/2 mv^2",
        "محاسبه کار انجام شده توسط نیروی ثابت (W = Fd cosθ)",
        "درک قضیه کار-انرژی جنبشی (W_net = ΔK)",
        "محاسبه انرژی پتانسیل گرانشی (U = mgh)",
        "درک اصل پایستگی انرژی مکانیکی",
        "محاسبه توان متوسط (P_av = W/Δt)",
        "آشنایی با مفهوم بازده و کاربردهای آن"
      ],
      "estimated_total_learning_time": "PT16H",
      "overall_difficulty": 8,
      "overall_importance": 10,
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
          "title": "انرژی جنبشی و کار",
          "core_knowledge": {
            "explanation": "انرژی جنبشی (K) انرژی حرکت یک جسم است و از رابطه K = 1/2 mv^2 به دست می‌آید. کار (W) در فیزیک با مفهوم روزمره آن متفاوت است و زمانی انجام می‌شود که نیرویی جسمی را در جهت خود جابه‌جا کند. کار نیروی ثابت با رابطه W = Fd cosθ محاسبه می‌شود. کار یک کمیت نرده‌ای است و یکای آن ژول است.",
            "complete_definition": "انرژی جنبشی، انرژی وابسته به حرکت جسم است: K = 1/2 mv^2. کار انجام شده توسط نیروی ثابت به صورت W = Fd cosθ تعریف می‌شود که در آن F اندازه نیرو، d اندازه جابه‌جایی و θ زاویه بین نیرو و جابه‌جایی است. کار یک کمیت نرده‌ای و یکای آن ژول (J) است.",
            "key_concepts": [
              "انرژی جنبشی",
              "کار",
              "نیروی ثابت",
              "جابه‌جایی",
              "زاویه",
              "ژول"
            ],
            "terminology": {
              "انرژی جنبشی": "انرژی یک جسم در حال حرکت",
              "کار": "انتقال انرژی با اعمال نیرو در امتداد جابه‌جایی"
            },
            "formulas": {
              "انرژی جنبشی": "K = 1/2 mv^2",
              "کار": "W = Fd cosθ",
              "کار کل": "جمع جبری کار تک تک نیروها"
            },
            "laws": null,
            "principles": [
              "کار هنگامی انجام می‌شود که نیرو و جابه‌جایی هم راستا باشند.",
              "کار کل برابر با کار نیروی خالص است."
            ],
            "processes": [
              "محاسبه انرژی جنبشی",
              "محاسبه کار انجام شده توسط هر نیرو"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "نیرو و جابه‌جایی (علوم نهم)"
            ],
            "next_topics": [
              "t3_2",
              "t3_3"
            ],
            "concept_dependencies": [
              "نیاز به درک نیرو و جابه‌جایی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "قضیه کار-انرژی",
              "پایستگی انرژی"
            ]
          },
          "relationships": {
            "related_topics": [
              "توان",
              "انرژی پتانسیل"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "نیرو"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 9,
            "reasoning_load": 7,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "محاسبه انرژی جنبشی",
              "محاسبه کار نیروی ثابت",
              "تشخیص کار مثبت و منفی",
              "محاسبه کار کل"
            ],
            "hidden_points": [
              "کار فقط توسط مؤلفه نیرو در راستای جابه‌جایی انجام می‌شود."
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
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه K",
              "محاسبه W"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن ضریب 1/2 در انرژی جنبشی",
              "استفاده از رابطه W = Fd بدون در نظر گرفتن زاویه",
              "اشتباه در محاسبه کار کل"
            ],
            "misconceptions": [
              "کار به نیروی زیاد یعنی کار زیاد"
            ],
            "difficult_parts": [
              "تشخیص کار در حالت‌های مختلف (عمود)",
              "محاسبه کار کل"
            ],
            "warning_points": [
              "اگر نیرو بر جابه‌جایی عمود باشد کار صفر است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "بنیادی‌ترین مبحث انرژی.",
            "study_strategy": "تمرین محاسبه کار در حالت‌های مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t3_2"
          },
          "memory_support": {
            "memory_tips": "انرژی جنبشی = 1/2 mv^2. کار = Fd cosθ.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "هل دادن یک جعبه روی زمین (کار مثبت) و اصطکاک (کار منفی)."
          },
          "examples": {
            "textbook_examples": [
              "مثال خودرو با تندی 54 km/h",
              "مثال ورزشکار و وزنه",
              "مثال پدر و پسر"
            ],
            "important_examples": [
              "محاسبه کار نیروی افقی",
              "محاسبه کار نیروی وزن"
            ],
            "real_life_examples": [
              "بلند کردن وزنه",
              "حرکت روی سطح شیب‌دار"
            ]
          }
        },
        {
          "id": "t3_2",
          "title": "قضیه کار-انرژی جنبشی",
          "core_knowledge": {
            "explanation": "قضیه کار-انرژی جنبشی بیان می‌کند که کار کل انجام شده روی یک جسم برابر با تغییر انرژی جنبشی آن است: W_net = ΔK = K2 - K1. اگر کار کل مثبت باشد، انرژی جنبشی افزایش و اگر منفی باشد، کاهش می‌یابد. این قضیه رابطه بین کار و انرژی جنبشی را برای هر مسیری (مستقیم یا خمیده) برقرار می‌کند.",
            "complete_definition": "قضیه کار-انرژی جنبشی: کار کل انجام شده توسط نیروهای وارد بر یک جسم (که در نتیجه کار نیروی خالص است) برابر با تغییر انرژی جنبشی جسم است: W_net = ΔK. این قضیه از قانون دوم نیوتون نتیجه می‌شود و برای هر نوع مسیری معتبر است.",
            "key_concepts": [
              "قضیه کار-انرژی جنبشی",
              "کار کل",
              "تغییر انرژی جنبشی",
              "کار مثبت",
              "کار منفی"
            ],
            "terminology": {
              "قضیه کار-انرژی جنبشی": "W_net = ΔK"
            },
            "formulas": {
              "W_net": "K2 - K1"
            },
            "laws": [
              "قضیه کار-انرژی جنبشی"
            ],
            "principles": [
              "کار کل مثبت → انرژی جنبشی افزایش می‌یابد.",
              "کار کل منفی → انرژی جنبشی کاهش می‌یابد."
            ],
            "processes": [
              "حل مسائل با استفاده از قضیه کار-انرژی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_1"
            ],
            "next_topics": [
              "t3_4",
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک انرژی جنبشی و کار"
            ],
            "required_background": null,
            "builds_upon": [
              "کار و انرژی جنبشی"
            ],
            "enables_learning_of": [
              "پایستگی انرژی"
            ]
          },
          "relationships": {
            "related_topics": [
              "قانون دوم نیوتون"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "قانون پایستگی انرژی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 8,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "استفاده از قضیه کار-انرژی برای محاسبه کار کل",
              "محاسبه تغییر انرژی جنبشی",
              "محاسبه تندی نهایی"
            ],
            "hidden_points": [
              "قضیه برای هر مسیری معتبر است."
            ],
            "trick_points": [
              "مسائل با چند نیرو"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [],
            "calculation_question_types": [
              "محاسبه کار کل",
              "محاسبه تندی"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت منفی در صورت کاهش انرژی",
              "اشتباه در محاسبه کار کل"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص کار کل از روی انرژی جنبشی"
            ],
            "warning_points": [
              "W_net = ΔK = K2 - K1"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "ابزار قدرتمند برای حل مسائل.",
            "study_strategy": "تمرین حل مسائل متنوع با قضیه کار-انرژی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "کار کل = تغییر انرژی جنبشی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "ترمز کردن خودرو (کار منفی) انرژی جنبشی را کاهش می‌دهد."
          },
          "examples": {
            "textbook_examples": [
              "مثال توپ فوتبال و دروازه‌بان",
              "مثال چترباز",
              "مثال خودرو الکتریکی"
            ],
            "important_examples": [
              "چترباز (کار نیروی مقاومت هوا)",
              "قایق بادبانی"
            ],
            "real_life_examples": [
              "ترمز کردن خودرو",
              "پرتاب توپ"
            ]
          }
        },
        {
          "id": "t3_3",
          "title": "انرژی پتانسیل گرانشی",
          "core_knowledge": {
            "explanation": "انرژی پتانسیل گرانشی (U) انرژی یک سامانه (جسم-زمین) به دلیل موقعیت آن است و با رابطه U = mgh محاسبه می‌شود. کار نیروی وزن برابر با منفی تغییر انرژی پتانسیل گرانشی است: W_weight = -ΔU. انتخاب مبدأ انرژی پتانسیل (h=0) دلخواه است و تأثیری در تغییر انرژی پتانسیل ندارد.",
            "complete_definition": "انرژی پتانسیل گرانشی سامانه جسم-زمین، انرژی ذخیره شده به دلیل ارتفاع جسم از سطح زمین است: U = mgh. کار نیروی وزن برابر با منفی تغییر انرژی پتانسیل گرانشی است: W_weight = -(U2 - U1) = -(mgh2 - mgh1). مبدأ انرژی پتانسیل را می‌توان به دلخواه انتخاب کرد.",
            "key_concepts": [
              "انرژی پتانسیل گرانشی",
              "کار نیروی وزن",
              "تغییر انرژی پتانسیل",
              "مبدأ انرژی پتانسیل"
            ],
            "terminology": {
              "انرژی پتانسیل گرانشی": "انرژی ذخیره شده به دلیل ارتفاع",
              "سامانه جسم-زمین": "جسم و زمین با هم"
            },
            "formulas": {
              "U": "mgh",
              "W_weight": "-(U2 - U1) = -ΔU"
            },
            "laws": null,
            "principles": [
              "کار نیروی وزن به مسیر بستگی ندارد.",
              "تغییر مبدأ U، تغییر ΔU را تغییر نمی‌دهد."
            ],
            "processes": [
              "محاسبه انرژی پتانسیل",
              "محاسبه کار نیروی وزن"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "کار",
              "نیروی وزن"
            ],
            "next_topics": [
              "t3_4",
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک کار"
            ],
            "required_background": null,
            "builds_upon": [
              "کار"
            ],
            "enables_learning_of": [
              "پایستگی انرژی مکانیکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انرژی جنبشی",
              "پایستگی انرژی"
            ],
            "similar_concepts": [
              "انرژی پتانسیل کشسانی",
              "انرژی پتانسیل الکتریکی"
            ],
            "differences": [
              "گرانشی به ارتفاع بستگی دارد."
            ],
            "frequently_confused_with": [
              "انرژی جنبشی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "محاسبه انرژی پتانسیل",
              "محاسبه کار نیروی وزن",
              "انتخاب مبدأ انرژی پتانسیل"
            ],
            "hidden_points": [
              "کار نیروی وزن مستقل از مسیر است."
            ],
            "trick_points": [
              "انتخاب مبدأ مختلف"
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
              "محاسبه U",
              "محاسبه W_weight"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت منفی در W_weight = -ΔU",
              "اشتباه در انتخاب مبدأ"
            ],
            "misconceptions": [
              "انرژی پتانسیل فقط به جسم تعلق دارد."
            ],
            "difficult_parts": [
              "انتخاب مبدأ انرژی پتانسیل"
            ],
            "warning_points": [
              "انرژی پتانسیل گرانشی به سامانه جسم-زمین تعلق دارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در پایستگی انرژی.",
            "study_strategy": "تمرین با مثال‌های مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_4"
          },
          "memory_support": {
            "memory_tips": "U = mgh, W_weight = -ΔU.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "جسمی که سقوط می‌کند: U کاهش، K افزایش."
          },
          "examples": {
            "textbook_examples": [
              "مثال کوهنورد",
              "مثال جسم سقوط‌کننده",
              "کار نیروی دست"
            ],
            "important_examples": [
              "کوهنورد زردکوه",
              "نیروی دست و جعبه"
            ],
            "real_life_examples": [
              "آبشار",
              "پرش با چتر"
            ]
          }
        },
        {
          "id": "t3_4",
          "title": "پایستگی انرژی مکانیکی",
          "core_knowledge": {
            "explanation": "اگر در حین حرکت یک جسم، تنها نیروی وزن (و دیگر نیروهای پایستار) کار انجام دهند، انرژی مکانیکی آن (مجموع انرژی جنبشی و پتانسیل) پایسته می‌ماند: E = K + U = ثابت. این اصل از قضیه کار-انرژی و رابطه کار نیروی وزن نتیجه می‌شود. در حضور نیروهای غیرپایستار (مانند اصطکاک)، انرژی مکانیکی پایسته نیست.",
            "complete_definition": "اصل پایستگی انرژی مکانیکی: در یک سامانه که تنها نیروهای پایستار (مانند گرانش) کار انجام می‌دهند، مجموع انرژی جنبشی و پتانسیل ثابت می‌ماند: E = K + U = ثابت. این اصل برای حرکت در غیاب اصطکاک و مقاومت هوا برقرار است.",
            "key_concepts": [
              "انرژی مکانیکی",
              "پایستگی انرژی مکانیکی",
              "نیروی پایستار",
              "نیروی غیرپایستار"
            ],
            "terminology": {
              "انرژی مکانیکی": "مجموع انرژی جنبشی و پتانسیل یک جسم",
              "نیروی پایستار": "نیرویی که کار آن مستقل از مسیر است (نیروی وزن)"
            },
            "formulas": {
              "E": "K + U",
              "E1": "E2"
            },
            "laws": [
              "پایستگی انرژی مکانیکی"
            ],
            "principles": [
              "در غیاب اصطکاک و مقاومت هوا، انرژی مکانیکی پایسته است.",
              "انرژی جنبشی و پتانسیل می‌توانند به هم تبدیل شوند."
            ],
            "processes": [
              "حل مسائل با استفاده از پایستگی انرژی مکانیکی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_2",
              "t3_3"
            ],
            "next_topics": [
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک K و U"
            ],
            "required_background": null,
            "builds_upon": [
              "انرژی جنبشی و پتانسیل"
            ],
            "enables_learning_of": [
              "کار و انرژی درونی"
            ]
          },
          "relationships": {
            "related_topics": [
              "قانون پایستگی انرژی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "قانون پایستگی انرژی (کلی)"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 9,
            "reasoning_load": 7,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "استفاده از پایستگی انرژی مکانیکی",
              "محاسبه تندی در ارتفاع‌های مختلف",
              "تشخیص پایستگی انرژی"
            ],
            "hidden_points": [
              "شرط پایستگی (فقدان نیروهای غیرپایستار)"
            ],
            "trick_points": [
              "سوالات با مسیرهای خمیده"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص پایستگی"
            ],
            "calculation_question_types": [
              "محاسبه v, h, m از E"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن شرط پایستگی (بدون اصطکاک)",
              "استفاده نادرست از معادله K1 + U1 = K2 + U2"
            ],
            "misconceptions": [
              "انرژی مکانیکی همیشه پایسته است."
            ],
            "difficult_parts": [
              "تشخیص پایستگی در مسائل واقعی"
            ],
            "warning_points": [
              "در حضور اصطکاک، انرژی مکانیکی پایسته نیست."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین اصل در مکانیک.",
            "study_strategy": "تمرین حل مسائل با استفاده از K1+U1 = K2+U2",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t3_5"
          },
          "memory_support": {
            "memory_tips": "K + U = ثابت (در غیاب اصطکاک).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تاب‌خوردن یک آونگ: تبدیل انرژی پتانسیل به جنبشی و برعکس."
          },
          "examples": {
            "textbook_examples": [
              "مثال سورتمه",
              "مثال پرش موتورسوار",
              "مثال توپ بسکتبال"
            ],
            "important_examples": [
              "سورتمه روی مسیر بدون اصطکاک",
              "توپ پرتاب شده به سبد"
            ],
            "real_life_examples": [
              "تاب خوردن",
              "سقوط آزاد"
            ]
          }
        },
        {
          "id": "t3_5",
          "title": "کار و انرژی درونی و قانون پایستگی انرژی",
          "core_knowledge": {
            "explanation": "در حضور نیروهای اتالفی (اصطکاک، مقاومت هوا)، انرژی مکانیکی جسم کاهش می‌یابد. این کاهش انرژی به انرژی درونی جسم و محیط اطراف تبدیل می‌شود. قانون پایستگی انرژی بیان می‌کند که در یک سامانه منزوی، مجموع کل انرژی‌ها ثابت می‌ماند و انرژی نه ایجاد می‌شود و نه نابود می‌شود، بلکه از شکلی به شکل دیگر تبدیل می‌شود.",
            "complete_definition": "قانون پایستگی انرژی: در یک سامانه منزوی، مجموع کل انرژی‌های موجود (از جمله انرژی درونی) ثابت می‌ماند. انرژی را نمی‌توان خلق یا نابود کرد، بلکه فقط می‌توان آن را از یک شکل به شکل دیگر تبدیل کرد. در حضور نیروهای اتالفی، بخشی از انرژی مکانیکی به انرژی درونی تبدیل می‌شود.",
            "key_concepts": [
              "انرژی درونی",
              "نیروی اتالفی",
              "اصطکاک",
              "مقاومت هوا",
              "قانون پایستگی انرژی",
              "انرژی تلف شده"
            ],
            "terminology": {
              "انرژی درونی": "مجموع انرژی‌های ذرات سازنده جسم (شامل انرژی جنبشی و پتانسیل آنها)",
              "نیروی اتالفی": "نیرویی که باعث کاهش انرژی مکانیکی می‌شود (اصطکاک، مقاومت هوا)",
              "سامانه منزوی": "سامانه‌ای که با محیط انرژی مبادله نمی‌کند."
            },
            "formulas": {
              "تغییر انرژی مکانیکی": "E2 - E1 = W_f"
            },
            "laws": [
              "قانون پایستگی انرژی"
            ],
            "principles": [
              "انرژی کل یک سامانه منزوی پایسته است.",
              "نیروهای اتالفی انرژی مکانیکی را به انرژی درونی تبدیل می‌کنند."
            ],
            "processes": [
              "محاسبه کار نیروهای اتالفی از تغییر انرژی مکانیکی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t3_4",
              "قانون دوم نیوتون"
            ],
            "next_topics": [
              "t3_6"
            ],
            "concept_dependencies": [
              "نیاز به درک انرژی مکانیکی"
            ],
            "required_background": null,
            "builds_upon": [
              "پایستگی انرژی مکانیکی"
            ],
            "enables_learning_of": [
              "ترمودینامیک"
            ]
          },
          "relationships": {
            "related_topics": [
              "قانون دوم ترمودینامیک"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "پایستگی انرژی مکانیکی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "تشخیص کار نیروهای اتالفی",
              "محاسبه انرژی تلف شده",
              "بیان قانون پایستگی انرژی"
            ],
            "hidden_points": [
              "تبدیل انرژی مکانیکی به درونی"
            ],
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان قانون"
            ],
            "calculation_question_types": [
              "محاسبه انرژی تلف شده"
            ],
            "analytical_question_types": [
              "تحلیل اتلاف انرژی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن اینکه انرژی تلف نمی‌شود، بلکه تبدیل می‌شود"
            ],
            "misconceptions": [
              "انرژی از بین می‌رود."
            ],
            "difficult_parts": [
              "تشخیص تبدیل انرژی مکانیکی به درونی"
            ],
            "warning_points": [
              "انرژی کل همیشه پایسته است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "اصل اساسی فیزیک.",
            "study_strategy": "مطالعه مثال‌های اتلاف انرژی",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_6"
          },
          "memory_support": {
            "memory_tips": "انرژی نه ایجاد می‌شود و نه نابود می‌شود (فقط تبدیل می‌شود).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "ترمز خودرو: انرژی جنبشی → گرما (انرژی درونی)."
          },
          "examples": {
            "textbook_examples": [
              "مثال چترباز",
              "مثال ترمز خودرو",
              "طرح واره نیروگاه"
            ],
            "important_examples": [
              "چترباز (کار مقاومت هوا)"
            ],
            "real_life_examples": [
              "گرم شدن لاستیک در اثر ترمز",
              "گرمای اصطکاک"
            ]
          }
        },
        {
          "id": "t3_6",
          "title": "توان و بازده",
          "core_knowledge": {
            "explanation": "توان (P) آهنگ انجام کار است: P = W/Δt. یکای توان در SI وات (W) است (1 W = 1 J/s). یکای اسب بخار (hp) نیز برای توان به کار می‌رود (1 hp ≈ 746 W). بازده یک سامانه، نسبت انرژی خروجی مفید به انرژی ورودی است و معمولاً به صورت درصد بیان می‌شود. بازده همواره کمتر از 100% است.",
            "complete_definition": "توان متوسط، کار انجام شده در واحد زمان است: P_av = W/Δt. بازده سامانه عبارت است از نسبت انرژی خروجی مفید به انرژی ورودی (کل)، که به صورت درصد بیان می‌شود. بازده = (انرژی خروجی / انرژی ورودی) × 100. بازده هر سامانه همیشه کمتر از 100% است.",
            "key_concepts": [
              "توان",
              "وات",
              "اسب بخار",
              "بازده",
              "انرژی ورودی",
              "انرژی خروجی",
              "انرژی تلف شده"
            ],
            "terminology": {
              "توان": "آهنگ انجام کار",
              "بازده": "نسبت انرژی مفید به انرژی کل"
            },
            "formulas": {
              "توان متوسط": "P_av = W/Δt",
              "بازده درصدی": "(انرژی خروجی / انرژی ورودی) × 100"
            },
            "laws": null,
            "principles": [
              "بازده همیشه کمتر از 100% است.",
              "توان متوسط = انرژی / زمان"
            ],
            "processes": [
              "محاسبه توان",
              "محاسبه بازده"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "کار",
              "انرژی"
            ],
            "next_topics": [
              "t4_1"
            ],
            "concept_dependencies": [
              "نیاز به درک کار"
            ],
            "required_background": null,
            "builds_upon": [
              "کار"
            ],
            "enables_learning_of": [
              "ترمودینامیک"
            ]
          },
          "relationships": {
            "related_topics": [
              "انرژی",
              "کار"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "انرژی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
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
              "محاسبه توان",
              "تبدیل یکاهای توان (W, hp)",
              "محاسبه بازده"
            ],
            "hidden_points": [
              "اتلاف انرژی"
            ],
            "trick_points": [
              "سوالات مربوط به بازده"
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
              "محاسبه توان",
              "محاسبه بازده"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تبدیل hp به W",
              "فراموش کردن ×100 در بازده"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "محاسبه بازده"
            ],
            "warning_points": [
              "بازده = (انرژی خروجی / انرژی ورودی) × 100"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در زندگی.",
            "study_strategy": "تمرین محاسبه توان و بازده",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_1"
          },
          "memory_support": {
            "memory_tips": "توان = کار / زمان. بازده = (مفید / کل) × 100.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک موتور توانایی انجام کار در زمان را نشان می‌دهد."
          },
          "examples": {
            "textbook_examples": [
              "مثال خودرو در حال سبقت",
              "مثال باالبر",
              "مثال تلمبه"
            ],
            "important_examples": [
              "محاسبه توان موتور باالبر",
              "محاسبه بازده تلمبه"
            ],
            "real_life_examples": [
              "برچسب انرژی لوازم خانگی",
              "موتور خودرو",
              "نیروگاه"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "دما و گرما",
      "chapter_objectives": [
        "آشنایی با دما و دمانسنجی (مقیاس‌های سلسیوس، کلوین، فارنهایت)",
        "بررسی انبساط گرمایی (طول‌ی، سطحی، حجمی) و روابط مربوطه",
        "محاسبه گرما و استفاده از رابطه Q = mcΔT",
        "بررسی تغییر حالت ماده (ذوب، انجماد، تبخیر، میعان) و گرمای نهان",
        "شناخت روش‌های انتقال گرما (رسانش، همرفت، تابش)"
      ],
      "estimated_total_learning_time": "PT14H",
      "overall_difficulty": 7,
      "overall_importance": 9,
      "prerequisite_chapters": [
        2,
        3
      ],
      "next_chapters": [],
      "topics": [
        {
          "id": "t4_1",
          "title": "دما و دمانسنجی",
          "core_knowledge": {
            "explanation": "دما معیاری از میانگین انرژی جنبشی ذرات یک ماده است. دما با دمانسنج اندازه‌گیری می‌شود که بر اساس تغییر یک کمیت دمانسنجی (مانند ارتفاع مایع) کار می‌کند. مقیاس‌های رایج دما شامل سلسیوس (θ)، کلوین (T = θ + 273.15) و فارنهایت (F = 9/5 θ + 32) هستند.",
            "complete_definition": "دما کمیتی است که میزان سردی و گرمی یک جسم را نشان می‌دهد و با میانگین انرژی جنبشی ذرات متناسب است. دمانسنج‌ها بر اساس تغییر کمیت‌های دمانسنجی (مانند حجم مایع) با دما کار می‌کنند. رابطه بین مقیاس سلسیوس و کلوین: T(K) = θ(°C) + 273.15. رابطه سلسیوس و فارنهایت: F = 9/5 θ + 32.",
            "key_concepts": [
              "دما",
              "کمیت دمانسنجی",
              "دمانسنج",
              "مقیاس سلسیوس",
              "مقیاس کلوین",
              "مقیاس فارنهایت"
            ],
            "terminology": {
              "دما": "اندازه‌ای از سردی یا گرمی جسم",
              "کمیت دمانسنجی": "ویژگی قابل اندازه‌گیری که با دما تغییر می‌کند."
            },
            "formulas": {
              "تبدیل سلسیوس به کلوین": "T = θ + 273.15",
              "تبدیل سلسیوس به فارنهایت": "F = 9/5 θ + 32"
            },
            "laws": null,
            "principles": [
              "دما با میانگین انرژی جنبشی ذرات متناسب است.",
              "تغییر دما در سلسیوس و کلوین برابر است: ΔT = Δθ."
            ],
            "processes": [
              "تبدیل دما بین مقیاس‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [],
            "next_topics": [
              "t4_2",
              "t4_3"
            ],
            "concept_dependencies": [],
            "required_background": [
              "علوم تجربی پایه هفتم"
            ],
            "builds_upon": [],
            "enables_learning_of": [
              "انبساط گرمایی",
              "گرما"
            ]
          },
          "relationships": {
            "related_topics": [
              "انبساط گرمایی",
              "گرما"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "گرما"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تبدیل دما بین مقیاس‌ها",
              "تفاوت دما و گرما",
              "تعریف دما"
            ],
            "hidden_points": [
              "دمای صفر مطلق (-273.15°C)"
            ],
            "trick_points": [
              "سوالات تبدیل دما"
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
              "تبدیل دما"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن عدد 273 در تبدیل به کلوین",
              "اشتباه در رابطه فارنهایت"
            ],
            "misconceptions": [
              "دما و گرما یک مفهوم هستند."
            ],
            "difficult_parts": [
              "تبدیل فارنهایت"
            ],
            "warning_points": [
              "T(K) = θ(°C) + 273.15"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای گرما.",
            "study_strategy": "تمرین تبدیل دماها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_2"
          },
          "memory_support": {
            "memory_tips": "K = °C + 273, F = 9/5 °C + 32.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مقیاس‌های دما مانند سه خط‌کش با مبدأهای مختلف."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴-۲ و ۴-۳ (مقیاس‌ها)",
              "تمرین تبدیل 37°C"
            ],
            "important_examples": [
              "دمای بدن (37°C = 310K = 98.6°F)",
              "دمای کویر لوت (70°C)"
            ],
            "real_life_examples": [
              "دماسنج پزشکی",
              "پیش‌بینی هوا"
            ]
          }
        },
        {
          "id": "t4_2",
          "title": "انبساط گرمایی (طول‌ی، سطحی، حجمی)",
          "core_knowledge": {
            "explanation": "بیشتر مواد با افزایش دما منبسط می‌شوند. انبساط طولی: ΔL = αL1ΔT. انبساط سطحی: ΔA = 2αA1ΔT. انبساط حجمی: ΔV = βV1ΔT که β برای جامدات ≈ 3α است. ضریب انبساط به جنس ماده بستگی دارد. انبساط غیرعادی آب (کاهش حجم از 0 تا 4°C) اهمیت ویژه‌ای در طبیعت دارد.",
            "complete_definition": "انبساط گرمایی، افزایش ابعاد جسم در اثر افزایش دما است. انبساط طولی: ΔL = αL1ΔT. انبساط سطحی: ΔA = 2αA1ΔT. انبساط حجمی: ΔV = βV1ΔT. در جامدات، β ≈ 3α. آب در محدوده 0 تا 4°C رفتار غیرعادی دارد و با افزایش دما حجم آن کاهش می‌یابد.",
            "key_concepts": [
              "انبساط طولی",
              "انبساط سطحی",
              "انبساط حجمی",
              "ضریب انبساط طولی",
              "ضریب انبساط حجمی",
              "رفتار غیرعادی آب"
            ],
            "terminology": {
              "ضریب انبساط طولی": "تغییر طول نسبی به ازای یک درجه تغییر دما",
              "رفتار غیرعادی آب": "کاهش حجم آب در محدوده 0 تا 4°C با افزایش دما"
            },
            "formulas": {
              "انبساط طولی": "ΔL = α L1 ΔT",
              "انبساط سطحی": "ΔA = 2α A1 ΔT",
              "انبساط حجمی": "ΔV = β V1 ΔT",
              "β برای جامدات": "β = 3α"
            },
            "laws": null,
            "principles": [
              "انبساط مواد به جنس آنها بستگی دارد.",
              "آب در 4°C بیشترین چگالی را دارد."
            ],
            "processes": [
              "محاسبه تغییر طول، مساحت و حجم"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_1"
            ],
            "next_topics": [
              "t4_3"
            ],
            "concept_dependencies": [
              "نیاز به درک دما"
            ],
            "required_background": null,
            "builds_upon": [
              "دما"
            ],
            "enables_learning_of": [
              "انبساط در مهندسی"
            ]
          },
          "relationships": {
            "related_topics": [
              "چگالی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "انقباض"
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
            "probability_in_exam": 50,
            "exam_points": [
              "محاسبه تغییر طول با ΔL = αL1ΔT",
              "محاسبه تغییر مساحت",
              "محاسبه تغییر حجم",
              "کاربردهای انبساط"
            ],
            "hidden_points": [
              "β = 3α برای جامدات",
              "رفتار غیرعادی آب"
            ],
            "trick_points": [
              "سوالات مربوط به انبساط مایعات در ظروف"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "کاربردها"
            ],
            "calculation_question_types": [
              "محاسبه ΔL, ΔA, ΔV"
            ],
            "analytical_question_types": [
              "تحلیل رفتار آب"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "استفاده از β = α به جای 3α",
              "فراموش کردن یکاها در محاسبات"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "محاسبه انبساط مایعات در ظروف",
              "رفتار غیرعادی آب"
            ],
            "warning_points": [
              "β(جامد) = 3α"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربردهای مهندسی مهم.",
            "study_strategy": "تمرین با مثال‌های پل و خط آهن",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_3"
          },
          "memory_support": {
            "memory_tips": "α برای طول، 2α برای سطح، 3α برای حجم (جامد).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "پل در تابستان منبسط می‌شود."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۴-۱ (ضرایب انبساط)",
              "مثال پل معلق",
              "مثال بنزین",
              "مثال حفره برنجی"
            ],
            "important_examples": [
              "محاسبه تغییر طول پل فولادی",
              "محاسبه بنزین ریخته شده"
            ],
            "real_life_examples": [
              "خط آهن",
              "بست‌های انبساطی",
              "دماسنج"
            ]
          }
        },
        {
          "id": "t4_3",
          "title": "گرما و ظرفیت گرمایی",
          "core_knowledge": {
            "explanation": "گرما، انرژی انتقال یافته بین دو جسم به دلیل اختلاف دما است. ظرفیت گرمایی (C) گرمای لازم برای افزایش دمای یک جسم به اندازه یک درجه است: C = Q/ΔT. گرمای ویژه (c) گرمای لازم برای افزایش دمای یک کیلوگرم از ماده به اندازه یک درجه است: c = C/m. رابطه Q = mcΔT برای محاسبه گرمای مبادله شده در تغییر دما استفاده می‌شود.",
            "complete_definition": "گرما، انرژی‌ای است که بر اثر اختلاف دما از جسم گرم‌تر به جسم سردتر منتقل می‌شود. ظرفیت گرمایی یک جسم (C) مقدار گرمایی است که دمای آن را یک درجه افزایش می‌دهد. گرمای ویژه (c) مقدار گرمایی است که دمای یک کیلوگرم از ماده را یک درجه افزایش می‌دهد. رابطه Q = mcΔT برای محاسبه گرما در تغییر دما به کار می‌رود.",
            "key_concepts": [
              "گرما",
              "ظرفیت گرمایی",
              "گرمای ویژه",
              "تعادل گرمایی",
              "قانون پایستگی انرژی (در گرما)"
            ],
            "terminology": {
              "گرما": "انرژی انتقال یافته به دلیل اختلاف دما",
              "گرمای ویژه": "گرمای لازم برای افزایش دمای 1 کیلوگرم ماده به اندازه 1 درجه"
            },
            "formulas": {
              "ظرفیت گرمایی": "C = Q/ΔT",
              "گرمای ویژه": "c = C/m",
              "مبادله گرما": "Q = mcΔT",
              "تعادل گرمایی": "∑Q = 0"
            },
            "laws": [
              "قانون پایستگی انرژی (در گرما)"
            ],
            "principles": [
              "در تعادل گرمایی، جمع جبری گرماهای مبادله شده صفر است.",
              "گرمای ویژه آب از بسیاری مواد بیشتر است."
            ],
            "processes": [
              "محاسبه گرما در تغییر دما",
              "یافتن دمای تعادل"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_1"
            ],
            "next_topics": [
              "t4_4"
            ],
            "concept_dependencies": [
              "نیاز به درک دما"
            ],
            "required_background": null,
            "builds_upon": [
              "دما"
            ],
            "enables_learning_of": [
              "تغییر حالت",
              "انتقال گرما"
            ]
          },
          "relationships": {
            "related_topics": [
              "گرمای ویژه"
            ],
            "similar_concepts": [],
            "differences": [
              "گرما انرژی انتقالی است، دما ویژگی ماده است."
            ],
            "frequently_confused_with": [
              "دما"
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
              "محاسبه گرمای مبادله شده",
              "محاسبه دمای تعادل",
              "کاربرد گرمای ویژه آب",
              "تفاوت دما و گرما"
            ],
            "hidden_points": [
              "انتخاب علامت Q (مثبت برای جذب گرما)"
            ],
            "trick_points": [
              "مسائل تعادل گرمایی با چند جسم"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه Q",
              "دمای تعادل"
            ],
            "analytical_question_types": [
              "تحلیل تبادل گرما"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت‌ها در تعادل گرمایی",
              "استفاده از گرمای ویژه اشتباه"
            ],
            "misconceptions": [
              "گرما یک ماده است."
            ],
            "difficult_parts": [
              "مسائل تعادل گرمایی"
            ],
            "warning_points": [
              "برای جسمی که گرما می‌گیرد، Q>0 است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبحث بسیار مهم.",
            "study_strategy": "تمرین مسائل تعادل گرمایی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t4_4"
          },
          "memory_support": {
            "memory_tips": "Q = mcΔT",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تعادل گرمایی مثل متعادل کردن ترازو با انرژی است."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۴-۳ (گرمای ویژه)",
              "مثال آب و لیوان آلومینیمی",
              "مثال گرماسنج"
            ],
            "important_examples": [
              "محاسبه گرمای ویژه فلز",
              "محاسبه دمای تعادل"
            ],
            "real_life_examples": [
              "سیستم خنک‌کننده خودرو",
              "شوفاژ"
            ]
          }
        },
        {
          "id": "t4_4",
          "title": "تغییر حالت ماده و گرمای نهان",
          "core_knowledge": {
            "explanation": "تغییر حالت ماده (ذوب، انجماد، تبخیر، میعان، تصعید) در دمای ثابت رخ می‌دهد. گرمای نهان ذوب (L_F) و گرمای نهان تبخیر (L_V) به ترتیب گرماهای مورد نیاز برای ذوب و تبخیر یک کیلوگرم ماده در نقطه ذوب و جوش آن هستند. در تغییر حالت، دمای ماده ثابت می‌ماند و انرژی صرف تغییر فاز می‌شود.",
            "complete_definition": "تغییر حالت یا گذار فاز، تبدیل یک ماده از یک حالت فیزیکی به حالت دیگر است. در طول تغییر حالت در دمای ثابت، گرما با ماده مبادله می‌شود. گرمای نهان ذوب (L_F) و گرمای نهان تبخیر (L_V) به ترتیب گرماهای مورد نیاز برای ذوب و تبخیر واحد جرم ماده هستند: Q = mL_F, Q = mL_V.",
            "key_concepts": [
              "تغییر حالت",
              "ذوب",
              "انجماد",
              "تبخیر",
              "میعان",
              "تصعید",
              "گرمای نهان ذوب",
              "گرمای نهان تبخیر"
            ],
            "terminology": {
              "تغییر حالت": "تبدیل ماده از یک فاز به فاز دیگر",
              "گرمای نهان": "گرمای مبادله شده در طول تغییر حالت"
            },
            "formulas": {
              "گرمای ذوب": "Q = ±mL_F",
              "گرمای تبخیر": "Q = ±mL_V"
            },
            "laws": null,
            "principles": [
              "در تغییر حالت، دما ثابت می‌ماند.",
              "گرمای نهان ذوب و تبخیر به جنس ماده و دما (فشار) بستگی دارد."
            ],
            "processes": [
              "محاسبه گرما در تغییر حالت",
              "تغییر حالت‌های متوالی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_3"
            ],
            "next_topics": [
              "t4_5"
            ],
            "concept_dependencies": [
              "نیاز به درک گرما"
            ],
            "required_background": null,
            "builds_upon": [
              "گرما"
            ],
            "enables_learning_of": [
              "ترمودینامیک"
            ]
          },
          "relationships": {
            "related_topics": [
              "گرما",
              "انبساط"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
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
              "محاسبه گرمای ذوب و تبخیر",
              "تشخیص تغییر حالت",
              "محاسبه گرمای کل در تغییرات دما و حالت"
            ],
            "hidden_points": [
              "ثابت بودن دما در تغییر حالت"
            ],
            "trick_points": [
              "مسائل ترکیبی (گرمایش + تغییر حالت)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص حالت"
            ],
            "calculation_question_types": [
              "محاسبه Q",
              "محاسبه m"
            ],
            "analytical_question_types": [
              "تحلیل نمودار دما-زمان"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن مرحله تغییر حالت در محاسبه",
              "استفاده از c به جای L در تغییر حالت"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "مسائل ترکیبی (گرمایش و تغییر حالت)"
            ],
            "warning_points": [
              "در تغییر حالت دما ثابت است، از L استفاده می‌شود نه c."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبحث کلیدی در گرما.",
            "study_strategy": "تمرین مسائل ترکیبی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t4_5"
          },
          "memory_support": {
            "memory_tips": "ذوب و تبخیر: Q = mL (گرماگیر).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "ذوب یخ در دمای ثابت 0°C."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۴-۴ (نقطه ذوب و گرمای نهان ذوب)",
              "مثال نقره",
              "مثال کتری برقی"
            ],
            "important_examples": [
              "ذوب گالیم",
              "تبخیر آب در کتری",
              "میعان بخار روی پنجره"
            ],
            "real_life_examples": [
              "یخ در حال ذوب",
              "پختن غذا",
              "عرق کردن بدن"
            ]
          }
        },
        {
          "id": "t4_5",
          "title": "روش‌های انتقال گرما",
          "core_knowledge": {
            "explanation": "گرما به سه روش اصلی منتقل می‌شود: رسانش (انتقال در جامدات از طریق ارتعاش اتم‌ها و الکترون‌های آزاد)، همرفت (انتقال در شاره‌ها از طریق جابه‌جایی ماده) و تابش (انتقال از طریق امواج الکترومغناطیسی، بدون نیاز به محیط مادی). در طبیعت، اغلب هر سه روش به طور همزمان عمل می‌کنند.",
            "complete_definition": "روش‌های انتقال گرما عبارتند از: 1) رسانش: انتقال گرما در جامدات و بدون جابه‌جایی ماده، 2) همرفت: انتقال گرما در مایعات و گازها از طریق جابه‌جایی بخش‌های گرم و سرد ماده، 3) تابش: انتقال گرما از طریق امواج الکترومغناطیسی که نیازی به محیط مادی ندارد. سطوح تیره و ناصاف تابش بیشتری جذب و گسیل می‌کنند.",
            "key_concepts": [
              "رسانش گرمایی",
              "همرفت",
              "همرفت واداشته",
              "همرفت طبیعی",
              "تابش گرمایی",
              "مواد عایق",
              "وارونگی دما"
            ],
            "terminology": {
              "رسانش": "انتقال گرما بدون جابه‌جایی ماده",
              "همرفت": "انتقال گرما با جابه‌جایی ماده",
              "تابش": "انتقال گرما با امواج الکترومغناطیسی"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "فلزات رسانای خوب گرما هستند (الکترون‌های آزاد).",
              "همرفت در اثر کاهش چگالی با افزایش دما رخ می‌دهد.",
              "سطوح تیره تابش بیشتری جذب و گسیل می‌کنند."
            ],
            "processes": [
              "تشخیص روش انتقال گرما در مثال‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_3",
              "t4_4"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک گرما"
            ],
            "required_background": null,
            "builds_upon": [
              "گرما"
            ],
            "enables_learning_of": [
              "ترمودینامیک",
              "کاربردهای صنعتی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انرژی",
              "چگالی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص روش انتقال گرما",
              "توضیح رسانش، همرفت، تابش",
              "کاربردها"
            ],
            "hidden_points": [
              "علت وارونگی دما"
            ],
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "توضیح"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مثال‌ها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص رسانش و همرفت",
              "عدم درک تابش"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص روش انتقال در مثال‌ها",
              "همرفت واداشته"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در زندگی.",
            "study_strategy": "مطالعه مثال‌های کتاب",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "رسانش (جامد)، همرفت (شاره)، تابش (امواج).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "شعله شمع: رسانش (ساقه)، همرفت (هوا)، تابش (احساس گرما از دور)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴-۲۵ تا ۴-۳۶ (هر سه روش)"
            ],
            "important_examples": [
              "رسانش در فلزات",
              "همرفت در آب و هوا",
              "تابش خورشید"
            ],
            "real_life_examples": [
              "یخچال",
              "شوفاژ",
              "لباس عایق",
              "بادگیر"
            ]
          }
        }
      ]
    }
  ]
};

export default { PHYSICS_10_KB };
