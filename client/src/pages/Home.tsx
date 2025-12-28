import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X, ChevronRight, Mail, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

/**
 * Defence Africa Website
 * Design Philosophy: Modern Geopolitical Authority
 * - Dark navy blue background with warm gold accents
 * - Playfair Display for headlines, Inter for body
 * - Asymmetric layout with strategic breathing room
 * - Data visualization motifs reflecting intelligence work
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">DA</span>
            </div>
            <span className="font-playfair font-bold text-lg">Defence Africa</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("briefing")}
              className="text-sm hover:text-accent transition-colors"
            >
              Briefing Room
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-sm hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-accent transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("briefing")}
                className="text-sm hover:text-accent transition-colors text-left"
              >
                Briefing Room
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className="text-sm hover:text-accent transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-accent transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "url('/images/hero-map-background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Diagonal Accent Stripe */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-20"
          style={{
            background: "linear-gradient(135deg, #D4A574 0%, transparent 70%)",
            clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
          }}
        />

        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-accent text-sm font-semibold tracking-wide">
                STRATEGIC INTELLIGENCE
              </p>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight">
                Deciphering the China-Africa Security Landscape
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Defence Africa provides strategic intelligence on China-Africa
              security dynamics. We combine geopolitical analysis, data-driven
              insights, and local expertise to help investment managers and
              corporate leaders navigate complex security challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Get Strategic Briefing
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("briefing")}
                className="border-accent text-accent hover:bg-accent/10"
              >
                Explore Analysis
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex items-center gap-8 text-sm">
              <div>
                <p className="text-accent font-semibold">Founded in Kenya</p>
                <p className="text-muted-foreground">Local expertise</p>
              </div>
              <div>
                <p className="text-accent font-semibold">AI-Powered</p>
                <p className="text-muted-foreground">Advanced analysis</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden md:block relative">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-accent/20">
              <img
                src="/images/briefing-room-hero.png"
                alt="Intelligence Analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <p className="text-accent text-sm font-semibold tracking-wide mb-2">
              OUR EXPERTISE
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Strategic Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Geopolitical Risk Analysis",
                description:
                  "Deep-dive analysis of China-Africa security dynamics, regional conflicts, and strategic implications for your business.",
                icon: "📊",
              },
              {
                title: "Corporate Due Diligence",
                description:
                  "Comprehensive security assessments for investments and operations across Africa, with focus on China-related factors.",
                icon: "🔍",
              },
              {
                title: "Strategic Advisory",
                description:
                  "Tailored briefings and strategic recommendations for navigating complex geopolitical landscapes and security challenges.",
                icon: "🎯",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="bg-background border-border hover:border-accent/50 transition-all hover:shadow-lg group"
              >
                <div className="p-8 space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="font-playfair text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-semibold mt-4">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Briefing Room Section */}
      <section id="briefing" className="py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <p className="text-accent text-sm font-semibold tracking-wide mb-2">
              LATEST ANALYSIS
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              The Briefing Room
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Article */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all group">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src="/images/services-accent.png"
                  alt="Featured Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8 space-y-4">
                <p className="text-accent text-xs font-semibold tracking-wide">
                  FEATURED ANALYSIS
                </p>
                <h3 className="font-playfair text-2xl font-bold">
                  DRC-Rwanda Peace Deal: Reshaping Africa's Critical Minerals
                  Supply Chain
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The US-brokered peace agreement represents more than conflict
                  resolution. It's a strategic play for control of 70% of the
                  world's cobalt reserves and a direct challenge to China's
                  dominance in African mineral extraction.
                </p>
                <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-semibold mt-4">
                  Read Full Analysis <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Article Grid */}
            {[
              {
                title: "China's Global Security Initiative in Africa",
                date: "Dec 2024",
              },
              {
                title: "The Lobito Corridor: Infrastructure & Strategic Competition",
                date: "Nov 2024",
              },
              {
                title: "Regional Military Cooperation: New Alliances Forming",
                date: "Oct 2024",
              },
            ].map((article, idx) => (
              <Card
                key={idx}
                className="bg-card border-border hover:border-accent/50 transition-all group cursor-pointer"
              >
                <div className="p-6 space-y-3">
                  <p className="text-muted-foreground text-xs">{article.date}</p>
                  <h4 className="font-playfair text-lg font-bold group-hover:text-accent transition-colors">
                    {article.title}
                  </h4>
                  <button className="inline-flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                    Read <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-card/30 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-accent text-sm font-semibold tracking-wide mb-2">
                  ABOUT DEFENCE AFRICA
                </p>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                  Strategic Intelligence from the Ground
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Kenya, Defence Africa combines geopolitical expertise
                with advanced AI analysis to provide unparalleled insights into
                China-Africa security dynamics. Our team of analysts, security
                professionals, and regional experts delivers actionable
                intelligence for investment managers, corporate security
                directors, and policy makers.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Deep local expertise across African regions",
                  "AI-powered geopolitical analysis",
                  "Real-time monitoring of security developments",
                  "Tailored briefings for your specific needs",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border border-accent/20 bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <p className="text-accent text-sm font-semibold">
                      INTELLIGENCE-DRIVEN
                    </p>
                    <p className="font-playfair text-3xl font-bold">
                      Strategic Clarity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wide mb-2">
              GET IN TOUCH
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Strategic Briefing
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact Defence Africa to discuss your geopolitical risk
              assessment and security intelligence needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-card border-border p-8 space-y-4">
              <Mail className="w-8 h-8 text-accent" />
              <h3 className="font-playfair text-xl font-bold">Email</h3>
              <p className="text-muted-foreground">
                For inquiries and briefing requests:
              </p>
              <a
                href="mailto:briefings@defence.africa"
                className="text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                briefings@defence.africa
              </a>
            </Card>

            <Card className="bg-card border-border p-8 space-y-4">
              <Linkedin className="w-8 h-8 text-accent" />
              <h3 className="font-playfair text-xl font-bold">Connect</h3>
              <p className="text-muted-foreground">
                Follow our latest analysis and insights:
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-accent hover:text-accent/80 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-accent hover:text-accent/80 transition-colors"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mt-12 bg-card border border-border rounded-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    type="email"
                    className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Organization</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your organization"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your intelligence needs..."
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">
                    DA
                  </span>
                </div>
                <span className="font-playfair font-bold">Defence Africa</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Strategic intelligence on China-Africa security dynamics
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-accent transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("briefing")}
                    className="hover:text-accent transition-colors"
                  >
                    Briefing Room
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("mission")}
                    className="hover:text-accent transition-colors"
                  >
                    About
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="mailto:briefings@defence.africa"
                    className="hover:text-accent transition-colors"
                  >
                    briefings@defence.africa
                  </a>
                </li>
                <li>Founded in Kenya</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Follow</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 Defence Africa. All rights reserved. | Strategic
              Intelligence on China-Africa Security Dynamics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
