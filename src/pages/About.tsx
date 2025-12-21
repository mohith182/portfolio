import { Section } from "@/components/layout/Section";
import { personalInfo } from "@/data/portfolio";

export function About() {
  return (
    <Section className="relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center text-[#0F172A]">
          About Me
        </h2>
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 md:p-10 border border-white/20 shadow-medium mb-8 animate-[fade-in-up_0.6s_ease-out]">
          <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
            I'm passionate about <strong className="text-[#7C3AED]">software engineering</strong> and <strong className="text-[#7C3AED]">automation testing</strong>. With hands-on experience in <strong>Appium, Java, and TestNG</strong>, I build robust automation frameworks that ensure quality and reliability in mobile and web applications.
          </p>
          <p className="text-base md:text-lg text-[#475569] mb-6 leading-relaxed">
            I have a strong interest in <strong className="text-[#7C3AED]">DevOps</strong> and <strong className="text-[#7C3AED]">AWS cloud technologies</strong>, constantly exploring ways to improve deployment pipelines, infrastructure automation, and cloud-native solutions. I focus on <strong>quality, scalability, and reliability</strong> in everything I build.
          </p>
          <p className="text-base md:text-lg text-[#475569] leading-relaxed">
            Whether it's automating complex test scenarios, deploying scalable cloud infrastructure, or building full-stack applications, I approach each project with attention to detail and a commitment to delivering solutions that make a real impact.
          </p>
        </div>
        {personalInfo.location && (
          <p className="text-center text-muted-foreground mb-8 text-lg">
            📍 {personalInfo.location}
          </p>
        )}
      </div>
    </Section>
  );
}
