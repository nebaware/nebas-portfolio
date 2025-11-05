import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import headshotImage from "@assets/neba_1762366818664.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "Java"],
    Frameworks: ["React", "Node.js", "Next.js", "Express"],
    Tools: ["Git", "Docker", "VS Code", "Figma"],
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4" data-testid="heading-about">
            <span className="text-primary font-mono text-xl">01.</span>
            <span>About Me</span>
            <div className="h-px bg-border flex-1 max-w-xs"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio-1">
                Hello! I'm a passionate software developer who enjoys creating things that
                live on the internet. My interest in web development started back in 2018
                when I decided to try building my first website — turns out, diving into
                HTML & CSS taught me a lot about problem-solving and design!
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio-2">
                Fast-forward to today, and I've had the privilege of working on various
                projects ranging from e-commerce platforms to data visualization dashboards.
                My main focus these days is building accessible, performant products and
                delightful user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio-3">
                Here are a few technologies I've been working with recently:
              </p>

              <div className="space-y-6 pt-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-mono text-primary mb-3" data-testid={`heading-${category.toLowerCase()}`}>
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="font-mono text-xs"
                          data-testid={`badge-skill-${skill.toLowerCase().replace(/\./g, '')}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-md transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <Avatar className="relative h-64 w-64 border-2 border-primary rounded-md" data-testid="img-profile">
                  <AvatarImage src={headshotImage} alt="Nebiyu Tsegaye" className="object-cover" />
                  <AvatarFallback className="text-4xl rounded-md">NT</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
