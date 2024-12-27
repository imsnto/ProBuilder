import React from 'react';
import { Github, Linkedin, BookOpen, Code, Instagram } from 'lucide-react';

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transform hover:scale-110 transition-transform"
  >
    <Icon className="w-8 h-8" />
  </a>
);

const SocialLinks = ({social}) => (
  // <div className="flex justify-center space-x-6">
  //   <SocialLink href="https://github.com/TAHMID37" icon={Github} />
  //   <SocialLink href="https://www.linkedin.com/in/trahmanrifat/" icon={Linkedin} />
  //   <SocialLink href="https://app.daily.dev/tahmidrahman" icon={BookOpen} />
  //   <SocialLink href="https://codeforces.com/profile/TAM" icon={Code} />
  //   <SocialLink href="https://www.instagram.com/i.m.tahmid/" icon={Instagram} />
  // </div>
  <div className="flex justify-center space-x-6">
    <SocialLink href={social.github} icon={Github} />
    <SocialLink href={social.linkedin} icon={Linkedin} />
    <SocialLink href={social.dailyDev} icon={BookOpen} />
    <SocialLink href={social.codeforces} icon={Code} />
    <SocialLink href={social.instagram} icon={Instagram} />
  </div>
);

export default SocialLinks;