
# ProBuilder - Portfolio Builder

**ProBuilder** is a customizable portfolio builder that allows you to showcase your skills, projects, and experience in a personalized way. Follow the instructions below to get started with ProBuilder.

## Features

- **Personalized Portfolio**: Add and customize your profile, bio, skills, projects, and more.
- **Tech Stack**: Highlight the technologies you work with using interactive tech cards.
- **Responsive Design**: Looks great on any device!
- **Dark and Light Themes**: Easily switch between themes.

## Prerequisites

Before you start, make sure you have the following installed:

- **[Node.js](https://nodejs.org/)** (for frontend development)
- **[Git](https://git-scm.com/)** (for version control)
- **[Code Editor](https://code.visualstudio.com/)** (like VS Code for customizing your code)

## Getting Started

Follow these steps to set up and run ProBuilder locally:

### 1. Clone the Repository

Clone the ProBuilder repository to your local machine:

```bash
git clone https://github.com/TAHMID37/ProBuilder.git
cd ProBuilder
```

### 2. Install Dependencies

In the root project folder, run the following command to install all the necessary dependencies:

```bash
npm install
```

This will install the required packages for the project to run properly.

### 3. Configure Portfolio Information

The default portfolio configuration file is located at `config/portfolioConfig.tsx`. You can customize it to include your own personal information, projects, and tech stack.

#### Default Configuration (Example)

```js
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
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
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
```

### 4. Modify the Configuration (Optional)

You can now modify the `config/portfolioConfig.tsx` file to update the following:

- **Personal Information**: Update your name, email, title, location, etc.
- **Social Links**: Replace the default URLs with your own GitHub, LinkedIn, Instagram, etc.
- **About Section**: Add a personalized description of your background and career.
- **Skills & Tech Stack**: Modify the categories and skills to match your expertise.

### 5. Run the Development Server

After configuring the file, you can run the project locally to preview your portfolio:

```bash
npm run dev
```

This will start a local development server. You can view your portfolio by visiting `http://localhost:3000` in your web browser.

### 6. Build and Deploy

When you're satisfied with your portfolio, you can build it for production:

```bash
npm run build
```

This will generate a production-ready version of the site in the `build` directory. From here, you can deploy it to platforms like GitHub Pages, Netlify, or Vercel.

### 7. View My Live Portfolio

You can view My live portfolio at [tahmid37.github.io/ProBuilder/](https://tahmid37.github.io/ProBuilder/).

---

By following these steps, you’ll have a fully functional and personalized portfolio built with ProBuilder!
