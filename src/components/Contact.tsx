
// import React, { useState } from 'react';
// import { Mail, MapPin, Phone, Send } from 'lucide-react';
// import { useTheme } from '../context/ThemeContext';

// const Contact = () => {
//   const { currentTheme } = useTheme();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const mailtoLink = `mailto:190041237tr@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
//     window.location.href = mailtoLink;
//   };

//   const inputClasses = `mt-1 block w-full rounded-lg bg-gray-700/50 border-transparent focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-${currentTheme.accent} transition-all`;

//   return (
//     <section id="contact" className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
//             Let's Connect
//           </span>
//         </h2>
        
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             {[
//               { icon: Mail, title: 'Email', content: '190041237tr@gmail.com', href: 'mailto:190041237tr@gmail.com' },
//               { icon: MapPin, title: 'Location', content: 'Dhaka, Bangladesh' },
//               { icon: Phone, title: 'Phone', content: 'Available upon request' }
//             ].map((item, index) => (
//               <div key={index} className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all">
//                 <div className="flex items-center space-x-4">
//                   <item.icon className={`w-6 h-6 ${currentTheme.accent}`} />
//                   <div>
//                     <h3 className="text-lg font-semibold">{item.title}</h3>
//                     {item.href ? (
//                       <a href={item.href} className={`text-${currentTheme.accent} hover:text-${currentTheme.accent}`}>
//                         {item.content}
//                       </a>
//                     ) : (
//                       <p className="text-gray-300">{item.content}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <form onSubmit={handleSubmit} className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 required
//                 className={inputClasses}
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 required
//                 className={inputClasses}
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//               />
//             </div>
            
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 required
//                 className={inputClasses}
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//               ></textarea>
//             </div>
            
//             <button
//               type="submit"
//               className={`w-full bg-gradient-to-r ${currentTheme.primary} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2`}
//             >
//               <Send className="w-5 h-5" />
//               <span>Send Message</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolioConfig';

const Contact = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${portfolioConfig.personal.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const inputClasses = `mt-1 block w-full rounded-lg bg-gray-700/50 border-transparent focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-${currentTheme.accent} transition-all`;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className={`bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent`}>
            Let's Connect
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              { icon: Mail, title: 'Email', content: portfolioConfig.personal.email, href: `mailto:${portfolioConfig.personal.email}` },
              { icon: MapPin, title: 'Location', content: portfolioConfig.personal.location },
              { icon: Phone, title: 'Phone', content: portfolioConfig.personal.phone }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all">
                <div className="flex items-center space-x-4">
                  <item.icon className={`w-6 h-6 ${currentTheme.accent}`} />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className={`text-${currentTheme.accent} hover:text-${currentTheme.accent}`}>
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{item.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                required
                className={inputClasses}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                required
                className={inputClasses}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className={inputClasses}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={`w-full bg-gradient-to-r ${currentTheme.primary} text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-all flex items-center justify-center space-x-2`}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
