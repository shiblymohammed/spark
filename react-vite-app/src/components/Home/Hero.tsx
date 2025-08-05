import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div 
      data-section="hero" 
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/hero2.mp4"
          type="video/mp4"
        />
        {/* Fallback background image if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600"></div>
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-12">
        
        {/* Small name on top */}
        <div className="text-white text-sm md:text-base tracking-[0.3em] font-light mb-8 md:mb-12 opacity-90 font-playfair">
          AMRITHA HERITAGE
        </div>

        {/* Main Heading */}
        <div className="text-center text-white mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight font-playfair">
            <div className="mb-2 md:mb-4">Where History</div>
            <div className="italic font-light">
              <span className="italic">meets</span>{' '}
              <span className="font-light">Luxury</span>
            </div>
          </h1>
        </div>

        {/* Bottom Quote */}
        <div className="absolute bottom-24 md:bottom-32 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-white text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed px-6 font-cormorant">
            Experience the timeless elegance of colonial Thiruvithamkoor<br className="hidden md:block" />
            in the heart of Thiruvananthapuram
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="w-px h-8 md:h-12 bg-white/60 mb-2"></div>
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-white/60" />
          </div>
        </div>
      </div>

      {/* Optional: Custom scroll indicator alternative */}
      {/* 
        Removed <style jsx> block because it causes a TypeScript error.
        If you want to use custom keyframes, add them to your Tailwind config or a global CSS file.
        The scroll indicator currently uses Tailwind's animate-bounce utility.
      */}
    </div>
  );
};

export default Hero;