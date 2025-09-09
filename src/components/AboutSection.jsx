import { ClockIcon, PhoneIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Images */}
          <div className="lg:col-span-7 flex space-x-4">
            <div
              className="flex-1 h-80 bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1572715376701-98568319fd0b?q=80&w=687&auto=format&fit=crop&ixlib=rb')`,
              }}
            ></div>
            <div
              className="flex-1 h-80 bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1710575326152-4a397c13716d?q=80&w=687&auto=format&fit=crop&ixlib=rb')`,
              }}
            ></div>
          </div>

          {/* Text */}
          <div className="lg:col-span-5 pt-6 lg:pt-0">
            <div className="mb-6">
              <span className="text-primary text-xl block mb-2">About</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Feliciano Restaurant
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country,
              in which roasted parts of sentences fly into your mouth.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-6 h-6 text-primary" />
                <span>
                  Mon - Fri <strong>8 AM - 11 PM</strong>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-primary" />
                <a
                  href="tel:+19781234567"
                  className="font-bold text-lg hover:text-primary"
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
