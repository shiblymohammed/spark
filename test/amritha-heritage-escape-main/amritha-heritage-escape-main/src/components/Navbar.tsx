import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Accommodation', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-heritage-coconut/95 backdrop-blur-sm border-b border-heritage-border-light"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Menu Button - Left */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(true)}
              className="border-heritage-border text-heritage-dark hover:bg-heritage-creme transition-all duration-300"
            >
              <Menu className="h-4 w-4" />
              <span className="ml-2 font-medium">Menu</span>
            </Button>

            {/* Logo - Center */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-heritage-dark tracking-wide">
                Amritha Heritage
              </h1>
              <div className="w-full h-0.5 bg-heritage-border mt-1"></div>
            </motion.div>

            {/* Book Now Button - Right */}
            <Button 
              className="bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300 font-medium"
            >
              Book Now
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-heritage-dark/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-80 h-full bg-heritage-coconut"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-heritage-border-light">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-heritage-dark">Menu</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-heritage-dark hover:bg-heritage-creme"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-3 px-4 text-heritage-dark hover:bg-heritage-creme rounded-lg transition-all duration-300 border border-transparent hover:border-heritage-border-light font-medium"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;