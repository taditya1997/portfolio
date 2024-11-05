export function ArticlePlaceholder({ title }) {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-green text-sm font-medium mb-4">Next.js</div>
          <h2 className="text-2xl font-bold text-white max-w-[80%] mx-auto">
            {title}
          </h2>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
} 