import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Users, Star, ChefHat } from 'lucide-react';

const DiningSection = () => {
  const diningOptions = [
    {
      id: 1,
      name: "Heritage Restaurant",
      description: "Experience authentic Kerala cuisine in our traditional dining hall",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074",
      timing: "6:00 AM - 11:00 PM",
      capacity: "120 guests",
      rating: "4.8",
      specialty: "Kerala Cuisine"
    },
    {
      id: 2,
      name: "Backwater Café",
      description: "Casual dining with scenic backwater views and fresh seafood",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070",
      timing: "7:00 AM - 10:00 PM",
      capacity: "80 guests",
      rating: "4.7",
      specialty: "Seafood & Continental"
    },
    {
      id: 3,
      name: "Spice Garden Bar",
      description: "Rooftop bar with craft cocktails and panoramic heritage views",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2074",
      timing: "5:00 PM - 12:00 AM",
      capacity: "60 guests",
      rating: "4.9",
      specialty: "Cocktails & Appetizers"
    }
  ];

  const specialDishes = [
    {
      name: "Traditional Sadya",
      description: "Authentic Kerala feast served on banana leaf",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2017",
      price: "₹850"
    },
    {
      name: "Karimeen Fish Curry",
      description: "Pearl spot fish in coconut curry with Kerala spices",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=2081",
      price: "₹650"
    },
    {
      name: "Appam & Stew",
      description: "Soft rice pancakes with traditional vegetable stew",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2036",
      price: "₹420"
    },
    {
      name: "Heritage Biryani",
      description: "Aromatic basmati rice with tender meat and authentic spices",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51d?q=80&w=2070",
      price: "₹750"
    }
  ];

  return (
    <section id="dining" className="py-20 bg-heritage-beige">
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
            Culinary Heritage
          </h2>
          <div className="w-20 h-1 bg-heritage-border mx-auto mb-6"></div>
          <p className="text-xl text-heritage-medium max-w-3xl mx-auto leading-relaxed">
            Savor the authentic flavors of Kerala in our heritage dining spaces, 
            where traditional recipes meet contemporary culinary artistry.
          </p>
        </motion.div>

        {/* Dining Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {diningOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-heritage-coconut border-heritage-border-light hover:border-heritage-border transition-all duration-300 group">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-heritage-dark/0 group-hover:bg-heritage-dark/10 transition-all duration-300"></div>
                </motion.div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-heritage-dark mb-2">{option.name}</h3>
                  <p className="text-heritage-medium mb-4 text-sm leading-relaxed">{option.description}</p>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-heritage-light text-xs">
                      <Clock className="h-3 w-3 mr-2" />
                      <span>{option.timing}</span>
                    </div>
                    <div className="flex items-center text-heritage-light text-xs">
                      <Users className="h-3 w-3 mr-2" />
                      <span>{option.capacity}</span>
                    </div>
                    <div className="flex items-center text-heritage-light text-xs">
                      <Star className="h-3 w-3 mr-2 text-yellow-600" />
                      <span>{option.rating} Rating</span>
                    </div>
                    <div className="flex items-center text-heritage-light text-xs">
                      <ChefHat className="h-3 w-3 mr-2" />
                      <span>{option.specialty}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300"
                  >
                    Reserve Table
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Special Dishes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-heritage-dark text-center mb-12">
            Signature Dishes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialDishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-heritage-coconut rounded-lg overflow-hidden border border-heritage-border-light group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-heritage-dark text-heritage-coconut px-2 py-1 rounded text-sm font-medium">
                    {dish.price}
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-heritage-dark mb-2">{dish.name}</h4>
                  <p className="text-heritage-medium text-sm leading-relaxed">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-heritage-coconut p-8 rounded-lg border border-heritage-border-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-heritage-dark mb-4">
            Experience Culinary Excellence
          </h3>
          <p className="text-heritage-medium mb-6">
            Book a table at our heritage restaurants and embark on a gastronomic journey through Kerala's rich culinary traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-heritage-dark text-heritage-coconut hover:bg-heritage-medium transition-all duration-300"
            >
              Reserve Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-heritage-border text-heritage-dark hover:bg-heritage-creme transition-all duration-300"
            >
              View Full Menu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiningSection;