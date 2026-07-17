import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-10">
      <div className="container px-6">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold">
              Kipngetich <span className="text-primary">Kosgei</span>
            </h3>

            <p className="text-muted-foreground mt-2 max-w-xl">
              AI Workflow & Automation Specialist • Full-Stack Developer •
              Enterprise Solutions Consultant helping organizations automate
              business processes, build scalable software, and accelerate
              digital transformation through AI and cloud technologies.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-2 text-sm">

            <div className="flex items-center gap-2 justify-center lg:justify-end">
              <Phone className="w-4 h-4 text-primary" />
              <span>+254 711 211 446</span>
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-end">
              <Mail className="w-4 h-4 text-primary" />
              <span>enginkipngetichkoskei@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-end">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Nairobi, Kenya</span>
            </div>

          </div>

        </div>

        <div className="border-t border-border mt-8 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-muted-foreground">
              © {currentYear} Kipngetich Kosgei. All rights reserved.
            </p>

            <p className="text-sm text-center md:text-right text-muted-foreground">
              Specializing in{" "}
              <span className="text-primary font-medium">
                AI Workflow Automation
              </span>
              ,{" "}
              <span className="text-primary font-medium">
                Enterprise Solutions
              </span>
              ,{" "}
              <span className="text-primary font-medium">
                Full-Stack Development
              </span>
              ,{" "}
              <span className="text-primary font-medium">
                Technical Consulting
              </span>
              {" "}and{" "}
              <span className="text-primary font-medium">
                Digital Transformation
              </span>
              .
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;