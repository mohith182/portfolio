import { Linkedin, Mail, Github } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
        <footer className="border-t border-[#10B981]/20 bg-[#080808]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#E0E0E0]/60">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="text-[#E0E0E0]/60 hover:text-[#10B981] hover:bg-[#10B981]/10">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-[#E0E0E0]/60 hover:text-[#10B981] hover:bg-[#10B981]/10">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-[#E0E0E0]/60 hover:text-[#10B981] hover:bg-[#10B981]/10">
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

