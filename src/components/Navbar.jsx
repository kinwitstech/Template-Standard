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

  return (
    <>
      {/* Top Bar */}
      <div
        className={`hidden md:block text-sm transition-colors duration-500 ${
          scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4" />
              <span>+ 1235 2355 98</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4" />
              <span>youremail@email.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ClockIcon className="w-4 h-4" />
            <span>Open hours: Monday - Sunday 8:00AM - 9:00PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className={`font-script text-3xl font-bold transition-colors duration-500 ${
                scrolled ? "text-primary" : "text-white"
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
                  className={`btn-ghost transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-primary hover:text-orange-500" 
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
                className={`btn-primary ${
                  scrolled ? "bg-primary text-white" : "bg-white text-black"
                }`}
              >
                Book a table
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation (Slide-in from right) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"} 
            ${scrolled ? "bg-white border-l border-gray-200" : "bg-black/90 border-l border-gray-700"}
          `}
        >
          <div className="p-6 flex flex-col space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className={`self-end transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Menu Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`btn-ghost text-left ${
                  isActive(item.href)
                    ? "text-primary"
                    : scrolled
                    ? "text-gray-800"
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
