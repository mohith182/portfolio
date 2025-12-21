import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/portfolio";
import { Award, Calendar, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <Section title="Achievements" subtitle="Certifications, hackathons, and learning milestones">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card
            key={cert.id}
            className="group relative overflow-hidden animate-[fade-in-up_0.6s_ease-out]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-all duration-300">
                  <Award className="h-6 w-6 text-[#7C3AED]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2 group-hover:text-[#7C3AED] transition-colors duration-300">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="text-sm mb-3 font-medium">
                    {cert.issuer}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground bg-[#F1F5F9] px-2 py-1 rounded-md">
                    <Calendar className="h-3 w-3 text-[#7C3AED]" />
                    <span>
                      Issued:{" "}
                      {new Date(cert.issueDate).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {cert.expiryDate && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2 bg-[#F1F5F9] px-2 py-1 rounded-md">
                      <Calendar className="h-3 w-3 text-[#7C3AED]" />
                      <span>
                        Expires:{" "}
                        {new Date(cert.expiryDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {cert.credentialId && (
                <p className="text-xs text-muted-foreground mb-3 p-2 bg-[#F1F5F9] rounded-md border border-[#E5E7EB]">
                  Credential ID: <span className="font-mono text-[#7C3AED]">{cert.credentialId}</span>
                </p>
              )}
              {cert.credentialUrl && (
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Credential
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

