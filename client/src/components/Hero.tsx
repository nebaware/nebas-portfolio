import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import CodeSlider from "./CodeSlider";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Nebiyu Tsegaye.";

  useEffect(() => {
    setIsVisible(true);
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-primary font-mono text-sm mb-6" data-testid="text-greeting">
              Hi, my name is
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4" data-testid="text-name">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6" data-testid="text-tagline">
              I build things for the web.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-12" data-testid="text-intro">
              I'm a software developer specializing in building exceptional digital
              experiences. Currently, I'm focused on building accessible, human-centered
              products with modern web technologies.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-work"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                data-testid="button-get-in-touch"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <CodeSlider />
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          data-testid="button-scroll-down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
