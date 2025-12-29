import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Menu,
  X,
  ChevronRight,
  Mail,
  Linkedin,
  Twitter,
  Globe,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

/**
 * Defence Africa Website - Premium Redesign
 * Design Philosophy: Modern Geopolitical Authority
 * - Dark navy blue background with warm gold accents
 * - Playfair Display for headlines, Inter for body
 * - Asymmetric layout with strategic breathing room
 * - Premium animations and interactive elements
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
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border/50">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-accent-foreground font-bold text-sm">DA</span>
            </div>
            <div>
              <p className="font-playfair font-bold text-lg leading-none">
                Defence Africa
              </p>
              <p className="text-xs text-muted-foreground">Strategic Intelligence</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("briefing")}
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              Analysis
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-accent transition-colors duration-200"
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
          <div className="md:hidden border-t border-border/50 bg-card/50 backdrop-blur">
            <div className="container py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("briefing")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Analysis
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium hover:text-accent transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('/images/hero-map-background.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        {/* Diagonal Accent Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(135deg, #D4A574 0%, transparent 70%)",
              clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Tagline */}
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-accent rounded-full" />
                <p className="text-accent text-xs font-bold tracking-widest">
                  STRATEGIC INTELLIGENCE
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-playfair text-6xl md:text-7xl font-bold leading-tight">
                Deciphering the
                <span className="block text-accent">China-Africa</span>
                Security Landscape
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg font-light">
              Expert geopolitical analysis and strategic intelligence for
              investment managers, corporate leaders, and policy makers
              navigating China-Africa security dynamics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 flex items-center justify-center gap-2"
              >
                Get Strategic Briefing
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("briefing")}
                className="px-8 py-4 border-2 border-accent/30 hover:border-accent text-foreground hover:text-accent font-bold rounded-lg transition-all duration-300 hover:bg-accent/5"
              >
                Explore Analysis
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 grid grid-cols-2 gap-6 border-t border-border/30">
              <div className="space-y-1">
                <p className="text-accent font-bold text-lg">Founded in Kenya</p>
                <p className="text-muted-foreground text-sm">Local expertise & ground intelligence</p>
              </div>
              <div className="space-y-1">
                <p className="text-accent font-bold text-lg">AI-Powered</p>
                <p className="text-muted-foreground text-sm">Advanced analytical capabilities</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Hero */}
          <div className="hidden md:block relative">
            <div className="relative">
              {/* Floating Card */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-lg blur-3xl" />

              <div className="relative aspect-square rounded-2xl overflow-hidden border border-accent/20 shadow-2xl">
                <img
                  src="/images/briefing-room-hero.png"
                  alt="Intelligence Analysis"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur border border-accent/30 rounded-lg p-4 space-y-2">
                  <p className="text-xs text-muted-foreground">ANALYSIS COVERAGE</p>
                  <p className="text-accent font-bold text-lg">54 African Nations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-accent rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Cards */}
      <section id="services" className="py-24 bg-card/20 border-t border-border/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #D4A574 0%, transparent 50%), radial-gradient(circle at 80% 80%, #4A9FBF 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="mb-20 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-accent text-xs font-bold tracking-widest">
                CORE COMPETENCIES
              </p>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Strategic Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive intelligence solutions tailored to your geopolitical
              risk management needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Geopolitical Risk Analysis",
                description:
                  "Deep-dive analysis of China-Africa security dynamics, regional conflicts, and strategic implications for your business operations.",
                color: "from-accent/20 to-transparent",
              },
              {
                icon: Shield,
                title: "Corporate Due Diligence",
                description:
                  "Comprehensive security assessments for investments and operations across Africa with focus on China-related factors.",
                color: "from-blue-500/20 to-transparent",
              },
              {
                icon: TrendingUp,
                title: "Strategic Advisory",
                description:
                  "Tailored briefings and strategic recommendations for navigating complex geopolitical landscapes.",
                color: "from-cyan-500/20 to-transparent",
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl border border-border/30 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
                >
                  {/* Card Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Card Content */}
                  <div className="relative p-8 space-y-6 bg-background/40 backdrop-blur group-hover:bg-background/60 transition-colors duration-300">
                    <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-playfair text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Briefing Room Section - Featured Content */}
      <section id="briefing" className="py-24 border-t border-border/30 relative">
        <div className="container">
          {/* Section Header */}
          <div className="mb-16 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-accent text-xs font-bold tracking-widest">
                LATEST INSIGHTS
              </p>
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold">
              The Briefing Room
            </h2>
          </div>

          {/* Featured Article */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 group">
              <div className="relative overflow-hidden rounded-xl border border-border/30 hover:border-accent/50 transition-all duration-300 h-full">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src="/images/services-accent.png"
                    alt="Featured Analysis"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <p className="text-accent text-xs font-bold tracking-widest">
                      FEATURED ANALYSIS
                    </p>
                    <h3 className="font-playfair text-3xl font-bold leading-tight">
                      DRC-Rwanda Peace Deal: Reshaping Africa's Critical
                      Minerals Supply Chain
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      The US-brokered peace agreement represents more than
                      conflict resolution. It's a strategic play for control of
                      70% of the world's cobalt reserves.
                    </p>
                    <button className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all text-sm font-bold mt-4">
                      Read Full Analysis <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              {[
                { label: "Countries Analyzed", value: "54" },
                { label: "Active Conflicts", value: "12" },
                { label: "Trade Routes Monitored", value: "8" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border/30 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <p className="text-muted-foreground text-sm mb-2">
                    {stat.label}
                  </p>
                  <p className="font-playfair text-4xl font-bold text-accent">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "China's Global Security Initiative in Africa",
                date: "Dec 2024",
                category: "Policy",
              },
              {
                title: "The Lobito Corridor: Infrastructure & Strategic Competition",
                date: "Nov 2024",
                category: "Infrastructure",
              },
              {
                title: "Regional Military Cooperation: New Alliances Forming",
                date: "Oct 2024",
                category: "Military",
              },
            ].map((article, idx) => (
              <div
                key={idx}
                className="group bg-card border border-border/30 rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-muted-foreground text-xs font-semibold">
                      {article.date}
                    </p>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h4 className="font-playfair text-lg font-bold group-hover:text-accent transition-colors duration-300 leading-tight">
                    {article.title}
                  </h4>
                  <button className="inline-flex items-center gap-2 text-accent text-sm font-bold group-hover:gap-3 transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Read <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 border-2 border-accent/30 hover:border-accent text-foreground hover:text-accent font-bold rounded-lg transition-all duration-300 hover:bg-accent/5 inline-flex items-center gap-2">
              View All Articles <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-card/20 border-t border-border/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  <p className="text-accent text-xs font-bold tracking-widest">
                    ABOUT US
                  </p>
                </div>
                <h2 className="font-playfair text-5xl md:text-6xl font-bold">
                  Strategic Intelligence from the Ground
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Founded in Kenya, Defence Africa combines geopolitical expertise
                with advanced AI analysis to provide unparalleled insights into
                China-Africa security dynamics. Our team of analysts, security
                professionals, and regional experts delivers actionable
                intelligence for investment managers, corporate security
                directors, and policy makers.
              </p>

              <div className="space-y-4 pt-6">
                {[
                  "Deep local expertise across African regions",
                  "AI-powered geopolitical analysis",
                  "Real-time monitoring of security developments",
                  "Tailored briefings for your specific needs",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent-foreground text-xs font-bold">
                        ✓
                      </span>
                    </div>
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
                <div className="text-center space-y-6 p-8">
                  <Zap className="w-16 h-16 text-accent mx-auto" />
                  <div className="space-y-2">
                    <p className="text-accent text-sm font-bold tracking-widest">
                      INTELLIGENCE-DRIVEN
                    </p>
                    <p className="font-playfair text-4xl font-bold">
                      Strategic Clarity
                    </p>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Cutting-edge analysis for complex geopolitical challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, #D4A574 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-accent text-xs font-bold tracking-widest">
                GET IN TOUCH
              </p>
              <div className="w-1 h-6 bg-accent rounded-full" />
            </div>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Schedule Your Strategic Briefing
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Contact Defence Africa to discuss your geopolitical risk
              assessment and security intelligence needs.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <div className="bg-card border border-border/30 rounded-lg p-8 space-y-4 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <Mail className="w-8 h-8 text-accent" />
              <h3 className="font-playfair text-xl font-bold">Email</h3>
              <p className="text-muted-foreground">
                For inquiries and briefing requests:
              </p>
              <a
                href="mailto:briefings@defence.africa"
                className="text-accent hover:text-accent/80 font-bold transition-colors inline-block"
              >
                briefings@defence.africa
              </a>
            </div>

            <div className="bg-card border border-border/30 rounded-lg p-8 space-y-4 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
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
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-card border border-border/30 rounded-xl p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Name</label>
                  <input
                    type="text"
                    className="w-full bg-background border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <input
                    type="email"
                    className="w-full bg-background border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Organization</label>
                <input
                  type="text"
                  className="w-full bg-background border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your organization"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border/30 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your intelligence needs..."
                />
              </div>

              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/20">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-sm">
                    DA
                  </span>
                </div>
                <span className="font-playfair font-bold text-lg">
                  Defence Africa
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Strategic intelligence on China-Africa security dynamics
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Navigation</h4>
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
                    Analysis
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

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Contact</h4>
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

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm">Follow</h4>
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

          {/* Copyright */}
          <div className="border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
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
