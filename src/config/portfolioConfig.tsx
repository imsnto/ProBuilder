// config/tahmid_info.js
import { Brain, Database, Code, Server, CheckCircle2, Cpu, Cloud, GitBranch, Award, Briefcase, BookOpen, Layout, MessageSquare } from 'lucide-react';

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Tahmid Rahman",
    title: "AI Engineer",
    company: "Brain Station 23",
    tagline: "Transforming ideas into intelligent solutions through AI innovation",
    email: "190041237tr@gmail.com",
    location: "Dhaka, Bangladesh",
    phone: "Available upon request",
    profileImage: "images/profileimage.jpg",
    aboutImage: "https://images.unsplash.com/photo-1525373698358-041e3a460346?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3",
  },

  // Social Links
  social: {
    github: "https://github.com/TAHMID37",
    linkedin: "https://www.linkedin.com/in/trahmanrifat/",
    dailyDev: "https://app.daily.dev/tahmidrahman",
    codeforces: "https://codeforces.com/profile/TAM",
    instagram: "https://www.instagram.com/i.m.tahmid/"
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Passionate about transforming ideas into intelligent solutions",
    description: [
      "As an AI/ML expert at Brain Station 23, I'm driven by the challenge of developing practical, client-centered solutions that create real impact. I lead projects with an ownership mindset, ensuring we deliver beyond technical requirements to provide genuine value.",
      "My expertise in large language models (LLMs) and advanced AI technologies enables me to tackle complex challenges and drive innovation. I thrive in leadership roles, focusing on smooth delivery while effectively troubleshooting complicated issues."
    ],
    highlights: [
      {
        icon: "Award",
        title: "AI/ML Expert",
        description: "Specialized in developing cutting-edge AI solutions and ML models"
      },
      {
        icon: "Briefcase",
        title: "Leadership",
        description: "Leading projects with ownership mindset at Brain Station 23"
      },
      {
        icon: "Code",
        title: "Innovation",
        description: "Creating practical, client-centered AI solutions"
      },
      {
        icon: "BookOpen",
        title: "Continuous Learning",
        description: "Staying current with latest AI/ML technologies and trends"
      }
    ]
  },

  // Skills Section
  skills: {
    title: "Skills & Expertise",
    subtitle: "Leveraging cutting-edge technologies to build innovative solutions",
    categories: [
      {
        icon: "Cpu",
        title: "AI/ML",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "Computer Vision"]
      },
      {
        icon: "Code",
        title: "Programming",
        skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"]
      },
      {
        icon: "Database",
        title: "Data Science",
        skills: ["Pandas", "NumPy", "Data Analysis", "Data Visualization"]
      },
      {
        icon: "Cloud",
        title: "Tools & Platforms",
        skills: ["Docker", "Git", "AWS", "Linux", "MLOps"]
      }
    ]
  },

  // Tech Stack Section
  techStack: {
    title: "Tech Stack",
    subtitle: "Cutting-edge technologies I work with",
    categories: [
      {
        icon: "Brain",
        category: "AI/ML",
        techs: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
        gradient: "from-blue-600/20 to-blue-400/20"
      },
      {
        icon: "Layout",
        category: "Frameworks",
        techs: ["Django", "FastAPI", "LangChain", "Crew-AI"],
        gradient: "from-purple-600/20 to-purple-400/20"
      },
      {
        icon: "MessageSquare",
        category: "NLP",
        techs: ["LLMs", "Llama-Index", "BERT", "Transformers"],
        gradient: "from-cyan-600/20 to-cyan-400/20"
      },
      {
        icon: "Database",
        category: "Databases",
        techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
        gradient: "from-emerald-600/20 to-emerald-400/20"
      }
    ]
  },



  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ],

  // GitHub Integration
  github: {
    username: "TAHMID37",
    reposToShow: 6,
    excludeForks: true,
    projectsSectionTitle: "Featured Projects",
    projectsSectionDescription:"Explore my latest works and contributions",
  }
};
