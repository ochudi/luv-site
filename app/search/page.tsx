"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Search Results</h1>
        {q ? (
          <p className="text-lg text-muted-foreground mb-8">
            Showing results for <span className="font-bold text-yellow-400">{q}</span>
          </p>
        ) : (
          <p className="text-lg text-muted-foreground mb-8">Enter a search term above.</p>
        )}
        {/* TODO: Add real search results here */}
        <div className="bg-card rounded-xl p-8 shadow-lg">
          <p className="text-muted-foreground">No results yet. (Search logic coming soon!)</p>
        </div>
      </div>
    </div>
  );
} 