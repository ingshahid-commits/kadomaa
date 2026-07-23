/**
 * chemistry10.js  —  Kadoma knowledge base
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
export const CHEMISTRY_10_KB = {
  "textbook_metadata": {
    "title": "شیمی (۱) - دهم",
    "grade": "پایه دهم",
    "branch": "رشته علوم تجربی / ریاضی"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "کیهان زادگاه عناصر",
      "chapter_objectives": [
        "آشنایی با نحوه پیدایش عناصر در کیهان",
        "درک مفهوم ایزوتوپ و کاربردهای آن",
        "آشنایی با جدول تناوبی و نحوه استفاده از آن",
        "محاسبه جرم اتمی میانگین و عدد آووگادرو",
        "درک مفهوم طیف نشری و ارتباط آن با ساختار اتم",
        "آشنایی با مدل کوانتومی اتم و آرایش الکترونی",
        "توانایی رسم آرایش الکترون-نقطه‌ای اتم‌ها",
        "تشخیص و نام‌گذاری ترکیب‌های یونی و مولکولی"
      ],
      "overall_difficulty": 8,
      "overall_importance": 10,
      "topics": [
        {
          "id": "t1_1",
          "title": "منشأ عنصرها",
          "core_knowledge": {
            "explanation": "عنصرها در اثر واکنش‌های هسته‌ای در ستارگان شکل گرفته‌اند. با انفجار مهیب (بیگ‌بنگ)، ذرات زیراتمی تشکیل و سپس هیدروژن و هلیم به وجود آمدند. درون ستارگان، با واکنش‌های هسته‌ای، عناصر سنگین‌تر از هیدروژن و هلیم ساخته می‌شوند.",
            "complete_definition": "تمام عناصر موجود در جهان، از هیدروژن و هلیم اولیه که در بیگ‌بنگ تشکیل شدند، و سپس از طریق فرایندهای هم‌جوشی هسته‌ای در داخل ستارگان به وجود آمده‌اند.",
            "key_concepts": [
              "بیگ‌بنگ",
              "واکنش هسته‌ای",
              "هم‌جوشی",
              "مرگ ستاره",
              "عناصر سنگین"
            ],
            "terminology": {
              "بیگ‌بنگ": "انفجار مهیب اولیه که منجر به پیدایش جهان و ذرات زیراتمی شد.",
              "واکنش هسته‌ای": "واکنشی که در آن هسته اتم تغییر کرده و عنصر جدیدی تولید می‌شود."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "عناصر سبک‌تر (هیدروژن و هلیم) در بیگ‌بنگ شکل گرفتند.",
              "عناصر سنگین‌تر درون ستارگان و از طریق واکنش‌های هسته‌ای تولید می‌شوند."
            ],
            "processes": [
              "بیگ‌بنگ → تشکیل ذرات زیراتمی → تشکیل H و He → متراکم شدن و تشکیل ستارگان → واکنش‌های هسته‌ایی در ستارگان → تشکیل عناصر سنگین‌تر → انفجار ستاره و پخش عناصر در فضا"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مفاهیم اولیه اتم در علوم تجربی"
            ],
            "next_topics": [
              "t1_2",
              "t1_3"
            ],
            "concept_dependencies": [
              "نیاز به درک مفهوم اتم و عنصر"
            ],
            "required_background": [
              "علوم تجربی پایه نهم"
            ],
            "builds_upon": [],
            "enables_learning_of": [
              "تکامل ستارگان و تولید عناصر"
            ]
          },
          "relationships": {
            "related_topics": [
              "واکنش‌های هسته‌ای",
              "اخترفیزیک"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 4,
            "difficulty_score": 3,
            "importance_score": 4,
            "reasoning_load": 4,
            "memory_load": 3
          },
          "exam_metadata": {
            "importance_for_konkur": 3,
            "probability_in_exam": 20,
            "exam_points": [
              "توضیح فرایند پیدایش عناصر"
            ],
            "hidden_points": null,
            "trick_points": null,
            "common_question_patterns": [
              "تشریحی",
              "صحت و سقم"
            ],
            "conceptual_question_types": [],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه گرفتن واکنش‌های شیمیایی با هسته‌ای",
              "عدم درک نقش مرگ ستارگان در پخش عناصر"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک فرایند هم‌جوشی"
            ],
            "warning_points": [
              "تفاوت واکنش شیمیایی و هسته‌ای"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و آسان، برای درک فصل بعدی ضروری است.",
            "study_strategy": "خواندن متن و مشاهده شکل‌ها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_2"
          },
          "memory_support": {
            "memory_tips": "به خاطر بسپارید که ستارگان کارخانه‌های تولید عنصر هستند.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تصویر یک ستاره در حال انفجار را مجسم کنید که عناصر را به فضا پرتاب می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "توضیح چگونگی تشکیل عنصرها با شکل ۲"
            ],
            "important_examples": [
              "نقش خورشید در تولید انرژی از طریق واکنش‌های هسته‌ای"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_2",
          "title": "ایزوتوپ و رادیوایزوتوپ",
          "core_knowledge": {
            "explanation": "ایزوتوپ‌ها، اتم‌های یک عنصر هستند که تعداد پروتون‌های یکسان (عدد اتمی یکسان) ولی تعداد نوترون‌های متفاوت (عدد جرمی متفاوت) دارند. ایزوتوپ‌های ناپایدار، رادیوایزوتوپ نامیده می‌شوند و با گسیل پرتو، به عنصر پایدارتری تبدیل می‌شوند.",
            "complete_definition": "ایزوتوپ‌ها، گونه‌های مختلف یک عنصر شیمیایی هستند که دارای عدد اتمی (Z) یکسان ولی عدد جرمی (A) متفاوت می‌باشند. رادیوایزوتوپ‌ها، ایزوتوپ‌های ناپایداری هستند که خودبه‌خود تجزیه شده و پرتو گسیل می‌کنند.",
            "key_concepts": [
              "ایزوتوپ",
              "عدد اتمی",
              "عدد جرمی",
              "پایداری هسته",
              "رادیوایزوتوپ",
              "نیم‌عمر",
              "پرتو"
            ],
            "terminology": {
              "ایزوتوپ": "اتم‌های یک عنصر با تعداد نوترون متفاوت",
              "عدد اتمی (Z)": "تعداد پروتون‌های هسته",
              "عدد جرمی (A)": "مجموع تعداد پروتون‌ها و نوترون‌ها",
              "رادیوایزوتوپ": "ایزوتوپ ناپایدار که پرتوزا است",
              "نیم‌عمر": "زمان الزم برای واپاشی نیمی از اتم‌های یک نمونه رادیواکتیو"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "اتم‌های یک عنصر می‌توانند جرم‌های متفاوتی داشته باشند (ایزوتوپ).",
              "ایزوتوپ‌های ناپایدار (رادیوایزوتوپ‌ها) به مرور زمان تجزیه می‌شوند.",
              "نیم‌عمر، معیاری برای پایداری ایزوتوپ است."
            ],
            "processes": [
              "واپاشی هسته‌ای"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار اتم (پروتون، نوترون، الکترون)"
            ],
            "next_topics": [
              "t1_5",
              "t1_6"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار اتم"
            ],
            "required_background": [
              "علوم تجربی پایه نهم"
            ],
            "builds_upon": [],
            "enables_learning_of": [
              "محاسبه جرم اتمی میانگین",
              "کاربرد رادیوایزوتوپ‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "جدول تناوبی",
              "جرم اتمی"
            ],
            "similar_concepts": [
              "ایزوبار (هسته‌های با عدد جرمی یکسان)"
            ],
            "differences": null,
            "frequently_confused_with": [
              "آلوتروپ"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 5,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "تعریف ایزوتوپ",
              "تشخیص ایزوتوپ از روی نماد",
              "محاسبه تعداد ذرات زیراتمی",
              "تشخیص رادیوایزوتوپ"
            ],
            "hidden_points": [
              "نسبت نوترون به پروتون و پایداری هسته"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص ایزوتوپ‌های یک عنصر"
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
            "calculation_question_types": [
              "محاسبه تعداد پروتون، نوترون و الکترون از روی نماد"
            ],
            "analytical_question_types": [
              "تحلیل پایداری ایزوتوپ‌ها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در محاسبه تعداد نوترون (A - Z)",
              "تصور اینکه همه اتم‌های یک عنصر جرم یکسان دارند",
              "عدم تشخیص ایزوتوپ‌ها از روی نماد"
            ],
            "misconceptions": [
              "همه ایزوتوپ‌ها رادیو اکتیو هستند"
            ],
            "difficult_parts": [
              "محاسبه تعداد نوترون",
              "درک مفهوم نیم‌عمر"
            ],
            "warning_points": [
              "عدد اتمی (Z) نشان‌دهنده تعداد پروتون‌ها و تعیین‌کننده عنصر است.",
              "عدد جرمی (A) مجموع پروتون‌ها و نوترون‌هاست."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم کلیدی و پرتکرار در کنکور و آزمون‌ها.",
            "study_strategy": "تمرین زیاد با نمادهای مختلف ایزوتوپ‌ها",
            "review_strategy": "مرور هر 5 روز یکبار با حل مثال‌های جدید",
            "minimum_mastery_required": 85,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_5"
          },
          "memory_support": {
            "memory_tips": "Z را پروتون در نظر بگیرید. A-Z = تعداد نوترون.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "اتم‌های یک عنصر را مانند خواهر و برادرهایی تصور کنید که قدشان (جرم) متفاوت است."
          },
          "examples": {
            "textbook_examples": [
              "مثال ایزوتوپ‌های منیزیم (شکل ۳)",
              "مثال هیدروژن و کربن (خود را بیازمایید)"
            ],
            "important_examples": [
              "ایزوتوپ‌های کربن (C-12 و C-14)",
              "تکنسیم (Tc-99)"
            ],
            "real_life_examples": [
              "کاربرد رادیوایزوتوپ‌ها در پزشکی (تصویربرداری و درمان)",
              "کاربرد اورانیوم در راکتورهای اتمی"
            ]
          }
        },
        {
          "id": "t1_3",
          "title": "طبقه‌بندی عنصرها و جدول تناوبی",
          "core_knowledge": {
            "explanation": "عنصرها بر اساس افزایش عدد اتمی در جدول تناوبی سازماندهی شده‌اند. این جدول شامل ۷ دوره (ردیف افقی) و ۱۸ گروه (ستون عمودی) است. عنصرهای هر گروه، خواص شیمیایی مشابهی دارند.",
            "complete_definition": "جدول تناوبی، چیدمانی از عنصرهای شیمیایی بر اساس عدد اتمی، آرایش الکترونی و خواص شیمیایی آن‌هاست. هر سطر افقی یک دوره و هر ستون عمودی یک گروه نامیده می‌شود.",
            "key_concepts": [
              "جدول تناوبی",
              "گروه",
              "دوره",
              "عدد اتمی",
              "خواص شیمیایی"
            ],
            "terminology": {
              "گروه": "ستون عمودی در جدول تناوبی که عناصر با خواص شیمیایی مشابه را شامل می‌شود.",
              "دوره": "ردیف افقی در جدول تناوبی که عناصر را بر اساس افزایش عدد اتمی مرتب می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "عناصر جدول بر اساس افزایش عدد اتمی مرتب شده‌اند.",
              "عناصر یک گروه، خواص شیمیایی مشابهی دارند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار اتم",
              "ایزوتوپ"
            ],
            "next_topics": [
              "t1_4",
              "t1_5",
              "t1_6"
            ],
            "concept_dependencies": [
              "نیاز به درک عدد اتمی"
            ],
            "required_background": [
              "آشنایی اولیه با جدول تناوبی از علوم تجربی"
            ],
            "builds_upon": [],
            "enables_learning_of": [
              "پیش‌بینی خواص عناصر",
              "آرایش الکترونی"
            ]
          },
          "relationships": {
            "related_topics": [
              "آرایش الکترونی"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
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
              "مفهوم گروه و دوره",
              "محاسبه تعداد پروتون از روی عدد اتمی"
            ],
            "hidden_points": [
              "موقعیت عنصر در جدول و ارتباط آن با خواص"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص موقعیت"
            ],
            "calculation_question_types": [
              "محاسبه عدد اتمی از روی موقعیت"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در شمارش دوره‌ها و گروه‌ها",
              "عدم درک اینکه ترتیب جدول بر اساس عدد اتمی است"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "پیدا کردن موقعیت عنصر در جدول"
            ],
            "warning_points": [
              "تفاوت گروه و دوره"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و مقدماتی برای مباحث بعدی.",
            "study_strategy": "تمرین با جدول تناوبی و پیدا کردن موقعیت عنصرهای مختلف",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_5"
          },
          "memory_support": {
            "memory_tips": "دوره = ردیف افقی، گروه = ستون عمودی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "جدول را به یک ساختمان با طبقات (دوره‌ها) و واحدهای هم‌شکل (گروه‌ها) تشبیه کنید."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۷- شکل",
              "اطالعات ارائه شده در شکل ۸"
            ],
            "important_examples": [
              "تعیین موقعیت آلومینیم (Al)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_4",
          "title": "جرم اتمی و مقیاس جرم اتمی (amu)",
          "core_knowledge": {
            "explanation": "جرم اتم‌ها بسیار کوچک است و برای اندازه‌گیری آن از یکای جرم اتمی (amu) استفاده می‌شود. این یکا بر اساس جرم ایزوتوپ کربن-12 تعریف شده است. جرم هر اتم بر حسب amu، جرم اتمی نسبی آن نام دارد.",
            "complete_definition": "یکای جرم اتمی (amu) برابر با 1/12 جرم یک اتم از ایزوتوپ کربن-12 است. این یکا برای اندازه‌گیری جرم ذرات بسیار ریز مانند اتم‌ها و مولکول‌ها به کار می‌رود.",
            "key_concepts": [
              "یکای جرم اتمی (amu)",
              "جرم اتمی نسبی",
              "مقیاس جرم اتمی",
              "کربن-12"
            ],
            "terminology": {
              "amu": "واحد جرم اتمی (Atomic Mass Unit)",
              "جرم اتمی نسبی": "جرم یک اتم بر حسب یکای جرم اتمی (amu)"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "جرم اتم‌ها بر حسب amu اندازه‌گیری می‌شود.",
              "یکا amu بر اساس جرم ایزوتوپ C-12 تعریف شده است."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ایزوتوپ"
            ],
            "next_topics": [
              "t1_5"
            ],
            "concept_dependencies": [
              "نیاز به درک مفهوم ایزوتوپ"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "محاسبه جرم مولی",
              "مول"
            ]
          },
          "relationships": {
            "related_topics": [
              "جرم مولی",
              "مول"
            ],
            "similar_concepts": [
              "جرم مولی (g/mol)"
            ],
            "differences": [
              "جرم اتمی بر حسب amu است، جرم مولی بر حسب g/mol است."
            ],
            "frequently_confused_with": [
              "جرم مولی و جرم اتمی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P10D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تعریف amu",
              "مقایسه جرم پروتون، نوترون و الکترون"
            ],
            "hidden_points": null,
            "trick_points": [
              "سوالات مربوط به یکاها"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه گرفتن j و amu"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک مقیاس بسیار کوچک amu"
            ],
            "warning_points": [
              "تمایز amu با g و kg"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای محاسبات استوکیومتری.",
            "study_strategy": "توجه به تعریف دقیق amu",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_5"
          },
          "memory_support": {
            "memory_tips": "amu بر اساس C-12 تعریف شده است (12/1 جرم آن).",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۰",
              "جدول ۱"
            ],
            "important_examples": [
              "جرم پروتون و نوترون حدود 1 amu",
              "جرم الکترون ناچیز"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_5",
          "title": "مول و عدد آووگادرو",
          "core_knowledge": {
            "explanation": "مول یکای مقدار ماده در شیمی است. هر مول از هر ماده، شامل 6.02 × 10^23 ذره (اتم، مولکول، یون) است. به این عدد، عدد آووگادرو می‌گویند. جرم یک مول از یک ماده بر حسب گرم، جرم مولی آن ماده نامیده می‌شود.",
            "complete_definition": "مول، مقدار ماده‌ای است که به تعداد اتم‌های موجود در 12 گرم از ایزوتوپ کربن-12، ذره داشته باشد. این عدد برابر با 6.022 × 10^23 است و عدد آووگادرو نامیده می‌شود.",
            "key_concepts": [
              "مول",
              "عدد آووگادرو (NA)",
              "جرم مولی",
              "رابطه مول و جرم"
            ],
            "terminology": {
              "مول": "یکای مقدار ماده",
              "عدد آووگادرو": "تعداد ذرات در یک مول ماده (6.02 × 10^23)",
              "جرم مولی": "جرم یک مول از یک ماده بر حسب گرم"
            },
            "formulas": {
              "n": "تعداد مول",
              "m": "جرم بر حسب گرم",
              "M": "جرم مولی (g/mol)",
              "N": "تعداد ذرات",
              "NA": "عدد آووگادرو (6.022 × 10^23)",
              "n = m/M": null,
              "n = N/NA": null,
              "m = n × M": null,
              "N = n × NA": null
            },
            "laws": null,
            "principles": [
              "یک مول از هر ماده، 6.02 × 10^23 ذره دارد.",
              "جرم یک مول از هر ماده بر حسب گرم، با جرم اتمی یا مولکولی آن بر حسب amu برابر است."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "جرم اتمی (amu)",
              "جرم مولی"
            ],
            "next_topics": [
              "t2_4"
            ],
            "concept_dependencies": [
              "نیاز به درک جرم اتمی و مفهوم یکا"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "استوکیومتری",
              "غلظت مولی",
              "محاسبات شیمیایی"
            ]
          },
          "relationships": {
            "related_topics": [
              "استوکیومتری"
            ],
            "similar_concepts": [
              "دوجین (برای شمارش)"
            ],
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 6,
            "importance_score": 10,
            "reasoning_load": 6,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "تعریف مول",
              "محاسبه تعداد ذرات",
              "محاسبه جرم از روی مول و بالعکس",
              "درک عدد آووگادرو"
            ],
            "hidden_points": [
              "رابطه جرم مولی و جرم اتمی"
            ],
            "trick_points": [
              "تشخیص تفاوت جرم مولی و جرم یک اتم"
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
              "محاسبه مول، جرم و تعداد ذرات از روی یکدیگر"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "عدم تشخیص تفاوت جرم مولی و جرم اتمی",
              "اشتباه در محاسبات توانی",
              "استفاده نادرست از عامل تبدیل"
            ],
            "misconceptions": [
              "مول یکای جرم است"
            ],
            "difficult_parts": [
              "انجام محاسبات با اعداد بزرگ (توان 10)"
            ],
            "warning_points": [
              "جرم مولی بر حسب g/mol است.",
              "عدد آووگادرو یک عدد ثابت است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین مفهوم برای محاسبات شیمیایی.",
            "study_strategy": "تمرین تبدیل مول به جرم و تعداد ذرات با استفاده از عامل‌های تبدیل",
            "review_strategy": "مرور روزانه و حل مسائل متنوع",
            "minimum_mastery_required": 90,
            "mastery_threshold": 98,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "عدد آووگادرو (6.02 × 10^23) را به خاطر بسپارید.",
            "mnemonic_devices": "عدد آووگادرو: 602,000,000,000,000,000,000,000 (با 24 صفر)",
            "visual_imagination_tips": "یک مول را مانند یک دوجین غول‌آسا تصور کنید که نه 12 تا، بلکه 6.02 × 10^23 تا دارد."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۳",
              "مثال تبدیل گرم کربن به مول"
            ],
            "important_examples": [
              "محاسبه تعداد اتم‌ها در یک گرم هیدروژن",
              "محاسبه جرم یک مول کربن و آهن (شکل ۱۳)"
            ],
            "real_life_examples": [
              "تعداد ستاره‌های جهان (0.08 مول ستاره)"
            ]
          }
        },
        {
          "id": "t1_6",
          "title": "نور، طیف و مدل‌های اتم",
          "core_knowledge": {
            "explanation": "نور (پرتوهای الکترومغناطیسی) حامل انرژی است و با بررسی طیف نشری عناصر، می‌توان به اطلاعاتی درباره ساختار اتم پی برد. مدل کوانتومی اتم، الکترون‌ها را در الیه‌های انرژی با سطوح انرژی کوانتیده (پله‌ای) توصیف می‌کند. با جذب یا نشر انرژی، الکترون‌ها بین الیه‌ها جابه‌جا می‌شوند.",
            "complete_definition": "مدل کوانتومی اتم، اتم را متشکل از هسته و الکترون‌هایی می‌داند که در الیه‌های انرژی (سطح‌های انرژی) با مقادیر انرژی معین و کوانتیده قرار دارند. انتقال الکترون بین این الیه‌ها، با جذب یا نشر انرژی به صورت کوانتومی (بسته‌های معین) همراه است.",
            "key_concepts": [
              "پرتوهای الکترومغناطیسی",
              "طیف نشری خطی",
              "طیف نشری",
              "اتم برانگیخته",
              "حالت پایه",
              "مدل کوانتومی اتم",
              "کوانتومی بودن انرژی",
              "عدد کوانتومی اصلی (n)"
            ],
            "terminology": {
              "طیف نشری خطی": "الگوی از خطوط رنگی که از عبور نور نشر شده از یک عنصر از منشور به دست می‌آید و مختص آن عنصر است.",
              "حالت پایه": "پایین‌ترین سطح انرژی اتم",
              "اتم برانگیخته": "اتمی که الکترون‌های آن با جذب انرژی به ترازهای باالتر رفته‌اند.",
              "عدد کوانتومی اصلی (n)": "عددی که شماره الیه الکترونی را نشان می‌دهد.",
              "کوانتومی": "به معنی پیمانه‌ای، گسسته و غیرپیوسته بودن انرژی"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "طیف نشری خطی هر عنصر، منحصر به فرد است.",
              "الکترون‌ها در اتم دارای سطوح انرژی کوانتیده (معین) هستند.",
              "الکترون‌ها با جذب یا نشر انرژی به صورت بسته‌های معین (کوانتوم)، بین الیه‌ها جابه‌جا می‌شوند."
            ],
            "processes": [
              "جذب انرژی (اتم برانگیخته) → نشر نور (بازگشت به حالت پایه)"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار اتم (پروتون، نوترون، الکترون)"
            ],
            "next_topics": [
              "t1_7"
            ],
            "concept_dependencies": [
              "نیاز به درک مفهوم انرژی و اتم"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "آرایش الکترونی"
            ]
          },
          "relationships": {
            "related_topics": [
              "آرایش الکترونی"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "مفهوم طیف نشری",
              "توضیح کوانتومی بودن انرژی",
              "تشخیص حالت پایه و برانگیخته",
              "علت ایجاد طیف خطی",
              "عدد کوانتومی اصلی"
            ],
            "hidden_points": [
              "رابطه طول موج و انرژی"
            ],
            "trick_points": [
              "سوالات مربوط به تفاوت طیف پیوسته و خطی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "علت‌یابی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل فرایند جذب و نشر نور"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "عدم درک کوانتومی بودن انرژی",
              "اشتباه گرفتن حالت پایه و برانگیخته",
              "عدم توانایی در توجیه طیف خطی"
            ],
            "misconceptions": [
              "الکترون‌ها به طور پیوسته انرژی جذب یا نشر می‌کنند."
            ],
            "difficult_parts": [
              "درک مفهوم کوانتومی",
              "رابطه طیف با ساختار اتم"
            ],
            "warning_points": [
              "انرژی الیه‌ها کوانتیده (پله‌ای) است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای درک آرایش الکترونی.",
            "study_strategy": "استفاده از تشبیه نردبان برای درک کوانتومی بودن",
            "review_strategy": "مرور هر 5 روز یکبار با رسم نمودار سطوح انرژی",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t1_7"
          },
          "memory_support": {
            "memory_tips": "طیف نشری خطی مانند اثر انگشت اتم است.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نردبان انرژی را تصور کنید که فقط می‌توانید روی پله‌ها بایستید، نه بین آنها."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲۰ و ۲۲"
            ],
            "important_examples": [
              "طیف نشری هیدروژن"
            ],
            "real_life_examples": [
              "آتش‌بازی",
              "لامپ‌های نئون"
            ]
          }
        },
        {
          "id": "t1_7",
          "title": "آرایش الکترونی اتم‌ها",
          "core_knowledge": {
            "explanation": "الکترون‌ها در اتم‌ها، در الیه‌ها و زیرالیه‌های مشخصی توزیع می‌شوند. ترتیب پر شدن زیرالیه‌ها از قاعده آفبا پیروی می‌کند که بر اساس آن، زیرالیه‌های با انرژی کمتر، زودتر پر می‌شوند. آرایش الکترونی اتم‌ها، رفتار شیمیایی آن‌ها را تعیین می‌کند.",
            "complete_definition": "آرایش الکترونی، نحوه توزیع الکترون‌های یک اتم در زیرالیه‌های مختلف (s, p, d, f) بر اساس قاعده آفبا است. این آرایش، پایدارترین حالت ممکن برای اتم را نشان می‌دهد.",
            "key_concepts": [
              "زیرالیه (s, p, d, f)",
              "عدد کوانتومی اصلی (n)",
              "عدد کوانتومی فرعی (l)",
              "قاعده آفبا",
              "آرایش الکترونی گسترده",
              "آرایش الکترونی فشرده",
              "الیه ظرفیت",
              "الکترون ظرفیت"
            ],
            "terminology": {
              "زیرالیه": "بخش‌های کوچک‌تر تشکیل‌دهنده یک الیه الکترونی (s, p, d, f)",
              "قاعده آفبا": "ترتیب پر شدن زیرالیه‌ها بر اساس افزایش انرژی (1s < 2s < 2p < 3s < 3p < 4s < 3d < ...)",
              "الیه ظرفیت": "بیرونی‌ترین الیه اتم که الکترون‌های آن در واکنش‌های شیمیایی شرکت می‌کنند.",
              "الکترون ظرفیت": "الکترون‌های موجود در الیه ظرفیت"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "پر شدن زیرالیه‌ها از قاعده آفبا پیروی می‌کند.",
              "گنجایش زیرالیه‌ها: s=2, p=6, d=10, f=14",
              "الکترون‌های ظرفیت، رفتار شیمیایی اتم را تعیین می‌کنند."
            ],
            "processes": [
              "رسم آرایش الکترونی با قاعده آفبا",
              "فشرده‌سازی آرایش الکترونی با گاز نجیب"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مدل کوانتومی اتم",
              "عدد کوانتومی اصلی و فرعی"
            ],
            "next_topics": [
              "t1_8",
              "t1_9"
            ],
            "concept_dependencies": [
              "نیاز به درک سطوح انرژی و عدد کوانتومی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "پیش‌بینی رفتار شیمیایی عناصر",
              "تشکیل پیوند"
            ]
          },
          "relationships": {
            "related_topics": [
              "جدول تناوبی",
              "پیوند شیمیایی"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT4H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 8,
            "importance_score": 10,
            "reasoning_load": 8,
            "memory_load": 9
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "نوشتن آرایش الکترونی (گسترده و فشرده)",
              "تشخیص آرایش درست بر اساس قاعده آفبا",
              "تشخیص الکترون‌های ظرفیت",
              "تعیین شماره دوره و گروه از روی آرایش"
            ],
            "hidden_points": [
              "نقش آرایش الکترونی در تعیین خواص"
            ],
            "trick_points": [
              "استثناهای قاعده آفبا (کروم و مس)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تحلیل آرایش",
              "پیش‌بینی خواص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "استثناهای قاعده آفبا"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در ترتیب پر شدن زیرالیه‌ها (مثلاً پر شدن 3d قبل از 4s)",
              "اشتباه در شمارش الکترون‌های ظرفیت",
              "فراموش کردن استثناهای کروم و مس"
            ],
            "misconceptions": [
              "همه زیرالیه‌ها به ترتیب عدد n پر می‌شوند."
            ],
            "difficult_parts": [
              "به خاطر سپردن قاعده آفبا",
              "رسم آرایش برای عناصر با Z بالا",
              "استثناهای قاعده"
            ],
            "warning_points": [
              "برای عناصر گروه d، الکترون‌های ظرفیت شامل زیرالیه d و s می‌شوند.",
              "نظم 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d ..."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کلید درک جدول تناوبی و رفتار شیمیایی.",
            "study_strategy": "تمرین بسیار زیاد برای نوشتن آرایش عناصر مختلف، شروع از عناصر سبک و پیش رفتن به سنگین‌تر",
            "review_strategy": "مرور روزانه و نوشتن آرایش برای عناصر تصادفی از جدول",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t1_8"
          },
          "memory_support": {
            "memory_tips": "قاعده آفبا: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p",
            "mnemonic_devices": "برای حفظ نظم آفبا از روش پیکان‌های مورب (شکل ۲۳) استفاده کنید.",
            "visual_imagination_tips": "مسیر پر شدن الکترون‌ها را مانند مسیری در یک هتل بزرگ تصور کنید که ابتدا اتاق‌های طبقه اول و سپس دوم و... پر می‌شوند."
          },
          "examples": {
            "textbook_examples": [
              "آرایش الکترونی بریلیم، سدیم، فسفر، کلسیم و تیتانیم"
            ],
            "important_examples": [
              "استثناهای قاعده آفبا (کروم و مس)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_8",
          "title": "آرایش الکترون-نقطه‌ای (ساختار لوویس) و قاعده هشت‌تایی",
          "core_knowledge": {
            "explanation": "در این آرایش، الکترون‌های ظرفیت اتم به صورت نقطه‌هایی دور نماد شیمیایی آن نمایش داده می‌شوند. اتم‌ها تمایل دارند با از دست دادن، گرفتن یا به اشتراک گذاشتن الکترون، به آرایش هشت‌تایی (یا دو تایی برای هلیم) برسند که پایدارترین حالت است.",
            "complete_definition": "آرایش الکترون-نقطه‌ای (ساختار لوویس)، نمایشی از الکترون‌های ظرفیت یک اتم یا مولکول است که با نقطه‌هایی پیرامون نماد شیمیایی آن نشان داده می‌شود. قاعده هشت‌تایی بیان می‌کند که اتم‌ها تمایل دارند در لایه ظرفیت خود به هشت الکترون دست یابند تا به پایداری برسند.",
            "key_concepts": [
              "الکترون ظرفیت",
              "الکترون جفت نشده",
              "جفت الکترون",
              "قاعده هشت‌تایی",
              "پیوند یونی",
              "پیوند اشتراکی"
            ],
            "terminology": {
              "قاعده هشت‌تایی": "تمایل اتم‌ها برای داشتن هشت الکترون در لایه ظرفیت",
              "الکترون جفت نشده": "الکترونی که به تنهایی در یک اوربیتال قرار دارد و در تشکیل پیوند شرکت می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "اتم‌ها برای رسیدن به آرایش گاز نجیب واکنش می‌دهند.",
              "قاعده هشت‌تایی: هشت الکترون در لایه ظرفیت، پایدار است (به جز H و He که دو الکترون دارند)."
            ],
            "processes": [
              "رسم ساختار لوویس برای اتم‌ها",
              "تشخیص الکترون‌های جفت‌نشده"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آرایش الکترونی",
              "الکترون ظرفیت"
            ],
            "next_topics": [
              "t1_9",
              "t2_2"
            ],
            "concept_dependencies": [
              "نیاز به شناسایی الکترون‌های ظرفیت"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "تشکیل پیوند یونی و اشتراکی",
              "رسم ساختار لوویس مولکول‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "ترکیب یونی",
              "ترکیب کووالانسی"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": [
              "آرایش الکترونی گسترده"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 9,
            "reasoning_load": 5,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "رسم آرایش الکترون-نقطه‌ای",
              "تشخیص الکترون‌های جفت‌نشده",
              "پیش‌بینی رفتار اتم بر اساس ساختار لوویس"
            ],
            "hidden_points": [
              "تعداد الکترون‌های جفت‌نشده نشان‌دهنده ظرفیت اتم است."
            ],
            "trick_points": [
              "سوالات مربوط به رسم دقیق نقاط"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "رسم و تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "پیش‌بینی نوع پیوند"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "قرار ندادن صحیح نقطه‌ها",
              "اشتباه در شمارش الکترون‌های ظرفیت",
              "فراموش کردن جفت شدن نقاط"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "رسم برای اتم‌های با تعداد الکترون ظرفیت زیاد"
            ],
            "warning_points": [
              "نظم قرارگیری نقطه‌ها (چهار طرف نماد)"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای درک پیوندهای شیمیایی.",
            "study_strategy": "تمرین با عناصر گروه‌های اصلی جدول",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_9"
          },
          "memory_support": {
            "memory_tips": "قاعده هشت‌تایی = رسیدن به آرایش گاز نجیب.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نقاط را مانند صندلی‌های خالی پیرامون یک میز تصور کنید که باید پر شوند."
          },
          "examples": {
            "textbook_examples": [
              "آرایش الکترون-نقطه‌ای کربن، فسفر و آرگون"
            ],
            "important_examples": [
              "آرایش سدیم (Na•)",
              "رسم ساختار کلر (Cl•)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_9",
          "title": "ترکیب یونی و ترکیب مولکولی (کووالانسی)",
          "core_knowledge": {
            "explanation": "ترکیب‌های یونی از جاذبه الکترواستاتیکی بین یون‌های با بار مخالف (کاتیون و آنیون) تشکیل می‌شوند. ترکیب‌های مولکولی (کووالانسی) از به اشتراک گذاشتن الکترون‌ها بین اتم‌ها به وجود می‌آیند.",
            "complete_definition": "ترکیب یونی، ترکیبی است که از اتصال یون‌های مثبت (کاتیون) و منفی (آنیون) از طریق نیروی جاذبه الکترواستاتیکی قوی (پیوند یونی) به وجود می‌آید. ترکیب مولکولی (کووالانسی)، ترکیبی است که در آن اتم‌ها با به اشتراک گذاشتن جفت‌الکترون‌ها (پیوند کووالانسی) به یکدیگر متصل می‌شوند.",
            "key_concepts": [
              "پیوند یونی",
              "پیوند کووالانسی",
              "کاتیون",
              "آنیون",
              "جفت الکترون اشتراکی",
              "مولکول",
              "ترکیب یونی",
              "ترکیب کووالانسی"
            ],
            "terminology": {
              "پیوند یونی": "نیروی جاذبه بین یون‌های با بار مخالف.",
              "پیوند کووالانسی": "اتصال دو اتم از طریق به اشتراک گذاشتن الکترون‌ها.",
              "کاتیون": "یون با بار مثبت",
              "آنیون": "یون با بار منفی"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در ترکیب یونی، مجموع بارها صفر است.",
              "فلزها به کاتیون و نافلزها به آنیون تبدیل می‌شوند.",
              "نافلزها با به اشتراک گذاشتن الکترون، مولکول می‌سازند."
            ],
            "processes": [
              "تشکیل ترکیب یونی",
              "تشکیل ترکیب کووالانسی",
              "نوشتن فرمول شیمیایی ترکیب یونی",
              "نام‌گذاری ترکیب یونی و کووالانسی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آرایش الکترون-نقطه‌ای",
              "قاعده هشت‌تایی"
            ],
            "next_topics": [
              "t2_2",
              "t2_3"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار لوویس و قاعده هشت‌تایی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "واکنش‌های شیمیایی",
              "نام‌گذاری ترکیب‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "پیوند شیمیایی",
              "مولکول"
            ],
            "similar_concepts": null,
            "differences": [
              "در پیوند یونی، الکترون جابه‌جا می‌شود، در پیوند کووالانسی، به اشتراک گذاشته می‌شود.",
              "ترکیب یونی بین فلز و نافلز، ترکیب کووالانسی بین نافلزها."
            ],
            "frequently_confused_with": [
              "تفاوت خواص ترکیب یونی و مولکولی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT4H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 10,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "تشخیص ترکیب یونی و مولکولی",
              "نوشتن فرمول شیمیایی",
              "نام‌گذاری ترکیب‌ها",
              "تشکیل یون‌ها از اتم‌ها"
            ],
            "hidden_points": [
              "نحوه نام‌گذاری ترکیب‌های یونی با فلزات واسطه (آهن (II) اکسید)"
            ],
            "trick_points": [
              "سوالات مربوط به نام‌گذاری ترکیب‌های یونی با بار متغیر"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص نوع ترکیب",
              "نام‌گذاری"
            ],
            "calculation_question_types": [
              "محاسبه بار یون‌ها از روی فرمول"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نوشتن فرمول ترکیب یونی (نسبت یون‌ها)",
              "عدم تشخیص بار یون‌ها",
              "اشتباه در نام‌گذاری ترکیب‌های یونی دوتایی"
            ],
            "misconceptions": [
              "تمام ترکیب‌های یونی از دو اتم تشکیل شده‌اند."
            ],
            "difficult_parts": [
              "نام‌گذاری ترکیب‌های یونی با فلزات واسطه",
              "تشخیص نوع پیوند از روی فرمول"
            ],
            "warning_points": [
              "در فرمول‌نویسی ترکیب یونی، مجموع بارها باید صفر باشد.",
              "برای فلزات با بار متغیر، بار در نام نوشته می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبانی نام‌گذاری و فرمول‌نویسی که در تمام شیمی کاربرد دارد.",
            "study_strategy": "تمرین زیاد نام‌گذاری و فرمول‌نویسی، استفاده از جدول یون‌ها",
            "review_strategy": "مرور هر 5 روز یکبار با تمرین‌های جدید",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "یون‌های تک‌اتمی: بار برابر با عدد گروه است (گروه 1: +1، گروه 2: +2، گروه 16: -2، گروه 17: -1).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "ترکیب یونی مانند یک آهنربا، و ترکیب کووالانسی مانند دو دست که به هم قلاب شده‌اند."
          },
          "examples": {
            "textbook_examples": [
              "تشکیل سدیم کلرید (شکل ۲۵)",
              "تشکیل کلر (Cl2) (شکل ۲۶)",
              "جدول ۴"
            ],
            "important_examples": [
              "سدیم کلرید (NaCl)",
              "کلرید کلسیم (CaCl2)",
              "آب (H2O)"
            ],
            "real_life_examples": [
              "نمک خوراکی (NaCl)",
              "گاز کلر (Cl2)"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "ردِّ پای گازها در زندگی",
      "chapter_objectives": [
        "شناخت ترکیب هواکره و روش‌های جداسازی گازهای آن",
        "بررسی واکنش‌پذیری اکسیژن و اکسیدهای فلزی و نافلزی",
        "درک مفهوم سوختن کامل و ناقص",
        "موازنه کردن معادله‌های شیمیایی",
        "بررسی اثرات گازهای گلخانه‌ای و شیمی سبز",
        "درک رفتار گازها و قانون آووگادرو",
        "انجام محاسبات استوکیومتری",
        "بررسی روش هابر برای تولید آمونیاک"
      ],
      "overall_difficulty": 7,
      "overall_importance": 10,
      "topics": [
        {
          "id": "t2_1",
          "title": "ترکیب هواکره و جداسازی اجزای آن",
          "core_knowledge": {
            "explanation": "هواکره مخلوطی از گازهاست. نیتروژن (حدود 78%)، اکسیژن (حدود 21%) و آرگون (حدود 1%) گازهای اصلی آن هستند. گازهای دیگر مانند CO2، نئون و هلیم به مقدار کم وجود دارند. برای جداسازی گازهای هوا از روش تقطیر جزء به جزء هوای مایع استفاده می‌شود.",
            "complete_definition": "هواکره (اتمسفر) لایه‌ای از گازهاست که کره زمین را احاطه کرده است. ترکیب اصلی هوای خشک و پاک در تروپوسفر شامل نیتروژن (78%)، اکسیژن (21%) و آرگون (1%) با مقادیر ناچیزی از گازهای دیگر است.",
            "key_concepts": [
              "هواکره",
              "ترکیب هوا",
              "تروپوسفر",
              "تقطیر جزء به جزء",
              "هوای مایع"
            ],
            "terminology": {
              "هواکره": "لایه گازی اطراف زمین",
              "تروپوسفر": "نزدیک‌ترین لایه هواکره به زمین",
              "تقطیر جزء به جزء": "روش جداسازی بر اساس تفاوت نقطه جوش"
            },
            "formulas": null,
            "laws": null,
            "principles": null,
            "processes": [
              "خنک کردن هوا → جداسازی رطوبت (یخ) → جداسازی CO2 جامد → خنک‌سازی تا -200°C (هوای مایع) → تقطیر جزء به جزء → جداسازی گازها بر اساس نقطه جوش"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مفاهیم فیزیکی (نقطه جوش، مایع شدن گازها)"
            ],
            "next_topics": [
              "t2_3",
              "t2_4"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "اهمیت منابع گازی"
            ]
          },
          "relationships": {
            "related_topics": [
              "جدول تناوبی (گازهای نجیب)"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P10D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 5,
            "reasoning_load": 3,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "ترکیب درصدی گازهای هوا",
              "روش تقطیر جزء به جزء",
              "کاربرد هلیم"
            ],
            "hidden_points": [
              "کاربردهای صنعتی گازهای تفکیک شده"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "ترکیب و جداسازی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل فرایند جداسازی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در درصد گازهای هوا",
              "عدم درک روش جداسازی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "فرایند تقطیر جزء به جزء"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "اطلاعات پایه‌ای و حافظه‌ای.",
            "study_strategy": "حفظ درصد گازها و مراحل جداسازی",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "هوا: 78% N2، 21% O2، 1% Ar",
            "mnemonic_devices": "NiOAr (برای یادآوری گازهای اصلی)",
            "visual_imagination_tips": "هواکره را به یک کیک لایه‌ای تشبیه کنید که هر لایه گاز متفاوتی دارد."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۱",
              "شکل ۴"
            ],
            "important_examples": [
              "تقطیر جزء به جزء هوای مایع"
            ],
            "real_life_examples": [
              "کاربرد نیتروژن در بسته‌بندی مواد غذایی",
              "کاربرد هلیم در بالن‌ها"
            ]
          }
        },
        {
          "id": "t2_2",
          "title": "واکنش اکسیژن با عنصرها و اکسیدها",
          "core_knowledge": {
            "explanation": "اکسیژن با بسیاری از عناصر (فلزات و نافلزات) واکنش داده و اکسید تولید می‌کند. اکسیدهای فلزی معمولاً بازی و اکسیدهای نافلزی معمولاً اسیدی هستند. نام‌گذاری اکسیدها به بار کاتیون یا پیشوندهای شمارشی بستگی دارد.",
            "complete_definition": "اکسید ترکیبی دوتایی از اکسیژن با عنصر دیگر است. اکسیدهای فلزی (مانند CaO) و اکسیدهای نافلزی (مانند CO2) دو دسته اصلی آن هستند.",
            "key_concepts": [
              "اکسید",
              "اکسید فلزی",
              "اکسید نافلزی",
              "اکسید بازی",
              "اکسید اسیدی",
              "نام‌گذاری اکسیدها"
            ],
            "terminology": {
              "اکسید": "ترکیب اکسیژن با یک عنصر دیگر",
              "اکسید بازی": "اکسیدی که با آب واکنش داده و باز تولید می‌کند (اکسید فلزی).",
              "اکسید اسیدی": "اکسیدی که با آب واکنش داده و اسید تولید می‌کند (اکسید نافلزی)."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "فلزات با اکسیژن، اکسید فلزی (بازی) می‌دهند.",
              "نافلزات با اکسیژن، اکسید نافلزی (اسیدی) می‌دهند."
            ],
            "processes": [
              "واکنش فلز + O2 → اکسید فلزی",
              "واکنش نافلز + O2 → اکسید نافلزی"
            ],
            "mechanisms": null,
            "reaction_types": [
              "اکسایش",
              "سوختن"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ترکیب یونی",
              "نام‌گذاری ترکیب‌ها"
            ],
            "next_topics": [
              "t2_3"
            ],
            "concept_dependencies": [
              "نیاز به نام‌گذاری ترکیب‌های یونی و کووالانسی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "واکنش‌های سوختن",
              "خواص اسیدی و بازی"
            ]
          },
          "relationships": {
            "related_topics": [
              "ترکیب‌های یونی و کووالانسی",
              "pH",
              "اسید و باز"
            ],
            "similar_concepts": [
              "پراکسیدها"
            ],
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 4,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص اکسید فلزی و نافلزی",
              "نام‌گذاری اکسیدها",
              "خواص اسیدی و بازی اکسیدها"
            ],
            "hidden_points": [
              "نام‌گذاری اکسیدهای فلزات با بار متغیر"
            ],
            "trick_points": [
              "تشخیص نوع اکسید از روی فرمول"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "نام‌گذاری"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نام‌گذاری اکسیدها (پیشوندها یا بار)",
              "عدم تشخیص اکسید بازی از اسیدی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "نام‌گذاری اکسیدها با پیشوندهای شمارشی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مروری بر نام‌گذاری و ویژگی‌ها.",
            "study_strategy": "تمرین نام‌گذاری انواع اکسیدها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_3"
          },
          "memory_support": {
            "memory_tips": "اکسید فلزی = بازی، اکسید نافلزی = اسیدی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "فلزها را دوست و نافلزها را دشمن اکسیژن تصور کنید (فقط برای یادآوری تفاوت رفتار)."
          },
          "examples": {
            "textbook_examples": [
              "جدول نام‌گذاری اکسیدهای فلزی",
              "نام‌گذاری N2O4"
            ],
            "important_examples": [
              "FeO و Fe2O3",
              "Cu2O و CuO",
              "CO2 و SO2"
            ],
            "real_life_examples": [
              "زنگ زدن آهن (اکسید آهن)",
              "آهک (اکسید کلسیم)"
            ]
          }
        },
        {
          "id": "t2_3",
          "title": "سوختن کامل و ناقص و معادله شیمیایی",
          "core_knowledge": {
            "explanation": "سوختن واکنش سریع یک ماده با اکسیژن است که با تولید گرما و نور همراه است. در سوختن کامل (اکسیژن کافی)، محصولات CO2 و H2O هستند. در سوختن ناقص (اکسیژن کم)، محصولات CO، دوده (C) و H2O تولید می‌شوند. معادلات شیمیایی باید موازنه شوند تا قانون پایستگی جرم رعایت شود.",
            "complete_definition": "سوختن یک واکنش شیمیایی گرمازا و سریع بین یک ماده و اکسیژن است. در سوختن کامل، کربن به CO2 و هیدروژن به H2O تبدیل می‌شود. در سوختن ناقص، محصولات شامل CO و کربن (دوده) نیز هستند.",
            "key_concepts": [
              "سوختن",
              "سوختن کامل",
              "سوختن ناقص",
              "واکنش‌دهنده",
              "فراورده",
              "معادله شیمیایی",
              "موازنه",
              "قانون پایستگی جرم",
              "ضریب استوکیومتری"
            ],
            "terminology": {
              "سوختن کامل": "احتراق در حضور اکسیژن کافی که محصولات آن CO2 و H2O است.",
              "سوختن ناقص": "احتراق در حضور اکسیژن ناکافی که محصولات آن CO و دوده است.",
              "معادله شیمیایی": "نمایش واکنش شیمیایی با استفاده از نمادها و فرمول‌ها.",
              "موازنه کردن": "قرار دادن ضرایب مناسب برای برابری تعداد اتم‌ها در دو طرف معادله."
            },
            "formulas": {
              "سوختن کامل متان": "CH4 + 2O2 → CO2 + 2H2O",
              "سوختن ناقص متان": "2CH4 + 3O2 → 2CO + 4H2O"
            },
            "laws": [
              "قانون پایستگی جرم"
            ],
            "principles": [
              "در واکنش شیمیایی، اتم‌ها نه ایجاد می‌شوند و نه از بین می‌روند (فقط بازآرایی می‌شوند).",
              "جرم کل واکنش‌دهنده‌ها برابر با جرم کل فراورده‌هاست."
            ],
            "processes": [
              "نوشتن معادله نمادی",
              "موازنه کردن معادله با روش وارسی"
            ],
            "mechanisms": null,
            "reaction_types": [
              "سوختن (احتراق)",
              "اکسایش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ترکیب یونی و مولکولی",
              "نوشتن فرمول شیمیایی"
            ],
            "next_topics": [
              "t2_4",
              "t2_5"
            ],
            "concept_dependencies": [
              "نیاز به توانایی نوشتن فرمول شیمیایی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "استوکیومتری"
            ]
          },
          "relationships": {
            "related_topics": [
              "استوکیومتری",
              "انرژی شیمیایی"
            ],
            "similar_concepts": [
              "اکسایش (واکنش آرام با اکسیژن)"
            ],
            "differences": [
              "سوختن سریع و همراه با شعله، اکسایش آرام بدون شعله."
            ],
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT4H",
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
              "تمایز سوختن کامل و ناقص",
              "نوشتن معادله موازنه شده",
              "محاسبه ضرایب استوکیومتری",
              "تشخیص محصولات واکنش"
            ],
            "hidden_points": [
              "تشخیص سوختن ناقص از روی شعله زرد"
            ],
            "trick_points": [
              "موازنه معادلات پیچیده"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "تشخیص نوع سوختن",
              "تعیین محصولات"
            ],
            "calculation_question_types": [
              "موازنه کردن معادلات"
            ],
            "analytical_question_types": [
              "تحلیل شرایط واکنش و محصولات"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تعیین محصولات سوختن ناقص",
              "عدم موازنه صحیح معادلات (فراموش کردن ضریب‌ها)",
              "تغییر زیروندها به جای ضریب‌ها"
            ],
            "misconceptions": [
              "سوختن همیشه کامل است."
            ],
            "difficult_parts": [
              "موازنه معادلات با ضریب کسری",
              "تشخیص سوختن ناقص از کامل"
            ],
            "warning_points": [
              "در موازنه، زیروندها را تغییر ندهید، فقط ضریب اضافه کنید.",
              "شرط واکنش (کافی بودن اکسیژن) در تعیین محصولات مهم است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کلید درک و انجام محاسبات استوکیومتری.",
            "study_strategy": "تمرین زیاد موازنه معادلات، از ساده به پیچیده",
            "review_strategy": "مرور روزانه و حل معادلات جدید",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "برای موازنه: ابتدا عنصری را که فقط در یک ترکیب در هر طرف وجود دارد موازنه کنید.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "معادله شیمیایی مانند یک ترازو است که باید دو طرف آن متعادل باشد."
          },
          "examples": {
            "textbook_examples": [
              "سوختن کربن (C + O2 → CO2)",
              "سوختن پروپان (شکل ۱۶)",
              "سوختن ناقص متان"
            ],
            "important_examples": [
              "سوختن کامل و ناقص متان",
              "واکنش هیدروژن با اکسیژن"
            ],
            "real_life_examples": [
              "سوختن زغال سنگ",
              "موتور خودرو",
              "وسایل گرمایشی (گاز گرفتگی)"
            ]
          }
        },
        {
          "id": "t2_4",
          "title": "استوکیومتری (محاسبات شیمیایی بر اساس واکنش)",
          "core_knowledge": {
            "explanation": "استوکیومتری به محاسبات کمی در واکنش‌های شیمیایی می‌پردازد. از ضرایب موازنه شده معادله برای یافتن نسبت مولی واکنش‌دهنده‌ها و فراورده‌ها استفاده می‌شود. این روابط امکان محاسبه جرم، حجم (در STP) و تعداد ذرات مواد شرکت‌کننده در واکنش را فراهم می‌کند.",
            "complete_definition": "استوکیومتری شاخه‌ای از شیمی است که به مطالعه روابط کمی بین واکنش‌دهنده‌ها و فراورده‌ها در یک واکنش شیمیایی می‌پردازد. این محاسبات بر اساس قانون پایستگی جرم و ضرایب استوکیومتری معادله موازنه شده انجام می‌شوند.",
            "key_concepts": [
              "استوکیومتری",
              "نسبت مولی",
              "واکنش‌دهنده محدودکننده",
              "بازده درصدی",
              "عامل تبدیل"
            ],
            "terminology": {
              "استوکیومتری": "محاسبات کمی در واکنش‌های شیمیایی",
              "نسبت مولی": "نسبت تعداد مول‌های دو ماده در یک معادله موازنه شده",
              "شرایط STP": "دمای 0°C و فشار 1 atm که در آن حجم یک مول گاز 22.4 لیتر است."
            },
            "formulas": {
              "n = m/M": null,
              "n = V/22.4 (در STP)": null,
              "نسبت مولی": "از ضرایب معادله موازنه شده به دست می‌آید."
            },
            "laws": [
              "قانون پایستگی جرم",
              "قانون آووگادرو"
            ],
            "principles": [
              "نسبت مولی مواد شرکت‌کننده در واکنش، از ضرایب معادله موازنه شده به دست می‌آید."
            ],
            "processes": [
              "نوشتن معادله موازنه شده",
              "تبدیل جرم یا حجم مواد به مول",
              "استفاده از نسبت مولی برای یافتن مول ماده مجهول",
              "تبدیل مول به جرم یا حجم مورد نظر"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مول و عدد آووگادرو",
              "موازنه کردن معادلات",
              "قانون پایستگی جرم",
              "حجم مولی گازها"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به تسلط کامل بر مفاهیم مول و موازنه"
            ],
            "required_background": null,
            "builds_upon": [
              "مول",
              "موازنه"
            ],
            "enables_learning_of": [
              "محاسبات صنعتی",
              "آنالیز شیمیایی"
            ]
          },
          "relationships": {
            "related_topics": [
              "مول",
              "غلظت مولی",
              "حجم گازها"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT5H",
            "review_interval": "P2D",
            "forgetting_risk": 9,
            "difficulty_score": 9,
            "importance_score": 10,
            "reasoning_load": 9,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 95,
            "exam_points": [
              "محاسبه جرم یا حجم فراورده از جرم واکنش‌دهنده",
              "محاسبه جرم واکنش‌دهنده مورد نیاز",
              "کاربرد حجم مولی در STP",
              "محاسبه تعداد مول‌ها"
            ],
            "hidden_points": [
              "تشخیص واکنش‌دهنده محدودکننده (اگر داده شده باشد)"
            ],
            "trick_points": [
              "مسائل چندمرحله‌ای که نیاز به چندین تبدیل دارند."
            ],
            "common_question_patterns": [
              "مسئله",
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [],
            "calculation_question_types": [
              "محاسبات استوکیومتری",
              "تبدیل‌های جرم، مول و حجم"
            ],
            "analytical_question_types": [
              "تحلیل داده‌های استوکیومتری"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "استفاده از نسبت مولی اشتباه",
              "فراموش کردن موازنه معادله قبل از شروع محاسبات",
              "اشتباه در تبدیل یکاها (گرم به مول، لیتر به مول در STP)",
              "عدم درک مفهوم عامل تبدیل"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "طراحی مسیر حل مسئله",
              "تشخیص نسبت مولی صحیح",
              "مسائل با چند مرحله"
            ],
            "warning_points": [
              "حتماً معادله را ابتدا موازنه کنید.",
              "یکاها را در طول محاسبات بررسی کنید.",
              "برای گازها در STP از 22.4 L/mol استفاده کنید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین مبحث برای حل مسائل شیمی.",
            "study_strategy": "حل مسائل متنوع با سطوح دشواری مختلف، تمرکز بر درک مفهوم نسبت مولی و عامل‌های تبدیل",
            "review_strategy": "مرور روزانه و حل حداقل ۳ مسئله جدید",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "همیشه به یاد داشته باشید: مسیر حل = موازنه → تبدیل به مول → نسبت مولی → تبدیل به کمیت مورد نظر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "استوکیومتری مانند یک دستور پخت است که مواد اولیه (واکنش‌دهنده‌ها) و محصول نهایی (فراورده) با نسبت مشخصی با هم مخلوط می‌شوند."
          },
          "examples": {
            "textbook_examples": [
              "مثال تبدیل SO2 به SO3",
              "مثال مصرف گلوکز",
              "مثال تولید فسفر تری کلرید"
            ],
            "important_examples": [
              "محاسبه اکسیژن مورد نیاز برای مصرف گلوکز",
              "محاسبه آب تولید شده از اکسایش چربی"
            ],
            "real_life_examples": [
              "تولید صنعتی آمونیاک",
              "تولید دارو (آسپرین)"
            ]
          }
        },
        {
          "id": "t2_5",
          "title": "تولید آمونیاک به روش هابر",
          "core_knowledge": {
            "explanation": "آمونیاک از واکنش گاز نیتروژن و هیدروژن در شرایط دما و فشار بالا و با استفاده از کاتالیزگر آهن تولید می‌شود. این واکنش برگشت‌پذیر است و همه واکنش‌دهنده‌ها به فراورده تبدیل نمی‌شوند. برای جداسازی آمونیاک از اختلاف نقطه جوش استفاده می‌شود.",
            "complete_definition": "فرایند هابر، روشی صنعتی برای تولید آمونیاک از عناصر نیتروژن و هیدروژن در دما و فشار بالا و در حضور کاتالیزگر است. این واکنش برگشت‌پذیر است: N2(g) + 3H2(g) ⇌ 2NH3(g)",
            "key_concepts": [
              "آمونیاک",
              "کاتالیزگر",
              "واکنش برگشت‌پذیر",
              "شرایط بهینه",
              "جداسازی"
            ],
            "terminology": {
              "فرایند هابر": "روش صنعتی تولید آمونیاک",
              "واکنش برگشت‌پذیر": "واکنشی که در هر دو جهت (رفت و برگشت) انجام می‌شود.",
              "کاتالیزگر": "ماده‌ای که سرعت واکنش را افزایش می‌دهد و خود مصرف نمی‌شود."
            },
            "formulas": {
              "معادله هابر": "N2(g) + 3H2(g) ⇌ 2NH3(g)"
            },
            "laws": null,
            "principles": [
              "واکنش هابر در شرایط عادی انجام نمی‌شود و نیاز به دما و فشار بالا دارد.",
              "این واکنش برگشت‌پذیر است و بازده کامل ندارد.",
              "آمونیاک را می‌توان بر اساس اختلاف نقطه جوش از مخلوط واکنش جدا کرد."
            ],
            "processes": [
              "مخلوط N2 و H2 → عبور از روی کاتالیزگر در دما و فشار بالا → تشکیل آمونیاک → خنک‌سازی و جداسازی آمونیاک (مایع) از گازهای واکنش‌نشده"
            ],
            "mechanisms": null,
            "reaction_types": [
              "ترکیب مستقیم",
              "برگشت‌پذیر"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "معادله شیمیایی",
              "موازنه",
              "نقطه جوش"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک واکنش برگشت‌پذیر"
            ],
            "required_background": null,
            "builds_upon": [
              "واکنش‌های شیمیایی"
            ],
            "enables_learning_of": [
              "تعادل شیمیایی (پایه یازدهم)"
            ]
          },
          "relationships": {
            "related_topics": [
              "تعادل شیمیایی",
              "کاتالیزگر"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": null
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 6,
            "importance_score": 7,
            "reasoning_load": 6,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 40,
            "exam_points": [
              "شرایط واکنش هابر",
              "نقش کاتالیزگر",
              "جداسازی آمونیاک",
              "معادله واکنش"
            ],
            "hidden_points": [
              "برگشت‌پذیری و بازده واکنش"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تحلیل فرایند صنعتی"
            ],
            "calculation_question_types": [
              "محاسبه استوکیومتری واکنش هابر (تمرین‌ها)"
            ],
            "analytical_question_types": [
              "توجیه شرایط واکنش"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن برگشت‌پذیری واکنش",
              "نشناختن شرایط واکنش"
            ],
            "misconceptions": [
              "همه واکنش‌دهنده‌ها به فراورده تبدیل می‌شوند."
            ],
            "difficult_parts": [
              "درک برگشت‌پذیری و جداسازی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "یک مثال صنعتی مهم از کاربرد واکنش‌های شیمیایی.",
            "study_strategy": "مطالعه فرایند به صورت گام‌به‌گام",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_1"
          },
          "memory_support": {
            "memory_tips": "هابر: دما و فشار بالا + کاتالیزگر آهن",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک کارخانه بزرگ را تصور کنید که نیتروژن و هیدروژن را دریافت کرده و آمونیاک تولید می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "نمودار ۲"
            ],
            "important_examples": [
              "تولید آمونیاک در صنعت"
            ],
            "real_life_examples": [
              "تولید کودهای شیمیایی نیتروژن‌دار"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "آب، آهنگ زندگی",
      "chapter_objectives": [
        "بررسی ترکیب آب دریا و آب آشامیدنی",
        "آشنایی با یون‌های چنداتمی و نام‌گذاری آنها",
        "درک مفاهیم غلظت (ppm، درصد جرمی، مولاریته)",
        "بررسی انحلال‌پذیری مواد و عوامل مؤثر بر آن",
        "بررسی ساختار مولکول آب و نیروهای بین مولکولی (پیوند هیدروژنی)",
        "درک فرایند انحلال (مولکولی و یونی)",
        "آشنایی با مفاهیم اسمز و ردپای آب"
      ],
      "overall_difficulty": 7,
      "overall_importance": 9,
      "topics": [
        {
          "id": "t3_1",
          "title": "محلول‌ها و روش‌های بیان غلظت (ppm و درصد جرمی)",
          "core_knowledge": {
            "explanation": "محلول مخلوطی همگن از حل‌شونده و حالل است. غلظت نشان‌دهنده مقدار حل‌شونده در مقدار معینی از محلول است. قسمت در میلیون (ppm) برای غلظت‌های بسیار کم و درصد جرمی (W/W%) برای غلظت‌های معمولی به کار می‌رود.",
            "complete_definition": "غلظت، کمیتی است که بیان‌کننده مقدار حل‌شونده در یک مقدار معین از محلول یا حالل است. واحدهای رایج آن شامل درصد جرمی (گرم حل‌شونده در 100 گرم محلول) و ppm (میلی‌گرم حل‌شونده در یک کیلوگرم محلول یا معادل آن) است.",
            "key_concepts": [
              "محلول",
              "حالل",
              "حل‌شونده",
              "غلظت",
              "درصد جرمی",
              "قسمت در میلیون (ppm)"
            ],
            "terminology": {
              "محلول": "مخلوطی همگن از دو یا چند ماده",
              "حالل": "جزئی که حل‌شونده را در خود حل می‌کند (مقدار آن بیشتر است).",
              "حل‌شونده": "جزئی که در حالل حل می‌شود.",
              "درصد جرمی (W/W%)": "جرم حل‌شونده بر حسب گرم در 100 گرم محلول",
              "ppm": "قسمت در میلیون، معادل میلی‌گرم حل‌شونده در یک کیلوگرم محلول"
            },
            "formulas": {
              "%W/W": "(جرم حل‌شونده / جرم محلول) × 100",
              "ppm": "(جرم حل‌شونده / جرم محلول) × 10^6"
            },
            "laws": null,
            "principles": null,
            "processes": [
              "محاسبه غلظت از روی جرم حل‌شونده و محلول"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مول"
            ],
            "next_topics": [
              "t3_2",
              "t3_3"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "محاسبات محلول‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "غلظت مولی"
            ],
            "similar_concepts": [
              "ppb (قسمت در میلیارد)"
            ],
            "differences": [
              "درصد جرمی بر مبنای 100، ppm بر مبنای 10^6 است."
            ],
            "frequently_confused_with": [
              "درصد حجمی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 4,
            "importance_score": 6,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 50,
            "exam_points": [
              "تعریف ppm و درصد جرمی",
              "محاسبه ppm و درصد جرمی از روی داده‌ها"
            ],
            "hidden_points": [
              "تشخیص محلول سیرشده"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [
              "محاسبه غلظت از روی جرم"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در فرمول ppm (فراموش کردن 10^6)",
              "تشخیص ندادن جرم محلول از جرم حالل",
              "جابه‌جایی صورت و مخرج کسر"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص جرم محلول (جرم حل‌شونده + جرم حالل)"
            ],
            "warning_points": [
              "در محاسبات، یکاهای جرم باید یکسان باشند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای محاسبات غلظت.",
            "study_strategy": "تمرین تبدیل جرم حل‌شونده و محلول به درصد و ppm",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "ppm = میلی‌گرم بر کیلوگرم",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک قطره جوهر در یک وان حمام بزرگ را تصور کنید (ppm)."
          },
          "examples": {
            "textbook_examples": [
              "مثال محاسبه ppm یون فلوئورید",
              "محاسبه درصد جرمی در محلول شست‌وشو"
            ],
            "important_examples": [
              "غلظت یون فلوئورید در آب آشامیدنی (0.7-1.2 ppm)"
            ],
            "real_life_examples": [
              "آب آشامیدنی (غلظت یون‌ها)",
              "آلودگی هوا (ppm CO2)"
            ]
          }
        },
        {
          "id": "t3_2",
          "title": "انحلال‌پذیری و عوامل مؤثر بر آن",
          "core_knowledge": {
            "explanation": "انحلال‌پذیری، بیشترین مقدار حل‌شونده‌ای است که در دمای معین در 100 گرم حالل حل می‌شود و محلول سیرشده ایجاد می‌کند. انحلال‌پذیری جامدها معمولاً با افزایش دما زیاد می‌شود. برای گازها، با افزایش دما، انحلال‌پذیری کاهش و با افزایش فشار، افزایش می‌یابد (قانون هنری).",
            "complete_definition": "انحلال‌پذیری یک ماده در یک حالل معین، حداکثر مقدار آن ماده است که در دمای مشخص، در مقدار معینی از حالل حل می‌شود و به حالت تعادل (محلول سیرشده) می‌رسد.",
            "key_concepts": [
              "انحلال‌پذیری",
              "محلول سیرشده",
              "محلول سیرنشده",
              "دمای انحلال",
              "قانون هنری"
            ],
            "terminology": {
              "انحلال‌پذیری": "حداکثر جرم حل‌شونده در 100 گرم حالل در دمای معین",
              "محلول سیرشده": "محلولی که بیش از این نمی‌تواند حل‌شونده را در خود حل کند.",
              "قانون هنری": "انحلال‌پذیری گازها در یک مایع، با فشار جزئی آن گاز روی مایع رابطه مستقیم دارد."
            },
            "formulas": null,
            "laws": [
              "قانون هنری"
            ],
            "principles": [
              "انحلال‌پذیری جامدها در آب معمولاً با افزایش دما زیاد می‌شود.",
              "انحلال‌پذیری گازها در آب با افزایش دما کاهش و با افزایش فشار زیاد می‌شود."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "محلول"
            ],
            "next_topics": [
              "t3_3"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "رسوب‌گذاری",
              "خالص‌سازی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انحلال‌پذیری گازها"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": [
              "سرعت انحلال"
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
              "تعریف انحلال‌پذیری",
              "تشخیص محلول سیرشده",
              "تأثیر دما و فشار بر انحلال‌پذیری",
              "قانون هنری"
            ],
            "hidden_points": [
              "تأثیر نوع حل‌شونده و حالل بر انحلال‌پذیری"
            ],
            "trick_points": [
              "سوالات تحلیلی از روی نمودار انحلال‌پذیری"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی (نمودار)"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تحلیل نمودار"
            ],
            "calculation_question_types": [
              "محاسبه جرم حل‌شونده در دمای معین"
            ],
            "analytical_question_types": [
              "پیش‌بینی تغییرات انحلال‌پذیری با دما و فشار"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "عدم تشخیص رابطه دما با انحلال‌پذیری جامدات و گازها",
              "ناتوانی در تحلیل نمودار انحلال‌پذیری"
            ],
            "misconceptions": [
              "انحلال‌پذیری همه مواد با دما زیاد می‌شود."
            ],
            "difficult_parts": [
              "تحلیل نمودار انحلال‌پذیری",
              "تشخیص نقاط سیرشده"
            ],
            "warning_points": [
              "تأثیر دما بر انحلال‌پذیری گازها (معکوس)"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهومی مهم در شیمی محیط‌زیست و حل‌ها.",
            "study_strategy": "مطالعه نمودارها و تمرین تحلیل آنها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t3_3"
          },
          "memory_support": {
            "memory_tips": "گازها با گرما فرار می‌شوند (انحلال‌پذیری کم می‌شود).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک نوشابه گازدار را در نظر بگیرید (فشار بالا، گاز حل شده) و پس از باز کردن درب (فشار کم)، حباب‌های گاز خارج می‌شوند."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۱",
              "نمودار ۲"
            ],
            "important_examples": [
              "انحلال‌پذیری سدیم نیترات و پتاسیم کلرید"
            ],
            "real_life_examples": [
              "تشکیل سنگ کلیه",
              "جوشیدن آب و خارج شدن گازها",
              "نوشابه گازدار"
            ]
          }
        },
        {
          "id": "t3_3",
          "title": "غلظت مولی (مولاریته) و محاسبات آن",
          "core_knowledge": {
            "explanation": "مولاریته (غلظت مولی) تعداد مول حل‌شونده را در یک لیتر محلول نشان می‌دهد. این روش بیان غلظت، برای محاسبات استوکیومتری در محلول‌ها بسیار مفید است. فرمول آن M = n/V است که در آن n تعداد مول حل‌شونده و V حجم محلول بر حسب لیتر است.",
            "complete_definition": "مولاریته (غلظت مولی) یک محلول، تعداد مول‌های حل‌شونده را در یک لیتر از محلول نشان می‌دهد. یکای آن mol/L (یا Molar) است.",
            "key_concepts": [
              "مولاریته",
              "حجم محلول",
              "تعداد مول",
              "رقیق‌سازی"
            ],
            "terminology": {
              "مولاریته (M)": "تعداد مول حل‌شونده در یک لیتر محلول",
              "رقیق‌سازی": "افزودن حالل به یک محلول غلیظ برای کاهش غلظت آن"
            },
            "formulas": {
              "M = n/V": null,
              "n = M × V": null,
              "V = n/M": null
            },
            "laws": null,
            "principles": [
              "در رقیق‌سازی، تعداد مول‌های حل‌شونده ثابت می‌ماند (M1V1 = M2V2)."
            ],
            "processes": [
              "محاسبه مول حل‌شونده از روی غلظت و حجم",
              "تهیه محلول با غلظت معین"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مول"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک مفهوم مول"
            ],
            "required_background": null,
            "builds_upon": [
              "مول",
              "محلول"
            ],
            "enables_learning_of": [
              "استوکیومتری در محلول‌ها",
              "تیتراسیون"
            ]
          },
          "relationships": {
            "related_topics": [
              "استوکیومتری",
              "رقیق‌سازی"
            ],
            "similar_concepts": [
              "نرمالیته (برای واکنش‌های اسید-باز)"
            ],
            "differences": null,
            "frequently_confused_with": [
              "درصد جرمی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
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
              "تعریف مولاریته",
              "محاسبه مولاریته از جرم و حجم",
              "محاسبه جرم حل‌شونده از مولاریته و حجم",
              "محاسبات رقیق‌سازی"
            ],
            "hidden_points": [
              "رابطه مولاریته و درصد جرمی (با دانستن چگالی)"
            ],
            "trick_points": [
              "سوالات ترکیبی با استوکیومتری"
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
              "محاسبه غلظت مولی",
              "محاسبه جرم حل‌شونده مورد نیاز",
              "رقیق‌سازی"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تبدیل حجم (mL به L)",
              "استفاده از جرم حل‌شونده به جای مول",
              "فراموش کردن یکاها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص تفاوت محلول و حالل",
              "محاسبات رقیق‌سازی"
            ],
            "warning_points": [
              "حجم را بر حسب لیتر در فرمول قرار دهید.",
              "تعداد مول‌ها را از جرم و جرم مولی محاسبه کنید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم کلیدی برای محاسبات شیمیایی در محلول.",
            "study_strategy": "تمرین تبدیل جرم به مول و سپس محاسبه مولاریته، تمرین مسائل رقیق‌سازی",
            "review_strategy": "مرور هر 5 روز یکبار با حل مسائل متنوع",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "M = mol/L",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک لیتر محلول را تصویر کنید که تعداد مشخصی مول (ذرات) حل‌شونده در آن وجود دارد."
          },
          "examples": {
            "textbook_examples": [
              "مثال تهیه 250 mL محلول پتاسیم یدید 0.2 مولار"
            ],
            "important_examples": [
              "محاسبه مولاریته گلوکز در خون (گلوکومتر)"
            ],
            "real_life_examples": [
              "محلول‌های پزشکی (سرم)",
              "محلول‌های شوینده"
            ]
          }
        },
        {
          "id": "t3_4",
          "title": "ساختار مولکول آب، پیوند هیدروژنی و نیروهای بین مولکولی",
          "core_knowledge": {
            "explanation": "مولکول آب قطبی و خمیده است. بین مولکول‌های آب، پیوند هیدروژنی قوی برقرار است که باعث خواص غیرعادی آن (نقطه جوش بالا، چگالی یخ کمتر از آب) می‌شود. پیوند هیدروژنی نوعی نیروی بین مولکولی است که زمانی رخ می‌دهد که هیدروژن به اتم‌های بسیار الکترونگاتیو مانند O، N یا F متصل باشد.",
            "complete_definition": "پیوند هیدروژنی، نوعی نیروی جاذبه بین مولکولی قوی است که بین یک اتم هیدروژن که به یک اتم بسیار الکترونگاتیو (مانند اکسیژن، نیتروژن یا فلوئور) متصل است و یک اتم بسیار الکترونگاتیو دیگر در یک مولکول مجاور برقرار می‌شود.",
            "key_concepts": [
              "قطبیت",
              "مولکول قطبی",
              "مولکول ناقطبی",
              "نیروهای بین مولکولی",
              "پیوند هیدروژنی",
              "نیروهای وان دروالس",
              "گشتاور دوقطبی"
            ],
            "terminology": {
              "پیوند هیدروژنی": "نیروی جاذبه قوی بین مولکولی بین H و اتم بسیار الکترونگاتیو (O, N, F)",
              "نیروهای وان دروالس": "نیروهای جاذبه بین مولکولی ضعیف‌تر",
              "گشتاور دوقطبی": "معیاری برای میزان قطبی بودن یک مولکول"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "مولکول‌های قطبی در میدان الکتریکی جهت‌گیری می‌کنند.",
              "پیوند هیدروژنی قوی‌ترین نیروی بین مولکولی است.",
              "خواص غیرعادی آب به دلیل پیوند هیدروژنی است."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار لوویس",
              "ترکیب کووالانسی"
            ],
            "next_topics": [
              "t3_5"
            ],
            "concept_dependencies": [
              "نیاز به درک قطبیت پیوند و مولکول"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "انحلال مواد در آب",
              "اسمز"
            ]
          },
          "relationships": {
            "related_topics": [
              "ترکیب‌های کووالانسی",
              "خواص فیزیکی مواد"
            ],
            "similar_concepts": [
              "نیروهای یونی"
            ],
            "differences": [
              "پیوند هیدروژنی بین مولکولی است، پیوند کووالانسی درون مولکولی است.",
              "نیروهای یونی قوی‌تر از پیوند هیدروژنی هستند."
            ],
            "frequently_confused_with": [
              "پیوند کووالانسی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "تشخیص پیوند هیدروژنی در یک ترکیب",
              "تأثیر پیوند هیدروژنی بر خواص (نقطه جوش)",
              "تشخیص مولکول قطبی و ناقطبی",
              "مقایسه نیروهای بین مولکولی"
            ],
            "hidden_points": [
              "رابطه گشتاور دوقطبی و نقطه جوش"
            ],
            "trick_points": [
              "سوالات مقایسه‌ای (مثلاً H2O و H2S)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص نوع نیرو",
              "پیش‌بینی خواص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل علت خواص غیرعادی آب"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "تشخیص ندادن پیوند هیدروژنی",
              "اشتباه گرفتن پیوند هیدروژنی با پیوند درون مولکولی",
              "ناتوانی در توضیح نقطه جوش غیرعادی آب"
            ],
            "misconceptions": [
              "پیوند هیدروژنی یک پیوند شیمیایی قوی (مانند کووالانسی) است."
            ],
            "difficult_parts": [
              "تشخیص شرایط تشکیل پیوند هیدروژنی",
              "مقایسه قدرت نیروهای بین مولکولی"
            ],
            "warning_points": [
              "پیوند هیدروژنی بین مولکول‌هاست، نه درون یک مولکول."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کلید درک بسیاری از خواص فیزیکی و شیمیایی مواد.",
            "study_strategy": "مقایسه مولکول‌های قطبی و ناقطبی و تأثیر آن بر خواص",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t3_5"
          },
          "memory_support": {
            "memory_tips": "پیوند هیدروژنی: H با O, N, F",
            "mnemonic_devices": "HONF (برای یادآوری اتم‌هایی که پیوند هیدروژنی تشکیل می‌دهند)",
            "visual_imagination_tips": "مولکول‌های آب را مانند آهنرباهای کوچک در نظر بگیرید که به هم می‌چسبند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۵, ۱۶, ۱۷",
              "جدول ۲"
            ],
            "important_examples": [
              "مقایسه H2O و H2S",
              "مقایسه HF و HCl"
            ],
            "real_life_examples": [
              "دلیل شناور بودن یخ بر روی آب",
              "کشش سطحی آب"
            ]
          }
        },
        {
          "id": "t3_5",
          "title": "فرایند انحلال و مفهوم (شبیه، شبیه را حل می‌کند)",
          "core_knowledge": {
            "explanation": "مواد قطبی در حالل‌های قطبی حل می‌شوند و مواد ناقطبی در حالل‌های ناقطبی. این اصل، اساس انتخاب حالل برای حل کردن یک ماده است. انحلال می‌تواند مولکولی (ماهیت حل‌شونده حفظ می‌شود) یا یونی (یون‌ها جدا شده و آب‌پوشیده می‌شوند) باشد.",
            "complete_definition": "اصل 'شبیه، شبیه را حل می‌کند' بیان می‌دارد که مواد با قطبیّت مشابه، در یکدیگر حل می‌شوند. انحلال مولکولی، حالتی است که مولکول‌های حل‌شونده در محلول باقی می‌مانند. انحلال یونی، حالتی است که یون‌های حل‌شونده در آب جدا شده و با مولکول‌های آب احاطه می‌شوند (آب‌پوشیده).",
            "key_concepts": [
              "انحلال مولکولی",
              "انحلال یونی",
              "آب‌پوشیدگی",
              "حلالیت",
              "قطبیت",
              "اصل شبیه شبیه را حل می‌کند"
            ],
            "terminology": {
              "انحلال مولکولی": "حل شدن یک ماده مولکولی در یک حالل بدون تفکیک به یون",
              "انحلال یونی": "حل شدن یک ترکیب یونی در آب که با جدایی یون‌ها و آب‌پوشیدگی آن‌ها همراه است.",
              "آب‌پوشیدگی": "احاطه شدن یون‌ها توسط مولکول‌های قطبی آب"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "مواد قطبی در حالل‌های قطبی حل می‌شوند.",
              "مواد ناقطبی در حالل‌های ناقطبی حل می‌شوند.",
              "ترکیبات یونی در آب به دلیل قطبیت شدید آب، حل می‌شوند."
            ],
            "processes": [
              "انحلال مولکولی (اتانول در آب)",
              "انحلال یونی (NaCl در آب)"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "قطبیت مولکول‌ها",
              "نیروهای بین مولکولی"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک قطبیت"
            ],
            "required_background": null,
            "builds_upon": [
              "نیروهای بین مولکولی"
            ],
            "enables_learning_of": [
              "کاربردهای حالل‌ها",
              "جداسازی"
            ]
          },
          "relationships": {
            "related_topics": [
              "محلول‌ها",
              "شیمی آلی (حالل‌ها)"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": [
              "انحلال‌پذیری"
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
              "پیش‌بینی انحلال یک ماده در یک حالل خاص",
              "تشخیص انحلال مولکولی از یونی",
              "توضیح فرایند انحلال"
            ],
            "hidden_points": [
              "نقش نیروهای بین مولکولی در انحلال"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "پیش‌بینی",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل فرایند انحلال از دیدگاه نیروها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در پیش‌بینی انحلال (مثلاً نفت در آب)",
              "عدم درک فرایند آب‌پوشیدگی"
            ],
            "misconceptions": [
              "تمام مواد در آب حل می‌شوند."
            ],
            "difficult_parts": [
              "تشخیص نوع انحلال از روی ماهیت ماده",
              "توضیح آب‌پوشیدگی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "اصلی کاربردی برای درک رفتار مواد.",
            "study_strategy": "مقایسه انحلال مواد مختلف در حالل‌های مختلف",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "شبیه، شبیه را حل می‌کند (مثل گروه‌های خونی که به هم می‌چسبند).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مولکول‌های قطبی را آهنربا و مولکول‌های ناقطبی را پلاستیک تصور کنید."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲۲",
              "مثال حل شدن ید در هگزان",
              "حل نشدن هگزان در آب"
            ],
            "important_examples": [
              "انحلال NaCl در آب (یونی)",
              "انحلال اتانول در آب (مولکولی)"
            ],
            "real_life_examples": [
              "شستشوی چربی با آب (حل نمی‌شود)",
              "شستشوی چربی با تینر (حل می‌شود)"
            ]
          }
        }
      ]
    }
  ]
};

export default { CHEMISTRY_10_KB };
