import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

// Dummy data for articles (replace with API call later)
const articles = {
  1: {
    title: "Introduction to Next.js",
    date: "2023-05-15",
    content: "Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications..."
  },
  // ... other articles ...
};

export default function ArticlePage({ params }) {
  const article = articles[params.articleId];

  if (!article) {
    return <ErrorBoundary error="The article you're looking for doesn't exist." />;
  }

  return (
    <>
      <h1 className="text-32 font-bold mb-4">{article.title}</h1>
      <p className="text-14 text-textZinc mb-8">{article.date}</p>
      <div className="prose prose-invert">
        <p>{article.content}</p>
      </div>
    </>
  );
}
