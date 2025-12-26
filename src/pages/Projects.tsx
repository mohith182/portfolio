import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

// Function to highlight keywords in project descriptions
const highlightKeywords = (text: string, keywords: string[]) => {
  let highlightedText = text;
  // Sort keywords by length (longest first) to handle multi-word phrases correctly
  const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length);
  
  sortedKeywords.forEach((keyword) => {
    // Escape special regex characters
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Use word boundaries for single words, but allow multi-word phrases
    const regex = keyword.includes(' ') 
      ? new RegExp(`(${escapedKeyword})`, 'gi')
      : new RegExp(`\\b${escapedKeyword}\\b`, 'gi');
    
    highlightedText = highlightedText.replace(
      regex,
      (match) => {
        // Don't replace if already inside a strong tag
        if (match.includes('<strong')) return match;
        return `<strong class="text-[#10B981]">${match}</strong>`;
      }
    );
  });
  return highlightedText;
};

// Define keywords for each project
const getProjectKeywords = (projectId: string): string[] => {
  const keywordMap: Record<string, string[]> = {
    "1": [
      "law enforcement-grade",
      "telecom analysis",
      "OSINT integration",
      "interactive network visualizations",
      "telecom data analysis",
      "advanced visualization",
      "OSINT",
      "network visualizations"
    ],
    "2": [
      "AI-powered",
      "Hugging Face",
      "LLM pipelines",
      "advanced language models",
      "intelligent research assistance",
      "document analysis",
      "LLM",
      "language models"
    ],
  };
  return keywordMap[projectId] || [];
};

export function Projects() {
  return (
    <Section title="Projects" subtitle="A collection of my recent work and contributions">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const keywords = getProjectKeywords(project.id);
          const highlightedDescription = highlightKeywords(project.description, keywords);
          
          return (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <Card className="flex flex-col group relative overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold mb-3 text-[#E0E0E0] group-hover:text-[#10B981] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-[#E0E0E0]/80 leading-relaxed mb-4">
                    <span 
                      className="text-[#E0E0E0]/80"
                      dangerouslySetInnerHTML={{ __html: highlightedDescription }}
                    />
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-4">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#E0E0E0] mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs border-[#10B981]/30 text-[#E0E0E0]/80 hover:border-[#10B981] hover:text-[#10B981] hover:bg-[#10B981]/10 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.description.includes('Outcome') && (
                    <div className="mt-4 p-3 bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg">
                      <p className="text-xs text-[#E0E0E0]/80">
                        <strong className="text-[#10B981]">Outcome:</strong> {project.description.split('Outcome')[1] || 'Improved efficiency and reliability'}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1 text-xs border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/10 hover:border-[#10B981]">
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
                    <Button size="sm" asChild className="flex-1 text-xs bg-[#10B981] hover:bg-[#10B981]/90 text-white">
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
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}

