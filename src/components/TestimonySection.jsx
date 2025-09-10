import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jason McClean",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Mark Stevenson",
    role: "Customer",
    image: "https://plus.unsplash.com/premium_photo-1723867331866-e112500178a4?q=80&w=827&auto=format&fit=crop&ixlib=rb",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Art Leonard",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    name: "Rose Henderson",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?q=80&w=894&auto=format&fit=crop&ixlib=rb",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];

const TestimonySection = () => {
  return (
    <section className="relative bg-white py-16 bg-cover bg-center testimony-section">
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 z-10 relative">
          <span className="text-primary font-script text-6xl lg:text-9xl block">Testimony</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">Happy Customer</h2>
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
