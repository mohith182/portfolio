import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ParallaxScroll } from "@/components/3d/ParallaxScroll";
import { Section3DTilt } from "@/components/3d/Section3DTilt";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  enable3D?: boolean;
}

export function Section({ id, title, subtitle, children, className, enable3D = true }: SectionProps) {
  const content = (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {(title || subtitle) && (
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          {title && (
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:from-[#34D399] hover:via-[#6EE7B7] hover:to-[#A7F3D0] transition-all duration-500">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-[#E0E0E0]/70 leading-relaxed">
              {subtitle}
            </p>
          )}
            {/* Colorful gradient divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#10B981] via-[#34D399] to-transparent mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
        </div>
      )}
      {children}
    </div>
  );

  return (
    <section id={id} className={cn("py-16 md:py-24 lg:py-32 relative", className)}>
      {enable3D ? (
        <ParallaxScroll speed={0.2}>
          <Section3DTilt intensity={1}>
            {content}
          </Section3DTilt>
        </ParallaxScroll>
      ) : (
        content
      )}
    </section>
  );
}

