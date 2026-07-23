import { CATEGORY, TONE } from '../config/engineConfig.js';

/**
 * messageRepository
 * -----------------------------------------------------------------------
 * Rules must never hardcode user-facing strings. They ask this repository
 * for a message by (category, tone) and pass in template variables; the
 * repository picks a random variant and interpolates it. This keeps
 * business logic and copywriting fully decoupled - Phase 2 rules stay
 * short, and marketing/localization can edit only this file.
 *
 * Template variables use {curlyBrace} placeholders.
 * -----------------------------------------------------------------------
 */

/** @type {Record<string, Record<string, string[]>>} */
const TEMPLATES = {
  [CATEGORY.ACHIEVEMENT]: {
    [TONE.CELEBRATION]: [
      'عالی بود! امروز {minutes} دقیقه مطالعه کردی 🎉',
      'دمت گرم! {minutes} دقیقه تمرکز خالص امروز ثبت شد.',
      'یه قدم دیگه جلو رفتی — {minutes} دقیقه مطالعه‌ی امروزت عالی بود.'
    ],
    [TONE.PERSONAL]: [
      'معمولاً یه‌جایی حدود {typical} دقیقه استراحت می‌کنی، ولی امروز {extra} دقیقه بیشتر از حد معمولت ادامه دادی. این یعنی پیشرفت واقعی نسبت به روال خودت.',
      'نسبت به الگوی همیشگیت، امروز {extra} دقیقه بیشتر تمرکز کردی. این دقیقاً همون چیزیه که باعث پیشرفت می‌شه.',
      'امروز از مرز معمول خودت ({typical} دقیقه) رد شدی و {extra} دقیقه بیشتر ادامه دادی — این یه سیگنال خیلی خوبه.'
    ]
  },
  [CATEGORY.MILESTONE]: {
    [TONE.CELEBRATION]: [
      'رکورد جدید! {streak} روز پشت‌سرهم مطالعه کردی 🔥',
      'به مرز {streak} روزه رسیدی — استریکت داره جدی می‌شه!',
      'مایلستون {streak} روزه رد شد؛ همینطوری ادامه بده.'
    ]
  },
  [CATEGORY.BURNOUT]: {
    [TONE.WARNING]: [
      'چند روزه با فشار بالا درس می‌خونی؛ یه استراحت واقعی بهت حق می‌رسه.',
      'نشونه‌های خستگی زیاد دیده می‌شه — یه وقفه کوتاه می‌تونه کمک کنه.',
      'روند فعلیت پایدار نیست؛ پیشنهاد می‌کنم امروز رو سبک‌تر بگیری.'
    ]
  },
  [CATEGORY.INCONSISTENCY]: {
    [TONE.CALM]: [
      'مطالعه‌ت این هفته پراکنده بوده — یه ریتم ثابت‌تر نتیجه بهتری می‌ده.',
      'چند روز پرکار و چند روز خالی داشتی؛ یکنواخت‌تر کردنش کمک می‌کنه.'
    ]
  },
  [CATEGORY.IMPROVEMENT]: {
    [TONE.MOTIVATION]: [
      'نسبت به هفته‌ی قبل {percent}% بیشتر مطالعه کردی — روند خیلی خوبیه.',
      'پیشرفت واضحیه: {percent}% رشد نسبت به هفته‌ی گذشته.'
    ]
  },
  [CATEGORY.DECLINE]: {
    [TONE.CALM]: [
      'مطالعه‌ت نسبت به هفته‌ی قبل {percent}% کمتر شده — چیزی هست که اذیتت می‌کنه؟',
      'یه افت {percent}% درصدی نسبت به هفته‌ی قبل داری؛ برگردیم رو ریتم قبلی؟'
    ]
  },
  [CATEGORY.GOAL]: {
    [TONE.FRIENDLY]: [
      'به {percent}% از هدف امروزت رسیدی — تا خط پایان کم مونده.',
      'هدف امروز نزدیکه: {percent}% انجام شده.'
    ]
  },
  [CATEGORY.FOCUS]: {
    [TONE.NEUTRAL]: [
      'جلسه‌های مطالعه‌ت میانگین {minutes} دقیقه‌ست — نزدیک به بازه‌ی ایده‌آل تمرکزه.',
      'طول جلسات فعلیت {minutes} دقیقه‌ست؛ می‌تونی با تنظیم تایمر بهترش کنی.'
    ],
    [TONE.PERSONAL]: [
      'الان توی یکی از ساعت‌هایی هستی که معمولاً بهترین تمرکز رو داری. وقت خوبیه برای یه جلسه‌ی جدی.',
      'این ساعت، طبق روال خودت، جزو بهترین بازه‌های تمرکزته — قدر این فرصت رو بدون.'
    ]
  },
  [CATEGORY.RECOMMENDATION_STUDY]: {
    [TONE.FRIENDLY]: [
      'الان زمان خوبیه برای شروع یه جلسه‌ی مطالعه‌ی کوتاه.',
      'یه جلسه‌ی {minutes} دقیقه‌ای همین الان می‌تونه روزت رو جمع کنه.'
    ]
  },
  [CATEGORY.RECOMMENDATION_REST]: {
    [TONE.CALM]: [
      'بعد از این حجم مطالعه، یه استراحت کوتاه بهت انرژی برمی‌گردونه.',
      'وقتشه چند دقیقه استراحت کنی قبل از جلسه‌ی بعدی.'
    ]
  },
  [CATEGORY.RECOMMENDATION_SUBJECT]: {
    [TONE.FRIENDLY]: [
      'درس {subject} این هفته کمتر از بقیه دیده شده — یه نگاهی بهش بنداز.',
      '{subject} مدتیه جا مونده؛ شاید وقتشه بهش برگردی.'
    ]
  },
  [CATEGORY.RECOMMENDATION_SCHEDULE]: {
    [TONE.NEUTRAL]: [
      'با توجه به الگوی مطالعه‌ت، جابه‌جا کردن ساعت مطالعه ممکنه نتیجه‌ی بهتری بده.',
      'زمان‌بندی فعلیت رو می‌تونی برای هماهنگی بهتر با انرژیت تنظیم کنی.'
    ]
  },
  [CATEGORY.MOTIVATION]: {
    [TONE.MOTIVATION]: [
      'هر جلسه‌ی مطالعه، حتی کوتاه، داره تو رو به هدف نزدیک‌تر می‌کنه.',
      'ثبات از پیشرفت شدیدِ مقطعی مهم‌تره — همینطوری ادامه بده.'
    ],
    [TONE.PERSONAL]: [
      'امروز کمتر از روال معمولت ({typical} دقیقه) مطالعه کردی. هر روز شبیه هم نیست، و این کاملاً طبیعیه — هر وقت آماده بودی، ادامه می‌دیم.',
      'به‌نظر می‌رسه امروز روز سبک‌تری بوده نسبت به معمولت. لازم نیست جبران کنی؛ فقط هر وقت حس بهتری داشتی برگرد.'
    ]
  },
  [CATEGORY.WARNING]: {
    [TONE.WARNING]: [
      'چند روزه ازت خبری نیست؛ حواست به برنامه‌ت باشه.',
      'یه وقفه‌ی طولانی توی مطالعه‌ت افتاده.'
    ]
  },
  [CATEGORY.NOTIFICATION]: {
    [TONE.NEUTRAL]: [
      'به‌روزرسانی جدیدی در وضعیت مطالعه‌ت ثبت شد.'
    ]
  }
};

function interpolate(template, vars = {}) {
  return template.replace(/\{(\w+)\}/g, (match, key) => (
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match
  ));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * Retrieves and interpolates a message. Falls back gracefully to a
 * neutral generic string if the (category, tone) pair has no templates,
 * so a missing copy entry never throws in production.
 */
export function getMessage(category, tone, vars = {}) {
  const byTone = TEMPLATES[category];
  const variants = (byTone && byTone[tone]) || (byTone && Object.values(byTone)[0]);
  if (!variants || variants.length === 0) {
    return interpolate('یک به‌روزرسانی جدید در روند مطالعه‌ت ثبت شد.', vars);
  }
  return interpolate(pickRandom(variants), vars);
}

/** Returns all registered variants for a given category/tone (useful for tests/preview tools). */
export function getVariants(category, tone) {
  const byTone = TEMPLATES[category];
  return (byTone && byTone[tone]) ? [...byTone[tone]] : [];
}

export default { getMessage, getVariants };
