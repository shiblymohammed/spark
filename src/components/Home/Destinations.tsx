import { useState, useEffect, useRef } from "react";
// FIXED: Removed unused 'Star' import - only keeping the icons that are actually used in the component
import { MapPin, ArrowRight, Clock } from "lucide-react";

const DestinationSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const destinations = [
    {
      title: "Shri Padmanabhaswami Temple",
      description:
        "Constructed in the Dravidian style by a Maharaja of Travancore in 1733, the temple is dedicated to Vishnu who reclines on the sacred serpent Anantha, which gives Thiruvananthapuram its name.",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "5 km",
      category: "Heritage",
      rating: "4.8",
    },
    {
      title: "Kovalam Beach",
      description:
        "Located 16 km from Thiruvananthapuram, Kovalam Beach attracts both the rich and famous. The coastline is dotted with both luxury and budget resorts.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "16 km",
      category: "Beach",
      rating: "4.7",
    },
    {
      title: "Veli Tourist Village",
      description:
        "Bordered by the Veli lagoon and Arabian Sea, this attraction offers water sports, a floating bridge, children's park, restaurant, and gardens. Just 8 km from the city.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "8 km",
      category: "Adventure",
      rating: "4.6",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".destination-card");
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-heritage-bg-accent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-text-primary-title/20 to-text-primary-title/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-text-primary-title/15 to-textprimary-title/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-text-primary-title/10 text-text--primary-title rounded-full text-sm font-medium mb-6 font-playfair">
            <MapPin size={16} />
            Discover Thiruvananthapuram
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary-title mb-6 leading-tight font-playfair">
            Heritage
            <span className="block text-text-primary-title">Attractions</span>
          </h2>
          <p className="text-xl text-text-primary-title/70 max-w-3xl mx-auto leading-relaxed font-cormorant">
            Immerse yourself in the rich cultural heritage and colonial history
            that surrounds Amritha Heritage. Each destination tells a unique
            story of Thiruvithamkoor's glorious past.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`destination-card group relative overflow-hidden rounded-3xl bg-heritage-bg-accent shadow-lg hover: transition-all duration-700 transform border-2 border-text-description-2 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 "></div>

                {/* Distance */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <Clock size={14} className="text-primary-text/70" />
                  <span className="text-sm font-medium text-primary-text">
                    {destination.distance}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary-title mb-4 group-hover:text-text-primary-title/80 transition-colors duration-300 font-playfair">
                  {destination.title}
                </h3>

                <p className="text-text-primary-title/70 leading-relaxed mb-6 line-clamp-3 md:line-clamp-none font-cormorant">
                  {destination.description}
                </p>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-primary-text text-text-primary-title font-semibold border-2 border-text-primary-title rounded-xl hover:bg-primary-text/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-text/25 transform hover:-translate-y-0.5">
                  Explore More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-none border-2 border-transparent group-hover:border-primary-text/20 transition-colors duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-heritage-bg-accent backdrop-blur-sm rounded-2xl shadow-xl border border-text-primary-title">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-text-primary-title mb-2 font-playfair">
                Ready to Explore?
              </h3>
              <p className="text-text-primary-title/70 font-cormorant">
                Let our heritage concierge help you plan the perfect colonial
                journey
              </p>
            </div>
            <button className=" border-2 border-text-primary-title px-8 py-4 bg-primary-text text-text-primary-title font-bold rounded-xl hover:bg-primary-text/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-text/25 transform hover:-translate-y-0.5 whitespace-nowrap">
              Plan Your Heritage Journey
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-text/20 to-transparent"></div>
    </section>
  );
};

export default DestinationSection;
