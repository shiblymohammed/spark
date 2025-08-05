import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2064"
          alt="Heritage Landscape"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-heritage-dark/40"></div>
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-heritage-coconut mb-6 leading-tight">
            Where Heritage
            <br />
            <span className="text-heritage-stone">Meets Luxury</span>
          </h2>
          <p className="text-xl md:text-2xl text-heritage-coconut/90 font-light leading-relaxed">
            Immerse yourself in the timeless beauty of Kerala's cultural landscape
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-10 bg-heritage-coconut/10 backdrop-blur-sm p-6 rounded-lg border border-heritage-coconut/20"
      >
        <h3 className="text-heritage-coconut font-bold text-lg mb-2">Traditional Architecture</h3>
        <p className="text-heritage-coconut/80 text-sm">Authentic Kerala Design</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-10 right-10 bg-heritage-coconut/10 backdrop-blur-sm p-6 rounded-lg border border-heritage-coconut/20"
      >
        <h3 className="text-heritage-coconut font-bold text-lg mb-2">Serene Environment</h3>
        <p className="text-heritage-coconut/80 text-sm">Natural Beauty Preserved</p>
      </motion.div>
    </section>
  );
};

export default ParallaxHero;