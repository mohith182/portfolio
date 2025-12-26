import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { personalInfo, projects, experiences, skills } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin, ExternalLink, Calendar, MapPin, Building2, MessageCircle, Code2, Cloud, Cpu } from "lucide-react";

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
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] blur-3xl rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 50%, transparent 100%)',
            animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] blur-3xl rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.1) 50%, transparent 100%)'
          }}
        />
        <div 
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] blur-3xl rounded-full opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(59,130,246,0.05) 50%, transparent 100%)',
            animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(16,185,129,0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59,130,246,0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#10B981] opacity-10"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 relative z-10">
        {/* Decorative floating icons */}
        <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
          <Code2 className="absolute top-20 right-10 w-16 h-16 text-[#10B981]/10 rotate-12 hidden lg:block animate-pulse" />
          <Cloud className="absolute top-40 right-32 w-12 h-12 text-[#10B981]/10 -rotate-12 hidden lg:block animate-pulse" style={{ animationDelay: '1s' }} />
          <Cpu className="absolute bottom-40 left-10 w-14 h-14 text-[#10B981]/10 rotate-45 hidden lg:block animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 w-full">
          <RevealOnScroll>
            <div className="relative z-10">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#E0E0E0] leading-tight">
                <span className="block">Hi, I'm Mohith — Software Developer,</span>
                <span className="block">DevOps Engineer & AI Enthusiast.</span>
              </h1>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl mt-6">
                {personalInfo.bio}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" className="px-8 py-6 text-base font-medium bg-[#10B981] hover:bg-[#10B981]/90 text-white h-auto transition-all duration-200">
                  <a href="/MOHITH RESUME 2.pdf (1).pdf" download="MOHITH_RESUME.pdf">
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-base font-medium border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/10 hover:border-[#10B981] h-auto transition-all duration-200">
                  <a href="#contact">
                    Let's Chat
                  </a>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

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
