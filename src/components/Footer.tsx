
// import React from 'react';
// import { Github, Linkedin, BookOpen } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext'; // Assuming the ThemeContext is used for theme management

// const Footer = () => {
//   const { currentTheme } = useTheme();  // Get the current theme from the context

//   return (
//     <footer className="bg-gray-900/50 backdrop-blur-sm py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center">
//           <div className="flex space-x-6 mb-6">
//             <a
//               href="https://github.com/TAHMID37"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`text-gray-400 hover:text-${currentTheme.accent} transition-colors`}
//             >
//               <Github className={`w-6 h-6 text-${currentTheme.accent}`} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/trahmanrifat/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`text-gray-400 hover:text-${currentTheme.accent} transition-colors`}
//             >
//               <Linkedin className={`w-6 h-6 text-${currentTheme.primary}`} />
//             </a>
//             <a
//               href="https://app.daily.dev/tahmidrahman"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`text-gray-400 hover:text-${currentTheme.accent} transition-colors`}
//             >
//               <BookOpen className={`w-6 h-6 text-${currentTheme.accent}`} />
//             </a>
//           </div>
//           <p className={`text-gray-400 text-sm`}>
//             © {new Date().getFullYear()} Tahmid Rahman. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Github, Linkedin, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig'  ; // Import portfolio config

const Footer = () => {
  const { currentTheme } = useTheme();  // Get the current theme from the context

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6">
            <a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 hover:text-${currentTheme.accent} transition-colors`}
            >
              <Github className={`w-6 h-6 text-${currentTheme.accent}`} />
            </a>
            <a
              href={portfolioConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 hover:text-${currentTheme.accent} transition-colors`}
            >
              <Linkedin className={`w-6 h-6 text-${currentTheme.accent}`} />
            </a>
            <a
              href={portfolioConfig.social.dailyDev}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 hover:text-${currentTheme.accent} transition-colors`}
            >
              <BookOpen className={`w-6 h-6 text-${currentTheme.accent}`} />
            </a>
          </div>

          {/* Footer Text */}
          <p className={`text-gray-400 text-sm`}>
            © {new Date().getFullYear()} {portfolioConfig.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
