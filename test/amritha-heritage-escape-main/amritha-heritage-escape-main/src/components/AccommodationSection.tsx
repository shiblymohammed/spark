import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Wifi, Car, Coffee, Tv, Bath, Bed } from 'lucide-react';

const AccommodationSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Heritage Suite",
      description: "Spacious suite with traditional Kerala architecture and modern amenities",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2074",
      price: "₹8,500",
      amenities: ['Free WiFi', 'Parking', 'Room Service', 'Smart TV', 'Premium Bath', 'King Bed'],
      icons: [Wifi, Car, Coffee, Tv, Bath, Bed]
    },
    {
      id: 2,
      name: "Deluxe Room",
      description: "Comfortable accommodation with garden view and heritage-inspired interiors",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2032",
      price: "₹5,500",
      amenities: ['Free WiFi', 'Parking', 'Room Service', 'Smart TV', 'Premium Bath', 'Queen Bed'],
      icons: [Wifi, Car, Coffee, Tv, Bath, Bed]
    },
    {
      id: 3,
      name: "Premium Villa",
      description: "Private villa with pool access and exclusive heritage dining experience",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
      price: "₹12,000",
      amenities: ['Free WiFi', 'Private Parking', 'Butler Service', 'Smart TV', 'Luxury Bath', 'King Bed'],
      icons: [Wifi, Car, Coffee, Tv, Bath, Bed]
    },
    {
      id: 4,
      name: "Family Room",
      description: "Spacious family accommodation perfect for memorable heritage experiences",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
      price: "₹7,000",
      amenities: ['Free WiFi', 'Parking', 'Room Service', 'Smart TV', 'Family Bath', 'Twin Beds'],
      icons: [Wifi, Car, Coffee, Tv, Bath, Bed]
    },
    {
      id: 5,
      name: "Royal Suite",
      description: "Ultimate luxury with panoramic views and personalized heritage services",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      price: "₹15,000",
      amenities: ['Free WiFi', 'Valet Parking', 'Concierge Service', 'Smart TV', 'Royal Bath', 'Master Suite'],
      icons: [Wifi, Car, Coffee, Tv, Bath, Bed]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-heritage-stone">
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
            Accommodation
          </h2>
          <div className="w-20 h-1 bg-heritage-border mx-auto mb-6"></div>
          <p className="text-xl text-heritage-medium max-w-3xl mx-auto leading-relaxed">
            Choose from our carefully curated selection of heritage-inspired accommodations, 
            each designed to offer you the perfect blend of comfort and cultural authenticity.
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-heritage-coconut border-heritage-border-light hover:border-heritage-border transition-all duration-300 group">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-heritage-dark text-heritage-coconut px-3 py-1 rounded-lg text-sm font-medium">
                    {room.price}/night
                  </div>
                  <div className="absolute inset-0 bg-heritage-dark/0 group-hover:bg-heritage-dark/10 transition-all duration-300"></div>
                </motion.div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-heritage-dark mb-3">{room.name}</h3>
                  <p className="text-heritage-medium mb-4 leading-relaxed">{room.description}</p>
                  
                  {/* Amenities */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {room.amenities.slice(0, 6).map((amenity, idx) => {
                      const IconComponent = room.icons[idx];
                      return (
                        <div key={amenity} className="flex items-center text-heritage-light text-xs">
                          <IconComponent className="h-3 w-3 mr-1" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      className="flex-1 border-heritage-border text-heritage-dark hover:bg-heritage-creme transition-all duration-300"
                    >
                      Explore
                    </Button>
                    <Button 
                      className="flex-1 bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-heritage-medium mb-6">Can't decide? Let our heritage consultants help you choose the perfect accommodation.</p>
          <Button 
            size="lg"
            variant="outline"
            className="border-heritage-border text-heritage-dark hover:bg-heritage-creme transition-all duration-300 px-8"
          >
            Get Personalized Recommendations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationSection;