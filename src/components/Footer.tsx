import { Zap, Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Generators", href: "#generators" },
    { label: "Solar Solutions", href: "#solar" },
    { label: "Home Automation", href: "#automation" },
    { label: "Contact", href: "#contact" },
  ];

  const products = [
    "Perkins Generators",
    "Cummins Generators",
    "On-Grid Solar Systems",
    "Off-Grid Solar Systems",
    "Smart Home Systems",
    "Security Solutions",
  ];

  const certifications = ["ISO 9001:2015", "AEDB Licensed", "Perkins Authorized", "Cummins Partner"];

  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wide">MULTILINE</span>
                <span className="block text-xs opacity-70 tracking-widest">ENGINEERING CO.</span>
              </div>
            </a>
            <p className="text-sm opacity-70 mb-6">
              Powering Pakistan with engineering excellence since 1975. 
              Generators, solar solutions, and home automation systems 
              backed by unmatched after-sales service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-xl mb-6">PRODUCTS</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-sm opacity-70">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl mb-6">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm opacity-70">
                  3-A1, Off Airport Road, Opposite Toyota Airport Motors<br />Lahore Cantt, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+923001234567" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  0307-4440347
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@multiline.com.pk" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                  info@multiline.com.pk
                </a>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-6 pt-6 border-t border-primary-foreground/10">
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-primary-foreground/10">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
            <p>© 2024 Multiline Engineering Co. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
