import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Nutritious & Tasty",
      title: "BEST RESTAURANT",
      background:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop&ixlib=rb",
      foods: [
        {
          image:
            "https://images.unsplash.com/photo-1538974463296-4d76476ffeb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Grilled Beef with potatoes",
          ingredients: "Meat, Potatoes, Rice, Tomatoes",
        },
        {
          image:
            "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Pasta Alfredo",
          ingredients: "Pasta, Cream, Cheese",
        },
        {
          image:
            "https://plus.unsplash.com/premium_photo-1701699258153-87eac25aab9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Fresh Salad",
          ingredients: "Lettuce, Tomato, Cucumber",
        },
        {
          image:
            "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Chicken Curry",
          ingredients: "Chicken, Spices, Rice",
        },
      ],
    },
    {
      subtitle: "Delicious Specialties",
      title: "FELICIANO",
      background:
        "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=1920&auto=format&fit=crop&ixlib=rb",
      foods: [
        {
          image:
            "https://images.unsplash.com/photo-1538974463296-4d76476ffeb2?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Grilled Beef with potatoes",
          ingredients: "Meat, Potatoes, Rice, Tomatoes",
        },
        {
          image:
            "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Pasta Alfredo",
          ingredients: "Pasta, Cream, Cheese",
        },
        {
          image:
            "https://plus.unsplash.com/premium_photo-1701699258153-87eac25aab9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Fresh Salad",
          ingredients: "Lettuce, Tomato, Cucumber",
        },
        {
          image:
            "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
          name: "Chicken Curry",
          ingredients: "Chicken, Spices, Rice",
        },
      ],
    },
    // Add more slides here...
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background with fade effect */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.background})`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="font-script text-primary text-4xl md:text-6xl mb-4">
            Feliciano
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-4xl md:text-7xl font-bold text-white text-shadow">
            {slides[currentSlide].title}
          </h1>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-40">
          {slides[currentSlide].foods.map((food, index) => (
            <div key={index} className="text-center slide-up">
              <div className="food-card mx-auto mb-4 w-full aspect-square overflow-hidden rounded-lg shadow-lg">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm md:text-base font-medium text-white mb-1">
                {food.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                {food.ingredients}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-20"
      >
        <ChevronLeftIcon className="w-8 h-8 md:w-12 md:h-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-20"
      >
        <ChevronRightIcon className="w-8 h-8 md:w-12 md:h-12" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
