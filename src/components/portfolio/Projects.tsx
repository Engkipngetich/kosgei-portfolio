import { ExternalLink, Github, Layers, ShoppingCart, Users, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "UNITPAU Hackathon Project",
    description: "Innovative digital solution involving automation, data processing, and UI/UX upgrades. Included authentication, real-time updates, and performance optimization.",
    tech: ["React", "Flask", "Real-time", "Authentication"],
    icon: Layers,
  },
  {
    title: "Student Portal System",
    description: "Portal for course registration, fee tracking, academic records, and admin dashboards. Integrated login systems, CRUD features, and SQL-based persistence.",
    tech: ["React", "Flask", "SQL", "Admin Dashboard"],
    icon: Users,
  },
  {
    title: "E-Commerce Platform",
    description: "Complete system supporting product listings, cart, checkout, payment workflows, and user profiles with secure authentication.",
    tech: ["React", "Flask", "Payments", "User Auth"],
    icon: ShoppingCart,
  },
  {
    title: "Consultancy Portfolio Website",
    description: "Modern consultancy website with service listings, case studies, forms, and SEO optimization using modern web technologies.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    icon: Globe,
  },
  {
    title: "Microservices Architecture Demo",
    description: "Multiple independent services (auth, products, orders) using Flask microservices, API gateway approach, containerization, and CI/CD concepts.",
    tech: ["Flask", "Docker", "CI/CD", "Microservices"],
    icon: Database,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.08)_0%,_transparent_50%)]" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing full-stack development capabilities and problem-solving skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <project.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
