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
    title: "Software Development",
    description:
      "Designing and implementing web applications with a focus on maintainability, performance, and developer experience.",
    skills: [
      { name: "Python", level: "Advanced", percent: 90 },
      { name: "JavaScript", level: "Advanced", percent: 90 },
      { name: "TypeScript", level: "Advanced", percent: 85 },
      { name: "React", level: "Advanced", percent: 90 },
      { name: "Flask", level: "Intermediate", percent: 70 },
      { name: "HTML/CSS", level: "Advanced", percent: 90 },
      { name: "Tailwind CSS", level: "Advanced", percent: 85 },
    ],
  },
  {
    icon: Server,
    title: "System Administration",
    description:
      "Managing servers and infrastructure: provisioning, monitoring, backup/recovery, virtualization, and automation to ensure high availability and operational excellence.",
    skills: [
      { name: "Linux", level: "Advanced", percent: 88 },
      { name: "Windows Server", level: "Intermediate", percent: 65 },
      { name: "Automation (bash/Ansible)", level: "Advanced", percent: 78 },
      { name: "Virtualization (VMware/Hyper-V)", level: "Intermediate", percent: 70 },
      { name: "Backups & Recovery", level: "Advanced", percent: 82 },
      { name: "Monitoring & Alerting (Prometheus/ELK)", level: "Intermediate", percent: 72 },
      { name: "Troubleshooting & Incident Response", level: "Advanced", percent: 85 },
    ],
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "Architecture, deployment and troubleshooting of LAN/WAN environments, secure connectivity, and fiber/cabling operations for enterprise networks.",
    skills: [
      { name: "TCP/IP", level: "Advanced", percent: 85 },
      { name: "DNS & DHCP", level: "Advanced", percent: 80 },
      { name: "LAN/WAN design", level: "Advanced", percent: 82 },
      { name: "Fiber splicing & cabling", level: "Intermediate", percent: 68 },
      { name: "VPN & Remote Access", level: "Intermediate", percent: 70 },
      { name: "Network Security (ACLs/Firewalls)", level: "Intermediate", percent: 72 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Deploying and operating applications in cloud platforms with CI/CD and managed services.",
    skills: [
      { name: "Microsoft Azure", level: "Intermediate", percent: 70 },
      { name: "Office 365", level: "Intermediate", percent: 65 },
      { name: "Cloud Deployment", level: "Intermediate", percent: 70 },
      { name: "CI/CD", level: "Intermediate", percent: 75 },
    ],
  },
  {
    icon: Settings,
    title: "Operations",
    description: "Operational practices including ticketing, documentation, and runbooks to keep teams effective.",
    skills: [
      { name: "Ticketing Systems", level: "Advanced", percent: 85 },
      { name: "Documentation", level: "Advanced", percent: 90 },
      { name: "IT Workflows", level: "Advanced", percent: 85 },
      { name: "Helpdesk", level: "Intermediate", percent: 70 },
    ],
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Cybersecurity fundamentals with hands-on experience in threat detection, access control, vulnerability management and incident response.",
    skills: [
      { name: "Security Protocols & Hardening", level: "Intermediate", percent: 72 },
      { name: "Vulnerability Assessment", level: "Intermediate", percent: 68 },
      { name: "SIEM / Log Monitoring", level: "Intermediate", percent: 65 },
      { name: "Endpoint Protection & Backup", level: "Advanced", percent: 80 },
      { name: "Incident Response", level: "Intermediate", percent: 70 },
    ],
  },
  {
    icon: Settings,
    title: "ICT Support & General Helpdesk",
    description:
      "Day-to-day technical support for end-users and business systems: hardware troubleshooting, desktop support, user onboarding, and asset management.",
    skills: [
      { name: "Desktop & Mobile Support", level: "Advanced", percent: 88 },
      { name: "Hardware Troubleshooting", level: "Advanced", percent: 85 },
      { name: "User Training & Documentation", level: "Advanced", percent: 90 },
      { name: "Asset & Patch Management", level: "Intermediate", percent: 72 },
      { name: "Remote Support Tools (RDP/AnyDesk)", level: "Advanced", percent: 80 },
    ],
  },
  {
    icon: Database,
    title: "Banking Solutions",
    description:
      "Experience delivering banking technology solutions across sales, retail banking operations and loan servicing — integrating core banking, POS, and reconciliation workflows with a focus on regulatory compliance and customer experience.",
    skills: [
      { name: "Retail Banking Workflows", level: "Advanced", percent: 82 },
      { name: "Loan Origination & Servicing", level: "Intermediate", percent: 70 },
      { name: "Sales Enablement for Banking Products", level: "Advanced", percent: 80 },
      { name: "Core Banking Integration", level: "Intermediate", percent: 72 },
      { name: "POS / Merchant Solutions", level: "Intermediate", percent: 68 },
      { name: "Reconciliation & Reporting", level: "Advanced", percent: 78 },
      { name: "Regulatory Compliance (KYC/AML)", level: "Intermediate", percent: 70 },
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
