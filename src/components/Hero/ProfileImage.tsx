import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ProfileImage = ({src}) => {
  const { currentTheme } = useTheme();
  
  return (
    <div className="relative mx-auto w-48 h-48 mb-8">
      <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary} rounded-full animate-pulse`}></div>
      <img
        src={src}
        alt="Profile Image"
        className="relative rounded-full w-full h-full object-cover border-4 border-white"
      />
    </div>
  );
};

export default ProfileImage;