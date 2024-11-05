"use client";
import { articles } from '@/lib/articlesData';
import { SignupComponent } from "./SignupComponent"
import { ExperienceComponent } from "./ExperirenceComponent"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HighlightedBlogPost() {
  // Get the three most recent articles
  const recentArticles = articles.slice(0, 3);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-[#121212] text-white">
      <div className="flex-[3] space-y-8">
        {recentArticles.map((article) => (
          <BlogPostItem
            key={article.id}
            date={article.date}
            title={article.title}
            content={article.description}
            linkColor="green"
            id={article.id}
          />
        ))}
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

function BlogPostItem({ date, title, content, linkColor, id }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/articles/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="space-y-4 p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#2A2A2A] transition-colors duration-200 cursor-pointer"
    >
      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
        <CalendarIcon className="h-3 w-3" />
        <span className="text-14 text-textZinc">{date}</span>
      </div>
      <h2 className="text-20 font-semibold">{title}</h2>
      <p className="text-14 text-textZinc text-muted-foreground">{content}</p>
      <Link 
        href={`/articles/${id}`}
        className={`inline-flex items-center space-x-1 text-${linkColor}-500 text-14 text-teal hover:underline`}
        onClick={(e) => e.stopPropagation()}
      >
        <span>Read article</span>
        <ArrowRightIcon className="h-3 w-3" />
      </Link>
    </div>
  )
}

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

