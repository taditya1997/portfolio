"use client";
import Link from "next/link";
import { DarkIcons } from "@/Icons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const pathname = usePathname();

  const NavItem = ({ href, children }) => {
    const isActive = pathname === href;
    return (
      <li>
        <Link
          className={`relative block px-3 py-2 transition ${
            isActive 
              ? 'text-teal dark:text-teal-400' 
              : 'hover:text-teal dark:hover:text-teal-400'
          }`}
          href={href}
        >
          {children}
        </Link>
      </li>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row justify-between w-full py-3">
        <div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
        <div className="hidden md:block">
          <nav className="pointer-events-auto">
            <ul className="flex rounded-full bg-neutral-white/[0.09] px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/articles">Articles</NavItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
