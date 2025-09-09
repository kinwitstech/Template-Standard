import React from "react";

const MenuSection = ({ menuItems }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="block text-primary uppercase tracking-wide text-sm mb-2">
            Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
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
              <div className="bg-primary p-6 flex flex-col justify-between shadow-md">
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
                {isEvenRow ? (
                  <>
                    {imageCard}
                    {textCard}
                  </>
                ) : (
                  <>
                    {textCard}
                    {imageCard}
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
