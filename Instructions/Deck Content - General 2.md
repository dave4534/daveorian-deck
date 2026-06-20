

(content within parentheses is instructional for you, claude code, and is not meant to serve as actual content that is displayed.)


# Header Bar
The header bar is fixed to the top of the web page with a width of 100%.

Left side of Header Bar: (44px circle of `dave.png`) +  Dave Orian Sr. Product Designer. (Color indigo)

Right side of header bar
- Theme Toggle
	- Position: Top-right corner, in the floating header
	- Form: Three small icon buttons inside a pill — Sun / System / Moon
	- Icons: Lucide
	- Three-dot Menu
		- Position: Top-right corner, to the right of the theme toggle pill
		- Form: Vertical three-dot icon (**Library:** [Lucide](https://lucide.dev/)  `MoreVertical`), opens a fly-out menu on click
		- Menu items: "Presenter Notes" (only item for now). 

### Presenter Notes Window

- Triggered by: "Presenter Notes" in the three-dot menu
- Opens via: `window.open()` — a separate detachable browser window (can be dragged to a second screen)
- Layout mirrors Google Slides speaker view:
    - Current slide preview (large)
    - Next slide preview (smaller)
    - Presenter notes for current slide (text, readable size)
    - Current slide number / total
- Sync: Bidirectional — navigating in either window updates the other
- Sync mechanism: `localStorage` events (cross-window communication without a server)
- Notes per slide: Specified in the content MD under `notes:` per slide


## Navigation

- **Input:** Keyboard arrows + footer button clicks
- **Footer — first slide:** Next (→) only
- **Footer — middle slides:** Previous (←) and Next (→)
- **Footer — last slide:** Previous (←) and Start Over
- **Button style:** Ghost button — outline only, subtle border, AAA-compliant text
- **Multi-part slides:** When Next is clicked on a slide that has `Part 1`, `Part 2`, etc., advance through parts first; only then go to the next slide
- Footer is fixed to the bottom of the view

## Slide 1

(two-column layout)

notes: 
- בVonage אני הייתי אחראיי על כל העיצוב של ה R+D מקצה לקצה
- בFiverr אני גם עיצבתי רוחבית והייתי המעצב המייסד של צוות הLocalization שעזר לנו לעשות סקייל לפייבר


Eyebrow: Case Study

H1:
Giving planners an AI based warning system

Body:
I'm curious about how to use design, code & AI to create meaningful experiences as humans and machines find new ways of communicating. 

Most recently I've worked at Fiverr (https://www.fiverr.com/)and Salesforce Field Service (https://www.salesforce.com/eu/service/field-service-management/). Proud to have mentored at Designlab (https://designlab.com/), CareerFoundry (https://careerfoundry.com/en/) and the Startup Designers (https://www.startupdesigners.co/) community.

Visual: `[Slide Visuals/dave.png](https://portfolio-vids.b-cdn.net/Capacity%20Animation%20Compressed.mov)` 700px wide in a container with 52px padding on all 4 sides

--- 

## Slide 2


(two-column layout)

notes: 
- ב Salesforce עבדתי בField Service שזה פלטפורמה לניהול צוותים ניידים כמו טכנאים ואנשי תחזוקה לחברות enterprise. אני בחרתי פרוייקט מסוים שאני חושב שיתקשר גם מה שאני עשיתי בsalesforce 
- קפסיטי פלנינג זה ניהול צוותי עבודה בשטח
- הפרוייקט שאני מציג עוסק באיך לעזור למנהלי צוותים לעבוד בזמן בלת״ם
- מה זה בלת״ם


Eyebrow: Capacity Planning
**H1:** Leading the design for an AI-agent based workforce planning system

**Subhead:** How I helped Salesforce Field Service Planners see capacity gaps before they became emergencies.

Key:Value Set (Key:Value == Bold body text for Key, Small body text for Value, separated by 4px. Key:Value pairs should be separated by 24px)

Key: Company
Value: Salesforce

Key: Role
Value: Product Designer

**Visual:** Hero shot of the final Capacity Planning dashboard. (`Slide Visuals/Capacity Planing Dashboard.png`)

---

## Slide 3

(two-column layout)

notes: 
- בפילד סרוויס אנחנו עבדנו עם כמה פרסונות
	- טכנאי
	- אנשי החמ״ל שמשבצים את הטכנאים ביום יום
	- פלנרז, שזה תפקיד תפעולי שעובד יותר על התמונה הגדולה של כוח אדם, מסתכל קדימה חודשים ומוודא שיהיו מספיק עובדים למשימות מתוכננות
	- אם יש מקרה חירום כמו רעידת אדמה וזה נהיה ברור שבחודש הקרוב לא יהיו מספיק טכנאים בשטח ביחס לעבודה



Eyebrow: The User
**H1:** What's a Planner?
Meet Sam, the Planner. 

Visual: (`Slide Visuals/Sam.png`) 
300px image. The image is centered vertically to the view, and the images in `technicians/` are displayed in a circular shape around sam.png and are slightly floating (animated) at slightly different timing. Each of the images in technicians/ is 48px x 48px

Salesforce Field Service powers enterprise companies including telecom crews and HVAC fleets with tools for their end-to-end operations.
Within large organizations, Operations Planners are responsible for making sure there are enough people to do the work in 1-3 months. 



---

## Slide 4

(two-column layout)

notes: 
- כשאני התחלתי לעבוד בלייספורס פילד סרוויס אני קיבלתי ownership של דומיין שנקרא קפסיטי לימיטס
- בתור מנהל צוותי טכנאים זה נותן יכולת לשמור כמות זמן מסויימת לכל סוג עבודה כל שבוע, כלומר זה לא תכנון, זה הרבה יותר פשוט, וזה יותר פיצר שעזר למנהלים ביום יום.
- עם הזמן הפיצר הזה הוצג בחברה וקיבלת תיעדוף להיות פלטפורמה שעוזרת למנהלי צוותים להתמודד עם בלתמים של חברות ענק

H1: A feature that evolved into a Suite
Body: 
- I owned the design for **Capacity Limits** at Salesforce Field Service
- The feature was showcased across the company and prioritized to evolve into a more holistic **Planning Suite**.

Visual: Video of the Capacity  https://portfolio-vids.b-cdn.net/Capacity%20Limits%20Video%203.mov


## Slide 5

(two-column layout)

notes:
none

**Eyebrow:** Understanding the Planner

Part 1 
Notes:
- אספתי את כל החומר המחקרי הקיים
- הכנסתי את זה ל notebooklm
- זה עדיין השאיר אותי במקום שאני חייב להבין יותר לעומק מה חווית הפלנר, מה הצרכים בהקשר של industries מסוימים
- הוצאתי לפועל workshop 



H2: We wanted to know: How did Planners resolve gaps today?
- Body: First I gathered existing research within the UX research organization as well as research done by an external third party and fed over 20 documents into a notebook LM.
- Body: I gathered domain experts and users into an affinity mapping workshop to understand how planners in specific industries were experiencing pains with planning.

Tools used:
- NotebookLM


Visual: (`Slide Visuals/Affinity Mapping.png`)




Part 2
Notes:
- חידדתי את הממצאים עם אנשי UX Research + Product
- הכנסתי את הממצאים ל chatGPT שעזר לי לייצר user stories
- השתמשתי ב Figma MCP בכדי לייצר פלואים ששמענו מפלנרז בפגישה




H2: Mapping out Planners' actual behavior
Body: I extracted user stories as well as a flowchart using Claude, and the Figma MCP within Claude. We learned the domain-specific language used in Planners' workflow
(Bullet list:)
- Reactive: Hiring, Up-Skilling, Capacity Limits
- Reactive: Rescheduling, Reallocation, Cross-Skilling

Tools used: two containers in a row, separated by 12px
- (`Slide Visuals/My Stack/Claude.svg`)+ "Claude" in 24px container
- (`Slide Visuals/My Stack/Figma.svg`)+ "Figma MCP" in 24px container

Visual: (`Slide Visuals/Capacity Flowchart.png`)


Part 3

Notes:
- המסר היה מאוד ברור. 
- ישנם בלת״מים - זה חלק טבעי מאוד מהעולם ולכן זה חלק משמעותי מהעבודה של פלנרז
- כרגע הם משתמשים בשיחות באל פה או טבלאות בכדי לנהל משא ומתן בין טריטוריות
- פלנרז ביקשו פתרון שיעזור להם עם הבורקרטיה של המשא ומאתן 

H2: After synthesizing the data, I found the layered themes from each pointing to a design approach.

(Build as a native two-row card grid — no image asset. Stagger card reveals ease out 700ms.) The grid should be spaced by 48px between each row and between each column.

Card structure: 
- Icon
- Title (Bold body)
- Body
- 24px padding for the whole card

Spacing:
- Space of 32px between card row 1 and Eyebrow below it
- Space of 24px between cards

**Section: What Planners face**
- **Power outages during storms** — Mutual aid agreements between utilities share resources but spike demand.
- **Humanitarian aid during crises** — Companies respond to worldwide SOS crises, such as climate emergencies.
- **Annual, advertised events** — Marketing campaigns and holiday shopping cause service demand spikes.

**Section: How they're expected to fix it**
- **Autonomous negotiation** — Enable AI agents to interact as planners who negotiate between organizations.
- **Upskill management** — Identify skill gaps and training needs; provide pathways for upskilling.
- **Allocation based on urgency** — Measure and prioritize according to urgency of work and service needs.

Transition Start (The autonomous negotiation card remains on the screen so that it can be animated displayed in the next slide.)


___


## Slide 6

notes: 
- אז בואו נדבר על Autonomous negotiation - משא ומתן אוטונומי
- לדוגמה אם יש לנו בלת״ם כמו נגיד מלחמה בצפון למשל, וחצי מהעובדים של סמנטה במילואים, היא תפנה לפלנר מכרמיאל לבדוק אם מתאפשר להם להעביר זמנית טכנאים עם קישורים ספציפיים
- בנוסף לנסיון להשלים כוח עבודה מטריטוריה ששייכת לחברה של הפלנר, יש גם לחברות גדולות או תאגידים הרבה פעמים הסדרים עם חברות אחרות והם עוזרים זה לזה 
- המוצר דגל של סיילספורס בשימוש ב AI הוא Agentforce
- היתה ציפייה מאוד ספציפית מהמעסיקים של הפלנרז שהם השתמשו ב AI בשביל לעזור לתמרן אין טריטוריות


Transition End (The autonomous negotiation card enters in a slide in animation with ease out and is displayed in the center of the slide.)

Eyebrow: Design exploration
H1: Deconstructing negotiation
Body:

Visual (please refer to `Deconstructing negotiation.png` image in `slide visuals/autonomous negotiation` as a visual reference as to how this slide should look)
(
Build a centered horizontal layout with three sections:

1. **Left side:**
    - Avatar-Planner.png (100x100)
    - Technicians-Left.png (48px height) positioned to the left of the avatar with 32px spacing between Avatar Planning.png and Technicians Left.png. 
2. **Center:**
    - Card containing the feature concept (Autonomous negotiation with description)
3. **Right side:**
    - Avatar-Sam.png (100x100)
    - Technicians-Right.png (48px height) positioned to the right of the avatar with 32px spacing between sam.png and Technicians Right.png. 
4. **Animated dashed lines:**
    - Animated lines share the same container with with Autonomous Negotiation card (container named Card + Animated Lines).
    - Card + Animated Lines must be vertically centered to the slide container
    - Line from Avatar-Planner toward center card
    - Line from Avatar-Sam toward center card
    - Animation: dashed line flows toward center (continuous loop)
    - Line color: matches design accent (appears to be indigo/blue)
    - 24px spacing on each side of the animated line
    - Animated line must be vertically centered to Card

)



---

## Slide 7


notes: 
- משא ומתן אוטונומי זה מושג שאפשר לתקוף מכמה זוויות, אחת השאלות המהותיות זה באיזה Entry point הכי עוזר לפלנר 
- אני עיצבתי הרבה אופציות, שכאן אני מראה 3 מתוך האופציות
- כשנוחתים על הדשבורד מגיעים בעצם לדשבורד שהוא מקוסתם עם איזה data points שהפלנר תבחר.
- כבררת מחדל החוויה שאני עיצבתי תענה לפלנר על שאלות כמו
	- כמו שיש מינוס בבנק, כמה שעות כוח אדם אני במינוס כרגע? למשל 2,500 שעות עבודה
	- מה כמות השעות של overtime?
	- וכן הלאה
- הentry point יכול להפיע בתור Daily brief מצד ימין, אחד מפורט או יותר מופשט, שנותן הזהרה כמו ״בעקבות מקרה חירום בצפון, זוהה מחסור ב2,500 שעות עבודה בחודש הקרוב״
- הEntry point גם יכול להופיע בחלק הכי עליון של העמוד, ולכן יכול לתת גם ריאות מוגברת, וגם מאפשרת ליותר גמישות קיסטום בדשבורד.




Eyebrow: Design Exploration
H1: Which entry point options are there for Autonomous Negotiation? 

Three-column layout with the structure:
- Body
- Image

Part 1

Column 1
Body: Daily brief (compacted)
Visual: `slide visuals/autonomouse negotiation/entry point 1`

Column 2
Body: Daily brief (detailed)
Visual: `slide visuals/autonomouse negotiation/entry point 2`

Column 3
Body: Daily brief (banner)
Visual: `slide visuals/autonomouse negotiation/entry point 3`

Part 2
Body remains for each column
Visual is replaced
(When Next is clicked, each image respectively switches to (folder path).2.png - for example, entry point 1.png is replaced by entry point 1.2.png on the screen in exactly the same location)

Explainer text pill: 
- (16px cursor logo and gemini logos spaced apart by 12px), 12px spacing and then "Gemini and Cursor were used to create live prototypes for testing" 
- A container with 8px padding and 40px border radius contains the text and icons. Container is centered horizontally 24px below the 3 columns
- See Color styling in [[Deck Design Visual Decisions]]

___

## Slide 8

(Two-column layout)

notes: 
- עיצבתי שתי כלים שמאפשרים לפלנר גם להשתמש ב AI Agent בכדי לנהל את המשא ומתן, וגם לעשות את זה ידני, עם עזרה של AI בבחירת הכוח אדם המתאים.
- המשתמש נוחת פה בדשבורד הוא רואה את המסר בבאנר
- הוא רואה את המדדים שלו להיום
- וידייק את אופציות הסינון בכדי להשוות למשל כמות כוח אדם מול כמות עבודה שבה יש צורך.
- בבאנר יש לי אופציה לעשות Assign to agent
- וגם יש לי אופציה לעשות את זה ידנית בוויזרד
- בואו נקליק על Assign to Agent
פלואו
- אני רואה תמונת על ברורה של כמה מתוך המחסור מתאפשר להשלים באופן אוטונומי, וכמה יצריך התערבות של בנאדם 
- אני מגדיר דגשים ספציפיים ואומר לAgent לתעדף חיפוש של טכנאים עם סקילז מסוימים 
- המשך פלואו


Eyebrow: Solution
**H2:** Approach #1: An AI agent-based approach to capacity gap detection and resolution
**Body:** 
- I designed An AI Gap Resolution Agent that can be entrusted to handle gap resolutions.
- Because AI patterns hadn't been established at Salesforce, I used the design system and emerging market patterns and best practices to design AI patterns for an exceptional user experience.

Visual: (look in `Slide Visuals/AI Flow/` and the images `AI - 1.png` through `AI - 4.png` — advance one image at a time while keeping the Header and body visible. 



---

## Slide 9

(Two-column layout)

notes: Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus ut.


Eyebrow: Solution
**H2:** Approach #2: A manual gap resolution approach 
**Body:** 
- Manual control enables the Planner to select specifically which Technicians are best to help fill the workforce gap.
- Candidates are automatically pre-qualified and displayed according to match percentage. 

Visual: (look in `Slide Visuals/Manual Flow/` and the images `Maual - 1.png` through `Maual - 4.png` — advance one image at a time while keeping the Header and body visible. 

---

## Slide 10

notes: 
כמה מספרים שעוזרים לקבל פרופורציה על הimpact
- חסכון של 15% Overtime בעקבות בלתמ״ים - כלומר מיליוני דולר בחודש נחסכים
- מניעה של 28% מהפגישות עם טכנאי שמובילות לביקור נוסף, בעקבות שיבוץ לא מתאים או אם לטכנאי לא היה את הקישורים לעבודה
- יעול של 25% מחברות שעדיין משתמשים באקסלים שגורמים להמון טעויות אנוש וזמן מבוזבז
- חסכון של 30% מכמות השעות עבודה בעקבות בלתמ״ים שעכשיו עם הכלי הזה הופכים להיות אירועים בשליטה ועם ידע מראש מה צריך ומתי.


Eyebrow: Takeaways
H1: The Capacity Gap Agent and Wizard in the field
Body: Our research showed a meaningful impact could be made when empowering Planners with these tools

Stat unit structure definition:
- Eyebrow
- H1 (for displaying the metric which is animated as a counter animation with ease out)
- Body (24px to the left of each stat is a light indigo vertical line that runs the height of the stat content - all of the)
- Max width: 300px

Stat grid
- 100px spacing between grid columns
- 100px spacing between grid rows

Stat 1
Eyebrow: Reactive scheduling
H1: 15%
Body: of total overtime is attributed to reactive adjustments from unplanned work and under-optimized routes

Stat 2
Eyebrow: Repeat visits
H1: 28%
Body: of scheduled appointments require a second visit, likely resulting from poor triage or under-skilling.

Stat 3
Eyebrow: Outdated tools
H3: 25%
Body: of companies still used spreadsheets for job scheduling, leading to increased error rates and information silos.

Stat 4
Eyebrow: Disrupted work
H1: 30%
Body: of total work hours are spent handling unplanned emergencies, disrupting planned work and reducing capacity.



___ 


## Slide 11

(context-driven layout)

notes: Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et.

Circular container, 100 x 100px with image of me, 3px gray border 50% opacity
`Slide Visuals/dave.png`

H2: "Thank you!" center aligned
Body: I appreciate you coming along this brief adventure with me. 
