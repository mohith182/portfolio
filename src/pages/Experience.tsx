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
            className="group relative overflow-hidden animate-[fade-in-up_0.6s_ease-out] border-[#10B981]/20 bg-[#0a0a0a]/60 backdrop-blur-sm hover:border-[#34D399]/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-300"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl md:text-3xl mb-3 font-bold bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent group-hover:from-[#34D399] group-hover:via-[#6EE7B7] group-hover:to-[#A7F3D0] transition-all duration-500">
                    {exp.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building2 className="h-5 w-5 text-[#10B981]" />
                    <span className="font-semibold text-foreground">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#10B981]/20 to-[#34D399]/20 border border-[#10B981]/30">
                      <Calendar className="h-4 w-4 text-[#10B981]" />
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
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#34D399]/20 to-[#6EE7B7]/20 border border-[#34D399]/30">
                      <MapPin className="h-4 w-4 text-[#34D399]" />
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
                    <span className="text-[#10B981] mt-1.5 text-xl font-bold">•</span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#10B981]/10">
                {exp.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary"
                    className="bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 text-[#10B981] border-[#10B981]/30 hover:border-[#34D399] hover:bg-gradient-to-r hover:from-[#10B981]/20 hover:to-[#34D399]/20 hover:scale-105 transition-all duration-300"
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

