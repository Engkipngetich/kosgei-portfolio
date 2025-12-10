import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Mastering in Software Development",
    specialization: "Full-Stack Engineering",
    institution: "Moringa School",
    period: "2024 – 2025",
    highlight: "Full-Stack Engineering",
  },
  {
    degree: "Bachelor of Science",
    specialization: "Information Technology & Telecommunications",
    institution: "Kenyatta University",
    period: "2010 – 2015",
    highlight: "Second Class Upper Division",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in technology and continuous professional development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.specialization}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                </div>

                <div className="md:text-right space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{edu.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
