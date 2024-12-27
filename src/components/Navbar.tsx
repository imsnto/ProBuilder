
// // export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { Menu, X, Github, Linkedin } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext'; // Assuming the ThemeContext is used for theme management

// const Navbar = () => {
//   const { currentTheme } = useTheme();  // Get the current theme from context
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className={`text-xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
//               TR
//             </span>
//           </div>
          
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <a
//                 href="#home"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}  
//               >
//                 Home
//               </a>

//               <a
//                 href="#about"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//               >
//                 About
//               </a>
//               <a
//                 href="#skills"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//               >
//                 Skills
//               </a>
//               <a
//                 href="#tech-stack"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//               >
//                 Tech Stack
//               </a>
//               <a
//                 href="#projects"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//               >
//                 Projects
//               </a>
//               <a
//                 href="#contact"
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
//                 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//               >
//                 Contact
//               </a>
//               <a
//                 href="https://github.com/TAHMID37"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`hover:text-${currentTheme.accent} transition-all duration-300`}
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/trahmanrifat/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`hover:text-${currentTheme.accent} transition-all duration-300`}
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <a
//               href="#home"
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 
//               hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}  
//             >
//               Home
//             </a>
//             <a
//               href="#about"
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 
//               hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//             >
//               About
//             </a>
//             <a
//               href="#skills"
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 
//               hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//             >
//               Skills
//             </a>
//             <a href="#tech-stack"
//              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}>
//               Tech Stack
//             </a>
//             <a
//               href="#projects"
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 
//               hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//             >
//               Projects
//             </a>
//             <a
//               href="#contact"
//               className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 
//               hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Assuming the ThemeContext is used for theme management
import { portfolioConfig } from '../config/portfolioConfig'; // Import portfolio config

const Navbar = () => {
  const { currentTheme } = useTheme();  // Get the current theme from context
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className={`text-xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              {portfolioConfig.personal.name} {/* Dynamic name from config */}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {portfolioConfig.navigation.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
                  hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-${currentTheme.accent} transition-all duration-300`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-${currentTheme.accent} transition-all duration-300`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {portfolioConfig.navigation.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 
                hover:text-${currentTheme.accent} hover:border-b-2 hover:border-${currentTheme.accent}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
