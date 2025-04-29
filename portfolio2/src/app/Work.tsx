"use client";
import { ProjectCard } from "@/components/ui/project-card"; // Assume you have this component
import { projects } from "@/lib/data/project"; // Your projects data

const Works = () => {
  return (
    <section id="works" className="s-works target-section py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-animate-block>
          <h2 className="text-lg font-semibold text-primary mb-2">Recent Works</h2>
          <p className="text-4xl font-bold text-foreground">
            Here are some of my favorite projects I've done lately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              projectUrl={project.url}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Works;