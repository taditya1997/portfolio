import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { SignupComponent } from "./SignupComponent"
import { ExperienceComponent } from "./ExperirenceComponent"

export default function HighlightedBlogPost() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#121212] text-white">
      <div className="flex-[3] space-y-8">
        <BlogPostItem
          date="September 5, 2022"
          title="Crafting a design system for a multiplanetary future"
          content="Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."
          linkColor="blue"
        />
        <BlogPostItem
          date="September 2, 2022"
          title="Introducing Animaginary: High performance web animations"
          content="When you're building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
          linkColor="green"
        />
        <BlogPostItem
          date="July 14, 2022"
          title="Rewriting the cosmOS kernel in Rust"
          content="When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it's been a while since I've seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on other programming things in Rust every single week."
          linkColor="green"
        />
      </div>
      <div className="flex-[2] space-y-8">
        <div className="flex-[2]">
          <SignupComponent />
        </div>
        <div className="flex-[2]">
          <ExperienceComponent />
        </div>
      </div>
    </div>
  )
}

function BlogPostItem({ date, title, content, linkColor }) {
  return (
    <div className="space-y-4 p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors duration-200">
      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <CalendarIcon className="h-3 w-3" />
        <span className="text-14 text-textZinc">{date}</span>
      </div>
      <h2 className="text-20 font-semibold">{title}</h2>
      <p className="text-14 text-textZinc text-muted-foreground">{content}</p>
      <a href="#" className={`inline-flex items-center space-x-1 text-${linkColor}-500 text-14 text-teal hover:underline`}>
        <span>Read article</span>
        <ArrowRightIcon className="h-3 w-3" />
      </a>
    </div>
  )
}

// function ArrowDownIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 5v14" />
//       <path d="m19 12-7 7-7-7" />
//     </svg>
//   )
// }


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

