import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import MenuSection from "../components/MenuSection";
import ChefSection from "@/components/ChefSection";
import ReservationSection from "@/components/ReservationSection";
import TestimonySection from "@/components/Testimonysection";
import BlogSection from "@/components/BlogSection";

import Footer from "../components/Footer";
import {
  CakeIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Home = () => {

  return (
    <div>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <MenuSection />
      <ChefSection />
      <ReservationSection />
      <TestimonySection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
