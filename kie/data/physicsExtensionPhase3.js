/**
 * physicsExtensionPhase3.js  —  Kadoma knowledge base: فیزیک، فاز ۳
 * -----------------------------------------------------------------------
 * Source: user-provided physics extension (فیزیک_مرحله_سوم.txt), reflowed
 * into valid JSON and re-exported verbatim.
 * Shape: { kadoma_kb_extension_phase_3: { metadata, diagnostic_engine_rules,
 * ...recovery paths / advisor metadata / personal optimization... } }
 * -----------------------------------------------------------------------
 */
export const PHYSICS_KB_PHASE_3 = {
  "kadoma_kb_extension_phase_3": {
    "metadata": {
      "extension_phase": "Phase 3 - Diagnostic Rules, Recovery Paths, Advisor Metadata, and Personal Optimization",
      "status": "final_integration_chunk",
      "developer_notes": "Grounding in cognitive science and behavioral coaching for Konkur students"
    },
    "diagnostic_engine_rules": [
      {
        "rule_id": "DIAG_RULE_ELEVATOR_ACC_SIGN",
        "diagnostic_scenario": "دانش‌آموز در محاسبات آسانسور (فصل ۲ فیزیک دوازدهم)، هنگام پایین رفتن آسانسور با شتاب کندشونده، نیروی عمودی تکیه‌گاه را به صورت F_N = m(g-a) محاسبه می‌کند.",
        "root_cause_analysis": {
          "missing_prerequisite": "عدم درک رابطه برداری شتاب و سرعت (سینماتیک) و جهت‌دهی به نیروها بر اساس جهت شتاب (دینامیک).",
          "cognitive_misconception": "دانش‌آموز تصور می‌کند جهت حرکت (سرعت) همواره تعیین‌کننده جهت شتاب است. او متوجه نیست که 'پایین رفتن با شتاب کندشونده' یعنی جهت سرعت رو به پایین (منفی) ولی جهت شتاب رو به بالا (مثبت) است؛ لذا نیروی خالص رو به بالاست و فرمول درست F_N = m(g+a) می‌باشد."
        },
        "remediation_protocol": {
          "recommended_recovery_path": "RP_ELEVATOR_ACCELERATION_SIGN",
          "estimated_recovery_time_mins": 35,
          "textbook_reference": "Physics 3, Page 45, Example 2-6 (Elevator equilibrium states)"
        }
      },
      {
        "rule_id": "DIAG_RULE_ENERGY_ANGLE_TRAP",
        "diagnostic_scenario": "دانش‌آموز در مسائل پرتابه (فصل ۳ فیزیک دهم)، برای محاسبه سرعت نهایی در ارتفاع h، به دلیل داده نشدن زاویه پرتاب (theta) متوقف می‌شود و تصور می‌کند مسئله کمبود داده دارد.",
        "root_cause_analysis": {
          "missing_prerequisite": "درک نادرست از ویژگی 'مستقل از مسیر بودن کار نیروی گرانش' (نیروهای پایستار).",
          "cognitive_misconception": "دانش‌آموز به جای استفاده از رابطه ساده پایستگی انرژی (E_1 = E_2)، تلاش می‌کند مسئله را از طریق تجزیه برداری سرعت و سینماتیک دوازدهم حل کند."
        },
        "remediation_protocol": {
          "recommended_recovery_path": "RP_CONSERVATIVE_FIELDS_TRACKING",
          "estimated_recovery_time_mins": 25,
          "textbook_reference": "Physics 1, Page 68, Chapter 3 (Conservation of Mechanical Energy)"
        }
      },
      {
        "rule_id": "DIAG_RULE_SPEED_VS_VELOCITY_GRAPH",
        "diagnostic_scenario": "دانش‌آموز در نمودارهای سرعت - زمان (فصل ۱ فیزیک دوازدهم)، برای یافتن 'تندی متوسط' در بازه زمانی، از جابجایی (قدرمطلق تفاضل مساحت‌ها) استفاده می‌کند.",
        "root_cause_analysis": {
          "missing_prerequisite": "عدم تمایز بین مسافت پیموده شده (نرده‌ای) و جابجایی (برداری) در سطح هندسی نمودار.",
          "cognitive_misconception": "دانش‌آموز مساحت‌های زیر محور زمان را در محاسبه تندی متوسط منفی در نظر می‌گیرد، در حالی که برای تندی متوسط، مسافت کل (جمع قدرمطلق تمام مساحت‌ها) ملاک است."
        },
        "remediation_protocol": {
          "recommended_recovery_path": "RP_SPEED_VS_VELOCITY_GRAPHS",
          "estimated_recovery_time_mins": 30,
          "textbook_reference": "Physics 3, Page 12, Section 1-1 (Average Speed vs Average Velocity)"
        }
      }
    ],
    "recovery_paths": {
      "RP_ELEVATOR_ACCELERATION_SIGN": {
        "step_1": "شبیه‌سازی برداری سرعت (v) و شتاب (a): اگر متحرک کند شونده است، پیکان v و a را در جهت مخالف هم رسم کن.",
        "step_2": "بر اساس قانون دوم نیوتون، جهت نیروی خالص (F_net) همواره هم‌جهت با شتاب (a) است.",
        "step_3": "معادله نیروها را روی محور قائم بنویس: F_net = F_up - F_down = m * a.",
        "step_4": "حل تمرین‌های صفحه‌محور آسانسور با شتاب‌های مختلف برای تثبیت نشانه قانون نیوتون."
      },
      "RP_CONSERVATIVE_FIELDS_TRACKING": {
        "step_1": "بررسی حضور یا عدم حضور اصطکاک/مقاومت هوا. اگر ناچیز است، بلافاصله فرمول E_1 = E_2 را بنویس.",
        "step_2": "بنویس: K_1 + U_1 = K_2 + U_2.",
        "step_3": "جایگذاری مقادیر بدون توجه به زاویه پرتاب: 0.5 * m * v_1^2 + m * g * h_1 = 0.5 * m * v_2^2 + m * g * h_2.",
        "step_4": "حذف جرم (m) از طرفین و محاسبه سرعت نهایی مستقل از جرم و زاویه."
      },
      "RP_SPEED_VS_VELOCITY_GRAPHS": {
        "step_1": "رسم نمودار سرعت - زمان و هاشور زدن سطوح محصور بین نمودار و محور t.",
        "step_2": "مساحت‌های بالای محور t را S_up و مساحت‌های پایین محور را S_down بنام.",
        "step_3": "جابجایی برابر است با: Delta x = S_up - S_down.",
        "step_4": "مسافت پیموده شده برابر است با: l = S_up + S_down.",
        "step_5": "تقسیم مسافت بر زمان برای تندی متوسط و جابجایی بر زمان برای سرعت متوسط."
      }
    },
    "ai_advisor_metadata": {
      "mastery_assessment": {
        "concept_mastery_threshold": 0.85,
        "konkur_readiness_threshold": 0.8,
        "diagnostics_confidence_score": 0.9
      },
      "coaching_behavior_rules": {
        "on_fatigue_detection": {
          "action": "اگر دانش‌آموز پس از ۴۵ دقیقه مطالعه فیزیک سنگین (مانند دینامیک)، دچار افت سرعت پاسخ‌دهی (بیش از ۲ دقیقه برای هر تست متوسط) شد، سیستم باید تست‌های محاسباتی را متوقف کرده و به مدت ۵ دقیقه چالش‌های مفهومی تصویری (فیزیک دهم ویژگی‌های مواد) یا استراحت فعال صادر کند.",
          "optimization_strategy": "Dopamine-Reset: نمایش یک انیمیشن یا گیف کوتاه علمی فیزیک با پاداش نمادین (XP) برای بازگرداندن هشیاری ذهنی."
        },
        "on_consecutive_mistakes": {
          "action": "پس از ثبت ۳ خطای متوالی با تله یکسان (مثلاً تله علامت شتاب)، کادوما باید دسترسی به تست‌های جدید را قفل کرده و یک مینی‌کلاس ۳ دقیقه‌ای رفع اشکال فعال (شامل بازنویسی مسیر بازپروری شناختی توسط خود کاربر) را شروع کند.",
          "mastery_verification": "ارائه ۲ تست ساده از همان موضوع؛ باز کردن قفل تست‌های اصلی در صورت پاسخ صحیح."
        }
      },
      "motivation_and_focus_triggers": {
        "konkur_countdown_effect": "در ماه‌های نزدیک به کنکور، کادوما به جای مرور کل فصل‌ها، اولویت را روی 'High-Yield & Low-Difficulty' (مباحث پربازده و ساده مانند کار و انرژی یا الکتریسیته ساکن بخش اول) قرار می‌دهد تا با ایجاد حس موفقیت‌های کوچک، سطح استرس کاربر را بهینه‌سازی کند.",
        "study_streak_multiplier": "در صورت استمرار مطالعه روزانه فیزیک (حتی ۱۰ تست در روز)، ضریب پاداش دوپامینی (XP) کادوما فعال شده و مدال‌های مجازی 'تمرکز بی‌نهایت' را باز می‌کند."
      }
    }
  }
};

export default PHYSICS_KB_PHASE_3;
