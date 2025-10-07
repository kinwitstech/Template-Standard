import { Twitter, Facebook, Instagram } from "lucide-react";
import { chefs } from "@/data/ChefData";

const ChefSection = () => {
  return (
    <section className="">
      <div className="container section-padding">
        <div className="text-center mb-12">
          <span className="text-primary font-script text-6xl lg:text-9xl block">
            Chef
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, idx) => (
            <div
              key={idx}
              className="grid grid-rows-[auto_1fr] bg-white overflow-hidden"
            >
              <div
                className="h-70 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: `url(${chef.image})` }}
              ></div>

              <div className="py-6 text-left flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold">{chef.name}</h3>
                  <span className="text-gray-500 text-sm block mb-4">
                    {chef.role}
                  </span>
                </div>

                <div className="flex space-x-4 mt-4">
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
