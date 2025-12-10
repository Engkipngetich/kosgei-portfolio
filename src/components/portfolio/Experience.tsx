import { Building2, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Development & Network Support Intern",
    company: "National Treasury – ICT Directorate",
    period: "2025 – Present",
    description: [
      "Assisting in development of internal digital systems using Python and JavaScript",
      "Supporting network operations including LAN/WAN setups and user access control",
      "Participating in automation of workflows and digitization of government processes",
      "Contributing to cybersecurity activities, including endpoint monitoring",
    ],
    current: true,
  },
  {
    title: "Policy Sales / Financial Advisor",
    company: "Old Mutual",
    period: "Jan 2025 – June 2025",
    location: "Bomet / Nairobi, Kenya",
    description: [
      "Sold insurance and financial policies while ensuring strict compliance with KYC/AML standards",
      "Advised clients on financial planning, risk management, and policy selection",
      "Maintained accurate customer records and digital documentation",
      "Promoted secure digital financial products and customer awareness",
    ],
    current: false,
  },
  {
    title: "Software Developer / QA Engineer",
    company: "Tech With Brands (TWB)",
    period: "2025",
    location: "Remote / Nairobi, Kenya",
    description: [
      "Built secure full-stack applications with monitoring and automation",
      "Conducted vulnerability assessments and developed automated scripts",
      "Provided ICT operational support ensuring policy compliance",
    ],
    current: false,
  },
  {
    title: "Software & Solutions Developer",
    company: "Freelance / Consultant",
    period: "2024 – 2025",
    location: "Nairobi, Kenya",
    description: [
      "Designed cloud-based systems with encryption and secure authentication",
      "Automated log monitoring, anomaly detection, and database workflows",
      "Delivered technical documentation, process improvement, and systems architecture",
    ],
    current: false,
  },
  {
    title: "Full-Stack Software Developer",
    company: "Freelance / Self-Employed",
    period: "2023 – Present",
    description: [
      "Building and deploying full-stack applications using React and Flask",
      "Integrating RESTful APIs, authentication systems, and database architectures",
      "Designing admin dashboards, e-commerce platforms, and logistics systems",
      "Managing SQL/NoSQL databases, cloud deployment, and automated testing",
    ],
    current: true,
  },
  {
    title: "ICT System Administrator",
    company: "Longisa County Referral Hospital",
    period: "2021 – 2023",
    description: [
      "Managed daily ICT operations, user support, and network troubleshooting",
      "Implemented security protocols, backups, and routine system audits",
      "Ensured uptime of hospital management systems and digital health applications",
    ],
    current: false,
  },
  {
    title: "ICT Assistant Officer",
    company: "County Government of Bomet",
    period: "2016 – 2018",
    description: [
      "Supported county ICT infrastructure across departments",
      "Maintained LAN/WAN networks and ICT inventory",
      "Conducted user training and provided helpdesk support",
    ],
    current: false,
  },
  {
    title: "Direct Sales Representative (DSR)",
    company: "National Bank of Kenya",
    period: "2018 – 2019",
    description: [
      "Marketed and sold retail banking products to clients",
      "Guided account openings and ensured KYC compliance",
      "Achieved and exceeded sales targets through strong customer relationships",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Career</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through technology, systems administration, and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-all group">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-mono">{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm">{exp.company}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
