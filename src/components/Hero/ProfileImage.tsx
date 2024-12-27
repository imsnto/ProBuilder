import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ProfileImage = () => {
  const { currentTheme } = useTheme();
  
  return (
    <div className="relative mx-auto w-48 h-48 mb-8">
      <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary} rounded-full animate-pulse`}></div>
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
        alt="Tahmid Rahman"
        className="relative rounded-full w-full h-full object-cover border-4 border-white"
      />
    </div>
  );
};

export default ProfileImage;