import { BiCodeBlock } from "react-icons/bi";

export const projects = [
  {
    title: "Text Editor",
    description:
      "A feature-rich text editor built with React.js. Includes syntax highlighting, multiple themes, and real-time preview capabilities.",
    techStack: ["React.js", "JavaScript", "Next.js", "TailwindCSS","Sentry","LiveBlocks.io","Clerk"],
    image: "/text-editor.png",
    links: {
      github: "https://github.com/taditya1997/text-editot",
      live: "https://text-editot.vercel.app/",
    },
    icon: <BiCodeBlock className="h-6 w-6" />,
  },
];
