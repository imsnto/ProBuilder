
// import React from 'react';
// import { useTheme } from '../context/ThemeContext';
// import { Database, Server, Brain, Code, Cpu, Cloud, Layout, MessageSquare } from 'lucide-react';

// const TechCard = ({ icon: Icon, category, techs, gradient, theme }) => (
//   <div className="relative group">
//     {/* Background gradient on hover */}
//     <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
    
//     <div className="relative flex flex-col h-full bg-gray-900 p-6 rounded-lg border border-gray-800 transition duration-500 group-hover:border-gray-700">
//       {/* Icon container with gradient */}
//       <div className="relative mb-6">
//         <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-xl transform group-hover:scale-110 transition duration-500`} />
//         <div className="relative bg-gray-800 p-4 rounded-2xl inline-block">
//           <Icon className={`w-8 h-8 ${theme.accent} group-hover:text-blue-300 transition-colors duration-300`} />
//         </div>
//       </div>

//       {/* Category title */}
//       <h3 className={`text-xl font-semibold mb-4 text-gray-100 group-hover:bg-gradient-to-r ${theme.primary} group-hover:bg-clip-text group-hover:text-transparent transition duration-300`}>
//         {category}
//       </h3>

//       {/* Tech list */}
//       <ul className="space-y-3">
//         {techs.map((tech, index) => (
//           <li key={index} className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition duration-300">
//             <span className={`w-2 h-2 bg-blue-500 rounded-full group-hover:text-blue-400`} />
//             <span>{tech}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// const TechStack = () => {
//   const { currentTheme } = useTheme();

//   const technologies = {
//     'AI/ML': {
//       icon: Brain,
//       techs: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
//       gradient: 'from-blue-600/20 to-blue-400/20'
//     },
//     'Frameworks': {
//       icon: Layout,
//       techs: ['Django', 'FastAPI', 'LangChain', 'Crew-AI'],
//       gradient: 'from-purple-600/20 to-purple-400/20'
//     },
//     'NLP': {
//       icon: MessageSquare,
//       techs: ['LLMs', 'Llama-Index', 'BERT', 'Transformers'],
//       gradient: 'from-cyan-600/20 to-cyan-400/20'
//     },
//     'Databases': {
//       icon: Database,
//       techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
//       gradient: 'from-emerald-600/20 to-emerald-400/20'
//     }
//   };

//   return (
//     <section id="tech-stack" className="py-20 relative">
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
//               Tech Stack
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Cutting-edge technologies I work with
//           </p>
//         </div>

//         {/* Tech grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Object.entries(technologies).map(([category, { icon: Icon, techs, gradient }]) => (
//             <TechCard 
//               key={category}
//               icon={Icon}
//               category={category}
//               techs={techs}
//               gradient={gradient}
//               theme={currentTheme}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig'; // Import portfolioConfig
import { Database, Server, Brain, Code, Cpu, Cloud, Layout, MessageSquare } from 'lucide-react';

const TechCard = ({ icon: Icon, category, techs, gradient, theme }) => (
  <div className="relative group">
    {/* Background gradient on hover */}
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`} />
    
    <div className="relative flex flex-col h-full bg-gray-900 p-6 rounded-lg border border-gray-800 transition duration-500 group-hover:border-gray-700">
      {/* Icon container with gradient */}
      <div className="relative mb-6">
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-xl transform group-hover:scale-110 transition duration-500`} />
        <div className="relative bg-gray-800 p-4 rounded-2xl inline-block">
          <Icon className={`w-8 h-8 ${theme.accent} group-hover:text-blue-300 transition-colors duration-300`} />
        </div>
      </div>

      {/* Category title */}
      <h3 className={`text-xl font-semibold mb-4 text-gray-100 group-hover:bg-gradient-to-r ${theme.primary} group-hover:bg-clip-text group-hover:text-transparent transition duration-300`}>
        {category}
      </h3>

      {/* Tech list */}
      <ul className="space-y-3">
        {techs.map((tech, index) => (
          <li key={index} className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition duration-300">
            <span className={`w-2 h-2 bg-blue-500 rounded-full group-hover:text-blue-400`} />
            <span>{tech}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const TechStack = () => {
  const { currentTheme } = useTheme();

  // Access tech stack categories from portfolioConfig
  const techStackCategories = portfolioConfig.techStack.categories;

  return (
    <section id="tech-stack" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              {portfolioConfig.techStack.title} {/* Dynamic title */}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {portfolioConfig.techStack.subtitle} {/* Dynamic subtitle */}
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStackCategories.map(({ category, icon, techs, gradient }, index) => {
            // Map icon string to component
            const Icon = icon === 'Brain' ? Brain :
                        icon === 'Cpu' ? Cpu :
                        icon === 'Database' ? Database :
                        icon === 'Cloud' ? Cloud :
                        icon === 'Layout' ? Layout :
                        icon === 'MessageSquare' ? MessageSquare : null;

            return (
              <TechCard 
                key={index}
                icon={Icon}
                category={category}
                techs={techs}
                gradient={gradient}
                theme={currentTheme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
