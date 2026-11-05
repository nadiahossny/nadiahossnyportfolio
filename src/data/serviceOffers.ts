/** Commercial scope approved by Nadia; no inferred rates or delivery estimates. */
export const serviceOffers = [
  {
    id: 'websites', number: '01',
    title: 'Websites & web apps', titleAr: 'المواقع وتطبيقات الويب',
    audience: 'For businesses and teams that need a clear, useful experience online.',
    audienceAr: 'للأنشطة التجارية والفرق التي تحتاج تجربة رقمية واضحة ومفيدة.',
    summary: 'From one-page introductions and business websites to store and app experiences.',
    summaryAr: 'من الصفحات التعريفية ومواقع الأعمال إلى تجارب المتاجر والتطبيقات.',
    includes: ['Discovery and content structure', 'User flows and responsive interface design', 'Organized design files and developer handoff'],
    includesAr: ['فهم الاحتياج وتنظيم المحتوى', 'مسارات المستخدم وتصميم واجهات متجاوبة', 'ملفات تصميم منظمة وتسليم للمطورين'],
    scope: 'Implementation and integrations are quoted separately and agreed in the proposal.',
    scopeAr: 'يُسعّر التنفيذ وخدمات الربط بشكل منفصل ويُحددان في العرض.',
    proofUrl: '/work',
  },
  {
    id: 'brand-presence', number: '02',
    title: 'Digital brand presence', titleAr: 'الحضور البصري الرقمي',
    audience: 'For businesses that want their website and social channels to feel connected.',
    audienceAr: 'للأنشطة التجارية التي تريد هوية بصرية متناسقة بين الموقع وقنوات التواصل.',
    summary: 'A reusable visual system for social content that feels like part of your website.',
    summaryAr: 'نظام بصري قابل لإعادة الاستخدام لمحتوى التواصل ومتناسق مع موقعك.',
    includes: ['Reusable social media templates', 'Visual content aligned with your website', 'Editable files and usage guidance'],
    includesAr: ['قوالب قابلة لإعادة الاستخدام لمنصات التواصل', 'محتوى بصري متناسق مع موقعك', 'ملفات قابلة للتعديل وإرشادات للاستخدام'],
    scope: 'Deliverable quantities are agreed in the proposal. This offer is priced separately from website work.',
    scopeAr: 'تُحدد كميات المخرجات في العرض. تُسعّر هذه الخدمة بشكل منفصل عن أعمال المواقع.',
    proofUrl: '/visuals',
  },
] as const;

export const serviceProcess = [
  ['Discovery call', 'مكالمة لفهم المشروع', 'We discuss the problem, audience, and scope.', 'نناقش المشكلة والجمهور ونطاق العمل.'],
  ['Proposal', 'العرض', 'Deliverables, price, and timeline are agreed together.', 'نتفق على المخرجات والسعر والجدول الزمني.'],
  ['50% deposit', 'دفعة مقدمة ٥٠٪', 'The agreed deposit starts the project.', 'تبدأ خطوات المشروع بعد الدفعة المتفق عليها.'],
  ['Design', 'التصميم', 'Structure, flows, and interfaces take shape.', 'نحدد الهيكل والمسارات ونصمم الواجهات.'],
  ['Build or design delivery', 'التنفيذ أو تسليم التصميم', 'Prototypes, developer handoff, or full implementation connect design with delivery.', 'نربط التصميم بالتسليم عبر النماذج التفاعلية، أو تسليم التصميم للمطورين، أو التنفيذ الكامل.'],
  ['One revision round', 'جولة تعديلات واحدة', 'We refine the agreed deliverables together.', 'نراجع المخرجات المتفق عليها ونحسنها.'],
  ['Final delivery', 'التسليم النهائي', 'Receive the agreed files and handoff guidance.', 'تستلم الملفات المتفق عليها وإرشادات التسليم.'],
] as const;
