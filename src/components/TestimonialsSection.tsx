import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Factory Owner, Lahore",
      type: "Industrial",
      content: "Multiline installed our 500kVA generator system 8 years ago. Not a single day of downtime. Their after-sales service is exceptional — they respond within hours, not days.",
      rating: 5,
    },
    {
      name: "Sarah Malik",
      role: "Homeowner, Karachi",
      type: "Residential",
      content: "We switched to solar with Multiline last year. Our electricity bills dropped by 85%. The team handled everything from installation to net metering approval seamlessly.",
      rating: 5,
    },
    {
      name: "Imran Sheikh",
      role: "CEO, Tech Startup",
      type: "Commercial",
      content: "The home automation system has transformed our office. Security, lighting, climate — all controlled from one app. Professional installation and ongoing support.",
      rating: 5,
    },
  ];

  const certifications = [
    "ISO 9001:2015",
    "AEDB Licensed",
    "Perkins Authorized",
    "Cummins Partner",
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold mb-6">
            TESTIMONIALS
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            WHAT OUR <span className="text-primary">CLIENTS SAY</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-industrial p-8 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Type Badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold mb-4">
                {testimonial.type}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-secondary border border-border"
            >
              <div className="w-3 h-3 bg-primary" />
              <span className="font-semibold text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
