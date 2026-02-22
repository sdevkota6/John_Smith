export default function BookingCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-blue-900/20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Ready for a <span className="gradient-text">Healthier Smile?</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book your appointment today and experience modern dental care with our expert team. Choose a time that works best for you.
        </p>

        <button className="glow-button text-lg px-10 py-4">
          Schedule Your Visit
        </button>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
          <div>
            <p className="text-3xl font-bold text-cyan-400">500+</p>
            <p className="text-muted-foreground text-sm">Happy Patients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">20+</p>
            <p className="text-muted-foreground text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">98%</p>
            <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
