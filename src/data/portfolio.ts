// Portfolio data for Developer Portfolio
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Skill {
  name: string;
  category: "automation" | "programming" | "tools" | "cloud" | "ai_ml";
  proficiency?: "beginner" | "intermediate" | "advanced";
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  email: string;
  linkedin: string;
  github: string;
  location?: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Mohith Kumar S",
  role: "AI & Software Developer",
  bio: "Specializing in FOSS-driven digital products and AI-powered research tools",
  email: "mohithkumar4225@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohith-kumar-446349337",
  github: "https://github.com/mohith182",
  location: "Chennai, India",
};

// Skills categorized by type
export const skills: Skill[] = [
  // Programming
  { name: "Java", category: "programming", proficiency: "advanced" },
  { name: "Python", category: "programming", proficiency: "advanced" },
  { name: "C++", category: "programming", proficiency: "intermediate" },
  { name: "Bash", category: "programming", proficiency: "intermediate" },
  
  // Web
  { name: "React.js", category: "programming", proficiency: "advanced" },
  { name: "Node.js", category: "tools", proficiency: "advanced" },
  { name: "Electron.js", category: "programming", proficiency: "intermediate" },
  { name: "Flask", category: "programming", proficiency: "intermediate" },
  
  // Cloud & Tools
  { name: "AWS", category: "cloud", proficiency: "advanced" },
  { name: "Docker", category: "tools", proficiency: "intermediate" },
  { name: "Git", category: "tools", proficiency: "advanced" },
  { name: "Linux", category: "tools", proficiency: "advanced" },
];

// Projects
export const projects: Project[] = [
  {
    id: "1",
    title: "CELLINTEL",
    description: "A law enforcement-grade telecom analysis tool with OSINT integration and interactive network visualizations. Built for comprehensive telecom data analysis with advanced visualization capabilities.",
    techStack: ["React.js", "Node.js", "Python", "PostgreSQL", "D3.js"],
    githubUrl: "https://github.com/mohith182/cellintel",
    category: "web",
  },
  {
    id: "2",
    title: "ARIS",
    description: "An AI-powered research assistant using Hugging Face and custom LLM pipelines. Leverages advanced language models for intelligent research assistance and document analysis.",
    techStack: ["Python", "Hugging Face", "LLMs", "Flask", "OpenAI API"],
    githubUrl: "https://github.com/mohith182/aris",
    category: "ai_ml",
  },
];

// Experience/Internships
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Testing Automation Engineer Intern",
    company: "FACILIO",
    location: "Chennai, Tamil Nadu, India",
    startDate: "",
    endDate: "2025-12",
    description: [
      "Automated Android mobile application testing using Appium + Java + TestNG",
      "Executed test flows on Android Studio emulators and real devices",
      "Validated React Native mobile application functionality",
      "Implemented robust locator strategies, explicit waits, gestures, and scroll handling",
      "Reduced manual regression effort and improved test reliability",
    ],
    technologies: ["Appium", "Java", "TestNG", "Android Studio", "React Native", "Mobile Testing"],
  },
  {
    id: "2",
    title: "Software & AI Developer Intern",
    company: "Intellect Design Arena",
    location: "Chennai, Tamil Nadu, India",
    startDate: "2024-06",
    endDate: "2024-11",
    description: [
      "Built a Medical Reimbursement Claim Portal using React.js, Node.js, and PostgreSQL",
      "Implemented SheetJS for Excel data processing and manipulation",
      "Integrated Socket.IO for real-time communication and updates",
      "Designed and developed secure REST APIs with JWT authentication",
      "Managed Linux-based deployment using FOSS tools for efficient operations",
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "SheetJS", "Socket.IO", "JWT", "Linux", "REST APIs"],
  },
];

// Certifications & Achievements
export const certifications: Certification[] = [
  {
    id: "1",
    name: "Cyberthon 2025 – Group Special Mention",
    issuer: "Competition",
    issueDate: "2025",
  },
  {
    id: "2",
    name: "Designathon 2025",
    issuer: "Design Competition",
    issueDate: "2025",
  },
  {
    id: "3",
    name: "AWS Cloud Foundations",
    issuer: "AWS Academy Graduate",
    issueDate: "2024",
    credentialUrl: "https://aws.amazon.com/training/awsacademy/",
  },
  {
    id: "4",
    name: "AWS Generative AI Foundations",
    issuer: "AWS Academy Graduate",
    issueDate: "2024",
    credentialUrl: "https://aws.amazon.com/training/awsacademy/",
  },
];
