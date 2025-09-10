import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useRouterState();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  // const topBarHeight = 48; // height of top info bar in px

  return (
    <>
      {/* Top Info Bar - Desktop Only */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/10 text-white px-6 py-2 justify-between items-center">
        <div className="flex space-x-6 items-center">
          <PhoneIcon className="w-4 h-4" />
          <span>+1235 2355 98</span>
          <EnvelopeIcon className="w-4 h-4" />
          <span>youremail@email.com</span>
        </div>
        <div className="flex space-x-2 items-center">
          <ClockIcon className="w-4 h-4" />
          <span>Mon-Sun 8:00AM - 9:00PM</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500
          ${scrolled ? "top-0 bg-white text-black shadow-md" : "top-0 bg-black text-white md:top-[48px] md:bg-transparent"}
        `}
      >
        <div className="container mx-auto px-6 py-4 flex border-b border-primary/20 justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-extrabold transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Feliciano
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : scrolled
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className="btn-primary rounded-sm bg-primary text-white"
            >
              Book a table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"} 
            ${scrolled ? "bg-white text-black border-l border-gray-200" : "bg-black text-white"}
          `}
        >
          <div className="p-6 flex flex-col space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className={`self-end transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Menu Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-left ${
                  isActive(item.href)
                    ? "text-primary"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/reservation"
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a table
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
