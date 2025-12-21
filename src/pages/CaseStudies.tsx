import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/data/portfolio";
import { CheckCircle2, Users, Target, TrendingUp } from "lucide-react";

export function CaseStudies() {
  return (
    <Section title="Case Studies" subtitle="Detailed breakdown of design problems, process, and measurable outcomes">
      <div className="max-w-6xl mx-auto space-y-24">
        {caseStudies.map((study, index) => (
          <Card key={study.id} className="overflow-hidden">
            <CardHeader className="pb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <CardTitle className="text-3xl">{study.title}</CardTitle>
                    {study.category && (
                      <Badge variant="secondary" className="text-xs">
                        {study.category}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">Role: {study.role}</span>
                    <span>•</span>
                    <span>Tools: {study.tools.join(", ")}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Problem Statement */}
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Problem
                </h3>
                <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
              </div>

              {/* Research Insights */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Research Insights
                </h3>
                <ul className="space-y-3">
                  {study.researchInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.wireframes && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Wireframes</h3>
                    <p className="text-sm text-muted-foreground">{study.wireframes}</p>
                  </div>
                )}
                {study.finalScreens && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Final UI Screens</h3>
                    <ul className="space-y-2">
                      {study.finalScreens.map((screen, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {screen}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Outcome & Impact */}
              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Outcome
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{study.outcome}</p>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Measurable Impact</p>
                  <p className="text-muted-foreground">{study.impact}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

