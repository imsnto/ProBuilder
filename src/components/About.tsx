


// import React from 'react';
// import { Award, Briefcase, Code, BookOpen } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const HighlightCard = ({ icon: Icon, title, description, currentTheme }) => (
//   <div
//     className={`flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition duration-300`}
//   >
//     <div className="flex-shrink-0">
//       <div className={`p-3 bg-gradient-to-r ${currentTheme.primary} rounded-lg`}>
//         <Icon className="w-6 h-6 text-white" />
//       </div>
//     </div>
//     <div>
//       <h3 className="text-lg font-semibold text-gray-200 mb-1">{title}</h3>
//       <p className="text-gray-400">{description}</p>
//     </div>
//   </div>
// );

// const About = () => {
//   const { currentTheme } = useTheme();

//   const highlights = [
//     {
//       icon: Award,
//       title: 'AI/ML Expert',
//       description: 'Specialized in developing cutting-edge AI solutions and ML models',
//     },
//     {
//       icon: Briefcase,
//       title: 'Leadership',
//       description: 'Leading projects with ownership mindset at Brain Station 23',
//     },
//     {
//       icon: Code,
//       title: 'Innovation',
//       description: 'Creating practical, client-centered AI solutions',
//     },
//     {
//       icon: BookOpen,
//       title: 'Continuous Learning',
//       description: 'Staying current with latest AI/ML technologies and trends',
//     },
//   ];

//   return (
//     <section id="about" className="py-20 relative">
//       {/* Background gradient */}
//       <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.accent}`} />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section header */}
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold">
//             <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
//               About Me
//             </span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Passionate about transforming ideas into intelligent solutions
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <div className="space-y-8">
//             <div className="space-y-6">
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 As an AI/ML expert at Brain Station 23, I'm driven by the challenge of developing practical, 
//                 client-centered solutions that create real impact. I lead projects with an ownership mindset, 
//                 ensuring we deliver beyond technical requirements to provide genuine value.
//               </p>
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 My expertise in large language models (LLMs) and advanced AI technologies enables me to 
//                 tackle complex challenges and drive innovation. I thrive in leadership roles, focusing on 
//                 smooth delivery while effectively troubleshooting complicated issues.
//               </p>
//             </div>

//             {/* Highlights grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {highlights.map((highlight, index) => (
//                 <HighlightCard key={index} {...highlight} currentTheme={currentTheme} />
//               ))}
//             </div>
//           </div>

//           {/* Right content - Image */}
//           <div className="relative group">
//             {/* Decorative elements */}
//             <div
//               className={`absolute -inset-4 bg-gradient-to-r ${currentTheme.primary} rounded-xl blur-xl transform group-hover:translate-x-1 transition duration-500`}
//             />
//             <div
//               className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary} rounded-lg transform rotate-6 group-hover:rotate-8 transition duration-500`}
//             />

//             {/* Main image */}
//             <div className="relative rounded-lg overflow-hidden shadow-2xl">
//               <img
//                 src="https://images.unsplash.com/photo-1525373698358-041e3a460346?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3"
//                 alt="AI Technology"
//                 className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
//               />
//               {/* Overlay gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { Award, Briefcase, Code, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig'; // Import portfolio config

const HighlightCard = ({ icon: Icon, title, description, currentTheme }) => (
  <div
    className={`flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition duration-300`}
  >
    <div className="flex-shrink-0">
      <div className={`p-3 bg-gradient-to-r ${currentTheme.primary} rounded-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-200 mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const About = () => {
  const { currentTheme } = useTheme();

  // Use portfolioConfig to dynamically populate highlights
  const highlights = [
    {
      icon: Award,
      title: portfolioConfig.about.highlights[0].title,
      description: portfolioConfig.about.highlights[0].description,
    },
    {
      icon: Briefcase,
      title: portfolioConfig.about.highlights[1].title,
      description: portfolioConfig.about.highlights[1].description,
    },
    {
      icon: Code,
      title: portfolioConfig.about.highlights[2].title,
      description: portfolioConfig.about.highlights[2].description,
    },
    {
      icon: BookOpen,
      title: portfolioConfig.about.highlights[3].title,
      description: portfolioConfig.about.highlights[3].description,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.accent}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about transforming ideas into intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {portfolioConfig.about.description[0]}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {portfolioConfig.about.description[1]}
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <HighlightCard key={index} {...highlight} currentTheme={currentTheme} />
              ))}
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative group">
            {/* Decorative elements */}
            <div
              className={`absolute -inset-4 bg-gradient-to-r ${currentTheme.primary} rounded-xl blur-xl transform group-hover:translate-x-1 transition duration-500`}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary} rounded-lg transform rotate-6 group-hover:rotate-8 transition duration-500`}
            />

            {/* Main image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={portfolioConfig.personal.aboutImage}
                alt="AI Technology"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
