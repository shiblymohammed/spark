import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf212b2e31c9e8f1e3b8b6a6fe72f&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-heritage-dark/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-heritage-coconut mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Experience Heritage
              <br />
              <span className="text-heritage-stone">Luxury</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-heritage-coconut/90 mb-8 font-light leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Discover the perfect blend of traditional heritage and modern comfort
              <br />
              at Amritha Heritage Hotel
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <Button 
                size="lg"
                className="bg-heritage-coconut text-heritage-dark hover:bg-heritage-creme transition-all duration-300 px-8 py-4 text-lg font-medium border border-heritage-border-light"
              >
                Book Your Stay
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-heritage-coconut/80"
            >
              <span className="text-sm font-light mb-2">Scroll Down</span>
              <div className="w-0.5 h-8 bg-heritage-coconut/60"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;