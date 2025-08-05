// import React, { useState } from 'react';

// interface Room {
//   id: number;
//   type: string;
//   title: string;
//   price: string;
//   priceUnit: string;
//   size: string;
//   sizeUnit: string;
//   guests: string;
//   description: string;
//   image: string;
// }

// const AccommodationSection: React.FC = () => {
//   const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

//   const rooms: Room[] = [
//     {
//       id: 1,
//       type: "HERITAGE ROOMS",
//       title: "Colonial Suite",
//       price: "FROM ₹8,500",
//       priceUnit: "PER NIGHT",
//       size: "35 SQM",
//       sizeUnit: "/ 376 SQFT",
//       guests: "UP TO 2 ADULTS",
//       description: "Elegant suite featuring heritage furniture and colonial architecture, offering a glimpse into Thiruvithamkoor's regal past with modern comfort.",
//       image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
//     },
//     {
//       id: 2,
//       type: "HERITAGE ROOMS",
//       title: "Essenden Room",
//       price: "FROM ₹10,000",
//       priceUnit: "PER NIGHT",
//       size: "45 SQM",
//       sizeUnit: "/ 484 SQFT",
//       guests: "UP TO 2 ADULTS AND 1 CHILD",
//       description: "Named after the original bungalow, this spacious room features individual verandas and authentic colonial design elements with garden views.",
//       image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
//     },
//     {
//       id: 3,
//       type: "HERITAGE ROOMS",
//       title: "Travancore Suite",
//       price: "FROM ₹12,500",
//       priceUnit: "PER NIGHT",
//       size: "60 SQM",
//       sizeUnit: "/ 645 SQFT",
//       guests: "UP TO 4 ADULTS",
//       description: "A tribute to the Travancore kingdom, featuring separate living areas and authentic heritage furniture with indoor courtyard views.",
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
//     },
//     {
//       id: 4,
//       type: "HERITAGE ROOMS",
//       title: "Gomez Villa",
//       price: "FROM ₹15,000",
//       priceUnit: "PER NIGHT",
//       size: "85 SQM",
//       sizeUnit: "/ 914 SQFT",
//       guests: "UP TO 6 ADULTS",
//       description: "Named after Eunice Gomez, this premium suite offers panoramic views of the heritage garden and exclusive personalized service.",
//       image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop"
//     },
//     {
//       id: 5,
//       type: "HERITAGE ROOMS",
//       title: "Amritha Heritage Suite",
//       price: "FROM ₹18,000",
//       priceUnit: "PER NIGHT",
//       size: "120 SQM",
//       sizeUnit: "/ 1291 SQFT",
//       guests: "UP TO 8 ADULTS",
//       description: "The crown jewel of our heritage collection, featuring private terrace, butler service, and the finest colonial opulence with modern luxury.",
//       image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-primary-bg py-16">
//       {/* Header */}
//       <div className="text-center pt-16 pb-12">
//         <h1 className="text-5xl lg:text-7xl font-light text-primary-text mb-8 px-6 font-serif">
//           Five Heritage Rooms
//           <br />
//           Colonial Elegance
//         </h1>
//         <p className="text-primary-text/80 text-lg lg:text-xl max-w-4xl mx-auto px-6 leading-relaxed">
//           Each uniquely styled room tells a story of Thiruvithamkoor's colonial past, 
//           featuring heritage furniture and authentic architecture that seamlessly blends with history.
//         </p>
        
//         {/* Decorative SVG Element with Extending Lines */}
//         <div className="flex items-center justify-center mt-16 mb-12">
//           {/* Left Line */}
//           <div className="flex-1 h-px bg-primary-text/30 mx-8"></div>
          
//           {/* SVG Element */}
//           <div className="flex-shrink-0">
//             <svg width="60" height="60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//               <g transform="translate(100,100)">
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(60)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(120)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(180)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(240)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(300)" />
//               </g>
//             </svg>
//           </div>
          
//           {/* Right Line */}
//           <div className="flex-1 h-px bg-primary-text/30 mx-8"></div>
//         </div>
//       </div>

//       {/* Rooms Grid */}
//       <div className="px-4 lg:px-8 pb-16">
//         <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
//           {rooms.map((room, index) => {
//             const isEven = index % 2 === 0;
//             const isHovered = hoveredRoom === room.id;
            
//             return (
//               <div
//                 key={room.id}
//                 className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] border-1 border-primary-text p-5 relative cursor-pointer transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${
//                   isEven ? '' : 'lg:grid-flow-col-dense'
//                 } ${isHovered ? 'scale-105 shadow-2xl border-primary-text/80' : 'scale-100 shadow-none'}`}
//                 onMouseEnter={() => setHoveredRoom(room.id)}
//                 onMouseLeave={() => setHoveredRoom(null)}
//               >
//                 {/* Image Section */}
//                 <div 
//                   className={`relative overflow-hidden bg-gray-800 border-2 border-primary-text ${
//                     isEven ? 'lg:order-1' : 'lg:order-2'
//                   }`}
//                 >
//                   <img
//                     src={room.image}
//                     alt={room.title}
//                     className={`w-full h-full object-cover min-h-[400px] lg:min-h-[500px] transition-transform duration-700 ease-out ${
//                       isHovered ? 'scale-110' : 'scale-100'
//                     }`}
//                   />
                  
//                   {/* Overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent transition-opacity duration-500 ${
//                     isHovered ? 'opacity-30' : 'opacity-50'
//                   }`} />

//                   {/* Floating Room Number */}
//                   {/* <div className={`absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${
//                     isHovered ? 'scale-125 bg-white/20' : 'scale-100'
//                   }`}>
//                     <span className="text-white font-light text-sm">
//                       {String(room.id).padStart(2, '0')}
//                     </span>
//                   </div> */}
//                 </div>

//                 {/* Content Section */}
//                 <div className={`bg-primary-bg p-8 lg:p-12 flex flex-col justify-center relative transition-all duration-500 ${
//                   isEven ? 'lg:order-2' : 'lg:order-1'
//                 } ${isHovered ? 'bg-primary-bg/80' : ''}`}>
                  
//                   {/* Room Type Label */}
//                   <div className="mb-6">
//                     <span className="text-xs tracking-[0.2em] text-primary-text font-light">
//                       {room.type}
//                     </span>
//                   </div>

//                   {/* Room Title */}
//                   <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-light text-primary-text mb-8 font-serif transition-all duration-300 ${
//                     isHovered ? 'scale-105 tracking-wider' : 'scale-100'
//                   }`}>
//                     {room.title}
//                   </h2>

//                   {/* Room Details */}
//                   <div className={`border border-primary-text p-6 mb-8 transition-all duration-300 ${
//                     isHovered ? 'border-primary-text/80 bg-primary-text/5' : ''
//                   }`}>
//                     <div className="grid grid-cols-1 gap-4">
//                       {/* Price */}
//                       <div className={`flex justify-between items-center transition-transform duration-300 ${
//                         isHovered ? 'translate-x-1' : ''
//                       }`}>
//                         <span className="text-sm text-primary-text font-light">PRICE</span>
//                         <div className="text-right">
//                           <span className="text-primary-text font-light">{room.price}</span>
//                           <span className="text-xs text-primary-text ml-1">{room.priceUnit}</span>
//                         </div>
//                       </div>
                      
//                       {/* Size */}
//                       <div className={`flex justify-between items-center transition-transform duration-300 ${
//                         isHovered ? 'translate-x-1' : ''
//                       }`}>
//                         <span className="text-sm text-primary-text font-light">SIZE</span>
//                         <div className="text-right">
//                           <span className="text-primary-text font-light">{room.size}</span>
//                           <span className="text-xs text-primary-text ml-1">{room.sizeUnit}</span>
//                         </div>
//                       </div>
                      
//                       {/* Guests */}
//                       <div className={`flex justify-between items-center transition-transform duration-300 ${
//                         isHovered ? 'translate-x-1' : ''
//                       }`}>
//                         <span className="text-sm text-primary-text font-light">GUESTS</span>
//                         <span className="text-primary-text font-light">{room.guests}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className={`text-primary-text/80 text-base lg:text-lg leading-relaxed mb-8 font-light transition-opacity duration-300 ${
//                     isHovered ? 'opacity-100' : 'opacity-90'
//                   }`}>
//                     {room.description}
//                   </p>

//                   {/* Details Button */}
//                   <button className={`self-start text-sm tracking-[0.15em] text-primary-text border-2 border-primary-text font-normal rounded-md px-3 py-1 transition-all duration-300 ${
//                     isHovered ? 'translate-x-2 tracking-widest border-primary-text/80 text-primary-text/80' : ''
//                   }`}>
//                     <span className="text-sm">Book Now</span>
//                   </button>

//                   {/* Decorative Elements */}
//                   {/* <div className={`absolute top-8 right-8 w-8 h-8 border-r border-t border-primary-text transition-all duration-300 ${
//                     isHovered ? 'rotate-45 border-primary-text/80' : 'rotate-0'
//                   }`} /> */}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
//       </div>

//       {/* Decorative SVG Element with Extending Lines */}
//       <div className="relative py-16 bg-primary-bg">
//         <div className="flex items-center justify-center">
//           {/* Left Line */}
//           <div className="flex-1 h-px bg-gray-300 mx-8"></div>
          
//           {/* SVG Element */}
//           <div className="flex-shrink-0">
//             <svg width="60" height="60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//               <g transform="translate(100,100)">
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(60)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(120)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(180)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(240)" />
//                 <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(300)" />
//               </g>
//             </svg>
//           </div>
          
//           {/* Right Line */}
//           <div className="flex-1 h-px bg-gray-300 mx-8"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccommodationSection;





import React, { useState, useEffect, useRef } from 'react';

interface Room {
  id: number;
  type: string;
  title: string;
  price: string;
  priceUnit: string;
  size: string;
  sizeUnit: string;
  guests: string;
  description: string;
  image: string;
}

const NirayaRoomsPage: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const rooms: Room[] = [
    {
      id: 1,
      type: "LUXURY ROOMS",
      title: "Family Haven",
      price: "FROM ₹12,500",
      priceUnit: "PER NIGHT",
      size: "65 SQM",
      sizeUnit: "/ 700 SQFT",
      guests: "UP TO 6 ADULTS",
      description: "A spacious retreat with private pool and lush tropical gardens, perfect for families seeking luxury and tranquility in nature's embrace.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      type: "GARDEN VILLAS",
      title: "Garden Villa",
      price: "FROM ₹8,500",
      priceUnit: "PER NIGHT",
      size: "45 SQM",
      sizeUnit: "/ 484 SQFT",
      guests: "UP TO 2 ADULTS",
      description: "Experience tranquility surrounded by lush greenery with modern amenities and traditional design elements creating perfect harmony.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      type: "POOL SUITES",
      title: "Pool Suite",
      price: "FROM ₹15,000",
      priceUnit: "PER NIGHT",
      size: "55 SQM",
      sizeUnit: "/ 592 SQFT",
      guests: "UP TO 3 ADULTS",
      description: "Modern luxury with direct pool access, featuring contemporary design and premium amenities for the ultimate relaxation experience.",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      setScrollY(rate);

      // Determine current section for navigation
      const sections = document.querySelectorAll('.section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.section');
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="bg-primary-bg">


      {/* Section 1: Hero Title */}
      <section className="section py-12 md:py-16 px-4 sm:px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="transform transition-all duration-1000">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-none mb-4 md:mb-6 font-serif"
              style={{color: '#6B7A43'}}
            >
              Our Rooms
              <br />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Luxury & Nature</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10 px-4">
              A range of luxurious rooms and villas thoughtfully designed to create harmony between modern comfort and natural beauty, offering you an unforgettable escape.
            </p>

            {/* Decorative SVG Element */}
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-primary-text mx-4 md:mx-8 max-w-16 md:max-w-32"></div>
              <div className="flex-shrink-0">
                <svg width="40" height="40" className="md:w-[60px] md:h-[60px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(100,100)">
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(60)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(120)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(180)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(240)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(300)" />
                  </g>
                </svg>
              </div>
              <div className="flex-1 h-px bg-primary-text mx-4 md:mx-8 max-w-16 md:max-w-32"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Heritage-Style Room Listings */}
      <section className="section py-16 md:py-20">
        <div className="px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto space-y-16 md:space-y-20">
          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredRoom === room.id;
            
            return (
              <div
                key={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 h-[500px] md:h-[600px] lg:h-[650px] border border-gray-300 relative cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl rounded-lg overflow-hidden ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                } ${isHovered ? 'scale-[1.01] md:scale-[1.02] shadow-2xl border-gray-400' : 'scale-100 shadow-lg'}`}
                style={{
                  transform: `${isHovered ? 'scale(1.01)' : 'scale(1)'}`,
                }}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                {/* Image Section */}
                <div 
                  className={`relative overflow-hidden bg-primary-text h-full ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={room.image}
                    alt={room.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-black/30 to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-20' : 'opacity-40'
                  }`} />

                  {/* Room ID Badge */}
                  <div className={`absolute top-4 md:top-6 left-4 md:left-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'scale-125 bg-white/20' : 'scale-100'
                  }`}>
                    <span className="text-white font-light text-xs md:text-sm">
                      {String(room.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`bg-primary-bg p-6 md:p-8 lg:p-12 flex flex-col justify-center relative transition-all duration-500 h-full ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                } ${isHovered ? 'bg-stone-100/80' : ''}`}>
                  
                  {/* Room Type Label */}
                  <div className="mb-4 md:mb-6">
                    <span className="text-xs tracking-[0.2em] font-light" style={{color: '#6B7A43'}}>
                      {room.type}
                    </span>
                  </div>

                  {/* Room Title */}
                  <h2 className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-primary-text mb-6 md:mb-8 font-serif transition-all duration-300 leading-tight ${
                    isHovered ? 'scale-105 tracking-wider' : 'scale-100'
                  }`}>
                    {room.title}
                  </h2>

                  {/* Room Details */}
                  <div className={`border p-4 md:p-6 mb-6 md:mb-8 transition-all duration-300 ${
                    isHovered ? 'bg-white/50 border-gray-400' : 'border-gray-300 bg-white/30'
                  }`} style={{borderColor: isHovered ? '#6B7A43' : '#D1D5DB'}}>
                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                      {/* Price */}
                      <div className={`flex justify-between items-center transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`}>
                        <span className="text-xs md:text-sm text-gray-700 font-light">PRICE</span>
                        <div className="text-right">
                          <span className="text-sm md:text-base text-gray-800 font-light">{room.price}</span>
                          <span className="text-xs text-gray-600 ml-1">{room.priceUnit}</span>
                        </div>
                      </div>
                      
                      {/* Size */}
                      <div className={`flex justify-between items-center transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`}>
                        <span className="text-xs md:text-sm text-gray-700 font-light">SIZE</span>
                        <div className="text-right">
                          <span className="text-sm md:text-base text-gray-800 font-light">{room.size}</span>
                          <span className="text-xs text-gray-600 ml-1">{room.sizeUnit}</span>
                        </div>
                      </div>
                      
                      {/* Guests */}
                      <div className={`flex justify-between items-center transition-transform duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`}>
                        <span className="text-xs md:text-sm text-gray-700 font-light">GUESTS</span>
                        <span className="text-sm md:text-base text-gray-800 font-light">{room.guests}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 font-light transition-opacity duration-300 font-cormorant ${
                    isHovered ? 'opacity-100' : 'opacity-90'
                  }`}>
                    {room.description}
                  </p>

                  {/* Book Now Button */}
                  <button className={`self-start text-xs md:text-sm tracking-[0.15em] text-white border-2 font-normal rounded-md px-4 md:px-6 py-2.5 md:py-3 transition-all duration-300 ${
                    isHovered ? 'translate-x-2 tracking-widest scale-105' : ''
                  }`} style={{
                    backgroundColor: isHovered ? '#6B7A43' : '#8B7A43',
                    borderColor: isHovered ? '#6B7A43' : '#8B7A43'
                  }}>
                    <span>Book Now</span>
                  </button>

                  {/* Decorative Corner Element */}
                  {/* <div className={`absolute top-6 md:top-8 right-6 md:right-8 w-6 h-6 md:w-8 md:h-8 border-r border-t transition-all duration-300 ${
                    isHovered ? 'rotate-45 scale-125' : 'rotate-0'
                  }`} style={{borderColor: '#6B7A43'}} /> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 3: Conclusion */}
      <section className="section bg-primary-bg py-16 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="w-full max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-primary-text mb-6 md:mb-8 leading-tight font-serif">
              From cozy rooms to spacious villas,<br />
              Niraya offers the{' '}
              <em className="italic font-normal" style={{color: '#8B7355'}}>
                perfect blend
              </em>{' '}
              of<br className="hidden sm:block" />
              privacy, luxury, and nature
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 md:mb-12 leading-relaxed px-4">
              Each space has been thoughtfully designed to create a harmonious balance 
              between modern luxury and natural beauty, offering you an unforgettable escape.
            </p>

            {/* CTA Button */}
            <button 
              className="text-white px-6 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-medium transition-all hover:scale-105 hover:shadow-lg inline-flex items-center space-x-2 md:space-x-3 mb-12 md:mb-16"
              style={{backgroundColor: '#6B7A43'}}
            >
              <span>•</span>
              <span>Browse all rooms</span>
              <span>•</span>
            </button>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 font-serif" style={{color: '#6B7A43'}}>Luxury</h3>
                <p className="text-sm md:text-base text-gray-600">Premium amenities and attention to detail in every space</p>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 font-serif" style={{color: '#6B7A43'}}>Privacy</h3>
                <p className="text-sm md:text-base text-gray-600">Secluded retreats designed for intimate experiences</p>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-light mb-3 md:mb-4 font-serif" style={{color: '#6B7A43'}}>Nature</h3>
                <p className="text-sm md:text-base text-gray-600">Surrounded by lush tropical landscapes and gardens</p>
              </div>
            </div>

            {/* Decorative SVG Element */}
            <div className="flex items-center justify-center mt-12 md:mt-16">
              <div className="flex-1 h-px bg-gray-300 mx-4 md:mx-8 max-w-16 md:max-w-32"></div>
              <div className="flex-shrink-0">
                <svg width="40" height="40" className="md:w-[60px] md:h-[60px]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(100,100)">
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(60)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(120)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(180)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(240)" />
                    <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#6B7A43" transform="rotate(300)" />
                  </g>
                </svg>
              </div>
              <div className="flex-1 h-px bg-gray-300 mx-4 md:mx-8 max-w-16 md:max-w-32"></div>
            </div>
          </div>
        </div>
      </section>






    </div>
  );
};

export default NirayaRoomsPage;