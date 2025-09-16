import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { slides } from "@/data/HeroData";

const Hero = () => {

  return (
    <>
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          className="absolute inset-0 w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.background})`,
                }}
              >
                <div className="container relative pt-60 pb-10 z-10 h-full flex flex-col justify-center items-center text-center">
                  <h2 className="font-script text-primary text-6xl md:text-7xl mb-4">
                    Feliciano
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow">
                    {slide.title}
                  </h1>

                  <div className="border-t border-primary/20 pt-5 hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {slide.foods.map((food, i) => (
                      <div key={i} className="text-center slide-up">
                        <div className="food-card mx-auto mb-4 w-30 aspect-square overflow-hidden rounded-full shadow-lg">
                          <img
                            src={food.image}
                            alt={food.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {food.name}
                        </h3>
                        <p className="text-md md:text-sm text-gray-300">
                          {food.ingredients}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="sm:hidden container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 gap-4">
          {slides[0].foods.map((food, index) => (
            <div key={index} className="text-center slide-up">
              <div className="food-card mx-auto mb-4 w-40 aspect-square overflow-hidden rounded-full shadow-lg">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {food.name}
              </h3>
              <p className="text-sm text-gray-600">{food.ingredients}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
