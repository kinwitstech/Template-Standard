import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ target, duration = 2000, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // Only animate when visible

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, inView]);

  return <>{count.toLocaleString()}</>; // Format nicely (e.g., 10,000)
};

const StatsSection = ({ stats }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Run animation only once
    threshold: 0.2,    // Start when 20% of section is visible
  });

  return (
    <section className="p-5" ref={ref}>
      <div className="container mx-auto px-6 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Stats */}
          <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <strong className="block text-5xl font-bold text-primary">
                  <AnimatedNumber target={stat.number} inView={inView} />
                </strong>
                <span className="text-xs ml-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="md:col-span-1 text-center md:text-left">
            <p className="text-muted-foreground">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
