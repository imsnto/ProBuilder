


// import React from 'react';
// import { useTheme } from '../context/ThemeContext';
// import { Brain, Database, Code, Server, CheckCircle2, Cpu, Cloud, GitBranch } from 'lucide-react';

// const SkillCard = ({ icon: Icon, title, skills, theme }) => (
//   <div className="relative group">
//     {/* Background gradient on hover */}
//     <div
//       className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`}
//     />

//     <div
//       className="relative flex flex-col h-full bg-gray-900 p-6 rounded-lg border border-gray-800 transition duration-500 group-hover:border-gray-700"
//     >
//       {/* Icon container with gradient background */}
//       <div className="relative mb-6">
//         <div
//           className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-full blur-xl transform group-hover:scale-110 transition duration-500`}
//         />
//         <div className="relative bg-gray-800 p-4 rounded-2xl inline-block">
//           <Icon
//             className={`w-8 h-8 ${theme.accent} group-hover:text-blue-300 transition-colors duration-300`}
//           />
//         </div>
//       </div>

//       {/* Title with gradient on hover */}
//       <h3
//         className={`text-xl font-semibold mb-4 text-gray-100 group-hover:bg-gradient-to-r ${theme.primary} group-hover:bg-clip-text group-hover:text-transparent transition duration-300`}
//       >
//         {title}
//       </h3>

//       {/* Skills list */}
//       <ul className="space-y-3">
//         {skills.map((skill, index) => (
//           <li
//             key={index}
//             className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition duration-300"
//           >
//             <CheckCircle2
//               className={`w-4 h-4 flex-shrink-0 ${theme.accent} group-hover:text-blue-400`}
//             />
//             <span>{skill}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// const Skills = () => {
//   const { currentTheme } = useTheme();

//   const skillsData = [
//     {
//       icon: Cpu,
//       title: 'AI/ML',
//       skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LLMs', 'Computer Vision']
//     },
//     {
//       icon: Code,
//       title: 'Programming',
//       skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java']
//     },
//     {
//       icon: Database,
//       title: 'Data Science',
//       skills: ['Pandas', 'NumPy', 'Data Analysis', 'Data Visualization']
//     },
//     {
//       icon: Cloud,
//       title: 'Tools & Platforms',
//       skills: ['Docker', 'Git', 'AWS', 'Linux', 'MLOps']
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 relative">
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className="text-center mb-16 space-y-4">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span
//               className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
//             >
//               Skills & Expertise
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Leveraging cutting-edge technologies to build innovative solutions
//           </p>
//         </div>

//         {/* Skills grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {skillsData.map((skill, index) => (
//             <SkillCard key={index} {...skill} theme={currentTheme} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, Cpu, Code, Database, Cloud } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig'; // Import portfolioConfig

const SkillCard = ({ icon: Icon, title, skills, theme }) => (
  <div className="relative group">
    {/* Background gradient on hover */}
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r ${theme.primary} rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500`}
    />

    <div
      className="relative flex flex-col h-full bg-gray-900 p-6 rounded-lg border border-gray-800 transition duration-500 group-hover:border-gray-700"
    >
      {/* Icon container with gradient background */}
      <div className="relative mb-6">
        <div
          className={`absolute inset-0 bg-gradient-to-r ${theme.primary} rounded-full blur-xl transform group-hover:scale-110 transition duration-500`}
        />
        <div className="relative bg-gray-800 p-4 rounded-2xl inline-block">
          <Icon
            className={`w-8 h-8 ${theme.accent} group-hover:text-blue-300 transition-colors duration-300`}
          />
        </div>
      </div>

      {/* Title with gradient on hover */}
      <h3
        className={`text-xl font-semibold mb-4 text-gray-100 group-hover:bg-gradient-to-r ${theme.primary} group-hover:bg-clip-text group-hover:text-transparent transition duration-300`}
      >
        {title}
      </h3>

      {/* Skills list */}
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-gray-400 group-hover:text-gray-300 transition duration-300"
          >
            <CheckCircle2
              className={`w-4 h-4 flex-shrink-0 ${theme.accent} group-hover:text-blue-400`}
            />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Skills = () => {
  const { currentTheme } = useTheme();

  // Access skills categories from portfolioConfig
  const skillsCategories = portfolioConfig.skills.categories;

  return (
    <section id="skills" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span
              className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
            >
              {portfolioConfig.skills.title} {/* Dynamic section title */}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {portfolioConfig.skills.subtitle} {/* Dynamic section subtitle */}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsCategories.map((category, index) => {
            // Map icons from string to actual component
            const Icon = category.icon === 'Cpu' ? Cpu : 
                        category.icon === 'Code' ? Code : 
                        category.icon === 'Database' ? Database : 
                        category.icon === 'Cloud' ? Cloud : null;

            return (
              <SkillCard
                key={index}
                icon={Icon}
                title={category.title}
                skills={category.skills}
                theme={currentTheme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
