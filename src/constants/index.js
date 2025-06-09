import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Sarafa,
  SaintPeters,
  AITR,
  IITM,
  SIH,
  Nvidia,
  MargAI,
  KBHome,
  AntiSpoof,
  CampusFinder1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Academic Record",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Scientist",
    icon: backend,
  },
  {
    title: "ML Developer",
    icon: creator,
  },
  {
    title: "LLM Development",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Database",
    icon: mongodb,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "High School Certificate (10th)",
    company_name: "Sarafa Vidya Niketan School, Indore, M.P.",
    icon: Sarafa,
    iconBg: "#E6DEDD",
    date: "2018 (CBSE)",
    points: [
      "Secured 84.6% in 2018 (CBSE)."
    ],
  },
  {
    title: "Senior School Certificate (10+2)",
    company_name: "The Saint Peter's Higher Secondary School, Indore, M.P.",
    icon: SaintPeters,
    iconBg: "#383E56",
    date: "2020 (M.P. Board)",
    points: [
      "Secured 91.8% in 2020 (M.P. Board)."
    ],
  },
  {
    title: "Bachelor of Technology (CSE-IT)",
    company_name: "Acropolis Institute of Technology and Research, Indore (RGPV)",
    icon: AITR,
    iconBg: "#E6DEDD",
    date: "2021-2025 (Pursuing)",
    points: [
      "Current CGPA: 7.91."
    ],
  },
  {
    title: "Bachelors of Science (BS) in Data Science and Programming",
    company_name: "Indian Institute of Technology (IIT Madras) - Distant Learning",
    icon: IITM,
    iconBg: "#383E56",
    date: "2023-Running (Pursuing)",
    points: [
      "Current CGPA: 6.85."
    ],
  },
  {
    title: "Winner - Smart India Hackathon (SIH) 2024",
    company_name: "Grand Finale, SIH 2024",
    icon: SIH,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Winners at Grand Finale of Smart India Hackathon (SIH) 2024."
    ],
  },
  {
    title: "Nvidia Deep Learning Workshop",
    company_name: "Nvidia",
    icon: Nvidia,
    iconBg: "#383E56",
    date: "Year Completed",
    points: [
      "Completed Nvidia's Deep Learning Workshop, gaining proficiency in advanced AI and Machine Learning techniques."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MargAI",
    organization: "Smart India Hackathon 2024",
    description:
      "An AI driven inclusive assessment tool for skill ecosystem with innovative features like AADHAR OTP based login, UDID-based disability verification, and AI-assisted mental health counselling, 'MargAI' ensures equitable access to holistic support for all learners, including PwD Candidates.",
    role: "AI Developer",
    duration: "3 months",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "ReactJS", color: "green-text-gradient" },
      { name: "ExpressJS", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Azure", color: "green-text-gradient" },
      { name: "Langflow", color: "pink-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
    ],
    image: MargAI,
    source_code_link: "https://github.com/samarjeet-singh-kheda/marg-ai-web-client",
  },
  {
    name: "KhetiBuddy",
    organization: "Acropolis Institute of Technology and Research, Indore",
    description:
      "An AI Driven plant care system, mainly focus on detecting plant disease based on leaf images and providing assistance related to the issue.",
    role: "Developer",
    duration: "4 months",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "HuggingFace", color: "green-text-gradient" },
      { name: "NextJS", color: "pink-text-gradient" },
      { name: "TailwindCSS", color: "blue-text-gradient" },
      { name: "Langflow", color: "green-text-gradient" },
      { name: "Teachable Machines(Google)", color: "pink-text-gradient" },
    ],
    image: KBHome,
    source_code_link: "https://github.com/himaxx/KhetiBuddy",
  },
  {
    name: "SpoofBlocker",
    organization: "Acropolis Institute of Technology and Research, Indore",
    description:
      "Developed an AI-based attendance system that accurately distinguishes between fake and genuine student identities using facial recognition. Captured real-time attendance via camera and stored data in Firebase for streamlined record keeping.",
    role: "Developer",
    duration: "1 month",
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "WebRTC", color: "pink-text-gradient" },
      { name: "Firebase", color: "blue-text-gradient" },
    ],
    image: AntiSpoof,
    source_code_link: "https://github.com/himaxx/Anti",
  },
  {
    name: "CampusFinder",
    organization: "Acropolis Institute of Technology and Research, Indore",
    description:
      "Developed a modern and intuitive lost & found portal specifically for college campuses. Built using Next.js 14, the platform features an interactive campus map with real-time tracking, beautiful and responsive UI components with dark/light themes, core functionalities for reporting, searching, and scanning lost or found items, and smart features powered by AI for assistance and recognition.",
    role: "Developer, AI Developer",
    duration: "2 days",
    tags: [
      { name: "Next.js 14", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "shadcn/ui", color: "green-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
      { name: "Leaflet", color: "blue-text-gradient" },
      { name: "React Hooks", color: "green-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
      { name: "ESLint", color: "blue-text-gradient" },
      { name: "Prettier", color: "green-text-gradient" },
    ],
    image: CampusFinder1,
    source_code_link: "https://github.com/himaxx/Campus-Finder?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, testimonials, projects };
