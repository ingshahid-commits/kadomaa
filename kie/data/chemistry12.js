/**
 * chemistry12.js  —  Kadoma knowledge base
 * -----------------------------------------------------------------------
 * Source: user-provided chemistry knowledge-base export, converted to
 * the same shape as biology10/11/12.js (knowledge_base[] of chapters,
 * each with topics[] carrying learning_metadata.importance_score) so
 * it works with the existing curriculumAdapter.js unchanged. Every
 * topic field was preserved verbatim - only the grouping (flat
 * chapters+topics -> topics nested inside chapters) changed, and one
 * malformed JSON object in the source (two unlabeled formula strings)
 * was given neutral placeholder labels (‌واکنش ۲/۳) since no real
 * labels existed to recover.
 * -----------------------------------------------------------------------
 */
export const CHEMISTRY_12_KB = {
  "textbook_metadata": {
    "title": "شیمی (۳) - دوازدهم",
    "grade": "پایه دوازدهم",
    "branch": "رشته علوم تجربی / ریاضی"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "مولکول‌ها در خدمت تندرستی",
      "chapter_objectives": [
        "آشنایی با ساختار صابون و شوینده‌ها و نحوه عملکرد آنها",
        "درک مفهوم آب سخت و تأثیر آن بر عملکرد صابون",
        "شناخت اسیدها و بازها بر اساس مدل آرنیوس",
        "درک مفهوم pH و محاسبات مربوط به آن",
        "آشنایی با ثابت یونش اسید و تعادل شیمیایی",
        "بررسی واکنش خنثی‌سازی و کاربرد آن در ضداسیدها"
      ],
      "overall_difficulty": 7,
      "overall_importance": 9,
      "topics": [
        {
          "id": "t1_1",
          "title": "ساختار صابون و عملکرد پاک‌کنندگی",
          "core_knowledge": {
            "explanation": "صابون نمک سدیم یا پتاسیم یک اسید چرب است و مولکول آن دارای دو بخش قطبی (آب دوست) و ناقطبی (چربی دوست) است. بخش ناقطبی با چربی‌ها جاذبه دارد و بخش قطبی در آب حل می‌شود. این ویژگی به صابون امکان می‌دهد تا چربی‌ها را از سطح جدا کرده و به صورت میسل در آب پراکنده کند.",
            "complete_definition": "صابون یک شوینده یونی است که از واکنش یک اسید چرب با یک باز قوی (مانند NaOH یا KOH) به دست می‌آید. فرمول کلی آن RCOO-Na+ است که در آن R یک زنجیر هیدروکربنی بلند است. مولکول صابون دارای یک سر قطبی (کربوکسیلات) و یک دم ناقطبی (زنجیر آلکیل) است.",
            "key_concepts": [
              "صابون",
              "اسید چرب",
              "بخش قطبی",
              "بخش ناقطبی",
              "آب دوست",
              "چربی دوست",
              "میسل",
              "پاک‌کنندگی"
            ],
            "terminology": {
              "صابون": "نمک سدیم یا پتاسیم یک اسید چرب",
              "اسید چرب": "کربوکسیلیک اسیدی با زنجیر بلند هیدروکربنی",
              "بخش آب دوست": "گروه کربوکسیلات (یونی) که با آب جاذبه دارد.",
              "بخش چربی دوست": "زنجیر هیدروکربنی که با چربی جاذبه دارد.",
              "میسل": "توده کروی از مولکول‌های صابون که چربی را در خود محصور می‌کند و در آب پراکنده می‌سازد."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "مواد قطبی در حالل‌های قطبی و مواد ناقطبی در حالل‌های ناقطبی حل می‌شوند.",
              "مولکول صابون به دلیل ساختار دوگانه، می‌تواند به عنوان پلی میان آب و چربی عمل کند."
            ],
            "processes": [
              "تشکیل میسل: دم‌های چربی دوست به سمت چربی و سرهای آب دوست به سمت آب قرار می‌گیرند.",
              "شست‌وشو: چربی از سطح جدا شده و در آب پراکنده می‌شود."
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "قطبیت مولکول‌ها",
              "نیروهای بین مولکولی",
              "انحلال پذیری"
            ],
            "next_topics": [
              "t1_2",
              "t1_3"
            ],
            "concept_dependencies": [
              "نیاز به درک نیروهای بین مولکولی"
            ],
            "required_background": null,
            "builds_upon": [
              "انحلال پذیری"
            ],
            "enables_learning_of": [
              "شوینده‌های غیرصابونی",
              "عملکرد پاک کننده‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "شیمی آلی",
              "سورفکتانت‌ها"
            ],
            "similar_concepts": [
              "شوینده‌های غیرصابونی"
            ],
            "differences": [
              "شوینده‌های غیرصابونی از مواد پتروشیمیایی تهیه می‌شوند و در آب سخت رسوب نمی‌دهند."
            ],
            "frequently_confused_with": [
              "شوینده‌های غیرصابونی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 6,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "توضیح ساختار صابون",
              "تشخیص بخش‌های آب دوست و چربی دوست",
              "تشکیل میسل",
              "عملکرد پاک‌کنندگی"
            ],
            "hidden_points": [
              "نقش قطبی و ناقطبی در شست‌وشو"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "ساختار و عملکرد"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل نحوه پاک شدن چربی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص بخش قطبی و ناقطبی صابون",
              "عدم درک نحوه تشکیل میسل"
            ],
            "misconceptions": [
              "صابون فقط چربی را حل می‌کند."
            ],
            "difficult_parts": [
              "تشکیل میسل و عملکرد آن"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم پایه‌ای برای شوینده‌ها.",
            "study_strategy": "رسم ساختار صابون و تشخیص بخش‌های آن",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_2"
          },
          "memory_support": {
            "memory_tips": "دم چربی دوست (ناقطبی) و سر آب دوست (قطبی).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مولکول صابون را مانند یک میخ با سر قطبی و دم ناقطبی تصور کنید."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳ (مراحل پاک شدن لکه چربی)",
              "ساختار صابون (RCOONa)"
            ],
            "important_examples": [
              "تشکیل رسوب در آب سخت"
            ],
            "real_life_examples": [
              "شستن دست با صابون",
              "صابون سنتی مراغه"
            ]
          }
        },
        {
          "id": "t1_2",
          "title": "آب سخت و اثر آن بر صابون",
          "core_knowledge": {
            "explanation": "آب سخت حاوی یون‌های کلسیم (Ca2+) و منیزیم (Mg2+) است. این یون‌ها با یون کربوکسیلات صابون واکنش داده و رسوب نامحلول تشکیل می‌دهند که باعث کاهش کف و قدرت پاک‌کنندگی صابون می‌شود. به این رسوب، رسوب صابونی (چربی صابون) می‌گویند.",
            "complete_definition": "آب سخت، آبی است که دارای غلظت قابل توجهی از یون‌های کلسیم و منیزیم است. این یون‌ها با صابون واکنش داده و ترکیبات نامحلول (رسوب) به صورت (RCOO)2Ca یا (RCOO)2Mg تشکیل می‌دهند که باعث کاهش کارایی صابون و ایجاد لکه بر روی لباس می‌شوند.",
            "key_concepts": [
              "آب سخت",
              "یون کلسیم",
              "یون منیزیم",
              "رسوب صابونی",
              "آب نرم"
            ],
            "terminology": {
              "آب سخت": "آبی که دارای یون‌های کلسیم و منیزیم است.",
              "رسوب صابونی": "ترکیب نامحلول کلسیم یا منیزیم با صابون."
            },
            "formulas": {
              "واکنش با کلسیم": "2RCOONa(aq) + CaCl2(aq) → (RCOO)2Ca(s) + 2NaCl(aq)"
            },
            "laws": null,
            "principles": [
              "یون‌های کلسیم و منیزیم با صابون رسوب می‌دهند.",
              "صابون در آب سخت کف کمتری تولید می‌کند."
            ],
            "processes": [
              "تشکیل رسوب صابونی"
            ],
            "mechanisms": null,
            "reaction_types": [
              "رسوب‌گذاری"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار صابون",
              "یون‌ها"
            ],
            "next_topics": [
              "t1_3"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار صابون"
            ],
            "required_background": null,
            "builds_upon": [
              "صابون"
            ],
            "enables_learning_of": [
              "شوینده‌های غیرصابونی"
            ]
          },
          "relationships": {
            "related_topics": [
              "شوینده‌های غیرصابونی"
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
            "importance_score": 5,
            "reasoning_load": 3,
            "memory_load": 4
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "تشخیص آب سخت",
              "واکنش با صابون",
              "دلیل کاهش کف"
            ],
            "hidden_points": [
              "نقش یون‌های کلسیم و منیزیم"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص و توضیح"
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
            "advisor_recommendation": "کاربرد عملی در شوینده‌ها.",
            "study_strategy": "مطالعه واکنش‌های رسوبی",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t1_3"
          },
          "memory_support": {
            "memory_tips": "آب سخت = Ca2+ و Mg2+ = رسوب با صابون.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "لکه‌های سفید روی لباس پس از شستشو با صابون در آب سخت."
          },
          "examples": {
            "textbook_examples": [
              "کاوش کنید (اثر یون‌های کلسیم و منیزیم بر کف صابون)",
              "معادلات واکنش"
            ],
            "important_examples": [
              "تشکیل رسوب (RCOO)2Mg و (RCOO)2Ca"
            ],
            "real_life_examples": [
              "کم بودن کف صابون در آب دریا",
              "لکه‌های سفید روی لباس"
            ]
          }
        },
        {
          "id": "t1_3",
          "title": "اسیدها و بازها (تعریف آرنیوس و تفکیک)",
          "core_knowledge": {
            "explanation": "بر اساس تعریف آرنیوس، اسید ماده‌ای است که در آب با یونش، غلظت یون هیدرونیوم (H3O+) را افزایش می‌دهد و باز ماده‌ای است که با یونش، غلظت یون هیدروکسید (OH-) را افزایش می‌دهد. اسیدهای قوی به طور کامل یونیده می‌شوند، در حالی که اسیدهای ضعیف به طور جزئی یونیده می‌شوند.",
            "complete_definition": "اسید آرنیوس، ماده‌ای است که در آب یونیده شده و یون H+ (هیدرونیوم) تولید می‌کند. باز آرنیوس، ماده‌ای است که در آب یونیده شده و یون OH- تولید می‌کند. در محلول آبی، غلظت یون H+ و OH- با یکدیگر رابطه معکوس دارند.",
            "key_concepts": [
              "اسید آرنیوس",
              "باز آرنیوس",
              "یون هیدرونیوم (H3O+)",
              "یون هیدروکسید (OH-)",
              "یونش",
              "اسید قوی",
              "اسید ضعیف",
              "الکترولیت"
            ],
            "terminology": {
              "اسید آرنیوس": "ماده‌ای که در آب غلظت یون H+ را افزایش می‌دهد.",
              "باز آرنیوس": "ماده‌ای که در آب غلظت یون OH- را افزایش می‌دهد.",
              "یون هیدرونیوم": "یون H3O+ که از ترکیب H+ با آب به دست می‌آید.",
              "یونش": "فرایند تجزیه یک ماده به یون‌ها در آب."
            },
            "formulas": {
              "HCl → H+ + Cl-": null,
              "NaOH → Na+ + OH-": null,
              "CH3COOH ⇌ H+ + CH3COO-": null
            },
            "laws": null,
            "principles": [
              "اسیدهای قوی به طور کامل یونیده می‌شوند (α ≈ 1).",
              "اسیدهای ضعیف به طور جزئی یونیده می‌شوند (α < 1)."
            ],
            "processes": [
              "یونش اسیدها و بازها در آب"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "یون‌ها",
              "انحلال یونی",
              "الکترولیت‌ها"
            ],
            "next_topics": [
              "t1_4",
              "t1_5"
            ],
            "concept_dependencies": [
              "نیاز به درک یون‌ها و تفکیک"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "pH",
              "تعادل اسید-باز",
              "نوترکیزی"
            ]
          },
          "relationships": {
            "related_topics": [
              "تعادل شیمیایی",
              "نوترکیزی"
            ],
            "similar_concepts": [
              "برونستد-لوری"
            ],
            "differences": [
              "تعریف آرنیوس محدود به آب است، برونستد-لوری شامل هر حلالی می‌شود."
            ],
            "frequently_confused_with": [
              "اسید و باز برونستد-لوری"
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
              "تعریف اسید و باز آرنیوس",
              "تشخیص اسید و باز",
              "تشخیص قوی و ضعیف",
              "معادله یونش"
            ],
            "hidden_points": [
              "رسانایی الکتریکی محلول‌ها و ارتباط با یونش"
            ],
            "trick_points": [
              "سوالات مربوط به تفاوت اسید قوی و ضعیف"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل میزان یونش"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص اسید و باز آرنیوس",
              "عدم درک مفهوم یونش کامل و جزئی"
            ],
            "misconceptions": [
              "همه اسیدها قوی هستند."
            ],
            "difficult_parts": [
              "تشخیص اسید ضعیف از قوی",
              "نوشتن معادله یونش"
            ],
            "warning_points": [
              "اسیدهای قوی به طور کامل یونیده می‌شوند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه و اساس اسید و باز.",
            "study_strategy": "تمرین نوشتن معادلات یونش و تشخیص قوی و ضعیف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_4"
          },
          "memory_support": {
            "memory_tips": "اسید = H+، باز = OH-.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "اسیدها مانند اهداکننده H+ و بازها مانند گیرنده H+ (اگرچه آرنیوس اینطور نیست)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱ (نمای ذره‌ای از محلول‌ها)",
              "معادله یونش HCl و HF"
            ],
            "important_examples": [
              "HCl (قوی)",
              "CH3COOH (ضعیف)",
              "NaOH (باز قوی)",
              "NH3 (باز ضعیف)"
            ],
            "real_life_examples": [
              "سرکه (اسید استیک ضعیف)",
              "سود سوزآور (سدیم هیدروکسید قوی)"
            ]
          }
        },
        {
          "id": "t1_4",
          "title": "pH و محاسبات آن",
          "core_knowledge": {
            "explanation": "pH معیاری برای سنجش اسیدی یا بازی بودن یک محلول است و به صورت منفی لگاریتم غلظت یون هیدرونیوم تعریف می‌شود: pH = -log[H+]. در آب خالص و محلول‌های خنثی در دمای اتاق، [H+] = 10^-7 و pH = 7. محلول‌های اسیدی دارای pH<7 و محلول‌های بازی دارای pH>7 هستند. همچنین در دمای اتاق، حاصلضرب غلظت یون‌های H+ و OH- برابر با 10^-14 است.",
            "complete_definition": "pH عبارت است از لگاریتم منفی غلظت مولی یون هیدرونیوم: pH = -log[H+]. این کمیت برای بیان اسیدیته یا بازی بودن محلول‌های آبی رقیق در دمای اتاق به کار می‌رود و مقادیر آن بین 0 تا 14 است. در آب خالص، [H+] = [OH-] = 10^-7 و pH=7.",
            "key_concepts": [
              "pH",
              "لگاریتم",
              "غلظت یون هیدرونیوم",
              "محلول اسیدی",
              "محلول بازی",
              "محلول خنثی",
              "Kw"
            ],
            "terminology": {
              "pH": "منفی لگاریتم غلظت یون هیدرونیوم.",
              "محلول خنثی": "محلولی که در آن [H+] = [OH-] و pH = 7.",
              "Kw": "ثابت یونش آب که در دمای اتاق برابر با 10^-14 است."
            },
            "formulas": {
              "pH": "-log[H+]",
              "pOH": "-log[OH-]",
              "pH + pOH": "14",
              "Kw": "[H+][OH-] = 10^-14"
            },
            "laws": null,
            "principles": [
              "در محلول اسیدی، [H+] > [OH-] و pH < 7.",
              "در محلول بازی، [OH-] > [H+] و pH > 7.",
              "هر چه pH کوچک‌تر باشد، اسیدیته بیشتر است."
            ],
            "processes": [
              "محاسبه pH از [H+] و برعکس"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اسید و باز آرنیوس",
              "لگاریتم",
              "غلظت"
            ],
            "next_topics": [
              "t1_5",
              "t1_6"
            ],
            "concept_dependencies": [
              "نیاز به درک غلظت و لگاریتم"
            ],
            "required_background": null,
            "builds_upon": [
              "اسید و باز"
            ],
            "enables_learning_of": [
              "محاسبات تعادل اسید-باز"
            ]
          },
          "relationships": {
            "related_topics": [
              "لگاریتم",
              "محاسبات"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "pOH"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 8,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 90,
            "exam_points": [
              "محاسبه pH از [H+]",
              "محاسبه [H+] از pH",
              "تشخیص اسیدی یا بازی بودن",
              "رابطه pH و pOH",
              "محاسبه [OH-] از Kw"
            ],
            "hidden_points": [
              "استفاده از لگاریتم"
            ],
            "trick_points": [
              "سوالات با غلظت‌های اعشاری"
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
              "محاسبه pH, [H+], [OH-]"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت منفی در فرمول pH",
              "اشتباه در محاسبه لگاریتم",
              "تشخیص ندادن اینکه pH=7 خنثی است"
            ],
            "misconceptions": [
              "pH و pOH یکسان هستند."
            ],
            "difficult_parts": [
              "محاسبه pH از غلظت‌های بسیار کوچک",
              "تبدیل pH به [H+]"
            ],
            "warning_points": [
              "pH = -log[H+]",
              "pH + pOH = 14"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت محاسباتی بسیار مهم.",
            "study_strategy": "تمرین زیاد تبدیل pH و غلظت",
            "review_strategy": "مرور روزانه تا تسلط کامل",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t1_5"
          },
          "memory_support": {
            "memory_tips": "pH = -log[H+]",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مقیاس pH مانند یک خط کش از 0 تا 14 با خنثی در 7 است."
          },
          "examples": {
            "textbook_examples": [
              "محاسبه pH شیره معده",
              "محاسبه pH آب سیب",
              "جدول pH و [H+]"
            ],
            "important_examples": [
              "محاسبه pH اسید قوی (HCl 0.1 M)",
              "محاسبه [H+] از pH=3.7"
            ],
            "real_life_examples": [
              "pH معده (بسیار اسیدی)",
              "pH خون (حدود 7.4)"
            ]
          }
        },
        {
          "id": "t1_5",
          "title": "ثابت یونش اسید (Ka) و تعادل شیمیایی",
          "core_knowledge": {
            "explanation": "اسیدهای ضعیف در آب به طور ناقص یونیده می‌شوند و یک تعادل برقرار می‌شود. ثابت یونش اسید (Ka) نسبت غلظت تعادلی یون‌ها به غلظت اسید یونیده نشده است. Ka معیاری برای قدرت اسید است: هرچه Ka بزرگ‌تر باشد، اسید قوی‌تر است. این تعادل از قانون عمل جرم پیروی می‌کند و ثابت تعادل فقط به دما بستگی دارد.",
            "complete_definition": "ثابت یونش اسید (Ka) عبارت است از حاصلضرب غلظت‌های تعادلی یون‌های حاصل از یونش تقسیم بر غلظت تعادلی اسید یونیده نشده، برای یک اسید ضعیف مانند HA: Ka = [H+][A-]/[HA]. این ثابت در دمای معین ثابت است و نشان‌دهنده میزان یونش اسید است.",
            "key_concepts": [
              "ثابت یونش اسید (Ka)",
              "تعادل شیمیایی",
              "قانون عمل جرم",
              "اسید ضعیف",
              "غلظت تعادلی"
            ],
            "terminology": {
              "ثابت یونش اسید (Ka)": "ثابت تعادل برای واکنش یونش یک اسید ضعیف در آب.",
              "تعادل شیمیایی": "حالتی که در آن سرعت واکنش رفت و برگشت برابر است و غلظت مواد ثابت می‌ماند."
            },
            "formulas": {
              "برای اسید HA": "HA(aq) ⇌ H+(aq) + A-(aq)",
              "Ka": "[H+][A-]/[HA]"
            },
            "laws": [
              "قانون عمل جرم"
            ],
            "principles": [
              "تعادل شیمیایی پویاست (واکنش رفت و برگشت همزمان انجام می‌شود).",
              "ثابت تعادل فقط به دما بستگی دارد.",
              "هرچه Ka بزرگ‌تر باشد، اسید قوی‌تر است."
            ],
            "processes": [
              "نوشتن عبارت Ka از معادله واکنش",
              "محاسبه Ka از داده‌های تعادلی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اسید و باز آرنیوس",
              "واکنش برگشت‌پذیر",
              "غلظت تعادلی"
            ],
            "next_topics": [
              "t1_6",
              "t4_4"
            ],
            "concept_dependencies": [
              "نیاز به درک تعادل و قانون عمل جرم"
            ],
            "required_background": null,
            "builds_upon": [
              "تعادل شیمیایی (شیمی یازدهم)"
            ],
            "enables_learning_of": [
              "محاسبه pH اسیدهای ضعیف",
              "بازهای ضعیف"
            ]
          },
          "relationships": {
            "related_topics": [
              "تعادل شیمیایی",
              "قانون عمل جرم"
            ],
            "similar_concepts": [
              "ثابت یونش باز (Kb)"
            ],
            "differences": [
              "Ka برای اسید، Kb برای باز است."
            ],
            "frequently_confused_with": [
              "ثابت تعادل عمومی (K)"
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
              "تعریف Ka",
              "نوشتن عبارت Ka",
              "رابطه Ka و قدرت اسید",
              "محاسبه Ka از غلظت‌های تعادلی"
            ],
            "hidden_points": [
              "ثابت تعادل فقط به دما بستگی دارد"
            ],
            "trick_points": [
              "سوالات مربوط به مقایسه قدرت اسیدها از روی Ka"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "مقایسه"
            ],
            "calculation_question_types": [
              "محاسبه Ka",
              "محاسبه غلظت‌ها از Ka"
            ],
            "analytical_question_types": [
              "تحلیل داده‌های تعادلی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نوشتن عبارت Ka (فراموش کردن توان‌ها)",
              "تشخیص ندادن اینکه فقط غلظت‌های تعادلی در عبارت قرار می‌گیرند"
            ],
            "misconceptions": [
              "Ka بزرگ یعنی اسید ضعیف است."
            ],
            "difficult_parts": [
              "نوشتن عبارت Ka برای اسیدهای چند پروتونه",
              "ارتباط Ka با pH"
            ],
            "warning_points": [
              "Ka = [H+][A-]/[HA]",
              "هرچه Ka بزرگ‌تر، اسید قوی‌تر"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "درک تعادل برای شیمی اسید-باز ضروری است.",
            "study_strategy": "تمرین نوشتن عبارات Ka و محاسبات",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t1_6"
          },
          "memory_support": {
            "memory_tips": "Ka = [H+][A-]/[HA]",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تعادل اسید ضعیف مانند یک ترازو با جرم‌های مختلف است."
          },
          "examples": {
            "textbook_examples": [
              "جدول غلظت‌های تعادلی HF",
              "جدول Ka برخی اسیدها"
            ],
            "important_examples": [
              "Ka استیک اسید (1.8×10^-5)",
              "Ka فورمیک اسید (1.8×10^-4)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_6",
          "title": "خنثی‌سازی و ضداسیدها",
          "core_knowledge": {
            "explanation": "واکنش خنثی‌سازی، واکنش بین یک اسید و یک باز است که نمک و آب تولید می‌کند. در عمل، یون‌های H+ و OH- با هم ترکیب شده و آب تشکیل می‌دهند. ضداسیدها موادی هستند که اسید معده را خنثی می‌کنند و معمولاً حاوی بازهای ضعیف مانند Mg(OH)2، Al(OH)3 یا NaHCO3 هستند.",
            "complete_definition": "خنثی‌سازی واکنش بین یک اسید و یک باز است که محصولات آن نمک و آب است. در محلول آبی، این واکنش به صورت H+(aq) + OH-(aq) → H2O(l) نوشته می‌شود. ضداسیدها داروهایی هستند که اسید معده را خنثی کرده و سوزش معده را کاهش می‌دهند.",
            "key_concepts": [
              "خنثی‌سازی",
              "نمک",
              "آب",
              "ضداسید",
              "اسید معده",
              "هیدروکلریک اسید"
            ],
            "terminology": {
              "خنثی‌سازی": "واکنش اسید با باز برای تولید نمک و آب.",
              "ضداسید": "ماده‌ای که اسید معده را خنثی می‌کند."
            },
            "formulas": {
              "خنثی‌سازی": "HCl + NaOH → NaCl + H2O",
              "ضداسید با Mg(OH)2": "2HCl + Mg(OH)2 → MgCl2 + 2H2O"
            },
            "laws": null,
            "principles": [
              "در واکنش خنثی‌سازی، یون‌های H+ و OH- با هم ترکیب شده و آب می‌سازند.",
              "ضداسیدها با خنثی کردن اسید معده، درد را کاهش می‌دهند."
            ],
            "processes": [
              "نوشتن معادله خنثی‌سازی"
            ],
            "mechanisms": null,
            "reaction_types": [
              "خنثی‌سازی"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اسید و باز",
              "معادله شیمیایی",
              "موازنه"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک اسید و باز"
            ],
            "required_background": null,
            "builds_upon": [
              "اسید و باز"
            ],
            "enables_learning_of": [
              "کاربرد اسید و باز در پزشکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "اسید و باز",
              "محلول‌ها"
            ],
            "similar_concepts": [
              "خنثی‌سازی در صنعت"
            ],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
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
              "تعریف خنثی‌سازی",
              "نوشتن معادله خنثی‌سازی",
              "شناخت ضداسیدها",
              "واکنش ضداسید با اسید معده"
            ],
            "hidden_points": [
              "کاربرد ضداسیدها"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "کاربرد"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن موازنه معادله خنثی‌سازی"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد مهم اسید و باز در زندگی.",
            "study_strategy": "مطالعه مثال‌های ضداسید",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t2_1"
          },
          "memory_support": {
            "memory_tips": "ضداسید + اسید → نمک + آب",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مصرف ضداسید مانند خاموش کردن آتش با آب است."
          },
          "examples": {
            "textbook_examples": [
              "واکنش Mg(OH)2 با HCl",
              "جدول ضداسیدها"
            ],
            "important_examples": [
              "Mg(OH)2 (شیر منیزی)",
              "Al(OH)3",
              "NaHCO3 (جوش شیرین)"
            ],
            "real_life_examples": [
              "درمان سوزش معده",
              "شیر منیزی"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "آسایش و رفاه در سایه شیمی",
      "chapter_objectives": [
        "تشخیص واکنش‌های اکسایش-کاهش و تعیین اعداد اکسایش",
        "درک عملکرد سلول گالوانی و محاسبه نیروی الکتروموتوری",
        "آشنایی با پتانسیل استاندارد الکترود و سری الکتروشیمیایی",
        "بررسی الکترولیز و کاربرد آن در تولید فلزات",
        "شناخت خوردگی و روش‌های جلوگیری از آن (حفاظت کاتدی، گالوانیزه کردن)",
        "آشنایی با باتری‌ها و سلول‌های سوختی"
      ],
      "overall_difficulty": 8,
      "overall_importance": 10,
      "topics": [
        {
          "id": "t2_1",
          "title": "اکسایش-کاهش و عدد اکسایش",
          "core_knowledge": {
            "explanation": "اکسایش عبارت است از از دست دادن الکترون و کاهش عبارت است از گرفتن الکترون. عدد اکسایش، بار فرضی است که به یک اتم در یک ترکیب نسبت داده می‌شود. تغییر عدد اکسایش نشان‌دهنده وقوع اکسایش یا کاهش است. عوامل اکسنده، الکترون می‌گیرند و عوامل کاهنده، الکترون می‌دهند.",
            "complete_definition": "اکسایش، فرایند از دست دادن الکترون توسط یک اتم، یون یا مولکول است که منجر به افزایش عدد اکسایش می‌شود. کاهش، فرایند گرفتن الکترون است که منجر به کاهش عدد اکسایش می‌شود. عدد اکسایش، بار الکتریکی فرضی یک اتم در یک ترکیب است که با رعایت قوانین خاص تعیین می‌شود.",
            "key_concepts": [
              "اکسایش",
              "کاهش",
              "عدد اکسایش",
              "اکسنده",
              "کاهنده",
              "نیم واکنش"
            ],
            "terminology": {
              "اکسایش": "از دست دادن الکترون",
              "کاهش": "گرفتن الکترون",
              "عدد اکسایش": "بار فرضی یک اتم",
              "اکسنده": "گونه‌ای که الکترون می‌گیرد و باعث اکسایش دیگری می‌شود.",
              "کاهنده": "گونه‌ای که الکترون می‌دهد و باعث کاهش دیگری می‌شود."
            },
            "formulas": {
              "نیم واکنش اکسایش": "Zn → Zn2+ + 2e-",
              "نیم واکنش کاهش": "Cu2+ + 2e- → Cu"
            },
            "laws": null,
            "principles": [
              "اکسایش و کاهش همزمان رخ می‌دهند.",
              "تعداد الکترون‌های از دست رفته برابر با الکترون‌های گرفته شده است.",
              "عدد اکسایش عنصر در حالت آزاد صفر است.",
              "عدد اکسایش یون تک اتمی برابر با بار آن است."
            ],
            "processes": [
              "تعیین عدد اکسایش",
              "نوشتن نیم واکنش‌ها",
              "تشخیص اکسنده و کاهنده"
            ],
            "mechanisms": null,
            "reaction_types": [
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پیوند یونی",
              "بار یونی"
            ],
            "next_topics": [
              "t2_2",
              "t2_3"
            ],
            "concept_dependencies": [
              "نیاز به درک بار الکتریکی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "الکتروشیمی",
              "سلول گالوانی",
              "برقکافت",
              "خوردگی"
            ]
          },
          "relationships": {
            "related_topics": [
              "الکتروشیمی",
              "خوردگی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "عدد اکسایش با بار واقعی"
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
            "probability_in_exam": 90,
            "exam_points": [
              "تعریف اکسایش و کاهش",
              "تعیین عدد اکسایش",
              "تشخیص اکسنده و کاهنده",
              "نوشتن نیم واکنش‌ها"
            ],
            "hidden_points": [
              "تغییر عدد اکسایش برای تشخیص اکسایش/کاهش"
            ],
            "trick_points": [
              "سوالات مربوط به عدد اکسایش در ترکیبات آلی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه عدد اکسایش"
            ],
            "analytical_question_types": [
              "تحلیل واکنش‌های اکسایش-کاهش"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در محاسبه عدد اکسایش (مثلاً برای اکسیژن در ترکیبات)",
              "تشخیص ندادن اکسنده و کاهنده"
            ],
            "misconceptions": [
              "اکسایش همیشه با اکسیژن همراه است."
            ],
            "difficult_parts": [
              "محاسبه عدد اکسایش در ترکیبات پیچیده",
              "تشخیص اکسایش و کاهش از روی عدد اکسایش"
            ],
            "warning_points": [
              "عدد اکسایش عنصر در حالت آزاد صفر است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبانی الکتروشیمی.",
            "study_strategy": "تمرین زیاد محاسبه عدد اکسایش و تشخیص اکسنده و کاهنده",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "اکسایش = افزایش عدد اکسایش، کاهش = کاهش عدد اکسایش.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "عدد اکسایش مانند ترازوی بار الکتریکی است."
          },
          "examples": {
            "textbook_examples": [
              "واکنش Zn با Cu2+",
              "نیم واکنش‌ها",
              "تعیین عدد اکسایش در H2O و CO2"
            ],
            "important_examples": [
              "تعیین عدد اکسایش در KMnO4",
              "تعیین عدد اکسایش در Cr2O7^2-"
            ],
            "real_life_examples": [
              "زنگ زدن آهن (اکسایش)",
              "سوختن (اکسایش)"
            ]
          }
        },
        {
          "id": "t2_2",
          "title": "سلول گالوانی و نیروی الکتروموتوری",
          "core_knowledge": {
            "explanation": "سلول گالوانی دستگاهی است که با انجام یک واکنش اکسایش-کاهش، انرژی الکتریکی تولید می‌کند. این سلول از دو نیم سلول تشکیل شده است: آند (محل اکسایش) و کاتد (محل کاهش). الکترون‌ها از آند به کاتد از طریق مدار بیرونی جریان می‌یابند و یون‌ها از طریق پل نمکی یا دیواره متخلخل حرکت می‌کنند. نیروی الکتروموتوری (emf) برابر اختلاف پتانسیل دو الکترود است.",
            "complete_definition": "سلول گالوانی (سلول ولتایی) یک سلول الکتروشیمیایی است که از دو نیم سلول (الکترود و الکترولیت) تشکیل شده و با انجام یک واکنش اکسایش-کاهش خودبه‌خود، انرژی شیمیایی را به انرژی الکتریکی تبدیل می‌کند. آند الکترودی است که در آن اکسایش رخ می‌دهد و کاتد الکترودی است که در آن کاهش رخ می‌دهد.",
            "key_concepts": [
              "سلول گالوانی",
              "آند",
              "کاتد",
              "نیم سلول",
              "پل نمکی",
              "دیواره متخلخل",
              "نیروی الکتروموتوری (emf)",
              "اختلاف پتانسیل"
            ],
            "terminology": {
              "سلول گالوانی": "سلولی که انرژی شیمیایی را به انرژی الکتریکی تبدیل می‌کند.",
              "آند": "الکترودی که در آن اکسایش رخ می‌دهد (قطب منفی).",
              "کاتد": "الکترودی که در آن کاهش رخ می‌دهد (قطب مثبت).",
              "نیم سلول": "مجموعه الکترود و الکترولیت آن.",
              "پل نمکی": "وسیله‌ای برای برقراری پیوستگی الکتریکی بین دو نیم سلول و خنثی بودن بار."
            },
            "formulas": {
              "emf سلول": "E°(سلول) = E°(کاتد) - E°(آند)"
            },
            "laws": null,
            "principles": [
              "در سلول گالوانی، واکنش خودبه‌خودی است.",
              "الکترون‌ها از آند به کاتد در مدار بیرونی جریان دارند.",
              "جریان الکتریکی از کاتد به آند در مدار بیرونی است (در سیستم قدیمی)."
            ],
            "processes": [
              "ساخت سلول گالوانی",
              "نوشتن نیم واکنش‌ها",
              "محاسبه emf"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اکسایش-کاهش",
              "نیم واکنش"
            ],
            "next_topics": [
              "t2_3",
              "t2_6"
            ],
            "concept_dependencies": [
              "نیاز به درک اکسایش-کاهش"
            ],
            "required_background": null,
            "builds_upon": [
              "اکسایش-کاهش"
            ],
            "enables_learning_of": [
              "باتری‌ها",
              "سلول سوختی"
            ]
          },
          "relationships": {
            "related_topics": [
              "الکترولیز",
              "باتری"
            ],
            "similar_concepts": [],
            "differences": [
              "در سلول گالوانی واکنش خودبه‌خودی و تولید انرژی، در الکترولیز با اعمال ولتاژ خارجی واکنش انجام می‌شود."
            ],
            "frequently_confused_with": [
              "سلول الکترولیتی"
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
              "تشخیص آند و کاتد",
              "نوشتن نیم واکنش‌ها",
              "جهت حرکت الکترون و یون‌ها",
              "محاسبه emf",
              "تغییر جرم الکترودها"
            ],
            "hidden_points": [
              "نقش پل نمکی",
              "خنثی بودن بار"
            ],
            "trick_points": [
              "سوالات مربوط به سلول گالوانی با دو فلز متفاوت"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص آند و کاتد",
              "جهت حرکت"
            ],
            "calculation_question_types": [
              "محاسبه emf",
              "محاسبه جرم تغییر یافته"
            ],
            "analytical_question_types": [
              "تحلیل عملکرد سلول"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص آند و کاتد",
              "فراموش کردن جهت حرکت الکترون‌ها",
              "اشتباه در نوشتن نیم واکنش‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص آند و کاتد",
              "نوشتن نیم واکنش‌ها"
            ],
            "warning_points": [
              "آند: اکسایش (منفی), کاتد: کاهش (مثبت)"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم کلیدی در الکتروشیمی.",
            "study_strategy": "رسم سلول گالوانی و تمرین شناسایی اجزا",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t2_3"
          },
          "memory_support": {
            "memory_tips": "آند = اکسایش (Anode = Oxidation), کاتد = کاهش (Cathode = Reduction).",
            "mnemonic_devices": "از دست دادن الکترون در آند.",
            "visual_imagination_tips": "الکترون‌ها مانند جریان آب از آند به کاتد جریان دارند."
          },
          "examples": {
            "textbook_examples": [
              "سلول گالوانی روی-مس (شکل ۷)",
              "شکل ۸ (تغییر جرم الکترودها)"
            ],
            "important_examples": [
              "سلول Zn-Cu",
              "سلول Ag-Cu"
            ],
            "real_life_examples": [
              "باتری لیمویی",
              "باتری خودرو"
            ]
          }
        },
        {
          "id": "t2_3",
          "title": "پتانسیل استاندارد الکترود و سری الکتروشیمیایی",
          "core_knowledge": {
            "explanation": "پتانسیل استاندارد الکترود (E°) یک نیم سلول، پتانسیل آن نسبت به الکترود استاندارد هیدروژن (SHE) است که پتانسیل آن صفر در نظر گرفته شده است. با استفاده از پتانسیل‌های استاندارد کاهش می‌توان emf یک سلول گالوانی را محاسبه کرد. سری الکتروشیمیایی، فلزات را بر اساس قدرت کاهندگی آنها مرتب می‌کند.",
            "complete_definition": "پتانسیل استاندارد الکترود (E°) اختلاف پتانسیل بین یک الکترود و یک محلول 1 مولار از یون‌های آن در دمای 25°C و فشار 1 اتمسفر، نسبت به الکترود استاندارد هیدروژن (SHE) است. سری الکتروشیمیایی، ترتیب عناصر بر اساس پتانسیل کاهشی استاندارد آنهاست.",
            "key_concepts": [
              "پتانسیل استاندارد الکترود",
              "الکترود استاندارد هیدروژن (SHE)",
              "پتانسیل کاهشی استاندارد",
              "سری الکتروشیمیایی",
              "قدرت کاهندگی"
            ],
            "terminology": {
              "پتانسیل استاندارد الکترود (E°)": "پتانسیل یک نیم سلول در شرایط استاندارد نسبت به SHE.",
              "SHE": "الکترود استاندارد هیدروژن با پتانسیل صفر.",
              "سری الکتروشیمیایی": "لیست عناصر بر اساس E° کاهشی آنها."
            },
            "formulas": {
              "emf": "E°(کاتد) - E°(آند)"
            },
            "laws": null,
            "principles": [
              "هرچه E° کاهشی بزرگ‌تر باشد، گونه اکسنده قوی‌تر است.",
              "هرچه E° کاهشی کوچک‌تر باشد (منفی‌تر)، گونه کاهنده قوی‌تر است.",
              "در سلول گالوانی، E°(کاتد) > E°(آند) است."
            ],
            "processes": [
              "محاسبه emf از روی E°",
              "پیش‌بینی خودبه‌خودی بودن واکنش"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "سلول گالوانی",
              "عدد اکسایش"
            ],
            "next_topics": [
              "t2_4",
              "t2_5"
            ],
            "concept_dependencies": [
              "نیاز به درک سلول گالوانی"
            ],
            "required_background": null,
            "builds_upon": [
              "سلول گالوانی"
            ],
            "enables_learning_of": [
              "پیش‌بینی واکنش‌ها",
              "خوردگی"
            ]
          },
          "relationships": {
            "related_topics": [
              "سری الکتروشیمیایی"
            ],
            "similar_concepts": [
              "پتانسیل اکسایش"
            ],
            "differences": [
              "پتانسیل کاهشی به صورت استاندارد گزارش می‌شود."
            ],
            "frequently_confused_with": [
              "emf"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 9,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "تعریف E°",
              "محاسبه emf",
              "تشخیص آند و کاتد از روی E°",
              "استفاده از جدول E°"
            ],
            "hidden_points": [
              "نقش SHE"
            ],
            "trick_points": [
              "سوالات مربوط به علامت E°"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "مقایسه"
            ],
            "calculation_question_types": [
              "محاسبه emf",
              "محاسبه E° مجهول"
            ],
            "analytical_question_types": [
              "پیش‌بینی خودبه‌خودی بودن"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در استفاده از فرمول emf",
              "تشخیص ندادن که کدام نیم واکنش کاتد است"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص آند و کاتد از روی E°"
            ],
            "warning_points": [
              "emf = E°(کاتد) - E°(آند)"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم برای محاسبات و پیش‌بینی واکنش‌ها.",
            "study_strategy": "تمرین با جدول E° و محاسبه emf",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "E° بزرگتر = اکسنده قوی‌تر، E° کوچکتر = کاهنده قوی‌تر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "سری الکتروشیمیایی یک نردبان است."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۱ (پتانسیل استاندارد کاهش)",
              "محاسبه emf سلول Mg-Ag"
            ],
            "important_examples": [
              "محاسبه emf سلول Zn-Cu",
              "محاسبه emf سلول با دو فلز"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t2_4",
          "title": "الکترولیز و کاربردهای آن",
          "core_knowledge": {
            "explanation": "الکترولیز، فرایندی است که در آن با اعمال ولتاژ خارجی، یک واکنش اکسایش-کاهش غیرخودبه‌خودی انجام می‌شود. در سلول الکترولیتی، آند به قطب مثبت و کاتد به قطب منفی متصل است. الکترولیز برای تولید فلزات فعال (سدیم، منیزیم، آلومینیم) و تجزیه آب به گازهای هیدروژن و اکسیژن استفاده می‌شود.",
            "complete_definition": "الکترولیز، فرایند تجزیه یک ماده (الکترولیت) با عبور جریان الکتریکی از آن است. در سلول الکترولیتی، با اعمال ولتاژ خارجی، یون‌ها به الکترودهای مناسب مهاجرت کرده و در سطح آنها واکنش اکسایش یا کاهش رخ می‌دهد. این روش برای تهیه فلزات فعال و خالص‌سازی مواد به کار می‌رود.",
            "key_concepts": [
              "الکترولیز",
              "سلول الکترولیتی",
              "آند (مثبت)",
              "کاتد (منفی)",
              "الکترولیت",
              "تجزیه آب",
              "تهیه فلزات"
            ],
            "terminology": {
              "الکترولیز": "استفاده از جریان الکتریکی برای انجام واکنش شیمیایی غیرخودبه‌خودی.",
              "سلول الکترولیتی": "سلولی که در آن الکترولیز انجام می‌شود.",
              "الکترولیت": "ماده‌ای یونی که در اثر ذوب یا انحلال، رسانایی الکتریکی دارد."
            },
            "formulas": {
              "الکترولیز آب": "2H2O(l) → 2H2(g) + O2(g)",
              "الکترولیز NaCl مذاب": "2NaCl(l) → 2Na(l) + Cl2(g)"
            },
            "laws": null,
            "principles": [
              "در سلول الکترولیتی، کاتد به قطب منفی و آند به قطب مثبت متصل می‌شود.",
              "در کاتد، یون‌های مثبت کاهش می‌یابند و در آند، یون‌های منفی اکسایش می‌یابند."
            ],
            "processes": [
              "الکترولیز آب",
              "الکترولیز نمک مذاب"
            ],
            "mechanisms": null,
            "reaction_types": [
              "الکترولیز"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اکسایش-کاهش",
              "سلول گالوانی"
            ],
            "next_topics": [
              "t2_5",
              "t2_6"
            ],
            "concept_dependencies": [
              "نیاز به درک اکسایش-کاهش"
            ],
            "required_background": null,
            "builds_upon": [
              "الکتروشیمی"
            ],
            "enables_learning_of": [
              "آبکاری",
              "تولید فلزات"
            ]
          },
          "relationships": {
            "related_topics": [
              "آبکاری",
              "خوردگی"
            ],
            "similar_concepts": [
              "سلول گالوانی"
            ],
            "differences": [
              "در الکترولیز، انرژی مصرف می‌شود، در سلول گالوانی انرژی تولید می‌شود."
            ],
            "frequently_confused_with": [
              "سلول گالوانی"
            ]
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
            "probability_in_exam": 60,
            "exam_points": [
              "تشخیص سلول الکترولیتی",
              "نوشتن نیم واکنش‌ها",
              "تشخیص آند و کاتد",
              "الکترولیز آب و نمک مذاب"
            ],
            "hidden_points": [
              "تولید فلزات فعال",
              "کاربرد فرایند هال"
            ],
            "trick_points": [
              "سوالات مربوط به الکترولیز آب"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "نوشتن واکنش"
            ],
            "calculation_question_types": [
              "محاسبه جرم تولید شده (فارادی)"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص آند و کاتد در سلول الکترولیتی",
              "ناتوانی در نوشتن نیم واکنش‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص آند و کاتد در الکترولیز"
            ],
            "warning_points": [
              "در سلول الکترولیتی، آند مثبت و کاتد منفی است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد مهم در تولید صنعتی.",
            "study_strategy": "مقایسه سلول گالوانی و الکترولیتی",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_5"
          },
          "memory_support": {
            "memory_tips": "الکترولیز = اعمال ولتاژ خارجی = انجام واکنش غیرخودبه‌خودی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "برقکافت مانند استفاده از پمپ برای بالا بردن آب به جای جریان طبیعی است."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۱ (الکترولیز آب)",
              "شکل ۱۲ (الکترولیز NaCl مذاب)"
            ],
            "important_examples": [
              "الکترولیز NaCl مذاب برای تولید سدیم",
              "الکترولیز آب برای تولید H2 و O2"
            ],
            "real_life_examples": [
              "تولید آلومینیم (فرایند هال)",
              "تولید کلر و سدیم"
            ]
          }
        },
        {
          "id": "t2_5",
          "title": "خوردگی و حفاظت کاتدی",
          "core_knowledge": {
            "explanation": "خوردگی، اکسایش ناخواسته فلزات در اثر واکنش با اکسیژن و رطوبت است. آهن در هوای مرطوب به زنگ آهن (اکسیدهای آهن) تبدیل می‌شود. برای جلوگیری از خوردگی از روش‌هایی مانند رنگ‌آمیزی، روکش فلزی (گالوانیزه، حلبی) و حفاظت کاتدی (استفاده از فلز فدا شونده مانند روی یا منیزیم) استفاده می‌شود.",
            "complete_definition": "خوردگی، تخریب تدریجی فلزات در اثر واکنش‌های شیمیایی یا الکتروشیمیایی با محیط است. زنگ زدن آهن نمونه‌ای از خوردگی است که در حضور اکسیژن و آب رخ می‌دهد. حفاظت کاتدی با اتصال یک فلز فعال‌تر (فدا شونده) به فلز مورد نظر، از خوردگی آن جلوگیری می‌کند.",
            "key_concepts": [
              "خوردگی",
              "زنگ زدن آهن",
              "حفاظت کاتدی",
              "فلز فدا شونده",
              "گالوانیزه کردن",
              "حلبی"
            ],
            "terminology": {
              "خوردگی": "اکسایش و تخریب فلزات در محیط.",
              "زنگ آهن": "ترکیبات اکسید و هیدروکسید آهن.",
              "حفاظت کاتدی": "استفاده از فلز فعال‌تر برای محافظت از فلز دیگر.",
              "فلز فدا شونده": "فلزی که خود اکسایش می‌یابد تا فلز دیگر محافظت شود (مانند روی و منیزیم).",
              "آهن گالوانیزه": "آهنی که با الیه نازکی از روی پوشیده شده است."
            },
            "formulas": {
              "نیم واکنش اکسایش آهن": "Fe(s) → Fe2+(aq) + 2e-",
              "نیم واکنش کاهش اکسیژن": "O2(g) + 2H2O(l) + 4e- → 4OH-(aq)"
            },
            "laws": null,
            "principles": [
              "خوردگی آهن در حضور اکسیژن و آب رخ می‌دهد.",
              "فلز فعال‌تر (با E° کوچکتر) اکسایش می‌یابد و فلز دیگر را محافظت می‌کند."
            ],
            "processes": [
              "اکسایش آهن",
              "تشکیل زنگ",
              "حفاظت با روی"
            ],
            "mechanisms": null,
            "reaction_types": [
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اکسایش-کاهش",
              "پتانسیل استاندارد"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک اکسایش-کاهش و E°"
            ],
            "required_background": null,
            "builds_upon": [
              "الکتروشیمی"
            ],
            "enables_learning_of": [
              "کاربردهای صنعتی"
            ]
          },
          "relationships": {
            "related_topics": [
              "الکتروشیمی",
              "فلزات"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "خوردگی شیمیایی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 5,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "شرایط خوردگی آهن",
              "نیم واکنش‌ها",
              "روش‌های جلوگیری",
              "حفاظت کاتدی"
            ],
            "hidden_points": [
              "نقش E° در حفاظت"
            ],
            "trick_points": [
              "سوالات مقایسه آهن گالوانیزه و حلبی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "توضیح خوردگی",
              "روش‌های حفاظت"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل روش‌های حفاظت"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص فلز فدا شونده",
              "ناتوانی در نوشتن نیم واکنش‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص فلز فدا شونده",
              "مقایسه آهن گالوانیزه و حلبی"
            ],
            "warning_points": [
              "روی از آهن محافظت می‌کند، اما قلع نه."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در مهندسی.",
            "study_strategy": "مقایسه روش‌های مختلف حفاظت",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t2_6"
          },
          "memory_support": {
            "memory_tips": "فلز فدا شونده: روی (گالوانیزه) و منیزیم.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "آهن گالوانیزه مانند یک سرباز با زره روی است."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۳ (زنگ زدن)",
              "شکل ۱۴ (حفاظت با منیزیم)",
              "شکل ۱۵ (آهن گالوانیزه)"
            ],
            "important_examples": [
              "خوردگی آهن در هوای مرطوب",
              "حفاظت بدنه کشتی با منیزیم"
            ],
            "real_life_examples": [
              "قوطی‌های حلبی",
              "لوله‌های گالوانیزه",
              "خوردگی خودرو"
            ]
          }
        },
        {
          "id": "t2_6",
          "title": "باتری‌ها و سلول‌های سوختی",
          "core_knowledge": {
            "explanation": "باتری‌ها سلول‌های گالوانی هستند که انرژی شیمیایی را ذخیره و به انرژی الکتریکی تبدیل می‌کنند. باتری‌های لیتیومی به دلیل چگالی انرژی بالا و وزن کم کاربرد گسترده‌ای دارند. سلول سوختی، نوعی سلول گالوانی است که در آن سوخت (مانند هیدروژن) و اکسنده (اکسیژن) به طور پیوسته وارد می‌شوند و انرژی الکتریکی تولید می‌کنند. سلول سوختی هیدروژن-اکسیژن، آب تنها محصول جانبی آن است.",
            "complete_definition": "باتری، مجموعه‌ای از سلول‌های گالوانی است که انرژی شیمیایی را ذخیره و به انرژی الکتریکی تبدیل می‌کند. سلول سوختی، یک سلول گالوانی است که در آن سوخت و اکسنده به طور مداوم از خارج تأمین می‌شوند و واکنش الکتروشیمیایی به طور پیوسته انجام می‌شود. سلول سوختی هیدروژن-اکسیژن یکی از معروف‌ترین انواع آن است.",
            "key_concepts": [
              "باتری",
              "سلول سوختی",
              "لیتیم",
              "هیدروژن",
              "اکسیژن",
              "غشا",
              "سبز",
              "بازیافت"
            ],
            "terminology": {
              "باتری": "دستگاه ذخیره و تولید انرژی الکتریکی.",
              "سلول سوختی": "سلول گالوانی با سوخت و اکسنده پیوسته.",
              "سلول سوختی هیدروژن-اکسیژن": "سلولی که در آن هیدروژن اکسایش و اکسیژن کاهش می‌یابد."
            },
            "formulas": {
              "واکنش سلول سوختی": "2H2(g) + O2(g) → 2H2O(g)"
            },
            "laws": null,
            "principles": [
              "باتری‌ها انرژی شیمیایی را به الکتریکی تبدیل می‌کنند.",
              "سلول سوختی بازدهی بالاتری از موتورهای احتراقی دارد.",
              "لیتیم به دلیل E° منفی و چگالی کم، در باتری‌ها استفاده می‌شود."
            ],
            "processes": [
              "عملکرد سلول سوختی",
              "شارژ و دشارژ باتری"
            ],
            "mechanisms": null,
            "reaction_types": [
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "سلول گالوانی",
              "اکسایش-کاهش"
            ],
            "next_topics": [
              "t3_1"
            ],
            "concept_dependencies": [
              "نیاز به درک سلول گالوانی"
            ],
            "required_background": null,
            "builds_upon": [
              "سلول گالوانی"
            ],
            "enables_learning_of": [
              "تکنولوژی سبز"
            ]
          },
          "relationships": {
            "related_topics": [
              "الکتروشیمی",
              "انرژی"
            ],
            "similar_concepts": [],
            "differences": [
              "سلول سوختی نیاز به تأمین مداوم سوخت دارد، باتری ذخیره‌کننده است."
            ],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 7,
            "reasoning_load": 6,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "عملکرد سلول سوختی",
              "مزایای سلول سوختی",
              "مقایسه با باتری",
              "لیتیم در باتری"
            ],
            "hidden_points": [
              "نقش لیتم در باتری‌ها"
            ],
            "trick_points": [
              "سوالات مربوط به سلول سوختی هیدروژن-اکسیژن"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "مقایسه"
            ],
            "calculation_question_types": [
              "محاسبه emf سلول سوختی"
            ],
            "analytical_question_types": [
              "تحلیل مزایا و معایب"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص آند و کاتد در سلول سوختی"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "فناوری مهم برای آینده انرژی.",
            "study_strategy": "مقایسه سلول سوختی با باتری",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t3_1"
          },
          "memory_support": {
            "memory_tips": "سلول سوختی: H2 + O2 → آب + انرژی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "سلول سوختی مانند یک موتور پاک است که آب تولید می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۰ (سلول سوختی)",
              "شکل ۹ (باتری لیتیومی)"
            ],
            "important_examples": [
              "سلول سوختی هیدروژن-اکسیژن",
              "باتری لیتیوم-یون"
            ],
            "real_life_examples": [
              "خودروهای برقی",
              "تلفن همراه",
              "سفینه فضایی"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "شیمی جلوه‌ای از هنر، زیبایی و ماندگاری",
      "chapter_objectives": [
        "بررسی ساختار و خواص مواد کووالانسی شبکه‌ای (مانند سیلیس و الماس)",
        "مقایسه مواد مولکولی، یونی، کووالانسی و فلزی",
        "بررسی دگرشکل‌های کربن (گرافیت، الماس، گرافن) و خواص آنها",
        "آشنایی با شبکه بلوری یونی و آنتالپی فروپاشی شبکه",
        "درک مدل دریای الکترونی برای فلزها",
        "بررسی رنگ ترکیب‌های فلزات واسطه و کاربرد تیتانیم"
      ],
      "overall_difficulty": 7,
      "overall_importance": 8,
      "topics": [
        {
          "id": "t3_1",
          "title": "سیلیس و جامدهای کووالانسی شبکه‌ای",
          "core_knowledge": {
            "explanation": "سیلیس (SiO2) یک جامد کووالانسی شبکه‌ای است که در آن هر اتم سیلیسیم به چهار اتم اکسیژن با پیوندهای اشتراکی متصل است و یک شبکه سه بعدی بزرگ می‌سازد. این ساختار باعث سختی بالا، نقطه ذوب بسیار بالا و نارسانایی الکتریکی آن می‌شود. برخلاف CO2 که مولکولی است، SiO2 شبکه‌ای است.",
            "complete_definition": "جامد کووالانسی شبکه‌ای (شبکه‌ای) مادهای است که در آن همه اتم‌ها با پیوندهای کووالانسی به یکدیگر متصل شده و یک شبکه سه‌بعدی یا دو بعدی پیوسته تشکیل می‌دهند. سیلیس (SiO2) و الماس از نمونه‌های این نوع جامدات هستند. این مواد دارای نقطه ذوب و سختی بسیار بالا هستند.",
            "key_concepts": [
              "سیلیس (SiO2)",
              "جامد کووالانسی شبکه‌ای",
              "شبکه سه بعدی",
              "سختی",
              "نقطه ذوب بالا",
              "نارسانا"
            ],
            "terminology": {
              "سیلیس": "اکسید سیلیسیم با فرمول SiO2، یک جامد کووالانسی شبکه‌ای.",
              "جامد کووالانسی شبکه‌ای": "جامدی که از شبکه‌ای از اتم‌های متصل با پیوندهای کووالانسی تشکیل شده است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در جامدات کووالانسی شبکه‌ای، پیوندهای کووالانسی قوی در سراسر شبکه گسترده شده‌اند.",
              "این مواد دارای نقطه ذوب و سختی بسیار بالا هستند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پیوند کووالانسی",
              "مواد مولکولی"
            ],
            "next_topics": [
              "t3_2",
              "t3_3"
            ],
            "concept_dependencies": [
              "نیاز به درک پیوند کووالانسی"
            ],
            "required_background": null,
            "builds_upon": [
              "پیوند کووالانسی"
            ],
            "enables_learning_of": [
              "مقایسه مواد جامد"
            ]
          },
          "relationships": {
            "related_topics": [
              "الماس",
              "گرافیت"
            ],
            "similar_concepts": [
              "الماس",
              "سیلیسیم"
            ],
            "differences": [
              "جامدات کووالانسی شبکه‌ای با مواد مولکولی (مانند CO2) تفاوت دارند."
            ],
            "frequently_confused_with": [
              "مواد مولکولی"
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
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص سیلیس به عنوان جامد کووالانسی",
              "خواص آن (سختی، نقطه ذوب)",
              "مقایسه با CO2"
            ],
            "hidden_points": [
              "ساختار شبکه‌ای"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "مقایسه خواص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "تصور اینکه SiO2 مولکولی است"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در شناخت مواد.",
            "study_strategy": "مقایسه SiO2 و CO2",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_2"
          },
          "memory_support": {
            "memory_tips": "سیلیس (SiO2) شبکه‌ای و سخت است، مانند ماسه.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "شبکه‌ای از اتم‌های سیلیسیم و اکسیژن به هم پیوسته."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲ (مقایسه سیلیس و CO2)",
              "ساختار سیلیس"
            ],
            "important_examples": [
              "سیلیس (SiO2) به عنوان جامد کووالانسی",
              "کوارتز"
            ],
            "real_life_examples": [
              "ماسه",
              "شیشه",
              "سنگ کوارتز"
            ]
          }
        },
        {
          "id": "t3_2",
          "title": "مقایسه جامدهای مولکولی، یونی، کووالانسی و فلزی",
          "core_knowledge": {
            "explanation": "مواد جامد به چهار دسته اصلی تقسیم می‌شوند: مولکولی (نیروهای بین مولکولی ضعیف، نقطه ذوب پایین)، یونی (نیروی الکترواستاتیکی قوی، نقطه ذوب متوسط تا بالا)، کووالانسی شبکه‌ای (پیوندهای کووالانسی قوی در کل شبکه، نقطه ذوب بسیار بالا و سختی زیاد) و فلزی (دریای الکترونی، رسانایی و شکل‌پذیری).",
            "complete_definition": "جامدات مولکولی از مولکول‌های مجزا تشکیل شده‌اند که با نیروهای بین مولکولی ضعیف به هم متصل هستند. جامدات یونی از یون‌های با بار مخالف در شبکه بلوری تشکیل شده‌اند. جامدات کووالانسی شبکه‌ای از شبکه پیوسته اتم‌های به هم پیوسته با پیوندهای کووالانسی تشکیل شده‌اند. جامدات فلزی از کاتیون‌ها و دریای الکترونی تشکیل شده‌اند.",
            "key_concepts": [
              "جامد مولکولی",
              "جامد یونی",
              "جامد کووالانسی شبکه‌ای",
              "جامد فلزی",
              "نیروهای بین مولکولی",
              "پیوند یونی",
              "پیوند کووالانسی",
              "دریای الکترونی"
            ],
            "terminology": {
              "جامد مولکولی": "جامدی که ذرات آن مولکول هستند و با نیروهای بین مولکولی به هم متصل اند.",
              "جامد یونی": "جامدی از یون‌ها که با نیروی جاذبه الکترواستاتیکی به هم متصل اند.",
              "جامد کووالانسی شبکه‌ای": "جامدی با شبکه پیوسته از اتم‌های متصل با پیوندهای کووالانسی.",
              "جامد فلزی": "جامدی با کاتیون‌ها و الکترون‌های آزاد (دریای الکترونی)."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "نوع پیوند و نیروهای بین ذرات، خواص فیزیکی جامدات را تعیین می‌کند.",
              "نقطه ذوب: کووالانسی شبکه‌ای > یونی > فلزی (متفاوت) > مولکولی.",
              "رسانایی: فلزات رسانا، جامدات یونی مذاب یا محلول رسانا، جامدات کووالانسی شبکه‌ای و مولکولی نارسانا (به جز گرافیت)."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پیوندهای شیمیایی",
              "نیروهای بین مولکولی"
            ],
            "next_topics": [
              "t3_3",
              "t3_4",
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک پیوندها"
            ],
            "required_background": null,
            "builds_upon": [
              "پیوندها و نیروها"
            ],
            "enables_learning_of": [
              "شناخت مواد جدید"
            ]
          },
          "relationships": {
            "related_topics": [
              "نیروهای بین مولکولی",
              "پیوندها"
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
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "تشخیص نوع جامد از روی خواص",
              "مقایسه خواص (نقطه ذوب، رسانایی)",
              "توضیح تفاوت‌ها"
            ],
            "hidden_points": [
              "رابطه ساختار و خواص"
            ],
            "trick_points": [
              "سوالات مقایسه‌ای"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "مقایسه"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل خواص بر اساس ساختار"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص نوع جامد از روی فرمول",
              "عدم ارتباط بین ساختار و خواص"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص نوع جامد",
              "مقایسه نقطه ذوب"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبانی شناخت مواد.",
            "study_strategy": "جداول مقایسه‌ای تهیه کنید",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "نقطه ذوب: کووالانسی > یونی > فلزی > مولکولی (تقریباً).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "انواع جامدات مانند مصالح ساختمانی مختلف با استحکام متفاوت."
          },
          "examples": {
            "textbook_examples": [
              "مقایسه سیلیس و CO2",
              "مقایسه نمک و الماس"
            ],
            "important_examples": [
              "NaCl (یونی)",
              "SiO2 (کووالانسی)",
              "Fe (فلزی)",
              "H2O (مولکولی)"
            ],
            "real_life_examples": [
              "نمک",
              "الماس",
              "آهن",
              "یخ"
            ]
          }
        },
        {
          "id": "t3_3",
          "title": "دگرشکل‌های کربن: گرافیت، الماس و گرافن",
          "core_knowledge": {
            "explanation": "کربن دارای دگرشکل‌های متعددی است: الماس (شبکه سه بعدی با پیوندهای کووالانسی، سخت‌ترین ماده طبیعی)، گرافیت (لایه‌های دوبعدی از حلقه‌های شش‌ضلعی، نرم و رسانا) و گرافن (تک لایه از گرافیت، بسیار مقاوم و شفاف). تفاوت خواص این دگرشکل‌ها ناشی از تفاوت در آرایش اتم‌های کربن و پیوندهای آنهاست.",
            "complete_definition": "دگرشکل‌های کربن شامل الماس (شبکه سه‌بعدی، هر اتم کربن به چهار اتم دیگر پیوند دارد)، گرافیت (لایه‌های دوبعدی از حلقه‌های شش‌ضلعی با پیوندهای کووالانسی درون لایه و نیروهای ضعیف بین لایه‌ها) و گرافن (تک‌لایه از گرافیت) هستند. این دگرشکل‌ها خواص فیزیکی بسیار متفاوتی دارند.",
            "key_concepts": [
              "دگرشکل",
              "الماس",
              "گرافیت",
              "گرافن",
              "شبکه سه‌بعدی",
              "لایه‌های دوبعدی",
              "سختی",
              "رسانایی"
            ],
            "terminology": {
              "الماس": "دگرشکل کربن با شبکه سه‌بعدی کووالانسی، سخت‌ترین ماده طبیعی.",
              "گرافیت": "دگرشکل کربن با لایه‌های دوبعدی، نرم و رسانا.",
              "گرافن": "تک لایه از گرافیت، بسیار مقاوم، شفاف و رسانا."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "خواص دگرشکل‌های یک عنصر متفاوت است زیرا آرایش اتم‌ها متفاوت است.",
              "در الماس، هر اتم کربن با چهار پیوند کووالانسی به چهار اتم دیگر متصل است.",
              "در گرافیت، اتم‌های کربن در لایه‌هایی با حلقه‌های شش‌ضلعی قرار دارند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پیوند کووالانسی",
              "جامدات کووالانسی"
            ],
            "next_topics": [
              "t3_4"
            ],
            "concept_dependencies": [
              "نیاز به درک پیوند کووالانسی"
            ],
            "required_background": null,
            "builds_upon": [
              "جامدات کووالانسی"
            ],
            "enables_learning_of": [
              "کاربردهای کربن"
            ]
          },
          "relationships": {
            "related_topics": [
              "سیلیسیم",
              "سختی مواد"
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
              "تشخیص دگرشکل‌های کربن",
              "مقایسه خواص الماس و گرافیت",
              "ساختار گرافن"
            ],
            "hidden_points": [
              "ارتباط ساختار و خواص"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "مقایسه"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل تفاوت خواص"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص الماس و گرافیت",
              "عدم درک دلیل تفاوت خواص"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "نمونه‌های مهم دگرشکل.",
            "study_strategy": "مقایسه الماس و گرافیت",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_4"
          },
          "memory_support": {
            "memory_tips": "الماس سخت، گرافیت نرم و رسانا، گرافن تک لایه.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "الماس = شبکه مکعبی، گرافیت = ورق‌های مداد."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳ (گرافن)",
              "شکل ۴ (تهیه گرافن با نوار چسب)"
            ],
            "important_examples": [
              "الماس (سخت‌ترین)",
              "گرافیت (مغز مداد)",
              "گرافن (فناوری نانو)"
            ],
            "real_life_examples": [
              "مغز مداد (گرافیت)",
              "جواهرات (الماس)"
            ]
          }
        },
        {
          "id": "t3_4",
          "title": "جامدات یونی و آنتالپی فروپاشی شبکه",
          "core_knowledge": {
            "explanation": "جامدات یونی از یون‌های مثبت و منفی تشکیل شده‌اند که در یک شبکه بلوری سه‌بعدی با آرایش منظم قرار دارند. نیروی جاذبه الکترواستاتیکی بین یون‌ها، شبکه را پایدار نگه می‌دارد. آنتالپی فروپاشی شبکه، انرژی لازم برای جدا کردن یک مول از شبکه یونی به یون‌های گازی است. هر چه بار یون‌ها بیشتر و اندازه آنها کوچک‌تر باشد، شبکه پایدارتر و آنتالپی فروپاشی بیشتر است.",
            "complete_definition": "جامد یونی از یون‌های با بار مخالف تشکیل شده است که در یک شبکه بلوری سه‌بعدی با آرایش منظم قرار دارند. آنتالپی فروپاشی شبکه (Lattice Enthalpy)، مقدار انرژی است که برای تبدیل یک مول از یک جامد یونی به یون‌های گازی جدا از هم در فشار ثابت لازم است. این کمیت معیاری برای استحکام شبکه بلوری است.",
            "key_concepts": [
              "شبکه بلوری",
              "جامد یونی",
              "نیروی الکترواستاتیکی",
              "آنتالپی فروپاشی شبکه",
              "عدد کوتوردیناسیون",
              "چگالی بار"
            ],
            "terminology": {
              "شبکه بلوری": "آرایش سه‌بعدی و منظم از ذرات (یون‌ها، اتم‌ها یا مولکول‌ها) در یک جامد.",
              "آنتالپی فروپاشی شبکه": "انرژی لازم برای شکستن شبکه بلوری یونی به یون‌های گازی.",
              "عدد کوتوردیناسیون": "تعداد یون‌های مخالف اطراف هر یون در شبکه."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "هرچه بار یون‌ها بیشتر و شعاع آنها کوچک‌تر باشد، آنتالپی فروپاشی شبکه بیشتر است.",
              "آنتالپی فروپاشی شبکه همیشه مثبت است (واکنش گرماگیر)."
            ],
            "processes": [
              "فروپاشی شبکه یونی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "یون‌ها",
              "ترکیب یونی",
              "پیوند یونی"
            ],
            "next_topics": [
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک ترکیب یونی"
            ],
            "required_background": null,
            "builds_upon": [
              "ترکیب یونی"
            ],
            "enables_learning_of": [
              "مقایسه پایداری ترکیبات یونی"
            ]
          },
          "relationships": {
            "related_topics": [
              "ترکیب یونی",
              "نیروی یونی"
            ],
            "similar_concepts": [
              "انرژی شبکه"
            ],
            "differences": [],
            "frequently_confused_with": [
              "آنتالپی انحلال"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
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
              "تعریف آنتالپی فروپاشی شبکه",
              "عوامل مؤثر بر آن",
              "مقایسه آنتالپی فروپاشی",
              "عدد کوتوردیناسیون"
            ],
            "hidden_points": [
              "رابطه با پایداری"
            ],
            "trick_points": [
              "سوالات مقایسه‌ای"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "مقایسه"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل عوامل مؤثر"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص عوامل مؤثر بر آنتالپی شبکه"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص اینکه آنتالپی شبکه به بار و اندازه یون‌ها بستگی دارد."
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در جامدات یونی.",
            "study_strategy": "تمرین مقایسه آنتالپی شبکه برای ترکیبات مختلف",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_5"
          },
          "memory_support": {
            "memory_tips": "بار بیشتر، شعاع کوچکتر = آنتالپی شبکه بیشتر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "آنتالپی شبکه مانند نیروی چسبندگی بین آجرها در یک دیوار است."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۹ (شبکه NaCl)",
              "شکل ۱۰ (فروپاشی شبکه)",
              "جدول آنتالپی فروپاشی"
            ],
            "important_examples": [
              "NaCl (787 kJ/mol)",
              "KBr (689 kJ/mol)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t3_5",
          "title": "شبکه بلوری فلزات و مدل دریای الکترونی",
          "core_knowledge": {
            "explanation": "در فلزات، اتم‌ها به صورت کاتیون‌هایی در یک شبکه بلوری منظم قرار دارند و الکترون‌های ظرفیت به صورت دریای الکترونی آزادانه بین آنها حرکت می‌کنند. این مدل (دریای الکترونی) خواص فلزات مانند رسانایی الکتریکی و گرمایی، چکش‌خواری و شکل‌پذیری را توجیه می‌کند.",
            "complete_definition": "مدل دریای الکترونی برای فلزات، ساختار را به صورت کاتیون‌های فلزی که در یک شبکه سه‌بعدی قرار گرفته‌اند و الکترون‌های ظرفیت که آزادانه در فضای بین آنها حرکت می‌کنند، توصیف می‌کند. این الکترون‌های آزاد، مسئول رسانایی الکتریکی و گرمایی فلزات هستند و امکان جابه‌جایی لایه‌های کاتیونی را فراهم می‌کنند.",
            "key_concepts": [
              "دریای الکترونی",
              "کاتیون فلز",
              "الکترون آزاد",
              "رسانایی",
              "چکش‌خواری",
              "شکل‌پذیری"
            ],
            "terminology": {
              "دریای الکترونی": "مجموعه الکترون‌های ظرفیت که آزادانه در شبکه فلز حرکت می‌کنند.",
              "کاتیون فلز": "اتم فلزی که الکترون‌های خود را از دست داده است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "الکترون‌های ظرفیت فلزات، دریای الکترونی را تشکیل می‌دهند.",
              "این الکترون‌ها عامل رسانایی و شکل‌پذیری فلزات هستند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "فلزات",
              "الکترون‌های ظرفیت"
            ],
            "next_topics": [
              "t3_6"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار اتمی فلزات"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "آلیاژها"
            ]
          },
          "relationships": {
            "related_topics": [
              "خواص فلزات",
              "آلیاژها"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P10D",
            "forgetting_risk": 5,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 5,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "مدل دریای الکترونی",
              "توجیه خواص فلزات",
              "الکترون‌های آزاد"
            ],
            "hidden_points": [],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "توضیح مدل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل خواص بر اساس مدل"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مدل ساده برای خواص فلزات.",
            "study_strategy": "مطالعه مدل و ارتباط آن با خواص",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t3_6"
          },
          "memory_support": {
            "memory_tips": "دریای الکترونی = الکترون‌های آزاد = رسانایی و شکل‌پذیری.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "کاتیون‌ها مانند توپ‌هایی هستند که در یک دریا (الکترون‌ها) شناورند."
          },
          "examples": {
            "textbook_examples": [
              "شکل مدل دریای الکترونی",
              "شکل ۱۱ (رنگ و نور)"
            ],
            "important_examples": [
              "رسانایی فلزات",
              "چکش‌خواری"
            ],
            "real_life_examples": [
              "سیم‌های مسی",
              "ورقه‌های آلومینیم"
            ]
          }
        },
        {
          "id": "t3_6",
          "title": "رنگ ترکیب‌های فلزات واسطه و تیتانیم",
          "core_knowledge": {
            "explanation": "ترکیب‌های فلزات واسطه معمولاً رنگی هستند. این رنگ به دلیل جذب نور مرئی توسط الکترون‌های زیرلایه d و انتقال آنها بین ترازهای انرژی متفاوت ایجاد می‌شود. تیتانیم یک فلز واسطه با خواص ویژه (چگالی کم، مقاومت به خوردگی، نقطه ذوب بالا) است که در صنایع هوافضا، پزشکی و ساخت بناهای ماندگار کاربرد دارد.",
            "complete_definition": "رنگ ترکیب‌های فلزات واسطه به دلیل وجود الکترون‌های جفت نشده در زیرلایه d و امکان انتقال الکترون بین سطوح انرژی d است که نور مرئی را جذب می‌کند. تیتانیم فلزی سبک، مقاوم به خوردگی و با نقطه ذوب بالا است که در ساخت آلیاژها و کاربردهای خاص استفاده می‌شود.",
            "key_concepts": [
              "فلز واسطه",
              "الکترون‌های d",
              "رنگ",
              "جذب نور",
              "تیتانیم",
              "آلیاژ",
              "مقاومت به خوردگی"
            ],
            "terminology": {
              "رنگ دانه": "ماده‌ای که به مواد رنگ می‌دهد.",
              "تیتانیم": "فلز واسطه با عدد اتمی 22، سبک، مقاوم و با نقطه ذوب بالا."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "رنگ ترکیب‌های فلزات واسطه به دلیل انتقال الکترون‌های d است.",
              "تیتانیم به دلیل لایه اکسیدی محافظ، در برابر خوردگی مقاوم است."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "فلزات واسطه",
              "آرایش الکترونی",
              "نور"
            ],
            "next_topics": [
              "t4_1"
            ],
            "concept_dependencies": [
              "نیاز به درک آرایش الکترونی و نور"
            ],
            "required_background": null,
            "builds_upon": [
              "فلزات واسطه"
            ],
            "enables_learning_of": [
              "کاربردهای تیتانیم"
            ]
          },
          "relationships": {
            "related_topics": [
              "رنگ‌ها",
              "آلیاژها"
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
            "reasoning_load": 6,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "دلیل رنگی بودن ترکیب‌های فلزات واسطه",
              "خواص تیتانیم",
              "کاربرد تیتانیم"
            ],
            "hidden_points": [
              "نقش الکترون‌های d"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "توضیح دلیل رنگ",
              "خواص تیتانیم"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "عدم ارتباط بین الکترون‌های d و رنگ"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد مهم فلزات واسطه.",
            "study_strategy": "مطالعه تیتانیم و کاربردهای آن",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t4_1"
          },
          "memory_support": {
            "memory_tips": "فلزات واسطه رنگی هستند به دلیل d-d transition.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یاقوت سرخ (Cr3+) و زمرد سبز (Cr3+ در محیط متفاوت)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۱ (رنگ و نور)",
              "شکل ۱۲ (کاربرد تیتانیم)"
            ],
            "important_examples": [
              "یاقوت (Al2O3 با Cr3+)",
              "تیتانیم در موتور جت"
            ],
            "real_life_examples": [
              "جواهرات (یاقوت، زمرد)",
              "موس گوگنهایم (پوشش تیتانیم)"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "شیمی، راهی به سوی آینده روشن‌تر",
      "chapter_objectives": [
        "شناسایی آالینده‌های هوا و منابع آنها",
        "درک نقش مبدل کاتالیستی و عملکرد کاتالیزگرها",
        "بررسی انرژی فعال‌سازی و تأثیر کاتالیزگر بر آن",
        "درک تعادل شیمیایی و اصل لوشاتلیه",
        "بررسی فرایند هابر و شرایط بهینه برای تولید آمونیاک",
        "آشنایی با شیمی سبز، بازیافت و سنتز مواد (مانند PET و متانول)"
      ],
      "overall_difficulty": 8,
      "overall_importance": 9,
      "topics": [
        {
          "id": "t4_1",
          "title": "آالینده‌های هوا و منابع آنها",
          "core_knowledge": {
            "explanation": "آالینده‌های اصلی هوا شامل کربن مونوکسید (CO)، اکسیدهای نیتروژن (NOx)، گوگرد دی اکسید (SO2)، هیدروکربن‌ها و ذرات معلق هستند. منابع اصلی این آالینده‌ها، احتراق سوخت‌های فسیلی در خودروها، نیروگاه‌ها و صنایع است. این آالینده‌ها باعث بیماری‌های تنفسی، باران اسیدی و اثر گلخانه‌ای می‌شوند.",
            "complete_definition": "آالینده‌های هوا موادی هستند که غلظت آنها در هوا بیشتر از حد طبیعی است و باعث آسیب به سلامت انسان و محیط زیست می‌شوند. آالینده‌های اصلی شامل CO، NO2، SO2، هیدروکربن‌ها و ذرات معلق هستند که عمدتاً از احتراق سوخت‌های فسیلی تولید می‌شوند.",
            "key_concepts": [
              "آالینده هوا",
              "کربن مونوکسید",
              "اکسیدهای نیتروژن",
              "گوگرد دی اکسید",
              "هیدروکربن",
              "منابع آلودگی",
              "باران اسیدی"
            ],
            "terminology": {
              "آالینده": "ماده‌ای که باعث آلودگی محیط می‌شود.",
              "باران اسیدی": "بارانی که به دلیل وجود اکسیدهای نیتروژن و گوگرد در هوا، اسیدی شده است."
            },
            "formulas": {
              "تولید NO": "N2 + O2 → 2NO",
              "تولید SO2": "S + O2 → SO2"
            },
            "laws": null,
            "principles": [
              "سوخت‌های فسیلی حاوی گوگرد و نیتروژن هستند و احتراق آنها باعث تولید SO2 و NOx می‌شود.",
              "احتراق ناقص سوخت‌ها باعث تولید CO و هیدروکربن‌ها می‌شود."
            ],
            "processes": [
              "تشکیل آالینده‌ها در موتور خودرو",
              "تشکیل باران اسیدی"
            ],
            "mechanisms": null,
            "reaction_types": [
              "سوختن"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "سوختن",
              "اکسیدها"
            ],
            "next_topics": [
              "t4_2",
              "t4_3"
            ],
            "concept_dependencies": [
              "نیاز به درک سوختن و اکسیدها"
            ],
            "required_background": null,
            "builds_upon": [
              "سوختن"
            ],
            "enables_learning_of": [
              "مبدل کاتالیستی",
              "اثرات زیست محیطی"
            ]
          },
          "relationships": {
            "related_topics": [
              "اثر گلخانه‌ای",
              "باران اسیدی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
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
              "تشخیص آالینده‌ها",
              "منابع آالینده‌ها",
              "اثرات آالینده‌ها"
            ],
            "hidden_points": [
              "تشکیل باران اسیدی"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص و منابع"
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
            "advisor_recommendation": "زمینه‌ای برای درک آلودگی.",
            "study_strategy": "مطالعه منابع و اثرات آالینده‌ها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t4_2"
          },
          "memory_support": {
            "memory_tips": "آالینده‌های اصلی: CO, NOx, SO2, HC.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "دود اگزوز خودرو حاوی این آالینده‌هاست."
          },
          "examples": {
            "textbook_examples": [
              "جدول آالینده‌های خودرو",
              "شکل ۲ (هوای آلوده)"
            ],
            "important_examples": [
              "تولید NOx در موتور",
              "تولید SO2 از سوخت گوگرددار"
            ],
            "real_life_examples": [
              "هوای آلوده تهران",
              "باران اسیدی"
            ]
          }
        },
        {
          "id": "t4_2",
          "title": "مبدل کاتالیستی و کاتالیزگرها",
          "core_knowledge": {
            "explanation": "مبدل کاتالیستی (کاتالیست کانورتر) دستگاهی است که در مسیر اگزوز خودروها قرار می‌گیرد و با استفاده از کاتالیزگرهای فلزی (پالادیم، پلاتین، رودیم)، آالینده‌های CO، NOx و هیدروکربن‌ها را به گازهای کم‌خطر (CO2، N2، H2O) تبدیل می‌کند. کاتالیزگرها سرعت واکنش را افزایش می‌دهند بدون اینکه خود مصرف شوند.",
            "complete_definition": "مبدل کاتالیستی یک قطعه در خودرو است که با استفاده از کاتالیزگرهای فلزی، گازهای سمی خروجی از موتور (CO، NOx، هیدروکربن‌ها) را به گازهای بی‌خطرتر مانند CO2، N2 و H2O تبدیل می‌کند. کاتالیزگرها با کاهش انرژی فعال‌سازی، سرعت این واکنش‌ها را افزایش می‌دهند.",
            "key_concepts": [
              "مبدل کاتالیستی",
              "کاتالیزگر",
              "پالادیم",
              "پلاتین",
              "رودیم",
              "اکسایش",
              "کاهش",
              "تبدیل آلاینده"
            ],
            "terminology": {
              "مبدل کاتالیستی": "دستگاه تبدیل آلاینده‌ها به مواد بی‌خطر با کمک کاتالیزگر.",
              "کاتالیزگر": "ماده‌ای که سرعت واکنش را افزایش داده و خود مصرف نمی‌شود."
            },
            "formulas": {
              "واکنش‌های مبدل": "2CO + O2 → 2CO2",
              "واکنش ۲": "2NO + 2CO → N2 + 2CO2",
              "واکنش ۳": "CxHy + O2 → CO2 + H2O"
            },
            "laws": null,
            "principles": [
              "کاتالیزگرها انرژی فعال‌سازی را کاهش می‌دهند.",
              "کاتالیزگرها اختصاصی هستند و برای واکنش‌های خاص عمل می‌کنند."
            ],
            "processes": [
              "تبدیل CO به CO2",
              "تبدیل NOx به N2"
            ],
            "mechanisms": null,
            "reaction_types": [
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "اکسایش-کاهش",
              "کاتالیزگر",
              "آالینده‌ها"
            ],
            "next_topics": [
              "t4_3",
              "t4_4"
            ],
            "concept_dependencies": [
              "نیاز به درک اکسایش-کاهش و کاتالیزگر"
            ],
            "required_background": null,
            "builds_upon": [
              "کاتالیزگر"
            ],
            "enables_learning_of": [
              "کاربرد صنعتی کاتالیزگرها"
            ]
          },
          "relationships": {
            "related_topics": [
              "کاتالیزگر",
              "انرژی فعال‌سازی"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
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
            "probability_in_exam": 50,
            "exam_points": [
              "عملکرد مبدل کاتالیستی",
              "نقش کاتالیزگرها",
              "واکنش‌های انجام شده"
            ],
            "hidden_points": [
              "نقش فلزات گرانبها"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "توضیح عملکرد"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل نقش کاتالیزگر"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی کاتالیزگر.",
            "study_strategy": "مطالعه واکنش‌های مبدل",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_3"
          },
          "memory_support": {
            "memory_tips": "مبدل کاتالیستی: CO → CO2, NOx → N2, HC → CO2, H2O.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مبدل مانند یک فیلتر شیمیایی است که آلاینده‌ها را به مواد بی‌خطر تبدیل می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴ (مبدل کاتالیستی)",
              "جدول مقادیر آلاینده قبل و بعد"
            ],
            "important_examples": [
              "واکنش‌های مبدل کاتالیستی"
            ],
            "real_life_examples": [
              "خودروهای مجهز به مبدل کاتالیستی"
            ]
          }
        },
        {
          "id": "t4_3",
          "title": "انرژی فعال‌سازی و نقش کاتالیزگر",
          "core_knowledge": {
            "explanation": "انرژی فعال‌سازی (Ea) حداقل انرژی لازم برای شروع یک واکنش شیمیایی است. کاتالیزگرها با فراهم کردن مسیر واکنش جایگزین با انرژی فعال‌سازی کمتر، سرعت واکنش را افزایش می‌دهند. کاتالیزگرها در واکنش مصرف نمی‌شوند و پس از واکنش بازیابی می‌شوند. آنزیم‌ها کاتالیزگرهای بیولوژیکی هستند.",
            "complete_definition": "انرژی فعال‌سازی (Ea) حداقل انرژی است که واکنش‌دهنده‌ها باید برای تبدیل شدن به فراورده‌ها داشته باشند. کاتالیزگر با کاهش انرژی فعال‌سازی، سرعت واکنش را افزایش می‌دهد. کاتالیزگرها اختصاصی عمل می‌کنند و در واکنش مصرف نمی‌شوند.",
            "key_concepts": [
              "انرژی فعال‌سازی",
              "کاتالیزگر",
              "سرعت واکنش",
              "مسیر واکنش",
              "آنزیم"
            ],
            "terminology": {
              "انرژی فعال‌سازی": "حداقل انرژی برای شروع واکنش.",
              "کاتالیزگر": "ماده‌ای که با کاهش Ea سرعت را افزایش می‌دهد."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "کاتالیزگر انرژی فعال‌سازی را کاهش می‌دهد.",
              "کاتالیزگر ΔH واکنش را تغییر نمی‌دهد."
            ],
            "processes": [
              "نقش کاتالیزگر در کاهش Ea"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "سرعت واکنش",
              "عوامل مؤثر بر سرعت"
            ],
            "next_topics": [
              "t4_4"
            ],
            "concept_dependencies": [
              "نیاز به درک سرعت واکنش"
            ],
            "required_background": null,
            "builds_upon": [
              "سرعت واکنش"
            ],
            "enables_learning_of": [
              "تعادل و کاتالیزگر"
            ]
          },
          "relationships": {
            "related_topics": [
              "سینتیک",
              "سرعت واکنش"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "آنتالپی واکنش"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 5,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تعریف انرژی فعال‌سازی",
              "نقش کاتالیزگر",
              "تأثیر کاتالیزگر بر Ea و سرعت"
            ],
            "hidden_points": [
              "تأثیر کاتالیزگر بر ΔH"
            ],
            "trick_points": [
              "سوالات نموداری"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "نقش کاتالیزگر"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل نمودار انرژی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "تصور اینکه کاتالیزگر ΔH را تغییر می‌دهد"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص Ea در نمودار"
            ],
            "warning_points": [
              "کاتالیزگر Ea را کاهش می‌دهد، نه ΔH"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در سینتیک.",
            "study_strategy": "مطالعه نمودارهای انرژی",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_4"
          },
          "memory_support": {
            "memory_tips": "کاتالیزگر = کاهش Ea = افزایش سرعت.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "کاتالیزگر مانند یک تونل در کوه است که مسیر را کوتاه‌تر می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "نمودار انرژی-پیشرفت واکنش",
              "مقایسه سوختن فسفر و هیدروژن"
            ],
            "important_examples": [
              "واکنش متان با کاتالیزگر",
              "آنزیم‌ها در بدن"
            ],
            "real_life_examples": [
              "مبدل کاتالیستی",
              "آنزیم‌های گوارشی"
            ]
          }
        },
        {
          "id": "t4_4",
          "title": "تعادل شیمیایی و اصل لوشاتلیه",
          "core_knowledge": {
            "explanation": "تعادل شیمیایی حالتی است که در آن سرعت واکنش رفت و برگشت برابر است و غلظت مواد ثابت می‌ماند. اصل لوشاتلیه بیان می‌کند که اگر به یک سامانه تعادلی تنش وارد شود (تغییر غلظت، دما یا فشار)، تعادل در جهتی جابه‌جا می‌شود که اثر آن تنش را خنثی کند. این اصل برای پیش‌بینی تغییرات تعادل کاربرد دارد.",
            "complete_definition": "تعادل شیمیایی حالتی پویاست که در آن سرعت واکنش‌های رفت و برگشت برابر است. اصل لوشاتلیه: هرگاه به یک سامانه تعادلی تنش (تغییر دما، فشار، غلظت) وارد شود، سامانه به گونه‌ای تغییر می‌کند که اثر آن تنش را کاهش دهد.",
            "key_concepts": [
              "تعادل شیمیایی",
              "ثابت تعادل",
              "اصل لوشاتلیه",
              "تغییر غلظت",
              "تغییر دما",
              "تغییر فشار"
            ],
            "terminology": {
              "تعادل شیمیایی": "حالتی با سرعت برابر رفت و برگشت.",
              "ثابت تعادل (K)": "نسبت غلظت‌های تعادلی فراورده‌ها به واکنش‌دهنده‌ها.",
              "اصل لوشاتلیه": "جابه‌جایی تعادل برای جبران تنش وارد شده."
            },
            "formulas": {
              "برای واکنش aA + bB ⇌ cC + dD": "K = [C]^c [D]^d / [A]^a [B]^b"
            },
            "laws": null,
            "principles": [
              "افزایش غلظت واکنش‌دهنده، تعادل را به سمت فراورده جابه‌جا می‌کند.",
              "کاهش فشار (افزایش حجم)، تعادل را به سمت مول‌های گازی بیشتر جابه‌جا می‌کند.",
              "افزایش دما، تعادل را به سمت واکنش گرماگیر جابه‌جا می‌کند."
            ],
            "processes": [
              "پیش‌بینی جابه‌جایی تعادل"
            ],
            "mechanisms": null,
            "reaction_types": [
              "برگشت‌پذیر"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "تعادل (شیمی یازدهم)",
              "آنتالپی"
            ],
            "next_topics": [
              "t4_5"
            ],
            "concept_dependencies": [
              "نیاز به درک ثابت تعادل"
            ],
            "required_background": null,
            "builds_upon": [
              "تعادل"
            ],
            "enables_learning_of": [
              "بهینه‌سازی فرایند هابر"
            ]
          },
          "relationships": {
            "related_topics": [
              "اسید-باز",
              "تعادل"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "ثابت تعادل"
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
            "probability_in_exam": 80,
            "exam_points": [
              "تعریف تعادل",
              "اصل لوشاتلیه",
              "تأثیر تغییر غلظت، دما و فشار",
              "نوشتن عبارت K"
            ],
            "hidden_points": [
              "تأثیر کاتالیزگر بر تعادل (تغییر نمی‌دهد)"
            ],
            "trick_points": [
              "سوالات تحلیلی جابه‌جایی تعادل"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "پیش‌بینی جابه‌جایی"
            ],
            "calculation_question_types": [
              "محاسبه K",
              "محاسبه غلظت‌ها"
            ],
            "analytical_question_types": [
              "تحلیل اثر تغییرات"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص جهت جابه‌جایی تعادل",
              "نادیده گرفتن اثر دما بر K"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص اثر دما بر تعادل",
              "تأثیر فشار در واکنش‌های با مول‌های گازی برابر"
            ],
            "warning_points": [
              "تغییر دما، K را تغییر می‌دهد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم برای درک فرایندهای صنعتی.",
            "study_strategy": "تمرین با مثال‌های مختلف",
            "review_strategy": "مرور روزانه و حل مسائل",
            "minimum_mastery_required": 85,
            "mastery_threshold": 95,
            "recommended_next_topic": "t4_5"
          },
          "memory_support": {
            "memory_tips": "لوشاتلیه: سامانه به سمت جبران تنش حرکت می‌کند.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تعادل مانند یک ترازو است که با اضافه کردن وزنه به یک طرف، به طرف دیگر متمایل می‌شود."
          },
          "examples": {
            "textbook_examples": [
              "آزمایش کاوش کنید (انتقال رنگ)",
              "شکل ۷ و ۸ (تأثیر حجم)"
            ],
            "important_examples": [
              "تأثیر غلظت بر تعادل N2 + 3H2 ⇌ 2NH3",
              "تأثیر دما بر تعادل"
            ],
            "real_life_examples": [
              "تولید آمونیاک (هابر)"
            ]
          }
        },
        {
          "id": "t4_5",
          "title": "فرایند هابر و شرایط بهینه",
          "core_knowledge": {
            "explanation": "فرایند هابر برای تولید آمونیاک از گازهای نیتروژن و هیدروژن طراحی شده است. این واکنش تعادلی، گرماده است و با کاهش تعداد مول‌های گاز همراه است. شرایط بهینه برای تولید آمونیاک شامل دمای 450 درجه سانتی‌گراد، فشار 200 اتمسفر و استفاده از کاتالیزگر آهن است. آمونیاک با سرد کردن و مایع شدن از مخلوط واکنش جدا می‌شود.",
            "complete_definition": "فرایند هابر روش صنعتی تولید آمونیاک از عناصر نیتروژن و هیدروژن است. واکنش: N2(g) + 3H2(g) ⇌ 2NH3(g) با ΔH منفی است. شرایط بهینه: دمای حدود 450°C، فشار 200-1000 atm و کاتالیزگر آهن. واکنش برگشت‌پذیر است و آمونیاک با خنک‌سازی جدا می‌شود.",
            "key_concepts": [
              "فرایند هابر",
              "آمونیاک",
              "تعادل",
              "شرایط بهینه",
              "دما",
              "فشار",
              "کاتالیزگر",
              "جداسازی"
            ],
            "terminology": {
              "فرایند هابر": "روش تولید آمونیاک از N2 و H2.",
              "شرایط بهینه": "دما و فشاری که بیشترین بازده را می‌دهد."
            },
            "formulas": {
              "واکنش هابر": "N2(g) + 3H2(g) ⇌ 2NH3(g)"
            },
            "laws": null,
            "principles": [
              "دما پایین به نفع فراورده است (گرماده) اما سرعت کم است، از این رو دما را به 450°C افزایش می‌دهند.",
              "فشار بالا به نفع فراورده است (تعداد مول گاز کمتر).",
              "کاتالیزگر سرعت را افزایش می‌دهد بدون تغییر تعادل."
            ],
            "processes": [
              "مراحل فرایند هابر",
              "جداسازی آمونیاک"
            ],
            "mechanisms": null,
            "reaction_types": [
              "ترکیب مستقیم",
              "تعادلی"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "تعادل شیمیایی",
              "اصل لوشاتلیه"
            ],
            "next_topics": [
              "t4_6"
            ],
            "concept_dependencies": [
              "نیاز به درک تعادل"
            ],
            "required_background": null,
            "builds_upon": [
              "تعادل"
            ],
            "enables_learning_of": [
              "کاربرد صنعتی تعادل"
            ]
          },
          "relationships": {
            "related_topics": [
              "کاتالیزگر",
              "صنعت"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "شرایط فرایند هابر",
              "توضیح انتخاب دما و فشار",
              "نقش کاتالیزگر",
              "جداسازی آمونیاک"
            ],
            "hidden_points": [
              "مقایسه دماهای مختلف و بازده"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تحلیل شرایط بهینه"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "استفاده از لوشاتلیه در فرایند"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن اینکه واکنش گرماده است",
              "عدم درک دلیل انتخاب دما و فشار خاص"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "توجیه انتخاب دما (تعادل و سرعت)"
            ],
            "warning_points": [
              "دما بهینه 450°C است (نه خیلی پایین و نه خیلی بالا)."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "نمونه عالی از کاربرد تعادل.",
            "study_strategy": "بررسی تأثیر دما و فشار بر بازده",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t4_6"
          },
          "memory_support": {
            "memory_tips": "هابر: دما 450°C، فشار 200 atm، کاتالیزگر آهن.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "کارخانه هابر مانند یک برج بزرگ با لوله‌های ورودی N2 و H2 و خروجی NH3."
          },
          "examples": {
            "textbook_examples": [
              "نمودار ۳ (درصد آمونیاک بر حسب فشار)",
              "شکل ۱ (نمای فرایند هابر)"
            ],
            "important_examples": [
              "تولید آمونیاک در صنعت"
            ],
            "real_life_examples": [
              "کودهای شیمیایی",
              "نیتروژن ثابت"
            ]
          }
        },
        {
          "id": "t4_6",
          "title": "شیمی سبز، بازیافت و سنتز مواد (PET و متانول)",
          "core_knowledge": {
            "explanation": "شیمی سبز به طراحی فرایندها و محصولات با هدف کاهش یا حذف مواد خطرناک و حفظ محیط زیست می‌پردازد. بازیافت پلیمرها (مانند PET) و تبدیل آنها به مونومرها یا مواد مفید از اصول شیمی سبز است. همچنین سنتز موادی مانند متانول از منابع گازی و تبدیل آنها به محصولات ارزشمند با بهره‌وری اتمی بالا، از رویکردهای شیمی سبز محسوب می‌شود.",
            "complete_definition": "شیمی سبز، شاخه‌ای از شیمی است که با هدف کاهش مصرف مواد خطرناک، کاهش تولید پسماند و افزایش بازده اتمی، فرایندهای شیمیایی را طراحی می‌کند. بازیافت مواد (مانند PET) و سنتز سوخت‌های سبز از جمله راه‌های تحقق این هدف است.",
            "key_concepts": [
              "شیمی سبز",
              "بازیافت",
              "PET",
              "متانول",
              "بازده اتمی",
              "توسعه پایدار"
            ],
            "terminology": {
              "شیمی سبز": "طراحی فرایندهای شیمیایی دوستدار محیط زیست.",
              "بازده اتمی": "درصد اتم‌های واکنش‌دهنده که به فراورده مطلوب تبدیل می‌شوند.",
              "توسعه پایدار": "تأمین نیازهای امروز بدون به خطر انداختن آیندگان."
            },
            "formulas": {
              "تولید متانول": "CO + 2H2 → CH3OH",
              "بازیافت PET": "(تجزیه به مونومرها)"
            },
            "laws": null,
            "principles": [
              "شیمی سبز بر پیشگیری از تولید پسماند تأکید دارد.",
              "بازیافت مواد، مصرف منابع را کاهش می‌دهد.",
              "بازده اتمی بالا، نشان‌دهنده صرفه‌جویی در مواد اولیه است."
            ],
            "processes": [
              "بازیافت PET",
              "سنتز متانول از متان"
            ],
            "mechanisms": null,
            "reaction_types": [
              "استری شدن",
              "هیدروژناسیون"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پلیمرها (شیمی یازدهم)",
              "استوکیومتری"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک پلیمرها و واکنش‌ها"
            ],
            "required_background": null,
            "builds_upon": [
              "پلیمرها",
              "سنتز"
            ],
            "enables_learning_of": [
              "فناوری شیمیایی"
            ]
          },
          "relationships": {
            "related_topics": [
              "پلیمرها",
              "سوخت‌های سبز"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": []
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
              "اصول شیمی سبز",
              "بازیافت PET",
              "سنتز متانول",
              "بازده اتمی"
            ],
            "hidden_points": [
              "اقتصاد اتمی"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "کاربرد"
            ],
            "calculation_question_types": [
              "محاسبه بازده اتمی"
            ],
            "analytical_question_types": [
              "تحلیل سنتزهای سبز"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "آشنایی با رویکردهای نوین شیمی.",
            "study_strategy": "مطالعه نمونه‌های شیمی سبز",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "شیمی سبز = کاهش پسماند، بازیافت، بازده اتمی بالا.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "چرخه پایدار: از مواد خام تا بازیافت."
          },
          "examples": {
            "textbook_examples": [
              "سنتز PET (شکل ۱۲)",
              "تولید متانول",
              "بازیافت پلاستیک"
            ],
            "important_examples": [
              "بازیافت PET به مونومرها",
              "تولید متانول از گاز طبیعی"
            ],
            "real_life_examples": [
              "بطری‌های آب بازیافتی",
              "صنایع پتروشیمی سبز"
            ]
          }
        }
      ]
    }
  ]
};

export default { CHEMISTRY_12_KB };
