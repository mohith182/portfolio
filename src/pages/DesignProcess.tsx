import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { designProcess } from "@/data/portfolio";

export function DesignProcess() {
  return (
    <Section title="Design Process" subtitle="A systematic approach to solving complex problems">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {designProcess.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector line (hidden on last item) */}
              {index < designProcess.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border z-0" style={{ width: 'calc(100% - 2rem)' }} />
              )}
              
              <Card className="relative z-10 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <CardTitle className="text-xl mb-2">{step.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

