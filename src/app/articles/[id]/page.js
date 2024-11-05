'use client';
import React from 'react';
import { articles } from '@/lib/articlesData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import './article.css';
import { ArticlePlaceholder } from '@/components/ArticlePlaceholder';

// Initialize markdown-it with custom rendering
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && Prism.languages[lang]) {
      try {
        return `<pre class="code-block"><code class="language-${lang}">${Prism.highlight(str, Prism.languages[lang], lang)}</code></pre>`;
      } catch (__) {}
    }
    return `<pre class="code-block"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

// Customize markdown-it rendering
md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
  const token = tokens[idx];
  const info = token.info ? token.info.trim() : '';
  const lang = info ? info.split(/\s+/g)[0] : '';

  if (lang && Prism.languages[lang]) {
    const code = Prism.highlight(token.content, Prism.languages[lang], lang);
    return `<pre class="code-block"><code class="language-${lang}">${code}</code></pre>`;
  }

  return `<pre class="code-block"><code>${md.utils.escapeHtml(token.content)}</code></pre>`;
};

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.id === params.id);

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!article) {
    notFound();
  }

  const renderedContent = md.render(article.content);

  return (
    <div className="min-h-screen bg-primaryBackground text-neutral-white">
      <div className="max-w-[45rem] mx-auto px-8 py-12">
        {/* Navigation */}
        <nav className="mb-12">
          <Link 
            href="/articles"
            className="inline-flex items-center gap-2 text-14 text-textZinc hover:text-green transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to articles
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 text-12 bg-green/10 text-green rounded-full">
              {article.category}
            </span>
            <span className="text-12 text-textZinc">{article.readTime}</span>
          </div>

          <h1 className="text-32 font-bold mb-4">{article.title}</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-14 text-textZinc">Aditya Thakur</span>
            </div>
            <time className="text-14 text-textZinc">
              {article.date}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        {!article.image ? (
          <ArticlePlaceholder title={article.title} />
        ) : (
          <div className="relative h-[400px] w-full mb-12 rounded-lg overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-invert prose-green max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: renderedContent }}
            className="article-content"
          />
        </article>

        {/* Share and Navigation */}
        <footer className="mt-12 pt-8 border-t border-cardBorder">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-14 text-textZinc hover:text-green transition-colors"
              >
                Share on Twitter
              </Link>
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(article.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-14 text-textZinc hover:text-green transition-colors"
              >
                Share on LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
