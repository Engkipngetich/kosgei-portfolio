import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            <span className="text-foreground">Kipngetich</span>{" "}
            <span className="text-gradient">Kosgei</span>
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Full-Stack Developer & IT Systems Specialist
          </p>

          {/* Summary */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Versatile developer with expertise in <span className="text-foreground">React</span>, <span className="text-foreground">Python</span>, and <span className="text-foreground">Flask</span>. 
            Passionate about solving real-world problems through clean, efficient, and maintainable code.
          </p>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="tel:+254711211446" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +254 711 211 446
            </a>
            <a href="mailto:enginkipngetichkoskei@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              enginkipngetichkoskei@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Nairobi, Kenya
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
