from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from xml.sax.saxutils import escape

out = Path('output/pdf/Nadia_Hossny_Product_Designer_CV.pdf')
out.parent.mkdir(parents=True, exist_ok=True)
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=24, leading=28, textColor=colors.HexColor('#002d69'), spaceAfter=5),
    'role': ParagraphStyle('role', fontName='Helvetica', fontSize=13, leading=17, spaceAfter=10),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=9, leading=13, spaceAfter=3),
    'heading': ParagraphStyle('heading', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=colors.HexColor('#002d69'), spaceBefore=16, spaceAfter=7),
    'entry': ParagraphStyle('entry', fontName='Helvetica-Bold', fontSize=10, leading=14, spaceBefore=9, spaceAfter=3),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=14, spaceAfter=5, alignment=TA_LEFT),
    'small': ParagraphStyle('small', fontName='Helvetica', fontSize=9, leading=13, textColor=colors.HexColor('#43566c'), spaceAfter=4),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=10, leading=14, leftIndent=11, firstLineIndent=-9, spaceAfter=4),
}
story=[]
def para(text, style='body'):
    story.append(Paragraph(escape(text), styles[style]))
def heading(text): para(text.upper(), 'heading')
def entry(title, context, bullets):
    group=[Paragraph(escape(title), styles['entry']), Paragraph(escape(context), styles['small'])]
    group.extend(Paragraph('- '+escape(b),styles['bullet']) for b in bullets)
    story.append(KeepTogether(group))

para('NADIA HOSSNY','name'); para('Product Designer','role')
para('Alexandria, Egypt | +20 106 494 3439 | nadiahossny426@gmail.com','contact')
para('nadiahossny.vercel.app | linkedin.com/in/nadiahossny | github.com/nadiahossny','contact')
heading('Professional summary')
para('Product designer with paid freelance UI/UX experience and a graphic-design background. Translates user needs into user flows, wireframes, prototypes, and finished web and mobile interfaces. React and Flutter experience supports practical implementation choices and developer collaboration.')
heading('Core skills')
para('Product and UX: Problem definition, user research, user interviews, competitive analysis, user flows, information architecture, wireframing, prototyping.')
para('Interface and delivery: Figma, reusable components, responsive layouts, typography, visual hierarchy, client briefs, feedback, revisions, and design handoff.')
para('Supporting knowledge: React and Flutter implementation, HTML/CSS, Firebase, usability-testing methods, and accessibility guidelines.')
heading('Relevant experience and projects')
entry('Freelance UI/UX & Graphic Designer','Independent client work | Remote',[
    'Completed an Upwork UI/UX engagement from user flows to high-fidelity screens.',
    'Delivered selected Gotcha app-redesign screens and visual assets for clients.',
    'Managed client briefs, feedback, revisions, and final design delivery.',
])
entry('Automated Pharmacy Management System (APMS)','Product Designer & Flutter Developer | Pharos University | Team graduation project',[
    'Researched pharmacy workflows and designed pharmacy-management and patient-app experiences.',
    'Implemented Flutter interfaces for both applications, including patient ordering and order-status flows.',
    'Collaborated with teammates responsible for AI and hardware within a system using Node.js, PostgreSQL, and WebSockets.',
])
entry('AuraLeaf - Independent Study Workspace','Product design | React and Tailwind CSS',[
    'Designed a study workspace with a focus timer, ambient audio, and notes, directing AI-assisted implementation.',
    'Replaced freely movable notes and task tools with sliding panels to support the intended calm experience.',
])
story.append(PageBreak())
para('NADIA HOSSNY','entry'); para('Product Designer | Experience, education, and training','small')
heading('Volunteer experience and leadership')
entry('Vice Head, Web Development Committee','IEEE PUA Student Branch | February 2025 - February 2026',[
    'Coordinated development tasks and communication; contributed to branch website design and Flutter/Firebase implementation.',
])
entry('Graphic Designer, Publicity Committee','IEEE PUA Student Branch | February 2025 - February 2026',[
    'Created branch identity assets, event visuals, and certificates.',
])
entry('Head Graphic Designer','Dream Team | 2024 - 2026',[
    'Coordinated design assignments and reviewed event visuals and social media materials for clarity and consistency.',
])
entry('Graphic Designer','Pharos Foresight University Magazine | July 2024 - February 2025',[
    'Designed magazine covers, editorial layouts, icons, and character illustrations with InDesign, Illustrator, and Photoshop.',
])
entry('Head of Design','Google Developer Student Clubs, Pharos University | December 2023 - September 2024',[
    'Worked with organizers on visual direction and consistent assets for student-community initiatives.',
])
heading('Education')
para('B.Sc. in Computer Science & Artificial Intelligence','entry')
para('Pharos University in Alexandria | July 2026 | GPA: 3.76/4.0')
heading('Training')
for line in [
    'UI/UX Design - DEPI | October 2024 - May 2025. Developed Taskly through user flows, wireframes, and high-fidelity Figma prototypes.',
    'Web Design - NTI | July - September 2025.',
    'Flutter Development - Route Academy | July - October 2024.',
    'Web Development Fundamentals - Sprints | 2025.',
    'Freelance Training Program - ITIDA | 2025.',
    '.NET Software Development - ITI | July - September 2023.',
]: para(line, 'small')
heading('Languages'); para('Arabic - Native | English - Advanced')
def footer(canvas, doc):
    canvas.setFont('Helvetica',8); canvas.setFillColor(colors.HexColor('#43566c'))
    canvas.drawRightString(A4[0]-43,26,f'{doc.page}')
doc=SimpleDocTemplate(str(out),pagesize=A4,leftMargin=43,rightMargin=43,topMargin=36,bottomMargin=36,title='Nadia Hossny - Product Designer',author='Nadia Hossny')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(out.resolve())
