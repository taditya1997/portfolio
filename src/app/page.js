import React from "react";
import HighlightedBlogPost from "@/components/HighlightedBlogPost";
import { IconsDetails } from "@/lib/constant";

export default function Home() {
  return (
    <>
      {renderHeroSection()}
      <div className="mt-8">
        <HighlightedBlogPost />
      </div>
    </>
  );
}

function renderHeroSection() {
  return (
    <div className="flex flex-col max-w-[45rem] gap-4 mt-12">
      <h1 className="leading-tight">Software Engineer</h1>
      <p className="mt-6 text-textZinc">
        Hey, I'm Aditya, a software developer from Bangalore. I love solving
        tough problems with a mix of skill and humor. When I'm not coding,
        you'll find me lifting weights or relaxing with friends over a drink.
        Mental health matters to me—because strong code starts with a strong
        mind.
      </p>
      <div className="mt-6 flex gap-6">
        {IconsDetails.map((icon) => (
          <a
            key={icon.iconName}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            {React.cloneElement(icon.iconsSvg, {
              className:
                "h-6 w-6 fill-white transition hover:fill-zinc dark:fill-textZinc group-hover:fill-textZinc cursor-pointer",
            })}
            <span className="sr-only">{icon.iconName}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

