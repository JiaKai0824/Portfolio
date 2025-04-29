"use client";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl
}: {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-muted px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={projectUrl}
          className="text-primary hover:text-primary-dark font-medium inline-flex items-center"
        >
          View Project
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};