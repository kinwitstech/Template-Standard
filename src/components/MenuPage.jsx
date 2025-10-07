import React, { useState } from "react";
import { menuPageData } from "@/data/MenuPageData";

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("breakfast");

  const handleOrder = (item) => {
    console.log("Ordering:", item.name);
    alert(`Added ${item.name} to your order!`);
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto pt-10">
        {/* Tabs */}
        <div className="mb-12 w-full">
          <div className="flex flex-col md:flex-row w-full">
            {menuPageData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`w-full md:flex-1 text-center px-4 py-4 font-semibold text-xl transition-all duration-300 relative ${
                  activeTab === category.id
                    ? "bg-primary text-white"
                    : "bg-primary/20 text-gray-700 md:bg-white md:text-gray-700 hover:bg-primary hover:text-white"
                } md:relative`}
              >
                {category.name}
                {activeTab === category.id && (
                  <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative mb-15">
          {menuPageData.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeTab === category.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                {category.items.map((item, index) => {
                  const isImageFirst = Math.floor(index / 2) % 2 === 0;

                  const imageCard = (
                    <div
                      key={`${item.id}-image`}
                      className="h-64 bg-cover bg-center shadow-md"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  );

                  const textCard = (
                    <div
                      key={`${item.id}-text`}
                      className="bg-white border border-gray-200 p-8 flex flex-col justify-between shadow-md h-64"
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4">
                          {item.ingredients}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-primary font-bold text-xl">
                          ${item.price}
                        </span>
                        <button
                          onClick={() => handleOrder(item)}
                          className="px-3 py-1.5 text-sm bg-primary text-white font-semibold border border-primary hover:bg-white hover:text-primary transition"
                        >
                          Order now
                        </button>
                      </div>
                    </div>
                  );

                  return (
                    <React.Fragment key={item.id}>
                      {/* Mobile (<768px): stacked */}
                      <div className="block md:hidden">
                        {imageCard}
                        {textCard}
                      </div>

                      {/* Tablet (768px–1023px): always image + text side by side */}
                      <div className="hidden md:grid lg:hidden grid-cols-2">
                        {imageCard}
                        {textCard}
                      </div>

                      {/* Laptop/Desktop (≥1024px): alternating */}
                      <div className="hidden lg:block">
                        {isImageFirst ? imageCard : textCard}
                      </div>
                      <div className="hidden lg:block">
                        {isImageFirst ? textCard : imageCard}
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
