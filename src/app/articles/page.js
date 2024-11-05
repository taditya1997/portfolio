import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/articlesData';

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-primaryBackground text-neutral-white">
      <div className="max-w-[85rem] mx-auto px-8 py-12">
        <div className="max-w-2xl">
          <h1 className="text-32 font-bold mb-4">Articles</h1>
          <p className="text-textZinc mb-12">
            Exploring web development, React ecosystem, and software engineering best practices. 
            Here's where I share my learnings and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ id, title, description, date, readTime, category, image }) {
  return (
    <Link 
      href={`/articles/${id}`}
      className="group bg-[#1E1E1E] rounded-lg border border-cardBorder overflow-hidden hover:border-green transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 text-12 bg-green/10 text-green rounded-full">
            {category}
          </span>
          <span className="text-12 text-textZinc">{readTime}</span>
        </div>

        <h2 className="text-18 font-semibold mb-2 group-hover:text-green transition-colors">
          {title}
        </h2>

        <p className="text-14 text-textZinc mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <time className="text-12 text-textZinc">
            {date}
          </time>
          <span className="text-14 text-green opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
