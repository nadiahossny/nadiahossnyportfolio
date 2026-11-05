const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const inventory = JSON.parse(fs.readFileSync('artifacts/visuals-expansion/review/inventory.json', 'utf8'));
// Captions follow the numbered contact-sheet review, not assumptions from filenames.
const captions = {
  'banners and flyers': [
    ['CMD roll-up banner mockup', 'نموذج عرض للافتة CMD الرأسية'],
    ['Revelio analytics roll-up banner', 'لافتة Revelio الرأسية بتصميم عن تحليل البيانات'],
    ['Revelio horizontal banner mockup', 'نموذج عرض للافتة Revelio الأفقية'],
    ['IEEE overhead event banner mockup', 'نموذج عرض للافتة IEEE المعلقة في قاعة']
  ],
  certificates: [
    ['Blue-and-gold achievement certificate template', 'قالب شهادة إنجاز بالأزرق والذهبي'],
    ['Arabic Quran memorization certificate', 'تصميم شهادة لحفظ القرآن الكريم'],
    ['IEEE workshop appreciation certificate template', 'قالب شهادة تقدير لورشة IEEE']
  ],
  'character design': [
    ['Blue robot character in a pointing pose', 'شخصية روبوت أزرق في وضع الإشارة'],
    ['Blue robot character with glasses and headphones', 'شخصية روبوت أزرق بنظارة وسماعات'],
    ['Grayscale robot character variations', 'تنويعات لشخصية روبوت بدرجات الرمادي'],
    ['Blue robot character without glasses', 'شخصية روبوت أزرق من دون نظارة'],
    ['Grayscale robot character presentation', 'عرض لشخصية روبوت بدرجات الرمادي']
  ],
  'CMD posts': [
    ['CMD course-roadmap and benefits template mockup', 'نموذج عرض لقوالب CMD لخريطة الدورة ومميزاتها'],
    ['CMD numbered course-benefits template', 'قالب CMD لعرض مميزات الدورة في نقاط مرقمة'],
    ['CMD curved six-stage course-roadmap template', 'قالب CMD لخريطة دورة بمسار منحني من ست مراحل'],
    ['CMD illustrated course-benefits template', 'قالب CMD مصور لعرض مميزات الدورة'],
    ['CMD six-week course-roadmap grid template', 'قالب CMD لخريطة دورة في جدول من ستة أسابيع'],
    ['CMD and Dream Team partnership announcement', 'إعلان شراكة CMD وDream Team']
  ],
  'digital art': [
    ['Cloud lettering: good things take time', 'تصميم حروفي مع سحب لعبارة الأشياء الجيدة تحتاج إلى وقت'],
    ['Blue wave study with curved lettering', 'دراسة بصرية لموجة زرقاء مع كتابة منحنية'],
    ['Digital seascape with clouds and birds', 'رسم رقمي للبحر مع سحب وطيور'],
    ['Orange squirrel character illustration', 'رسم لشخصية سنجاب برتقالي']
  ],
  'dream team posts': [
    ['Dream Team and CMD course-sale announcement', 'إعلان عروض دورات Dream Team وCMD'],
    ['Dream Team color palette and typography guide', 'دليل ألوان وخطوط Dream Team'],
    ['AI study-tools social graphic', 'تصميم عن أدوات الذكاء الاصطناعي للمذاكرة'],
    ['Computer Science and AI orientation announcement', 'إعلان اليوم التعريفي لكلية علوم الحاسب والذكاء الاصطناعي'],
    ['Dream Team open-positions announcement', 'إعلان فرص الانضمام إلى Dream Team'],
    ['Photography and montage recruitment graphic', 'تصميم للتوظيف في التصوير والمونتاج'],
    ['Faculty orientation-day invitation', 'دعوة إلى اليوم التعريفي للكلية'],
    ['Dream Team and CMD partnership announcement', 'إعلان شراكة Dream Team وCMD'],
    ['Python workshop announcement', 'إعلان ورشة Python'],
    ['Dream Team Ramadan greeting', 'تهنئة رمضان من Dream Team'],
    ['Dream Team Eid al-Adha calligraphy graphic', 'تهنئة عيد الأضحى بخط عربي من Dream Team'],
    ['Dream Team Eid al-Fitr greeting with mosque imagery', 'تهنئة عيد الفطر من Dream Team مع صورة مسجد']
  ],
  'GDSC posts': [
    ['Alexandria national-day graphic for GDSC', 'تصميم العيد القومي لمحافظة الإسكندرية لـ GDSC'],
    ['GDSC Eid al-Adha greeting with Kaaba illustration', 'تهنئة عيد الأضحى من GDSC مع رسم للكعبة'],
    ['GDSC colorful Eid al-Fitr greeting', 'تهنئة عيد الفطر الملونة من GDSC'],
    ['GDSC Ramadan greeting with lanterns', 'تهنئة رمضان من GDSC مع فوانيس']
  ],
  'IDs and buisness cards': [
    ['Dream Team lanyard ID mockup', 'نموذج عرض لبطاقة تعريف Dream Team مع حبل تعليق'],
    ['Revelio business-card contact layout', 'تنسيق بيانات التواصل على بطاقة أعمال Revelio'],
    ['Revelio business-card logo layout', 'تنسيق شعار Revelio على بطاقة الأعمال'],
    ['Revelio business-card pair mockup', 'نموذج عرض لوجهي بطاقة أعمال Revelio'],
    ['Dream Team ID front design', 'تصميم الوجه الأمامي لبطاقة تعريف Dream Team'],
    ['Dream Team ID reverse with social QR codes', 'تصميم ظهر بطاقة Dream Team مع رموز QR للتواصل']
  ],
  'IEEE PUA SB posts and stories': [
    ['IEEE security-team recruitment announcement', 'إعلان الانضمام إلى فريق الأمن في IEEE'],
    ['IEEE member-profile template', 'قالب تعريف بأحد أعضاء IEEE'],
    ['IEEE SIGHT recruitment graphic with engineering imagery', 'تصميم للانضمام إلى IEEE SIGHT مع صور هندسية'],
    ['IEEE and Dream Team partnership announcement', 'إعلان شراكة IEEE وDream Team'],
    ['IEEE PES event announcement', 'إعلان فعالية IEEE PES'],
    ['IEEE robotics-competition congratulations template', 'قالب تهنئة من IEEE لمسابقة روبوتات'],
    ['IEEE PUA: Siemens Energy session announcement', 'IEEE PUA: إعلان جلسة Siemens Energy'],
    ['IEEE SIGHT Ramadan greeting', 'تهنئة رمضان من IEEE SIGHT']
  ],
  'magazine cover and pages': [
    ['Pharos Foresight planet-and-robot cover concept', 'تصور لغلاف Pharos Foresight مع كوكب وروبوت'],
    ['Selected Foresight covers and editorial layouts', 'أغلفة وصفحات تحريرية مختارة من فورسايت'],
    ['Foresight computer-science article and chapter opening', 'مقال علوم حاسب وافتتاح فصل في فورسايت'],
    ['Pharos Foresight magazine cover with robot character', 'غلاف مجلة Pharos Foresight مع شخصية روبوت'],
    ['Foresight student-achievements chapter spread', 'صفحتا فصل إنجازات الطلاب في فورسايت'],
    ['Foresight closing article with robot illustration', 'مقال ختامي في فورسايت مع رسم روبوت']
  ],
  'presentation slides': [
    ['Presentation-design overview mockup', 'نموذج عرض لمجموعة تصميمات الشرائح'],
    ['Color wheel and primary/secondary color slide', 'شريحة دائرة الألوان والألوان الأساسية والثانوية'],
    ['Color-harmony examples slide', 'شريحة أمثلة على تناغم الألوان'],
    ['Color Theory presentation cover', 'غلاف عرض نظرية الألوان'],
    ['Visual composition: rule of thirds, balance, and focal point', 'التكوين البصري: قاعدة الأثلاث والتوازن ونقطة التركيز'],
    ['Movie-app presentation: details-screen slide', 'عرض تطبيق الأفلام: شريحة شاشة تفاصيل الفيلم'],
    ['Movie-app presentation: navigation-tabs slide', 'عرض تطبيق الأفلام: شريحة تبويبات التنقل'],
    ['Network optimization-techniques slide', 'شريحة عن تقنيات تحسين الشبكات'],
    ['UI/UX Fundamentals: presentation cover', 'أساسيات UI/UX: غلاف العرض التقديمي']
  ],
  'Revelio posts': [
    ['Revelio social campaign mockup', 'نموذج عرض لحملة Revelio على التواصل الاجتماعي'],
    ['Revelio growth-themed graphic with chart and coins', 'تصميم Revelio عن النمو مع رسم بياني وعملات'],
    ['Revelio revenue-challenge poll graphic', 'تصميم استطلاع Revelio عن تحديات الإيرادات'],
    ['Revelio typographic social graphic', 'تصميم حروفي لمنشور Revelio'],
    ['Revelio Arabic spending-and-profit graphic', 'تصميم Revelio بالعربية عن الإنفاق والربح'],
    ['Revelio data-analysis poll graphic', 'تصميم استطلاع Revelio عن تحليل البيانات'],
    ['Revelio Arabic before-and-after promotional layout', 'تنسيق ترويجي بالعربية لـ Revelio بأسلوب قبل وبعد'],
    ['Revelio analytics-dashboard promotional graphic', 'تصميم ترويجي لـ Revelio مع لوحة تحليل بيانات'],
    ['Revelio savings-jar social graphic', 'تصميم Revelio مع رسم لوعاء ادخار'],
    ['Revelio line-chart typographic layout', 'تصميم حروفي لـ Revelio مع مخطط خطي'],
    ['Revelio follow-the-page graphic', 'تصميم دعوة لمتابعة صفحة Revelio'],
    ['Revelio growth-themed graphic with ascending arrow', 'تصميم Revelio عن النمو مع سهم صاعد'],
    ['Revelio business-challenge question graphic', 'تصميم سؤال من Revelio عن تحديات الأعمال'],
    ['Revelio financial-themed promotional graphic', 'تصميم ترويجي لـ Revelio بطابع مالي']
  ],
  'Social media posts': [
    ['Social-media design overview mockup', 'نموذج عرض لمجموعة تصميمات التواصل الاجتماعي'],
    ['Body-splash product promotional graphic', 'تصميم ترويجي لمنتجات معطر الجسم'],
    ['Arabic data-analysis course announcement', 'إعلان دورة تحليل بيانات بالعربية'],
    ['Best-member appreciation template', 'قالب تقدير لأفضل عضو'],
    ['Subscriber-milestone celebration graphic', 'تصميم للاحتفال بمحطة في عدد المشتركين'],
    ['UI/UX app-design promotional graphic with phone illustration', 'تصميم ترويجي لتصميم تطبيقات UI/UX مع رسم هاتف'],
    ['UI/UX app-design promotional graphic with interface illustration', 'تصميم ترويجي لتصميم تطبيقات UI/UX مع رسم واجهة'],
    ['Arabic illustrated social post on personal values', 'منشور عربي مصور عن القيم الشخصية'],
    ['Palestine solidarity graphic with Arabic verse', 'تصميم تضامني مع فلسطين مع آية بالعربية'],
    ['UI/UX design-services promotional graphic', 'تصميم ترويجي لخدمات تصميم UI/UX'],
    ['Palestine map-and-key solidarity graphic', 'تصميم تضامني مع فلسطين مع خريطة ومفتاح']
  ]
};
// Metadata: folder, stable ID, bilingual title/category/description, approved cover.
const groups = [
  ['magazine cover and pages','foresight','Foresight editorial design','تصميم فورسايت التحريري','Editorial design','تصميم تحريري','Magazine covers, chapter openings, and article layouts.','أغلفة مجلة وصفحات افتتاح الفصول وتنسيق المقالات.','Black Minimalist Website Mockup Instagram Post.png'],
  ['IEEE PUA SB posts and stories','ieee-campaigns','IEEE campaigns','حملات IEEE','Campaign design','تصميم الحملات','Event announcements, recruitment posts, and community graphics.','إعلانات فعاليات ومنشورات انضمام وتصميمات للمجتمع الطلابي.','Siemens-gg.png'],
  ['presentation slides','presentations','Presentation design','تصميم العروض التقديمية','Slides & storytelling','الشرائح والسرد البصري','Slides explaining interface design, color, composition, and technical topics.','شرائح تشرح تصميم الواجهات والألوان والتكوين وموضوعات تقنية.','UIUX.png'],
  ['dream team posts','dream-team','Dream Team graphics','تصميمات Dream Team','Community & campaigns','المجتمع والحملات','A style guide, workshop posts, recruitment graphics, and seasonal greetings.','دليل للهوية ومنشورات ورش وتصميمات للانضمام وتهنئات بالمناسبات.','DT Style Guide.png'],
  ['Revelio posts','revelio','Revelio graphics','تصميمات Revelio','Social campaigns','حملات التواصل الاجتماعي','Financial-themed campaign graphics, audience questions, and social layouts.','تصميمات حملات بطابع مالي وأسئلة للجمهور وتنسيقات لمنشورات التواصل.','facebook_post_design_revelio.png'],
  ['CMD posts','cmd','CMD graphics','تصميمات CMD','Learning & information','التعلم وعرض المعلومات','Course-roadmap templates, benefits layouts, and a partnership announcement.','قوالب خرائط للدورات وتنسيقات لعرض المميزات وإعلان شراكة.','1 (2).png'],
  ['GDSC posts','gdsc','GDSC graphics','تصميمات GDSC','Community graphics','تصميمات مجتمعية','Seasonal greetings and an Alexandria celebration graphic.','تهنئات بالمناسبات وتصميم للاحتفال بالإسكندرية.','gdcs_ramadan_design.png'],
  ['Social media posts','social-media','Social media graphics','تصميمات التواصل الاجتماعي','Digital content','المحتوى الرقمي','Promotional posts, course announcements, appreciation graphics, and illustrated messages.','منشورات ترويجية وإعلانات دورات وتصميمات تقدير ورسائل مصورة.','Purple and Yellow Modern Website Development Solution Instagram Post.png'],
  ['banners and flyers','banners-flyers','Banners & flyers','اللافتات والمنشورات','Print & events','المطبوعات والفعاليات','Vertical, horizontal, and overhead banner designs shown in mockups.','تصميمات لافتات رأسية وأفقية ومعلقة مع نماذج عرض.','Roller_Banner_Mockup_1.png'],
  ['IDs and buisness cards','ids-business-cards','IDs & business cards','بطاقات التعريف والأعمال','Print design','تصميم المطبوعات','Business-card layouts and front/reverse ID designs.','تنسيقات بطاقات أعمال وتصميمات وجهي بطاقات التعريف.','Business_Card_Mockup_3.png'],
  ['certificates','certificates','Certificates','الشهادات','Print design','تصميم المطبوعات','Achievement, appreciation, and Arabic certificate layouts.','تنسيقات شهادات إنجاز وتقدير وشهادات بالعربية.','1.png'],
  ['character design','characters','Character design','تصميم الشخصيات','Characters & illustration','الشخصيات والرسوم','Robot character artwork, pose variations, and presentations.','رسوم لشخصيات روبوت وتنويعات للوضعيات وعروض للشخصيات.','character_design.png'],
  ['digital art','digital-art','Digital art','الفن الرقمي','Digital illustration','الرسم الرقمي','Cloud lettering, a wave study, a seascape, and character illustration.','تصميمات حروف مع سحب ودراسة لموجة ومشهد بحري ورسم لشخصية.','wave_digital_art.jpg']
];
const imports = [], collections = [], hashes = {};
let number = 0;
for (const [folder,id,title,titleAr,category,categoryAr,description,descriptionAr,coverName] of groups) {
  const source = inventory.find(group => group.folder === folder);
  if (!source || source.files.length !== captions[folder].length) throw new Error('Review mismatch: ' + folder);
  const entries = source.files.map((name,index) => {
    const relative = '../assets/graphic-design/' + folder + '/' + name;
    const binding = '__asset' + String(++number).padStart(3,'0') + '__';
    imports.push(`import ${binding.slice(2,-2)} from '${relative}';`);
    hashes[relative] = crypto.createHash('sha256').update(fs.readFileSync(path.join('src/assets/graphic-design',folder,name))).digest('hex');
    return {name,url:binding,caption:captions[folder][index][0],captionAr:captions[folder][index][1]};
  });
  const cover = entries.find(entry=>entry.name===coverName);
  if(!cover) throw new Error('Missing approved cover: '+folder);
  const ordered=[cover,...entries.filter(entry=>entry!==cover)];
  collections.push({id,title,titleAr,category,categoryAr,description,descriptionAr,
    contribution: id==='ieee-campaigns' ? 'Volunteer graphic design for student-community communication.' : 'Visual composition, typography, and layout design.',
    contributionAr: id==='ieee-campaigns' ? 'تصميم جرافيكي تطوعي للتواصل مع المجتمع الطلابي.' : 'التكوين البصري والخطوط وتنسيق التصميم.',
    cover:cover.url,images:ordered.map(({url,caption,captionAr})=>({url,caption,captionAr}))});
}
if(number!==92)throw new Error('Expected 92 reviewed images, got '+number);
const interfaces = `export interface VisualArtwork { url: string; caption: string; captionAr: string }
export interface VisualCollection {
  id: string; title: string; titleAr: string; category: string; categoryAr: string;
  description: string; descriptionAr: string; contribution: string; contributionAr: string;
  cover: string; images: VisualArtwork[];
}
`;
const output=JSON.stringify(collections,null,2).replace(/"__asset(\d+)__"/g,'asset$1');
fs.writeFileSync('src/data/visualCollections.ts',imports.join('\n')+'\n\n'+interfaces+'\n/** Explicit snapshot of Nadia’s 24 October selection; new files require manifest review. */\nexport const visualCollections: VisualCollection[] = '+output+';\n');
fs.writeFileSync('artifacts/visuals-expansion/review/source-hashes.json',JSON.stringify(hashes,null,2));
console.log('Wrote '+collections.length+' explicit collections / '+number+' individually captioned images.');
