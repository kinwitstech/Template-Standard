import { Twitter, Facebook, Instagram } from "lucide-react";

const chefs = [
  {
    name: "John Smooth",
    role: "Restaurant Owner",
    image:
      "https://plus.unsplash.com/premium_photo-1661778029158-e1a758c26bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb",
  },
  {
    name: "Rebeca Welson",
    role: "Head Chef",
    image:
      "https://images.unsplash.com/photo-1697898109582-40f15c65f174?q=80&w=687&auto=format&fit=crop&ixlib=rb",
  },
  {
    name: "Kharl Branyt",
    role: "Chef",
    image:
      "https://plus.unsplash.com/premium_photo-1687697860916-b05b982decbc?q=80&w=687&auto=format&fit=crop&ixlib=rb",
  },
  {
    name: "Luke Simon",
    role: "Chef",
    image:
      "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb",
  },
];

const ChefSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-primary font-script text-6xl lg:text-9xl block">
            Chef
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our Master Chef
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, idx) => (
            <div
              key={idx}
              className="grid grid-rows-[auto_1fr] bg-white overflow-hidden"
            >
              {/* Image Block */}
              <div
                className="h-70 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: `url(${chef.image})` }}
              ></div>

              {/* Text Block */}
              <div className="py-6 text-left flex flex-col ">
                <div>
                  <h3 className="text-xl font-semibold">{chef.name}</h3>
                  <span className="text-gray-500 text-sm block mb-4">
                    {chef.role}
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex items-left space-x-4 mt-4">
                  <a href="#" className="text-primary hover:cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-primary hover:cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-primary hover:cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
