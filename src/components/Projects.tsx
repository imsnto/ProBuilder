

// import React, { useEffect, useState } from 'react';
// import { Github, Star, GitFork, Code, ExternalLink, Loader2 } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const ProjectCard = ({ project, theme }) => (
//   <div className="group relative">
//     {/* Hover effect gradient */}
//     <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
    
//     <div className="relative h-full bg-gray-900 rounded-lg border border-gray-800 p-6 transition duration-500 group-hover:border-gray-700">
//       {/* Project Header */}
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex-1">
//           <h3 className={`text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition duration-300`}>
//             {project.name}
//           </h3>
//           <p className="text-sm text-gray-500 mt-1">
//             Updated {new Date(project.updated_at).toLocaleDateString()}
//           </p>
//         </div>
//         <a 
//           href={project.html_url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 rounded-full hover:bg-gray-800 transition duration-300"
//         >
//           <Github className={`w-5 h-5 text-gray-400 hover:text-blue-400 ${theme.accent}`} />
//         </a>
//       </div>

//       {/* Description */}
//       <p className="text-gray-400 mb-6 h-20 line-clamp-3">
//         {project.description || 'No description available'}
//       </p>

//       {/* Tech Stack */}
//       {project.language && (
//         <div className="mb-4">
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 text-sm">
//             <span className={`w-2 h-2 rounded-full ${theme.accent} mr-2`} />
//             <span className="text-gray-300">{project.language}</span>
//           </div>
//         </div>
//       )}

//       {/* Stats */}
//       <div className="flex items-center space-x-6 text-sm text-gray-400">
//         <div className="flex items-center space-x-2">
//           <Star className="w-4 h-4 text-yellow-500" />
//           <span>{project.stargazers_count}</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <GitFork className="w-4 h-4 text-blue-400" />
//           <span>{project.forks_count}</span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Code className="w-4 h-4 text-purple-400" />
//           <span>{project.size}KB</span>
//         </div>
//       </div>

//       {/* Improved View Project Link */}
//       <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
//         <div className="relative">
//           <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-md blur opacity-75`} />
//           <a
//             href={project.html_url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-900 text-gray-100 rounded-md hover:text-white transition duration-300"
//           >
//             <span className="font-medium">Explore Project</span>
//             <ExternalLink className={`w-4 h-4 ${theme.accent}`} />
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { currentTheme } = useTheme();

//   useEffect(() => {
//     fetch('https://api.github.com/users/TAHMID37/repos')
//       .then(response => response.json())
//       .then(data => {
//         const sortedProjects = data
//           .filter(project => !project.fork)
//           .sort((a, b) => b.stargazers_count - a.stargazers_count)
//           .slice(0, 6);
//         setProjects(sortedProjects);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching projects:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className={`text-4xl md:text-5xl font-bold`}>
//             <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Explore my latest works and contributions
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex flex-col items-center justify-center space-y-4 min-h-[400px]">
//             <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
//             <p className="text-gray-400">Loading projects...</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map(project => (
//               <ProjectCard key={project.id} project={project} theme={currentTheme} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, Code, ExternalLink, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig'; // Import portfolio config

const ProjectCard = ({ project, theme }) => (
  <div className="group relative">
    {/* Hover effect gradient */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
    
    <div className="relative h-full bg-gray-900 rounded-lg border border-gray-800 p-6 transition duration-500 group-hover:border-gray-700">
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition duration-300`}>
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

      {/* Description */}
      <p className="text-gray-400 mb-6 h-20 line-clamp-3">
        {project.description || 'No description available'}
      </p>

      {/* Tech Stack */}
      {project.language && (
        <div className="mb-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 text-sm">
            <span className={`w-2 h-2 rounded-full ${theme.accent} mr-2`} />
            <span className="text-gray-300">{project.language}</span>
          </div>
        </div>
      )}

      {/* Stats */}
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

      {/* Improved View Project Link */}
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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentTheme } = useTheme();

  useEffect(() => {
    fetch(`https://api.github.com/users/${portfolioConfig.github.username}/repos`) // Use dynamic GitHub username from config
      .then(response => response.json())
      .then(data => {
        const sortedProjects = data
          .filter(project => !project.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, portfolioConfig.github.reposToShow);
        setProjects(sortedProjects);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold`}>
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              {portfolioConfig.github.projectsSectionTitle} {/* Dynamic section title */}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {portfolioConfig.github.projectsSectionDescription} {/* Dynamic section description */}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4 min-h-[400px]">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} theme={currentTheme} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
