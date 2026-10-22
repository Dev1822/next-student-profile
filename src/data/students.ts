export interface Student {
  id: string;
  studentCode: string;
  name: string;
  initials: string;
  avatarColor: string;
  department: string;
  departmentSlug: string;
  specialization: string;
  specializationSlug: string;
  specializationFocus: string;
  studyYear: string;
  status: string;
  email: string;
  enrolled: string;
  about: string;
  standing: string;
  subjects: { code: string; name: string; credits: string }[];
}

export const students: Student[] = [
  {
    id: "aarav-mehta",
    studentCode: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    specializationFocus: "Full-Stack Architecture",
    studyYear: "3rd Year",
    status: "Active",
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    about:
      "Aarav is an undergraduate researcher focusing on distributed consensus algorithms and high-throughput web architecture. Actively contributing to campus tech symposiums.",
    standing: "Dean's Honor List",
    subjects: [
      { code: "CS-301", name: "Distributed Systems", credits: "4 Credits" },
      { code: "CS-340", name: "Web Systems & Cloud Infrastructure", credits: "4 Credits" },
      { code: "MATH-220", name: "Linear Algebra & Applications", credits: "3 Credits" },
    ],
  },
  {
    id: "priya-sharma",
    studentCode: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    specializationFocus: "Reactive UI Design",
    studyYear: "1st Year",
    status: "Active",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    about:
      "Priya is passionate about modern front-end frameworks and accessibility on the web. She participates actively in open-source web tooling.",
    standing: "Dean's Honor List",
    subjects: [
      { code: "CS-101", name: "Web Foundations", credits: "3 Credits" },
      { code: "CS-120", name: "UI Architecture", credits: "3 Credits" },
    ],
  },
  {
    id: "tariq-al-mansoor",
    studentCode: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    specializationFocus: "Distributed Web Systems",
    studyYear: "4th Year",
    status: "Active",
    email: "tariq.mansoor@campus.edu",
    enrolled: "Fall 2021",
    about:
      "Tariq conducts research in convolutional neural architectures, autonomous vision navigation, and real-time edge AI inference.",
    standing: "Dean's Honor List",
    subjects: [
      { code: "CS-410", name: "Deep Neural Networks & Representation", credits: "4 Credits" },
      { code: "CS-415", name: "Computer Vision & Visual SLAM", credits: "4 Credits" },
    ],
  },
  {
    id: "sophia-muller",
    studentCode: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    avatarColor: "bg-blue-100 text-blue-700",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specialization: "Web Development",
    specializationSlug: "web-development",
    specializationFocus: "Progressive Web Apps",
    studyYear: "2nd Year",
    status: "Active",
    email: "sophia.muller@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Sophia is passionate about offline-first architectures, service workers, and client performance optimizations.",
    standing: "Good Standing",
    subjects: [
      { code: "CS-205", name: "Object Oriented Design & Patterns", credits: "3 Credits" },
      { code: "CS-220", name: "Web Platform Standards & APIs", credits: "3 Credits" },
    ],
  },
  {
    id: "maya-lin",
    studentCode: "STU-2091",
    name: "Maya Lin",
    initials: "ML",
    avatarColor: "bg-purple-100 text-purple-700",
    department: "Design",
    departmentSlug: "design",
    specialization: "Visual Communication",
    specializationSlug: "visual-communication",
    specializationFocus: "Brand Identity Systems",
    studyYear: "2nd Year",
    status: "Active",
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Maya explores the intersection of human-computer interaction, spatial computing, and accessible user experiences.",
    standing: "Good Standing",
    subjects: [
      { code: "DES-201", name: "Visual Communication & Typography", credits: "3 Credits" },
      { code: "DES-240", name: "Design Systems & Design Tokens", credits: "3 Credits" },
    ],
  },
  {
    id: "marcus-bell",
    studentCode: "STU-2144",
    name: "Marcus Bell",
    initials: "MB",
    avatarColor: "bg-purple-100 text-purple-700",
    department: "Design",
    departmentSlug: "design",
    specialization: "UI/UX Design",
    specializationSlug: "ui-ux",
    specializationFocus: "Interactive Design Systems",
    studyYear: "1st Year",
    status: "Active",
    email: "marcus.bell@campus.edu",
    enrolled: "Fall 2024",
    about:
      "Marcus focuses on editorial typography, identity design systems, and creative branding across digital and print mediums.",
    standing: "Good Standing",
    subjects: [
      { code: "DES-101", name: "Foundations of Visual Design", credits: "3 Credits" },
      { code: "ART-110", name: "Form, Color & Composition", credits: "3 Credits" },
    ],
  },
  {
    id: "liam-chen",
    studentCode: "STU-3150",
    name: "Liam Chen",
    initials: "LC",
    avatarColor: "bg-emerald-100 text-emerald-700",
    department: "Business",
    departmentSlug: "business",
    specialization: "Strategic Management",
    specializationSlug: "strategic-management",
    specializationFocus: "Venture Financing",
    studyYear: "4th Year",
    status: "Active",
    email: "liam.chen@campus.edu",
    enrolled: "Fall 2021",
    about:
      "Liam focuses on fintech disruption, venture capitalization models, and analytics-driven product leadership.",
    standing: "Dean's Honor List",
    subjects: [
      { code: "BUS-410", name: "Strategic Venture Leadership", credits: "4 Credits" },
      { code: "FIN-380", name: "Financial Econometrics & Modelling", credits: "3 Credits" },
    ],
  },
  {
    id: "elena-rostova",
    studentCode: "STU-3205",
    name: "Elena Rostova",
    initials: "ER",
    avatarColor: "bg-emerald-100 text-emerald-700",
    department: "Business",
    departmentSlug: "business",
    specialization: "Financial Technology",
    specializationSlug: "fintech",
    specializationFocus: "Algorithmic Markets",
    studyYear: "2nd Year",
    status: "Active",
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    about:
      "Elena analyzes consumer data behavior, microeconomic consumer choice, and enterprise corporate communications.",
    standing: "Good Standing",
    subjects: [
      { code: "BUS-220", name: "Organizational Behavior & Culture", credits: "3 Credits" },
      { code: "MKT-250", name: "Quantitative Consumer Insights", credits: "3 Credits" },
    ],
  },
];
