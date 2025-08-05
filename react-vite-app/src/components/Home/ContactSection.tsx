// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactSection: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message!');
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary min-h-screen flex items-center">
//       <div className="max-w-7xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Map Box */}
//           <div className="group">
//             <div className="relative h-[600px] border border-primary-text/20 rounded-2xl overflow-hidden backdrop-blur-sm bg-primary-text/5 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:border-primary-text/40">
//               {/* Animated border effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute inset-0 rounded-2xl border-2 border-primary-text/30 animate-pulse"></div>
//               </div>
              
//               {/* Map content */}
//               <div className="relative h-full rounded-2xl overflow-hidden">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4919!2d76.9555987!3d8.489801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb3cc8055af%3A0x529436fb75bb4d06!2sAmritha%20Heritage!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Amritha Heritage Location"
//                   className="transition-all duration-700 group-hover:brightness-110"
//                 />
//               </div>

//               {/* Floating label */}
//               <div className="absolute top-6 left-6 bg-primary-text/10 backdrop-blur-md border border-primary-text/20 rounded-xl px-4 py-2 transform transition-all duration-500 group-hover:translate-y-1 group-hover:bg-primary-text/20">
//                 <span className="text-primary-text font-medium text-sm">Find Us Here</span>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form Box */}
//           <div className="group">
//             <div className="relative h-[600px] border border-primary-text/20 rounded-2xl backdrop-blur-sm bg-primary-text/5 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:border-primary-text/40 p-8 flex flex-col justify-center">
//               {/* Animated border effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                 <div className="absolute inset-0 rounded-2xl border-2 border-primary-text/30 animate-pulse"></div>
//               </div>
              
//               {/* Form content */}
//               <div className="relative z-10 space-y-8">
//                 <div className="text-center mb-8">
//                   <h2 className="text-4xl font-bold text-primary-text mb-4 transform transition-all duration-500 group-hover:translate-y-1">Get in Touch</h2>
//                   <div className="w-24 h-1 bg-primary-text/30 mx-auto rounded-full transform transition-all duration-700 group-hover:w-32 group-hover:bg-primary-text/50"></div>
//                 </div>
                
//                 <div className="space-y-6">
//                   <div className="transform transition-all duration-500 hover:translate-x-2">
//                     <input
//                       type="text"
//                       name="name"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="w-full px-6 py-4 bg-primary-text/5 border border-primary-text/30 text-primary-text placeholder-primary-text/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-text/30 focus:border-primary-text/50 transition-all duration-300 hover:bg-primary-text/10 hover:border-primary-text/40"
//                       placeholder="Your Name"
//                     />
//                   </div>

//                   <div className="transform transition-all duration-500 hover:translate-x-2" style={{ transitionDelay: '100ms' }}>
//                     <input
//                       type="email"
//                       name="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="w-full px-6 py-4 bg-primary-text/5 border border-primary-text/30 text-primary-text placeholder-primary-text/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-text/30 focus:border-primary-text/50 transition-all duration-300 hover:bg-primary-text/10 hover:border-primary-text/40"
//                       placeholder="Your Email"
//                     />
//                   </div>

//                   <div className="transform transition-all duration-500 hover:translate-x-2" style={{ transitionDelay: '200ms' }}>
//                     <textarea
//                       name="message"
//                       rows={5}
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="w-full px-6 py-4 bg-primary-text/5 border border-primary-text/30 text-primary-text placeholder-primary-text/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-text/30 focus:border-primary-text/50 transition-all duration-300 hover:bg-primary-text/10 hover:border-primary-text/40 resize-none"
//                       placeholder="Your Message"
//                     />
//                   </div>

//                   <div className="transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '300ms' }}>
//                     <button
//                       type="button"
//                       onClick={handleSubmit}
//                       className="w-full py-4 px-8 border border-primary-text/30 text-primary-text rounded-xl font-semibold hover:bg-primary-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-text/30 transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg active:scale-95"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;












import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Box */}
          <div className="group">
            <div className="relative h-[600px] border border-primary-text/20 rounded-2xl overflow-hidden backdrop-blur-sm bg-primary-text/5 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:border-primary-text/40">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-text/30 animate-pulse"></div>
              </div>
              
              {/* Map content */}
              <div className="relative h-full rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.4919!2d76.9555987!3d8.489801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbb3cc8055af%3A0x529436fb75bb4d06!2sAmritha%20Heritage!5e0!3m2!1sen!2sin!4v1642000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amritha Heritage Location"
                  className="transition-all duration-700 group-hover:brightness-110"
                />
              </div>

              {/* Floating label */}
              <div className="absolute top-6 left-6 bg-primary-text/10 backdrop-blur-md border border-primary-text/20 rounded-xl px-4 py-2 transform transition-all duration-500 group-hover:translate-y-1 group-hover:bg-primary-text/20">
                <span className="text-primary-text font-medium text-sm">Find Us Here</span>
              </div>
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="group">
            <div className="relative h-[600px] border border-primary-text/20 rounded-2xl backdrop-blur-sm bg-primary-text/5 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl hover:border-primary-text/40 p-8 flex flex-col justify-center">
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border-2 border-primary-text/30 animate-pulse"></div>
              </div>
              
              {/* Form content */}
              <div className="relative z-10 space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-primary-text mb-4 transform transition-all duration-500 group-hover:translate-y-1">Get in Touch</h2>
                  <div className="w-24 h-1 bg-primary-text/30 mx-auto rounded-full transform transition-all duration-700 group-hover:w-32 group-hover:bg-primary-text/50"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="transform transition-all duration-500 hover:translate-x-2">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-primary-text/5 border border-primary-text/30 text-primary-text placeholder-primary-text/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-text/30 focus:border-primary-text/50 transition-all duration-300 hover:bg-primary-text/10 hover:border-primary-text/40"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="transform transition-all duration-500 hover:translate-x-2" style={{ transitionDelay: '100ms' }}>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-primary-text/5 border border-primary-text/30 text-primary-text placeholder-primary-text/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-text/30 focus:border-primary-text/50 transition-all duration-300 hover:bg-primary-text/10 hover:border-primary-text/40"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="transform transition-all duration-500 hover:translate-x-2" style={{ transitionDelay: '200ms' }}>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-primary-text/5 border border-primary-text/30 text-primary-text placeholder-primary-text/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-text/30 focus:border-primary-text/50 transition-all duration-300 hover:bg-primary-text/10 hover:border-primary-text/40 resize-none"
                      placeholder="Your Message"
                    />
                  </div>

                  <div className="transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '300ms' }}>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full py-4 px-8 border border-primary-text/30 text-primary-text rounded-xl font-semibold hover:bg-primary-text hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-text/30 transition-all duration-300 transform hover:translate-y-1 hover:shadow-lg active:scale-95"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;