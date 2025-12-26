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
  role: "Software Developer, DevOps Engineer & AI Enthusiast",
  bio: "A Software Development Engineer with a strong focus on DevOps engineering and AI-driven systems. I design and build scalable applications, automate workflows, and deploy reliable cloud-native solutions. Passionate about writing clean code, optimizing systems, and leveraging AI to solve real-world problems efficiently.",
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
  { name: "PostgreSQL", category: "tools", proficiency: "advanced" },
  { name: "SheetJS", category: "tools", proficiency: "intermediate" },
  { name: "Socket.IO", category: "tools", proficiency: "intermediate" },
  { name: "JWT", category: "tools", proficiency: "intermediate" },
  { name: "REST APIs", category: "tools", proficiency: "advanced" },
  
  // Testing Automation
  { name: "Appium", category: "automation", proficiency: "advanced" },
  { name: "TestNG", category: "automation", proficiency: "advanced" },
  { name: "Selenium", category: "automation", proficiency: "intermediate" },
  { name: "JUnit", category: "automation", proficiency: "intermediate" },
  { name: "Maven", category: "automation", proficiency: "intermediate" },
  { name: "Android Studio", category: "automation", proficiency: "intermediate" },
  
  // AI & Machine Learning
  { name: "Hugging Face", category: "ai_ml", proficiency: "advanced" },
  { name: "OpenAI API", category: "ai_ml", proficiency: "intermediate" },
  { name: "LLMs", category: "ai_ml", proficiency: "intermediate" },
  { name: "TensorFlow", category: "ai_ml", proficiency: "intermediate" },
  { name: "PyTorch", category: "ai_ml", proficiency: "intermediate" },
  { name: "Scikit-learn", category: "ai_ml", proficiency: "intermediate" },
  { name: "Pandas", category: "ai_ml", proficiency: "advanced" },
  { name: "NumPy", category: "ai_ml", proficiency: "advanced" },
  
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
    name: "SRM's National Level 24-Hour Hackathon – Designathon 2025",
    issuer: "SRM University",
    issueDate: "2025",
  },
  {
    id: "3",
    name: "HACK-A-BOT 2025 - Participated",
    issuer: "Hackathon",
    issueDate: "2025",
  },
  {
    id: "4",
    name: "Python for Data Science (Elite)",
    issuer: "Data Science Certification",
    issueDate: "2025",
  },
  {
    id: "5",
    name: "Cloud Computing 101",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "6",
    name: "Cloud Quest - Cloud Practitioner",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "7",
    name: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy Graduate",
    issueDate: "2025",
  },
  {
    id: "8",
    name: "AWS Academy Generative AI Foundations",
    issuer: "AWS Academy Graduate",
    issueDate: "2025",
  },
  {
    id: "9",
    name: "Getting Started with Storage",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "10",
    name: "Getting Started with Cloud Ops",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "11",
    name: "Getting Started with Compute",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "12",
    name: "Getting Started with Security",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "13",
    name: "Getting Started with Networking",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "14",
    name: "Getting Started with Serverless",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "15",
    name: "Getting Started with Databases",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "16",
    name: "Introduction to Generative AI",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
  {
    id: "17",
    name: "Machine Learning Foundations",
    issuer: "AWS Educate",
    issueDate: "2025",
  },
];
