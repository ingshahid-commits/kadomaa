/**
 * biology12.js  —  Kadoma knowledge base
 * -----------------------------------------------------------------------
 * Source: user-provided biology (grade 12) knowledge-graph export, full
 * 9-chapter version (replaces an earlier incomplete import that was
 * missing chapters 3, 4, 5 and 8). Uses the "chapters" array key (same
 * convention as biology11.js - curriculumAdapter.js's getChapterList()
 * already normalizes the biology10.js "knowledge_base" vs
 * biology11/12.js "chapters" key difference, so this must stay
 * "chapters" to match the existing biology12.js shape other code/tests
 * already depend on). Topics were grouped into their chapter by matching
 * the topic id prefix (e.g. "t3_2" -> chapter_number 3) to chapter_number
 * - every field preserved verbatim, only the grouping changed.
 * -----------------------------------------------------------------------
 */
export const BIOLOGY_12_KB = {
  "textbook_metadata": {
    "title": "زیست‌شناسی (پایه دوازدهم)",
    "grade": "پایه دوازدهم",
    "branch": "علوم تجربی"
  },
  "chapters": [
    {
      "chapter_number": 1,
      "chapter_title": "مولکول‌های اطلاعاتی",
      "chapter_objectives": [
        "شناخت تاریخچه کشف دنا به عنوان ماده وراثتی",
        "درک ساختار نوکلئیک اسیدها (دنا و رنا)",
        "بررسی مدل واتسون و کریک برای دنا",
        "آشنایی با انواع رنا و نقش آنها",
        "درک فرایند همانندسازی دنا (نیمه حفاظتی)",
        "شناخت ساختار و سطوح مختلف پروتئین‌ها",
        "بررسی ساختار و عملکرد آنزیم‌ها"
      ],
      "estimated_total_learning_time": "PT14H",
      "overall_difficulty": 8,
      "overall_importance": 10,
      "prerequisite_chapters": [
        "زیست شناسی دهم (ساختار یاخته)",
        "زیست شناسی یازدهم (ژن و کروموزوم)"
      ],
      "next_chapters": [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "topics": [
        {
          "id": "t1_1",
          "title": "نوکلئیک اسیدها و کشف دنا به عنوان ماده وراثتی",
          "core_knowledge": {
            "explanation": "دنا (DNA) ماده اصلی ذخیره‌کننده اطلاعات وراثتی در یاخته‌ها است. کشف این موضوع نتیجه آزمایش‌های گریفیت، ایوری و همکارانش بود که نشان دادند دنا، و نه پروتئین، عامل انتقال صفات در باکتری‌هاست.",
            "complete_definition": "دنا (دئوکسی‌ریبونوکلئیک اسید) یک پلیمر از نوکلئوتیدها است که اطلاعات ژنتیکی را در خود ذخیره می‌کند. آزمایش گریفیت (1928) نشان داد که خصوصیات یک باکتری به باکتری دیگر قابل انتقال است. آزمایش ایوری و همکاران (1944) ثابت کرد که عامل انتقال دهنده صفات، دنا است.",
            "key_concepts": [
              "نوکلئیک اسید",
              "دنا (DNA)",
              "ماده وراثتی",
              "آزمایش گریفیت",
              "آزمایش ایوری",
              "باکتری پوشینه‌دار",
              "باکتری بدون پوشینه",
              "انتقال صفت"
            ],
            "terminology": {
              "نوکلئیک اسید": "پلیمری از نوکلئوتیدها که شامل دنا و رنا است.",
              "دنا": "ماده وراثتی اصلی در یاخته‌ها",
              "پوشینه (کپسول)": "لایه خارجی در برخی باکتری‌ها که بیماری‌زا بودن را تعیین می‌کند.",
              "همسانه‌سازی": "تولید نسخه‌های متعدد از یک قطعه دنا"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "دنا ماده وراثتی در تمام موجودات زنده است.",
              "اطلاعات وراثتی به صورت رمز در توالی نوکلئوتیدهای دنا ذخیره شده است."
            ],
            "processes": [
              "آزمایش گریفیت: تزریق باکتری پوشینه‌دار (زنده یا کشته شده) و بدون پوشینه به موش",
              "آزمایش ایوری: تخریب پروتئین‌ها و نوکلئیک اسیدها برای شناسایی ماده انتقال دهنده"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار باکتری",
              "مفاهیم وراثت"
            ],
            "next_topics": [
              "t1_2",
              "t1_3"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار یاخته و باکتری"
            ],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "ساختار دنا",
              "همانندسازی"
            ]
          },
          "relationships": {
            "related_topics": [
              "ساختار نوکلئوتید",
              "همانندسازی"
            ],
            "similar_concepts": [
              "آزمایش مزلسون و استال"
            ],
            "differences": null,
            "frequently_confused_with": [
              "پروتئین به عنوان ماده وراثتی"
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
            "probability_in_exam": 60,
            "exam_points": [
              "ترتیب آزمایش‌های گریفیت",
              "نتیجه آزمایش گریفیت",
              "نتیجه آزمایش ایوری",
              "تشخیص ماده وراثتی"
            ],
            "hidden_points": [
              "دلیل استفاده از باکتری پوشینه‌دار و بدون پوشینه"
            ],
            "trick_points": [
              "سوالات مربوط به تفسیر آزمایش‌ها"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تحلیل آزمایش"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تشخیص علت مرگ موش در آزمایش گریفیت"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نتیجه آزمایش گریفیت",
              "ناتوانی در تشخیص عامل انتقال دهنده"
            ],
            "misconceptions": [
              "پروتئین ماده وراثتی است."
            ],
            "difficult_parts": [
              "درک منطق آزمایش ایوری"
            ],
            "warning_points": [
              "دنا ماده وراثتی است، نه پروتئین."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای و مفهومی، برای درک اهمیت دنا ضروری است.",
            "study_strategy": "مطالعه دقیق آزمایش‌ها و نتایج آنها",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_2"
          },
          "memory_support": {
            "memory_tips": "گریفیت (انتقال صفت) ← ایوری (دنا عامل انتقال است)",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تصویر باکتری‌های پوشینه‌دار و بدون پوشینه و نتایج تزریق به موش."
          },
          "examples": {
            "textbook_examples": [
              "آزمایش گریفیت (شکل ۲)",
              "آزمایش ایوری"
            ],
            "important_examples": [
              "انتقال صفت پوشینه‌دار بودن در باکتری"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_2",
          "title": "ساختار نوکلئوتید و نوکلئیک اسیدها",
          "core_knowledge": {
            "explanation": "نوکلئوتیدها واحدهای سازنده نوکلئیک اسیدها هستند. هر نوکلئوتید از یک قند پنج کربنه، یک باز آلی نیتروژن‌دار و یک یا چند گروه فسفات تشکیل شده است. دنا دارای قند دئوکسی‌ریبوز و رنا دارای قند ریبوز است. بازهای آلی شامل پورین‌ها (آدنین و گوانین) و پیریمیدین‌ها (تیمین، سیتوزین و یوراسیل) هستند.",
            "complete_definition": "نوکلئوتید، مونومر سازنده نوکلئیک اسیدها است و از سه بخش ساخته شده: 1) قند پنج کربنه (ریبوز در رنا، دئوکسی‌ریبوز در دنا)، 2) باز آلی نیتروژن‌دار (پورین یا پیریمیدین)، 3) گروه فسفات. نوکلئوتیدها با پیوند فسفودی‌استر به یکدیگر متصل می‌شوند و رشته‌های پلی‌نوکلئوتیدی را می‌سازند.",
            "key_concepts": [
              "نوکلئوتید",
              "پورین",
              "پیریمیدین",
              "آدنین (A)",
              "تیمین (T)",
              "گوانین (G)",
              "سیتوزین (C)",
              "یوراسیل (U)",
              "دئوکسی‌ریبوز",
              "ریبوز",
              "پیوند فسفودی‌استر"
            ],
            "terminology": {
              "نوکلئوتید": "واحد سازنده نوکلئیک اسیدها",
              "پورین": "باز آلی دو حلقه‌ای (آدنین و گوانین)",
              "پیریمیدین": "باز آلی تک حلقه‌ای (تیمین، سیتوزین، یوراسیل)",
              "پیوند فسفودی‌استر": "پیوندی که نوکلئوتیدها را در یک رشته به هم متصل می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "قند موجود در دنا دئوکسی‌ریبوز و در رنا ریبوز است.",
              "در دنا به جای یوراسیل، تیمین وجود دارد."
            ],
            "processes": [
              "تشکیل پیوند فسفودی‌استر بین نوکلئوتیدها"
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
              "نیاز به درک ساختار مولکول‌های آلی"
            ],
            "required_background": null,
            "builds_upon": [
              "مولکول‌های زیستی"
            ],
            "enables_learning_of": [
              "مدل دنا",
              "همانندسازی"
            ]
          },
          "relationships": {
            "related_topics": [
              "ساختار دنا",
              "ساختار رنا"
            ],
            "similar_concepts": [
              "آمینواسید (واحد سازنده پروتئین)"
            ],
            "differences": [
              "نوکلئوتیدها شامل قند، باز و فسفات هستند."
            ],
            "frequently_confused_with": [
              "نوکلئوزید"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 5,
            "importance_score": 8,
            "reasoning_load": 4,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تشخیص اجزای نوکلئوتید",
              "تشخیص بازهای پورین و پیریمیدین",
              "تشخیص دنا از رنا",
              "تشخیص پیوند فسفودی‌استر"
            ],
            "hidden_points": [
              "تعداد پیوندهای هیدروژنی بین بازها (A-T = 2, G-C = 3)"
            ],
            "trick_points": [
              "سوالات مربوط به تفاوت دنا و رنا"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص و تطبیق"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص بازهای پورین و پیریمیدین",
              "فراموش کردن تفاوت قند در دنا و رنا",
              "اشتباه در تشخیص جایگاه تیمین و یوراسیل"
            ],
            "misconceptions": [
              "همه بازها در هر دو دنا و رنا وجود دارند."
            ],
            "difficult_parts": [
              "تشخیص بازهای آلی و نسبت آنها"
            ],
            "warning_points": [
              "در رنا به جای تیمین، یوراسیل قرار دارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای درک وراثت مولکولی.",
            "study_strategy": "حفظ و تمرین تشخیص اجزای نوکلئوتید",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_3"
          },
          "memory_support": {
            "memory_tips": "پورین‌ها: آدنین (A) و گوانین (G) (دو حلقه‌ای). پیریمیدین‌ها: تیمین (T)، سیتوزین (C) و یوراسیل (U) (تک حلقه‌ای).",
            "mnemonic_devices": "پورین = بزرگ (دو حلقه)، پیریمیدین = کوچک (تک حلقه).",
            "visual_imagination_tips": "تصویر یک نوکلئوتید با سه بخش قند، باز و فسفات."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۳ (اجزای نوکلئوتید)",
              "جدول بازهای آلی"
            ],
            "important_examples": [
              "تفاوت دنا و رنا در قند و باز"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_3",
          "title": "مدل واتسون و کریک برای دنا",
          "core_knowledge": {
            "explanation": "واتسون و کریک در سال 1953 مدل مارپیچ دو رشته‌ای را برای دنا ارائه کردند. در این مدل، دو رشته پلی‌نوکلئوتیدی به دور محوری فرضی پیچیده شده‌اند. بازهای آلی به صورت مکمل (A با T و G با C) با پیوندهای هیدروژنی روبروی هم قرار می‌گیرند و ستون‌های نردبان را قند و فسفات و پله‌ها را بازها تشکیل می‌دهند. این مدل بر پایه داده‌های چارگاف (تساوی A=T و G=C) و تصاویر پرتو ایکس فرانکلین و ویلکینز بنا شده است.",
            "complete_definition": "مدل واتسون و کریک: دنا یک مارپیچ دو رشته‌ای است که در آن دو رشته پلی‌نوکلئوتیدی به دور هم پیچیده شده‌اند. بین بازهای آلی روبروی هم پیوند هیدروژنی برقرار است: A با T (2 پیوند) و G با C (3 پیوند). این جفت شدن مکمل، باعث می‌شود قطر مارپیچ در تمام طول یکسان باشد و ترتیب نوکلئوتیدهای یک رشته، ترتیب رشته دیگر را مشخص کند.",
            "key_concepts": [
              "مدل واتسون و کریک",
              "مارپیچ دو رشته‌ای",
              "جفت بازهای مکمل (A-T, G-C)",
              "پیوند هیدروژنی",
              "چارگاف",
              "فرانکلین",
              "ویلکینز"
            ],
            "terminology": {
              "مارپیچ دو رشته‌ای": "ساختار فضایی دنا",
              "جفت باز مکمل": "A-T و G-C",
              "پیوند هیدروژنی": "پیوند ضعیفی که دو رشته دنا را در مقابل هم نگه می‌دارد."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در دنا، تعداد A برابر با T و تعداد G برابر با C است (قانون چارگاف).",
              "جفت شدن بازها به صورت مکمل است.",
              "پیوندهای هیدروژنی بین بازها، دو رشته را به هم متصل می‌کنند."
            ],
            "processes": null,
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_2"
            ],
            "next_topics": [
              "t1_4",
              "t2_1"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار نوکلئوتید"
            ],
            "required_background": null,
            "builds_upon": [
              "ساختار نوکلئوتید"
            ],
            "enables_learning_of": [
              "همانندسازی",
              "رونویسی"
            ]
          },
          "relationships": {
            "related_topics": [
              "همانندسازی",
              "رونویسی"
            ],
            "similar_concepts": [
              "مدل رنا (تک رشته‌ای)"
            ],
            "differences": [
              "دنا دو رشته‌ای و رنا تک رشته‌ای است."
            ],
            "frequently_confused_with": [
              "مدل رنا"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 9,
            "reasoning_load": 5,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "اجزای مدل واتسون و کریک",
              "جفت بازهای مکمل",
              "قانون چارگاف",
              "علت یکسان بودن قطر دنا"
            ],
            "hidden_points": [
              "تعداد پیوندهای هیدروژنی A-T و G-C"
            ],
            "trick_points": [
              "سوالات مربوط به تعیین توالی رشته مکمل"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص و تطبیق"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل ساختار دنا"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در جفت شدن بازها (مثلاً A با G)",
              "فراموش کردن تعداد پیوندهای هیدروژنی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک مفهوم مکملی",
              "تشخیص رشته مکمل از روی توالی"
            ],
            "warning_points": [
              "A با T (2 پیوند)، G با C (3 پیوند)"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین مدل در ژنتیک مولکولی.",
            "study_strategy": "تمرین نوشتن رشته مکمل برای توالی‌های مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t1_4"
          },
          "memory_support": {
            "memory_tips": "A-T (دو پیوند) و G-C (سه پیوند).",
            "mnemonic_devices": "AT (دو حرف) = دو پیوند، GC (سه حرف) = سه پیوند.",
            "visual_imagination_tips": "نردبان مارپیچ: ستون‌ها (قند و فسفات) و پله‌ها (بازها)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۷ (واتسون و کریک و مدل آنها)",
              "شکل ۸ (مدل نردبان مارپیچ)"
            ],
            "important_examples": [
              "توالی ATGC و رشته مکمل TACG"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_4",
          "title": "رنا و انواع آن",
          "core_knowledge": {
            "explanation": "رنا (ریبونوکلئیک اسید) یک نوکلئیک اسید تک رشته‌ای است که از روی بخشی از دنا ساخته می‌شود. انواع اصلی رنا عبارتند از: رنای پیام‌رسان (mRNA) که اطلاعات را از دنا به رناتن منتقل می‌کند، رنای ناقل (tRNA) که آمینواسیدها را به رناتن می‌آورد، و رنای رناتنی (rRNA) که در ساختار رناتن شرکت دارد. رناها نقش‌های دیگری مانند آنزیمی و تنظیمی نیز دارند.",
            "complete_definition": "رنا یک پلیمر از نوکلئوتیدهاست که به صورت تک رشته‌ای است و در فرایندهای مختلف یاخته نقش دارد. mRNA (پیام‌رسان): حامل اطلاعات از دنا به رناتن. tRNA (ناقل): انتقال آمینواسیدها به رناتن. rRNA (رناتنی): جزء ساختاری رناتن. رناها عالوه بر این نقش‌ها، آنزیمی و تنظیمی نیز هستند.",
            "key_concepts": [
              "رنا (RNA)",
              "mRNA (رنای پیام‌رسان)",
              "tRNA (رنای ناقل)",
              "rRNA (رنای رناتنی)",
              "یوراسیل",
              "ریبوز"
            ],
            "terminology": {
              "mRNA": "رنای پیام‌رسان که اطلاعات را از دنا به رناتن منتقل می‌کند.",
              "tRNA": "رنای ناقل که آمینواسیدها را به رناتن می‌رساند.",
              "rRNA": "رنای رناتنی که در ساختار رناتن شرکت دارد."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "رنا تک رشته‌ای است.",
              "در رنا به جای تیمین، یوراسیل قرار دارد.",
              "انواع رنا بر اساس نقش آنها در یاخته طبقه‌بندی می‌شوند."
            ],
            "processes": [
              "ساخت رنا از روی دنا (رونویسی)"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_2"
            ],
            "next_topics": [
              "t2_1",
              "t2_2"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار نوکلئوتید"
            ],
            "required_background": null,
            "builds_upon": [
              "نوکلئیک اسیدها"
            ],
            "enables_learning_of": [
              "رونویسی",
              "ترجمه"
            ]
          },
          "relationships": {
            "related_topics": [
              "دنا",
              "رونویسی",
              "ترجمه"
            ],
            "similar_concepts": [
              "دنا"
            ],
            "differences": [
              "رنا تک رشته‌ای، دنا دو رشته‌ای"
            ],
            "frequently_confused_with": [
              "دنا"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 5,
            "difficulty_score": 3,
            "importance_score": 7,
            "reasoning_load": 3,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص انواع رنا",
              "نقش هر نوع رنا",
              "تفاوت دنا و رنا"
            ],
            "hidden_points": [
              "نقش رناهای کوچک در تنظیم بیان ژن"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نقش رنا"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "جدول کامل کردن"
            ],
            "conceptual_question_types": [
              "تشخیص و تطبیق"
            ],
            "calculation_question_types": [],
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نقش انواع رنا",
              "فراموش کردن یوراسیل در رنا"
            ],
            "misconceptions": [
              "همه رناها پیام‌رسان هستند."
            ],
            "difficult_parts": [
              "تشخیص نقش رناهای مختلف"
            ],
            "warning_points": [
              "رنا تک رشته‌ای است و به جای تیمین، یوراسیل دارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم پایه‌ای برای جریان اطلاعات.",
            "study_strategy": "حفظ نقش هر نوع رنا",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_1"
          },
          "memory_support": {
            "memory_tips": "mRNA = پیام، tRNA = ناقل، rRNA = رناتنی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "mRNA مانند نامه‌بر، tRNA مانند کامیون حمل آمینواسید، rRNA مانند کارخانه پروتئین‌سازی."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴ (دنا و رنا)",
              "نقش رناها در پروتئین‌سازی"
            ],
            "important_examples": [
              "ساختار tRNA (تاخوردگی)",
              "نقش mRNA در ترجمه"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_5",
          "title": "همانندسازی دنا",
          "core_knowledge": {
            "explanation": "همانندسازی دنا فرایند تولید دو مولکول دنا از یک مولکول اولیه است که به صورت نیمه حفاظتی انجام می‌شود. در این فرایند، آنزیم هلیکاز دو رشته را از هم باز می‌کند و آنزیم دنا بسپاراز، نوکلئوتیدهای مکمل را به رشته‌های الگو اضافه می‌کند. همانندسازی در باکتری‌ها از یک نقطه آغاز و در یوکاریوت‌ها از چندین نقطه آغاز می‌شود.",
            "complete_definition": "همانندسازی دنا (DNA Replication) فرایندی است که در آن یک مولکول دنا به دو مولکول دنا تبدیل می‌شود. این فرایند به صورت نیمه حفاظتی است (هر مولکول جدید شامل یک رشته قدیمی و یک رشته جدید است). آنزیم هلیکاز دو رشته را باز می‌کند و دنا بسپاراز نوکلئوتیدهای جدید را بر اساس قاعده مکملی به رشته‌های الگو اضافه می‌کند.",
            "key_concepts": [
              "همانندسازی دنا",
              "نیمه حفاظتی",
              "هلیکاز",
              "دنا بسپاراز",
              "جایگاه آغاز",
              "دوراهی همانندسازی",
              "همانندسازی دو جهته"
            ],
            "terminology": {
              "همانندسازی نیمه حفاظتی": "هر مولکول جدید دنا شامل یک رشته قدیمی و یک رشته جدید است.",
              "هلیکاز": "آنزیم بازکننده دو رشته دنا",
              "دنا بسپاراز": "آنزیم سازنده رشته جدید دنا",
              "دوراهی همانندسازی": "محلی که دو رشته دنا از هم باز می‌شوند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "همانندسازی نیمه حفاظتی است (آزمایش مزلسون و استال).",
              "همانندسازی از جایگاه‌های خاص آغاز می‌شود.",
              "در یوکاریوت‌ها، همانندسازی از چندین نقطه آغاز می‌شود."
            ],
            "processes": [
              "باز شدن دو رشته دنا توسط هلیکاز",
              "ساخت رشته جدید توسط دنا بسپاراز بر اساس قاعده مکملی",
              "تشکیل دو مولکول دنا (هر کدام یک رشته قدیم و یک رشته جدید)"
            ],
            "mechanisms": [
              "فعالیت پلیمرازی و ویرایشی دنا بسپاراز"
            ],
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
              "نیاز به درک ساختار دنا و جفت بازها"
            ],
            "required_background": null,
            "builds_upon": [
              "مدل دنا"
            ],
            "enables_learning_of": [
              "رونویسی",
              "ترجمه"
            ]
          },
          "relationships": {
            "related_topics": [
              "رونویسی",
              "ترجمه"
            ],
            "similar_concepts": [
              "رونویسی (ساخت رنا)"
            ],
            "differences": [
              "همانندسازی کل دنا را کپی می‌کند، رونویسی فقط یک ژن را."
            ],
            "frequently_confused_with": [
              "رونویسی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 10,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "بیان فرایند همانندسازی",
              "نقش هلیکاز و دنا بسپاراز",
              "آزمایش مزلسون و استال",
              "نیمه حفاظتی بودن",
              "تفاوت در پروکاریوت و یوکاریوت",
              "دوراهی همانندسازی"
            ],
            "hidden_points": [
              "فعالیت ویرایشی دنا بسپاراز و کاهش خطا"
            ],
            "trick_points": [
              "سوالات مربوط به تفسیر آزمایش مزلسون و استال"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تحلیل آزمایش"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل آزمایش مزلسون و استال"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص فرایند نیمه حفاظتی",
              "ناتوانی در توضیح نقش آنزیم‌ها",
              "فراموش کردن تفاوت پروکاریوت و یوکاریوت"
            ],
            "misconceptions": [
              "همانندسازی به صورت حفاظتی یا غیرحفاظتی است."
            ],
            "difficult_parts": [
              "درک مفهوم نیمه حفاظتی",
              "تحلیل آزمایش مزلسون و استال"
            ],
            "warning_points": [
              "همانندسازی نیمه حفاظتی است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین فرایند در ژنتیک مولکولی.",
            "study_strategy": "مطالعه دقیق مراحل همانندسازی و نقش آنزیم‌ها",
            "review_strategy": "مرور هر 3 روز یکبار",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t2_1"
          },
          "memory_support": {
            "memory_tips": "هلیکاز = بازکننده، دنا بسپاراز = سازنده.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "دوراهی همانندسازی مانند زیپ باز شده."
          },
          "examples": {
            "textbook_examples": [
              "آزمایش مزلسون و استال (شکل ۱۰)",
              "شکل ۱۱ (دوراهی همانندسازی)",
              "شکل ۱۲ (همانندسازی)"
            ],
            "important_examples": [
              "همانندسازی در باکتری (یک نقطه آغاز)",
              "همانندسازی در یوکاریوت (چند نقطه آغاز)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t1_6",
          "title": "پروتئین‌ها: ساختار و سطوح سازمانی",
          "core_knowledge": {
            "explanation": "پروتئین‌ها پلیمرهایی از آمینواسیدها هستند که توسط پیوند پپتیدی به هم متصل می‌شوند. پروتئین‌ها چهار سطح ساختاری دارند: ساختار اول (توالی آمینواسیدها)، ساختار دوم (مارپیچ یا صفحه‌ای ناشی از پیوندهای هیدروژنی)، ساختار سوم (تاخوردگی سه‌بعدی) و ساختار چهارم (ترکیب چند زنجیره پلی‌پپتیدی). شکل فضایی پروتئین، عملکرد آن را تعیین می‌کند.",
            "complete_definition": "پروتئین‌ها پلی‌پپتیدهایی هستند که از آمینواسیدها با پیوند پپتیدی ساخته شده‌اند. ساختار اول: توالی خطی آمینواسیدها. ساختار دوم: الگوهای محلی مانند مارپیچ آلفا و ورقه‌های بتا که با پیوندهای هیدروژنی پایدار می‌شوند. ساختار سوم: ساختار سه‌بعدی کامل یک زنجیره پلی‌پپتیدی. ساختار چهارم: آرایش چند زنجیره پلی‌پپتیدی در کنار هم (مانند هموگلوبین).",
            "key_concepts": [
              "پروتئین",
              "آمینواسید",
              "پیوند پپتیدی",
              "ساختار اول",
              "ساختار دوم",
              "ساختار سوم",
              "ساختار چهارم",
              "مارپیچ آلفا",
              "ورقه بتا",
              "هموگلوبین",
              "میوگلوبین"
            ],
            "terminology": {
              "پیوند پپتیدی": "پیوند کووالانسی بین گروه آمین یک آمینواسید و گروه کربوکسیل آمینواسید دیگر",
              "ساختار اول": "توالی خطی آمینواسیدها",
              "ساختار دوم": "مارپیچ یا صفحه‌ای شدن زنجیره پلی‌پپتیدی",
              "ساختار سوم": "تاخوردگی سه‌بعدی یک زنجیره",
              "ساختار چهارم": "چند زنجیره پلی‌پپتیدی که در کنار هم پروتئین را می‌سازند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "ساختار اول، ساختارهای بالاتر را تعیین می‌کند.",
              "عملکرد پروتئین به شکل فضایی آن وابسته است.",
              "تغییر در یک آمینواسید می‌تواند عملکرد پروتئین را تغییر دهد."
            ],
            "processes": [
              "تشکیل پیوند پپتیدی",
              "تاخوردگی پروتئین"
            ],
            "mechanisms": null,
            "reaction_types": [
              "سنتز آب‌دهی"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آمینواسیدها (شیمی)",
              "پیوندهای شیمیایی"
            ],
            "next_topics": [
              "t1_7",
              "t2_3"
            ],
            "concept_dependencies": [
              "نیاز به درک آمینواسیدها"
            ],
            "required_background": null,
            "builds_upon": [
              "مولکول‌های زیستی"
            ],
            "enables_learning_of": [
              "آنزیم‌ها",
              "ترجمه"
            ]
          },
          "relationships": {
            "related_topics": [
              "آنزیم‌ها",
              "ترجمه"
            ],
            "similar_concepts": [
              "ساختار دنا (چهار سطح برای پروتئین)"
            ],
            "differences": [
              "پروتئین از آمینواسید ساخته شده، دنا از نوکلئوتید."
            ],
            "frequently_confused_with": [
              "ساختار دنا"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 7,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تشخیص سطوح مختلف ساختاری پروتئین",
              "تشخیص پیوند پپتیدی",
              "نقش ساختار اول در تعیین ساختارهای بالاتر",
              "تفاوت هموگلوبین و میوگلوبین"
            ],
            "hidden_points": [
              "نیروهای دخیل در هر سطح ساختاری"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص سطح ساختاری از روی شکل"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل ارتباط ساختار و عملکرد"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص سطوح ساختاری",
              "فراموش کردن پیوند پپتیدی"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص ساختار دوم و سوم",
              "درک ساختار چهارم"
            ],
            "warning_points": [
              "ساختار اول = توالی آمینواسیدها"
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه‌ای برای درک عملکرد مولکول‌های زیستی.",
            "study_strategy": "مطالعه شکل‌ها و مقایسه سطوح مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t1_7"
          },
          "memory_support": {
            "memory_tips": "اول (توالی) → دوم (مارپیچ/صفحه) → سوم (تاخوردگی) → چهارم (چند زیرواحد).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تصویر هموگلوبین با چهار زیرواحد (ساختار چهارم)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۷ (چهار سطح ساختاری)",
              "شکل ۱۸ (میوگلوبین و هموگلوبین)"
            ],
            "important_examples": [
              "هموگلوبین (ساختار چهارم)",
              "میوگلوبین (ساختار سوم)"
            ],
            "real_life_examples": [
              "کلاژن (پروتئین ساختاری)",
              "آنزیم‌ها"
            ]
          }
        },
        {
          "id": "t1_7",
          "title": "آنزیم‌ها: ساختار و عملکرد",
          "core_knowledge": {
            "explanation": "آنزیم‌ها پروتئین‌هایی هستند که به عنوان کاتالیزورهای زیستی عمل کرده و سرعت واکنش‌های شیمیایی را افزایش می‌دهند. آنها با کاهش انرژی فعال‌سازی واکنش، سرعت را زیاد می‌کنند. هر آنزیم دارای جایگاه فعال اختصاصی است که با پیش‌ماده (سوبسترا) مکمل است. عوامل مختلفی مانند دما، pH و غلظت بر فعالیت آنزیم تأثیر می‌گذارند.",
            "complete_definition": "آنزیم‌ها کاتالیزورهای زیستی با ماهیت پروتئینی هستند که سرعت واکنش‌های شیمیایی را بدون تغییر در تعادل واکنش افزایش می‌دهند. جایگاه فعال در آنزیم، محل اتصال اختصاصی به پیش‌ماده (سوبسترا) است. آنزیم‌ها در پایان واکنش بدون تغییر باقی می‌مانند و می‌توانند مجدداً استفاده شوند.",
            "key_concepts": [
              "آنزیم",
              "کاتالیزور",
              "انرژی فعال‌سازی",
              "جایگاه فعال",
              "پیش‌ماده (سوبسترا)",
              "فراورده",
              "عوامل مؤثر بر فعالیت آنزیم (دما، pH، غلظت)"
            ],
            "terminology": {
              "آنزیم": "کاتالیزور زیستی (پروتئینی)",
              "انرژی فعال‌سازی": "حداقل انرژی لازم برای شروع یک واکنش",
              "جایگاه فعال": "بخشی از آنزیم که به پیش‌ماده متصل می‌شود.",
              "پیش‌ماده (سوبسترا)": "ماده‌ای که آنزیم روی آن اثر می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "آنزیم‌ها اختصاصی هستند (هر آنزیم روی یک یا چند پیش‌ماده خاص اثر می‌کند).",
              "فعالیت آنزیم به دما، pH و غلظت بستگی دارد.",
              "آنزیم‌ها پس از واکنش بدون تغییر باقی می‌مانند."
            ],
            "processes": [
              "اتصال آنزیم به پیش‌ماده",
              "تشکیل کمپلکس آنزیم-پیش‌ماده",
              "تولید فراورده",
              "آزاد شدن آنزیم"
            ],
            "mechanisms": null,
            "reaction_types": [
              "کاتالیزوری"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_6"
            ],
            "next_topics": [
              "t2_4",
              "t6_1"
            ],
            "concept_dependencies": [
              "نیاز به درک پروتئین‌ها"
            ],
            "required_background": null,
            "builds_upon": [
              "پروتئین‌ها"
            ],
            "enables_learning_of": [
              "تنفس یاخته‌ای",
              "فتوسنتز",
              "سوخت‌وساز"
            ]
          },
          "relationships": {
            "related_topics": [
              "تنفس یاخته‌ای",
              "فتوسنتز"
            ],
            "similar_concepts": [
              "کاتالیزورهای غیرزیستی"
            ],
            "differences": [
              "آنزیم‌ها اختصاصی و پروتئینی هستند."
            ],
            "frequently_confused_with": [
              "کاتالیزورهای شیمیایی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 8,
            "reasoning_load": 5,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تعریف آنزیم",
              "نقش آنزیم در کاهش انرژی فعال‌سازی",
              "اثر دما و pH بر فعالیت آنزیم",
              "ساختار جایگاه فعال",
              "اختصاصی بودن آنزیم"
            ],
            "hidden_points": [
              "مکمل بودن شکل جایگاه فعال و پیش‌ماده"
            ],
            "trick_points": [
              "سوالات مربوط به اثر دما و pH بر آنزیم"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تعاریف",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل اثر عوامل محیطی بر آنزیم"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن پروتئینی بودن آنزیم‌ها",
              "اشتباه در تشخیص اثر دما (دمای بالا غیرفعال می‌کند)"
            ],
            "misconceptions": [
              "آنزیم‌ها در واکنش مصرف می‌شوند."
            ],
            "difficult_parts": [
              "درک مفهوم انرژی فعال‌سازی",
              "تشخیص اثر دما و pH"
            ],
            "warning_points": [
              "آنزیم‌ها پس از واکنش بدون تغییر باقی می‌مانند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم کلیدی در متابولیسم.",
            "study_strategy": "مطالعه شکل ۱۹ (طرز عمل آنزیم)",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t2_4"
          },
          "memory_support": {
            "memory_tips": "آنزیم مانند قفل و کلید: جایگاه فعال (قفل) و پیش‌ماده (کلید).",
            "mnemonic_devices": null,
            "visual_imagination_tips": "تصویر قفل و کلید برای مکمل بودن آنزیم و پیش‌ماده."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۹ (طرز عمل آنزیم)",
              "کاربرد آنزیم‌ها در صنعت"
            ],
            "important_examples": [
              "پپسین (pH بهینه 2)",
              "آنزیم‌های گوارشی",
              "آنزیم‌های صنعتی (آمیالز)"
            ],
            "real_life_examples": [
              "شوینده‌های آنزیمی",
              "تولید پنیر"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 2,
      "chapter_title": "جریان اطلاعات در یاخته",
      "chapter_objectives": [
        "درک فرایند رونویسی و مراحل آن",
        "بررسی تغییرات پس از رونویسی (پیرایش) در یوکاریوت‌ها",
        "درک فرایند ترجمه و نقش رناهای ناقل و رناتن",
        "بررسی ساختار رمزه و پادرمزه",
        "شناخت مراحل ترجمه (آغاز، طویل شدن، پایان)"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 8,
      "overall_importance": 10,
      "prerequisite_chapters": [
        1
      ],
      "next_chapters": [
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "topics": [
        {
          "id": "t2_1",
          "title": "رونویسی (ساخت رنا)",
          "core_knowledge": {
            "explanation": "رونویسی فرایند ساخت رنا از روی یک رشته دنا (رشته الگو) است. این فرایند توسط آنزیم رنا بسپاراز انجام می‌شود و شامل سه مرحله آغاز، طویل شدن و پایان است. در یوکاریوت‌ها، رنای اولیه ساخته شده (پیش‌ماده) دستخوش تغییراتی (مانند پیرایش) می‌شود تا به رنای بالغ تبدیل شود.",
            "complete_definition": "رونویسی فرایند ساخت مولکول رنا از روی یک رشته دنا (رشته الگو) است. آنزیم رنا بسپاراز به ناحیه راه‌انداز (پروموتر) متصل می‌شود و با استفاده از قاعده مکملی، نوکلئوتیدهای رنا را در برابر رشته الگو قرار می‌دهد. در یوکاریوت‌ها، رنای اولیه (پیش‌ماده) پس از رونویسی، دستخوش پیرایش (حذف اینترون‌ها) می‌شود.",
            "key_concepts": [
              "رونویسی",
              "رنا بسپاراز",
              "رشته الگو",
              "رشته رمزگذار",
              "راه‌انداز (پروموتر)",
              "اینترون",
              "اگزون",
              "پیرایش",
              "رنای پیش‌ماده",
              "رنای بالغ"
            ],
            "terminology": {
              "رونویسی": "ساخت رنا از روی دنا",
              "رنا بسپاراز": "آنزیم سازنده رنا",
              "رشته الگو": "رشته دنا که رونویسی از روی آن انجام می‌شود.",
              "اینترون": "بخش‌هایی از رنای پیش‌ماده که حذف می‌شوند.",
              "اگزون": "بخش‌هایی از رنای پیش‌ماده که حفظ می‌شوند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "فقط یکی از دو رشته یک ژن رونویسی می‌شود (رشته الگو).",
              "در رونویسی، به جای تیمین، یوراسیل قرار می‌گیرد.",
              "رونویسی در یوکاریوت‌ها با پیرایش همراه است."
            ],
            "processes": [
              "اتصال رنا بسپاراز به راه‌انداز",
              "باز شدن دو رشته دنا",
              "ساخت رشته رنا بر اساس قاعده مکملی",
              "پایان رونویسی",
              "پیرایش (در یوکاریوت‌ها)"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_4"
            ],
            "next_topics": [
              "t2_2",
              "t2_3"
            ],
            "concept_dependencies": [
              "نیاز به درک دنا و رنا"
            ],
            "required_background": null,
            "builds_upon": [
              "ساختار دنا و رنا"
            ],
            "enables_learning_of": [
              "ترجمه"
            ]
          },
          "relationships": {
            "related_topics": [
              "همانندسازی",
              "ترجمه"
            ],
            "similar_concepts": [
              "همانندسازی دنا"
            ],
            "differences": [
              "رونویسی از یک رشته دنا انجام می‌شود و رنا ساخته می‌شود."
            ],
            "frequently_confused_with": [
              "همانندسازی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2.5H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 7,
            "importance_score": 10,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 10,
            "probability_in_exam": 90,
            "exam_points": [
              "بیان فرایند رونویسی",
              "نقش رنا بسپاراز",
              "تشخیص رشته الگو و رمزگذار",
              "تفاوت رونویسی در پروکاریوت و یوکاریوت",
              "پیرایش (اینترون و اگزون)"
            ],
            "hidden_points": [
              "همزمان بودن رونویسی و ترجمه در پروکاریوت‌ها"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص اینترون و اگزون از روی شکل"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل پیرایش و تأثیر آن بر رنا"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص رشته الگو از رشته رمزگذار",
              "فراموش کردن پیرایش در یوکاریوت‌ها",
              "ناتوانی در تشخیص اینترون و اگزون"
            ],
            "misconceptions": [
              "هر دو رشته دنا رونویسی می‌شوند."
            ],
            "difficult_parts": [
              "تشخیص رشته الگو",
              "درک مفهوم اینترون و اگزون"
            ],
            "warning_points": [
              "در رونویسی، به جای تیمین، یوراسیل قرار می‌گیرد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مرحله اول جریان اطلاعات از دنا به پروتئین.",
            "study_strategy": "مطالعه دقیق مراحل رونویسی و شکل‌ها",
            "review_strategy": "مرور هر 3 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t2_2"
          },
          "memory_support": {
            "memory_tips": "رونویسی = ساخت رنا، رنا بسپاراز = آنزیم اصلی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "رنا بسپاراز مانند دستگاهی که از روی یک متن (دنا) یک کپی (رنا) تهیه می‌کند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱ (طرح ساده رونویسی)",
              "شکل ۲ (مراحل رونویسی)",
              "شکل ۳ (رشته الگو و رمزگذار)",
              "شکل ۵ (اینترون و اگزون)"
            ],
            "important_examples": [
              "پیرایش در یوکاریوت‌ها (حذف اینترون‌ها)"
            ],
            "real_life_examples": []
          }
        },
        {
          "id": "t2_2",
          "title": "رمز و ترجمه (پروتئین‌سازی)",
          "core_knowledge": {
            "explanation": "ترجمه فرایند ساخت پلی‌پپتید از روی اطلاعات رنای پیام‌رسان (mRNA) است. هر سه نوکلئوتید از mRNA یک رمزه (کدون) را تشکیل می‌دهند که یک آمینواسید خاص را رمز می‌کند. ترجمه در رناتن انجام می‌شود و شامل سه مرحله آغاز، طویل شدن و پایان است. رنای ناقل (tRNA) آمینواسیدها را بر اساس مکملی پادرمزه-رمزه به رناتن می‌آورد.",
            "complete_definition": "ترجمه فرایند تبدیل اطلاعات موجود در توالی نوکلئوتیدهای mRNA به توالی آمینواسیدها در یک پلی‌پپتید است. این فرایند در رناتن (ریبوزوم) انجام می‌شود. هر رمزه (کدون) از سه نوکلئوتید تشکیل شده است و یک آمینواسید خاص را مشخص می‌کند. tRNA (رنای ناقل) با داشتن پادرمزه (آنتی‌کدون) مکمل، آمینواسید مناسب را به رناتن می‌آورد.",
            "key_concepts": [
              "ترجمه",
              "رمزه (کدون)",
              "پادرمزه (آنتی‌کدون)",
              "rRNA",
              "mRNA",
              "tRNA",
              "رناتن (ریبوزوم)",
              "جایگاه A",
              "جایگاه P",
              "جایگاه E",
              "آغاز",
              "طویل شدن",
              "پایان",
              "عوامل آزادکننده"
            ],
            "terminology": {
              "ترجمه": "ساخت پلی‌پپتید از روی mRNA",
              "رمزه (کدون)": "توالی سه نوکلئوتیدی روی mRNA که یک آمینواسید را رمز می‌کند.",
              "پادرمزه (آنتی‌کدون)": "توالی سه نوکلئوتیدی روی tRNA که مکمل رمزه است.",
              "رناتن (ریبوزوم)": "محل انجام ترجمه",
              "جایگاه A": "محل ورود tRNA جدید",
              "جایگاه P": "محل نگهداری زنجیره پلی‌پپتیدی در حال رشد",
              "جایگاه E": "محل خروج tRNA بدون آمینواسید"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "هر رمزه یک آمینواسید خاص را کد می‌کند (به جز رمزه‌های پایان).",
              "رمز آغاز (AUG) شروع ترجمه را مشخص می‌کند.",
              "پادرمزه با رمزه مکمل خود جفت می‌شود.",
              "ترجمه در سه مرحله آغاز، طویل شدن و پایان انجام می‌شود."
            ],
            "processes": [
              "مرحله آغاز: اتصال mRNA و tRNA حاوی متیونین به رناتن",
              "مرحله طویل شدن: تشکیل پیوند پپتیدی و حرکت رناتن",
              "مرحله پایان: مواجهه با رمزه پایان و جدا شدن پلی‌پپتید"
            ],
            "mechanisms": null,
            "reaction_types": [
              "سنتز پلی‌پپتید"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1",
              "t1_6"
            ],
            "next_topics": [
              "t3_1"
            ],
            "concept_dependencies": [
              "نیاز به درک رونویسی و ساختار رناها"
            ],
            "required_background": null,
            "builds_upon": [
              "رونویسی"
            ],
            "enables_learning_of": [
              "تنظیم بیان ژن"
            ]
          },
          "relationships": {
            "related_topics": [
              "رونویسی",
              "تنظیم بیان ژن"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "رونویسی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
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
              "بیان فرایند ترجمه",
              "نقش mRNA, tRNA, rRNA",
              "جایگاه‌های رناتن (A, P, E)",
              "مراحل ترجمه",
              "نقش رمزه آغاز و پایان"
            ],
            "hidden_points": [
              "ساختار tRNA (پادرمزه و محل اتصال آمینواسید)"
            ],
            "trick_points": [
              "سوالات مربوط به تطبیق رمزه و پادرمزه"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مراحل ترجمه"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در نقش رمزه و پادرمزه",
              "ناتوانی در تشخیص جایگاه‌های رناتن",
              "فراموش کردن مراحل ترجمه"
            ],
            "misconceptions": [
              "ترجمه در هسته انجام می‌شود."
            ],
            "difficult_parts": [
              "درک نقش جایگاه‌های A, P, E",
              "تشخیص پادرمزه مکمل"
            ],
            "warning_points": [
              "ترجمه در سیتوپلاسم و روی رناتن انجام می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "فرایند نهایی جریان اطلاعات.",
            "study_strategy": "مطالعه دقیق مراحل و نقش هر جزء",
            "review_strategy": "مرور روزانه تا تسلط کامل",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t3_1"
          },
          "memory_support": {
            "memory_tips": "A (ورود)، P (نگهداری زنجیره)، E (خروج).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "خط تولید پروتئین: mRNA نوار نقاله، tRNA کامیون حمل آمینواسید، رناتن دستگاه تولید."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۷ (طرح ساده ترجمه)",
              "شکل ۸ (ساختار tRNA)",
              "شکل ۱۱-۱۳ (مراحل ترجمه)"
            ],
            "important_examples": [
              "نقش متیونین (AUG) در آغاز ترجمه",
              "عملکرد عوامل آزادکننده"
            ],
            "real_life_examples": []
          }
        }
      ]
    },
    {
      "chapter_number": 3,
      "chapter_title": "تنظیم بیان ژن",
      "chapter_objectives": [
        "درک مفهوم بیان ژن و تنظیم آن",
        "بررسی تنظیم بیان ژن در پروکاریوت‌ها (تنظیم منفی و مثبت)",
        "بررسی تنظیم بیان ژن در یوکاریوت‌ها (افزاینده‌ها، عوامل رونویسی، متیلاسیون)"
      ],
      "estimated_total_learning_time": "PT8H",
      "overall_difficulty": 7,
      "overall_importance": 8,
      "prerequisite_chapters": [
        1,
        2
      ],
      "next_chapters": [
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "topics": [
        {
          "id": "t3_1",
          "title": "تنظیم بیان ژن در پروکاریوت‌ها",
          "core_knowledge": {
            "explanation": "تنظیم بیان ژن به فرایندهایی گفته می‌شود که تعیین می‌کنند کدام ژن‌ها و به چه میزان در یک یاخته بیان شوند. در پروکاریوت‌ها، تنظیم عمدتاً در سطح رونویسی انجام می‌شود. دو نوع تنظیم منفی (مهارکننده) و مثبت (فعال‌کننده) وجود دارد. مثال کلاسیک تنظیم منفی، آپرون الکتوز در باکتری اشرشیاکلی است که در حضور الکتوز، ژن‌های تجزیه‌کننده آن روشن می‌شوند.",
            "complete_definition": "تنظیم بیان ژن شامل مکانیسم‌هایی است که میزان تولید محصولات ژنی (رنا و پروتئین) را کنترل می‌کنند. در پروکاریوت‌ها، تنظیم منفی (با حضور مهارکننده) و تنظیم مثبت (با حضور فعال‌کننده) در سطح رونویسی رخ می‌دهد. آپرون الکتوز (lac operon) در E. coli: در غیاب الکتوز، مهارکننده به اپراتور متصل شده و رونویسی را متوقف می‌کند. در حضور الکتوز، الکتوز به مهارکننده متصل شده، آن را از اپراتور جدا کرده و رونویسی آغاز می‌شود.",
            "key_concepts": [
              "تنظیم بیان ژن",
              "آپرون",
              "تنظیم منفی",
              "تنظیم مثبت",
              "مهارکننده",
              "فعال‌کننده",
              "اپراتور",
              "راه‌انداز (پروموتر)",
              "آپرون الکتوز",
              "القاگر"
            ],
            "terminology": {
              "آپرون": "مجموعه ژن‌های با عملکرد مرتبط که به طور هماهنگ تنظیم می‌شوند.",
              "مهارکننده (Repressor)": "پروتئینی که با اتصال به اپراتور، رونویسی را مهار می‌کند.",
              "اپراتور": "ناحیه‌ای از دنا که مهارکننده به آن متصل می‌شود.",
              "القاگر (Inducer)": "مولکولی که با اتصال به مهارکننده، آن را غیرفعال می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "تنظیم منفی: مهارکننده از رونویسی جلوگیری می‌کند.",
              "تنظیم مثبت: فعال‌کننده به رنا بسپاراز کمک می‌کند.",
              "آپرون الکتوز نمونه‌ای از تنظیم منفی القایی است."
            ],
            "processes": [
              "غیاب الکتوز: مهارکننده به اپراتور متصل → عدم رونویسی",
              "حضور الکتوز: الکتوز به مهارکننده متصل → تغییر شکل مهارکننده → جدا شدن از اپراتور → رونویسی"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1"
            ],
            "next_topics": [
              "t3_2"
            ],
            "concept_dependencies": [
              "نیاز به درک رونویسی"
            ],
            "required_background": null,
            "builds_upon": [
              "رونویسی"
            ],
            "enables_learning_of": [
              "تنظیم بیان ژن در یوکاریوت‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "تنظیم بیان ژن در یوکاریوت‌ها"
            ],
            "similar_concepts": [
              "تنظیم مثبت (با فعال‌کننده)"
            ],
            "differences": [
              "تنظیم منفی با مهارکننده، مثبت با فعال‌کننده."
            ],
            "frequently_confused_with": [
              "تنظیم مثبت"
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
            "probability_in_exam": 60,
            "exam_points": [
              "تشخیص تنظیم منفی و مثبت",
              "آپرون الکتوز و نحوه عملکرد آن",
              "نقش مهارکننده و القاگر"
            ],
            "hidden_points": [
              "تشابه آپرون تریپتوفان (تنظیم منفی مهاری)"
            ],
            "trick_points": [
              "سوالات مربوط به نحوه عملکرد آپرون الکتوز"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل آپرون الکتوز"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص نقش الکتوز (القاگر)",
              "ناتوانی در توضیح عملکرد مهارکننده"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک عملکرد آپرون الکتوز"
            ],
            "warning_points": [
              "الکتوز القاگر است و مهارکننده را غیرفعال می‌کند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مثال کلاسیک تنظیم بیان ژن.",
            "study_strategy": "مطالعه دقیق آپرون الکتوز و نقش هر جزء",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t3_2"
          },
          "memory_support": {
            "memory_tips": "الکتوز = کلید روشن کردن ژن‌ها.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "مهارکننده مانند درب بسته و الکتوز مانند کلید بازکننده."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۶ (تنظیم منفی آپرون الکتوز)",
              "آپرون تریپتوفان (بیشتر بدانید)"
            ],
            "important_examples": [
              "تنظیم منفی در حضور الکتوز (روشن شدن ژن‌ها)"
            ],
            "real_life_examples": [
              "باکتری‌ها و مصرف قندهای مختلف"
            ]
          }
        },
        {
          "id": "t3_2",
          "title": "تنظیم بیان ژن در یوکاریوت‌ها",
          "core_knowledge": {
            "explanation": "تنظیم بیان ژن در یوکاریوت‌ها پیچیده‌تر است و در سطوح مختلف (پیش از رونویسی، هنگام رونویسی، پس از رونویسی) انجام می‌شود. عواملی مانند توالی‌های افزاینده (Enhancer)، عوامل رونویسی، متیلاسیون دنا، فشردگی کروماتین و رناهای کوچک مداخله‌گر در این تنظیم نقش دارند.",
            "complete_definition": "تنظیم بیان ژن در یوکاریوت‌ها شامل مکانیسم‌های متعددی است: 1) پیش از رونویسی: تغییرات در کروماتین (متیلاسیون، استیلاسیون هیستون) و دسترسی به دنا. 2) هنگام رونویسی: عوامل رونویسی به توالی‌های افزاینده (Enhancer) متصل شده و رونویسی را افزایش می‌دهند. 3) پس از رونویسی: پیرایش جایگزین، طول عمر mRNA، و رناهای کوچک مداخله‌گر (miRNA).",
            "key_concepts": [
              "تنظیم در یوکاریوت‌ها",
              "توالی افزاینده (Enhancer)",
              "عوامل رونویسی",
              "متیلاسیون دنا",
              "کروماتین فشرده",
              "رناهای کوچک",
              "پیرایش جایگزین"
            ],
            "terminology": {
              "افزاینده (Enhancer)": "توالی دنا که عوامل رونویسی به آن متصل می‌شوند.",
              "عوامل رونویسی": "پروتئین‌هایی که رونویسی را تنظیم می‌کنند.",
              "متیلاسیون": "افزودن گروه متیل به دنا که معمولاً باعث خاموش شدن ژن می‌شود."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در یوکاریوت‌ها، تنظیم در سطوح مختلف انجام می‌شود.",
              "فشردگی کروماتین، دسترسی به دنا را کاهش می‌دهد.",
              "عوامل رونویسی با اتصال به افزاینده‌ها، رونویسی را افزایش می‌دهند."
            ],
            "processes": [
              "اتصال عوامل رونویسی به افزاینده‌ها",
              "فعال‌سازی یا غیرفعال‌سازی رونویسی",
              "تنظیم پس از رونویسی (مانند miRNA)"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t2_1",
              "t3_1"
            ],
            "next_topics": [
              "t4_1"
            ],
            "concept_dependencies": [
              "نیاز به درک رونویسی"
            ],
            "required_background": null,
            "builds_upon": [
              "تنظیم بیان ژن در پروکاریوت‌ها"
            ],
            "enables_learning_of": [
              "تمایز یاخته‌ای",
              "پاسخ به محیط"
            ]
          },
          "relationships": {
            "related_topics": [
              "تنظیم در پروکاریوت‌ها",
              "اپی‌ژنتیک"
            ],
            "similar_concepts": [
              "تنظیم منفی و مثبت"
            ],
            "differences": [
              "تنظیم در یوکاریوت‌ها پیچیده‌تر و چندسطحی است."
            ],
            "frequently_confused_with": [
              "تنظیم در پروکاریوت‌ها"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 7,
            "importance_score": 8,
            "reasoning_load": 7,
            "memory_load": 8
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 60,
            "exam_points": [
              "سطوح مختلف تنظیم در یوکاریوت‌ها",
              "نقش عوامل رونویسی و افزاینده‌ها",
              "اثر متیلاسیون و فشردگی کروماتین",
              "نقش رناهای کوچک"
            ],
            "hidden_points": [
              "پیرایش جایگزین و تولید پروتئین‌های متفاوت"
            ],
            "trick_points": [],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "شناخت سطوح تنظیم"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مقایسه‌ای با پروکاریوت‌ها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در تشخیص سطوح مختلف تنظیم",
              "اشتباه در نقش افزاینده‌ها و عوامل رونویسی"
            ],
            "misconceptions": [
              "تنظیم فقط در سطح رونویسی انجام می‌شود."
            ],
            "difficult_parts": [
              "درک تأثیر فشردگی کروماتین",
              "نقش رناهای کوچک"
            ],
            "warning_points": [
              "تنظیم در یوکاریوت‌ها چندسطحی است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مفهوم پیشرفته‌تر تنظیم بیان ژن.",
            "study_strategy": "مقایسه تنظیم در پروکاریوت و یوکاریوت",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_1"
          },
          "memory_support": {
            "memory_tips": "افزاینده = تقویت‌کننده رونویسی.",
            "mnemonic_devices": null,
            "visual_imagination_tips": "افزاینده‌ها مانند پدال گاز و عوامل رونویسی مانند راننده که گاز را فشار می‌دهند."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۹ (توالی افزاینده)",
              "غیرفعال‌سازی کروموزوم X"
            ],
            "important_examples": [
              "افزاینده‌ها و عوامل رونویسی",
              "متیلاسیون دنا"
            ],
            "real_life_examples": [
              "سلول‌های بنیادی و تمایز",
              "سرطان و تغییرات اپی‌ژنتیک"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 4,
      "chapter_title": "انتقال اطلاعات در نسل‌ها",
      "chapter_objectives": [
        "آشنایی با مفاهیم پایه ژنتیک (ژن، الل، ژنوتیپ، فنوتیپ)",
        "بررسی گروه‌های خونی Rh و ABO",
        "درک وراثت صفات مستقل از جنس و وابسته به X",
        "شناخت صفات گسسته و پیوسته، تک جایگاهی و چند جایگاهی"
      ],
      "estimated_total_learning_time": "PT10H",
      "overall_difficulty": 7,
      "overall_importance": 9,
      "prerequisite_chapters": [
        1,
        2
      ],
      "next_chapters": [
        5,
        6,
        7,
        8,
        9
      ],
      "topics": [
        {
          "id": "t4_1",
          "title": "مفاهیم پایه ژنتیک (ژن، الل، ژنوتیپ، فنوتیپ)",
          "core_knowledge": {
            "explanation": "ژن، واحد وراثت است و بخشی از دنا را شامل می‌شود که برای یک صفت خاص کد می‌کند. الل (دگره) شکل‌های مختلف یک ژن هستند که در یک جایگاه مشخص روی کروموزوم‌های همتا قرار دارند. ژنوتیپ، ترکیب الل‌های یک فرد برای یک صفت خاص است و فنوتیپ، شکل ظاهری یا بیان صفت است. صفات می‌توانند بارز، نهفته، هم‌توان یا ناقص بارز باشند.",
            "complete_definition": "ژن، قطعه‌ای از دناست که اطلاعات یک صفت را حمل می‌کند. الل (دگره) یکی از اشکال مختلف یک ژن است. ژنوتیپ، مجموعه الل‌های یک فرد برای یک صفت است. فنوتیپ، ویژگی قابل مشاهده یا قابل اندازه‌گیری حاصل از ژنوتیپ و تأثیر محیط است. اگر دو الل یکسان باشند، فرد برای آن صفت خالص (هموزیگوت) و اگر متفاوت باشند، ناخالص (هتروزیگوت) است.",
            "key_concepts": [
              "ژن",
              "الل (دگره)",
              "ژنوتیپ",
              "فنوتیپ",
              "خالص (هموزیگوت)",
              "ناخالص (هتروزیگوت)",
              "بارز",
              "نهفته",
              "هم‌توانی",
              "ناقص بارزیت"
            ],
            "terminology": {
              "ژن": "قطعه‌ای از دنا با عملکرد مشخص",
              "الل (دگره)": "یکی از اشکال مختلف یک ژن در یک جایگاه کروموزومی",
              "ژنوتیپ": "ترکیب الل‌های یک فرد برای یک صفت",
              "فنوتیپ": "بیان ظاهری یک صفت",
              "بارز (Dominant)": "اللی که در حالت ناخالص نیز اثر خود را نشان می‌دهد.",
              "نهفته (Recessive)": "اللی که در حالت ناخالص اثر خود را نشان نمی‌دهد."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "هر فرد برای هر صفت دو الل دارد (یکی از هر والد).",
              "الل‌های بارز با حروف بزرگ و نهفته با حروف کوچک نشان داده می‌شوند.",
              "فنوتیپ می‌تواند تحت تأثیر محیط قرار گیرد."
            ],
            "processes": [
              "تشخیص ژنوتیپ از روی فنوتیپ",
              "تعیین احتمالات ژنوتیپ در فرزندان"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "مفاهیم کروموزوم (زیست شناسی یازدهم)"
            ],
            "next_topics": [
              "t4_2",
              "t4_3"
            ],
            "concept_dependencies": [
              "نیاز به درک کروموزوم و جایگاه ژنی"
            ],
            "required_background": null,
            "builds_upon": [
              "مفاهیم پایه وراثت"
            ],
            "enables_learning_of": [
              "وراثت صفات",
              "نسبت‌های فنوتیپی"
            ]
          },
          "relationships": {
            "related_topics": [
              "قوانین مندل"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "ژن و الل"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P5D",
            "forgetting_risk": 5,
            "difficulty_score": 4,
            "importance_score": 8,
            "reasoning_load": 4,
            "memory_load": 6
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تعریف ژن، الل، ژنوتیپ، فنوتیپ",
              "تشخیص خالص و ناخالص",
              "تشخیص بارز و نهفته",
              "انواع رابطه بین الل‌ها (بارز، هم‌توان، ناقص بارز)"
            ],
            "hidden_points": [
              "تأثیر محیط بر فنوتیپ"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص ژنوتیپ از فنوتیپ"
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
            "analytical_question_types": []
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص بارز و نهفته",
              "ناتوانی در تشخیص ژنوتیپ ناخالص"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص رابطه هم‌توانی و ناقص بارزیت"
            ],
            "warning_points": [
              "الل بارز با حرف بزرگ و نهفته با حرف کوچک نشان داده می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه ژنتیک مندلی.",
            "study_strategy": "تمرین با مثال‌های مختلف",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t4_2"
          },
          "memory_support": {
            "memory_tips": "ژن (مکان)، الل (انواع)، ژنوتیپ (ترکیب الل‌ها)، فنوتیپ (بیان).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "ژن مانند یک کتاب، الل مانند نسخه‌های مختلف آن کتاب."
          },
          "examples": {
            "textbook_examples": [
              "گروه خونی Rh (ژن D و d)",
              "گروه خونی ABO (الل‌های IA, IB, i)"
            ],
            "important_examples": [
              "رابطه بارز و نهفته در Rh",
              "هم‌توانی در ABO",
              "ناقص بارزیت در گل میمونی"
            ],
            "real_life_examples": [
              "گروه خونی",
              "رنگ چشم"
            ]
          }
        },
        {
          "id": "t4_2",
          "title": "گروه‌های خونی Rh و ABO",
          "core_knowledge": {
            "explanation": "گروه خونی Rh بر اساس وجود یا عدم وجود پروتئین D در غشای گویچه قرمز تعیین می‌شود. الل D (بارز) باعث تولید پروتئین و Rh مثبت می‌شود. گروه خونی ABO بر اساس وجود کربوهیدرات‌های A و B روی گویچه قرمز است و توسط سه الل IA, IB, i تعیین می‌شود. الل‌های IA و IB نسبت به یکدیگر هم‌توان هستند و هر دو بر i بارزند.",
            "complete_definition": "گروه خونی Rh توسط یک ژن با دو الل D (بارز) و d (نهفته) تعیین می‌شود. افراد با ژنوتیپ DD یا Dd دارای گروه خونی Rh+ و افراد با ژنوتیپ dd دارای Rh- هستند. گروه خونی ABO توسط سه الل IA (سازنده آنتی‌ژن A)، IB (سازنده آنتی‌ژن B) و i (سازنده هیچ آنتی‌ژنی) تعیین می‌شود. IA و IB هم‌توان هستند و بر i بارزند.",
            "key_concepts": [
              "گروه خونی Rh",
              "پروتئین D",
              "الل D (بارز)",
              "الل d (نهفته)",
              "گروه خونی ABO",
              "آنتی‌ژن A",
              "آنتی‌ژن B",
              "الل IA",
              "الل IB",
              "الل i",
              "هم‌توانی"
            ],
            "terminology": {
              "گروه خونی Rh مثبت": "وجود پروتئین D روی گویچه قرمز",
              "گروه خونی Rh منفی": "عدم وجود پروتئین D",
              "گروه خونی A": "وجود آنتی‌ژن A",
              "گروه خونی B": "وجود آنتی‌ژن B",
              "گروه خونی AB": "وجود هر دو آنتی‌ژن A و B",
              "گروه خونی O": "عدم وجود آنتی‌ژن A و B"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "D بر d بارز است.",
              "IA و IB بر i بارز هستند و نسبت به یکدیگر هم‌توان هستند."
            ],
            "processes": [
              "تعیین گروه خونی از روی ژنوتیپ",
              "پیش‌بینی گروه خونی فرزندان"
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
              "نیاز به درک الل و بارزیت"
            ],
            "required_background": null,
            "builds_upon": [
              "مفاهیم پایه"
            ],
            "enables_learning_of": [
              "انتقال خون",
              "ژنتیک جمعیت"
            ]
          },
          "relationships": {
            "related_topics": [
              "انتقال خون"
            ],
            "similar_concepts": [
              "سازگاری گروه خونی"
            ],
            "differences": [],
            "frequently_confused_with": [
              "عامل Rh"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 7,
            "reasoning_load": 5,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 7,
            "probability_in_exam": 50,
            "exam_points": [
              "تشخیص ژنوتیپ Rh از روی فنوتیپ",
              "تشخیص گروه خونی ABO از روی ژنوتیپ",
              "پیش‌بینی گروه خونی فرزندان",
              "هم‌توانی IA و IB"
            ],
            "hidden_points": [
              "سازگاری گروه‌های خونی برای انتقال خون"
            ],
            "trick_points": [
              "سوالات مربوط به تعیین گروه خونی از روی ژنوتیپ"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "پیش‌بینی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل نسبت‌های فنوتیپی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص ژنوتیپ Rh منفی (dd)",
              "فراموش کردن هم‌توانی IA و IB"
            ],
            "misconceptions": [
              "گروه خونی O به معنی نداشتن ژن است."
            ],
            "difficult_parts": [
              "درک هم‌توانی IA و IB"
            ],
            "warning_points": [
              "IA و IB هم‌توان هستند و هر دو در فنوتیپ AB دیده می‌شوند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد عملی در پزشکی.",
            "study_strategy": "تمرین با جدول ژنوتیپ و فنوتیپ",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t4_3"
          },
          "memory_support": {
            "memory_tips": "DD, Dd = Rh+, dd = Rh-. IAIA, IAi = A, IBIB, IBi = B, IAIB = AB, ii = O.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "جدول گروه‌های خونی و انتقال خون."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۵ (Rh)",
              "شکل ۶ (ABO)",
              "جدول ۱ و ۲"
            ],
            "important_examples": [
              "ژنوتیپ‌های Rh+ (DD, Dd)",
              "ژنوتیپ‌های گروه خونی A (IAIA, IAi)"
            ],
            "real_life_examples": [
              "انتقال خون",
              "تعیین گروه خونی"
            ]
          }
        },
        {
          "id": "t4_3",
          "title": "وراثت صفات وابسته به جنس و صفات چند جایگاهی",
          "core_knowledge": {
            "explanation": "صفات وابسته به جنس، صفاتی هستند که ژن آنها روی کروموزم جنسی (معمولاً X) قرار دارد. در انسان، صفات وابسته به X مانند هموفیلی، در مردان بیشتر از زنان بروز می‌کند زیرا مردان فقط یک کروموزوم X دارند. صفات چند جایگاهی توسط بیش از یک جایگاه ژنی کنترل می‌شوند و معمولاً فنوتیپ‌های پیوسته و طیفی ایجاد می‌کنند (مانند رنگ پوست).",
            "complete_definition": "صفات وابسته به جنس: صفاتی که ژن آنها روی کروموزوم‌های جنسی (X یا Y) قرار دارد. در انسان، بیشتر صفات وابسته به جنس روی کروموزوم X قرار دارند. هموفیلی و کوررنگی نمونه‌هایی از صفات وابسته به X نهفته هستند. صفات چند جایگاهی (پلی‌ژنیک): صفاتی که توسط دو یا چند جایگاه ژنی کنترل می‌شوند و فنوتیپ‌های پیوسته (مانند قد و رنگ پوست) ایجاد می‌کنند.",
            "key_concepts": [
              "صفات وابسته به جنس",
              "کروموزوم X",
              "کروموزوم Y",
              "هموفیلی",
              "ناقل",
              "صفات چند جایگاهی (پلی‌ژنیک)",
              "فنوتیپ پیوسته"
            ],
            "terminology": {
              "صفات وابسته به X": "صفاتی که ژن آنها روی کروموزوم X قرار دارد.",
              "ناقل": "فردی که دارای یک الل نهفته برای یک صفت است (معمولاً ماده) و خود صفت را نشان نمی‌دهد.",
              "صفات چند جایگاهی (پلی‌ژنیک)": "صفاتی که توسط چندین ژن کنترل می‌شوند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "در مردان، یک کروموزوم X وجود دارد، بنابراین یک الل برای صفات وابسته به X کافی است تا فنوتیپ مشخص شود.",
              "صفات چند جایگاهی معمولاً توزیع نرمال (زنگوله‌ای) دارند."
            ],
            "processes": [
              "پیش‌بینی احتمال ابتلا به صفات وابسته به X",
              "استفاده از مربع پانت"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t4_1"
            ],
            "next_topics": [
              "t5_1"
            ],
            "concept_dependencies": [
              "نیاز به درک کروموزوم‌های جنسی"
            ],
            "required_background": null,
            "builds_upon": [
              "مفاهیم پایه"
            ],
            "enables_learning_of": [
              "ژنتیک جمعیت",
              "بیماری‌های ژنتیکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "بیماری‌های ژنتیکی"
            ],
            "similar_concepts": [
              "صفات وابسته به Y (نادر)"
            ],
            "differences": [
              "صفات وابسته به X در مردان بیشتر بروز می‌کند."
            ],
            "frequently_confused_with": [
              "صفات اتوزومی"
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
              "تشخیص صفت وابسته به X",
              "پیش‌بینی ژنوتیپ و فنوتیپ در هموفیلی",
              "تشخیص ناقل",
              "ویژگی‌های صفات چند جایگاهی"
            ],
            "hidden_points": [
              "عدم وجود جایگاه ژنی برای برخی صفات روی کروموزوم Y"
            ],
            "trick_points": [
              "سوالات مربوط به پیش‌بینی ابتلا در فرزندان"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "پیش‌بینی"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل نسبت‌های فنوتیپی در صفات وابسته به X"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن اینکه مردان فقط یک کروموزوم X دارند",
              "ناتوانی در تشخیص ناقل"
            ],
            "misconceptions": [
              "صفات وابسته به X فقط در مردان دیده می‌شود."
            ],
            "difficult_parts": [
              "پیش‌بینی احتمال بیماری در فرزندان",
              "تشخیص ناقل"
            ],
            "warning_points": [
              "مردان برای صفات وابسته به X، یا سالم هستند یا بیمار (ناقل ندارند)."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربرد در پزشکی و پیش‌گیری از بیماری‌های ژنتیکی.",
            "study_strategy": "تمرین با مربع پانت برای صفات وابسته به X",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t5_1"
          },
          "memory_support": {
            "memory_tips": "X-linked: در مردان یک الل کافی است.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "کروموزوم X مانند یک چتر و Y مانند یک چتر کوچک."
          },
          "examples": {
            "textbook_examples": [
              "جدول ۳ (ژنوتیپ‌های هموفیلی)",
              "مثال ازدواج مرد هموفیل با زن سالم"
            ],
            "important_examples": [
              "هموفیلی",
              "کوررنگی"
            ],
            "real_life_examples": [
              "مشاوره ژنتیک",
              "بیماری‌های وابسته به X"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 5,
      "chapter_title": "تغییر در اطلاعات وراثتی",
      "chapter_objectives": [
        "بررسی جهش‌ها و انواع آنها (جانشینی، اضافه، حذف، ناهنجاری‌های کروموزومی)",
        "شناخت پیامدهای جهش و عوامل جهش‌زا",
        "درک انتخاب طبیعی و تغییر در جمعیت‌ها",
        "بررسی خزانه ژن و عوامل تغییردهنده آن (جهش، رانش ژن، شارش ژن، انتخاب طبیعی)",
        "بررسی شواهد تغییر گونه‌ها (سنگواره‌ها، تشریح مقایسه‌ای، مطالعات مولکولی)",
        "آشنایی با گونه‌زایی (دگرمهینی و هم‌مهینی)"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 7,
      "overall_importance": 8,
      "prerequisite_chapters": [
        1,
        2,
        4
      ],
      "next_chapters": [
        6,
        7,
        8,
        9
      ],
      "topics": [
        {
          "id": "t5_1",
          "title": "جهش و انواع آن",
          "core_knowledge": {
            "explanation": "جهش تغییر ماندگار در توالی نوکلئوتیدهای دنا است. جهش‌های نقطه‌ای شامل جانشینی (که می‌تواند خاموش، بدمعنا یا بی‌معنا باشد)، اضافه و حذف (که ممکن است باعث تغییر چارچوب خواندن شوند) می‌باشند. جهش‌های بزرگ‌تر شامل ناهنجاری‌های کروموزومی (حذف، مضاعف‌شدگی، جابه‌جایی، واژگونی) هستند. جهش‌ها می‌توانند ارثی یا اکتسابی باشند.",
            "complete_definition": "جهش یک تغییر دائمی در توالی نوکلئوتیدهای دنا است. انواع جهش: 1) جانشینی (Substitution): جایگزینی یک نوکلئوتید با نوکلئوتید دیگر (خاموش، بدمعنا، بی‌معنا). 2) اضافه (Insertion) و حذف (Deletion): افزودن یا حذف یک یا چند نوکلئوتید که ممکن است باعث تغییر چارچوب خواندن شود. 3) ناهنجاری‌های کروموزومی: شامل حذف، مضاعف‌شدگی، جابه‌جایی و واژگونی قطعات کروموزوم. جهش می‌تواند ارثی (در گامت‌ها) یا اکتسابی (در یاخته‌های پیکری) باشد.",
            "key_concepts": [
              "جهش",
              "جانشینی",
              "اضافه",
              "حذف",
              "جهش خاموش",
              "جهش بدمعنا",
              "جهش بی‌معنا",
              "تغییر چارچوب خواندن",
              "ناهنجاری کروموزومی",
              "حذف کروموزومی",
              "مضاعف‌شدگی",
              "جابه‌جایی",
              "واژگونی",
              "جهش ارثی",
              "جهش اکتسابی"
            ],
            "terminology": {
              "جهش خاموش": "جانشینی که آمینواسید را تغییر نمی‌دهد.",
              "جهش بدمعنا": "جانشینی که یک آمینواسید را به آمینواسید دیگر تبدیل می‌کند.",
              "جهش بی‌معنا": "جانشینی که یک رمزه را به رمزه پایان تبدیل می‌کند.",
              "تغییر چارچوب خواندن": "نتیجه اضافه یا حذف نوکلئوتید که باعث خواندن اشتباه بقیه رمزه‌ها می‌شود."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "جهش می‌تواند مفید، مضر یا خنثی باشد.",
              "جهش‌ها منبع اصلی تنوع ژنتیکی هستند.",
              "عوامل جهش‌زا (فیزیکی و شیمیایی) می‌توانند باعث جهش شوند."
            ],
            "processes": [
              "تشخیص انواع جهش",
              "تشخیص پیامدهای هر نوع جهش"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار دنا",
              "رمز و ترجمه"
            ],
            "next_topics": [
              "t5_2",
              "t5_3"
            ],
            "concept_dependencies": [
              "نیاز به درک رمز و توالی دنا"
            ],
            "required_background": null,
            "builds_upon": [
              "دنا و بیان ژن"
            ],
            "enables_learning_of": [
              "تکامل",
              "بیماری‌های ژنتیکی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انتخاب طبیعی",
              "تنوع ژنتیکی"
            ],
            "similar_concepts": [
              "نوترکیبی"
            ],
            "differences": [
              "جهش تغییر در توالی دنا، نوترکیبی جابه‌جایی قطعات است."
            ],
            "frequently_confused_with": [
              "نوترکیبی"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2.5H",
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
              "تشخیص انواع جهش (جانشینی، اضافه، حذف)",
              "تشخیص جهش خاموش، بدمعنا و بی‌معنا",
              "تشخیص تغییر چارچوب خواندن",
              "تشخیص ناهنجاری‌های کروموزومی",
              "تشخیص جهش ارثی و اکتسابی"
            ],
            "hidden_points": [
              "تأثیر جهش بر عملکرد پروتئین"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع جهش از روی توالی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل پیامدهای جهش"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص جهش خاموش، بدمعنا و بی‌معنا",
              "ناتوانی در تشخیص تغییر چارچوب خواندن",
              "فراموش کردن انواع ناهنجاری‌های کروموزومی"
            ],
            "misconceptions": [
              "همه جهش‌ها مضر هستند."
            ],
            "difficult_parts": [
              "تشخیص تغییر چارچوب خواندن",
              "تشخیص ناهنجاری‌های کروموزومی از روی شکل"
            ],
            "warning_points": [
              "اضافه یا حذف نوکلئوتید (غیرمضرب سه) باعث تغییر چارچوب خواندن می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم برای درک تنوع ژنتیکی و بیماری‌ها.",
            "study_strategy": "تمرین با توالی‌های فرضی و اعمال انواع جهش",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t5_2"
          },
          "memory_support": {
            "memory_tips": "جهش جانشینی (تغییر یک حرف)، اضافه/حذف (تغییر تعداد حروف).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "مثال جمله «این سبب سرخ است» با اضافه یا حذف یک حرف."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱ (هموگلوبین و کم‌خونی داسی)",
              "شکل ۲ (انواع جهش کوچک)",
              "شکل ۳ (جهش بی‌معنا)",
              "شکل ۴ (ناهنجاری‌های کروموزومی)"
            ],
            "important_examples": [
              "کم‌خونی داسی شکل (جانشینی)",
              "جهش خاموش",
              "جهش بی‌معنا"
            ],
            "real_life_examples": [
              "سرطان (جهش اکتسابی)",
              "بیماری‌های ژنتیکی (ارثی)"
            ]
          }
        },
        {
          "id": "t5_2",
          "title": "انتخاب طبیعی و عوامل تغییردهنده خزانه ژن",
          "core_knowledge": {
            "explanation": "انتخاب طبیعی فرایندی است که در آن افراد با صفات سازگارتر با محیط، شانس بیشتری برای بقا و تولیدمثل دارند و بنابراین صفات آنها در جمعیت فراوانی بیشتری پیدا می‌کند. عوامل دیگری مانند جهش، رانش ژن، شارش ژن و آمیزش غیرتصادفی نیز می‌توانند فراوانی الل‌ها را در خزانه ژن تغییر دهند.",
            "complete_definition": "انتخاب طبیعی: فرایندی که در آن افراد سازگارتر با محیط، زنده می‌مانند و تولیدمثل بیشتری دارند و در نتیجه صفات آنها در جمعیت افزایش می‌یابد. خزانه ژن: مجموع همه الل‌های موجود در جمعیت. عوامل تغییردهنده خزانه ژن: جهش (افزودن الل‌های جدید)، رانش ژن (تغییر تصادفی فراوانی الل‌ها، به ویژه در جمعیت‌های کوچک)، شارش ژن (ورود یا خروج الل‌ها با مهاجرت)، انتخاب طبیعی و آمیزش غیرتصادفی.",
            "key_concepts": [
              "انتخاب طبیعی",
              "سازگاری",
              "خزانه ژن",
              "رانش ژن",
              "شارش ژن",
              "آمیزش غیرتصادفی",
              "جهش"
            ],
            "terminology": {
              "انتخاب طبیعی": "بقای افراد سازگارتر با محیط",
              "خزانه ژن": "مجموع الل‌های موجود در یک جمعیت",
              "رانش ژن": "تغییر تصادفی فراوانی الل‌ها (اغلب در جمعیت‌های کوچک)",
              "شارش ژن": "ورود یا خروج الل‌ها به جمعیت از طریق مهاجرت"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "انتخاب طبیعی، جمعیت را تغییر می‌دهد نه فرد را.",
              "تنوع ژنتیکی پیش‌نیاز انتخاب طبیعی است.",
              "سازگاری یک صفت به شرایط محیط بستگی دارد."
            ],
            "processes": [
              "ایجاد تنوع (جهش، نوترکیبی)",
              "انتخاب افراد سازگارتر",
              "تغییر فراوانی صفات در نسل‌های بعد"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t5_1"
            ],
            "next_topics": [
              "t5_3",
              "t5_4"
            ],
            "concept_dependencies": [
              "نیاز به درک جهش و تنوع"
            ],
            "required_background": null,
            "builds_upon": [
              "تنوع ژنتیکی"
            ],
            "enables_learning_of": [
              "گونه‌زایی",
              "تکامل"
            ]
          },
          "relationships": {
            "related_topics": [
              "گونه‌زایی",
              "تکامل"
            ],
            "similar_concepts": [
              "انتخاب مصنوعی"
            ],
            "differences": [
              "انتخاب طبیعی توسط محیط، انتخاب مصنوعی توسط انسان."
            ],
            "frequently_confused_with": [
              "رانش ژن"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P5D",
            "forgetting_risk": 6,
            "difficulty_score": 6,
            "importance_score": 8,
            "reasoning_load": 6,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 8,
            "probability_in_exam": 70,
            "exam_points": [
              "تعریف انتخاب طبیعی",
              "تشخیص عوامل تغییردهنده خزانه ژن",
              "تشخیص رانش ژن",
              "تشخیص شارش ژن"
            ],
            "hidden_points": [
              "تأثیر اندازه جمعیت بر رانش ژن"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص انتخاب طبیعی از رانش ژن"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل تأثیر عوامل بر خزانه ژن"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص رانش ژن از انتخاب طبیعی",
              "ناتوانی در توضیح نقش جهش در ایجاد تنوع"
            ],
            "misconceptions": [
              "انتخاب طبیعی باعث ایجاد صفات جدید می‌شود."
            ],
            "difficult_parts": [
              "تشخیص تفاوت انتخاب طبیعی و رانش ژن"
            ],
            "warning_points": [
              "انتخاب طبیعی صفات را انتخاب می‌کند، ایجاد نمی‌کند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مکانیسم اصلی تکامل.",
            "study_strategy": "مطالعه مثال‌های انتخاب طبیعی (مقاومت باکتری‌ها)",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t5_3"
          },
          "memory_support": {
            "memory_tips": "انتخاب طبیعی = بقای سازگارترها.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "مقاومت باکتری‌ها به آنتی‌بیوتیک (انتخاب طبیعی)."
          },
          "examples": {
            "textbook_examples": [
              "مقاوم شدن باکتری‌ها به پادزیست‌ها",
              "مثال سرما و تحمل آن"
            ],
            "important_examples": [
              "رانش ژن در جمعیت‌های کوچک",
              "شارش ژن با مهاجرت"
            ],
            "real_life_examples": [
              "مقاومت به آنتی‌بیوتیک",
              "تغییر رنگ پروانه‌ها در صنعتی‌شدن"
            ]
          }
        },
        {
          "id": "t5_3",
          "title": "گونه‌زایی",
          "core_knowledge": {
            "explanation": "گونه‌زایی فرایند تشکیل گونه‌های جدید است. دو نوع اصلی گونه‌زایی وجود دارد: گونه‌زایی دگرمهینی (با جدایی جغرافیایی) و گونه‌زایی هم‌مهینی (بدون جدایی جغرافیایی). چندالدی (پلی‌پلوئیدی) نمونه‌ای از گونه‌زایی هم‌مهینی در گیاهان است. جدایی تولیدمثلی (عدم توانایی در آمیزش موفق) شرط لازم برای گونه‌زایی است.",
            "complete_definition": "گونه‌زایی: فرایند تشکیل گونه‌های جدید از گونه‌های موجود. گونه‌زایی دگرمهینی: جدایی جغرافیایی یک جمعیت به دو جمعیت جداگانه که به مرور زمان به دلیل عدم شارش ژن، به دو گونه متفاوت تبدیل می‌شوند. گونه‌زایی هم‌مهینی: تشکیل گونه جدید بدون جدایی جغرافیایی (مثلاً چندالدی در گیاهان). شرط اصلی گونه‌زایی، جدایی تولیدمثلی است.",
            "key_concepts": [
              "گونه‌زایی",
              "جدایی تولیدمثلی",
              "گونه‌زایی دگرمهینی",
              "گونه‌زایی هم‌مهینی",
              "چندالدی (پلی‌پلوئیدی)"
            ],
            "terminology": {
              "گونه‌زایی دگرمهینی": "گونه‌زایی با جدایی جغرافیایی",
              "گونه‌زایی هم‌مهینی": "گونه‌زایی بدون جدایی جغرافیایی",
              "چندالدی (پلی‌پلوئیدی)": "داشتن بیش از دو مجموعه کروموزوم (نمونه‌ای از گونه‌زایی هم‌مهینی)",
              "جدایی تولیدمثلی": "موانعی که از آمیزش موفق دو جمعیت جلوگیری می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "جدایی تولیدمثلی شرط لازم برای گونه‌زایی است.",
              "چندالدی می‌تواند به سرعت گونه جدید ایجاد کند."
            ],
            "processes": [
              "جدایی جمعیت → عدم شارش ژن → تجمع تفاوت‌ها → جدایی تولیدمثلی → گونه جدید"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t5_2"
            ],
            "next_topics": [
              "t5_4"
            ],
            "concept_dependencies": [
              "نیاز به درک انتخاب طبیعی"
            ],
            "required_background": null,
            "builds_upon": [
              "انتخاب طبیعی"
            ],
            "enables_learning_of": [
              "تنوع زیستی"
            ]
          },
          "relationships": {
            "related_topics": [
              "تکامل",
              "تنوع زیستی"
            ],
            "similar_concepts": [
              "تکامل"
            ],
            "differences": [
              "گونه‌زایی تشکیل گونه جدید است."
            ],
            "frequently_confused_with": [
              "تکامل"
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
              "تشخیص گونه‌زایی دگرمهینی و هم‌مهینی",
              "نقش جدایی جغرافیایی",
              "چندالدی و گونه‌زایی هم‌مهینی",
              "شرط جدایی تولیدمثلی"
            ],
            "hidden_points": [
              "چندالدی در گیاهان",
              "اهمیت زمان در گونه‌زایی دگرمهینی"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع گونه‌زایی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مثال‌های گونه‌زایی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص دگرمهینی و هم‌مهینی",
              "ناتوانی در توضیح چندالدی"
            ],
            "misconceptions": [
              "گونه‌زایی فقط با جدایی جغرافیایی رخ می‌دهد."
            ],
            "difficult_parts": [
              "درک مفهوم چندالدی و نقش آن در گونه‌زایی"
            ],
            "warning_points": [
              "گونه‌زایی دگرمهینی با جدایی جغرافیایی، هم‌مهینی بدون جدایی جغرافیایی."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "نحوه پیدایش گونه‌های جدید.",
            "study_strategy": "مقایسه دو نوع گونه‌زایی با مثال‌های مختلف",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t5_4"
          },
          "memory_support": {
            "memory_tips": "دگرمهینی (جدا از هم)، هم‌مهینی (در یک مکان).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "جدایی یک جمعیت توسط کوه (دگرمهینی) و گیاه چندالدی (هم‌مهینی)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۳ (گونه‌زایی دگرمهینی و هم‌مهینی)",
              "شکل ۱۴ و ۱۵ (چندالدی)"
            ],
            "important_examples": [
              "چندالدی در گیاه گل مغربی (اوکروترا)"
            ],
            "real_life_examples": [
              "گونه‌های جدید در جزایر",
              "گیاهان کشت شده چندالدی"
            ]
          }
        },
        {
          "id": "t5_4",
          "title": "شواهد تغییر گونه‌ها",
          "core_knowledge": {
            "explanation": "شواهد متعددی نشان می‌دهند که گونه‌ها در طول زمان تغییر کرده‌اند. این شواهد شامل سنگواره‌ها (بقایای موجودات گذشته)، تشریح مقایسه‌ای (ساختارهای همتا و وستیجیال)، و مطالعات مولکولی (شباهت‌های توالی دنا) هستند. این شواهد نشان‌دهنده خویشاوندی گونه‌ها و تغییرات تدریجی در طول زمان هستند.",
            "complete_definition": "شواهد تغییر گونه‌ها: 1) سنگواره‌ها: بقایای موجودات گذشته که نشان می‌دهند گونه‌هایی در گذشته وجود داشته‌اند که امروز نیستند. 2) تشریح مقایسه‌ای: ساختارهای همتا (طرح یکسان، عملکرد متفاوت) نشان‌دهنده نیای مشترک هستند. ساختارهای وستیجیال (بازمانده و بی‌کاربرد) نیز نشان‌دهنده تغییر از نیاکان هستند. 3) مطالعات مولکولی: شباهت توالی‌های دنا بین گونه‌ها نشان‌دهنده خویشاوندی نزدیک‌تر است.",
            "key_concepts": [
              "سنگواره",
              "تشریح مقایسه‌ای",
              "ساختار همتا",
              "ساختار وستیجیال",
              "مطالعات مولکولی",
              "خویشاوندی",
              "نیای مشترک"
            ],
            "terminology": {
              "سنگواره": "بقایای یک جاندار یا اثر آن از گذشته‌های دور",
              "ساختار همتا (همولوگ)": "ساختارهایی با طرح یکسان اما عملکرد متفاوت (نشان‌دهنده نیای مشترک)",
              "ساختار وستیجیال (بازمانده)": "ساختار کوچک و بی‌کاربرد که نشان‌دهنده تغییر از نیاکان است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "سنگواره‌ها نشان می‌دهند که زندگی در طول زمان تغییر کرده است.",
              "ساختارهای همتا نشان‌دهنده خویشاوندی و نیای مشترک هستند.",
              "شباهت ژنتیکی بین گونه‌ها، نشان‌دهنده نزدیکی خویشاوندی است."
            ],
            "processes": [
              "مقایسه ساختارها",
              "تحلیل سنگواره‌ها",
              "مقایسه توالی‌های دنا"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t5_2",
              "t5_3"
            ],
            "next_topics": [
              "t6_1"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [
              "تکامل"
            ],
            "enables_learning_of": [
              "درخت تکاملی"
            ]
          },
          "relationships": {
            "related_topics": [
              "تکامل",
              "رده‌بندی"
            ],
            "similar_concepts": [
              "انطباق"
            ],
            "differences": [],
            "frequently_confused_with": [
              "ساختارهای مشابه (آنالوگ)"
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
              "تشخیص شواهد تغییر گونه‌ها",
              "تشخیص ساختار همتا",
              "تشخیص ساختار وستیجیال",
              "نقش سنگواره‌ها"
            ],
            "hidden_points": [
              "تفاوت ساختار همتا و آنالوگ"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص ساختار همتا از روی تصویر"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل شواهد"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص ساختار همتا و آنالوگ",
              "ناتوانی در تفسیر سنگواره‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "تشخیص ساختار همتا از آنالوگ"
            ],
            "warning_points": [
              "ساختارهای همتا نشان‌دهنده نیای مشترک هستند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "شواهد عینی برای تکامل.",
            "study_strategy": "مطالعه مثال‌های هر نوع شواهد",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t6_1"
          },
          "memory_support": {
            "memory_tips": "همتا (همولوگ) = طرح یکسان، آنالوگ = عملکرد یکسان.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "دست انسان، بال پرنده، باله دلفین (ساختارهای همتا)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۰ (سنگواره گیسو)",
              "شکل ۱۱ (ساختارهای همتا)",
              "شکل ۱۲ (ساختار وستیجیال)"
            ],
            "important_examples": [
              "بقایای پا در مار (وستیجیال)",
              "دست انسان و بال پرنده (همتا)"
            ],
            "real_life_examples": [
              "تشریح مقایسه‌ای در پزشکی",
              "ردیابی بیماری‌ها با مطالعات مولکولی"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 6,
      "chapter_title": "از ماده به انرژی",
      "chapter_objectives": [
        "درک نقش ATP به عنوان حامل انرژی",
        "بررسی مراحل تنفس هوازی (قندکافت، اکسایش پیرووات، چرخه کربس، زنجیره انتقال الکترون)",
        "بررسی نقش راکیزه در تنفس هوازی",
        "درک فرایند تخمیر (الکلی و الکتیکی) و شرایط انجام آن"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 8,
      "overall_importance": 9,
      "prerequisite_chapters": [
        "زیست شناسی دهم (انرژی و متابولیسم)"
      ],
      "next_chapters": [
        7,
        8,
        9
      ],
      "topics": [
        {
          "id": "t6_1",
          "title": "تنفس یاخته‌ای هوازی",
          "core_knowledge": {
            "explanation": "تنفس یاخته‌ای هوازی فرایند تجزیه کامل گلوکز در حضور اکسیژن است که به تولید ATP, CO2 و H2O منجر می‌شود. این فرایند شامل سه مرحله اصلی است: 1) قندکافت (گلیکولیز) در سیتوپلاسم، 2) اکسایش پیرووات و چرخه کربس در راکیزه، 3) زنجیره انتقال الکترون در غشای داخلی راکیزه. در زنجیره انتقال الکترون، NADH و FADH2 الکترون‌های خود را به اکسیژن می‌دهند و با پمپ شدن پروتون‌ها، ATP سنتاز ATP تولید می‌کند.",
            "complete_definition": "تنفس هوازی یک فرایند متابولیکی است که در آن گلوکز در حضور اکسیژن به CO2 و H2O تجزیه شده و ATP تولید می‌شود. مراحل: 1) قندکافت (گلیکولیز): تجزیه گلوکز به دو پیرووات در سیتوپلاسم، تولید 2 ATP و 2 NADH. 2) اکسایش پیرووات و چرخه کربس: در راکیزه، پیرووات به استیل کوآنزیم A تبدیل شده و وارد چرخه کربس می‌شود. در این مرحله CO2 آزاد شده و NADH, FADH2, ATP تولید می‌شوند. 3) زنجیره انتقال الکترون: الکترون‌های NADH و FADH2 از زنجیره عبور کرده و به اکسیژن می‌رسند. انرژی آزاد شده برای پمپ کردن پروتون‌ها و تولید ATP توسط ATP سنتاز استفاده می‌شود.",
            "key_concepts": [
              "تنفس یاخته‌ای",
              "هوازی",
              "قندکافت (گلیکولیز)",
              "راکیزه (میتوکندری)",
              "پیرووات",
              "استیل کوآنزیم A",
              "چرخه کربس",
              "زنجیره انتقال الکترون",
              "ATP سنتاز",
              "NADH",
              "FADH2",
              "ATP"
            ],
            "terminology": {
              "قندکافت (گلیکولیز)": "تجزیه گلوکز به دو پیرووات در سیتوپلاسم",
              "چرخه کربس": "چرخه ای از واکنش‌ها در راکیزه که استیل کوآنزیم A را به CO2 تجزیه می‌کند.",
              "زنجیره انتقال الکترون": "مجموعه مولکول‌های غشای داخلی راکیزه که الکترون‌ها را به اکسیژن منتقل می‌کنند.",
              "ATP سنتاز": "آنزیم سازنده ATP که با عبور پروتون‌ها از آن، انرژی تولید می‌کند."
            },
            "formulas": {
              "واکنش کلی تنفس": "C6H12O6 + 6O2 → 6CO2 + 6H2O + (30-32) ATP"
            },
            "laws": null,
            "principles": [
              "اکسیژن، گیرنده نهایی الکترون در زنجیره انتقال الکترون است.",
              "NADH و FADH2 حامل‌های الکترون هستند که انرژی را به زنجیره انتقال منتقل می‌کنند.",
              "پروتون‌ها (H+) از فضای داخلی به فضای بین دو غشای راکیزه پمپ می‌شوند و گرادیان ایجاد می‌کنند."
            ],
            "processes": [
              "قندکافت: گلوکز → 2 پیرووات + 2 ATP + 2 NADH",
              "اکسایش پیرووات: پیرووات → استیل کوآنزیم A + CO2 + NADH",
              "چرخه کربس: استیل کوآنزیم A → CO2 + 3 NADH + FADH2 + ATP",
              "زنجیره انتقال الکترون: NADH + FADH2 → الکترون‌ها به O2 → H2O + ATP"
            ],
            "mechanisms": [
              "پمپ پروتون",
              "ATP سنتاز"
            ],
            "reaction_types": [
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "آنزیم‌ها",
              "متابولیسم"
            ],
            "next_topics": [
              "t6_2",
              "t6_3"
            ],
            "concept_dependencies": [
              "نیاز به درک ATP و آنزیم‌ها"
            ],
            "required_background": null,
            "builds_upon": [
              "متابولیسم"
            ],
            "enables_learning_of": [
              "تنظیم تنفس",
              "متابولیسم چربی‌ها"
            ]
          },
          "relationships": {
            "related_topics": [
              "فتوسنتز",
              "تخمیر"
            ],
            "similar_concepts": [
              "تنفس بی‌هوازی (تخمیر)"
            ],
            "differences": [
              "تنفس هوازی به اکسیژن نیاز دارد و ATP بیشتری تولید می‌کند."
            ],
            "frequently_confused_with": [
              "تخمیر"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT3H",
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
              "مراحل تنفس هوازی",
              "محل انجام هر مرحله",
              "نقش اکسیژن",
              "محصولات هر مرحله",
              "نقش ATP سنتاز",
              "تشکیل آب در زنجیره انتقال"
            ],
            "hidden_points": [
              "تولید CO2 در چرخه کربس",
              "نقش گرادیان پروتون"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص جایگاه هر مرحله (سیتوپلاسم یا راکیزه)"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مراحل و ارتباط آنها"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در محل انجام مراحل (قندکافت در سیتوپلاسم، بقیه در راکیزه)",
              "فراموش کردن نقش اکسیژن به عنوان گیرنده الکترون",
              "ناتوانی در توضیح ATP سنتاز"
            ],
            "misconceptions": [
              "تنفس هوازی فقط در راکیزه انجام می‌شود."
            ],
            "difficult_parts": [
              "درک زنجیره انتقال الکترون و ATP سنتاز",
              "تشکیل آب"
            ],
            "warning_points": [
              "قندکافت در سیتوپلاسم انجام می‌شود و به اکسیژن نیاز ندارد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مهم‌ترین فرایند تولید انرژی.",
            "study_strategy": "مطالعه شکل ۹ (خلاصه تنفس) و مراحل به صورت گام‌به‌گام",
            "review_strategy": "مرور روزانه",
            "minimum_mastery_required": 95,
            "mastery_threshold": 100,
            "recommended_next_topic": "t6_2"
          },
          "memory_support": {
            "memory_tips": "قندکافت (سیتوپلاسم) → چرخه کربس (ماتریکس) → زنجیره انتقال (غشای داخلی).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "خط تولید ATP در کارخانه (راکیزه)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۴ (قندکافت)",
              "شکل ۶ (اکسایش پیرووات)",
              "شکل ۷ (چرخه کربس)",
              "شکل ۸ (زنجیره انتقال)",
              "شکل ۹ (خلاصه تنفس)"
            ],
            "important_examples": [
              "تولید ATP از یک مولکول گلوکز (30-32 ATP)"
            ],
            "real_life_examples": [
              "ورزش و تنفس",
              "متابولیسم"
            ]
          }
        },
        {
          "id": "t6_2",
          "title": "تخمیر (تنفس بی‌هوازی)",
          "core_knowledge": {
            "explanation": "تخمیر فرایند تجزیه ناقص گلوکز در نبود اکسیژن است که ATP کمتری تولید می‌کند. دو نوع اصلی تخمیر: 1) تخمیر الکلی (تولید اتانول و CO2) که در مخمرها (قارچ‌ها) و برخی گیاهان رخ می‌دهد. 2) تخمیر الکتیکی (تولید الکتات) که در برخی باکتری‌ها و ماهیچه‌های اسکلتی در شرایط کمبود اکسیژن رخ می‌دهد. در تخمیر، NADH الکترون‌های خود را به پیرووات (یا مشتقات آن) می‌دهد تا NAD+ بازتولید شود و قندکافت ادامه یابد.",
            "complete_definition": "تخمیر یک فرایند بی‌هوازی (بدون اکسیژن) است که در آن گلوکز به طور ناقص تجزیه شده و ATP تولید می‌شود. تخمیر الکلی: پیرووات به اتانول و CO2 تبدیل می‌شود. تخمیر الکتیکی: پیرووات به الکتات (اسید لاکتیک) تبدیل می‌شود. هدف اصلی تخمیر، بازتولید NAD+ برای ادامه قندکافت است.",
            "key_concepts": [
              "تخمیر",
              "بی‌هوازی",
              "تخمیر الکلی",
              "تخمیر الکتیکی",
              "اتانول",
              "الکتات",
              "NAD+",
              "بازتولید NAD+"
            ],
            "terminology": {
              "تخمیر الکلی": "تبدیل پیرووات به اتانول و CO2",
              "تخمیر الکتیکی": "تبدیل پیرووات به الکتات",
              "بازتولید NAD+": "فرایندی که در تخمیر، NADH را به NAD+ اکسید می‌کند تا قندکافت ادامه یابد."
            },
            "formulas": {
              "تخمیر الکلی": "پیرووات → اتانول + CO2",
              "تخمیر الکتیکی": "پیرووات → الکتات"
            },
            "laws": null,
            "principles": [
              "تخمیر در نبود اکسیژن انجام می‌شود.",
              "بازتولید NAD+ برای ادامه قندکافت ضروری است.",
              "تخمیر ATP کمتری نسبت به تنفس هوازی تولید می‌کند."
            ],
            "processes": [
              "تخمیر الکلی: قندکافت → پیرووات → اتانال → اتانول (با مصرف NADH)",
              "تخمیر الکتیکی: قندکافت → پیرووات → الکتات (با مصرف NADH)"
            ],
            "mechanisms": null,
            "reaction_types": [
              "اکسایش-کاهش"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t6_1"
            ],
            "next_topics": [
              "t6_3"
            ],
            "concept_dependencies": [
              "نیاز به درک قندکافت و NADH"
            ],
            "required_background": null,
            "builds_upon": [
              "تنفس هوازی"
            ],
            "enables_learning_of": [
              "متابولیسم در شرایط کمبود اکسیژن"
            ]
          },
          "relationships": {
            "related_topics": [
              "تنفس هوازی"
            ],
            "similar_concepts": [
              "تنفس هوازی"
            ],
            "differences": [
              "تخمیر بدون اکسیژن و با تولید ATP کمتر است."
            ],
            "frequently_confused_with": [
              "تنفس هوازی"
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
              "تشخیص تخمیر الکلی و الکتیکی",
              "محصولات هر نوع تخمیر",
              "محل انجام تخمیر",
              "علت انجام تخمیر (بازتولید NAD+)"
            ],
            "hidden_points": [
              "تخمیر در گیاهان",
              "تجمع الکتات در ماهیچه‌ها"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع تخمیر از روی محصولات"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل شرایط انجام تخمیر"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "فراموش کردن محصولات هر نوع تخمیر",
              "ناتوانی در توضیح نقش بازتولید NAD+"
            ],
            "misconceptions": [
              "تخمیر CO2 تولید نمی‌کند."
            ],
            "difficult_parts": [
              "درک نقش بازتولید NAD+"
            ],
            "warning_points": [
              "تخمیر الکلی CO2 تولید می‌کند، الکتیکی تولید نمی‌کند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مقایسه با تنفس هوازی.",
            "study_strategy": "مقایسه دو نوع تخمیر از نظر محصولات و کاربرد",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t6_3"
          },
          "memory_support": {
            "memory_tips": "الکلی = اتانول + CO2، الکتیکی = الکتات.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "تخمیر الکلی در نان و تخمیر الکتیکی در ماست."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۰ (تخمیر الکلی)",
              "شکل ۱۱ (تخمیر الکتیکی)"
            ],
            "important_examples": [
              "تولید نان (تخمیر الکلی)",
              "ترش شدن شیر (تخمیر الکتیکی)"
            ],
            "real_life_examples": [
              "تولید ماست، خیارشور",
              "درد عضلانی پس از ورزش (تجمع الکتات)"
            ]
          }
        },
        {
          "id": "t6_3",
          "title": "اثرات سمی مواد بر تنفس و پاداکسنده‌ها",
          "core_knowledge": {
            "explanation": "رادیکال‌های آزاد، مولکول‌های ناپایداری هستند که در اثر واکنش‌های اکسیژن در تنفس هوازی تولید می‌شوند و به یاخته آسیب می‌رسانند. پاداکسنده‌ها (مانند کاروتنوئیدها در میوه‌ها و سبزیجات) با خنثی‌سازی رادیکال‌های آزاد از یاخته محافظت می‌کنند. الکل و برخی مواد سمی (مانند سیانید و مونوکسیدکربن) با مهار آنزیم‌های تنفسی یا زنجیره انتقال الکترون، تنفس یاخته‌ای را مختل می‌کنند.",
            "complete_definition": "رادیکال‌های آزاد، گونه‌های اکسیژن واکنش‌پذیری هستند که در زنجیره انتقال الکترون تولید می‌شوند و به یاخته آسیب می‌رسانند. پاداکسنده‌ها با خنثی‌سازی آنها، از آسیب جلوگیری می‌کنند. الکل سرعت تشکیل رادیکال‌های آزاد را افزایش داده و عملکرد راکیزه را مختل می‌کند. سیانید زنجیره انتقال الکترون را مهار کرده و مونوکسیدکربن با اتصال به هموگلوبین، انتقال اکسیژن را کاهش می‌دهد.",
            "key_concepts": [
              "رادیکال آزاد",
              "پاداکسنده",
              "الکل",
              "سیانید",
              "مونوکسیدکربن",
              "آسیب به یاخته",
              "کبد"
            ],
            "terminology": {
              "رادیکال آزاد": "گونه‌ای ناپایدار با الکترون جفت‌نشده که واکنش‌پذیری بالایی دارد.",
              "پاداکسنده": "ماده‌ای که رادیکال‌های آزاد را خنثی می‌کند.",
              "سیانید": "سمی که زنجیره انتقال الکترون را مهار می‌کند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "رادیکال‌های آزاد می‌توانند به دنا و پروتئین‌ها آسیب برسانند.",
              "پاداکسنده‌ها خطر ابتلا به سرطان را کاهش می‌دهند.",
              "الکل باعث افزایش رادیکال‌های آزاد در کبد می‌شود."
            ],
            "processes": [
              "تشکیل رادیکال آزاد",
              "اثر پاداکسنده‌ها",
              "اثر الکل بر کبد"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t6_1"
            ],
            "next_topics": [
              "t7_1"
            ],
            "concept_dependencies": [
              "نیاز به درک زنجیره انتقال الکترون"
            ],
            "required_background": null,
            "builds_upon": [
              "تنفس هوازی"
            ],
            "enables_learning_of": [
              "سالمت و تغذیه"
            ]
          },
          "relationships": {
            "related_topics": [
              "سالمت",
              "تغذیه"
            ],
            "similar_concepts": [
              "آنتی‌اکسیدان‌ها"
            ],
            "differences": [],
            "frequently_confused_with": []
          },
          "learning_metadata": {
            "estimated_learning_time": "PT1.5H",
            "review_interval": "P7D",
            "forgetting_risk": 4,
            "difficulty_score": 4,
            "importance_score": 5,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "نقش پاداکسنده‌ها",
              "اثر الکل بر تنفس",
              "اثر سیانید و مونوکسیدکربن"
            ],
            "hidden_points": [
              "رابطه الکل و سرطان کبد"
            ],
            "trick_points": [],
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
              "تحلیل اثرات سمی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در توضیح نقش پاداکسنده‌ها"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک مکانیسم اثر رادیکال‌های آزاد"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "ارتباط با سلامت و تغذیه.",
            "study_strategy": "مطالعه ارتباط بین رادیکال‌های آزاد و سرطان",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t7_1"
          },
          "memory_support": {
            "memory_tips": "پاداکسنده = محافظ در برابر رادیکال‌های آزاد.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "رادیکال‌های آزاد مانند زنگ زدن آهن هستند."
          },
          "examples": {
            "textbook_examples": [
              "اثر الکل بر کبد",
              "سیانید و مونوکسیدکربن"
            ],
            "important_examples": [
              "کاروتنوئیدها به عنوان پاداکسنده"
            ],
            "real_life_examples": [
              "مصرف میوه و سبزیجات",
              "سیگار و سرطان"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 7,
      "chapter_title": "از انرژی به ماده",
      "chapter_objectives": [
        "درک ساختار برگ و سبزدیسه",
        "بررسی رنگیزه‌های فتوسنتزی و نقش آنها",
        "درک واکنش‌های وابسته به نور (فتوسیستم‌ها، زنجیره انتقال الکترون، تولید ATP و NADPH)",
        "بررسی واکنش‌های مستقل از نور (چرخه کالوین، تثبیت کربن)",
        "شناخت انواع گیاهان از نظر فتوسنتز (C3, C4, CAM)",
        "بررسی فتوسنتز در باکتری‌ها و آغازینیان"
      ],
      "estimated_total_learning_time": "PT12H",
      "overall_difficulty": 8,
      "overall_importance": 9,
      "prerequisite_chapters": [
        6
      ],
      "next_chapters": [
        8,
        9
      ],
      "topics": [
        {
          "id": "t7_1",
          "title": "فتوسنتز: واکنش‌های وابسته به نور",
          "core_knowledge": {
            "explanation": "واکنش‌های وابسته به نور در غشای تیالکوئید سبزدیسه انجام می‌شوند. در این واکنش‌ها، انرژی نور توسط رنگیزه‌ها (کلروفیل و کاروتنوئید) جذب شده و الکترون‌ها برانگیخته می‌شوند. الکترون‌ها از فتوسیستم II به زنجیره انتقال الکترون رفته و به فتوسیستم I و سپس به NADP+ می‌رسند و NADPH تولید می‌شود. همزمان، تجزیه نوری آب در فتوسیستم II انجام شده و اکسیژن تولید می‌شود. پمپ شدن پروتون‌ها به فضای درون تیالکوئید باعث تولید ATP توسط ATP سنتاز می‌شود (فتسنتز نوری).",
            "complete_definition": "واکنش‌های وابسته به نور: 1) جذب نور توسط رنگیزه‌ها و برانگیختگی الکترون‌ها. 2) عبور الکترون‌ها از زنجیره انتقال الکترون (از فتوسیستم II به فتوسیستم I). 3) تجزیه نوری آب در فتوسیستم II (تولید O2, H+, الکترون). 4) تولید NADPH با کاهش NADP+. 5) تولید ATP با عبور پروتون‌ها از ATP سنتاز (فتسنتز نوری). محصولات این واکنش‌ها: ATP, NADPH, O2.",
            "key_concepts": [
              "فتوسنتز",
              "واکنش‌های وابسته به نور",
              "تیالکوئید",
              "کلروفیل",
              "کاروتنوئید",
              "فتوسیستم I",
              "فتوسیستم II",
              "زنجیره انتقال الکترون",
              "تجزیه نوری آب",
              "NADPH",
              "ATP",
              "فتسنتز نوری"
            ],
            "terminology": {
              "فتوسیستم": "مجموعه‌ای از رنگیزه‌ها و پروتئین‌ها در غشای تیالکوئید",
              "تجزیه نوری آب": "تجزیه آب با استفاده از انرژی نور در فتوسیستم II",
              "فتسنتز نوری": "ساخت ATP با استفاده از انرژی نور (در غشای تیالکوئید)"
            },
            "formulas": {
              "تجزیه نوری آب": "H2O → 2H+ + 1/2O2 + 2e-",
              "تشکیل NADPH": "NADP+ + 2e- + H+ → NADPH"
            },
            "laws": null,
            "principles": [
              "الکترون‌های برانگیخته از فتوسیستم II به فتوسیستم I منتقل می‌شوند.",
              "اکسیژن تولید شده در فتوسنتز از تجزیه آب است (نه از CO2).",
              "ATP و NADPH محصولات واکنش‌های نوری هستند."
            ],
            "processes": [
              "جذب نور",
              "انتقال الکترون",
              "تجزیه آب",
              "تولید ATP و NADPH"
            ],
            "mechanisms": [
              "پمپ پروتون",
              "ATP سنتاز"
            ],
            "reaction_types": [
              "اکسایش-کاهش",
              "فتوسنتز"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "ساختار کلروفیل",
              "انرژی نور"
            ],
            "next_topics": [
              "t7_2",
              "t7_3"
            ],
            "concept_dependencies": [
              "نیاز به درک انرژی نور و آنزیم‌ها"
            ],
            "required_background": null,
            "builds_upon": [
              "ساختار کلروفیل"
            ],
            "enables_learning_of": [
              "چرخه کالوین"
            ]
          },
          "relationships": {
            "related_topics": [
              "چرخه کالوین",
              "تنفس"
            ],
            "similar_concepts": [
              "زنجیره انتقال الکترون در تنفس"
            ],
            "differences": [
              "در فتوسنتز، الکترون‌ها با انرژی نور برانگیخته می‌شوند."
            ],
            "frequently_confused_with": [
              "زنجیره انتقال الکترون تنفس"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2.5H",
            "review_interval": "P3D",
            "forgetting_risk": 8,
            "difficulty_score": 8,
            "importance_score": 9,
            "reasoning_load": 8,
            "memory_load": 9
          },
          "exam_metadata": {
            "importance_for_konkur": 9,
            "probability_in_exam": 80,
            "exam_points": [
              "مراحل واکنش‌های نوری",
              "نقش فتوسیستم‌ها",
              "محصولات واکنش‌های نوری",
              "تجزیه نوری آب",
              "نقش NADP+"
            ],
            "hidden_points": [
              "تشابه و تفاوت با زنجیره انتقال الکترون تنفس"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص مسیر الکترون"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مسیر الکترون"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در مسیر الکترون (از فتوسیستم II به I)",
              "فراموش کردن نقش تجزیه نوری آب",
              "ناتوانی در تشخیص محل انجام واکنش‌ها (تیالکوئید)"
            ],
            "misconceptions": [
              "اکسیژن از CO2 تولید می‌شود."
            ],
            "difficult_parts": [
              "درک مسیر الکترون",
              "درک ATP سنتاز"
            ],
            "warning_points": [
              "اکسیژن تولید شده از تجزیه آب است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مرحله اول فتوسنتز و تأمین انرژی.",
            "study_strategy": "مطالعه شکل ۶ (مسیر الکترون) و مراحل به صورت گام‌به‌گام",
            "review_strategy": "مرور هر 3 روز یکبار",
            "minimum_mastery_required": 90,
            "mastery_threshold": 95,
            "recommended_next_topic": "t7_2"
          },
          "memory_support": {
            "memory_tips": "فتوسیستم II → زنجیره انتقال → فتوسیستم I → NADP+.",
            "mnemonic_devices": "II → I (عدد بزرگتر به کوچکتر).",
            "visual_imagination_trips": "خط تولید NADPH و ATP در غشای تیالکوئید."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۶ (مسیر الکترون)",
              "شکل ۴ و ۵ (آنتن و مرکز واکنش)"
            ],
            "important_examples": [
              "تولید اکسیژن در فتوسنتز (منشأ O2)"
            ],
            "real_life_examples": [
              "گیاهان و تولید اکسیژن"
            ]
          }
        },
        {
          "id": "t7_2",
          "title": "چرخه کالوین (واکنش‌های مستقل از نور)",
          "core_knowledge": {
            "explanation": "چرخه کالوین (واکنش‌های مستقل از نور) در بستره (استروما) سبزدیسه انجام می‌شود. در این چرخه، CO2 به یک قند پنج کربنی (ریبولوزییس فسفات) افزوده شده و سپس به قندهای سه کربنی تبدیل می‌شود. این فرایند به ATP و NADPH (تولید شده در واکنش‌های نوری) نیاز دارد. اولین ماده پایدار ساخته شده، یک ترکیب سه کربنی است (به همین دلیل گیاهان C3 نامیده می‌شوند).",
            "complete_definition": "چرخه کالوین (واکنش‌های مستقل از نور): فرایند تثبیت کربن که در بستره سبزدیسه انجام می‌شود. CO2 با قند پنج کربنی (ریبولوزییس فسفات) ترکیب شده و با استفاده از ATP و NADPH، به قند سه کربنی (G3P) تبدیل می‌شود. این قندها برای ساخته شدن گلوکز و بازسازی ریبولوزییس فسفات استفاده می‌شوند. اولین ماده پایدار در این چرخه یک ترکیب سه کربنی است.",
            "key_concepts": [
              "چرخه کالوین",
              "واکنش‌های مستقل از نور",
              "بستره (استروما)",
              "تثبیت کربن",
              "ریبولوزییس فسفات",
              "RuBisCO",
              "G3P (قند سه کربنی)",
              "گیاهان C3"
            ],
            "terminology": {
              "چرخه کالوین": "چرخه تثبیت کربن در فتوسنتز",
              "تثبیت کربن": "فرایند وارد کردن CO2 به ترکیبات آلی",
              "RuBisCO": "آنزیم اصلی تثبیت کربن که CO2 را به ریبولوزییس فسفات اضافه می‌کند.",
              "G3P": "قند سه کربنی که اولین ماده پایدار در چرخه کالوین است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "چرخه کالوین به ATP و NADPH نیاز دارد.",
              "آنزیم RuBisCO هم با CO2 و هم با O2 واکنش می‌دهد (تنفس نوری).",
              "گیاهان C3 اولین ماده پایدار سه کربنی دارند."
            ],
            "processes": [
              "ترکیب CO2 با ریبولوزییس فسفات",
              "تشکیل G3P",
              "ساخت گلوکز",
              "بازسازی ریبولوزییس فسفات"
            ],
            "mechanisms": null,
            "reaction_types": [
              "تثبیت کربن"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t7_1"
            ],
            "next_topics": [
              "t7_3",
              "t7_4"
            ],
            "concept_dependencies": [
              "نیاز به درک ATP و NADPH"
            ],
            "required_background": null,
            "builds_upon": [
              "واکنش‌های نوری"
            ],
            "enables_learning_of": [
              "انواع گیاهان (C3, C4, CAM)"
            ]
          },
          "relationships": {
            "related_topics": [
              "گیاهان C3, C4, CAM"
            ],
            "similar_concepts": [
              "چرخه کربس (تنفس)"
            ],
            "differences": [
              "چرخه کالوین CO2 را می‌گیرد، چرخه کربس CO2 تولید می‌کند."
            ],
            "frequently_confused_with": [
              "چرخه کربس"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
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
              "محل انجام چرخه کالوین",
              "نقش ATP و NADPH",
              "نقش RuBisCO",
              "اولین ماده پایدار (G3P)",
              "علت نامگذاری گیاهان C3"
            ],
            "hidden_points": [
              "تنفس نوری (رقابت O2 با CO2 برای RuBisCO)"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص اجزای چرخه"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل چرخه کالوین"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در محل انجام چرخه (بستره، نه تیالکوئید)",
              "فراموش کردن نقش ATP و NADPH",
              "ناتوانی در توضیح نقش RuBisCO"
            ],
            "misconceptions": [
              "چرخه کالوین به نور نیاز ندارد اما به محصولات واکنش‌های نوری وابسته است."
            ],
            "difficult_parts": [
              "درک چرخه کالوین",
              "تشخیص اولین ماده پایدار"
            ],
            "warning_points": [
              "چرخه کالوین مستقل از نور است اما به ATP و NADPH وابسته است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "مرحله ساخت قند در فتوسنتز.",
            "study_strategy": "مطالعه شکل ۷ (چرخه کالوین) و مراحل آن",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t7_3"
          },
          "memory_support": {
            "memory_tips": "کالوین = تثبیت CO2 → G3P.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "کارخانه تولید قند در بستره سبزدیسه."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۷ (چرخه کالوین)"
            ],
            "important_examples": [
              "گیاهان C3 (گندم، برنج)"
            ],
            "real_life_examples": [
              "محصولات کشاورزی (گیاهان C3)"
            ]
          }
        },
        {
          "id": "t7_3",
          "title": "گیاهان C4 و CAM (راه‌های جایگزین تثبیت کربن)",
          "core_knowledge": {
            "explanation": "گیاهان C4 و CAM مکانیسم‌های جایگزینی برای کاهش تنفس نوری هستند. گیاهان C4 (مانند ذرت و نیشکر) تثبیت کربن را در دو نوع یاخته (میانبرگ و غلاف آوندی) تقسیم می‌کنند. آنها CO2 را به ترکیب چهار کربنی تبدیل کرده و سپس CO2 را در غلاف آوندی آزاد می‌کنند تا RuBisCO با غلظت بالایی از CO2 کار کند. گیاهان CAM (مانند آناناس و کاکتوس) تثبیت کربن را در زمان (شب و روز) تقسیم می‌کنند و روزنه‌ها را در روز می‌بندند تا از اتلاف آب جلوگیری کنند.",
            "complete_definition": "گیاهان C4: با جداسازی فضایی تثبیت کربن، تنفس نوری را کاهش می‌دهند. CO2 در یاخته‌های میانبرگ به اسید چهار کربنی تبدیل و به غلاف آوندی منتقل می‌شود. در آنجا CO2 آزاد شده و وارد چرخه کالوین می‌شود. گیاهان CAM: با جداسازی زمانی تثبیت کربن (شب: جذب CO2 و تبدیل به اسید، روز: آزادسازی CO2 و ورود به چرخه کالوین) از اتلاف آب جلوگیری می‌کنند.",
            "key_concepts": [
              "گیاهان C4",
              "گیاهان CAM",
              "تنفس نوری",
              "میانبرگ",
              "غلاف آوندی",
              "اسید چهار کربنی",
              "جداسازی فضایی",
              "جداسازی زمانی"
            ],
            "terminology": {
              "گیاهان C4": "گیاهانی که اولین ماده پایدار تثبیت کربن، یک ترکیب چهار کربنی است.",
              "گیاهان CAM": "گیاهانی که برای کاهش اتلاف آب، روزنه‌ها را در روز می‌بندند و تثبیت کربن را در شب انجام می‌دهند.",
              "تنفس نوری": "واکنش RuBisCO با O2 به جای CO2 که باعث کاهش کارایی فتوسنتز می‌شود."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "گیاهان C4 و CAM برای کاهش تنفس نوری تکامل یافته‌اند.",
              "گیاهان C4 در مناطق گرم و خشک کارایی بیشتری دارند.",
              "گیاهان CAM در مناطق بسیار خشک (بیابان‌ها) زندگی می‌کنند."
            ],
            "processes": [
              "C4: جذب CO2 در میانبرگ → تشکیل اسید چهار کربنی → انتقال به غلاف آوندی → آزادسازی CO2 → چرخه کالوین",
              "CAM: جذب CO2 در شب (روزنه باز) → تشکیل اسید → آزادسازی CO2 در روز (روزنه بسته) → چرخه کالوین"
            ],
            "mechanisms": null,
            "reaction_types": [
              "تثبیت کربن"
            ]
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t7_2"
            ],
            "next_topics": [
              "t7_4"
            ],
            "concept_dependencies": [
              "نیاز به درک چرخه کالوین و تنفس نوری"
            ],
            "required_background": null,
            "builds_upon": [
              "چرخه کالوین"
            ],
            "enables_learning_of": [
              "اکولوژی گیاهان",
              "تنوع گیاهی"
            ]
          },
          "relationships": {
            "related_topics": [
              "چرخه کالوین",
              "تنفس نوری"
            ],
            "similar_concepts": [],
            "differences": [
              "C4 جداسازی فضایی، CAM جداسازی زمانی."
            ],
            "frequently_confused_with": [
              "گیاهان C3"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
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
              "تشخیص گیاهان C3, C4, CAM",
              "مکانیسم کاهش تنفس نوری در C4 و CAM",
              "تفاوت C4 و CAM"
            ],
            "hidden_points": [
              "نقش آنزیم‌های مختلف در C4 و CAM"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع گیاه از روی ساختار برگ"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "مقایسه"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل سازگاری گیاهان با محیط"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص C4 و CAM",
              "ناتوانی در توضیح مکانیسم C4",
              "فراموش کردن نقش جداسازی فضایی/زمانی"
            ],
            "misconceptions": [
              "گیاهان C4 و CAM نیازی به چرخه کالوین ندارند."
            ],
            "difficult_parts": [
              "درک مکانیسم C4 (دو نوع یاخته)",
              "درک مکانیسم CAM (جداسازی زمانی)"
            ],
            "warning_points": [
              "گیاهان C4 و CAM همچنان چرخه کالوین دارند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "سازگاری گیاهان با محیط.",
            "study_strategy": "مقایسه سه نوع گیاه از نظر ساختار و مکانیسم",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t7_4"
          },
          "memory_support": {
            "memory_tips": "C4 = دو نوع یاخته (فضایی), CAM = شب و روز (زمانی).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "ذرت (C4) و کاکتوس (CAM)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۰ (گیاهان C4)",
              "آناناس (CAM)"
            ],
            "important_examples": [
              "ذرت و نیشکر (C4)",
              "کاکتوس و آناناس (CAM)"
            ],
            "real_life_examples": [
              "محصولات کشاورزی در مناطق گرم (ذرت، نیشکر)"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 8,
      "chapter_title": "فناوری‌های نوین زیستی",
      "chapter_objectives": [
        "آشنایی با زیست فناوری و مهندسی ژنتیک",
        "بررسی مراحل همسانه‌سازی دنا",
        "درک مهندسی پروتئین و مهندسی بافت",
        "بررسی کاربردهای زیست فناوری در کشاورزی و پزشکی",
        "آشنایی با بیوانفورماتیک و نقش آن"
      ],
      "estimated_total_learning_time": "PT10H",
      "overall_difficulty": 6,
      "overall_importance": 8,
      "prerequisite_chapters": [
        1,
        2,
        5
      ],
      "next_chapters": [
        9
      ],
      "topics": [
        {
          "id": "t8_1",
          "title": "زیست فناوری و مهندسی ژنتیک",
          "core_knowledge": {
            "explanation": "زیست فناوری به کارگیری موجودات زنده برای تولید محصولات مفید است. مهندسی ژنتیک یکی از شاخه‌های زیست فناوری است که در آن ژن‌ها دستکاری می‌شوند. همسانه‌سازی دنا شامل جداسازی یک ژن، اتصال آن به یک ناقل (مانند پلاسمید باکتری) و وارد کردن آن به یاخته میزبان است. از آنزیم‌های برش‌دهنده (مانند EcoRI) و لیگاز برای این کار استفاده می‌شود. هدف تولید ژن‌های نوترکیب و پروتئین‌های مورد نظر است.",
            "complete_definition": "زیست فناوری: استفاده از موجودات زنده یا اجزای آنها برای تولید محصولات یا خدماتی که به نفع انسان باشند. مهندسی ژنتیک: دستکاری مستقیم ژن‌های یک موجود زنده. همسانه‌سازی دنا: جداسازی یک ژن، اتصال آن به یک ناقل (پلاسمید)، و انتقال آن به یاخته میزبان. آنزیم‌های برش‌دهنده (مانند EcoRI) دنا را در جایگاه‌های خاص برش می‌دهند و لیگاز قطعات را به هم متصل می‌کند.",
            "key_concepts": [
              "زیست فناوری",
              "مهندسی ژنتیک",
              "همسانه‌سازی دنا",
              "پلاسمید",
              "ناقل",
              "آنزیم برش‌دهنده (Restriction Enzyme)",
              "EcoRI",
              "انتهای چسبنده",
              "لیگاز",
              "دنا نوترکیب",
              "یاخته میزبان",
              "تراریخته"
            ],
            "terminology": {
              "پلاسمید": "مولکول دنا حلقوی خارج از کروموزوم در باکتری‌ها",
              "ناقل": "مولکول دنا که برای انتقال ژن خارجی به یاخته میزبان استفاده می‌شود.",
              "آنزیم برش‌دهنده": "آنزیمی که دنا را در جایگاه‌های خاص برش می‌زند.",
              "انتهای چسبنده": "انتهای دنا که یک رشته بلندتر از رشته دیگر است و به راحتی به انتهای مکمل متصل می‌شود.",
              "دنا نوترکیب": "دنا حاصل از اتصال قطعه دنا خارجی به ناقل."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "آنزیم‌های برش‌دهنده، توالی‌های خاصی را تشخیص می‌دهند.",
              "پلاسمیدها می‌توانند مستقل از کروموزوم باکتری تکثیر شوند.",
              "ژن مقاومت به پادزیست روی پلاسمید، امکان جداسازی یاخته‌های تراریخته را فراهم می‌کند."
            ],
            "processes": [
              "جداسازی ژن با آنزیم برش‌دهنده",
              "اتصال ژن به پلاسمید (با لیگاز)",
              "وارد کردن دنا نوترکیب به باکتری",
              "جداسازی باکتری‌های تراریخته (با استفاده از پادزیست)",
              "تکثیر و تولید محصول"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t1_3",
              "t2_1"
            ],
            "next_topics": [
              "t8_2",
              "t8_3"
            ],
            "concept_dependencies": [
              "نیاز به درک ساختار دنا"
            ],
            "required_background": null,
            "builds_upon": [
              "دنا و ژن"
            ],
            "enables_learning_of": [
              "کاربردهای زیست فناوری"
            ]
          },
          "relationships": {
            "related_topics": [
              "کاربردهای زیست فناوری"
            ],
            "similar_concepts": [
              "تراریخته",
              "دستکاری ژنتیکی"
            ],
            "differences": [],
            "frequently_confused_with": [
              "مهندسی پروتئین"
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
            "probability_in_exam": 60,
            "exam_points": [
              "مراحل همسانه‌سازی دنا",
              "نقش آنزیم‌های برش‌دهنده و لیگاز",
              "نقش پلاسمید",
              "انتهای چسبنده",
              "جداسازی باکتری‌های تراریخته",
              "مفهوم دنا نوترکیب"
            ],
            "hidden_points": [
              "کاربرد ژن مقاومت به پادزیست در جداسازی"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص جایگاه برش آنزیم"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "فرایند",
              "تشخیص"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مراحل همسانه‌سازی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در تشخیص نقش آنزیم‌های برش‌دهنده و لیگاز",
              "فراموش کردن نقش پلاسمید",
              "عدم درک مفهوم انتهای چسبنده"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک مکانیسم برش و اتصال دنا",
              "نقش انتهای چسبنده"
            ],
            "warning_points": [
              "آنزیم برش‌دهنده دنا را برش می‌زند، لیگاز متصل می‌کند."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه مهندسی ژنتیک و تولید فراورده‌های نوترکیب.",
            "study_strategy": "مطالعه شکل‌ها و مراحل به صورت گام‌به‌گام",
            "review_strategy": "مرور هر 5 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 92,
            "recommended_next_topic": "t8_2"
          },
          "memory_support": {
            "memory_tips": "برش (آنزیم برش‌دهنده) → اتصال (لیگاز) → انتقال (پلاسمید).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "قیچی (آنزیم برش‌دهنده) و چسب (لیگاز) برای ساخت دنا نوترکیب."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۲ (ایجاد انتهای چسبنده توسط EcoRI)",
              "شکل ۳ (پلاسمید)",
              "شکل ۴ (تشکیل دنا نوترکیب)",
              "شکل ۵ (وارد کردن به باکتری)"
            ],
            "important_examples": [
              "تولید انسولین انسانی با مهندسی ژنتیک"
            ],
            "real_life_examples": [
              "تولید داروهای نوترکیب",
              "گیاهان تراریخته"
            ]
          }
        },
        {
          "id": "t8_2",
          "title": "کاربردهای زیست فناوری در کشاورزی و پزشکی",
          "core_knowledge": {
            "explanation": "زیست فناوری در کشاورزی برای تولید گیاهان مقاوم به آفات (با انتقال ژن Bt)، مقاوم به علف‌کش‌ها و با ارزش غذایی بالاتر استفاده می‌شود. در پزشکی، برای تولید داروها (مانند انسولین)، واکسن‌ها (واکسن نوترکیب)، ژن درمانی و تشخیص بیماری‌ها کاربرد دارد. ژن درمانی شامل جایگزینی ژن معیوب با ژن سالم در یاخته‌های بیمار است.",
            "complete_definition": "کاربردهای کشاورزی: تولید گیاهان تراریخته مقاوم به آفات (با ژن Bt از باکتری)، مقاوم به علف‌کش‌ها، و با ارزش غذایی بهبود یافته. کاربردهای پزشکی: تولید داروها (انسولین، هورمون رشد)، واکسن‌های نوترکیب (واکسن هپاتیت B)، ژن درمانی (جایگزینی ژن معیوب)، و تشخیص بیماری‌ها (با استفاده از دنا).",
            "key_concepts": [
              "گیاهان تراریخته",
              "ژن Bt (پروتئین سمی برای حشرات)",
              "مقاومت به آفات",
              "تولید دارو با مهندسی ژنتیک",
              "انسولین نوترکیب",
              "واکسن نوترکیب",
              "ژن درمانی",
              "تشخیص بیماری"
            ],
            "terminology": {
              "ژن Bt": "ژن تولیدکننده پروتئین سمی برای حشرات از باکتری باسیلوس تورینجینسیس",
              "تراریخته": "جاندار دست‌ورزی شده ژنتیکی",
              "ژن درمانی": "جایگزینی ژن معیوب با ژن سالم در یاخته‌های بیمار"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "پروتئین Bt به صورت غیرفعال در باکتری است و در لوله گوارش حشره فعال می‌شود.",
              "انسولین نوترکیب نسبت به انسولین حیوانی ایمنی‌زایی کمتری دارد."
            ],
            "processes": [
              "جداسازی ژن Bt → انتقال به گیاه → تولید گیاه مقاوم",
              "استخراج ژن انسولین → انتقال به باکتری → تولید انسولین"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t8_1"
            ],
            "next_topics": [
              "t8_3",
              "t9_1"
            ],
            "concept_dependencies": [
              "نیاز به درک مهندسی ژنتیک"
            ],
            "required_background": null,
            "builds_upon": [
              "مهندسی ژنتیک"
            ],
            "enables_learning_of": [
              "کاربردهای زیست فناوری"
            ]
          },
          "relationships": {
            "related_topics": [
              "مهندسی ژنتیک"
            ],
            "similar_concepts": [],
            "differences": [],
            "frequently_confused_with": [
              "بیوانفورماتیک"
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
              "کاربرد زیست فناوری در کشاورزی (ژن Bt)",
              "کاربرد در پزشکی (تولید دارو، واکسن، ژن درمانی)",
              "مراحل تولید انسولین نوترکیب",
              "تشخیص بیماری با روش‌های مبتنی بر دنا"
            ],
            "hidden_points": [
              "نحوه عملکرد ژن Bt (فعال شدن در حشره)"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص کاربرد در کشاورزی یا پزشکی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص کاربرد",
              "توضیح فرایند"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل نمونه‌های کاربرد"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در توضیح نحوه عملکرد ژن Bt",
              "فراموش کردن مراحل تولید انسولین"
            ],
            "misconceptions": [],
            "difficult_parts": [
              "درک مراحل تولید انسولین (دو زنجیره جداگانه)"
            ],
            "warning_points": [
              "پروتئین Bt در باکتری غیرفعال است و در حشره فعال می‌شود."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "کاربردهای عملی و تأثیرگذار.",
            "study_strategy": "مطالعه مثال‌های مختلف و نقش آنها",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t8_3"
          },
          "memory_support": {
            "memory_tips": "Bt = مقاومت به آفت, انسولین = اولین داروی تولید شده با مهندسی ژنتیک.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "ذرت مقاوم به آفت و تولید انسولین در کارخانه‌های زیستی."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۲ (پنبه Bt)",
              "شکل ۱۳ و ۱۴ (تولید انسولین)"
            ],
            "important_examples": [
              "تولید انسولین انسانی با مهندسی ژنتیک",
              "واکسن هپاتیت B"
            ],
            "real_life_examples": [
              "ذرت و پنبه تراریخته",
              "انسولین نوترکیب",
              "ژن درمانی برای بیماری‌های ژنتیکی"
            ]
          }
        }
      ]
    },
    {
      "chapter_number": 9,
      "chapter_title": "رفتارهای جانوران",
      "chapter_objectives": [
        "بررسی رفتار غریزی و نقش ژن‌ها در آن",
        "درک یادگیری و انواع آن (خوگیری، شرطی شدن کالسیک، شرطی شدن فعال، حل مسئله، نقش‌پذیری)",
        "بررسی رفتارهای تولیدمثلی (انتخاب جفت، نظام جفت‌گیری)",
        "بررسی رفتارهای اجتماعی (قلمروخواهی، مهاجرت، زندگی گروهی، دگرخواهی)"
      ],
      "estimated_total_learning_time": "PT10H",
      "overall_difficulty": 6,
      "overall_importance": 7,
      "prerequisite_chapters": [],
      "next_chapters": [],
      "topics": [
        {
          "id": "t9_1",
          "title": "رفتار غریزی و یادگیری",
          "core_knowledge": {
            "explanation": "رفتار غریزی، رفتاری ارثی و ژنی است که در همه افراد یک گونه یکسان است (مانند رفتار مراقبت مادری). یادگیری، تغییر رفتار بر اساس تجربه است. انواع یادگیری شامل: 1) خوگیری (عادی شدن به محرک بی‌اهمیت)، 2) شرطی شدن کالسیک (ارتباط بین محرک طبیعی و شرطی)، 3) شرطی شدن فعال (آزمون و خطا، ارتباط بین رفتار و پاداش/تنبیه)، 4) حل مسئله (استفاده از تجربیات قبلی برای موقعیت جدید)، 5) نقش‌پذیری (یادگیری در دوره حساس زندگی).",
            "complete_definition": "رفتار غریزی: رفتاری که به طور ژنتیکی برنامه‌ریزی شده است و در همه افراد گونه یکسان است. یادگیری: تغییر رفتار در نتیجه تجربه. انواع یادگیری: خوگیری (عدم پاسخ به محرک تکراری بی‌اهمیت)، شرطی شدن کالسیک (پاولوف)، شرطی شدن فعال (اسکینر، آزمون و خطا)، حل مسئله (استفاده از تجربه برای حل مسئله جدید)، نقش‌پذیری (یادگیری در دوره حساس).",
            "key_concepts": [
              "رفتار غریزی",
              "یادگیری",
              "خوگیری",
              "شرطی شدن کالسیک",
              "شرطی شدن فعال (آزمون و خطا)",
              "حل مسئله",
              "نقش‌پذیری",
              "دوره حساس"
            ],
            "terminology": {
              "رفتار غریزی": "رفتار ارثی و یکسان در همه افراد گونه",
              "خوگیری": "کاهش پاسخ به یک محرک تکراری بی‌اهمیت",
              "شرطی شدن کالسیک": "یادگیری با همراه کردن یک محرک بی‌اثر با محرک طبیعی",
              "شرطی شدن فعال": "یادگیری با آزمون و خطا (ارتباط رفتار با پاداش یا تنبیه)",
              "نقش‌پذیری": "یادگیری در یک دوره حساس از زندگی"
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "بسیاری از رفتارها ترکیبی از غریزه و یادگیری هستند.",
              "یادگیری به جانور کمک می‌کند تا با محیط متغیر سازگار شود.",
              "دوره حساس برای نقش‌پذیری محدود است."
            ],
            "processes": [
              "انواع یادگیری و نحوه انجام آنها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [],
            "next_topics": [
              "t9_2",
              "t9_3"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [],
            "enables_learning_of": [
              "رفتارهای اجتماعی"
            ]
          },
          "relationships": {
            "related_topics": [
              "رفتارهای اجتماعی",
              "تولیدمثل"
            ],
            "similar_concepts": [
              "رفتارهای اکتسابی"
            ],
            "differences": [
              "غریزه ارثی است، یادگیری اکتسابی است."
            ],
            "frequently_confused_with": [
              "رفلکس"
            ]
          },
          "learning_metadata": {
            "estimated_learning_time": "PT2H",
            "review_interval": "P7D",
            "forgetting_risk": 6,
            "difficulty_score": 5,
            "importance_score": 6,
            "reasoning_load": 5,
            "memory_load": 7
          },
          "exam_metadata": {
            "importance_for_konkur": 6,
            "probability_in_exam": 40,
            "exam_points": [
              "تشخیص رفتار غریزی و یادگیری",
              "تشخیص انواع یادگیری",
              "شرطی شدن کالسیک و فعال",
              "نقش‌پذیری"
            ],
            "hidden_points": [
              "برهم‌کنش غریزه و یادگیری"
            ],
            "trick_points": [
              "سوالات مربوط به تشخیص نوع یادگیری از روی مثال"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "تحلیل"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل مثال‌های رفتاری"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "اشتباه در تشخیص انواع یادگیری",
              "ناتوانی در تشخیص نقش‌پذیری"
            ],
            "misconceptions": [
              "همه رفتارها غریزی هستند."
            ],
            "difficult_parts": [
              "تشخیص شرطی شدن کالسیک از فعال"
            ],
            "warning_points": [
              "نقش‌پذیری فقط در دوره حساس رخ می‌دهد."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "پایه شناخت رفتار جانوران.",
            "study_strategy": "مطالعه مثال‌های کتاب و تشخیص نوع یادگیری",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 85,
            "mastery_threshold": 90,
            "recommended_next_topic": "t9_2"
          },
          "memory_support": {
            "memory_tips": "غریزه = ارثی، یادگیری = تجربی.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "سگ پاولوف (شرطی شدن کالسیک) و موش اسکینر (شرطی شدن فعال)."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱ (جوجه کاکایی)",
              "شکل ۲ (موش و ژن B)",
              "شکل ۴ (پاولوف)",
              "شکل ۵ (اسکینر)",
              "شکل ۶ (شامپانزه)",
              "شکل ۸ (نقش‌پذیری)"
            ],
            "important_examples": [
              "رفتار مراقبت مادری (غریزی)",
              "آزمایش پاولوف",
              "جعبه اسکینر",
              "نقش‌پذیری غازها"
            ],
            "real_life_examples": [
              "تربیت حیوانات",
              "روانشناسی یادگیری"
            ]
          }
        },
        {
          "id": "t9_2",
          "title": "رفتارهای تولیدمثلی و جفت‌یابی",
          "core_knowledge": {
            "explanation": "رفتارهای تولیدمثلی شامل انتخاب جفت و نظام جفت‌گیری هستند. در انتخاب جفت، معمولاً ماده‌ها به دلیل هزینه بیشتر تولیدمثل، جفت را انتخاب می‌کنند. صفات ثانویه جنسی نرها (مانند دم طاووس) نشانه‌ای از سلامت و کیفیت ژنتیکی است. نظام‌های جفت‌گیری شامل تک همسری (هر دو والد از زاده‌ها مراقبت می‌کنند) و چندهمسری (معمولاً ماده از زاده‌ها مراقبت می‌کند) هستند.",
            "complete_definition": "رفتارهای تولیدمثلی: 1) انتخاب جفت: فرایندی که در آن جانوران ویژگی‌های جفت خود را ارزیابی می‌کنند. ماده‌ها معمولاً هزینه بیشتری برای تولیدمثل پرداخت می‌کنند، بنابراین جفت را انتخاب می‌کنند. صفات ثانویه جنسی نر (دم طاووس، شاخ گوزن) نشانه سلامت و ژن‌های خوب است. 2) نظام جفت‌گیری: تک همسری (هر دو والد از زاده‌ها مراقبت می‌کنند) و چندهمسری (معمولاً ماده از زاده‌ها مراقبت می‌کند).",
            "key_concepts": [
              "انتخاب جفت",
              "صفات ثانویه جنسی",
              "هزینه تولیدمثل",
              "تک همسری",
              "چندهمسری"
            ],
            "terminology": {
              "انتخاب جفت": "فرایند انتخاب جفت مناسب برای تولیدمثل",
              "صفات ثانویه جنسی": "ویژگی‌های ظاهری که در جفت‌یابی نقش دارند (مثل دم طاووس).",
              "هزینه تولیدمثل": "انرژی و زمانی که یک جانور برای تولیدمثل و مراقبت از زاده‌ها صرف می‌کند.",
              "تک همسری": "نظام جفت‌گیری که در آن هر دو والد از زاده‌ها مراقبت می‌کنند."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "جانوری که هزینه بیشتری برای تولیدمثل پرداخت می‌کند، معمولاً جفت را انتخاب می‌کند.",
              "صفات ثانویه جنسی نشانه‌های قابل اعتماد از کیفیت ژنتیکی هستند."
            ],
            "processes": [
              "ارزیابی ویژگی‌های جفت",
              "انتخاب جفت",
              "جفت‌گیری و مراقبت از زاده‌ها"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t9_1"
            ],
            "next_topics": [
              "t9_3"
            ],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [
              "رفتار"
            ],
            "enables_learning_of": [
              "رفتارهای اجتماعی"
            ]
          },
          "relationships": {
            "related_topics": [
              "انتخاب طبیعی"
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
            "importance_score": 5,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "تشخیص انتخاب جفت",
              "علت انتخاب جفت توسط ماده",
              "نقش صفات ثانویه جنسی",
              "تشخیص نظام جفت‌گیری (تک همسری و چندهمسری)"
            ],
            "hidden_points": [
              "هزینه تولیدمثل"
            ],
            "trick_points": [
              "سوالات مربوط به علت انتخاب جفت"
            ],
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
              "تحلیل رفتار جفت‌یابی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در توضیح علت انتخاب جفت توسط ماده"
            ],
            "misconceptions": [
              "همیشه نرها جفت را انتخاب می‌کنند."
            ],
            "difficult_parts": [
              "درک هزینه تولیدمثل"
            ],
            "warning_points": []
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "رفتارهای مرتبط با تولیدمثل.",
            "study_strategy": "مطالعه مثال طاووس و جیرجیرک",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": "t9_3"
          },
          "memory_support": {
            "memory_tips": "ماده = هزینه بیشتر = انتخاب جفت.",
            "mnemonic_devices": null,
            "visual_imagination_trips": "طاووس نر با دم زینتی و طاووس ماده در حال انتخاب."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۰ (طاووس)",
              "جیرجیرک"
            ],
            "important_examples": [
              "دم طاووس",
              "شاخ گوزن"
            ],
            "real_life_examples": [
              "رفتار جفت‌یابی در پرندگان",
              "انتخاب جفت در انسان"
            ]
          }
        },
        {
          "id": "t9_3",
          "title": "رفتارهای اجتماعی: قلمروخواهی، مهاجرت، زندگی گروهی و دگرخواهی",
          "core_knowledge": {
            "explanation": "رفتارهای اجتماعی شامل قلمروخواهی (دفاع از یک منطقه برای منابع و جفت‌یابی)، مهاجرت (حرکت فصلی برای غذا و تولیدمثل با استفاده از جهت‌یابی)، زندگی گروهی (مزایای امنیت و شکار گروهی) و دگرخواهی (کمک به دیگران با هزینه شخصی) هستند. دگرخواهی در بین خویشاوندان (برای انتقال ژن‌های مشترک) یا در سیستم‌های همکاری متقابل (که در آینده جبران می‌شود) رخ می‌دهد.",
            "complete_definition": "رفتارهای اجتماعی: قلمروخواهی: دفاع از یک منطقه برای دسترسی به منابع و جفت. مهاجرت: حرکت فصلی برای یافتن غذا یا مکان مناسب برای تولیدمثل. جهت‌یابی با استفاده از خورشید، ستارگان و میدان مغناطیسی زمین. زندگی گروهی: افزایش امنیت (نگهبانان) و کارایی شکار گروهی. دگرخواهی: رفتاری که به بقا و تولیدمثل دیگری کمک می‌کند و هزینه‌ای برای خود دارد (در خویشاوندان یا همکاری متقابل).",
            "key_concepts": [
              "قلمروخواهی",
              "مهاجرت",
              "جهت‌یابی",
              "میدان مغناطیسی زمین",
              "زندگی گروهی",
              "دگرخواهی",
              "خویشاوندی",
              "همکاری متقابل"
            ],
            "terminology": {
              "قلمروخواهی": "دفاع از یک منطقه خاص",
              "مهاجرت": "حرکت فصلی جانوران",
              "دگرخواهی": "رفتاری که به نفع دیگری و با هزینه شخصی است."
            },
            "formulas": null,
            "laws": null,
            "principles": [
              "قلمروخواهی دسترسی به منابع و جفت را افزایش می‌دهد.",
              "مهاجرت به جانوران کمک می‌کند از شرایط نامساعد محیطی فرار کنند.",
              "دگرخواهی در بین خویشاوندان با انتخاب خویشاوندی قابل توضیح است."
            ],
            "processes": [
              "جهت‌یابی",
              "دفاع از قلمرو",
              "همکاری در گروه"
            ],
            "mechanisms": null,
            "reaction_types": null
          },
          "learning_structure": {
            "prerequisite_topics": [
              "t9_1",
              "t9_2"
            ],
            "next_topics": [],
            "concept_dependencies": [],
            "required_background": null,
            "builds_upon": [
              "رفتار"
            ],
            "enables_learning_of": [
              "اکولوژی رفتاری"
            ]
          },
          "relationships": {
            "related_topics": [
              "اکولوژی",
              "انتخاب طبیعی"
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
            "importance_score": 5,
            "reasoning_load": 4,
            "memory_load": 5
          },
          "exam_metadata": {
            "importance_for_konkur": 5,
            "probability_in_exam": 30,
            "exam_points": [
              "تشخیص قلمروخواهی",
              "علت مهاجرت",
              "جهت‌یابی",
              "مزایای زندگی گروهی",
              "تشخیص دگرخواهی",
              "علت دگرخواهی"
            ],
            "hidden_points": [
              "نقش میدان مغناطیسی در جهت‌یابی"
            ],
            "trick_points": [
              "سوالات مربوط به علت دگرخواهی"
            ],
            "common_question_patterns": [
              "تشریحی",
              "چهارگزینه‌ای",
              "تحلیلی"
            ],
            "conceptual_question_types": [
              "تشخیص",
              "توضیح"
            ],
            "calculation_question_types": [],
            "analytical_question_types": [
              "تحلیل رفتارهای اجتماعی"
            ]
          },
          "student_behavior": {
            "common_student_mistakes": [
              "ناتوانی در توضیح علت دگرخواهی",
              "فراموش کردن نقش میدان مغناطیسی در جهت‌یابی"
            ],
            "misconceptions": [
              "دگرخواهی همیشه به ضرر فرد است و سودی ندارد."
            ],
            "difficult_parts": [
              "درک مفهوم دگرخواهی و علت آن"
            ],
            "warning_points": [
              "دگرخواهی در خویشاوندان به دلیل ژن‌های مشترک است."
            ]
          },
          "ai_advisor_metadata": {
            "advisor_recommendation": "رفتارهای جمعی و اجتماعی.",
            "study_strategy": "مطالعه مثال‌های هر رفتار",
            "review_strategy": "مرور هر 7 روز یکبار",
            "minimum_mastery_required": 80,
            "mastery_threshold": 85,
            "recommended_next_topic": null
          },
          "memory_support": {
            "memory_tips": "قلمرو (دفاع)، مهاجرت (حرکت)، گروه (همکاری)، دگرخواهی (کمک).",
            "mnemonic_devices": null,
            "visual_imagination_trips": "پرندگان مهاجر، مورچه‌های برگ‌بر، خفاش‌های خون‌آشام."
          },
          "examples": {
            "textbook_examples": [
              "شکل ۱۳ (قلمروخواهی)",
              "شکل ۱۴ (مهاجرت)",
              "شکل ۱۵ (مورچه‌ها)",
              "شکل ۱۶ (دگرخواهی)",
              "شکل ۱۷ (خفاش‌ها)"
            ],
            "important_examples": [
              "قلمروخواهی در پرندگان",
              "مهاجرت پرندگان و لاک‌پشت‌ها",
              "زندگی گروهی مورچه‌ها",
              "دگرخواهی در خفاش‌های خون‌آشام"
            ],
            "real_life_examples": [
              "حفاظت از قلمرو",
              "مهاجرت پرندگان",
              "زندگی اجتماعی حشرات"
            ]
          }
        }
      ]
    }
  ]
};

export default { BIOLOGY_12_KB };
