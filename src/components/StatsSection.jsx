import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { stats } from "@/data/StatsData";

const AnimatedNumber = ({ target, duration = 2000, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

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

  return <>{count.toLocaleString()}</>;
};

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Stats */}
          <div className="md:col-span-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center md:text-left" // center on small, left on md+
              >
                <strong className="block text-5xl font-bold text-primary">
                  <AnimatedNumber target={stat.number} inView={inView} />
                </strong>
                <span className="text-xs block">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Side text */}
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
