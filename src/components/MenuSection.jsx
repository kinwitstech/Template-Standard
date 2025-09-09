import React from "react";

const MenuSection = ({ menuItems }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="block text-primary font-script text-7xl lg:text-9xl mb-2">
            Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Menu</h2>
        </div>

        {/* 4-column alternating layout */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {menuItems.map((item, index) => {
            const isEvenRow = Math.floor(index / 2) % 2 === 0;

            const imageCard = (
              <div
                className="h-64 bg-cover bg-center shadow-md"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
            );

            const textCard = (
              <div className="bg-base-100 border-1 border-primary/40 p-6 flex flex-col justify-between shadow-md h-64">
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
                    className="px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary/90 transition"
                  >
                    Order now
                  </a>
                </div>
              </div>
            );

            return (
              <React.Fragment key={index}>
                {/* Mobile: always image -> text */}
                <div className="block md:hidden">
                  {imageCard}
                  {textCard}
                </div>

                {/* Desktop/Tablet: alternating 4-column layout */}
                <React.Fragment>
                  <div className="hidden md:block">
                    {isEvenRow ? imageCard : textCard}
                  </div>
                  <div className="hidden md:block">
                    {isEvenRow ? textCard : imageCard}
                  </div>
                </React.Fragment>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
