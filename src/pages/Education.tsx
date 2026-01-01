import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "B.E Computer Science",
      institution: "St. Joseph's College of Engineering",
      year: "2024 – 2028",
      location: "Chennai, Tamil Nadu, India",
    },
    {
      degree: "High School",
      institution: "Alwin Memorial Public School",
      year: "2015 – 2024",
      location: "Chennai, India",
    },
  ];

  return (
    <Section title="Education" subtitle="My academic journey">
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden animate-[fade-in-up_0.6s_ease-out]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-all duration-300">
                  <GraduationCap className="h-6 w-6 text-[#7C3AED]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 group-hover:text-[#7C3AED] transition-colors duration-300">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-base text-[#475569] mb-2 font-medium">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[#64748B]">
                    <span>{edu.year}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}

