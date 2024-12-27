
// // import React from 'react';
// // import { useTheme } from '../context/ThemeContext';

// // const ThemeSwitcher = () => {
// //   const { theme, setTheme, themes } = useTheme();

// //   return (
// //     <div className="fixed bottom-6 right-6 z-50">
// //       <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl p-5 shadow-2xl ring-1 ring-gray-700">
// //         <h3 className="text-sm text-gray-400 font-medium mb-3 text-center">
// //           Select Theme
// //         </h3>
// //         <div className="flex gap-3 justify-center">
// //           {Object.entries(themes).map(([themeName, themeColors]) => (
// //             <button
// //               key={themeName}
// //               onClick={() => setTheme(themeName as any)}
// //               className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-md transition-all transform hover:scale-110 ${
// //                 theme === themeName
// //                   ? 'border-white ring-2 ring-offset-2 ring-offset-gray-900 ring-white'
// //                   : 'border-gray-600'
// //               }`}
// //               style={{
// //                 background: themeColors.primaryStart
// //                   ? `linear-gradient(to right, ${themeColors.primaryStart}, ${themeColors.primaryEnd})`
// //                   : themeColors.primary || '#000', // Fallback to solid color if no gradient is provided
// //               }}
// //               aria-label={`Switch to ${themeName} theme`}
// //               title={`Switch to ${themeName} theme`}
// //             >
// //               {theme === themeName && (
// //                 <span className="text-white text-xs font-bold">✓</span>
// //               )}
// //             </button>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ThemeSwitcher;


// import React from 'react';
// import { useTheme } from '../context/ThemeContext';

// const ThemeSwitcher = () => {
//   const { theme, setTheme, themes } = useTheme();

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl p-5 shadow-2xl ring-1 ring-gray-700">
//         <h3 className="text-sm text-gray-400 font-medium mb-3 text-center">
//           Select Theme
//         </h3>
//         <div className="flex gap-4 justify-center">
//           {Object.entries(themes).map(([themeName, themeColors]) => (
//             <button
//               key={themeName}
//               onClick={() => setTheme(themeName)}
//               className={`w-12 h-12 rounded-full flex items-center justify-center transition-all transform hover:scale-110 relative ${
//                 theme === themeName
//                   ? 'border-2 border-white ring-2 ring-offset-2 ring-offset-gray-900 ring-white'
//                   : 'border-2 border-gray-600'
//               }`}
//               style={{
//                 background: themeColors.primaryStart
//                   ? `linear-gradient(to right, ${themeColors.primaryStart}, ${themeColors.primaryEnd})`
//                   : themeColors.primary || '#000', // Fallback to solid color if no gradient is provided
//               }}
//               aria-label={`Switch to ${themeName} theme`}
//               title={`Switch to ${themeName} theme`}
//             >
//               {/* Check mark to indicate current theme */}
//               {theme === themeName && (
//                 <span className="absolute text-white text-xs font-bold">✓</span>
//               )}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemeSwitcher;

// import React, { useState } from 'react';
// import { useTheme } from '../context/ThemeContext';

// const ThemeSwitcher = () => {
//   const { theme, setTheme, themes } = useTheme();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Toggle Button */}
//       <button
//         className="bg-gray-900/80 backdrop-blur-lg rounded-full p-3 shadow-2xl ring-1 ring-gray-700 flex items-center justify-center transition-transform hover:scale-110"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle Theme Switcher"
//         title="Toggle Theme Switcher"
//       >
//         <span className="text-white text-lg font-bold">🎨</span>
//       </button>

//       {/* Theme Selector Dropdown */}
//       {isOpen && (
//         <div className="mt-3 bg-gray-900/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl ring-1 ring-gray-700">
//           <h3 className="text-sm text-gray-400 font-medium mb-3 text-center">
//             Select Theme
//           </h3>
//           <div className="grid grid-cols-3 gap-3">
//             {Object.entries(themes).map(([themeName, themeColors]) => (
//               <button
//                 key={themeName}
//                 onClick={() => {
//                   setTheme(themeName);
//                   setIsOpen(false); // Close the dropdown after selection
//                 }}
//                 className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md ${
//                   theme === themeName
//                     ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white'
//                     : 'border border-gray-600'
//                 }`}
//                 style={{
//                   background: themeColors.primaryStart
//                     ? `linear-gradient(to right, ${themeColors.primaryStart}, ${themeColors.primaryEnd})`
//                     : themeColors.primary || '#000',
//                 }}
//                 aria-label={`Switch to ${themeName} theme`}
//                 title={`Switch to ${themeName} theme`}
//               >
//                 {theme === themeName && (
//                   <span className="text-white text-xs font-bold">✓</span>
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThemeSwitcher;


import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        className="bg-gray-900/80 backdrop-blur-lg rounded-full p-3 shadow-2xl ring-1 ring-gray-700 flex items-center justify-center transition-transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Theme Switcher"
        title="Toggle Theme Switcher"
      >
        <span className="text-white text-lg font-bold">🎨</span>
      </button>

      {/* Theme Selector Dropdown */}
      {isOpen && (
        <div className="mt-3 bg-gray-900/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl ring-1 ring-gray-700">
          <h3 className="text-sm text-gray-400 font-medium mb-3 text-center">
            Select Theme
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(themes).map(([themeName, themeColors]) => (
              <button
                key={themeName}
                onClick={() => {
                  setTheme(themeName as any);
                  setIsOpen(false); // Close after selection
                }}
                className={`w-12 h-12 rounded-lg flex items-center justify-center transition-transform hover:scale-105 shadow-md ${
                  theme === themeName
                    ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white'
                    : 'border border-gray-600'
                }`}
                style={{
                  background: `linear-gradient(to right, ${themeColors.rawColors.primaryStart}, ${themeColors.rawColors.primaryEnd})`,
                }}
                aria-label={`Switch to ${themeName} theme`}
                title={`Switch to ${themeName} theme`}
              >
                {theme === themeName && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
