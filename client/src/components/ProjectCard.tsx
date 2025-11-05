import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="relative overflow-hidden aspect-video">
        {featured && (
          <Badge
            className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground animate-pulse"
            data-testid="badge-featured"
          >
            Featured
          </Badge>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          data-testid="img-project"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors" data-testid="text-project-title">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-project-description">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="font-mono text-xs"
              data-testid={`badge-tech-${tech.toLowerCase().replace(/\./g, '')}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button
              size="sm"
              variant="ghost"
              className="gap-2"
              onClick={() => console.log('Navigate to:', githubUrl)}
              data-testid="button-github"
            >
              <Github className="h-4 w-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              variant="ghost"
              className="gap-2"
              onClick={() => console.log('Navigate to:', liveUrl)}
              data-testid="button-live-demo"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
