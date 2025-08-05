import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section id="about" className="py-20 bg-heritage-creme">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8" data-aos="fade-right">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-heritage-dark leading-tight">
                A Legacy of
                <br />
                <span className="text-heritage-medium">Timeless Elegance</span>
              </h2>
              <div className="w-20 h-1 bg-heritage-border"></div>
            </motion.div>

            <motion.p 
              className="text-lg text-heritage-medium leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nestled amidst lush landscapes and steeped in rich cultural heritage, 
              Amritha Heritage Hotel offers an unparalleled experience that seamlessly 
              blends traditional architecture with contemporary luxury.
            </motion.p>

            <motion.p 
              className="text-heritage-light leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our commitment to preserving the authentic charm of Kerala's heritage 
              while providing world-class amenities makes us the perfect destination 
              for discerning travelers seeking an extraordinary stay.
            </motion.p>

            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-heritage-dark">25+</h3>
                <p className="text-heritage-light text-sm mt-1">Years of Service</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-heritage-dark">500+</h3>
                <p className="text-heritage-light text-sm mt-1">Happy Guests</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-heritage-dark">50+</h3>
                <p className="text-heritage-light text-sm mt-1">Luxury Rooms</p>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="relative" data-aos="fade-left">
            <motion.div 
              className="relative overflow-hidden rounded-lg border border-heritage-border-light"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080"
                alt="Heritage Architecture"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-heritage-dark/10"></div>
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -right-6 bg-heritage-coconut p-6 rounded-lg border border-heritage-border-light"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-heritage-dark font-bold text-lg">Heritage Design</h4>
              <p className="text-heritage-light text-sm mt-1">Authentic Kerala Architecture</p>
            </motion.div>
          </div>
        </div>

        {/* Environment Features */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Serene Environment",
              description: "Surrounded by lush greenery and tranquil backwaters",
              icon: "🌿"
            },
            {
              title: "Cultural Heritage",
              description: "Experience authentic Kerala traditions and customs",
              icon: "🏛️"
            },
            {
              title: "Modern Comfort",
              description: "Contemporary amenities for a luxurious stay",
              icon: "✨"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-6 bg-heritage-coconut rounded-lg border border-heritage-border-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-heritage-dark mb-3">{feature.title}</h3>
              <p className="text-heritage-medium">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;