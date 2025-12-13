import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import jsPDF from "jspdf";

const technicalSkills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Flask",
  "Docker",
  "Postgres",
  "MySQL",
  "SQL",
  "Tailwind CSS",
  "IoT",
  "GNSS",
  "MQTT",
  "TCP/IP",
  "VPN",
];

const Hero: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(22);
    doc.text("Kipngetich Kosgei", 20, y);
    y += 10;

    doc.setFontSize(14);
    doc.text(
      "Software Engineer • Network Engineering Specialist • IT Systems Support Expert",
      20,
      y
    );
    y += 10;

    doc.setFontSize(12);
    const summary = `
Software Engineer specializing in full-stack development with hands-on experience in
telecommunication systems and network infrastructure. Proficient in building scalable web applications using React, TypeScript, Node.js, and Python/Flask, while integrating reliable and secure data pipelines. Experienced in leveraging cloud services and networking protocols (VPN, TCP/IP) to enhance system performance, resilience, and real-time operations.
`;
    doc.text(summary, 20, y, { maxWidth: 170 });
    y += 40;

    doc.setFontSize(14);
    doc.text("Skills & Technologies", 20, y);
    y += 8;
    doc.setFontSize(12);
    doc.text(technicalSkills.join(", "), 20, y, { maxWidth: 170 });
    y += 15;

    doc.setFontSize(14);
    doc.text("Work Experience", 20, y);
    y += 8;
    doc.setFontSize(12);
    const experience = `
2025 – Present: Software Development & Network Support Intern, National Treasury – ICT Directorate
- Development of internal digital systems using Python and JavaScript
- Supporting network operations including LAN/WAN setups
- Contributing to cybersecurity and endpoint monitoring

Jan 2025 – June 2025: Policy Sales / Financial Advisor, Old Mutual
- Sold insurance & financial policies, ensuring KYC/AML compliance
- Advised clients on financial planning & risk management

2025: Software Developer / QA Engineer, Tech With Brands (TWB)
- Built secure full-stack applications with monitoring and automation
- Conducted vulnerability assessments and developed automated scripts
- Provided ICT operational support ensuring policy compliance
`;
    doc.text(experience, 20, y, { maxWidth: 170 });
    y += 60;

    doc.setFontSize(14);
    doc.text("Projects", 20, y);
    y += 8;
    doc.setFontSize(12);
    const projects = `
- UNIT-PAY Hackathon Project: Digital transformation prototype with automated workflows & real-time updates
- Student Portal System: Academic management system with admin dashboard & SQL persistence
- E-Commerce Platform: Dynamic shopping ecosystem with secure payments & role-based authentication
- Consultancy Portfolio Website: Responsive consultancy showcase with live demo
- Microservices Architecture Demo: Modular distributed system with CI/CD & Docker
`;
    doc.text(projects, 20, y, { maxWidth: 170 });
    y += 50;

    doc.setFontSize(14);
    doc.text("Education", 20, y);
    y += 8;
    doc.setFontSize(12);
    const education = `
Mastering in Software Development, Full-Stack Engineering – Moringa School (2024 – 2025)
BSc Information Technology & Telecommunications – Kenyatta University (2010 – 2015)
`;
    doc.text(education, 20, y, { maxWidth: 170 });
    y += 30;

    doc.setFontSize(14);
    doc.text("Contact", 20, y);
    y += 8;
    doc.setFontSize(12);
    const contact = `
Phone: +254 711 211 446 / +254 703 551 240
Email: enginkipngetichkoskei@gmail.com
Location: Nairobi, Kenya
P.O. Box 20, 00100
`;
    doc.text(contact, 20, y, { maxWidth: 170 });

    doc.save("Kipngetich_Kosgei_CV.pdf");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Open to Software Development Engineering or Network Engineering Opportunities
            </span>
          </div>

          {/* Name + Photo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-4 animate-slide-up">
            <img
              src="/public/kk.jpg" // <-- Replace with your photo URL
              alt="Kipngetich Kosgei"
              className="w-32 h-32 rounded-full border-2 border-blue-500 object-cover"
            />
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Kipngetich</span>{" "}
              <span className="text-gradient">Kosgei</span>
            </h1>
          </div>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Software Engineer • Network Engineering Specialist • IT Systems support Expert
          </p>

          <p
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-6 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Software Engineer specializing in{" "}
            <span className="text-foreground">full-stack development</span> with hands-on
            experience in <span className="text-foreground">telecommunication systems</span> and{" "}
            <span className="text-foreground">network infrastructure</span>. Proficient in building
            scalable web applications using <span className="text-foreground">JavaScript/React</span>,{" "}
            <span className="text-foreground">TypeScript</span>, <span className="text-foreground">Node.js</span>, and{" "}
            <span className="text-foreground">Python/Flask</span>, while integrating reliable and
            secure data pipelines. Experienced in leveraging cloud services and networking
            protocols (VPN, TCP/IP) to enhance system performance, resilience, and real-time
            operations.
          </p>

          {/* Technical skills */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-8 animate-slide-up"
            style={{ animationDelay: "0.25s" }}
            aria-hidden
          >
            {technicalSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground hover:bg-primary/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Contact & CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="tel:+254711211446"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> +254 711 211 446
            </a>
            <a
              href="mailto:enginkipngetichkoskei@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" /> enginkipngetichkoskei@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" /> Nairobi, Kenya
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" /> Get in Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" onClick={generatePDF}>
              <Download className="w-5 h-5" /> Download CV
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a
              href="https://github.com/Engkipngetich/"
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
    </section>
  );
};

export default Hero;
