import { useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding">
      <div className="container lg:px-10 fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 fade-in">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div
                className="h-80 md:h-96 lg:h-[500px] bg-cover bg-center shadow-md fade-in"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=687&auto=format&fit=crop&ixlib=rb')`,
                }}
              ></div>
              <div
                className="h-80 md:h-96 lg:h-[500px] bg-cover bg-center shadow-md translate-y-8 fade-in"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1710575326152-4a397c13716d?q=80&w=687&auto=format&fit=crop&ixlib=rb')`,
                }}
              ></div>
            </div>
          </div>

          <div className="lg:col-span-5 fade-in">
            <div className="mb-6">
              <span className="text-primary font-script text-6xl md:text-8xl block">
                About
              </span>
            </div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country,
              in which roasted parts of sentences fly into your mouth.
            </p>

            <div className="space-y-4 fade-in">
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">
                  Mon - Fri <strong>8 AM - 11 PM</strong>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+19781234567"
                  className="text-primary font-bold text-lg md:text-2xl lg:text-3xl"
                >
                  + 1-978-123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
