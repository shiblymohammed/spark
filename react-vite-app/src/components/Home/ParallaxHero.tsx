// import React, { useEffect, useState } from 'react';

// // Import the image directly - this should work with Vite
// import heroImage from '/heroparallax.jpg';

// const ParallaxCulinarySection: React.FC = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageError, setImageError] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);
    
//     // Preload the imported image
//     const img = new Image();
//     img.onload = () => {
//       console.log('Imported image loaded successfully');
//       setImageLoaded(true);
//       setImageError(false);
//     };
//     img.onerror = (e) => {
//       console.error('Failed to load imported image:', e);
//       setImageError(true);
//       setImageLoaded(false);
//     };
    
//     console.log('Attempting to load image from:', heroImage);
//     img.src = heroImage;
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden">
//       <style>{`
//         .hero-content {
//           animation: fadeInUp 1s ease-out 0.3s both;
//         }
        
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .parallax-image {
//           transition: transform 0.1s linear;
//         }
        
//         .hero-section {
//           padding-top: 6rem;
//           padding-bottom: 6rem;
//         }
        
//         @media (max-width: 768px) {
//           .hero-section {
//             padding-top: 4rem;
//             padding-bottom: 4rem;
//           }
//         }
//       `}</style>

//       {/* Top Gap */}
//       <div className="absolute top-0 left-0 right-0 h-20 bg-transparent z-10"></div>

//       {/* Parallax Image Section */}
//       <div className="relative h-screen overflow-hidden">
//         {/* Use img tag with direct path */}
//         <img
//           src="/heroparallax.jpg"
//           alt="Culinary Excellence"
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{
//             transform: `translateY(${scrollY * 0.5}px)`,
//           }}
//           onLoad={() => {
//             console.log('Image loaded successfully');
//             setImageLoaded(true);
//             setImageError(false);
//           }}
//           onError={(e) => {
//             console.error('Image failed to load:', e);
//             setImageError(true);
//             setImageLoaded(false);
//             // Fallback to a working image
//             e.currentTarget.src = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
//           }}
//         />
        
//         {/* Loading placeholder */}
//         {!imageLoaded && !imageError && (
//           <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
//             <div className="text-gray-600 text-lg">Loading image...</div>
//           </div>
//         )}
        
//         {/* Black Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center z-10">
//           <div className="text-center px-4 sm:px-6 lg:px-8">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6">
//               Culinary Excellence
//             </h2>
//             <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
//               Experience the finest flavors crafted with passion and precision
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gap */}
//       <div className="absolute bottom-0 left-0 right-0 h-20 bg-transparent z-10"></div>

//       {/* Grain Texture Overlay */}
//       <div 
//         className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay z-10"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//         }}
//       />
//     </section>
//   );
// };

// export default ParallaxCulinarySection;