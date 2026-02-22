export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-900/20" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <span className="text-sm text-cyan-400">Premium Dental Care in Canada</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Modern Dental Care.
            <br />
            <span className="gradient-text">Trusted Results.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Providing advanced, comfortable, and patient-focused dental services in Canada. Experience premium care with state-of-the-art technology and personalized attention.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glow-button">
              Book an Appointment
            </button>
            <button className="px-8 py-3 rounded-lg border border-white/20 text-foreground hover:bg-white/5 transition-all duration-300">
              Explore Our Services
            </button>
          </div>
        </div>

        {/* Abstract dental aesthetic background element */}
        <div className="mt-16 relative">
          <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-muted-foreground">Excellence in Dental Healthcare</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
