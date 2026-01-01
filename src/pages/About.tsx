import { Section } from "@/components/layout/Section";
import { personalInfo } from "@/data/portfolio";
import { RevealOnScroll } from "@/components/animations/RevealOnScroll";

export function About() {
  return (
    <Section className="relative">
      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-[#E0E0E0]">
            About Me
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <div className="bg-[#0a0a0a]/60 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-[#10B981]/20 shadow-lg shadow-[#10B981]/5 mb-8 animate-[fade-in-up_0.6s_ease-out]">
            <p className="text-base md:text-lg text-[#E0E0E0]/90 mb-6 leading-relaxed">
              I'm a <strong className="text-[#10B981]">Full Stack Developer</strong> and <strong className="text-[#10B981]">DevOps Engineer</strong> passionate about building end-to-end solutions that combine robust application development with seamless deployment pipelines. With expertise in <strong className="text-[#10B981]/80">React, Node.js, and modern web technologies</strong>, I craft scalable full-stack applications that deliver exceptional user experiences while maintaining clean, maintainable code.
            </p>
            <p className="text-base md:text-lg text-[#E0E0E0]/90 mb-6 leading-relaxed">
              My DevOps expertise extends to <strong className="text-[#10B981]">AWS cloud infrastructure</strong>, <strong className="text-[#10B981]">CI/CD pipelines</strong>, and <strong className="text-[#10B981]">infrastructure automation</strong>. I specialize in designing and implementing cloud-native solutions that ensure high availability, scalability, and reliability. Additionally, I leverage <strong className="text-[#10B981]/80">automation testing frameworks</strong> like Appium, Java, and TestNG to build comprehensive quality assurance processes that guarantee robust mobile and web applications.
            </p>
            <p className="text-base md:text-lg text-[#E0E0E0]/90 leading-relaxed">
              Whether it's architecting full-stack applications, automating deployment workflows, implementing cloud infrastructure, or building robust test automation frameworks, I approach each project with meticulous attention to detail and a commitment to delivering solutions that drive real business value. I focus on <strong className="text-[#10B981]/80">quality, scalability, and reliability</strong> in everything I build.
            </p>
          </div>
        </RevealOnScroll>
        {personalInfo.location && (
          <RevealOnScroll delay={200}>
            <p className="text-center text-[#E0E0E0]/70 mb-8 text-lg flex items-center justify-center gap-2">
              <span>📍</span>
              <span>{personalInfo.location}</span>
            </p>
          </RevealOnScroll>
        )}
      </div>
    </Section>
  );
}
