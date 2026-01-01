import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { certifications } from "@/data/portfolio";
import { Award, Calendar } from "lucide-react";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function Certifications() {
  // Filter out achievements (hackathons and competitions) - only show certifications
  const certsOnly = certifications.filter(
    (cert) => cert.id !== "1" && cert.id !== "2" && cert.id !== "3" && cert.id !== "4"
  );

  return (
    <Section title="Certifications" subtitle="Professional certifications, badges, and learning milestones">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certsOnly.map((cert, index) => (
          <RevealOnScroll key={cert.id} delay={index * 100}>
            <Card className="group relative overflow-hidden">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-lg bg-[#10B981]/10 group-hover:bg-[#10B981]/20 border border-[#10B981]/20 transition-all duration-300">
                    <Award className="h-6 w-6 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 text-[#E0E0E0] group-hover:text-[#10B981] transition-colors duration-300">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-sm mb-3 font-medium text-[#E0E0E0]/70">
                      {cert.issuer}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-xs text-[#E0E0E0]/70 bg-[#10B981]/10 border border-[#10B981]/20 px-2 py-1 rounded-md">
                      <Calendar className="h-3 w-3 text-[#10B981]" />
                      <span>
                        Issued:{" "}
                        {(() => {
                          const date = new Date(cert.issueDate);
                          if (isNaN(date.getTime()) || cert.issueDate.length === 4) {
                            return cert.issueDate;
                          }
                          return date.toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          });
                        })()}
                      </span>
                    </div>
                    {cert.expiryDate && (
                      <div className="flex items-center gap-2 text-xs text-[#E0E0E0]/70 mt-2 bg-[#10B981]/10 border border-[#10B981]/20 px-2 py-1 rounded-md">
                        <Calendar className="h-3 w-3 text-[#10B981]" />
                        <span>
                          Expires:{" "}
                          {(() => {
                            const date = new Date(cert.expiryDate);
                            if (isNaN(date.getTime()) || cert.expiryDate.length === 4) {
                              return cert.expiryDate;
                            }
                            return date.toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            });
                          })()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              {cert.credentialId && (
                <CardContent>
                  <p className="text-xs text-[#E0E0E0]/70 mb-3 p-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md">
                    Credential ID: <span className="font-mono text-[#10B981]">{cert.credentialId}</span>
                  </p>
                </CardContent>
              )}
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}

