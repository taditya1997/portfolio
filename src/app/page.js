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
        Hey there! I'm Aditya, a software engineer based in Bangalore who turns
        coffee into code. I thrive on tackling complex challenges with a blend
        of technical expertise and a dash of humor. Beyond the keyboard, you'll
        catch me either pushing weights at the gym or unwinding with friends
        over good conversations. I'm a firm believer that great code flows from
        a balanced mind, which is why I advocate for developer well-being as
        much as clean architecture.
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
