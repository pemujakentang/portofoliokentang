import { BriefcaseBusiness, Code2, Layers3, Palette } from 'lucide-react'

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Stack', path: '/stack' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
]

export const projects = [
  {
    title: 'Project One',
    tag: 'Full-stack app',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built around calm flows, useful dashboards, and crisp developer handoff.',
    tools: ['React', 'Node.js', 'PostgreSQL'],
    accent: 'sun',
  },
  {
    title: 'Project Two',
    tag: 'Interactive site',
    copy: 'Suspendisse potenti. A playful landing experience with motion, responsive sections, and reusable content blocks.',
    tools: ['Vite', 'Tailwind', 'GSAP-ready'],
    accent: 'rose',
  },
  {
    title: 'Project Three',
    tag: 'Design system',
    copy: 'Integer vitae justo eget magna fermentum iaculis. Components, tokens, documentation, and UI rules for a growing product.',
    tools: ['Storybook', 'Figma', 'TypeScript'],
    accent: 'ink',
  },
]

export const timeline = [
  {
    start: "Jan 2025",
    end: "Jan 2026",
    role: "Full Stack Developer Intern",
    place: "Cranium Indonesia",
    type: "Work - Internship",
    copy: "Participated in development of company’s software products, such as Enterprise Resource Planning Software. Utilized Java Spring Boot, Next JS, and PosgtreSQL in development.",
    image: "intern_team.webp",
  },
  {
    start: "Dec 2024",
    end: "Dec 2025",
    role: "Head of HR Development - Behavioral",
    place: "UMN Radio",
    type: "Student Organisation",
    copy: "Ensured organizational integrity by enforcing behavioral standards and leading development programs to align crew conduct with organizational values.",
    image: "hrd_team.webp",
    object_position: "object-top"
  },
  {
    start: "Dec 2023",
    end: "Dec 2024",
    role: "Head of IT & Software Development",
    place: "UMN Radio",
    type: "Student Organisation",
    copy: "Led the development and maintenance of UMN Radio's website, servers, and operational software. Coordinated with other divisions and campus IT staff to optimize organizational infrastructure.",
    image: "it13_team_alt3.webp",
  },
  {
    start: "Jan 2024",
    end: "Nov 2024",
    role: "Vice President",
    place: "UMN Radioactive 2024",
    type: "Event Committee",
    copy: "Supervised and ensured the event runs smoothly and properly, optimizing crew operations and output, as well as addressing issues promptly. Assumed leadership roles and made critical technical decisions.",
    image: "ra24_event.webp",
  },
  {
    start: "Jan 2024",
    end: "Nov 2024",
    role: "Logistics and Accommodations Coordinator",
    place: "Character Building Mentoring UMN 2024",
    type: "Event Committee",
    copy: "Led a team of 19 to manage logistics, equipment, and accommodations for a large-scale event. Oversaw resources for 250+ committee members and 2,600+ participants enrolled in the Mentoring program.",
    image: "accom_gacor.webp",
  },
  {
    start: "Jan 2023",
    end: "Dec 2023",
    role: "IT & Software Development Staff",
    place: "UMN Radio",
    type: "Student Organisation",
    copy: "Developed and maintained UMN Radio’s website infrastructure, including the Laravel/Tailwind-based website, internal management systems, and broadcasting servers.",
    image: "it12_team_alt.webp",
  },
  {
    start: "Feb 2023",
    end: "Dec 2023",
    role: "Lead Web Developer",
    place: "UMN Radioactive 2023",
    type: "Event Committee",
    copy: "Led a team of 7 as Project Manager and Full Stack Developer to build and maintain the UMN Radioactive 2023 website.",
    image: "ra23_website.webp",
  },
  {
    start: "Mar 2023",
    end: "Nov 2023",
    role: "Logistics and Accommodations Staff",
    place: "Character Building Mentoring UMN 2023",
    type: "Event Committee",
    copy: "Provided accomodations and logistical support for the committee members and students enrolled in the Mentoring program.",
    image: "accom_23.webp",
  },
];

export const stacks = [
  {
    title: 'Frontend',
    icon: Palette,
    items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Code2,
    items: ['Node.js', 'Express', 'REST API', 'Auth flows'],
  },
  {
    title: 'Database',
    icon: Layers3,
    items: ['PostgreSQL', 'MongoDB', 'Prisma', 'Supabase'],
  },
  {
    title: 'Workflow',
    icon: BriefcaseBusiness,
    items: ['Git', 'Figma', 'Testing', 'Documentation'],
  },
]

export const services = [
  {
    title: 'Web Portfolio & Landing Pages',
    copy: 'Distinctive responsive websites with a strong first impression, thoughtful interactions, and maintainable components.',
  },
  {
    title: 'Full-stack Feature Build',
    copy: 'From data model to UI polish: user flows, API integration, dashboards, forms, and deployment-ready structure.',
  },
  {
    title: 'UI Refresh & Frontend Cleanup',
    copy: 'Sharper layouts, better responsive behaviour, reusable Tailwind patterns, and improved interaction states.',
  },
]
