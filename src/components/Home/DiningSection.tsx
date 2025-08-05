import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface GalleryImage {
  id: number;
  src: string;
  label: string;
  description: string;
}

const DiningSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const dishesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Sample data
  const signatureDishes: Dish[] = [
    {
      id: 1,
      name: "Kerala Sadhya",
      description: "Traditional feast served on banana leaf with 28 authentic dishes from the Travancore kingdom",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Colonial Fish Curry",
      description: "Fresh Malabar catch cooked in coconut milk with traditional spices, a Portuguese influence",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Thalassery Biryani",
      description: "Fragrant basmati rice layered with tender meat and aromatic spices from the Malabar coast",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "European Fusion",
      description: "Colonial-inspired dishes blending Portuguese and British influences with Kerala flavors",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop"
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      label: "Heritage Dining Hall",
      description: "The spacious central hall serves as our dining area, enhanced with indoor courtyards that add to its colonial aesthetic allure and historical charm."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      label: "Kohinoor Kitchen",
      description: "Our state-of-the-art culinary workshop where master chefs blend traditional Kerala techniques with European influences to create authentic heritage masterpieces."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      label: "Garden Dining",
      description: "Experience 'dining on the lawn', the first ever such experience in Thiruvananthapuram, perfect for banquets and special celebrations."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      label: "Colonial Veranda",
      description: "Private dining spaces with individual verandas offering garden views, where every meal becomes a journey through colonial elegance."
    }
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollDishes = (direction: 'left' | 'right') => {
    if (dishesRef.current) {
      const scrollAmount = 320;
      const currentScroll = dishesRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      dishesRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-primary-bg">
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="relative h-[60vh] overflow-hidden">
        {/* Background image with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/diningparallax.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 75ms linear'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Quote with fade-up animation */}
        <div 
          ref={quoteRef}
          className={`absolute inset-0 flex items-center justify-center px-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-white text-center max-w-4xl font-playfair">
            <span className="block text-xl md:text-2xl lg:text-3xl font-light leading-tight">
              "Welcome to Kohinoor Restaurant —
            </span>
            <span className="block text-lg md:text-xl lg:text-2xl font-light mt-2 text-gray-200 font-cormorant">
              where European and Indian cuisines blend in colonial elegance"
            </span>
          </h1>
        </div>
      </div>

      {/* Signature Dishes Carousel */}
      <div className="py-16">
        <div className="max-w-full mx-auto px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-6 text-primary-text font-playfair">
            Heritage Dining
          </h2>
          <p className="text-center text-primary-text/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-cormorant">
            Experience the legendary Kohinoor Restaurant, a star attraction of the 1970s Malayalam film world, 
            now revived with a menu that perfectly blends European and Indian cuisines in an atmosphere of colonial grandeur.
          </p>
          
          {/* Decorative SVG Element with Extending Lines */}
          <div className="flex items-center justify-center mb-16">
            {/* Left Line */}
            <div className="flex-1 h-px bg-gray-300 mx-8"></div>
            
            {/* SVG Element */}
            <div className="flex-shrink-0">
              <svg width="60" height="60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(100,100)">
                  <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" />
                  <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(60)" />
                  <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(120)" />
                  <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(180)" />
                  <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(240)" />
                  <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(300)" />
                </g>
              </svg>
            </div>
            
            {/* Right Line */}
            <div className="flex-1 h-px bg-gray-300 mx-8"></div>
          </div>
          
          <div className="relative">
            {/* Dishes Container */}
            <div
              ref={dishesRef}
              className="flex overflow-x-auto scrollbar-hide gap-12 px-8 scroll-smooth cursor-grab active:cursor-grabbing py-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
              onMouseDown={(e) => {
                const startX = e.pageX - dishesRef.current!.offsetLeft;
                const scrollLeft = dishesRef.current!.scrollLeft;
                let isDown = true;

                const handleMouseMove = (e: MouseEvent) => {
                  if (!isDown) return;
                  e.preventDefault();
                  const x = e.pageX - dishesRef.current!.offsetLeft;
                  const walk = (x - startX) * 2;
                  dishesRef.current!.scrollLeft = scrollLeft - walk;
                };

                const handleMouseUp = () => {
                  isDown = false;
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {signatureDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="flex-none w-[400px] md:w-[450px] lg:w-[500px] h-[600px] bg-white border border-gray-300 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 snap-center select-none relative group rounded-3xl"
                >
                  {/* Full-screen image */}
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable={false}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-text rounded-full text-sm font-medium">
                        Heritage Dish
                      </span>
                    </div>
                    
                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-medium text-primary-text">4.8</span>
                    </div>
                    
                    {/* Distance/Time */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <svg className="w-4 h-4 text-primary-text/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-primary-text">25 min</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-white/80 transition-colors duration-300 leading-tight drop-shadow-lg">
                      {dish.name}
                    </h3>
                    
                    <p className="text-white text-sm mb-6 leading-relaxed drop-shadow-md">
                      {dish.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-primary-text text-white font-semibold rounded-xl hover:bg-primary-text/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-text/25 transform hover:-translate-y-0.5">
                      Order Now
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-text/20 transition-colors duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Explore Menu CTA */}
      <div className="py-16 bg-primary-bg relative overflow-hidden">
        {/* Decorative SVG Elements */}
        <div className="absolute top-8 left-8 opacity-10">
          <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 C60,20 60,30 50,40 C40,30 40,20 50,10" fill="#514f13" />
            <path d="M50,10 C60,20 60,30 50,40 C40,30 40,20 50,10" fill="#514f13" transform="rotate(90 50 50)" />
            <path d="M50,10 C60,20 60,30 50,40 C40,30 40,20 50,10" fill="#514f13" transform="rotate(180 50 50)" />
            <path d="M50,10 C60,20 60,30 50,40 C40,30 40,20 50,10" fill="#514f13" transform="rotate(270 50 50)" />
          </svg>
        </div>
        
        <div className="absolute top-12 right-12 opacity-10">
          <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="8" fill="#514f13" />
            <circle cx="50" cy="20" r="4" fill="#514f13" />
            <circle cx="80" cy="50" r="4" fill="#514f13" />
            <circle cx="50" cy="80" r="4" fill="#514f13" />
            <circle cx="20" cy="50" r="4" fill="#514f13" />
          </svg>
        </div>
        
        <div className="absolute bottom-8 left-16 opacity-10">
          <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,50 L80,50 M50,20 L50,80" stroke="#514f13" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="15" stroke="#514f13" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        <div className="absolute bottom-12 right-8 opacity-10">
          <svg width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="#514f13" strokeWidth="2" />
            <path d="M40,40 L60,40 L60,60 L40,60 Z" fill="none" stroke="#514f13" strokeWidth="2" />
            <circle cx="50" cy="50" r="3" fill="#514f13" />
          </svg>
        </div>

        <div className="text-center max-w-4xl mx-auto px-8 relative z-10">
          {/* Hook Content */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary-text mb-6 font-playfair">
            Ready to Experience Colonial Cuisine?
          </h3>
          <p className="text-primary-text/80 text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 font-cormorant">
            From traditional Kerala Sadhya to European fusion dishes, our Kohinoor Restaurant menu 
            offers a culinary journey through time. Each dish tells a story of heritage and tradition.
          </p>
          
          {/* Decorative Line Above Button */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 h-px bg-primary-text/20 mx-4"></div>
            <svg width="24" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mx-4">
              <path d="M50,20 C60,30 60,40 50,50 C40,40 40,30 50,20" fill="#514f13" opacity="0.6" />
              <path d="M50,20 C60,30 60,40 50,50 C40,40 40,30 50,20" fill="#514f13" opacity="0.6" transform="rotate(180 50 50)" />
            </svg>
            <div className="flex-1 h-px bg-primary-text/20 mx-4"></div>
          </div>
          
          {/* Bigger Explore Menu Button */}
          <button
            className="px-12 py-6 text-xl md:text-2xl font-medium border-3 border-primary-text text-primary-text bg-transparent rounded transition-all duration-300 hover:bg-primary-text hover:text-primary-bg transform hover:scale-105 hover:shadow-xl"
            style={{
              fontFamily: 'Work Sans, sans-serif',
              borderWidth: '3px',
              letterSpacing: '0.05em'
            }}
          >
            EXPLORE OUR MENU
          </button>
          
          {/* Decorative Line Below Button */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex-1 h-px bg-primary-text/20 mx-4"></div>
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="mx-4">
              <circle cx="50" cy="50" r="8" fill="#514f13" opacity="0.4" />
              <circle cx="50" cy="50" r="3" fill="#514f13" opacity="0.8" />
            </svg>
            <div className="flex-1 h-px bg-primary-text/20 mx-4"></div>
          </div>
        </div>
      </div>

      {/* Dining Hall & Kitchen Gallery - 80% screen height with gaps */}
      <div className="py-16 bg-primary-bg relative">
        <div className="mx-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center text-primary-text mb-6 font-playfair">
            Our Spaces
          </h2>
          <p className="text-center text-primary-text/80 mb-12 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl leading-relaxed font-light font-cormorant">
            Step into the grandeur of colonial elegance where every corner tells a story. From our heritage dining hall 
            with its majestic architecture to our state-of-the-art kitchen where culinary magic happens, each space at 
            Kohinoor Restaurant has been thoughtfully designed to transport you to an era of timeless sophistication.
          </p>
          
          <div className="relative h-[75vh] border-2 border-primary-text overflow-hidden">
            <div
              ref={galleryRef}
              className="flex h-full overflow-x-auto gap-0 scroll-smooth cursor-grab active:cursor-grabbing"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
              onMouseDown={(e) => {
                const startX = e.pageX - galleryRef.current!.offsetLeft;
                const scrollLeft = galleryRef.current!.scrollLeft;
                let isDown = true;

                const handleMouseMove = (e: MouseEvent) => {
                  if (!isDown) return;
                  e.preventDefault();
                  const x = e.pageX - galleryRef.current!.offsetLeft;
                  const walk = (x - startX) * 2;
                  galleryRef.current!.scrollLeft = scrollLeft - walk;
                };

                const handleMouseUp = () => {
                  isDown = false;
                  document.removeEventListener('mousemove', handleMouseMove);
                  document.removeEventListener('mouseup', handleMouseUp);
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex-none w-full h-full relative snap-center select-none ${
                    index > 0 ? 'border-l-4 border-primary-bg' : ''
                  }`}
                >
                  <div className="h-full overflow-hidden relative">
                    <img
                      src={image.src}
                      alt={image.label}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      draggable={false}
                    />
                    {/* Darker overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                  </div>
                  
                  {/* Text content positioned inside the image */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start p-12 max-w-2xl">
                    <h3 className="text-primary-bg text-3xl md:text-5xl font-light mb-4 drop-shadow-xl font-playfair">
                      {image.label}
                    </h3>
                    <div className="w-16 h-1 bg-gray-800 mb-6 drop-shadow-lg"></div>
                    <p className="text-primary-bg text-lg md:text-xl leading-relaxed drop-shadow-lg font-light font-cormorant">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Slide Indicator */}
                  {/* <div className="absolute bottom-8 right-8 text-gray-800 text-sm drop-shadow-lg font-bold bg-white px-3 py-1">
                    {String(index + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                  </div> */}
                </div>
              ))}
            </div>
            
            {/* Navigation Dots */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (galleryRef.current) {
                      galleryRef.current.scrollTo({
                        left: index * galleryRef.current.clientWidth,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="w-3 h-3 bg-gray-800 hover:bg-gray-600 transition-colors duration-300 border border-white"
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbars */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Decorative SVG Element with Extending Lines */}
      <div className="relative py-16 bg-primary-bg">
        <div className="flex items-center justify-center">
          {/* Left Line */}
          <div className="flex-1 h-px bg-gray-300 mx-8"></div>
          
          {/* SVG Element */}
          <div className="flex-shrink-0">
            <svg width="60" height="60" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(100,100)">
                <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" />
                <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(60)" />
                <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(120)" />
                <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(180)" />
                <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(240)" />
                <path d="M0,-60 C15,-45 15,-15 0,0 C-15,-15 -15,-45 0,-60" fill="#514f13" transform="rotate(300)" />
              </g>
            </svg>
          </div>
          
          {/* Right Line */}
          <div className="flex-1 h-px bg-gray-300 mx-8"></div>
        </div>
      </div>
    </div>
  );
};

export default DiningSection;