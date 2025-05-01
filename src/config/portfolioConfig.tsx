
import { Brain, Database, Code, Server, CheckCircle2, Cpu, Cloud, GitBranch, Award, Briefcase, BookOpen, Layout, MessageSquare } from 'lucide-react';

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Solaiman Hossain",
    title: "Aspiring Software Engineer | Fresh Graduate",
    company: "",
    tagline: "Passionate about technology and eager to contribute to innovative solutions",
    email: "slmnsnto@gmail.com",
    location: "Dhaka, Bangladesh",
    phone: "01914622617",
    profileImage: "images/me.jpg",
    aboutImage: "https://images.unsplash.com/photo-1525373698358-041e3a460346?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3",
  },

  // Social Links
  social: {
    github: "https://github.com/imsnto",
    linkedin: "https://www.linkedin.com/in/imsnto/",
    dailyDev: "https://app.daily.dev/imsnto",
    codeforces: "https://codeforces.com/profile/imsnto",
    instagram: "https://www.instagram.com/imsnto/"
  },

  // About Section
  about: {
    title: "About Me",
    subtitle: "Seeking opportunities to apply my skills in a professional environment",
    description: [
      "As a recent computer science graduate, I'm enthusiastic about launching my career in software engineering. I bring fresh perspectives, up-to-date knowledge of modern technologies, and a strong foundation in programming principles.During my academic journey, I've developed skills in various programming languages and frameworks, with particular interest in web development and software design. I'm eager to apply these skills in a professional environment where I can grow and contribute to meaningful projects."
    ],
    highlights: [
      {
        icon: "Award",
        title: "Quick Learner",
        description: "Adaptable and eager to master new technologies"
      },
      {
        icon: "Briefcase",
        title: "Team Player",
        description: "Collaborative approach to problem-solving"
      },
      {
        icon: "Code",
        title: "Problem Solver",
        description: "Analytical thinker with attention to detail"
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
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs"]
      },
      {
        icon: "Code",
        title: "Programming",
        skills: ["Python", "JavaScript", "C++", "Java"]
      },
      {
        icon: "Database",
        title: "Data Science",
        skills: ["Pandas", "NumPy", "Data Analysis"]
      },
      {
        icon: "Cloud",
        title: "Tools & Platforms",
        skills: ["Docker", "Git", "Linux"]
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
        techs: ["Django", "FastAPI", "Flask", "LangChain"],
        gradient: "from-purple-600/20 to-purple-400/20"
      },
      {
        icon: "MessageSquare",
        category: "NLP",
        techs: ["LLMs", "BERT", "Transformers"],
        gradient: "from-cyan-600/20 to-cyan-400/20"
      },
      {
        icon: "Database",
        category: "Databases",
        techs: ["MySQL", "PostgreSQL"],
        gradient: "from-emerald-600/20 to-emerald-400/20"
      }
    ]
  },



  // Navigation Links
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Competitive Programming", href: "#competitive"},
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],

  // GitHub Integration
  github: {
    username: "imsnto",
    reposToShow: 6,
    excludeForks: true,
    projectsSectionTitle: "Featured Projects",
    projectsSectionDescription:"Explore my latest works and contributions",
  },
  education: {
    subtitle: "A journey of growth, knowledge, and innovation.",
    degrees: [
      {
        icon: 'GraduationCap',
        degree: "B.Sc. in Computer Science & Engineering",
        institution: "Gopalganj Science & Technology University (GSTU)",
        duration: "2019 – 2024",
      },
      {
        icon: 'School',
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Shahid Ziaur Rahman Degree College",
        duration: "2016 – 2018",
      },
      {
        icon: 'BookOpenText',
        degree: "Secondary School Certificate (SSC)",
        institution: "Hasadah Secondary School",
        duration: "2011 – 2016",
      },
    ],
  },
  
};
