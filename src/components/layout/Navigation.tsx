import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/education", label: "Education" },
  { path: "/skills", label: "Skills" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/achievements", label: "Achievements" },
  { path: "/certifications", label: "Certifications" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <nav className="sticky top-0 z-50 w-full border-b border-[#10B981]/20 bg-[#080808]/80 backdrop-blur-md shadow-lg shadow-[#10B981]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
          </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    asChild
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className={cn(
                      location.pathname === item.path && "bg-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]",
                      location.pathname !== item.path && "text-[#E0E0E0]/70 hover:text-[#E0E0E0] hover:bg-[#10B981]/10"
                    )}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </Button>
                ))}
              </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#E0E0E0] hover:bg-[#10B981]/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#10B981]/20 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={location.pathname === item.path ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  location.pathname !== item.path && "text-[#E0E0E0]/70 hover:text-[#E0E0E0] hover:bg-[#10B981]/10"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

