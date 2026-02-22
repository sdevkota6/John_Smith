const team = [
  {
    name: "Dr. Michael Carter",
    title: "Lead Dentist",
    bio: "20+ years of experience in modern dentistry. Specializes in cosmetic and restorative procedures with a passion for patient comfort.",
    initials: "MC",
  },
  {
    name: "Dr. Sarah Mitchell",
    title: "Dental Specialist",
    bio: "Expert in advanced dental implants and complex cases. Dedicated to delivering exceptional results with the latest techniques.",
    initials: "SM",
  },
];

export default function Team() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert dentists committed to your smile
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="glass-card flex flex-col items-center text-center hover:border-cyan-400/50 transition-all duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Avatar */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-background">{member.initials}</span>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-cyan-400 font-semibold mb-4">
                {member.title}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
