export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    url: string;
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: "/images/projects/ecommerce.jpg",
      url: "/projects/ecommerce"
    },
    // Add more projects...
  ];