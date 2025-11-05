import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import dashboardImage from "@assets/generated_images/Analytics_dashboard_web_app_73365896.png";
import ecommerceImage from "@assets/generated_images/E-commerce_mobile_app_mockup_666c0908.png";
import taskImage from "@assets/generated_images/Task_management_kanban_board_bf602422.png";

export default function Projects() {
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

  const projects = [
    {
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics platform for tracking business metrics and KPIs with real-time data visualization and customizable reports.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      image: dashboardImage,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Modern e-commerce solution with secure payment processing, inventory management, and personalized shopping experience.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      image: ecommerceImage,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with kanban boards, real-time updates, and team productivity analytics.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: taskImage,
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4" data-testid="heading-projects">
            <span className="text-primary font-mono text-xl">02.</span>
            <span>Things I've Built</span>
            <div className="h-px bg-border flex-1 max-w-xs"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
