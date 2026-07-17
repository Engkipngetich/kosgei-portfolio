import { Code, Server, Cloud, Shield, Network, Settings, Database } from "lucide-react";

type SkillItem = {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  percent: number; // 0..100 used for progress bar
};

type SkillCategory = {
  icon: any;
  title: string;
  description: string;
  skills: SkillItem[];
};
const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "AI & Workflow Automation",
    description:
      "Building intelligent business workflows using Generative AI, prompt engineering, APIs, and automation platforms.",
    skills: [
      { name: "Prompt Engineering", level: "Advanced", percent: 90 },
      { name: "ChatGPT", level: "Advanced", percent: 95 },
      { name: "Claude AI", level: "Advanced", percent: 90 },
      { name: "Gemini AI", level: "Advanced", percent: 88 },
      { name: "Workflow Automation", level: "Advanced", percent: 92 },
      { name: "REST APIs", level: "Advanced", percent: 90 },
      { name: "Webhooks", level: "Advanced", percent: 85 },
    ],
  },

  {
    icon: Code,
    title: "Software Engineering",
    description:
      "Developing secure, scalable enterprise applications and API-driven solutions.",
    skills: [
      { name: "React", level: "Advanced", percent: 92 },
      { name: "TypeScript", level: "Advanced", percent: 88 },
      { name: "JavaScript", level: "Advanced", percent: 92 },
      { name: "Python", level: "Advanced", percent: 90 },
      { name: "Node.js", level: "Advanced", percent: 88 },
      { name: "Flask", level: "Advanced", percent: 85 },
      { name: "FastAPI", level: "Intermediate", percent: 80 },
      { name: "Git & GitHub", level: "Advanced", percent: 90 },
    ],
  },

  {
    icon: Database,
    title: "Databases & Integration",
    description:
      "Designing enterprise databases and integrating systems through APIs.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", percent: 88 },
      { name: "MySQL", level: "Advanced", percent: 85 },
      { name: "SQLite", level: "Advanced", percent: 90 },
      { name: "API Integration", level: "Advanced", percent: 90 },
      { name: "OpenAI API", level: "Advanced", percent: 90 },
      { name: "M-Pesa Daraja API", level: "Advanced", percent: 85 },
      { name: "JSON", level: "Advanced", percent: 92 },
    ],
  },

  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying cloud-native applications and implementing CI/CD pipelines.",
    skills: [
      { name: "Docker", level: "Advanced", percent: 88 },
      { name: "GitHub Actions", level: "Advanced", percent: 82 },
      { name: "CI/CD", level: "Advanced", percent: 85 },
      { name: "Microsoft Azure", level: "Intermediate", percent: 78 },
      { name: "AWS Fundamentals", level: "Intermediate", percent: 75 },
      { name: "Linux", level: "Advanced", percent: 88 },
      { name: "Cloud Deployment", level: "Advanced", percent: 85 },
    ],
  },

  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Applying security best practices throughout application development and infrastructure management.",
    skills: [
      { name: "IAM", level: "Advanced", percent: 82 },
      { name: "Security Hardening", level: "Advanced", percent: 84 },
      { name: "Vulnerability Assessment", level: "Intermediate", percent: 78 },
      { name: "Network Security", level: "Advanced", percent: 82 },
      { name: "Endpoint Protection", level: "Advanced", percent: 85 },
      { name: "Backup & Recovery", level: "Advanced", percent: 88 },
      { name: "ISO 27001", level: "Intermediate", percent: 75 },
    ],
  },

  {
    icon: Network,
    title: "Enterprise Infrastructure",
    description:
      "Managing enterprise networks, servers, and digital transformation projects.",
    skills: [
      { name: "Windows Server", level: "Advanced", percent: 85 },
      { name: "Linux Administration", level: "Advanced", percent: 90 },
      { name: "LAN/WAN", level: "Advanced", percent: 88 },
      { name: "TCP/IP", level: "Advanced", percent: 90 },
      { name: "DNS & DHCP", level: "Advanced", percent: 85 },
      { name: "VPN", level: "Advanced", percent: 82 },
      { name: "Fiber Networks", level: "Intermediate", percent: 75 },
    ],
  },

  {
    icon: Server,
    title: "Enterprise Solutions & Technical Consulting",
    description:
      "Helping organizations adopt enterprise technologies through solution consulting and pre-sales engagement.",
    skills: [
      { name: "IBM Solutions", level: "Intermediate", percent: 82 },
      { name: "Solution Discovery", level: "Advanced", percent: 85 },
      { name: "Technical Presentations", level: "Advanced", percent: 90 },
      { name: "Requirements Gathering", level: "Advanced", percent: 88 },
      { name: "Business Process Analysis", level: "Advanced", percent: 88 },
      { name: "Digital Transformation", level: "Advanced", percent: 85 },
      { name: "Stakeholder Management", level: "Advanced", percent: 88 },
    ],
  },

  {
    icon: Settings,
    title: "Banking & Business Solutions",
    description:
      "Experience in enterprise banking, financial advisory, customer engagement, and business technology solutions.",
    skills: [
      { name: "Retail Banking", level: "Advanced", percent: 88 },
      { name: "Financial Advisory", level: "Advanced", percent: 85 },
      { name: "KYC / AML", level: "Advanced", percent: 90 },
      { name: "Customer Relationship Management", level: "Advanced", percent: 90 },
      { name: "Consultative Selling", level: "Advanced", percent: 88 },
      { name: "Enterprise Sales", level: "Advanced", percent: 86 },
      { name: "Solution Selling", level: "Advanced", percent: 88 },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, system administration, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{category.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 max-w-sm">{category.description}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="">
                      <div className="mb-1">
                        <span className="text-xs font-medium">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
