import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
  title: "Direct Sales Executive (DSE)",
  company: "I&M Bank Kenya",
  period: "Jun 2026 – Present",
  location: "Nairobi, Kenya",
  description: [
    "Acquiring new customers and promoting I&M Bank's retail banking products, including accounts, loans, and digital banking solutions.",
    "Building and maintaining strong customer relationships through consultative financial advisory services.",
    "Ensuring compliance with KYC, AML, and regulatory requirements during customer onboarding and account management.",
    "Driving sales growth by identifying customer needs, cross-selling banking products, and consistently achieving sales targets.",
    "Collaborating with branch teams to deliver exceptional customer experiences and expand the bank's market presence.",
  ],
  current: true,
},
  {
    title: "IBM Solutions Reseller -",
    company: "Zangismart Technologies - IBM Business Partner",
    period: "jan, 2026 – May, 2026",
    location: "Nairobi, Kenya",
    description: [
      "Supporting enterprise customers in identifying digital transformation opportunities using IBM technologies.",
      "Positioning IBM AI, Security, Automation, Integration, and Hybrid Cloud solutions based on business requirements.",
      "Conducting customer discovery sessions and collaborating with IBM technical teams during solution design.",
      "Developing enterprise proposals, demonstrations, and solution presentations.",
    ],
    current: false,
  },

  {
    title: "Hackathon Software Engineer",
    company: "Next2Exit Hackathon 2025 – UNITPAY Africa",
    period: "Aug 2025 (1 Month)",
    location: "Nairobi, Kenya",
    description: [
      "Participated in the Next2Exit 2025 Hackathon, developing UNITPAY, a digital payment platform addressing Africa's fragmented currency and cross-border payment challenges.",
      "Designed AI-assisted workflow automation to eliminate repetitive operational tasks and improve productivity.",
      "Integrated AI tools to automate documentation, customer support workflows, and development processes.",
      "Collaborated with a multidisciplinary team to design scalable fintech solutions focused on seamless cross-border transactions.",
      "Presented the solution to judges, demonstrating the role of AI and automation in accelerating financial inclusion across Africa.",
    ],
    current: false,
  },
  {
  title: "AI Workflow & Automation Developer",
  company: "Freelance / Consultant",
  period: "2024 – Present",
  location: "Remote / Nairobi",
  description: [
    "Designed AI-powered customer support assistants that automatically respond to common enquiries, generate ticket summaries, and escalate complex issues to human agents.",
    "Developed AI-assisted document processing workflows to extract, classify, and summarize information from invoices, contracts, and policy documents using Large Language Models (LLMs).",
    "Built workflow automations integrating REST APIs, webhooks, Google Workspace, Microsoft 365, Slack, and CRM platforms to eliminate repetitive manual tasks.",
    "Created reusable prompt libraries and AI agents using ChatGPT, Claude, and Gemini for report writing, proposal generation, email drafting, and technical documentation.",
    "Automated software development workflows including code generation, unit test creation, API documentation, release notes, and GitHub pull request summaries.",
    "Designed AI-powered knowledge bases that convert organizational SOPs and manuals into searchable assistants for employees.",
    "Implemented secure authentication, API key management, encryption, and responsible AI practices while integrating enterprise applications.",
  ],
  current: false,
},

  {
    title: "Full-Stack Software Developer",
    company: "Freelance / Self-Employed",
    period: "2023 – Present",
    location: "Remote",
    description: [
      "Developing scalable web applications using React, TypeScript, Python, Node.js, and PostgreSQL.",
      "Building RESTful APIs and integrating OpenAI APIs, M-Pesa Daraja API, and third-party platforms.",
      "Deploying applications using Docker, GitHub Actions, and CI/CD workflows.",
      "Designing secure authentication systems and cloud-ready architectures.",
    ],
    current: true,
  },
  {
    title: "Policy Sales & Financial Advisor",
    company: "Old Mutual Kenya",
    period: "Jan 2025 – Jun 2025",
    location: "Bomet / Nairobi",
    description: [
      "Advised clients on insurance, investment, and wealth management solutions.",
      "Delivered financial planning while maintaining compliance with KYC and AML regulations.",
      "Maintained digital customer records and achieved sales targets through consultative selling.",
    ],
    current: false,
  },
  {
    title: "ICT Systems Administrator",
    company: "Longisa County Referral Hospital",
    period: "2021 – 2023",
    location: "Bomet County",
    description: [
      "Managed ICT infrastructure, Windows/Linux servers, backups, and user administration.",
      "Maintained Hospital Management Information Systems and enterprise databases.",
      "Diagnosed and resolved software, hardware, and network incidents.",
      "Performed preventive maintenance, documentation, and ICT asset management.",
      "Provided Level 1 and Level 2 technical support.",
    ],
    current: false,
  },
  {
    title: "Direct Sales Representative",
    company: "National Bank of Kenya",
    period: "2018 – 2019",
    location: "Nairobi",
    description: [
      "Sold retail banking products while ensuring KYC and AML compliance.",
      "Acquired new customers and maintained long-term client relationships.",
      "Promoted digital banking products and consistently achieved sales targets.",
    ],
    current: false,
  },
  {
    title: "ICT Assistant Officer",
    company: "County Government of Bomet",
    period: "2016 – 2018",
    location: "Bomet County",
    description: [
      "Supported enterprise ICT infrastructure including LAN/WAN networks and servers.",
      "Performed system backups, preventive maintenance, and infrastructure monitoring.",
      "Maintained ICT inventories and provided first-line technical support.",
      "Supported deployment of county information systems.",
    ],
    current: false,
  },
  {
    title: "Technical Support Intern",
    company: "Kenya Wildlife Service (KWS)",
    period: "2013",
    location: "Kenya",
    description: [
      "Installed and configured computer hardware and software.",
      "Provided network troubleshooting and end-user support.",
      "Maintained ICT equipment inventory and documentation.",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Career Journey
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Professional Experience
          </h2>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Over seven years of experience spanning AI Workflow Automation,
            Enterprise Software Development, ICT Systems Administration,
            Enterprise Technology Sales, Financial Services, and Digital
            Transformation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-card border-2 border-primary md:-translate-x-1/2 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50"></span>
                  )}
                </div>

                {/* Card */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300">

                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-primary">
                        {exp.period}
                      </span>

                      {exp.current && (
                        <span className="px-2 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Building2 className="w-4 h-4" />
                      {exp.company}
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;