
import React, { useState, useEffect, useRef } from "react";

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

const AccommodationSection: React.FC = () => {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const [visibleRooms, setVisibleRooms] = useState<Set<number>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const rooms: Room[] = [
    {
      id: 1,
      type: "HERITAGE ROOMS",
      title: "Colonial Suite",
      price: "FROM ₹8,500",
      priceUnit: "PER NIGHT",
      size: "35 SQM",
      sizeUnit: "/ 376 SQFT",
      guests: "UP TO 2 ADULTS",
      description:
        "Elegant suite featuring heritage furniture and colonial architecture, offering a glimpse into Thiruvithamkoor's regal past with modern comfort.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      type: "HERITAGE ROOMS",
      title: "Essenden Room",
      price: "FROM ₹10,000",
      priceUnit: "PER NIGHT",
      size: "45 SQM",
      sizeUnit: "/ 484 SQFT",
      guests: "UP TO 2 ADULTS AND 1 CHILD",
      description:
        "Named after the original bungalow, this spacious room features individual verandas and authentic colonial design elements with garden views.",
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      type: "HERITAGE ROOMS",
      title: "Travancore Suite",
      price: "FROM ₹12,500",
      priceUnit: "PER NIGHT",
      size: "60 SQM",
      sizeUnit: "/ 645 SQFT",
      guests: "UP TO 4 ADULTS",
      description:
        "A tribute to the Travancore kingdom, featuring separate living areas and authentic heritage furniture with indoor courtyard views.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      type: "HERITAGE ROOMS",
      title: "Gomez Villa",
      price: "FROM ₹15,000",
      priceUnit: "PER NIGHT",
      size: "85 SQM",
      sizeUnit: "/ 914 SQFT",
      guests: "UP TO 6 ADULTS",
      description:
        "Named after Eunice Gomez, this premium suite offers panoramic views of the heritage garden and exclusive personalized service.",
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      type: "HERITAGE ROOMS",
      title: "Amritha Heritage Suite",
      price: "FROM ₹18,000",
      priceUnit: "PER NIGHT",
      size: "120 SQM",
      sizeUnit: "/ 1291 SQFT",
      guests: "UP TO 8 ADULTS",
      description:
        "The crown jewel of our heritage collection, featuring private terrace, butler service, and the finest colonial opulence with modern luxury.",
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&h=600&fit=crop",
    },
  ];

  useEffect(() => {
    // Header animation observer
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    // Rooms animation observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const roomId = parseInt(entry.target.getAttribute('data-room-id') || '0');
          if (entry.isIntersecting) {
            setVisibleRooms(prev => new Set(prev).add(roomId));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all room elements
    const roomElements = document.querySelectorAll('[data-room-id]');
    roomElements.forEach(el => observerRef.current?.observe(el));

    return () => {
      headerObserver.disconnect();
      observerRef.current?.disconnect();
    };
  }, []);

  const FloralPattern = () => (
    <svg
      width="60"
      height="60"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16"
    >
      <g transform="translate(100,100)">
        {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
          <path
            key={index}
            d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60"
            fill="#514f13"
            transform={`rotate(${rotation})`}
            className="animate-pulse"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </g>
    </svg>
  );

  return (
    <div className="min-h-screen bg-heritage-bg-accent overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-text/10 to-transparent animate-pulse" />
      </div>

      {/* Header Section */}
      <div 
        ref={headerRef}
        className="relative pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8"
      >
        <div className={`text-center transform transition-all duration-1000 ease-out ${
          headerVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm tracking-[0.3em] text-primary-text-title font-light uppercase">
              Heritage Collection
            </span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-text to-transparent mt-2" />
          </div>
          
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-text-primary-title mb-6 sm:mb-8 leading-tight transition-all duration-1000 delay-300 font-playfair ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Five Heritage Rooms
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-primary-text-title italic">
              Colonial Elegance
            </span>
          </h1>
          
          <p className={`text-text-secondary-title/80 text-base sm:text-lg md:text-xl max-w-4xl mx-auto px-4 leading-relaxed transition-all duration-1000 delay-500 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Each uniquely styled room tells a story of Thiruvithamkoor's colonial
            past, featuring heritage furniture and authentic architecture that
            seamlessly blends with history.
          </p>

          {/* Animated Decorative Element */}
          <div className={`flex items-center justify-center mt-8 sm:mt-12 md:mt-16 transition-all duration-1000 delay-700 ${
            headerVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary-text/30 max-w-16 sm:max-w-24 md:max-w-32" />
            <div className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8">
              <FloralPattern />
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary-text/30 max-w-16 sm:max-w-24 md:max-w-32" />
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredRoom === room.id;
            const isVisible = visibleRooms.has(room.id);

            return (
              <div
                key={room.id}
                data-room-id={room.id}
                className={`group relative transform transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredRoom(room.id)}
                onMouseLeave={() => setHoveredRoom(null)}
              >
                {/* Mobile Layout (Stack) */}
                <div className="block lg:hidden">
                  <div className={`bg-primary-bg rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] border-2 border-text-primary-title ${
                    isHovered ? 'shadow-2xl scale-[1.02]' : ''
                  }`}>
                    {/* Image */}
                    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.title}
                        className={`w-full h-full object-cover transition-transform duration-1000 ${
                          isHovered ? 'scale-110' : 'scale-105'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* Floating Room Badge */}
                      <div className={`absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'scale-110 bg-white/20 rotate-12' : ''
                      }`}>
                        <span className="text-white font-light text-sm">
                          {String(room.id).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Room Type Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs tracking-[0.2em] text-white/80 font-light">
                          {room.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-light text-text-primary-title mb-4 sm:mb-6 transition-all duration-300 font-serif ${
                        isHovered ? 'text-primary-text-title translate-x-2' : ''
                      }`}>
                        {room.title}
                      </h2>

                      {/* Mobile Details Grid */}
                      <div className={`grid grid-cols-2 gap-4 p-4 sm:p-6 border border-text-primary-title rounded-xl mb-6 transition-all duration-300 ${
                        isHovered ? 'border-primary-text-title bg-primary-text/5' : 'bg-primary-bg'
                      }`}>
                        <div className="text-center">
                          <p className="text-xs text-primary-text uppercase tracking-wide">Price</p>
                          <p className="text-sm sm:text-base font-medium text-primary-text">{room.price}</p>
                          <p className="text-xs text-primary-text">{room.priceUnit}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-primary-text uppercase tracking-wide">Size</p>
                          <p className="text-sm sm:text-base font-medium text-primary-text-title">{room.size}</p>
                          <p className="text-xs text-primary-text-title">{room.sizeUnit}</p>
                        </div>
                        <div className="text-center col-span-2">
                          <p className="text-xs text-primary-text uppercase tracking-wide">Guests</p>
                          <p className="text-sm sm:text-base font-medium text-primary-text-title">{room.guests}</p>
                        </div>
                      </div>

                      <p className="text-primary-text-title/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                        {room.description}
                      </p>

                      <button className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-button-accent-bg hover:bg-button-accent-bg/90 text-heritage-bg-accent rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        isHovered ? 'scale-105 shadow-lg' : ''
                      }`}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (Side by Side) */}
                <div className="hidden lg:block">
                  <div className={`grid grid-cols-2 gap-0 min-h-[600px] xl:min-h-[700px] bg-primary-bg rounded-3xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-2xl hover:scale-[1.01] border-2 border-text-primary-title ${
                    isEven ? '' : 'grid-flow-col-dense'
                  } ${isHovered ? 'shadow-2xl scale-[1.01]' : ''}`}>
                    
                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${
                      isEven ? 'order-1' : 'order-2'
                    }`}>
                      <img
                        src={room.image}
                        alt={room.title}
                        className={`w-full h-full object-cover transition-transform duration-1000 ${
                          isHovered ? 'scale-110' : 'scale-105'
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r from-black/30 to-transparent transition-opacity duration-500 ${
                        isHovered ? 'opacity-20' : 'opacity-40'
                      }`} />
                      
                      {/* Room Badge */}
                      <div className={`absolute top-6 left-6 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isHovered ? 'scale-125 bg-white/20 rotate-12' : ''
                      }`}>
                        <span className="text-white font-light">
                          {String(room.id).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-12 xl:p-16 flex flex-col justify-center transition-all duration-500 ${
                      isEven ? 'order-2' : 'order-1'
                    } ${isHovered ? 'bg-primary-bg/80' : ''}`}>
                      
                      <div className="mb-6">
                        <span className="text-xs tracking-[0.3em] text-primary-text-title font-light uppercase">
                          {room.type}
                        </span>
                      </div>

                      <h2 className={`text-4xl xl:text-5xl 2xl:text-6xl font-light text-text-primary-title mb-8 xl:mb-10 transition-all duration-300 leading-tight font-serif ${
                        isHovered ? 'text-primary-text-title scale-105' : ''
                      }`}>
                        {room.title}
                      </h2>

                      {/* Desktop Details */}
                      <div className={`border border-text-primary-title p-8 mb-8 xl:mb-10 transition-all duration-300 ${
                        isHovered ? 'border-primary-text-title bg-primary-text/5' : 'bg-primary-bg'
                      }`}>
                        <div className="space-y-4">
                          {[
                            { label: 'PRICE', value: room.price, unit: room.priceUnit },
                            { label: 'SIZE', value: room.size, unit: room.sizeUnit },
                            { label: 'GUESTS', value: room.guests, unit: '' }
                          ].map((detail, idx) => (
                            <div key={idx} className={`flex justify-between items-center transition-transform duration-300 ${
                              isHovered ? 'translate-x-2' : ''
                            }`} style={{ transitionDelay: `${idx * 50}ms` }}>
                              <span className="text-sm text-primary-text-title font-light">{detail.label}</span>
                              <div className="text-right">
                                <span className="text-primary-text font-medium">{detail.value}</span>
                                {detail.unit && <span className="text-xs text-primary-text ml-1">{detail.unit}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className={`text-stone-600 text-lg xl:text-xl leading-relaxed mb-8 xl:mb-10 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-90'
                      }`}>
                        {room.description}
                      </p>

                      <button className={`self-start px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white rounded-full text-sm xl:text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        isHovered ? 'translate-x-4 scale-105 shadow-lg' : ''
                      }`}>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Decorative Section */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-stone-100 to-stone-50">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-amber-600/30 max-w-16 sm:max-w-24 md:max-w-32" />
          <div className="flex-shrink-0 mx-6 sm:mx-8">
            <FloralPattern />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-amber-600/30 max-w-16 sm:max-w-24 md:max-w-32" />
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Experience the perfect blend of colonial heritage and modern luxury in our thoughtfully curated accommodation spaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSection;
