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
              I'm passionate about <strong className="text-[#10B981]">software engineering</strong> and <strong className="text-[#10B981]">automation testing</strong>. With hands-on experience in <strong className="text-[#10B981]/80">Appium, Java, and TestNG</strong>, I build robust automation frameworks that ensure quality and reliability in mobile and web applications.
            </p>
            <p className="text-base md:text-lg text-[#E0E0E0]/90 mb-6 leading-relaxed">
              I have a strong interest in <strong className="text-[#10B981]">DevOps</strong> and <strong className="text-[#10B981]">AWS cloud technologies</strong>, constantly exploring ways to improve deployment pipelines, infrastructure automation, and cloud-native solutions. I focus on <strong className="text-[#10B981]/80">quality, scalability, and reliability</strong> in everything I build.
            </p>
            <p className="text-base md:text-lg text-[#E0E0E0]/90 leading-relaxed">
              Whether it's automating complex test scenarios, deploying scalable cloud infrastructure, or building full-stack applications, I approach each project with attention to detail and a commitment to delivering solutions that make a real impact.
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
