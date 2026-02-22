export default function About() {
  const highlights = [
    "Experienced & certified dentists",
    "State-of-the-art technology",
    "Comfortable, stress-free experience",
    "Transparent pricing",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About Our <span className="gradient-text">Clinic</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine advanced dental technology with personalized care to ensure every patient receives the highest standard of treatment in a comfortable environment.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-card flex items-start gap-4 group hover:border-white/20"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mt-1">
                <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-semibold">{highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
