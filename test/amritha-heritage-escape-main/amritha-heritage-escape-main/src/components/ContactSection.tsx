import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-heritage-stone">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-heritage-dark mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-heritage-border mx-auto mb-6"></div>
          <p className="text-xl text-heritage-medium max-w-3xl mx-auto leading-relaxed">
            Get in touch with us to plan your heritage experience. 
            Our dedicated team is here to ensure your stay is unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-heritage-dark mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-heritage-dark p-3 rounded-lg">
                    <Phone className="h-5 w-5 text-heritage-coconut" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heritage-dark mb-1">Phone</h4>
                    <p className="text-heritage-medium">+91 94876 54321</p>
                    <p className="text-heritage-medium">+91 94876 54322</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-heritage-dark p-3 rounded-lg">
                    <Mail className="h-5 w-5 text-heritage-coconut" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heritage-dark mb-1">Email</h4>
                    <p className="text-heritage-medium">info@amrithaheritage.com</p>
                    <p className="text-heritage-medium">reservations@amrithaheritage.com</p>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-heritage-dark p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-heritage-coconut" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heritage-dark mb-1">Address</h4>
                    <p className="text-heritage-medium">
                      Amritha Heritage Hotel<br />
                      Backwater Road, Kumarakom<br />
                      Kottayam, Kerala 686563<br />
                      India
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-heritage-dark p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-heritage-coconut" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heritage-dark mb-1">Reception Hours</h4>
                    <p className="text-heritage-medium">24/7 Front Desk Service</p>
                    <p className="text-heritage-light text-sm">Check-in: 2:00 PM | Check-out: 12:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-heritage-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook", href: "#" },
                  { icon: Instagram, label: "Instagram", href: "#" },
                  { icon: Twitter, label: "Twitter", href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-heritage-dark p-3 rounded-lg text-heritage-coconut hover:bg-heritage-medium transition-colors duration-300"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-heritage-coconut border-heritage-border-light">
              <h3 className="text-2xl font-bold text-heritage-dark mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-heritage-dark font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="Your first name"
                      className="border-heritage-border-light focus:border-heritage-border"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-heritage-dark font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Your last name"
                      className="border-heritage-border-light focus:border-heritage-border"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-heritage-dark font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-heritage-border-light focus:border-heritage-border"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-heritage-dark font-medium mb-2">Phone</label>
                  <Input 
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="border-heritage-border-light focus:border-heritage-border"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-heritage-dark font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your heritage experience preferences..."
                    rows={5}
                    className="border-heritage-border-light focus:border-heritage-border"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-heritage-coconut p-8 rounded-lg border border-heritage-border-light">
            <h3 className="text-2xl font-bold text-heritage-dark mb-6 text-center">Find Us</h3>
            
            {/* Placeholder for map - in real implementation, you'd use Google Maps or similar */}
            <div className="w-full h-64 bg-heritage-beige rounded-lg border border-heritage-border-light flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-heritage-medium mx-auto mb-4" />
                <p className="text-heritage-dark font-medium">Interactive Map</p>
                <p className="text-heritage-light text-sm">Kumarakom, Kerala</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;