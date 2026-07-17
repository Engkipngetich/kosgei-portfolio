import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import jsPDF from "jspdf";

const technicalSkills = [
  "Software Engineering",
  "AI Workflow Automation",
  "Prompt Engineering",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "Flask",
  "REST APIs",
  "OpenAI API",
  "Webhooks",
  "Zapier",
  "Make",
  "Docker",
  "GitHub",
  "PostgreSQL",
  "MySQL",
  "Linux",
  "IBM Solutions",
  "Cloud",
  "CI/CD",
  "Cybersecurity",
];
const Hero: React.FC = () => {
  const generatePDF = () => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  let y = margin;
  const lineGap = 6;

  const addPageIfNeeded = (space = 10) => {
    if (y + space > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const writeText = (text: string, options?: { fontSize?: number; maxWidth?: number }) => {
    const lines = doc.splitTextToSize(text, options?.maxWidth || 170);
    lines.forEach((line) => {
      addPageIfNeeded(lineGap);
      if (options?.fontSize) doc.setFontSize(options.fontSize);
      doc.text(line, margin, y);
      y += lineGap;
    });
  };

  // ===== HEADER =====
doc.setFontSize(22);
doc.text("KIPNGETICH KOSGEI", margin, y);
y += 10;

doc.setFontSize(12);
doc.text(
  "AI Workflow & Automation Specialist | Full-Stack Software Developer | Enterprise Solutions Consultant",
  margin,
  y
);
y += lineGap + 6;

doc.setFontSize(11);
writeText(
`Phone: +254 711 211 446
Email: enginkipngetichkoskei@gmail.com
Location: Nairobi, Kenya
LinkedIn: linkedin.com/in/eng-kipngetich-kosgei-38526278
GitHub: github.com/Engkipngetich`
);

y += 10;

// ===== SUMMARY =====
doc.setFontSize(14);
writeText("Professional Summary");

doc.setFontSize(11);
writeText(
`AI Workflow & Automation Specialist, Full-Stack Software Developer, and Enterprise Solutions Consultant with over 7 years of experience delivering digital transformation solutions across banking, healthcare, government, and enterprise environments.

Experienced in designing AI-powered workflow automations, enterprise software solutions, REST API integrations, cloud-native applications, and technical consulting. Skilled at translating complex technical concepts into business value, enabling organizations to improve efficiency through intelligent automation, modern software development, and enterprise technologies.

Passionate about Generative AI, workflow optimization, cloud technologies, cybersecurity, and enterprise solution architecture.`
);

y += 10;

// ===== SKILLS =====
doc.setFontSize(14);
writeText("Core Competencies");

doc.setFontSize(11);
writeText(
`• AI Workflow Automation & Prompt Engineering
• Enterprise Software Development (React, TypeScript, Node.js, Python, Flask, FastAPI)
• REST APIs, Webhooks & Enterprise Systems Integration
• Generative AI (ChatGPT, Claude, Gemini, OpenAI APIs)
• Cloud Computing, Docker, GitHub Actions & CI/CD
• PostgreSQL, MySQL & Database Design
• Linux & Windows Server Administration
• Enterprise Networking (LAN/WAN, TCP/IP, VPN, DNS & DHCP)
• IBM Enterprise Solutions & Technical Consulting
• Banking Technology, Digital Transformation & Solution Selling
• Cybersecurity, IAM, Security Hardening & ISO 27001 Fundamentals`
);

y += 10;

  // ===== WORK EXPERIENCE =====
  doc.setFontSize(14);
  writeText("Work Experience");
  doc.setFontSize(11);
  const experiences = [
    {
      title: "National Treasury – ICT Directorate (2025 – Present)",
      role: "Software Engineer & Network Support",
      details: [
        "Develop and support internal digital systems using Python and JavaScript",
        "Provide LAN/WAN network support, troubleshooting, and monitoring",
        "Assist in cybersecurity controls, endpoint monitoring, and system hardening",
        "Support users and ensure reliability of critical government ICT infrastructure",
      ],
    },
    {
      title: "Self-Employed / Freelance (2023 – Present)",
      role: "Full Stack Software Developer",
      details: [
        "Designed, developed, and deployed full-stack applications using React and Python/Flask",
        "Integrated RESTful APIs, authentication, and database solutions",
        "Delivered custom systems for e-commerce, logistics, and admin dashboards",
        "Applied Git version control and agile development practices",
      ],
    },
    {
      title: "Longisa County Referral Hospital (2021 – 2023)",
      role: "ICT System Administrator",
      details: [
        "Managed ICT operations, user support, and network troubleshooting",
        "Implemented security controls, backups, and routine system audits",
        "Supported hospital management systems and ensured system uptime",
      ],
    },
    {
      title: "County Government of Bomet (2016 – 2018)",
      role: "ICT Assistant Officer",
      details: [
        "Supported ICT projects and departmental systems",
        "Maintained LAN/WAN infrastructure and ICT equipment",
        "Provided user training and helpdesk support",
      ],
    },
    {
      title: "National Bank of Kenya (2018 – 2019)",
      role: "Direct Sales Representative",
      details: [
        "Marketed retail banking products and guided customer onboarding",
        "Ensured KYC compliance and built strong client relationships",
      ],
    },
  ];

  experiences.forEach((exp) => {
    writeText(exp.title, { fontSize: 12 });
    writeText(exp.role, { fontSize: 11 });
    exp.details.forEach((line) => {
      writeText("• " + line);
    });
    y += 5;
  });

  // ===== EDUCATION & TRAINING =====
  doc.setFontSize(14);
  writeText("Education & Training");
  doc.setFontSize(11);
  const education = [
    "BSc Telecommunications & Information Technology – Kenyatta University, Kenya",
    "Software Development Engineering (SDE) – Moringa School, Kenya",
    "AI / Machine Learning & LLM Training – Moringa School, Kenya",
    "Cyber Security Training – IBM–MEA University",
    "AML & CTF Certification – National Bank of Kenya",
    "Oracle DBA 21c: Master Database Administration Specialization – Coursera",
    "Entrepreneurship & Business Development – CyberShujaa Program",
  ];
  education.forEach((item) => writeText("• " + item));

  // ===== REFERENCES =====
  doc.setFontSize(14);
  writeText("References");
  doc.setFontSize(11);
  writeText(
    `Duncan Rotich
Manager, M-Pesa Africa
Phone: +254 713 980 960
Email: dunkip.rotich@gmail.com

Victor Mutai
Infrastructure Lead, Safaricom
Phone: +254 724 418 625
Email: victor.mutai@safaricompl.co.ke`
  );

  //doc.save("Kipngetich_Kosgei_CV.pdf");
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
  src="/kk.jpg"
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
  AI Workflow & Automation Specialist • Full-Stack Software Engineer • Enterprise Solutions Consultant
</p>

<p
  className="text-base md:text-lg text-muted-foreground/80 max-w-5xl mx-auto mb-6 leading-relaxed animate-slide-up"
  style={{ animationDelay: "0.2s" }}
>
  Passionate <span className="text-foreground font-semibold">Software Engineer</span> with
  over <span className="text-foreground font-semibold">7 years of professional experience</span>
  building scalable software solutions, AI-powered workflow automations, and enterprise
  applications. Experienced in developing modern web applications using
  <span className="text-foreground"> React</span>,
  <span className="text-foreground"> TypeScript</span>,
  <span className="text-foreground"> Node.js</span>,
  <span className="text-foreground"> Python</span>, and
  <span className="text-foreground"> Flask</span>, while integrating
  <span className="text-foreground"> REST APIs</span>,
  <span className="text-foreground"> cloud technologies</span>, and
  <span className="text-foreground"> AI-powered business workflows</span>.
  Participated in the
  <span className="text-foreground font-semibold"> WALUMO Hackathon</span> and
  <span className="text-foreground font-semibold"> Next2Exit 2025 Hackathon</span>,
  where our teams developed
  <span className="text-foreground"> UNITPAY</span>, an AI-assisted fintech platform addressing
  Africa's fragmented payment ecosystem using
  <span className="text-foreground"> Everyday Series AI</span> to automate repetitive business
  processes, accelerate software development, and improve operational efficiency.
  My experience also includes enterprise technology consulting, CRM systems,
  retail banking operations, cybersecurity, and enterprise networking,
  enabling me to bridge technology with business outcomes.
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
          <div className="flex justify-center gap-4 mt-12 aDonimate-fade-in" style={{ animationDelay: "0.6s" }}>
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
