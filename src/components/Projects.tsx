import React from 'react';
import { Github, Star, GitFork, Code, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig';

const projectsData = [
  {
    "id": 1,
    "name": "Chatbot - Chat with PDF",
    "description": "A powerful application that allows users to have interactive conversations with their PDF documents using LangChain and Streamlit.",
    "language": ["Python", "Streamlit", "LangChain"],
    "stargazers_count": '0',
    "forks_count": '0',
    "size": '0',
    "html_url": "https://github.com/imsnto/chat-with-pdf",
    "updated_at": "2025-04-24T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Django E-commerce Platform",
    "description": "A full-featured e-commerce web application built with Django that provides a complete online shopping experience with product browsing, cart management, user accounts, guest checkout, and admin dashboard.",
    "language": ["Python", "Django"],
    "stargazers_count": 0,
    "forks_count": 0,
    "size": 0,
    "html_url": "https://github.com/imsnto/django-ecommerce",
    "updated_at": "2025-04-24T18:30:00Z"
  },
  {
    "id": 3,
    "name": "Job Portal",
    "description": "A Django-based RESTful API for managing job postings and applications. This project allows employers to create and manage job posts, job seekers to apply for jobs, and provides a Swagger UI for API documentation.",
    "language": ["Python", "Django", "DRF"],
    "stargazers_count": 0,
    "forks_count": 0,
    "size": 0,
    "html_url": "https://github.com/imsnto/job_portal",
    "updated_at": "2025-05-07T18:30:00Z"
  },
  {
    "id": 4,
    "name": "Deep Learning Approaches for Early Detection of Alzheimer's Disease",
    "description": "A deep learning research project aimed at detecting early-stage Alzheimer's by analyzing medical imaging data and identifying key biomarkers. Utilized various deep learning models for accurate classification and analysis.",
    "language": ["Python", "CNN", "Transfer Learning"],
    "stargazers_count": 0,
    "forks_count": 0,
    "size": 0,
    "html_url": "",
    "updated_at": "2024-12-01T00:00:00Z"
  },
  {
    "id": 5,
    "name": ["Pong"],
    "description": "A classic Pong game built using Java Swing and AWT with interactive paddles, ball movement, a scoreboard, high score tracking, and a help menu for gameplay guidance.",
    "language": ["Java", "Swing"],
    "stargazers_count": 0,
    "forks_count": 0,
    "size": 0,
    "html_url": "https://github.com/imsnto/pong",
    "updated_at": "2023-12-01T00:00:00Z"
  }
  
  // Add more projects here
];

const ProjectCard = ({ project, theme }) => (
  <div className="group relative">
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
    
    <div className="relative h-full bg-gray-900 rounded-lg border border-gray-800 p-6 transition duration-500 group-hover:border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition duration-300">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Updated {new Date(project.updated_at).toLocaleDateString()}
          </p>
        </div>
        <a 
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-800 transition duration-300"
        >
          <Github className={`w-5 h-5 text-gray-400 hover:text-blue-400 ${theme.accent}`} />
        </a>
      </div>

      <p className="text-gray-400 mb-6 h-20 line-clamp-3">
        {project.description || 'No description available'}
      </p>

      {Array.isArray(project.language) && project.language.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {project.language.map((lang, index) => (
            <div
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 text-sm"
            >
              <span className={`w-2 h-2 rounded-full ${theme.accent} mr-2`} />
              <span className="text-gray-300">{lang}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center space-x-6 text-sm text-gray-400">
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>{project.stargazers_count}</span>
        </div>
        <div className="flex items-center space-x-2">
          <GitFork className="w-4 h-4 text-blue-400" />
          <span>{project.forks_count}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Code className="w-4 h-4 text-purple-400" />
          <span>{project.size}KB</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <div className="relative">
          <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-md blur opacity-75`} />
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 text-gray-100 rounded-md hover:text-white transition duration-300"
          >
            <span className="font-medium">Explore Project</span>
            <ExternalLink className={`w-4 h-4 ${theme.accent}`} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { currentTheme } = useTheme();

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold`}>
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              {portfolioConfig.github.projectsSectionTitle}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {portfolioConfig.github.projectsSectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} theme={currentTheme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
