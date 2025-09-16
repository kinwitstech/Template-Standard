import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/data/TestimonyData";

const TestimonySection = () => {
  return (
    <section className="relative bg-white py-16 bg-cover bg-center testimony-section">
      <div className="relative container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12 z-10 relative">
          <span className="text-primary font-script text-6xl lg:text-9xl block">
            Testimony
          </span>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative z-10"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white text-center rounded-lg p-6 relative pb-10 min-h-[300px]">
                <div
                  className="w-26 h-26 mx-auto rounded-full bg-cover bg-center relative mb-6"
                  style={{ backgroundImage: `url(${t.image})` }}
                >
                  <span className="absolute -bottom-3 -right-3 bg-primary text-white p-2 rounded-full">
                    <Quote className="w-5 h-5" />
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{t.text}</p>
                <p className="font-bold text-lg">{t.name}</p>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonySection;
