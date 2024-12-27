

// import React from 'react';
// import { useTheme } from '../../context/ThemeContext';
// import ProfileImage from './ProfileImage';
// import SocialLinks from './SocialLinks';

// const Hero = () => {
//   const { currentTheme } = useTheme();

//   return (
//     <div
//   id="home"
//   className={`min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b ${currentTheme.accent}`}
// >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="space-y-10">
//           <ProfileImage />
//           <h1 className="text-5xl md:text-7xl font-extrabold">
//             <span
//               className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
//             >
//               Tahmid Rahman
//             </span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-gray-300 font-medium">
//             AI Engineer at Brain Station 23
//           </p>
//           <blockquote className="italic text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
//             <q className="before:content-['“'] after:content-['”'] text-gray-100">
//               Transforming ideas into intelligent solutions through AI
//               innovation
//             </q>
//           </blockquote>
//           <SocialLinks />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioConfig } from '../../config/portfolioConfig';
import ProfileImage from './ProfileImage';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const { currentTheme } = useTheme();
  const { personal } = portfolioConfig;

  return (
    <div
      id="home"
      className={`min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b ${currentTheme.accent}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          <ProfileImage src={personal.profileImage} />
          <h1 className="text-5xl md:text-7xl font-extrabold">
            <span
              className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}
            >
              {personal.name}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-medium">
            {personal.title} at {personal.company}
          </p>
          <blockquote className="italic text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            <q className="before:content-['“'] after:content-['”'] text-gray-100">
              {personal.tagline}
            </q>
          </blockquote>
          <SocialLinks social={portfolioConfig.social} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
