const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive care including cleanings, fillings, and preventive treatments to keep your smile healthy.",
    icon: "🦷",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile with veneers, bonding, and other aesthetic treatments tailored to your goals.",
    icon: "✨",
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more radiant smile that lasts.",
    icon: "💎",
  },
  {
    title: "Dental Implants",
    description: "Advanced implant solutions that feel and function like natural teeth with exceptional longevity.",
    icon: "🔧",
  },
  {
    title: "Invisalign / Clear Aligners",
    description: "Discreet teeth straightening with clear aligners that fit seamlessly into your lifestyle.",
    icon: "📐",
  },
  {
    title: "Emergency Dental Care",
    description: "Rapid response to dental emergencies with compassionate, expert care when you need it most.",
    icon: "🚨",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental solutions designed to meet all your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card flex flex-col group hover:border-cyan-400/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Hover effect divider */}
              <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-cyan-400 text-sm font-semibold">Learn more →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
