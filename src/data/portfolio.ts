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
  photoUrl?: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Austin Jayaraj.A",
  role: "Full Stack and DevOps Engineer",
  bio: "A Full Stack and DevOps Engineer passionate about building end-to-end solutions. I design and develop scalable full-stack applications using React, Node.js, and modern web technologies, while implementing robust DevOps practices with AWS cloud infrastructure, CI/CD pipelines, and automation frameworks. Committed to delivering high-quality, scalable, and reliable solutions.",
  email: "austinjayaraj282@gmail.com",
  linkedin: "https://www.linkedin.com/in/austin-jayaraj-a-087200329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Austinjayaraj",
  location: "Chennai, India",
  photoUrl: "/profile-photo.jpg",
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
    githubUrl: "https://github.com/Austinjayaraj/cellintel",
    category: "web",
  },
  {
    id: "2",
    title: "ARIS",
    description: "An AI-powered research assistant using Hugging Face and custom LLM pipelines. Leverages advanced language models for intelligent research assistance and document analysis.",
    techStack: ["Python", "Hugging Face", "LLMs", "Flask", "OpenAI API"],
    githubUrl: "https://github.com/Austinjayaraj/aris",
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
    name: "Project fest winner 2025",
    issuer: "Competition",
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
  {
    id: "18",
    name: "HTML5 - The Language",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex 17739732834840810000 shared/overview",
  },
  {
    id: "19",
    name: "Networking and Web Technology",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex auth 01254512784165273671 shared/overview",
  },
  {
    id: "20",
    name: "CSS3",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex 15281000932633230000 shared/overview",
  },
  {
    id: "21",
    name: "JavaScript",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex 18109698366332810000 shared/overview",
  },
  {
    id: "22",
    name: "Front End Web Developer Certification",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex auth 013951019900878848219 shared/overview",
  },
  {
    id: "23",
    name: "Frontend web developer Modern HTML CSS JavaScript",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex auth 014157697606279168211/overview#iss=https://infyspringboard.onwingspan.com/auth/realms/infyspringboard",
  },
  {
    id: "24",
    name: "Fundamentals of Java Programming",
    issuer: "Infosys Springboard",
    issueDate: "2025",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/toc/lex auth 0142227424199639041546/overview",
  },
];
