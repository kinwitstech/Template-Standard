import React from "react";
import { menuItems } from "@/data/HomeMenuData";

const MenuSection = () => {
  return (
    <section className="bg-white">
      <div className="container section-padding md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <span className="block text-primary font-script text-7xl lg:text-9xl mb-2">
            Specialties
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4">
          {menuItems.map((item, index) => {
            const isImageFirst = Math.floor(index / 2) % 2 === 0; 

            const imageCard = (
              <div
                key={`${index}-image`}
                className="h-64 bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
            );

            const textCard = (
              <div
                key={`${index}-text`}
                className="bg-white border border-primary/40 p-6 flex flex-col justify-between shadow-md h-64"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.tags.join(", ")}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold text-lg">
                    {item.price}
                  </span>
                  <a
                    href="#"
                    className="px-4 py-2 md:w-20 md:h-15 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
                  >
                    Order now
                  </a>
                </div>
              </div>
            );

            return (
              <React.Fragment key={index}>
                <div className="block md:hidden">
                  {imageCard}
                  {textCard}
                </div>

                <div className="hidden md:block">
                  {isImageFirst ? imageCard : textCard}
                </div>
                <div className="hidden md:block">
                  {isImageFirst ? textCard : imageCard}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
