/**
 * chemistry11.js  —  Kadoma knowledge base
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
export const CHEMISTRY_11_KB = {
  "textbook_metadata": {
    "title": "شیمی (۲) - یازدهم",
    "grade": "پایه یازدهم",
    "branch": "رشته علوم تجربی / ریاضی"
  },
  "knowledge_base": [
    {
      "chapter_number": 1,
      "chapter_title": "قدر هداياي زميني را بدانيم",
      "chapter_objectives": [
        "درک اهمیت مواد در زندگی و تمدن بشری",
        "بررسی روندهای تناوبی خواص عنصرها (خصلت فلزی، شعاع اتمی)",
        "آشنایی با فلزهای واسطه و آرایش الکترونی آنها",
        "بررسی واکنش‌پذیری فلزها و استخراج آنها",
        "محاسبات استوکیومتری با در نظر گرفتن خلوص و بازده درصدی",
        "آشنایی با نفت خام و هیدروکربن‌ها (آلکان‌ها و آلکن‌ها)",
        "مبانی نام‌گذاری آلکان‌ها و آلکن‌ها"
      ],
      "overall_difficulty": 7,
      "overall_importance": 9,
      "topics": [
        {
          "id": "c1t1",
          "title": "مواد و تمدن بشری",
          "core_knowledge": {
            "explanation": "مواد در زندگی انسان نقش اساسی دارند و تمدن بشری بر اساس توانایی در کشف، تولید و به کارگیری مواد مختلف توسعه یافته است. از مواد طبیعی مانند چوب و سنگ گرفته تا مواد ساختگی مانند پلاستیک و فلزات، هر کدام بر اساس خواص خود کاربردهای خاصی پیدا کرده‌اند.",
            "complete_definition": "مواد، اجزای فیزیکی سازنده جهان هستند که انسان از آن‌ها برای رفع نیازهای خود و ساخت ابزار و وسایل استفاده می‌کند. تاریخ تمدن بشری به سه دوره سنگی، برنزی و آهنی بر اساس مواد غالب آن دوره تقسیم بندی می‌شود.",
            "key_concepts": [
              "مواد طبیعی",
              "مواد ساختگی",
              "تمدن",
              "دوره سنگی",
              "دوره برنزی",
              "دوره آهنی"
            ],
            "terminology": {
              "مواد طبیعی": "موادی که به طور مستقیم از طبیعت به دست می‌آیند.",
              "مواد ساختگی": "موادی که توسط انسان از طریق واکنش‌های شیمیایی از مواد طبیعی ساخته می‌شوند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "توسعه تمدن بشری به توانایی در شناخت و استفاده از مواد گره خورده است.",
              "مواد می‌توانند طبیعی یا ساختگی باشند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مفاهیم اولیه ماده (شیمی دهم)"
            ],
            "next_topics": [
              "c1t2",
              "c1t3"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "اهمیت مواد در صنعت"
            ]
          },
          "relationships": {
            "related_topics": [
              "استخراج فلزات",
              "پلیمرها"
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
              "شناخت مواد طبیعی و ساختگی",
              "دوره‌های تمدن"
            ],
            "hidden_points": null,
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "صحیح و غلط"
            ],
            "conceptual_question_types": [],
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
            "advisor_recommendation": "مقدمه‌ای ساده برای آشنایی با اهمیت مواد.",
            "study_strategy": "مطالعه سطحی",
            "review_strategy": "مرور به ندرت",
            "minimum_mastery_required": 70,
            "mastery_threshold": 80,
            "recommended_next_topic": "c1t2"
          },
          "memory_support": {
            "memory_tips": "سه دوره مهم تمدن: سنگی، برنزی، آهنی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": null
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱",
              "تصویر دوچرخه و مواد سازنده آن"
            ],
            "important_examples": [],
            "real_life_examples": [
              "مواد مصرفی روزانه"
            ]
          }
        },
        {
          "id": "c1t2",
          "title": "روندهای تناوبی خواص عنصرها (خصلت فلزی و شعاع اتمی)",
          "core_knowledge": {
            "explanation": "خصلت فلزی عنصرها در یک دوره از چپ به راست کاهش و در یک گروه از بالا به پایین افزایش می‌یابد. شعاع اتمی نیز در یک دوره از چپ به راست کاهش و در یک گروه از بالا به پایین افزایش می‌یابد. این روندها به ساختار الکترونی اتم‌ها مربوط می‌شوند.",
            "complete_definition": "روندهای تناوبی، الگوهای قابل پیش‌بینی در تغییر خواص فیزیکی و شیمیایی عنصرها بر اساس جایگاه آنها در جدول تناوبی است. خصلت فلزی، توانایی یک اتم برای از دست دادن الکترون و شعاع اتمی، اندازه اتم را نشان می‌دهد.",
            "key_concepts": [
              "خصلت فلزی",
              "شعاع اتمی",
              "روند تناوبی",
              "گروه",
              "دوره",
              "الکترون‌های ظرفیت"
            ],
            "terminology": {
              "خصلت فلزی": "تمایل یک اتم برای از دست دادن الکترون و تشکیل کاتیون.",
              "شعاع اتمی": "نصف فاصله بین هسته دو اتم همسایه در یک جامد.",
              "روند تناوبی": "تغییرات منظم و دوره‌ای در خواص عنصرها در جدول تناوبی."
            },
            "formulas": null,
            "laws": [
              "قانون تناوبی عنصرها"
            ],
            "principles": [
              "در یک دوره، با افزایش عدد اتمی، خصلت فلزی کاهش و خصلت نافلزی افزایش می‌یابد.",
              "در یک گروه، با افزایش عدد اتمی، خصلت فلزی افزایش می‌یابد.",
              "شعاع اتمی در یک دوره از چپ به راست کاهش و در یک گروه از بالا به پایین افزایش می‌یابد."
            ],
            "processes": null,
            "mechanisms": [
              "در یک دوره، افزایش بار هسته‌ای، نیروی جاذبه به الکترون‌ها را افزایش داده و شعاع را کاهش می‌دهد.",
              "در یک گروه، افزایش تعداد لایه‌های الکترونی، شعاع اتمی را افزایش می‌دهد."
            ],
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آرایش الکترونی (شیمی دهم)",
              "ساختار جدول تناوبی (شیمی دهم)"
            ],
            "next_topics": [
              "c1t3"
            ],
            "concept_dependencies": [
              "نیاز به درک آرایش الکترونی"
            ],
            "required_background": null,
            "builds_upon": [
              "آرایش الکترونی"
            ],
            "enables_learning_of": [
              "پیش‌بینی واکنش‌پذیری"
            ]
          },
          "relationships": {
            "related_topics": [
              "جدول تناوبی",
              "انرژی یونش"
            ],
            "similar_concepts": [
              "الکترونگاتیوی"
            ],
            "differences": [
              "خصلت فلزی تمایل به از دست دادن الکترون است، الکترونگاتیوی تمایل به جذب الکترون است."
            ],
            "frequently_confused_with": [
              "اندازه یونی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "تغییرات خصلت فلزی در گروه و دوره",
              "تغییرات شعاع اتمی در گروه و دوره",
              "توضیح علت تغییرات"
            ],
            "hidden_points": [
              "رابطه بین خصلت فلزی و واکنش‌پذیری"
            ],
            "trick_points": [
              "سوالات مقایسه‌ای بین دو عنصر"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "مقایسه",
              "علت‌یابی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل علت کاهش شعاع در یک دوره"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص جهت تغییرات (مثلاً افزایش در دوره به جای کاهش)",
              "عدم درک علت فیزیکی تغییرات"
            ],
            "misconceptions": [
              "همه فلزات خصلت فلزی یکسانی دارند."
            ],
            "difficult_parts": [
              "توضیح علت کاهش شعاع اتمی در یک دوره",
              "مقایسه خصلت فلزی فلزات قلیایی و قلیایی خاکی"
            ],
            "warning_points": [
              "در یک دوره، با افزایش عدد اتمی، شعاع اتمی کاهش می‌یابد.",
              "در یک گروه، با افزایش عدد اتمی، خصلت فلزی افزایش می‌یابد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبانی بسیار مهم برای پیش‌بینی رفتار عنصرها.",
            "study_strategy": "حفظ روندها و تمرین مقایسه عناصر مختلف",
            "review_strategy": "مرور هر 7 روز یکبار با جدول تناوبی",
            "minimum_mastery_required": 85,
            "mastery_threshold": 95,
            "recommended_next_topic": "c1t3"
          },
          "memory_support": {
            "memory_tips": "در گروه، خصلت فلزی زیاد می‌شود و شعاع زیاد می‌شود. در دوره، خصلت فلزی کم می‌شود و شعاع کم می‌شود.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "جدول تناوبی را به یک شهر تصور کنید که ساختمان‌های سمت چپ (فلزها) بلندتر (شعاع بیشتر) و واکنش‌پذیرتر هستند."
          },
          "examples": {
            "textbook_examples": [
              "مقایسه واکنش فلزات قلیایی با کلر",
              "جدول شعاع اتمی لیتیم، سدیم و پتاسیم",
              "نمودار ۱"
            ],
            "important_examples": [
              "مقایسه خصلت فلزی لیتیم، سدیم و پتاسیم",
              "مقایسه شعاع اتمی در دوره سوم"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "c1t3",
          "title": "فلزهای واسطه و آرایش الکترونی آنها",
          "core_knowledge": {
            "explanation": "فلزهای واسطه (دسته d) عناصری هستند که در اتم آنها زیرلایه d در حال پر شدن است. این فلزها بر خلاف فلزهای اصلی، هنگام تشکیل کاتیون به آرایش گاز نجیب نمی‌رسند و دارای بارهای متغیر هستند. همین ویژگی باعث ایجاد ترکیب‌های رنگی و کاربردهای گسترده آنها می‌شود.",
            "complete_definition": "فلزهای واسطه، عنصرهای دسته d جدول تناوبی هستند که در آنها زیرلایه (n-1)d در حال پر شدن است. این عناصر دارای ویژگی‌های مشترک فلزی هستند اما به دلیل وجود الکترون‌های d، خواص منحصر به فردی مانند تشکیل یون‌های با بار متغیر و ترکیب‌های رنگی از خود نشان می‌دهند.",
            "key_concepts": [
              "فلز واسطه",
              "دسته d",
              "زیرلایه d",
              "بار متغیر",
              "یون رنگی",
              "ترکیب‌های رنگی",
              "شیشه رنگی"
            ],
            "terminology": {
              "فلز واسطه": "عنصری که زیرلایه d آن در حال پر شدن است.",
              "بار متغیر": "توانایی یک فلز برای تشکیل یون‌های با بارهای مختلف (مثلاً Fe2+ و Fe3+)."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در فلزهای واسطه، الکترون‌های زیرلایه (n-1)d و ns به عنوان الکترون‌های ظرفیت در واکنش‌ها شرکت می‌کنند.",
              "یون‌های فلزهای واسطه معمولاً به آرایش گاز نجیب نمی‌رسند."
            ],
            "processes": [
              "تشکیل یون‌های رنگی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آرایش الکترونی (شیمی دهم)",
              "روندهای تناوبی"
            ],
            "next_topics": [
              "c1t4"
            ],
            "concept_dependencies": [
              "نیاز به درک آرایش الکترونی زیرلایه‌ها"
            ],
            "required_background": null,
            "builds_upon": [
              "آرایش الکترونی"
            ],
            "enables_learning_of": [
              "خواص ترکیب‌های فلزات واسطه",
              "استخراج فلزات"
            ]
          },
          "relationships": {
            "related_topics": [
              "فلزهای اصلی",
              "رنگ‌ها"
            ],
            "similar_concepts": [
              "عناصر بلوک d"
            ],
            "differences": [
              "فلزهای واسطه بار متغیر دارند، فلزهای اصلی بار ثابت دارند.",
              "فلزهای واسطه به آرایش گاز نجیب نمی‌رسند، فلزهای اصلی می‌رسند."
            ],
            "frequently_confused_with": [
              "فلزهای اصلی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 7,
            "difficulty_score": 7,
            "importance_score": 7,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص فلز واسطه از روی آرایش الکترونی",
              "نوشتن آرایش الکترونی یون‌های فلزات واسطه",
              "دلیل بار متغیر",
              "دلیل رنگی بودن ترکیب‌ها"
            ],
            "hidden_points": [
              "رابطه آرایش الکترونی و خواص فیزیکی"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص آرایش الکترونی یون‌ها"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "نوشتن آرایش"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل علت بار متغیر"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نوشتن آرایش الکترونی یون‌ها (ترتیب حذف الکترون)",
              "تصور اینکه همه فلزات واسطه بار متغیر دارند"
            ],
            "misconceptions": [
              "همه فلزات هنگام تشکیل یون به آرایش گاز نجیب می‌رسند."
            ],
            "difficult_parts": [
              "نوشتن آرایش الکترونی یون‌ها",
              "تشخیص فلز واسطه"
            ],
            "warning_points": [
              "در فلزات واسطه، الکترون‌های s قبل از d خارج می‌شوند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم مهم در شیمی معدنی و کاربردها.",
            "study_strategy": "تمرین نوشتن آرایش الکترونی برای یون‌های مختلف فلزات واسطه",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "c1t4"
          },
          "memory_support": {
            "memory_tips": "در فلزات واسطه، اول الکترون‌های s خارج می‌شوند، بعد d.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "اتم فلز واسطه را به یک ساختمان با طبقات d و s تصور کنید که ابتدا افراد طبقه s (ns) خارج می‌شوند."
          },
          "examples": {
            "textbook_examples": [
              "آرایش الکترونی یون‌های آهن (Fe2+ و Fe3+)",
              "آرایش الکترونی یون روی (Zn2+)"
            ],
            "important_examples": [
              "اسکاندیم (Sc) و یون آن",
              "کروم (Cr) و یون‌های آن"
            ],
            "real_life_examples": [
              "یاقوت سرخ (Al2O3 آلاییده با Cr3+)",
              "شیشه‌های رنگی",
              "فیروزه"
            ]
          }
        },
        {
          "id": "c1t4",
          "title": "واکنش‌پذیری فلزها و استخراج آنها",
          "core_knowledge": {
            "explanation": "واکنش‌پذیری فلزها نشان‌دهنده تمایل آنها برای انجام واکنش شیمیایی است. فلزهای فعال‌تر، تمایل بیشتری به تشکیل ترکیب دارند و استخراج آنها از سنگ معدن دشوارتر است. یک فلز فعال‌تر می‌تواند فلز کمتر فعال را از ترکیب آن خارج کند.",
            "complete_definition": "واکنش‌پذیری فلزی، معیاری از تمایل یک فلز برای اکسید شدن و تشکیل یون مثبت است. هرچه فلز فعال‌تر باشد، تمایل بیشتری به واکنش با دیگر مواد دارد و اکسید آن پایدارتر است. استخراج فلزات فعال از اکسیدهایشان به عوامل کاهنده قوی‌تری نیاز دارد.",
            "key_concepts": [
              "واکنش‌پذیری",
              "فعالیت شیمیایی",
              "استخراج فلز",
              "اکسید فلزی",
              "کاهنده",
              "واکنش جابجایی"
            ],
            "terminology": {
              "واکنش‌پذیری": "تمایل یک ماده برای شرکت در واکنش شیمیایی.",
              "استخراج": "جداسازی یک فلز از سنگ معدن آن.",
              "واکنش جابجایی": "واکنشی که در آن یک عنصر فعال‌تر، عنصر کم‌فعال‌تر را از ترکیب آن خارج می‌کند."
            },
            "formulas": {
              "استخراج آهن": "2Fe2O3(s) + 3C(s) → 4Fe(s) + 3CO2(g)",
              "واکنش جابجایی": "FeO(s) + 2Na(s) → Na2O(s) + Fe(s)"
            },
            "laws": null,
            "principles": [
              "فلزهای فعال‌تر، ترکیب‌های پایدارتری با اکسیژن تشکیل می‌دهند.",
              "یک فلز فعال‌تر می‌تواند فلز کم‌فعال‌تر را از اکسید آن جدا کند.",
              "هرچه فلز فعال‌تر باشد، استخراج آن دشوارتر است."
            ],
            "processes": [
              "واکنش جابجایی",
              "استخراج آهن با کربن"
            ],
            "mechanisms": null,
            "reaction_types": [
              "جابجایی",
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "روندهای تناوبی (خصلت فلزی)"
            ],
            "next_topics": [
              "c1t5",
              "c1t6"
            ],
            "concept_dependencies": [
              "نیاز به درک خصلت فلزی"
            ],
            "required_background": null,
            "builds_upon": [
              "روندهای تناوبی"
            ],
            "enables_learning_of": [
              "بازده درصدی",
              "استوکیومتری"
            ]
          },
          "relationships": {
            "related_topics": [
              "اکسایش-کاهش",
              "سری الکتروشیمیایی"
            ],
            "similar_concepts": [
              "واکنش‌پذیری هالوژن‌ها"
            ],
            "differences": [
              "فلزات تمایل به از دست دادن الکترون دارند، هالوژن‌ها تمایل به گرفتن الکترون."
            ],
            "frequently_confused_with": [
              "واکنش‌پذیری شیمیایی به طور کلی"
            ]
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
              "مقایسه واکنش‌پذیری فلزها",
              "تشخیص فلز فعال‌تر",
              "واکنش جابجایی",
              "نقش کربن در استخراج آهن"
            ],
            "hidden_points": [
              "رابطه واکنش‌پذیری و پایداری ترکیب"
            ],
            "trick_points": [
              "سوالات مربوط به پیش‌بینی انجام واکنش"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "مقایسه",
              "پیش‌بینی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل سری واکنش‌پذیری"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در تشخیص فلز فعال‌تر",
              "اشتباه در پیش‌بینی واکنش جابجایی"
            ],
            "misconceptions": [
              "فلزات کم‌فعال‌تر به راحتی استخراج می‌شوند."
            ],
            "difficult_parts": [
              "پیش‌بینی انجام واکنش جابجایی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کلید درک استخراج فلزات.",
            "study_strategy": "مقایسه فلزات مختلف و توانایی جابجایی آنها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c1t5"
          },
          "memory_support": {
            "memory_tips": "فلز فعال‌تر = واکنش‌پذیرتر = استخراج سخت‌تر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "فلزات فعال مانند سدیم، بسیار پرانرژی و واکنش‌پذیر هستند."
          },
          "examples": {
            "textbook_examples": [
              "کاوش کنید ۲ (واکنش آهن و مس)",
              "مقایسه واکنش‌پذیری در جدول",
              "واکنش FeO با Na"
            ],
            "important_examples": [
              "استخراج آهن با کربن (معادله 2Fe2O3 + 3C → 4Fe + 3CO2)"
            ],
            "real_life_examples": [
              "تولید فولاد در فولاد مبارکه",
              "استخراج طلا از معادن"
            ]
          }
        },
        {
          "id": "c1t5",
          "title": "خلوص مواد و بازده درصدی واکنش",
          "core_knowledge": {
            "explanation": "مواد اولیه در واکنش‌های شیمیایی اغلب ناخالص هستند و بازده واکنش معمولاً کمتر از 100% است. خلوص درصدی، نشان‌دهنده درصد جرمی ماده خالص در یک نمونه است. بازده درصدی، نسبت جرم یا مقدار فراورده به دست آمده به مقدار نظری محاسبه شده را نشان می‌دهد.",
            "complete_definition": "خلوص یک ماده، درصد جرمی ماده خالص در یک نمونه ناخالص است. بازده درصدی یک واکنش، نسبت مقدار واقعی فراورده تولید شده به مقدار نظری (محاسبه شده بر اساس استوکیومتری) است که با ضرب در 100 به دست می‌آید.",
            "key_concepts": [
              "خلوص",
              "ناخالصی",
              "بازده درصدی",
              "مقدار نظری",
              "مقدار عملی"
            ],
            "terminology": {
              "خلوص": "درصد جرمی ماده خالص در نمونه",
              "بازده درصدی": "نسبت مقدار عملی فراورده به مقدار نظری آن",
              "مقدار نظری": "مقدار فراورده‌ای که بر اساس محاسبات استوکیومتری باید به دست آید.",
              "مقدار عملی": "مقدار واقعی فراورده‌ای که در آزمایش به دست می‌آید."
            },
            "formulas": {
              "درصد خلوص": "(جرم ماده خالص / جرم نمونه ناخالص) × 100",
              "بازده درصدی": "(مقدار عملی فراورده / مقدار نظری فراورده) × 100"
            },
            "laws": null,
            "principles": [
              "مواد اولیه در طبیعت معمولاً ناخالص هستند.",
              "بازده واکنش‌های شیمیایی به دلیل ناخالصی، انجام ناقص واکنش یا تلفات در جداسازی، کمتر از 100% است."
            ],
            "processes": [
              "محاسبات استوکیومتری با در نظر گرفتن خلوص و بازده"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "استوکیومتری (شیمی دهم)"
            ],
            "next_topics": [
              "c1t6"
            ],
            "concept_dependencies": [
              "نیاز به تسلط بر استوکیومتری"
            ],
            "required_background": null,
            "builds_upon": [
              "استوکیومتری"
            ],
            "enables_learning_of": [
              "محاسبات صنعتی پیشرفته"
            ]
          },
          "relationships": {
            "related_topics": [
              "استوکیومتری"
            ],
            "similar_concepts": [
              "خطای آزمایشگاهی"
            ],
            "differences": [
              "خلوص به ماده اولیه مربوط است، بازده به فراورده."
            ],
            "frequently_confused_with": [
              "غلظت"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 8,
            "importance_score": 10,
            "reasoning_load": 9,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "محاسبه خلوص",
              "محاسبه بازده درصدی",
              "محاسبه جرم واکنش‌دهنده با خلوص معین",
              "محاسبه جرم فراورده با بازده معین"
            ],
            "hidden_points": [
              "تشخیص اینکه آیا داده‌ها مربوط به ماده خالص است یا ناخالص"
            ],
            "trick_points": [
              "سوالات چند مرحله‌ای که خلوص و بازده هر دو را شامل می‌شوند."
            ],
            "common_question_patterns": [
              "مسئله",
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف"
            ],
            "calculation_question_types": [
              "محاسبات استوکیومتری با خلوص و بازده"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "استفاده از جرم ناخالص به جای جرم خالص در محاسبات",
              "فراموش کردن ضرب در 100 برای درصد",
              "تشخیص ندادن اینکه کدام عدد، نظری است و کدام عملی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "مسائل ترکیبی با خلوص و بازده",
              "تشخیص اینکه آیا بازده داده شده باید در محاسبات وارد شود یا خیر"
            ],
            "warning_points": [
              "در محاسبات استوکیومتری، باید از جرم ماده خالص استفاده کرد.",
              "بازده درصدی همیشه برای فراورده‌ها محاسبه می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم بسیار مهم و پرتکرار در کنکور.",
            "study_strategy": "حل مسائل متنوع با درجات مختلف دشواری",
            "review_strategy": "مرور روزانه و حل یک مسئله پیچیده",
            "minimum_mastery_required": 90,
            "mastery_threshold": 98,
            "recommended_next_topic": "c1t6"
          },
          "memory_support": {
            "memory_tips": "خلوص = ماده خالص / کل نمونه. بازده = مقدار عملی / مقدار نظری.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک تکه کیک را تصور کنید که بخشی از آن (ناخالصی) خوراکی نیست. خلوص، درصد کیک خوراکی است."
          },
          "examples": {
            "textbook_examples": [
              "مثال حل شده (یک تن Fe2O3 با خلوص 70%)",
              "مثال حل شده (تخمیر گلوکز با بازده 80%)",
              "مثال حل شده (تیغه فولادی با خلوص 95%)"
            ],
            "important_examples": [
              "محاسبه بازده درصدی از داده‌های آزمایشگاهی (جدول ۴۰ گرم Fe2O3)"
            ],
            "real_life_examples": [
              "استخراج طلا از معادن با خلوص پایین",
              "محاسبه خلوص کودهای شیمیایی",
              "گیاه پالایی"
            ]
          }
        },
        {
          "id": "c1t6",
          "title": "نفت خام و هیدروکربن‌ها (آلکان‌ها)",
          "core_knowledge": {
            "explanation": "نفت خام مخلوطی از هیدروکربن‌ها (ترکیبات کربن و هیدروژن) است. آلکان‌ها هیدروکربن‌های سیرشده‌ای هستند که در آنها بین اتم‌های کربن فقط پیوند یگانه وجود دارد. این ترکیبات واکنش‌پذیری کمی دارند و بخش عمده نفت خام را تشکیل می‌دهند.",
            "complete_definition": "نفت خام، مایعی غلیظ، سیاه یا قهوه‌ای مایل به سبز و مخلوطی طبیعی از صدها هیدروکربن است. آلکان‌ها دسته‌ای از هیدروکربن‌های اشباع شده با فرمول عمومی CnH2n+2 هستند که در آنها هر اتم کربن با چهار پیوند یگانه به اتم‌های دیگر متصل شده است.",
            "key_concepts": [
              "نفت خام",
              "هیدروکربن",
              "آلکان",
              "سیرشده",
              "زنجیر کربنی",
              "هیدروکربن شاخه‌دار",
              "هیدروکربن راست زنجیر"
            ],
            "terminology": {
              "نفت خام": "مخلوطی از هیدروکربن‌ها و مواد دیگر که از دل زمین استخراج می‌شود.",
              "هیدروکربن": "ترکیبی که تنها از کربن و هیدروژن ساخته شده است.",
              "آلکان": "هیدروکربن سیر شده با پیوندهای یگانه.",
              "هیدروکربن سیرشده": "هیدروکربنی که در آن هر اتم کربن با چهار پیوند یگانه به اتم‌های دیگر متصل است."
            },
            "formulas": {
              "فرمول عمومی آلکان‌ها": "CnH2n+2"
            },
            "laws": null,
            "principles": [
              "اتم کربن می‌تواند با خود پیوندهای یگانه، دوگانه و سه‌گانه تشکیل دهد.",
              "اتم کربن می‌تواند زنجیرها و حلقه‌های کربنی بسازد.",
              "آلکان‌ها میل ترکیبی کمی دارند و واکنش‌پذیری پایینی از خود نشان می‌دهند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پیوند کووالانسی (شیمی دهم)",
              "ساختار لوویس (شیمی دهم)"
            ],
            "next_topics": [
              "c1t7",
              "c1t8",
              "c1t9"
            ],
            "concept_dependencies": [
              "نیاز به درک پیوند کووالانسی"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "شیمی آلی"
            ]
          },
          "relationships": {
            "related_topics": [
              "شیمی آلی",
              "سوخت‌های فسیلی"
            ],
            "similar_concepts": [
              "آلکن‌ها",
              "آلکین‌ها"
            ],
            "differences": [
              "آلکان‌ها سیرشده هستند (فقط پیوند یگانه)، آلکن‌ها سیرنشده (پیوند دوگانه) هستند.",
              "آلکان‌ها واکنش‌پذیری کمتری دارند."
            ],
            "frequently_confused_with": [
              "آلکن‌ها"
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
              "تعریف هیدروکربن و آلکان",
              "فرمول عمومی آلکان‌ها",
              "تشخیص آلکان از روی فرمول",
              "توانایی کربن در تشکیل زنجیر"
            ],
            "hidden_points": [
              "ویژگی ناقطبی آلکان‌ها"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص سیرشده یا سیرنشده بودن"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل علت واکنش‌پذیری کم آلکان‌ها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در فرمول عمومی آلکان‌ها",
              "ناتوانی در تشخیص آلکان از روی ساختار"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص آلکان‌های شاخه‌دار"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه و اساس شیمی آلی.",
            "study_strategy": "تمرین تشخیص آلکان‌ها و نوشتن فرمول آنها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c1t7"
          },
          "memory_support": {
            "memory_tips": "آلکان = اشباع = تک پیوند = فرمول CnH2n+2.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "زنجیر کربنی را به یک زنجیر از حلقه‌های فلزی تصور کنید که هر حلقه (کربن) به دو حلقه دیگر وصل است."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۷ و ۱۸",
              "جدول آلکان‌های راست زنجیر"
            ],
            "important_examples": [
              "متان (CH4)",
              "اتان (C2H6)",
              "پروپان (C3H8)"
            ],
            "real_life_examples": [
              "گاز شهری (متان)",
              "کپسول گاز (پروپان و بوتان)",
              "بنزین"
            ]
          }
        },
        {
          "id": "c1t7",
          "title": "نام‌گذاری آلکان‌ها",
          "core_knowledge": {
            "explanation": "برای نام‌گذاری آلکان‌ها، طولانی‌ترین زنجیر کربنی به عنوان زنجیر اصلی انتخاب شده و شماره‌گذاری از نزدیک‌ترین سر به شاخه آغاز می‌شود. شاخه‌ها به عنوان آلکیل (متیل، اتیل و ...) نام‌گذاری می‌شوند و با پیشوندهای شمارشی (دی، تری، تترا) برای شاخه‌های تکراری.",
            "complete_definition": "نام‌گذاری آلکان‌ها بر اساس قواعد آیوپاک انجام می‌شود: 1. یافتن طولانی‌ترین زنجیر کربنی (زنجیر اصلی). 2. شماره‌گذاری از نزدیک‌ترین سر به شاخه. 3. تعیین نام و مکان شاخه‌ها (آلکیل‌ها). 4. ترکیب کردن نام‌ها به ترتیب الفبایی (با رعایت پیشوندهای شمارشی).",
            "key_concepts": [
              "آلکان",
              "آلکیل",
              "زنجیر اصلی",
              "شاخه فرعی",
              "پیشوند شمارشی",
              "قواعد آیوپاک"
            ],
            "terminology": {
              "آلکیل": "شاخه‌ای که از یک آلکان با حذف یک هیدروژن به دست می‌آید (متیل، اتیل، پروپیل).",
              "زنجیر اصلی": "طولانی‌ترین زنجیر پیوسته از اتم‌های کربن در یک آلکان شاخه‌دار.",
              "شاخه فرعی": "زنجیر کربنی که به زنجیر اصلی متصل است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "زنجیر اصلی باید طولانی‌ترین زنجیر ممکن باشد.",
              "شماره‌گذاری باید از نزدیک‌ترین سر به اولین شاخه انجام شود.",
              "اگر شاخه‌های یکسان تکراری باشند، از پیشوندهای di، tri، tetra استفاده می‌شود.",
              "نام شاخه‌ها به ترتیب حروف الفبا نوشته می‌شوند."
            ],
            "processes": [
              "یافتن زنجیر اصلی",
              "شماره‌گذاری",
              "نام‌گذاری شاخه‌ها",
              "نوشتن نام نهایی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آلکان‌ها",
              "زنجیر کربنی"
            ],
            "next_topics": [
              "c1t8"
            ],
            "concept_dependencies": [
              "نیاز به تشخیص زنجیر کربنی"
            ],
            "required_background": null,
            "builds_upon": [
              "آلکان‌ها"
            ],
            "enables_learning_of": [
              "نام‌گذاری ترکیبات آلی دیگر"
            ]
          },
          "relationships": {
            "related_topics": [
              "شیمی آلی",
              "نام‌گذاری ترکیبات"
            ],
            "similar_concepts": [
              "نام‌گذاری آلکن‌ها"
            ],
            "differences": [
              "آلکان‌ها به 'ان' ختم می‌شوند، آلکن‌ها به 'ان' با تعیین مکان پیوند دوگانه."
            ],
            "frequently_confused_with": [
              "نام‌گذاری زنجیرهای مختلف"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 8,
            "reasoning_load": 8,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "نام‌گذاری آلکان‌های ساده (تا ۶ کربن)",
              "تشخیص زنجیر اصلی",
              "نام‌گذاری شاخه‌ها",
              "رعایت اعداد و پیشوندها"
            ],
            "hidden_points": [
              "اولویت نام‌گذاری شاخه‌های با حروف الفبا"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نام درست از نادرست"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "نام‌گذاری"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "انتخاب زنجیر اصلی اشتباه",
              "شماره‌گذاری اشتباه (از سر اشتباه)",
              "فراموش کردن پیشوندهای شمارشی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "یافتن زنجیر اصلی در مولکول‌های پیچیده",
              "نام‌گذاری شاخه‌های متعدد"
            ],
            "warning_points": [
              "همیشه به دنبال طولانی‌ترین زنجیر باشید.",
              "اگر شاخه‌ها در فاصله مساوی از دو سر بودند، از سمت شاخه کوچکتر شماره‌گذاری کنید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت پایه‌ای و ضروری در شیمی آلی.",
            "study_strategy": "تمرین مداوم با ساختارهای مختلف",
            "review_strategy": "مرور هر 5 روز یکبار و حل حداقل ۵ مسئله",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "c1t8"
          },
          "memory_support": {
            "memory_tips": "زنجیر اصلی = بلندترین زنجیر. شماره‌گذاری = از نزدیک‌ترین سر به شاخه.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "نام‌گذاری مانند آدرس دادن به یک خیابان اصلی است که کوچه‌هایی از آن منشعب شده‌اند."
          },
          "examples": {
            "textbook_examples": [
              "مثال‌های نام‌گذاری در فعالیت 'با هم بیندیشیم'",
              "تصحیح نام‌های نادرست"
            ],
            "important_examples": [
              "2-متیل پنتان",
              "2،2-دی متیل بوتان",
              "3-اتیل-2-متیل هگزان"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "c1t8",
          "title": "آلکن‌ها و واکنش‌های آنها",
          "core_knowledge": {
            "explanation": "آلکن‌ها هیدروکربن‌های سیرنشده‌ای هستند که در ساختار خود حداقل یک پیوند دوگانه کربن-کربن دارند. به دلیل وجود پیوند دوگانه، واکنش‌پذیری بیشتری نسبت به آلکان‌ها دارند و واکنش‌های افزایشی از خود نشان می‌دهند. اتن (اتیلن) مهم‌ترین عضو این خانواده است.",
            "complete_definition": "آلکن‌ها هیدروکربن‌های سیرنشده با فرمول عمومی CnH2n هستند که در ساختار خود یک پیوند دوگانه کربن-کربن دارند. این ترکیبات به دلیل وجود پیوند π، تمایل به انجام واکنش‌های افزایشی (افزودن) دارند و به عنوان مواد اولیه مهم در صنعت پتروشیمی به کار می‌روند.",
            "key_concepts": [
              "آلکن",
              "پیوند دوگانه",
              "سیرنشده",
              "واکنش افزایشی",
              "اتن (اتیلن)",
              "پلیمری شدن"
            ],
            "terminology": {
              "آلکن": "هیدروکربنی با یک یا چند پیوند دوگانه کربن-کربن.",
              "سیرنشده": "ترکیبی که اتم‌های کربن آن به حداکثر تعداد هیدروژن متصل نیستند و دارای پیوند دو یا سه گانه هستند.",
              "واکنش افزایشی": "واکنشی که در آن یک مولکول کوچک به پیوند دوگانه افزوده می‌شود و ترکیب اشباع تولید می‌کند."
            },
            "formulas": {
              "فرمول عمومی آلکن‌ها": "CnH2n"
            },
            "laws": null,
            "principles": [
              "پیوند دوگانه شامل یک پیوند سیگما (σ) و یک پیوند پای (π) است. پیوند π ضعیف‌تر و واکنش‌پذیرتر است.",
              "آلکن‌ها تمایل به انجام واکنش‌های افزایشی (مانند افزودن Br2 یا H2O) دارند.",
              "اتن (CH2=CH2) ساده‌ترین و مهم‌ترین آلکن است."
            ],
            "processes": [
              "واکنش افزایش برم (تست اشباع‌نشدگی)",
              "واکنش افزودن آب (تولید اتانول)"
            ],
            "mechanisms": null,
            "reaction_types": [
              "افزایشی",
              "پلیمری شدن"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آلکان‌ها",
              "پیوند کووالانسی"
            ],
            "next_topics": [
              "c1t9",
              "c3t2"
            ],
            "concept_dependencies": [
              "نیاز به درک پیوند دوگانه"
            ],
            "required_background": null,
            "builds_upon": [
              "آلکان‌ها"
            ],
            "enables_learning_of": [
              "پلیمری شدن",
              "شیمی صنعتی"
            ]
          },
          "relationships": {
            "related_topics": [
              "آلکان‌ها",
              "پلیمرها"
            ],
            "similar_concepts": [
              "آلکین‌ها"
            ],
            "differences": [
              "آلکن‌ها پیوند دوگانه دارند، آلکان‌ها ندارند.",
              "آلکن‌ها واکنش‌پذیرتر از آلکان‌ها هستند."
            ],
            "frequently_confused_with": [
              "آلکان‌های حلقوی"
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
              "تشخیص آلکن",
              "فرمول عمومی آلکن‌ها",
              "تشخیص ترکیبات سیرشده و سیرنشده",
              "واکنش افزایش برم (تغییر رنگ)",
              "کاربرد اتن"
            ],
            "hidden_points": [
              "واکنش پلیمری شدن اتن"
            ],
            "trick_points": [
              "سوالات مربوط به تست اشباع‌نشدگی با Br2"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "پیش‌بینی واکنش"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص آلکن از آلکان",
              "عدم درک علت واکنش‌پذیری بیشتر"
            ],
            "misconceptions": [
              "همه هیدروکربن‌ها واکنش‌پذیری یکسانی دارند."
            ],
            "difficult_parts": [
              "تشخیص پیوند دوگانه در ساختار",
              "درک واکنش افزایشی"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبنای پلیمرها و صنعت پتروشیمی.",
            "study_strategy": "مقایسه آلکان و آلکن از نظر ساختار و رفتار",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c1t9"
          },
          "memory_support": {
            "memory_tips": "آلکن = سیرنشده = پیوند دوگانه = واکنش‌پذیرتر = فرمول CnH2n.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "اتن (CH2=CH2) ساده‌ترین آلکن را با دو مرغک (کربن) که با یک طناب (پیوند دوگانه) به هم بسته شده‌اند، تصور کنید."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۹ (نام‌گذاری و ساختار)",
              "شکل ۲۰ (کاربرد اتن)"
            ],
            "important_examples": [
              "اتن (CH2=CH2)",
              "پروپن (CH3-CH=CH2)"
            ],
            "real_life_examples": [
              "رسیدن میوه‌ها با گاز اتن",
              "تولید اتانول از اتن",
              "واکنش چربی‌ها با برم (تست کیفیت روغن)"
            ]
          }
        },
        {
          "id": "c1t9",
          "title": "تقطیر جزء به جزء نفت خام",
          "core_knowledge": {
            "explanation": "نفت خام با استفاده از تقطیر جزء به جزء در برج تقطیر به اجزای مختلف با نقطه جوش نزدیک به هم تفکیک می‌شود. ترکیبات سبک‌تر (با جرم مولکولی کمتر و نقطه جوش پایین‌تر) در بالای برج و ترکیبات سنگین‌تر (با جرم مولکولی بیشتر) در پایین برج جدا می‌شوند.",
            "complete_definition": "تقطیر جزء به جزء، روشی برای جداسازی مخلوط‌های مایع بر اساس تفاوت نقطه جوش است. در پالایش نفت، از این روش برای جداسازی ترکیبات مختلف نفت خام مانند بنزین، نفت سفید، گازوئیل و نفت کوره استفاده می‌شود.",
            "key_concepts": [
              "تقطیر جزء به جزء",
              "برج تقطیر",
              "نقطه جوش",
              "پالایش نفت",
              "بنزین",
              "نفت سفید",
              "گازوئیل",
              "نفت کوره"
            ],
            "terminology": {
              "پالایش نفت": "فرایند جداسازی و خالص‌سازی ترکیبات نفت خام.",
              "برج تقطیر": "ستونی که در آن تقطیر جزء به جزء انجام می‌شود و دارای سینی‌هایی برای جمع‌آوری مایعات در دماهای مختلف است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "هرچه جرم مولکولی یک هیدروکربن بیشتر باشد، نقطه جوش آن بالاتر است.",
              "در برج تقطیر، دما از پایین به بالا کاهش می‌یابد.",
              "ترکیبات با نقطه جوش پایین‌تر، در بالای برج جمع می‌شوند."
            ],
            "processes": [
              "گرم کردن نفت خام → ورود به برج تقطیر (بخش پایین داغ) → تبخیر ترکیبات سبک → صعود به بالای برج (بخش سرد) → میعان و جمع‌آوری در سینی‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "نقطه جوش",
              "آلکان‌ها",
              "نیروهای بین مولکولی"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک نیروهای بین مولکولی و نقطه جوش"
            ],
            "required_background": null,
            "builds_upon": [
              "نفت خام"
            ],
            "enables_learning_of": [
              "صنعت پتروشیمی"
            ]
          },
          "relationships": {
            "related_topics": [
              "تقطیر جزء به جزء هوا (شیمی دهم)"
            ],
            "similar_concepts": [
              "تقطیر ساده"
            ],
            "differences": [
              "تقطیر جزء به جزء برای جداسازی مخلوط‌های با چندین جزء و نقطه جوش نزدیک به هم استفاده می‌شود."
            ],
            "frequently_confused_with": [
              "تقطیر ساده"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P10D",
            "forgetting_risk": 5,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 5,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 30,
            "exam_points": [
              "هدف پالایش نفت",
              "اساس جداسازی (نقطه جوش)",
              "ترتیب جداسازی ترکیبات",
              "کاربردهای فراورده‌ها"
            ],
            "hidden_points": [
              "رابطه جرم مولکولی و نقطه جوش"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند جداسازی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در ترتیب جداسازی ترکیبات (سنگین‌ترین در پایین، سبک‌ترین در بالا)"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "نحوه کار برج تقطیر"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربردی از تقطیر در صنعت.",
            "study_strategy": "مطالعه شکل برج تقطیر و مسیر حرکت ترکیبات",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "سبک‌تر = نقطه جوش پایین‌تر = در بالای برج جمع می‌شود.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "برج تقطیر را مانند یک آبشار معکوس تصور کنید که مولکول‌های سبک (پرندگان) به بالا پرواز می‌کنند و سنگین‌ها (تخته سنگ‌ها) در پایین می‌مانند."
          },
          "examples": {
            "textbook_examples": [
              "تصویر برج تقطیر",
              "مقایسه بنزین و نفت کوره"
            ],
            "important_examples": [
              "تفکیک بنزین، نفت سفید و گازوئیل"
            ],
            "real_life_examples": [
              "پالایشگاه‌های نفت در ایران (آبادان، بندرعباس)"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "در پی غذای سالم",
      "chapter_objectives": [
        "درک مفاهیم دما، انرژی گرمایی، ظرفیت گرمایی و گرمای ویژه",
        "تبیین گرماده و گرماگیر بودن واکنش‌ها بر اساس تغییر آنتالپی",
        "محاسبه آنتالپی واکنش با استفاده از قانون هس و آنتالپی پیوندها",
        "بررسی ارزش سوختی مواد غذایی و سوخت‌ها",
        "درک مفهوم سرعت واکنش و عوامل مؤثر بر آن",
        "محاسبه سرعت متوسط واکنش بر اساس تغییرات مول یا غلظت"
      ],
      "overall_difficulty": 8,
      "overall_importance": 10,
      "topics": [
        {
          "id": "c2t1",
          "title": "دما، انرژی گرمایی و گرمای ویژه",
          "core_knowledge": {
            "explanation": "دما نشان‌دهنده میانگین انرژی جنبشی ذرات یک ماده است، در حالی که انرژی گرمایی مجموع انرژی جنبشی ذرات است و به دما و جرم بستگی دارد. گرمای ویژه، مقدار گرمایی است که برای افزایش دمای یک گرم از یک ماده به اندازه یک درجه سلسیوس نیاز است.",
            "complete_definition": "دما، معیاری از میانگین انرژی جنبشی ذرات یک ماده است. انرژی گرمایی، مجموع انرژی جنبشی ذرات یک نمونه ماده است. گرمای ویژه (c) مقدار گرمایی است که برای افزایش دمای یک گرم از یک ماده به اندازه یک درجه سلسیوس لازم است و به نوع ماده بستگی دارد.",
            "key_concepts": [
              "دما",
              "انرژی جنبشی",
              "انرژی گرمایی",
              "گرمای ویژه",
              "ظرفیت گرمایی",
              "معادله Q = mcΔθ"
            ],
            "terminology": {
              "دما": "میانگین انرژی جنبشی ذرات سازنده یک ماده.",
              "انرژی گرمایی": "مجموع انرژی جنبشی همه ذرات یک نمونه ماده.",
              "گرمای ویژه": "مقدار گرمای لازم برای افزایش دمای یک گرم از یک ماده به اندازه یک درجه سلسیوس.",
              "ظرفیت گرمایی": "مقدار گرمای لازم برای افزایش دمای یک نمونه ماده به اندازه یک درجه سلسیوس."
            },
            "formulas": {
              "Q": "mcΔθ",
              "m": "جرم ماده (گرم)",
              "c": "گرمای ویژه ماده (J/g°C)",
              "Δθ": "تغییر دما (درجه سلسیوس)"
            },
            "laws": null,
            "principles": [
              "هرچه دما بالاتر باشد، میانگین انرژی جنبشی ذرات بیشتر است.",
              "گرمای ویژه، خاصیتی وابسته به نوع ماده است.",
              "ظرفیت گرمایی، وابسته به نوع ماده و جرم آن است."
            ],
            "processes": [
              "محاسبه گرمای مورد نیاز برای افزایش دمای یک ماده"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مفاهیم پایه انرژی (فیزیک پایه)"
            ],
            "next_topics": [
              "c2t2"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "ترموشیمی"
            ]
          },
          "relationships": {
            "related_topics": [
              "ترموشیمی",
              "فیزیک"
            ],
            "similar_concepts": [
              "ظرفیت گرمایی"
            ],
            "differences": [
              "گرمای ویژه به جرم بستگی ندارد، ظرفیت گرمایی بستگی دارد."
            ],
            "frequently_confused_with": [
              "انرژی درونی"
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
              "تعریف دما و انرژی گرمایی",
              "تشخیص تفاوت دما و گرما",
              "محاسبه گرمای ویژه",
              "محاسبه گرمای مبادله شده",
              "مقایسه گرمای ویژه مواد"
            ],
            "hidden_points": [
              "تأثیر گرما بر دمای مواد با ظرفیت گرمایی مختلف"
            ],
            "trick_points": [
              "سوالات مفهومی در مورد تفاوت دما و گرما"
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
              "محاسبه Q, m, c, Δθ از یکدیگر"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص دما و انرژی گرمایی",
              "استفاده از یکاهای اشتباه (کالری به جای ژول)",
              "تشخیص ندادن اینکه Δθ = θ2 - θ1 است"
            ],
            "misconceptions": [
              "گرما و دما یک مفهوم هستند."
            ],
            "difficult_parts": [
              "تشخیص تفاوت بین دما و گرما",
              "استفاده از فرمول Q = mcΔθ"
            ],
            "warning_points": [
              "همیشه یکاها را چک کنید. جرم بر حسب گرم، تغییر دما بر حسب سلسیوس (یا کلوین) است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه و اساس ترموشیمی.",
            "study_strategy": "تمرین با مثال‌های مختلف از جدول گرمای ویژه",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c2t2"
          },
          "memory_support": {
            "memory_tips": "دما = میانگین انرژی، انرژی گرمایی = مجموع انرژی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "دما مانند سرعت متوسط یک گروه از ماشین‌ها، و انرژی گرمایی مانند مجموع انرژی جنبشی همه ماشین‌هاست."
          },
          "examples": {
            "textbook_examples": [
              "آزمایش تخم مرغ در آب و روغن (شکل ۲)",
              "جدول ۱ (گرمای ویژه مواد)"
            ],
            "important_examples": [
              "مقایسه گرمای ویژه آب و روغن",
              "محاسبه گرمای لازم برای پخت تخم مرغ"
            ],
            "real_life_examples": [
              "پختن مواد غذایی با آب",
              "خنک شدن یک فنجان چای"
            ]
          }
        },
        {
          "id": "c2t2",
          "title": "آنتالپی واکنش و ترموشیمی",
          "core_knowledge": {
            "explanation": "آنتالپی (H) محتوای انرژی یک سامانه در فشار ثابت است. تغییر آنتالپی (ΔH) در یک واکنش، گرمای مبادله شده با محیط را نشان می‌دهد. واکنش‌های گرماده (ΔH<0) انرژی آزاد می‌کنند و واکنش‌های گرماگیر (ΔH>0) انرژی جذب می‌کنند. تغییر آنتالپی یک واکنش برابر با Qp است.",
            "complete_definition": "آنتالپی (H) یک سامانه، مجموع انرژی درونی و حاصل‌ضرب فشار در حجم آن است. تغییر آنتالپی (ΔH) در یک واکنش شیمیایی در فشار ثابت، برابر با گرمای مبادله شده بین سامانه و محیط است (ΔH = Qp). واکنش‌های گرماده دارای ΔH منفی و واکنش‌های گرماگیر دارای ΔH مثبت هستند.",
            "key_concepts": [
              "آنتالپی (H)",
              "تغییر آنتالپی (ΔH)",
              "واکنش گرماده",
              "واکنش گرماگیر",
              "Qp",
              "سامانه",
              "محیط"
            ],
            "terminology": {
              "آنتالپی": "محتوای انرژی یک سامانه در فشار ثابت.",
              "تغییر آنتالپی (ΔH)": "مقدار انرژی که در یک فرایند شیمیایی در فشار ثابت به شکل گرما با محیط مبادله می‌شود.",
              "واکنش گرماده": "واکنشی که در آن انرژی آزاد شده و ΔH آن منفی است.",
              "واکنش گرماگیر": "واکنشی که در آن انرژی جذب شده و ΔH آن مثبت است."
            },
            "formulas": {
              "ΔH": "Qp"
            },
            "laws": null,
            "principles": [
              "در واکنش گرماده، محتوای انرژی فراورده‌ها کمتر از واکنش‌دهنده‌ها است (ΔH < 0).",
              "در واکنش گرماگیر، محتوای انرژی فراورده‌ها بیشتر از واکنش‌دهنده‌ها است (ΔH > 0)."
            ],
            "processes": [
              "تشخیص گرماده یا گرماگیر بودن از روی ΔH",
              "محاسبه ΔH از روی داده‌ها"
            ],
            "mechanisms": null,
            "reaction_types": [
              "گرماده",
              "گرماگیر"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "دما و انرژی گرمایی"
            ],
            "next_topics": [
              "c2t3",
              "c2t4"
            ],
            "concept_dependencies": [
              "نیاز به درک گرما و انرژی"
            ],
            "required_background": null,
            "builds_upon": [
              "گرما و انرژی"
            ],
            "enables_learning_of": [
              "قانون هس",
              "آنتالپی پیوند",
              "آنتالپی سوختن"
            ]
          },
          "relationships": {
            "related_topics": [
              "ترموشیمی",
              "قانون هس"
            ],
            "similar_concepts": [
              "انرژی درونی (U)"
            ],
            "differences": [
              "آنتالپی برای فشار ثابت، انرژی درونی برای حجم ثابت است."
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
              "تشخیص گرماده و گرماگیر از روی علامت ΔH",
              "تبیین فرایند از دیدگاه انرژی",
              "نمودار آنتالپی",
              "رابطه ΔH و Qp"
            ],
            "hidden_points": [
              "مفهوم سامانه و محیط"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع واکنش از روی نمودار"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص نوع واکنش",
              "تحلیل نمودار"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل گرمای مبادله شده در فرایندهای روزمره"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "عدم تشخیص علامت ΔH",
              "اشتباه در تشخیص واکنش گرماده از گرماگیر"
            ],
            "misconceptions": [
              "واکنش‌های گرماده همیشه دمای سامانه را کاهش می‌دهند."
            ],
            "difficult_parts": [
              "تشخیص گرماده یا گرماگیر از روی نمودار",
              "درک نقش انرژی پتانسیل"
            ],
            "warning_points": [
              "علامت منفی ΔH یعنی انرژی آزاد می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم بنیادی ترموشیمی.",
            "study_strategy": "تمرین تشخیص نوع واکنش از روی معادلات و نمودارها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c2t3"
          },
          "memory_support": {
            "memory_tips": "منفی ΔH = انرژی آزاد = گرماده. مثبت ΔH = انرژی جذب = گرماگیر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک کوه را تصور کنید. در واکنش گرماده (ΔH<0)، از قله (انرژی بالا) به پایین (انرژی کم) حرکت می‌کنید و انرژی آزاد می‌شود."
          },
          "examples": {
            "textbook_examples": [
              "نمودارهای ۴ و ۵",
              "معادلات ترموشیمیایی (H2 + Cl2 → 2HCl, ΔH = -184 kJ)"
            ],
            "important_examples": [
              "واکنش هیدروژن با کلر",
              "فتوسنتز (گرماگیر)",
              "اکسایش گلوکز (گرماده)"
            ],
            "real_life_examples": [
              "سوختن گاز",
              "یخچال صحرایی (تبخیر آب گرماگیر)"
            ]
          }
        },
        {
          "id": "c2t3",
          "title": "آنتالپی پیوند و محاسبه ΔH واکنش",
          "core_knowledge": {
            "explanation": "آنتالپی پیوند، انرژی لازم برای شکستن یک مول از یک پیوند خاص در حالت گازی است. با استفاده از میانگین آنتالپی پیوندها، می‌توان ΔH یک واکنش گازی را از طریق جمع جبری انرژی‌های شکسته شده و تشکیل شده محاسبه کرد: ΔH = مجموع انرژی پیوندهای شکسته - مجموع انرژی پیوندهای تشکیل شده.",
            "complete_definition": "آنتالپی پیوند (Bond Enthalpy) مقدار انرژی است که برای شکستن یک مول از یک پیوند شیمیایی معین در فاز گازی لازم است. با استفاده از آنتالپی پیوندها، تغییر آنتالپی یک واکنش را می‌توان با محاسبه انرژی لازم برای شکستن پیوندهای واکنش‌دهنده‌ها و انرژی آزاد شده از تشکیل پیوندهای فراورده‌ها به دست آورد.",
            "key_concepts": [
              "آنتالپی پیوند",
              "شکستن پیوند (گرماگیر)",
              "تشکیل پیوند (گرماده)",
              "میانگین آنتالپی پیوند"
            ],
            "terminology": {
              "آنتالپی پیوند": "انرژی لازم برای شکستن یک مول پیوند در فاز گازی.",
              "شکستن پیوند": "فرایند گرماگیر (انرژی جذب می‌کند).",
              "تشکیل پیوند": "فرایند گرماده (انرژی آزاد می‌کند)."
            },
            "formulas": {
              "ΔH": "Σ(انرژی پیوندهای شکسته) - Σ(انرژی پیوندهای تشکیل شده)"
            },
            "laws": null,
            "principles": [
              "شکستن پیوند، انرژی مصرف می‌کند (علامت مثبت در محاسبه).",
              "تشکیل پیوند، انرژی آزاد می‌کند (علامت منفی در محاسبه)."
            ],
            "processes": [
              "محاسبه ΔH با استفاده از جدول آنتالپی پیوندها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پیوند کووالانسی",
              "ترموشیمی"
            ],
            "next_topics": [
              "c2t4"
            ],
            "concept_dependencies": [
              "نیاز به درک پیوند شیمیایی"
            ],
            "required_background": null,
            "builds_upon": [
              "ترموشیمی"
            ],
            "enables_learning_of": [
              "قانون هس"
            ]
          },
          "relationships": {
            "related_topics": [
              "قانون هس"
            ],
            "similar_concepts": [
              "انرژی شبکه (ترکیبات یونی)"
            ],
            "differences": [
              "آنتالپی پیوند برای ترکیبات کووالانسی گازی است."
            ],
            "frequently_confused_with": [
              "انرژی تفکیک پیوند"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P5D",
            "forgetting_risk": 8,
            "difficulty_score": 8,
            "importance_score": 9,
            "reasoning_load": 9,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "تعریف آنتالپی پیوند",
              "محاسبه ΔH از روی آنتالپی پیوندها",
              "تشخیص ترکیبات گازی",
              "محاسبه انرژی شکسته و تشکیل شده"
            ],
            "hidden_points": [
              "ضریب استوکیومتری در محاسبات"
            ],
            "trick_points": [
              "سوالاتی که نیاز به رسم ساختار لوویس دارند",
              "تشخیص پیوندهای شکسته و تشکیل شده"
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
              "محاسبه ΔH با استفاده از آنتالپی پیوندها"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت‌ها (منفی برای تشکیل پیوند)",
              "استفاده از مول‌های اشتباه",
              "عدم درک اینکه آنتالپی پیوند برای مولکول‌های گازی است"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص پیوندهای موجود در مولکول",
              "محاسبه تعداد پیوندها (مثلاً در CH4 چهار پیوند C-H)",
              "تشخیص اینکه کدام پیوندها شکسته و کدام تشکیل می‌شوند"
            ],
            "warning_points": [
              "از جدول آنتالپی پیوندها به درستی استفاده کنید.",
              "همیشه فرمول ساختاری مواد را رسم کنید تا پیوندها را بشمارید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "روش مهم و کاربردی برای محاسبه ΔH.",
            "study_strategy": "تمرین با مولکول‌های ساده تا پیچیده",
            "review_strategy": "مرور هر 5 روز یکبار و حل مسائل متنوع",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "c2t4"
          },
          "memory_support": {
            "memory_tips": "ΔH = (انرژی شکسته) - (انرژی تشکیل شده).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "برای شکستن یک پیوند، باید انرژی وارد کرد (مثل خرد کردن چوب). برای تشکیل پیوند، انرژی آزاد می‌شود (مثل سوزاندن چوب)."
          },
          "examples": {
            "textbook_examples": [
              "نمودار ۶ (آنتالپی پیوند H-H)",
              "نمودار ۷ (واکنش H2 با Cl2)"
            ],
            "important_examples": [
              "محاسبه ΔH برای واکنش H2 + Cl2 → 2HCl",
              "محاسبه ΔH برای واکنش N2 + 3H2 → 2NH3"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "c2t4",
          "title": "قانون هس و کاربرد آن",
          "core_knowledge": {
            "explanation": "قانون هس بیان می‌کند که تغییر آنتالپی یک واکنش، مستقل از مسیر انجام آن است و تنها به حالت اولیه و نهایی بستگی دارد. با استفاده از این قانون، می‌توان ΔH یک واکنش را با ترکیب ΔH واکنش‌های دیگر محاسبه کرد، حتی اگر آن واکنش به طور مستقیم قابل اندازه‌گیری نباشد.",
            "complete_definition": "قانون هس: اگر یک واکنش شیمیایی را بتوان به صورت ترکیبی از چند واکنش دیگر نوشت، تغییر آنتالپی آن واکنش برابر با مجموع جبری تغییر آنتالپی‌های آن واکنش‌ها خواهد بود. این قانون بر پایه تابع حالت بودن آنتالپی استوار است.",
            "key_concepts": [
              "قانون هس",
              "تابع حالت",
              "مسیر واکنش",
              "جمع جبری ΔH",
              "آنتالپی استاندارد"
            ],
            "terminology": {
              "قانون هس": "تغییر آنتالپی یک واکنش به مسیر واکنش وابسته نیست.",
              "تابع حالت": "کمیتی که مقدار آن تنها به وضعیت فعلی سامانه بستگی دارد، نه به مسیری که به آن رسیده است (آنتالپی یک تابع حالت است)."
            },
            "formulas": null,
            "laws": [
              "قانون هس"
            ],
            "principles": [
              "آنتالپی یک تابع حالت است.",
              "ΔH یک واکنش با جمع جبری ΔH واکنش‌های تشکیل‌دهنده آن محاسبه می‌شود.",
              "در قانون هس، می‌توان معادلات را ضرب، تقسیم یا معکوس کرد."
            ],
            "processes": [
              "شناسایی واکنش هدف",
              "یافتن واکنش‌هایی که می‌توانند به واکنش هدف منجر شوند",
              "اعمال تغییرات لازم (ضرب، تقسیم، معکوس) در واکنش‌ها و ΔH آنها",
              "جمع جبری معادلات و ΔH‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ترموشیمی",
              "آنتالپی"
            ],
            "next_topics": [
              "c2t5"
            ],
            "concept_dependencies": [
              "نیاز به درک آنتالپی و ΔH"
            ],
            "required_background": null,
            "builds_upon": [
              "ترموشیمی"
            ],
            "enables_learning_of": [
              "آنتالپی تشکیل",
              "سوخت‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "آنتالپی پیوند"
            ],
            "similar_concepts": [
              "قانون بقای انرژی"
            ],
            "differences": null,
            "frequently_confused_with": [
              "ترکیب معادلات ریاضی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 8,
            "importance_score": 9,
            "reasoning_load": 9,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "بیان قانون هس",
              "کاربرد قانون هس برای محاسبه ΔH واکنش‌هایی که مستقیم قابل اندازه‌گیری نیستند.",
              "دستکاری معادلات ترموشیمیایی"
            ],
            "hidden_points": [
              "تشخیص اینکه کدام معادلات باید معکوس یا ضرب شوند."
            ],
            "trick_points": [
              "سوالات با مسیرهای واکنش پیچیده"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "بیان قانون",
              "تحلیل مسیر"
            ],
            "calculation_question_types": [
              "محاسبه ΔH با قانون هس"
            ],
            "analytical_question_types": [
              "طراحی مسیر برای محاسبه ΔH"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن ضرب ΔH در ضریب",
              "فراموش کردن تغییر علامت ΔH در صورت معکوس کردن معادله",
              "جمع معادلات به صورت اشتباه"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص اینکه کدام واکنش‌ها باید در مسیر استفاده شوند",
              "دستکاری صحیح معادلات ترموشیمیایی"
            ],
            "warning_points": [
              "اگر معادله‌ای را ضرب در 2 می‌کنید، ΔH آن را هم ضرب در 2 کنید.",
              "اگر معادله‌ای را معکوس می‌کنید، علامت ΔH را تغییر دهید."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت کلیدی برای محاسبات پیچیده ترموشیمیایی.",
            "study_strategy": "تمرین با مثال‌های کتاب و سپس مثال‌های جدید",
            "review_strategy": "مرور روزانه تا زمانی که تسلط کامل پیدا کنید",
            "minimum_mastery_required": 90,
            "mastery_threshold": 98,
            "recommended_next_topic": "c2t5"
          },
          "memory_support": {
            "memory_tips": "قانون هس = جمع جبری ΔH واکنش‌ها.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تغییر آنتالپی را مانند تغییر ارتفاع در یک کوه تصور کنید. ارتفاع قله (محتوای انرژی) به مسیر صعود بستگی ندارد، فقط به نقطه شروع و پایان بستگی دارد."
          },
          "examples": {
            "textbook_examples": [
              "محاسبه ΔH برای واکنش C + 2H2 → CH4",
              "خود را بیازمایید (محاسبه ΔH برای 2CO + 2NO → ...)"
            ],
            "important_examples": [
              "محاسبه ΔH برای واکنش‌های تشکیل",
              "محاسبه ΔH برای واکنش‌های صنعتی"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "c2t5",
          "title": "ارزش سوختی و آنتالپی سوختن",
          "core_knowledge": {
            "explanation": "آنتالپی سوختن، گرمای آزاد شده از سوختن کامل یک مول از یک ماده در اکسیژن کافی است. ارزش سوختی (انرژی سوختی) مقدار انرژی آزاد شده از سوختن یک گرم از یک ماده است. کربوهیدرات‌ها، چربی‌ها و پروتئین‌ها منابع اصلی انرژی در بدن هستند که ارزش سوختی متفاوتی دارند.",
            "complete_definition": "آنتالپی سوختن (ΔHc) تغییر آنتالپی یک واکنش سوختن کامل است که در آن یک مول ماده با اکسیژن کافی واکنش می‌دهد. ارزش سوختی، انرژی آزاد شده از سوختن یک گرم ماده بر حسب کیلوژول بر گرم است. این مفهوم در تعیین ارزش غذایی مواد خوراکی کاربرد دارد.",
            "key_concepts": [
              "آنتالپی سوختن",
              "ارزش سوختی",
              "سوخت کامل",
              "اکسیژن کافی",
              "کربوهیدرات",
              "چربی",
              "پروتئین"
            ],
            "terminology": {
              "آنتالپی سوختن": "گرمای آزاد شده از سوختن کامل یک مول ماده.",
              "ارزش سوختی": "گرمای آزاد شده از سوختن یک گرم ماده (kJ/g)."
            },
            "formulas": {
              "ارزش سوختی": "|ΔHc| / جرم مولی (برای یک مول)"
            },
            "laws": null,
            "principles": [
              "چربی‌ها بیشترین ارزش سوختی را دارند.",
              "کربوهیدرات‌ها و پروتئین‌ها ارزش سوختی کمتری دارند.",
              "آنتالپی سوختن همیشه منفی است (واکنش گرماده)."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": [
              "سوختن (احتراق)"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ترموشیمی",
              "آنتالپی واکنش"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک ΔH واکنش"
            ],
            "required_background": null,
            "builds_upon": [
              "آنتالپی واکنش"
            ],
            "enables_learning_of": [
              "تغذیه",
              "انرژی"
            ]
          },
          "relationships": {
            "related_topics": [
              "سوخت‌های فسیلی",
              "تغذیه"
            ],
            "similar_concepts": [
              "کالری (غذا)"
            ],
            "differences": [
              "آنتالپی سوختن برای یک مول، ارزش سوختی برای یک گرم است."
            ],
            "frequently_confused_with": [
              "آنتالپی تشکیل"
            ]
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
              "تعریف آنتالپی سوختن",
              "تشخیص ارزش سوختی کربوهیدرات، چربی و پروتئین",
              "محاسبه انرژی دریافتی از غذا",
              "محاسبه آنتالپی سوختن از روی ارزش سوختی"
            ],
            "hidden_points": [
              "مقایسه سوخت‌های فسیلی از نظر ارزش سوختی"
            ],
            "trick_points": [],
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
              "محاسبه انرژی حاصل از مصرف غذا",
              "محاسبه آنتالپی سوختن"
            ],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت منفی ΔHc",
              "اشتباه در محاسبه ارزش سوختی"
            ],
            "misconceptions": [
              "همه مواد غذایی ارزش سوختی یکسانی دارند."
            ],
            "difficult_parts": [
              "محاسبه انرژی دریافتی از یک وعده غذایی"
            ],
            "warning_points": [
              "آنتالپی سوختن همیشه منفی است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی ترموشیمی در تغذیه.",
            "study_strategy": "مطالعه جداول ارزش سوختی و تمرین محاسبات",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "چربی > کربوهیدرات ≈ پروتئین (از نظر ارزش سوختی).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "چربی مانند یک مخزن سوخت متراکم و کربوهیدرات مانند یک مخزن معمولی است."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۴ (ارزش سوختی مواد غذایی)",
              "جدول ۵ (ارزش سوختی برخی خوراکی‌ها)",
              "جدول ۶ (آنتالپی سوختن ترکیبات آلی)"
            ],
            "important_examples": [
              "محاسبه انرژی یک گرم چربی (38 kJ/g)",
              "محاسبه ارزش سوختی متان از آنتالپی سوختن"
            ],
            "real_life_examples": [
              "برچسب ارزش غذایی روی مواد خوراکی",
              "رژیم‌های غذایی"
            ]
          }
        },
        {
          "id": "c2t6",
          "title": "عوامل مؤثر بر سرعت واکنش",
          "core_knowledge": {
            "explanation": "سرعت واکنش‌های شیمیایی به عوامل مختلفی بستگی دارد: 1) دما (با افزایش دما، سرعت افزایش می‌یابد)، 2) غلظت واکنش‌دهنده‌ها (با افزایش غلظت، سرعت افزایش می‌یابد)، 3) سطح تماس (با افزایش سطح تماس، سرعت افزایش می‌یابد)، 4) وجود کاتالیزگر (سرعت را افزایش می‌دهد) و 5) ماهیت واکنش‌دهنده‌ها (برخی مواد واکنش‌پذیرتر هستند).",
            "complete_definition": "سرعت واکنش، آهنگ تغییر غلظت واکنش‌دهنده‌ها یا فراورده‌ها در واحد زمان است. سرعت واکنش تحت تأثیر عوامل مختلفی قرار می‌گیرد که مهم‌ترین آنها عبارتند از: دما، غلظت، سطح تماس، کاتالیزگر و ماهیت واکنش‌دهنده‌ها.",
            "key_concepts": [
              "سرعت واکنش",
              "دما",
              "غلظت",
              "سطح تماس",
              "کاتالیزگر",
              "ماهیت واکنش‌دهنده",
              "انرژی فعالسازی"
            ],
            "terminology": {
              "سرعت واکنش": "تغییر غلظت واکنش‌دهنده یا فراورده در واحد زمان.",
              "کاتالیزگر": "ماده‌ای که سرعت واکنش را افزایش می‌دهد بدون اینکه خود مصرف شود.",
              "سطح تماس": "مساحت سطحی که در معرض واکنش قرار دارد."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "با افزایش دما، سرعت واکنش افزایش می‌یابد.",
              "با افزایش غلظت واکنش‌دهنده‌ها، سرعت واکنش افزایش می‌یابد.",
              "هرچه سطح تماس بیشتر باشد، سرعت واکنش بیشتر است.",
              "کاتالیزگر سرعت واکنش را افزایش می‌دهد."
            ],
            "processes": null,
            "mechanisms": [
              "افزایش دما، انرژی جنبشی ذرات را افزایش داده و برخورد مؤثرتر را زیاد می‌کند.",
              "کاتالیزگر با کاهش انرژی فعالسازی، سرعت را افزایش می‌دهد."
            ],
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "سینتیک پایه"
            ],
            "next_topics": [
              "c2t7"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "سینتیک پیشرفته"
            ]
          },
          "relationships": {
            "related_topics": [
              "سینتیک شیمیایی"
            ],
            "similar_concepts": null,
            "differences": null,
            "frequently_confused_with": [
              "عوامل موثر بر تعادل"
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
              "شناخت عوامل مؤثر بر سرعت واکنش",
              "توضیح اثر هر عامل (دما، غلظت، سطح تماس، کاتالیزگر، ماهیت)"
            ],
            "hidden_points": [
              "تأثیر هر عامل در صنعت و زندگی روزمره"
            ],
            "trick_points": [
              "سوالات تحلیلی درباره اثر هر عامل"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص عامل",
              "توضیح علت"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل تأثیر یک عامل در یک فرایند خاص"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در توضیح علت اثر هر عامل",
              "اشتباه در تشخیص کاتالیزگر"
            ],
            "misconceptions": [
              "کاتالیزگر در واکنش مصرف می‌شود."
            ],
            "difficult_parts": [
              "توضیح مکانیسم اثر کاتالیزگر",
              "تشخیص عامل مؤثر در یک مثال خاص"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم کلیدی در شیمی صنعتی و محیط زیست.",
            "study_strategy": "مطالعه مثال‌های کتاب و ارائه مثال‌های جدید",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c2t7"
          },
          "memory_support": {
            "memory_tips": "عوامل مؤثر بر سرعت: دما، غلظت، سطح تماس، کاتالیزگر و ماهیت.",
            "mnemonic_devices": "دما-غلظت-سطح-کاتالیزگر-ماهیت (د، غ، س، ک، م)",
            "visual_imagination_tips": "یک کباب را تصور کنید: با حرارت بیشتر (دما)، تکه‌های کوچک‌تر (سطح تماس) و استفاده از چاشنی (کاتالیزگر) زودتر می‌پزد."
          },
          "examples": {
            "textbook_examples": [
              "کاوش کنید (عوامل مؤثر بر سرعت واکنش قرص جوشان)",
              "شکل ۱۱ (مقایسه آهنگ فرایندها)",
              "شکل ۱۲ (انواع واکنش‌ها)"
            ],
            "important_examples": [
              "اثر دما بر پختن غذا",
              "اثر غلظت بر سرعت واکنش",
              "اثر سطح تماس بر سوختن زغال"
            ],
            "real_life_examples": [
              "نگهداری مواد غذایی در یخچال (کاهش دما)",
              "استفاده از پودر (افزایش سطح تماس)",
              "آنزیم‌ها در بدن (کاتالیزگر)"
            ]
          }
        },
        {
          "id": "c2t7",
          "title": "سرعت متوسط واکنش و محاسبات آن",
          "core_knowledge": {
            "explanation": "سرعت متوسط یک واکنش، تغییر مقدار یک ماده شرکت‌کننده (واکنش‌دهنده یا فراورده) در یک بازه زمانی مشخص است. برای واکنش‌دهنده‌ها، سرعت متوسط به صورت منفی (چون مقدار آنها کاهش می‌یابد) و برای فراورده‌ها به صورت مثبت (چون مقدار آنها افزایش می‌یابد) بیان می‌شود. با استفاده از ضرایب استوکیومتری، می‌توان سرعت متوسط یک ماده را به ماده دیگر مرتبط کرد.",
            "complete_definition": "سرعت متوسط (Average Rate) یک واکنش، نسبت تغییر غلظت (یا مول) یک واکنش‌دهنده یا فراورده به بازه زمانی است. برای واکنش‌دهنده‌ها، این کمیت با علامت منفی (زیرا غلظت آنها کاهش می‌یابد) و برای فراورده‌ها با علامت مثبت (زیرا غلظت آنها افزایش می‌یابد) بیان می‌شود.",
            "key_concepts": [
              "سرعت متوسط",
              "نمودار مول-زمان",
              "ضریب استوکیومتری",
              "رابطه سرعت",
              "غلظت مولی"
            ],
            "terminology": {
              "سرعت متوسط": "تغییر غلظت یا مول ماده شرکت‌کننده در یک بازه زمانی معین.",
              "نمودار مول-زمان": "نموداری که تغییرات مقدار ماده را بر حسب زمان نشان می‌دهد.",
              "رابطه سرعت": "رابطه‌ای که سرعت مصرف واکنش‌دهنده‌ها و تولید فراورده‌ها را بر اساس ضرایب استوکیومتری به هم مرتبط می‌کند."
            },
            "formulas": {
              "برای واکنش aA + bB → cC + dD": "- (1/a) (Δ[A]/Δt) = - (1/b) (Δ[B]/Δt) = (1/c) (Δ[C]/Δt) = (1/d) (Δ[D]/Δt)"
            },
            "laws": null,
            "principles": [
              "سرعت مصرف واکنش‌دهنده‌ها به نسبت ضرایب استوکیومتری آنهاست.",
              "سرعت تولید فراورده‌ها به نسبت ضرایب استوکیومتری آنهاست.",
              "شیب نمودار مول-زمان، بیانگر سرعت واکنش است."
            ],
            "processes": [
              "محاسبه سرعت متوسط از روی تغییر مول‌ها در یک بازه زمانی",
              "استفاده از ضرایب استوکیومتری برای یافتن سرعت مواد مختلف"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "عوامل مؤثر بر سرعت",
              "موازنه معادلات",
              "مول"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک مول و موازنه"
            ],
            "required_background": null,
            "builds_upon": [
              "عوامل مؤثر بر سرعت",
              "استوکیومتری"
            ],
            "enables_learning_of": [
              "سینتیک پیشرفته"
            ]
          },
          "relationships": {
            "related_topics": [
              "استوکیومتری"
            ],
            "similar_concepts": [
              "سرعت لحظه‌ای"
            ],
            "differences": [
              "سرعت متوسط در یک بازه زمانی، سرعت لحظه‌ای در یک زمان خاص است."
            ],
            "frequently_confused_with": [
              "سرعت واکنش به طور کلی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
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
              "محاسبه سرعت متوسط از نمودار مول-زمان",
              "محاسبه سرعت متوسط از روی داده‌های جدول",
              "استفاده از ضرایب استوکیومتری",
              "تشخیص رابطه سرعت"
            ],
            "hidden_points": [
              "علامت منفی برای مصرف واکنش‌دهنده‌ها"
            ],
            "trick_points": [
              "سوالاتی که نیاز به محاسبه از روی شیب نمودار دارند."
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "مسئله"
            ],
            "conceptual_question_types": [
              "رابطه سرعت"
            ],
            "calculation_question_types": [
              "محاسبه سرعت متوسط از روی داده‌ها"
            ],
            "analytical_question_types": [
              "تحلیل نمودار مول-زمان"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن علامت منفی برای واکنش‌دهنده‌ها",
              "استفاده از ضرایب استوکیومتری اشتباه",
              "اشتباه در محاسبه Δn و Δt"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "رسم رابطه بین سرعت مواد مختلف",
              "محاسبه از روی نمودار"
            ],
            "warning_points": [
              "برای واکنش‌دهنده‌ها، سرعت متوسط را با علامت منفی می‌نویسیم.",
              "ضرایب استوکیومتری در تعیین روابط سرعت نقش دارند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهارت محاسباتی مهم در سینتیک.",
            "study_strategy": "تمرین با داده‌های جدولی و نموداری",
            "review_strategy": "مرور روزانه و حل مسائل جدید",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "سرعت متوسط = تغییر مول / تغییر زمان.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "شیب خط در نمودار مول-زمان، سرعت متوسط را نشان می‌دهد."
          },
          "examples": {
            "textbook_examples": [
              "جدول جرم CO2 (واکنش CaCO3 با HCl)",
              "نمودار ۸ (مول-زمان برای CaCl2)",
              "مثال خود را بیازمایید (مول‌های رنگ غذا)"
            ],
            "important_examples": [
              "محاسبه سرعت متوسط از روی داده‌های جدول",
              "محاسبه R برای SO2 و SO3"
            ],
            "real_life_examples": []
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "پوشاک، نیازی پایان ناپذیر",
      "chapter_objectives": [
        "آشنایی با درشت مولکول‌ها و مفهوم پلیمر",
        "بررسی واکنش پلیمری شدن و ساختار پلیمرها",
        "آشنایی با گروه‌های عاملی (استر، آمید، هیدروکسیل، کربوکسیل)",
        "بررسی واکنش استری شدن و تولید پلی استر و پلی آمید",
        "درک آب‌کافت پلیمرها و پایداری آنها در محیط زیست"
      ],
      "overall_difficulty": 7,
      "overall_importance": 8,
      "topics": [
        {
          "id": "c3t1",
          "title": "درشت مولکول‌ها (پلیمرها)",
          "core_knowledge": {
            "explanation": "درشت مولکول‌ها، مولکول‌هایی با جرم مولی بسیار بالا (ده‌ها هزار گرم بر مول) هستند که از اتصال تعداد زیادی از واحدهای کوچک‌تر (مونومر) به یکدیگر تشکیل شده‌اند. سلولز، نشاسته، پروتئین‌ها و پلیمرهای ساختگی مانند پلی‌اتن و نایلون نمونه‌هایی از درشت مولکول‌ها هستند.",
            "complete_definition": "درشت مولکول (ماکرومولکول) به مولکولی گفته می‌شود که جرم مولی بالایی دارد و از به هم پیوستن تعداد زیادی مونومر (تک‌پار) تشکیل شده است. پلیمرها زیرمجموعه‌ای از درشت مولکول‌ها هستند که از واکنش پلیمری شدن به دست می‌آیند.",
            "key_concepts": [
              "درشت مولکول",
              "پلیمر",
              "مونومر",
              "تک‌پار",
              "جرم مولی زیاد"
            ],
            "terminology": {
              "درشت مولکول": "مولکولی با جرم مولی بالا (معمولاً > 10,000 g/mol).",
              "پلیمر": "ماده‌ای که از به هم پیوستن تعداد زیادی مونومر تشکیل شده است.",
              "مونومر": "مولکول کوچکی که واحد سازنده پلیمر است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "درشت مولکول‌ها از تکرار واحدهای ساده‌تر ساخته می‌شوند.",
              "خواص فیزیکی درشت مولکول‌ها به جرم مولی و نیروهای بین مولکولی آنها بستگی دارد."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مول و جرم مولی (شیمی دهم)"
            ],
            "next_topics": [
              "c3t2"
            ],
            "concept_dependencies": [
              "نیاز به درک جرم مولی"
            ],
            "required_background": null,
            "builds_upon": [
              "ترکیبات آلی"
            ],
            "enables_learning_of": [
              "شیمی پلیمرها"
            ]
          },
          "relationships": {
            "related_topics": [
              "پلیمرها",
              "شیمی آلی"
            ],
            "similar_concepts": [
              "الیاف طبیعی"
            ],
            "differences": [
              "درشت مولکول‌ها می‌توانند طبیعی یا ساختگی باشند."
            ],
            "frequently_confused_with": [
              "پلیمرها (اغلب به جای هم استفاده می‌شوند)"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1H",
            "review_interval": "P10D",
            "forgetting_risk": 4,
            "difficulty_score": 3,
            "importance_score": 5,
            "reasoning_load": 3,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "تعریف درشت مولکول",
              "تشخیص درشت مولکول از روی جرم مولی",
              "نمونه‌هایی از درشت مولکول‌ها"
            ],
            "hidden_points": [],
            "trick_points": [],
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
              "اشتباه در تشخیص درشت مولکول‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مقدمه‌ای برای پلیمرها.",
            "study_strategy": "مطالعه نمونه‌ها و تفاوت آنها با مولکول‌های کوچک",
            "review_strategy": "مرور هر 10 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "c3t2"
          },
          "memory_support": {
            "memory_tips": "پلیمر = تعداد زیادی مونومر به هم متصل.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "یک زنجیر بلند از حلقه‌های فلزی که هر حلقه یک مونومر است."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳ (سلولز)",
              "جدول مقایسه جرم مولی مواد"
            ],
            "important_examples": [
              "سلولز (از 3000 گلوکز)",
              "پلی‌اتن"
            ],
            "real_life_examples": [
              "پنبه (سلولز)",
              "پشم (پروتئین)",
              "پلاستیک‌ها"
            ]
          }
        },
        {
          "id": "c3t2",
          "title": "پلیمری شدن (بسپارش)",
          "core_knowledge": {
            "explanation": "پلیمری شدن واکنشی است که در آن مونومرها (مولکول‌های کوچک) به یکدیگر متصل می‌شوند و زنجیرهای بلندی به نام پلیمر تشکیل می‌دهند. در پلیمری شدن افزایشی (که در کتاب مطرح شده)، پیوند دوگانه مونومرها شکسته شده و به یکدیگر افزوده می‌شوند. مهم‌ترین مثال این نوع پلیمری شدن، تبدیل اتن به پلی‌اتن است.",
            "complete_definition": "پلیمری شدن (بسپارش) فرایندی است که در آن مولکول‌های کوچک (مونومرها) با یکدیگر واکنش داده و مولکول‌های بزرگ‌تری به نام پلیمر (بسپار) تولید می‌کنند. در پلیمری شدن افزایشی، مونومرها از طریق شکسته شدن پیوند دوگانه و ایجاد پیوندهای یگانه جدید به هم متصل می‌شوند.",
            "key_concepts": [
              "پلیمری شدن",
              "مونومر",
              "پلیمر",
              "واحد تکرارشونده",
              "پلی‌اتن",
              "اتن"
            ],
            "terminology": {
              "پلیمری شدن (بسپارش)": "واکنش تشکیل پلیمر از مونومرها.",
              "واحد تکرارشونده": "بخشی از پلیمر که به طور مکرر در طول زنجیر تکرار می‌شود."
            },
            "formulas": {
              "پلیمری شدن اتن": "n CH2=CH2 → (CH2-CH2)n"
            },
            "laws": null,
            "principles": [
              "در پلیمری شدن افزایشی، پیوند دوگانه مونومر شکسته می‌شود.",
              "پلیمر از تکرار یک واحد (مونومر) تشکیل می‌شود.",
              "فرمول مولکولی دقیق پلیمر مشخص نیست (به دلیل تعداد متغیر مونومرها)."
            ],
            "processes": [
              "شکستن پیوند دوگانه در مونومر",
              "اتصال مونومرها به یکدیگر از طریق پیوندهای یگانه",
              "تشکیل زنجیر بلند پلیمری"
            ],
            "mechanisms": null,
            "reaction_types": [
              "پلیمری شدن (افزایشی)"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آلکن‌ها",
              "پیوند کووالانسی"
            ],
            "next_topics": [
              "c3t3",
              "c3t4"
            ],
            "concept_dependencies": [
              "نیاز به درک آلکن‌ها و پیوند دوگانه"
            ],
            "required_background": null,
            "builds_upon": [
              "آلکن‌ها"
            ],
            "enables_learning_of": [
              "پلی‌اتن",
              "پلی‌وینیل کلرید"
            ]
          },
          "relationships": {
            "related_topics": [
              "پلیمرها",
              "شیمی صنعتی"
            ],
            "similar_concepts": [
              "پلیمری شدن تراکمی"
            ],
            "differences": [
              "پلیمری شدن افزایشی (مطرح شده) با شکستن پیوند دوگانه، پلیمری شدن تراکمی با از دست دادن یک مولکول کوچک (مثل آب) انجام می‌شود."
            ],
            "frequently_confused_with": [
              "پلیمری شدن تراکمی"
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
              "تعریف پلیمری شدن",
              "تشخیص مونومر و پلیمر",
              "واکنش پلیمری شدن اتن",
              "نوشتن معادله پلیمری شدن",
              "تشخیص واحد تکرارشونده"
            ],
            "hidden_points": [
              "نقش پیوند دوگانه در پلیمری شدن"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص مونومر از روی پلیمر و بالعکس"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "نوشتن معادله"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص مونومر از پلیمر",
              "ناتوانی در نوشتن معادله پلیمری شدن",
              "تشخیص ندادن واحد تکرارشونده"
            ],
            "misconceptions": [
              "پلیمری شدن فقط برای اتن اتفاق می‌افتد."
            ],
            "difficult_parts": [
              "تشخیص واحد تکرارشونده در پلیمر",
              "نوشتن ساختار پلیمر از روی مونومر"
            ],
            "warning_points": [
              "برای پلیمرها فرمول مولکولی دقیق وجود ندارد (به جز واحد تکرارشونده)."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مبنای تولید پلاستیک‌ها و الیاف مصنوعی.",
            "study_strategy": "تمرین تبدیل مونومر به پلیمر و برعکس",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "c3t3"
          },
          "memory_support": {
            "memory_tips": "اتن (CH2=CH2) → پلی‌اتن (-CH2-CH2-)n.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مونومرها مانند مهره‌هایی هستند که به یک نخ (زنجیر پلیمری) متصل می‌شوند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴ (تشکیل پلی‌اتن)",
              "شکل ۵ (الگوی تشکیل پلیمر)",
              "جدول خود را بیازمایید (مونومر و پلیمر)"
            ],
            "important_examples": [
              "پلی‌اتن (از اتن)",
              "تفلون (از تترافلوئورواتن)",
              "پلی‌وینیل کلرید (PVC)"
            ],
            "real_life_examples": [
              "کیسه‌های پلاستیکی (پلی‌اتن)",
              "ظروف نچسب (تفلون)",
              "لوله‌های PVC"
            ]
          }
        },
        {
          "id": "c3t3",
          "title": "پلی استرها و پلی آمیدها",
          "core_knowledge": {
            "explanation": "پلی استرها و پلی آمیدها دسته‌های مهمی از پلیمرهای ساختگی هستند که از واکنش تراکمی (استری شدن یا آمید شدن) به دست می‌آیند. پلی استرها از واکنش دی‌اسیدها با دی‌الکل‌ها و پلی آمیدها از واکنش دی‌اسیدها با دی‌آمین‌ها تولید می‌شوند. این پلیمرها در صنعت نساجی و تولید الیاف کاربرد فراوانی دارند.",
            "complete_definition": "پلی استرها، پلیمرهایی هستند که گروه عاملی استر (-COO-) را در زنجیر اصلی خود دارند و از واکنش تراکمی اسیدهای کربوکسیلیک با الکل‌ها به دست می‌آیند. پلی آمیدها نیز دارای گروه عاملی آمید (-CONH-) هستند و از واکنش اسیدهای کربوکسیلیک با آمین‌ها تولید می‌شوند.",
            "key_concepts": [
              "پلی استر",
              "پلی آمید",
              "گروه استر",
              "گروه آمید",
              "واکنش استری شدن",
              "واکنش آمید شدن",
              "الیاف مصنوعی"
            ],
            "terminology": {
              "استر": "ترکیبی با گروه عاملی -COO- که از واکنش یک اسید کربوکسیلیک با یک الکل به دست می‌آید.",
              "آمید": "ترکیبی با گروه عاملی -CONH- که از واکنش یک اسید کربوکسیلیک با یک آمین به دست می‌آید.",
              "پلی استر": "پلیمری با گروه‌های استر در زنجیر اصلی.",
              "پلی آمید": "پلیمری با گروه‌های آمید در زنجیر اصلی."
            },
            "formulas": {
              "واکنش استری شدن": "R-COOH + R'-OH → R-COO-R' + H2O",
              "واکنش آمید شدن": "R-COOH + R'-NH2 → R-CONH-R' + H2O"
            },
            "laws": null,
            "principles": [
              "پلی استرها از واکنش اسیدهای دو عاملی و الکل‌های دو عاملی ساخته می‌شوند.",
              "پلی آمیدها از واکنش اسیدهای دو عاملی و آمین‌های دو عاملی ساخته می‌شوند.",
              "در این واکنش‌ها، یک مولکول آب حذف می‌شود (پلیمری شدن تراکمی)."
            ],
            "processes": [
              "تشکیل استر",
              "تشکیل آمید",
              "تشکیل پلی استر",
              "تشکیل پلی آمید"
            ],
            "mechanisms": null,
            "reaction_types": [
              "استری شدن",
              "آمید شدن",
              "پلیمری شدن تراکمی"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "گروه‌های عاملی (کربوکسیل، هیدروکسیل، آمین)",
              "پلیمری شدن"
            ],
            "next_topics": [
              "c3t4"
            ],
            "concept_dependencies": [
              "نیاز به درک گروه‌های عاملی"
            ],
            "required_background": null,
            "builds_upon": [
              "گروه‌های عاملی",
              "پلیمری شدن"
            ],
            "enables_learning_of": [
              "الیاف مصنوعی",
              "پلیمرهای سبز"
            ]
          },
          "relationships": {
            "related_topics": [
              "گروه‌های عاملی",
              "شیمی پلیمر"
            ],
            "similar_concepts": [
              "پلی‌اتن (پلیمر افزایشی)"
            ],
            "differences": [
              "پلی استر و پلی آمید از واکنش تراکمی (با حذف آب) ساخته می‌شوند، پلی‌اتن از پلیمری شدن افزایشی (بدون حذف آب).",
              "پلی استرها دارای گروه استر، پلی آمیدها دارای گروه آمید هستند."
            ],
            "frequently_confused_with": [
              "پلی‌اتن",
              "پلی‌پروپیلن"
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
            "probability_in_exam": 60,
            "exam_points": [
              "تشخیص پلی استر و پلی آمید از روی ساختار",
              "نوشتن واکنش استری شدن و آمید شدن",
              "تشخیص مونومرهای پلی استر و پلی آمید",
              "کاربردهای پلی استر و پلی آمید"
            ],
            "hidden_points": [
              "نقش گروه عاملی در خواص پلیمر"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع پلیمر از روی گروه عاملی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "نام‌گذاری گروه عاملی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل ساختار پلیمر و مونومرهای آن"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص گروه عاملی استر و آمید",
              "ناتوانی در تشخیص مونومرها از روی پلیمر",
              "فراموش کردن حذف آب در واکنش استری شدن"
            ],
            "misconceptions": [
              "همه پلیمرها از طریق شکستن پیوند دوگانه ساخته می‌شوند."
            ],
            "difficult_parts": [
              "تشخیص گروه‌های عاملی در پلیمر",
              "تشخیص مونومرهای سازنده پلی استر و پلی آمید"
            ],
            "warning_points": [
              "در پلیمری شدن تراکمی، یک مولکول کوچک (معمولاً آب) حذف می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پلیمرهای مهم صنعتی با کاربرد گسترده.",
            "study_strategy": "مقایسه پلی استرها و پلی آمیدها و تشخیص گروه‌های عاملی آنها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "c3t4"
          },
          "memory_support": {
            "memory_tips": "استر = اسید + الکل → -COO-. آمید = اسید + آمین → -CONH-.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "پلی استرها مانند زنجیرهایی هستند که با حلقه‌های استر (COO) و پلی آمیدها با حلقه‌های آمید (CONH) به هم وصل شده‌اند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۹ (ساختار کلی پلی استر)",
              "شکل ۱۰ (اتیل بوتانوات)",
              "شکل ۱۴ (تشکیل پلی استر)",
              "شکل ۱۷ (تشکیل پلی آمید)"
            ],
            "important_examples": [
              "پلی‌اتیلن ترفتالات (PET)",
              "نایلون",
              "کولار"
            ],
            "real_life_examples": [
              "لباس‌های پلی استری",
              "جلیقه ضدگلوله (کولار)",
              "بطری‌های نوشیدنی (PET)"
            ]
          }
        },
        {
          "id": "c3t4",
          "title": "پایداری پلیمرها و تخریب آنها در طبیعت",
          "core_knowledge": {
            "explanation": "پلیمرهای حاصل از هیدروکربن‌های سیرنشده (مانند پلی‌اتن و پلی‌پروپیلن) به دلیل ساختار سیرشده و واکنش‌پذیری کم، در طبیعت تجزیه نمی‌شوند و ماندگار هستند. اما پلی استرها و پلی آمیدها می‌توانند در شرایط مناسب (آب‌کافت) به مونومرهای خود تجزیه شوند. پلیمرهای زیست تخریب‌پذیر (مانند پلی الکتیک اسید) به عنوان جایگزینی مناسب برای پلیمرهای نفتی مطرح هستند.",
            "complete_definition": "پایداری پلیمرها به ساختار شیمیایی آنها بستگی دارد. پلیمرهای اشباع (با ساختار آلکانی) در طبیعت بسیار پایدار و مقاوم هستند و به سختی تجزیه می‌شوند. پلیمرهای زیست تخریب‌پذیر (مانند PLA) می‌توانند توسط میکروارگانیسم‌ها به مولکول‌های ساده‌تر مانند آب و CO2 تجزیه شوند.",
            "key_concepts": [
              "پایداری پلیمر",
              "تخریب پذیری",
              "زیست تخریب پذیری",
              "آب‌کافت",
              "پلیمر سبز",
              "پلی الکتیک اسید (PLA)"
            ],
            "terminology": {
              "زیست تخریب‌پذیر": "پلیمری که توسط میکروارگانیسم‌ها در طبیعت تجزیه می‌شود.",
              "آب‌کافت": "واکنش تجزیه یک ترکیب در اثر واکنش با آب.",
              "پلیمر سبز": "پلیمری که از منابع تجدیدپذیر ساخته شده و زیست تخریب‌پذیر است."
            },
            "formulas": {
              "آب‌کافت استر": "R-COO-R' + H2O → R-COOH + R'-OH"
            },
            "laws": null,
            "principles": [
              "پلیمرهای اشباع (آلکانی) ماندگار و غیرقابل تجزیه زیستی هستند.",
              "پلی استرها و پلی آمیدها با آب‌کافت به مونومرهای خود تجزیه می‌شوند.",
              "پلیمرهای زیست تخریب‌پذیر از منابع تجدیدپذیر (مانند نشاسته) ساخته می‌شوند."
            ],
            "processes": [
              "آب‌کافت پلی استرها",
              "آب‌کافت پلی آمیدها",
              "تخریب توسط میکروارگانیسم‌ها"
            ],
            "mechanisms": null,
            "reaction_types": [
              "آب‌کافت",
              "تجزیه"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "پلی استرها",
              "پلی آمیدها",
              "آلکان‌ها"
            ],
            "next_topics": [],
            "concept_dependencies": [
              "نیاز به درک ساختار پلیمرها"
            ],
            "required_background": null,
            "builds_upon": [
              "پلی استرها و پلی آمیدها"
            ],
            "enables_learning_of": [
              "شیمی سبز",
              "محیط زیست"
            ]
          },
          "relationships": {
            "related_topics": [
              "شیمی سبز",
              "محیط زیست",
              "بازیافت"
            ],
            "similar_concepts": [
              "پایداری حرارتی"
            ],
            "differences": [
              "تخریب پذیری زیستی، پایداری در برابر عوامل محیطی است."
            ],
            "frequently_confused_with": [
              "پایداری شیمیایی"
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
              "تشخیص پلیمرهای ماندگار و تخریب‌پذیر",
              "دلیل ماندگاری پلی‌اتن",
              "توضیح آب‌کافت پلی استرها",
              "معرفی پلیمرهای سبز"
            ],
            "hidden_points": [
              "آب‌کافت در محیط زیست و بدن"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "توضیح علت"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل اثرات زیست‌محیطی پلیمرها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در توضیح دلیل ماندگاری پلی‌اتن",
              "اشتباه در تشخیص پلیمرهای زیست تخریب‌پذیر"
            ],
            "misconceptions": [
              "همه پلیمرها در طبیعت تجزیه می‌شوند."
            ],
            "difficult_parts": [
              "توضیح آب‌کافت پلی استرها",
              "مقایسه تخریب‌پذیری پلیمرهای مختلف"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد شیمی در محیط زیست.",
            "study_strategy": "مقایسه انواع پلیمرها از نظر پایداری",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "پلی‌اتن = ماندگار. پلی استر = آب‌کافت می‌شود. PLA = زیست تخریب‌پذیر.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "پلی‌اتن را مانند یک سنگ، و پلی استر را مانند یک ماده آلی که در خاک تجزیه می‌شود، تصور کنید."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۹ (تبدیل نشاسته به گلوکز)",
              "آب‌کافت اتیل بوتانوات",
              "شکل ۲۰ (تجزیه پلی استر و پلی آمید)"
            ],
            "important_examples": [
              "تجزیه نشاسته در دهان",
              "تخریب لباس‌های نخی در محیط مرطوب"
            ],
            "real_life_examples": [
              "تخریب پلاستیک‌ها در طبیعت",
              "پلاستیک‌های سبز (PLA)",
              "بازیافت پلیمرها"
            ]
          }
        }
      ]
    }
  ]
};

export default { CHEMISTRY_11_KB };
