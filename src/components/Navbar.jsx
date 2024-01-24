import Link from "next/link";
import { DarkIcons } from "@/Icons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const Navbar = () => {
  return (
    <header className="flex px-4 md:px-8 flex-row  sticky  top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row justify-between w-full mt-3">
        <div className="mt-3">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-3">
          <nav className="pointer-events-auto">
            <ul class="flex rounded-full bg-neutral-white/[0.09] px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5  ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal dark:hover:text-teal-400"
                  href={"/articles"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal dark:hover:text-teal-400"
                  href={"/articles"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal dark:hover:text-teal-400"
                  href={"/articles"}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="relative block px-3 py-2 transition hover:text-teal dark:hover:text-teal-400"
                  href={"/articles"}
                >
                  Articles
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
