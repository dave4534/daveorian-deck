export const SLIDE_PART_COUNTS = [1, 1, 1, 1, 3, 1, 2, 4, 4, 1, 1] as const;

export const TOTAL_SLIDES = SLIDE_PART_COUNTS.length;

export type SlideMeta = {
  title: string;
  /** Single string for all parts, or one entry per part when partCount > 1 */
  notes: string | string[];
  partCount: number;
};

export function slideNotes(meta: SlideMeta, part = 0): string {
  if (Array.isArray(meta.notes)) {
    return meta.notes[part] ?? meta.notes[0] ?? '';
  }
  return meta.notes;
}

export const SLIDE_META: SlideMeta[] = [
  {
    title: "Hi! I'm Dave.",
    notes: `• בVonage אני הייתי אחראיי על כל העיצוב של ה R+D מקצה לקצה
• בFiverr אני גם עיצבתי רוחבית והייתי המעצב המייסד של צוות הLocalization שעזר לנו לעשות סקייל לפייבר`,
    partCount: 1,
  },
  {
    title: 'Leading the design for an AI-agent based workforce planning system',
    notes: `• ב Salesforce עבדתי בField Service שזה פלטפורמה לניהול צוותים ניידים כמו טכנאים ואנשי תחזוקה לחברות enterprise. אני בחרתי פרוייקט מסוים שאני חושב שיתקשר גם מה שאני עשיתי בsalesforce
• קפסיטי פלנינג זה ניהול צוותי עבודה בשטח
• הפרוייקט שאני מציג עוסק באיך לעזור למנהלי צוותים לעבוד בזמן בלת״ם
• מה זה בלת״ם`,
    partCount: 1,
  },
  {
    title: "What's a Planner?",
    notes: `• בפילד סרוויס אנחנו עבדנו עם כמה פרסונות
  - טכנאי
  - אנשי החמ״ל שמשבצים את הטכנאים ביום יום
  - פלנרז, שזה תפקיד תפעולי שעובד יותר על התמונה הגדולה של כוח אדם, מסתכל קדימה חודשים ומוודא שיהיו מספיק עובדים למשימות מתוכננות
  - אם יש מקרה חירום כמו רעידת אדמה וזה נהיה ברור שבחודש הקרוב לא יהיו מספיק טכנאים בשטח ביחס לעבודה`,
    partCount: 1,
  },
  {
    title: 'A feature that evolved into a Suite',
    notes: `• כשאני התחלתי לעבוד בלייספורס פילד סרוויס אני קיבלתי ownership של דומיין שנקרא קפסיטי לימיטס
• בתור מנהל צוותי טכנאים זה נותן יכולת לשמור כמות זמן מסויימת לכל סוג עבודה כל שבוע, כלומר זה לא תכנון, זה הרבה יותר פשוט, וזה יותר פיצר שעזר למנהלים ביום יום.
• עם הזמן הפיצר הזה הוצג בחברה וקיבלת תיעדוף להיות פלטפורמה שעוזרת למנהלי צוותים להתמודד עם בלתמים של חברות ענק`,
    partCount: 1,
  },
  {
    title: 'My approach to understanding the Planner',
    notes: [
      `• אספתי את כל החומר המחקרי הקיים
• הכנסתי את זה ל notebooklm
• זה עדיין השאיר אותי במקום שאני חייב להבין יותר לעומק מה חווית הפלנר, מה הצרכים בהקשר של industries מסוימים
• הוצאתי לפועל workshop`,
      `• חידדתי את הממצאים עם אנשי UX Research + Product
• הכנסתי את הממצאים ל chatGPT שעזר לי לייצר user stories
• השתמשתי ב Figma MCP בכדי לייצר פלואים ששמענו מפלנרז בפגישה`,
      `• המסר היה מאוד ברור.
• ישנם בלת״מים - זה חלק טבעי מאוד מהעולם ולכן זה חלק משמעותי מהעבודה של פלנרז
• כרגע הם משתמשים בשיחות באל פה או טבלאות בכדי לנהל משא ומתן בין טריטוריות
• פלנרז ביקשו פתרון שיעזור להם עם הבורקרטיה של המשא ומאתן`,
    ],
    partCount: 3,
  },
  {
    title: 'Deconstructing negotiation',
    notes: `• אז בואו נדבר על Autonomous negotiation - משא ומתן אוטונומי
• לדוגמה אם יש לנו בלת״ם כמו נגיד מלחמה בצפון למשל, וחצי מהעובדים של סמנטה במילואים, היא תפנה לפלנר מכרמיאל לבדוק אם מתאפשר להם להעביר זמנית טכנאים עם קישורים ספציפיים
• בנוסף לנסיון להשלים כוח עבודה מטריטוריה ששייכת לחברה של הפלנר, יש גם לחברות גדולות או תאגידים הרבה פעמים הסדרים עם חברות אחרות והם עוזרים זה לזה
• המוצר דגל של סיילספורס בשימוש ב AI הוא Agentforce
• היתה ציפייה מאוד ספציפית מהמעסיקים של הפלנרז שהם השתמשו ב AI בשביל לעזור לתמרן אין טריטוריות`,
    partCount: 1,
  },
  {
    title: 'Which entry point options are there for Autonomous Negotiation?',
    notes: `• משא ומתן אוטונומי זה מושג שאפשר לתקוף מכמה זוויות, אחת השאלות המהותיות זה באיזה Entry point הכי עוזר לפלנר
• אני עיצבתי הרבה אופציות, שכאן אני מראה 3 מתוך האופציות
• כשנוחתים על הדשבורד מגיעים בעצם לדשבורד שהוא מקוסתם עם איזה data points שהפלנר תבחר.
• כבררת מחדל החוויה שאני עיצבתי תענה לפלנר על שאלות כמו
  - כמו שיש מינוס בבנק, כמה שעות כוח אדם אני במינוס כרגע? למשל 2,500 שעות עבודה
  - מה כמות השעות של overtime?
  - וכן הלאה
• הentry point יכול להפיע בתור Daily brief מצד ימין, אחד מפורט או יותר מופשט, שנותן הזהרה כמו ״בעקבות מקרה חירום בצפון, זוהה מחסור ב2,500 שעות עבודה בחודש הקרוב״
• הEntry point גם יכול להופיע בחלק הכי עליון של העמוד, ולכן יכול לתת גם ריאות מוגברת, וגם מאפשרת ליותר גמישות קיסטום בדשבורד.`,
    partCount: 2,
  },
  {
    title: 'Approach #1: An AI agent-based approach to capacity gap detection and resolution',
    notes: `• עיצבתי שתי כלים שמאפשרים לפלנר גם להשתמש ב AI Agent בכדי לנהל את המשא ומתן, וגם לעשות את זה ידני, עם עזרה של AI בבחירת הכוח אדם המתאים.
• המשתמש נוחת פה בדשבורד הוא רואה את המסר בבאנר
• הוא רואה את המדדים שלו להיום
• וידייק את אופציות הסינון בכדי להשוות למשל כמות כוח אדם מול כמות עבודה שבה יש צורך.
• בבאנר יש לי אופציה לעשות Assign to agent
• וגם יש לי אופציה לעשות את זה ידנית בוויזרד
• בואו נקליק על Assign to Agent

פלואו
• אני רואה תמונת על ברורה של כמה מתוך המחסור מתאפשר להשלים באופן אוטונומי, וכמה יצריך התערבות של בנאדם
• אני מגדיר דגשים ספציפיים ואומר לAgent לתעדף חיפוש של טכנאים עם סקילז מסוימים
• המשך פלואו`,
    partCount: 4,
  },
  {
    title: 'Approach #2: A manual gap resolution approach',
    notes:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus ut.',
    partCount: 4,
  },
  {
    title: 'The Capacity Gap Agent and Wizard in the field',
    notes: `כמה מספרים שעוזרים לקבל פרופורציה על הimpact
• חסכון של 15% Overtime בעקבות בלתמ״ים - כלומר מיליוני דולר בחודש נחסכים
• מניעה של 28% מהפגישות עם טכנאי שמובילות לביקור נוסף, בעקבות שיבוץ לא מתאים או אם לטכנאי לא היה את הקישורים לעבודה
• יעול של 25% מחברות שעדיין משתמשים באקסלים שגורמים להמון טעויות אנוש וזמן מבוזבז
• חסכון של 30% מכמות השעות עבודה בעקבות בלתמ״ים שעכשיו עם הכלי הזה הופכים להיות אירועים בשליטה ועם ידע מראש מה צריך ומתי.`,
    partCount: 1,
  },
  {
    title: 'Thank you!',
    notes:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et.',
    partCount: 1,
  },
];
