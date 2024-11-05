"use client";
import Link from "next/link";
import { DarkIcons } from "@/Icons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const XIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItem = ({ href, children, onClick }) => {
    const isActive = pathname === href;
    return (
      <li>
        <Link
          className={`relative block px-3 py-2 transition ${
            isActive
              ? "text-teal dark:text-teal-400"
              : "hover:text-teal dark:hover:text-teal-400"
          }`}
          href={href}
          onClick={onClick}
        >
          {children}
        </Link>
      </li>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row justify-between items-center w-full py-3 px-4">
        <div>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <nav className="pointer-events-auto">
            <ul className="flex rounded-full bg-neutral-white/[0.09] px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/articles">Articles</NavItem>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#121212] py-4">
            <nav>
              <ul className="flex flex-col items-center space-y-4 text-sm font-medium text-zinc-200">
                <NavItem href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavItem>
                <NavItem href="/projects" onClick={() => setIsMenuOpen(false)}>
                  Projects
                </NavItem>
                <NavItem href="/articles" onClick={() => setIsMenuOpen(false)}>
                  Articles
                </NavItem>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
