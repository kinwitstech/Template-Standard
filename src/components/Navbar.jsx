import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) => location.pathname === href;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/10 text-white/40">
        <div className="container mx-auto py-2 grid grid-cols-3 items-center">
          <div className="flex items-center justify-start space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <span>+1235 2355 98</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <EnvelopeIcon className="w-4 h-4" />
            <span>youremail@email.com</span>
          </div>
          <div className="flex items-center justify-end space-x-2">
            <ClockIcon className="w-4 h-4" />
            <span>Mon-Sun 8:00AM - 9:00PM</span>
          </div>
        </div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white text-black py-2 md:py-4 lg:py-0 shadow-md"
            : "top-0 bg-black text-white lg:top-[48px] lg:bg-transparent"
        }`}
      >
        <div
          className={`relative transition-all duration-300 ${
            scrolled ? "py-3 md:py-0" : "py-4 md:pb-2"
          }`}
        >
          {!scrolled && (
            <div className="absolute bottom-0 left-0 w-full border-b border-primary/30" />
          )}

          <div className="container px-5 md:px-15 flex justify-between items-center relative z-10">
            <Link
              to="/"
              className={`text-2xl font-extrabold transition-colors duration-500 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Feliciano
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
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
                className={`btn-primary bg-primary text-white transition-all duration-300 ${
                  scrolled ? "rounded-none" : "rounded-sm"
                }`}
              >
                Book a table
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden flex items-center space-x-2 transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <>
                  <Bars3Icon className="w-6 h-6" />
                  <span className="text-xs">MENU</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-72 z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } ${scrolled ? "bg-white text-black" : "bg-black text-white"}`}
        >
          <div className="p-8 flex flex-col space-y-6">
            <button
              onClick={() => setIsOpen(false)}
              className={`self-end transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

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
              className="btn-primary text-center rounded-sm"
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
