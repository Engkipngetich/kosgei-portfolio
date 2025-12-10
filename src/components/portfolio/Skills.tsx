import { Code, Server, Cloud, Shield, Network, Settings } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Software Development",
    skills: ["Python", "JavaScript", "React", "Flask", "HTML/CSS", "TypeScript"],
  },
  {
    icon: Server,
    title: "System Administration",
    skills: ["Windows Server", "Linux", "Automation", "Maintenance", "Troubleshooting"],
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["TCP/IP", "DNS", "WAN/LAN", "VPN Configuration", "Network Security"],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    skills: ["Microsoft Azure", "Office 365", "Cloud Deployment", "CI/CD"],
  },
  {
    icon: Settings,
    title: "Operations",
    skills: ["Ticketing Systems", "Documentation", "IT Workflows", "Helpdesk"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Security Protocols", "Backups", "Audits", "Access Control", "Endpoint Monitoring"],
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
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
