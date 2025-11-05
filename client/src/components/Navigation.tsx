import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About", number: "01" },
    { id: "projects", label: "Projects", number: "02" },
    { id: "contact", label: "Contact", number: "03" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-primary font-mono text-lg font-semibold hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="button-logo"
          >
            &lt;Portfolio /&gt;
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm hover:text-primary transition-colors font-mono group"
                data-testid={`link-nav-${item.id}`}
              >
                <span className="text-primary mr-2">{item.number}.</span>
                <span className="group-hover:text-primary transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              data-testid="button-resume"
            >
              Resume
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-sm hover:text-primary transition-colors font-mono"
                data-testid={`link-mobile-${item.id}`}
              >
                <span className="text-primary mr-2">{item.number}.</span>
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary/10"
              data-testid="button-mobile-resume"
            >
              Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
