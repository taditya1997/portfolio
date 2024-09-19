"use client";
import React from 'react';

export default function ErrorBoundary({ error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-32 font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-18 text-textZinc mb-8">
        {error || "The content you're looking for doesn't exist or has been moved."}
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-teal text-white rounded hover:bg-teal-600 transition-colors"
      >
        Go back to homepage
      </a>
    </div>
  );
}
