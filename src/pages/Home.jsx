import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import MenuSection from "../components/MenuSection";
import Footer from "../components/Footer";
import {
  PhoneIcon,
  ClockIcon,
  CakeIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const stats = [
    { number: "15", label: "Years of Experienced" },
    { number: "50", label: "Menus/Dish" },
    { number: "30", label: "Staffs" },
    { number: "10,000", label: "Happy Customers" },
  ];

  const services = [
    {
      title: "Birthday Party",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: CakeIcon,
    },
    {
      title: "Business Meetings",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: BriefcaseIcon,
    },
    {
      title: "Wedding Party",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      icon: HeartIcon,
    },
  ];

  const menuItems = [
    {
      title: "Grilled Beef with potatoes",
      price: "$29",
      img: "https://plus.unsplash.com/premium_photo-1723377627996-1003fa5152cb?q=80&w=921&auto=format&fit=crop&ixlib=rb",
      tags: ["Meat", "Potatoes", "Rice", "Tomatoe"],
    },
    {
      title: "Salmon Dish",
      price: "$35",
      img: "https://images.unsplash.com/photo-1614627293113-e7e68163d958?q=80&w=880&auto=format&fit=crop&ixlib=rb",
      tags: ["Fish", "Lemon", "Rice"],
    },
    {
      title: "Vegan Salad",
      price: "$19",
      img: "https://plus.unsplash.com/premium_photo-1698867577020-38ae235fd612?q=80&w=880&auto=format&fit=crop&ixlib=rb",
      tags: ["Lettuce", "Tomato", "Cucumber", "Olives"],
    },
    {
      title: "Pasta Alfredo",
      price: "$19",
      img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
      tags: ["Lettuce", "Tomato", "Cucumber", "Olives"],
    },
    {
      title: "Chicken Curry",
      price: "$19",
      img: "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
      tags: ["Lettuce", "Tomato", "Cucumber", "Olives"],
    },
    {
      title: "Chicken Curry",
      price: "$19",
      img: "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb",
      tags: ["Lettuce", "Tomato", "Cucumber", "Olives"],
    },
  ];

  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsSection stats={stats} />
      <ServicesSection services={services} />
      <MenuSection menuItems={menuItems} />
      <Footer />
    </div>
  );
};

export default Home;
