import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-heritage-dark text-heritage-coconut">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Hotel Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">Amritha Heritage</h3>
              <div className="w-16 h-0.5 bg-heritage-stone mb-4"></div>
              <p className="text-heritage-stone text-sm leading-relaxed">
                Experience the perfect blend of Kerala's rich heritage and modern luxury 
                at our boutique hotel nestled in the heart of Kumarakom.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-heritage-stone" />
                <span className="text-sm">+91 94876 54321</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-heritage-stone" />
                <span className="text-sm">info@amrithaheritage.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-heritage-stone mt-0.5" />
                <span className="text-sm">Backwater Road, Kumarakom<br />Kerala 686563, India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="w-16 h-0.5 bg-heritage-stone mb-6"></div>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Accommodation', href: '#rooms' },
                { label: 'Dining', href: '#dining' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href}
                    className="text-heritage-stone hover:text-heritage-coconut transition-colors duration-300 text-sm block py-1"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <div className="w-16 h-0.5 bg-heritage-stone mb-6"></div>
            <ul className="space-y-3">
              {[
                'Heritage Tours',
                'Backwater Cruises',
                'Cultural Programs',
                'Ayurveda Spa',
                'Conference Facilities',
                'Airport Transfers',
                'Wedding Venues',
                'Cooking Classes'
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <span className="text-heritage-stone text-sm block py-1">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h4 className="text-lg font-bold mb-4">Stay Connected</h4>
              <div className="w-16 h-0.5 bg-heritage-stone mb-6"></div>
              <p className="text-heritage-stone text-sm mb-4">
                Subscribe to our newsletter for exclusive heritage experiences and special offers.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <Input 
                  placeholder="Enter your email"
                  className="bg-heritage-medium/20 border-heritage-stone text-heritage-coconut placeholder:text-heritage-stone"
                />
                <Button 
                  size="sm"
                  className="w-full bg-heritage-stone text-heritage-dark hover:bg-heritage-coconut hover:text-heritage-dark transition-all duration-300"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Youtube, href: '#', label: 'YouTube' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-heritage-stone p-2 rounded-lg text-heritage-dark hover:bg-heritage-coconut transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-heritage-medium/30 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-heritage-stone text-sm">
              © 2024 Amritha Heritage Hotel. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-heritage-stone text-sm">
              <a href="#" className="hover:text-heritage-coconut transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-heritage-coconut transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-heritage-coconut transition-colors duration-300">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;