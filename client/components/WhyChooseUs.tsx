const reasons = [
  {
    title: "Advanced Technology",
    description: "Latest dental equipment for precise, efficient treatments",
    icon: "⚡",
  },
  {
    title: "Patient-Focused Care",
    description: "Your comfort and satisfaction are our top priorities",
    icon: "❤️",
  },
  {
    title: "Flexible Scheduling",
    description: "Convenient appointment times that work with your schedule",
    icon: "📅",
  },
  {
    title: "Emergency Appointments",
    description: "Same-day availability for urgent dental concerns",
    icon: "🚀",
  },
  {
    title: "Direct Insurance Billing",
    description: "Streamlined billing process with insurance providers",
    icon: "💳",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card flex flex-col items-center text-center hover:border-cyan-400/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{reason.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
