import { Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const Layout = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector("section")?.offsetHeight || 600; 
      const y = window.scrollY;
      setScrolled(y > heroHeight - 80); // adjust offset if needed
      setShowScrollTop(y > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar scrolled={scrolled} />
      <Outlet />
      {/* <Footer /> */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="group from-primary to-accent text-light fixed right-8 bottom-8 z-50 animate-pulse rounded-full bg-gradient-to-r p-3 opacity-70 shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:opacity-100 hover:shadow-none"
          aria-label="Scroll to top"
        >
          <span className="group-hover:animate-flip-once block">
            <ArrowUpFromDot />
          </span>
        </button>
      )}
    </div>
  );
};

export default Layout;
