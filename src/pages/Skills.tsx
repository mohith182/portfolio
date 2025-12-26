import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

const skillCategories = {
  programming: "Frontend",
  automation: "Automation & Testing",
  tools: "Backend & Cloud",
  ai_ml: "AI & Machine Learning",
};

export function Skills() {
  const categorizedSkills = {
    programming: skills.filter((s) => s.category === "programming"),
    automation: skills.filter((s) => s.category === "automation"),
    tools: skills.filter((s) => s.category === "tools" || s.category === "cloud"),
    ai_ml: skills.filter((s) => s.category === "ai_ml"),
  };

  return (
    <Section title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(categorizedSkills).map(([category, categorySkills], index) => (
          <RevealOnScroll key={category} delay={index * 100}>
            <Card className="group">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#E0E0E0] group-hover:text-[#10B981] transition-colors duration-200">
                  {skillCategories[category as keyof typeof skillCategories]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="hover:scale-110 hover:shadow-md hover:shadow-[#10B981]/20 hover:border-[#10B981] hover:text-[#10B981] hover:bg-[#10B981]/10 transition-all duration-300 cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
