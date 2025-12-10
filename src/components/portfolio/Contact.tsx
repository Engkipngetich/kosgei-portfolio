import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Let's connect and discuss how I can help with your next project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <a
              href="tel:+254711211446"
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all text-center"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+254 711 211 446</p>
              <p className="text-sm text-muted-foreground">+254 703 551 240</p>
            </a>

            {/* Email */}
            <a
              href="mailto:enginkipngetichkoskei@gmail.com"
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all text-center"
            >
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground break-all">enginkipngetichkoskei@gmail.com</p>
            </a>

            {/* Location */}
            <div className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all text-center">
              <div className="p-4 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
              <p className="text-sm text-muted-foreground">P.O. Box 20, 00100</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-8 rounded-2xl border border-border bg-card/50 gradient-border">
            <h3 className="text-xl font-semibold text-foreground mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              I'm currently available for freelance work and full-time opportunities. Let's build something great together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:enginkipngetichkoskei@gmail.com">
                  <Send className="w-5 h-5" />
                  Send Message
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/eng-kipngetich-kosgei-38526278/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
