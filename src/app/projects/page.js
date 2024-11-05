import React from "react";
import { projects } from "@/lib/projectsData";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-primaryBackground text-neutral-white">
      <div className="max-w-[85rem] mx-auto px-8 py-12">
        <h1 className="text-32 font-bold mb-8">Projects</h1>
        <p className="text-textZinc mb-12 max-w-[45rem]">
          I develop projects to explore
          emerging technologies and address real-world challenges. Here are some
          of my favorite projects that demonstrate my expertise and interests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, techStack, image, links, icon }) {
  return (
    <div className="bg-[#1E1E1E] rounded-lg border border-cardBorder overflow-hidden transition-all duration-300 hover:scale-[1.02]">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-green">{icon}</div>
          <h2 className="text-16 font-semibold">{title}</h2>
        </div>

        <p className="text-14 text-textZinc mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-12 bg-[#2D2D2D] rounded-full text-textZinc"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-14 text-textZinc hover:text-green transition-colors"
            >
              View Source →
            </Link>
          )}
          {links.live && (
            <Link
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-14 text-textZinc hover:text-green transition-colors"
            >
              Visit Site →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
