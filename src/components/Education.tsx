import React from 'react';
import { GraduationCap, BookOpenText, School } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig';

const EducationCard = ({ icon: Icon, degree, duration, institution, currentTheme }) => (
  <div
    className={`flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition duration-300`}
  >
    <div className="flex-shrink-0">
      <div className={`p-3 bg-gradient-to-r ${currentTheme.primary} rounded-lg`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-200 mb-1">{degree}</h3>
      <p className="text-gray-400">{institution}</p>
      <p className="text-gray-500 text-sm mt-1">{duration}</p>
    </div>
  </div>
);

const Education = () => {
  const { currentTheme } = useTheme();

  // Education data from portfolioConfig
  const educationData = portfolioConfig.education;

  // Icon mapper
  const iconMap = {
    GraduationCap,
    BookOpenText,
    School,
  };

  return (
    <section id="education" className="py-20 relative">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.accent}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {educationData.subtitle}
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.degrees.map((edu, index) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            return (
              <EducationCard
                key={index}
                icon={Icon}
                degree={edu.degree}
                institution={edu.institution}
                duration={edu.duration}
                currentTheme={currentTheme}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
