import { Award, Clock, HeadphonesIcon, ShieldCheck, Wrench, Zap } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Engineering Excellence",
      description: "50+ years of precision engineering with globally trained expertise",
    },
    {
      icon: ShieldCheck,
      title: "Unmatched Reliability",
      description: "Only genuine Perkins & Cummins engines with certified components",
    },
    {
      icon: Zap,
      title: "Premium Warranty",
      description: "Industry-leading warranty coverage on all products and installations",
    },
    {
      icon: Wrench,
      title: "Rapid After-Sales",
      description: "Largest spare parts inventory in Pakistan for immediate support",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Call Center",
      description: "Round-the-clock customer support for all your power needs",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Emergency service teams deployed within hours, not days",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold mb-6">
            WHY CHOOSE US
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            THE MULTILINE <span className="text-primary">ADVANTAGE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            When you choose Multiline, you&apos;re choosing decades of engineering 
            expertise and a commitment to excellence that&apos;s unmatched in Pakistan.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card-industrial p-8 group hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
