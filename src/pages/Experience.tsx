import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio";
import { Calendar, MapPin, Building2 } from "lucide-react";

export function Experience() {
  return (
    <Section title="Experience" subtitle="My professional journey and internships">
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={exp.id}
            className="group relative overflow-hidden animate-[fade-in-up_0.6s_ease-out] border-white/10 bg-[#0a0a0a]/60 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl mb-3 font-bold text-[#E0E0E0] group-hover:text-white transition-colors duration-300">
                    {exp.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building2 className="h-5 w-5 text-[#E0E0E0]/70" />
                    <span className="font-semibold text-foreground">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar className="h-4 w-4 text-[#E0E0E0]/70" />
                      <span>
                        {exp.startDate
                          ? `${new Date(exp.startDate).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })} - `
                          : ""}
                        {exp.endDate === "Present"
                          ? "Present"
                          : new Date(exp.endDate).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <MapPin className="h-4 w-4 text-[#E0E0E0]/70" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#E0E0E0]/70 mt-1.5 text-xl font-bold">•</span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline"
                    className="bg-white/5 text-[#E0E0E0]/80 border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

