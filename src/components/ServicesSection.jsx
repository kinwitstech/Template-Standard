import { services } from "@/data/ServicesData";

const ServicesSection = () => {
  return (
    <section className="bg-primary/5">
      <div className="container section-padding mx-auto">
        <div className="text-center mb-12">
          <span className="block text-primary font-script tracking-wide text-7xl lg:text-9xl mb-2">
            Services
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center fade-in"
              >
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
