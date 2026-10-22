export interface Specialization {
  slug: string;
  name: string;
  track: string;
  description: string;
  academicLead: string;
  primaryCoreLab: string;
  totalEnrollment: string;
  curriculumCycle: string;
}

export interface Department {
  slug: string;
  name: string;
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  specializations: Specialization[];
}

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 2,
    enrolledStudentsCount: 320,
    specializations: [
      {
        slug: "web-development",
        name: "Web Development",
        track: "CS-SPEC-04",
        description:
          "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        primaryCoreLab: "Turing Hall 408",
        totalEnrollment: "4 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        track: "CS-SPEC-01",
        description:
          "Machine learning, neural networks, computer vision, and cognitive architectures.",
        academicLead: "Prof. David Krum",
        primaryCoreLab: "Ada Lovelace Lab 201",
        totalEnrollment: "6 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
  {
    slug: "design",
    name: "Design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 2,
    enrolledStudentsCount: 185,
    specializations: [
      {
        slug: "visual-communication",
        name: "Visual Communication",
        track: "DS-SPEC-02",
        description:
          "User experience research, visual communication, interaction design, and product prototyping.",
        academicLead: "Prof. Marcus Vance",
        primaryCoreLab: "Bauhaus Studio 104",
        totalEnrollment: "2 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "ui-ux",
        name: "UI/UX Design",
        track: "DS-SPEC-01",
        description:
          "Interface usability, user testing, design systems, and responsive component libraries.",
        academicLead: "Prof. Sarah Jenkins",
        primaryCoreLab: "Bauhaus Studio 102",
        totalEnrollment: "3 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
  {
    slug: "business",
    name: "Business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 2,
    enrolledStudentsCount: 240,
    specializations: [
      {
        slug: "strategic-management",
        name: "Strategic Management",
        track: "BS-SPEC-01",
        description:
          "Strategic management, financial technology, international entrepreneurship, and analytics.",
        academicLead: "Prof. Diana Sterling",
        primaryCoreLab: "Bloomberg Lab 202",
        totalEnrollment: "2 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "fintech",
        name: "Financial Technology",
        track: "BS-SPEC-03",
        description:
          "Algorithmic commerce, decentralized ledgers, and capital market infrastructure.",
        academicLead: "Prof. Robert Thorne",
        primaryCoreLab: "Bloomberg Suite 305",
        totalEnrollment: "5 Active Enrollees",
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
];
