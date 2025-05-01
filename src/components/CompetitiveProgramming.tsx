import React from 'react';
import { Code2, Medal, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const competitiveData = [
  {
    icon: Code2,
    title: 'Codeforces - Specialist',
    description: 'Reached Specialist (Rating: ~1492) with participation in 100+ contests.',
    link: 'https://codeforces.com/profile/imsnto',
  },
  {
    icon: Medal,
    title: 'LeetCode - Batch Knight',
    description: 'Solved 700+ problems and participated in 55+ contests.',
    link: 'https://leetcode.com/imsnto',
  },
  {
    icon: Activity,
    title: 'Onsite Contests',
    description: 'Participated in various inter-university contests.',
  },
];

const CompetitiveProgramming = () => {
  const { currentTheme } = useTheme();

  return (
    <section id="competitive" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
              Competitive Programming
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honing algorithmic thinking through consistent participation and problem solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitiveData.map((item, index) => (
            <a
              key={index}
              href={item.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-gray-800/40 p-5 rounded-lg border border-gray-700/50 hover:bg-gray-800/60 transition duration-300 ${
                !item.link && 'pointer-events-none'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 bg-gradient-to-r ${currentTheme.primary} rounded-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
