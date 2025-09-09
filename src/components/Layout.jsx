import { Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { location } = useRouterState();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector("section")?.offsetHeight || 600;
      const y = window.scrollY;

      // navbar visible after hero
      setScrolled(y > heroHeight - 80);

      // show "scroll to top" after some scroll
      setShowScrollTop(y > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col justify-between bg-background">
      {/* Navbar (with scroll animation controlled by scrolled) */}
      <Navbar scrolled={scrolled} />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer (optional) */}
      {/* <Footer /> */}

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-r from-primary to-accent p-3 shadow-lg opacity-70 transition-all hover:opacity-100 hover:shadow-xl sm:bottom-8 sm:right-8"
          aria-label="Scroll to top"
        >
          <span className="group-hover:animate-bounce block">
            <ArrowUpFromDot className="h-6 w-6 text-light" />
          </span>
        </button>
      )}
    </div>
  );
};

export default Layout;
