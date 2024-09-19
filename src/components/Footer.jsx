import React from 'react';
import Link from 'next/link';
import { IconsDetails } from "@/lib/constant";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primaryBackground text-neutral-white py-8 px-4 md:px-8 mt-auto border-t border-cardBorder">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-14 text-textZinc">&copy; {currentYear} Aditya Thakur. All rights reserved.</p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-14 text-textZinc hover:text-teal transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-14 text-textZinc hover:text-teal transition-colors">About</Link></li>
            <li><Link href="/projects" className="text-14 text-textZinc hover:text-teal transition-colors">Projects</Link></li>
            <li><Link href="/articles" className="text-14 text-textZinc hover:text-teal transition-colors">Articles</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
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
                  "h-5 w-5 fill-textZinc transition group-hover:fill-teal cursor-pointer",
              })}
              <span className="sr-only">{icon.iconName}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
