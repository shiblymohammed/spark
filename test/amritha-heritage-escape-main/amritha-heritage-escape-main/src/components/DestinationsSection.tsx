import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Camera, Star } from 'lucide-react';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Alleppey Backwaters",
      description: "Cruise through serene backwaters on traditional houseboats",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070",
      distance: "15 km",
      duration: "4-6 hours",
      rating: "4.9",
      highlights: ["Houseboat cruise", "Traditional villages", "Coconut groves", "Bird watching"]
    },
    {
      id: 2,
      name: "Kumarakom Bird Sanctuary",
      description: "Explore diverse bird species in their natural habitat",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074",
      distance: "8 km",
      duration: "2-3 hours",
      rating: "4.7",
      highlights: ["Bird watching", "Nature walks", "Photography", "Boat rides"]
    },
    {
      id: 3,
      name: "Vembanad Lake",
      description: "India's longest lake with stunning sunset views",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      distance: "12 km",
      duration: "3-4 hours",
      rating: "4.8",
      highlights: ["Sunset views", "Fishing", "Boating", "Local cuisine"]
    },
    {
      id: 4,
      name: "Pathiramanal Island",
      description: "Pristine island sanctuary accessible only by boat",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070",
      distance: "20 km",
      duration: "Half day",
      rating: "4.6",
      highlights: ["Island exploration", "Rare birds", "Pristine nature", "Adventure"]
    },
    {
      id: 5,
      name: "Kottayam Town",
      description: "Historic town with ancient churches and spice markets",
      image: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?q=80&w=2071",
      distance: "25 km",
      duration: "Full day",
      rating: "4.5",
      highlights: ["Ancient churches", "Spice markets", "Cultural sites", "Local crafts"]
    },
    {
      id: 6,
      name: "Marari Beach",
      description: "Secluded beach perfect for relaxation and water sports",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2074",
      distance: "35 km",
      duration: "Full day",
      rating: "4.8",
      highlights: ["Pristine beach", "Water sports", "Coconut groves", "Ayurveda"]
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-heritage-creme">
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
            Nearby Destinations
          </h2>
          <div className="w-20 h-1 bg-heritage-border mx-auto mb-6"></div>
          <p className="text-xl text-heritage-medium max-w-3xl mx-auto leading-relaxed">
            Discover the enchanting beauty of Kerala with our curated selection of nearby attractions, 
            each offering unique experiences in this God's Own Country.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-heritage-coconut border-heritage-border-light hover:border-heritage-border transition-all duration-300 group h-full">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-heritage-dark/0 group-hover:bg-heritage-dark/10 transition-all duration-300"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 bg-heritage-dark/80 text-heritage-coconut px-2 py-1 rounded-lg text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-400 fill-current" />
                    {destination.rating}
                  </div>
                </motion.div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-heritage-dark mb-2">{destination.name}</h3>
                  <p className="text-heritage-medium mb-4 leading-relaxed text-sm flex-1">{destination.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-heritage-light text-xs">
                      <MapPin className="h-3 w-3 mr-2" />
                      <span>{destination.distance} from hotel</span>
                    </div>
                    <div className="flex items-center text-heritage-light text-xs">
                      <Clock className="h-3 w-3 mr-2" />
                      <span>{destination.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-heritage-stone text-heritage-dark px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="text-xs text-heritage-light">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="flex-1 border-heritage-border text-heritage-dark hover:bg-heritage-beige transition-all duration-300"
                    >
                      <Camera className="h-3 w-3 mr-1" />
                      Gallery
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300"
                    >
                      Book Tour
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tour Packages */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-heritage-dark text-center mb-8">
            Curated Tour Packages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Heritage Day Tour",
                duration: "8 hours",
                price: "₹2,500",
                includes: "Transportation, Guide, Lunch"
              },
              {
                name: "Backwater Experience",
                duration: "Full day",
                price: "₹4,000",
                includes: "Houseboat, Meals, Activities"
              },
              {
                name: "Cultural Immersion",
                duration: "2 days",
                price: "₹6,500",
                includes: "Multiple sites, Accommodation, All meals"
              }
            ].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-heritage-coconut p-6 rounded-lg border border-heritage-border-light text-center"
              >
                <h4 className="text-xl font-bold text-heritage-dark mb-2">{pkg.name}</h4>
                <p className="text-heritage-medium mb-1">{pkg.duration}</p>
                <p className="text-2xl font-bold text-heritage-dark mb-2">{pkg.price}</p>
                <p className="text-heritage-light text-sm mb-4">{pkg.includes}</p>
                <Button 
                  size="sm"
                  className="w-full bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300"
                >
                  Book Package
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-heritage-medium mb-6">
            Need help planning your Kerala adventure? Our travel consultants are here to create your perfect itinerary.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-heritage-border text-heritage-dark hover:bg-heritage-beige transition-all duration-300 px-8"
          >
            Plan My Journey
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;