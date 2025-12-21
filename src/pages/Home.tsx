import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { personalInfo, projects, experiences, skills, certifications } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink, Calendar, MapPin, Building2, Award, MessageCircle } from "lucide-react";

export function Home() {
  const phoneNumber = "(+91) 9360386136";
  
  // Group skills by category
  const skillsByCategory = {
    Programming: skills.filter(s => s.category === "programming" && ["Java", "Python", "C++", "Bash"].includes(s.name)),
    Web: skills.filter(s => s.category === "programming" && ["React.js", "Node.js", "Electron.js", "Flask"].includes(s.name)),
    "Cloud & Tools": skills.filter(s => s.category === "cloud" || s.category === "tools"),
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#E0E0E0] relative overflow-hidden">
      {/* Green gradient background effect - Trushank Mistry style */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-3xl rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.1) 50%, transparent 100%)'
          }}
        />
      </div>

      {/* Hero Section */}
      <Section className="min-h-screen flex items-center pt-20 pb-16 md:pt-32 md:pb-24 relative z-10" enable3D={false}>
        <RevealOnScroll>
          <div className="max-w-5xl mx-auto">
            {/* Headline - Trushank Mistry style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#E0E0E0] leading-tight">
              Hi, I'm {personalInfo.name.split(" ")[0]}. {personalInfo.role}
            </h1>
            
            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-[#E0E0E0]/70 mb-12 font-light max-w-3xl">
              {personalInfo.bio}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button size="lg" className="px-8 py-6 text-base bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-base border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/10 hover:border-[#10B981]">
                <a href="#contact">
                  Let's Chat
                </a>
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience" subtitle="Professional journey" enable3D={false}>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={exp.id} delay={index * 100}>
              <Card className="border-[#10B981]/20 bg-[#0a0a0a]/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-3 text-[#E0E0E0]">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-[#E0E0E0]/70 mb-3">
                        <Building2 className="h-5 w-5 text-[#10B981]" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#E0E0E0]/60">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
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
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20">
                          <MapPin className="h-4 w-4 text-[#10B981]" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#10B981] mt-1.5 text-xl font-bold">•</span>
                        <span className="text-[#E0E0E0]/80 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#10B981]/10">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30 hover:border-[#10B981] transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Projects - Case Study Style */}
      <Section title="Work" subtitle="Selected projects" enable3D={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 150}>
              <Card className="border-[#10B981]/20 bg-[#0a0a0a]/60 backdrop-blur-md hover:border-[#10B981]/40 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-2xl mb-3 text-[#E0E0E0] group-hover:text-[#10B981] transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-[#E0E0E0]/70 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[#E0E0E0]/60 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-[#10B981]/10">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="flex-1 border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/10">
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
                      <Button size="sm" asChild className="flex-1 bg-[#10B981] hover:bg-[#10B981]/90">
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
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Technical Arsenal */}
      <Section title="Technical Arsenal" subtitle="Technologies and tools" enable3D={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
            <RevealOnScroll key={category} delay={index * 100}>
              <Card className="border-[#10B981]/20 bg-[#0a0a0a]/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-[#E0E0E0]">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge
                        key={skill.name}
                        className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30"
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

      {/* Achievements & Certifications */}
      <Section title="Achievements" subtitle="Recognition and learning" enable3D={false}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <RevealOnScroll key={cert.id} delay={index * 100}>
              <Card className="border-[#10B981]/20 bg-[#0a0a0a]/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20">
                      <Award className="h-6 w-6 text-[#10B981]" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-[#E0E0E0]">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="text-sm mb-3 font-medium text-[#E0E0E0]/70">
                        {cert.issuer}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-xs text-[#E0E0E0]/60 bg-[#10B981]/10 px-2 py-1 rounded-md border border-[#10B981]/20">
                        <Calendar className="h-3 w-3 text-[#10B981]" />
                        <span>{cert.issueDate}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                {cert.credentialUrl && (
                  <CardContent>
                    <Button variant="outline" size="sm" asChild className="w-full border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/10">
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
                  </CardContent>
                )}
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Contact Section - Trushank Mistry style */}
      <Section id="contact" className="pb-32" enable3D={false}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Let's have a Chat */}
            <RevealOnScroll>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-[#E0E0E0]">Let's have a Chat</h2>
                <p className="text-lg text-[#E0E0E0]/70 mb-8">
                  Want to chat about software, AI, products, or anything digital? Hit me up!
                </p>
                <Button size="lg" className="px-8 py-6 text-base bg-[#10B981] hover:bg-[#10B981]/90 text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Let's Chat
                </Button>
              </div>
            </RevealOnScroll>

            {/* Get in Touch */}
            <RevealOnScroll delay={100}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">Get in Touch</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 text-[#10B981] hover:text-[#10B981]/80 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      <span>{personalInfo.email}</span>
                    </a>
                    <a
                      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                      className="flex items-center gap-3 text-[#10B981] hover:text-[#10B981]/80 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>{phoneNumber}</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#E0E0E0]">Follow Me</h3>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-[#10B981]/30 bg-[#10B981]/5 hover:bg-[#10B981]/10 hover:border-[#10B981] transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5 text-[#10B981]" />
                    </a>
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-[#10B981]/30 bg-[#10B981]/5 hover:bg-[#10B981]/10 hover:border-[#10B981] transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5 text-[#10B981]" />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Section>
    </div>
  );
}
