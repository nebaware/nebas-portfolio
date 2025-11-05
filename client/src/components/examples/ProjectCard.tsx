import ProjectCard from '../ProjectCard';
import dashboardImage from '@assets/generated_images/Analytics_dashboard_web_app_73365896.png';

export default function ProjectCardExample() {
  return (
    <ProjectCard
      title="Analytics Dashboard"
      description="A comprehensive analytics platform for tracking business metrics and KPIs with real-time data visualization."
      technologies={["React", "TypeScript", "D3.js", "Node.js"]}
      image={dashboardImage}
      githubUrl="https://github.com"
      liveUrl="https://example.com"
      featured={true}
    />
  );
}
