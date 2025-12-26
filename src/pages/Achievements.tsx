import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";
import { Award, Calendar } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Achievements() {
  // Filter to show only achievements (hackathons and competitions)
  const achievements = certifications.filter(
    (cert) => cert.id === "1" || cert.id === "2" || cert.id === "3"
  );

  return (
    <Section title="Achievements" subtitle="Competitions and recognition">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <RevealOnScroll key={achievement.id} delay={index * 100}>
            <Card className="group relative overflow-hidden border-[#10B981]/20 bg-[#0a0a0a]/60 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-lg bg-[#10B981]/10 group-hover:bg-[#10B981]/20 border border-[#10B981]/20 transition-all duration-300">
                    <Award className="h-6 w-6 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-[#E0E0E0] group-hover:text-[#10B981] transition-colors duration-300">
                      {achievement.name}
                    </CardTitle>
                    <CardDescription className="text-sm mb-3 font-medium text-[#E0E0E0]/70">
                      {achievement.issuer}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-xs text-[#E0E0E0]/70 bg-[#10B981]/10 border border-[#10B981]/20 px-2 py-1 rounded-md">
                      <Calendar className="h-3 w-3 text-[#10B981]" />
                      <span>
                        {achievement.issueDate}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}

