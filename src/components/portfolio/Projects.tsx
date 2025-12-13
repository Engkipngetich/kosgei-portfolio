import { ExternalLink, Github, Layers, ShoppingCart, Users, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "UNIT-PAY Hackathon Project",
    description:
      "A full digital transformation prototype built for the UNITPAY Hackathon, featuring automated data workflows, intelligent processing pipelines, advanced UI/UX enhancements, secure authentication, and real‑time transactional updates. The project focused on performance tuning, API responsiveness, and end‑to‑end reliability across integrated services.",
    tech: ["React", "Flask", "Real-time", "Authentication"],
    icon: Layers,
    link: "#",
  },
  {
    title: "Student Portal System",
    description:
      "A comprehensive academic management system enabling students to register for courses, track fee payments, view grades, access downloadable resources, and interact with announcements. The system also included an admin dashboard for managing users, updating records, running reports, and performing full CRUD operations with SQL-backed persistence.",
    tech: ["React", "Flask", "SQL", "Admin Dashboard"],
    icon: Users,
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A robust online shopping ecosystem featuring dynamic product catalogues, smart cart management, checkout flows, order confirmation pages, and secure payment integration. It also included user dashboards, role-based authentication, wishlist functionality, and optimized UI components for seamless shopping experiences.",
    tech: ["React", "Flask", "Payments", "User Auth"],
    icon: ShoppingCart,
    link: "#",
  },
  {
    title: "Consultancy Portfolio Website",
    description:
      "A polished consultancy website showcasing services, achievements, case studies, professional profiles, and contact forms. It included SEO-friendly structures, responsive layouts, lightweight animations, high-performance components, and a live demo hosted at https://sj-website-rho.vercel.app/.",
    tech: ["HTML", "CSS", "JavaScript", "SEO"],
    icon: Globe,
    link: "https://sj-website-rho.vercel.app/",
  },
  {
    title: "Microservices Architecture Demo",
    description:
      "A fully modular distributed system demonstrating microservices architecture with separate authentication, product, and order services. It featured inter-service communication, API gateway orchestration, Docker containerization, service isolation, CI/CD automation, and scalable design principles suitable for production environments.",
    tech: ["Flask", "Docker", "CI/CD", "Microservices"],
    icon: Database,
    link: "#",
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
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group relative p-8 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

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

                <div className="mt-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      Visit Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
