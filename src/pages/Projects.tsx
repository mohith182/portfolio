import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <Section title="Projects" subtitle="A collection of my recent work and contributions">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="flex flex-col group relative overflow-hidden animate-[fade-in-up_0.6s_ease-out]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold mb-3 text-[#0F172A] group-hover:text-[#7C3AED] transition-colors duration-200">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm text-[#64748B] leading-relaxed mb-4">
                <strong className="text-[#0F172A]">Problem:</strong> {project.description.split('.')[0]}.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow pb-4">
              <div className="mb-4">
                <p className="text-xs font-semibold text-[#0F172A] mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-[#E5E7EB] text-[#475569] bg-white/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.description.includes('Outcome') && (
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-xs text-[#64748B]">
                    <strong className="text-[#7C3AED]">Outcome:</strong> {project.description.split('Outcome')[1] || 'Improved efficiency and reliability'}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-2 pt-0">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild className="flex-1 text-xs">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <Github className="h-3.5 w-3.5" />
                    View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" asChild className="flex-1 text-xs">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}

