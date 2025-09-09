const StatsSection = ({ stats }) => {
  return (
    <section className="section-padding pt-0">
      <div className="container mx-auto">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <strong className="block text-4xl font-bold text-primary">
                  {stat.number}
                </strong>
                <span className="text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
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
