import { Newspaper } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-24">
      {/* Header Skeleton */}
      <div className="bg-secondary h-64 w-full flex flex-col items-center justify-center animate-pulse">
        <div className="bg-white/10 h-10 w-64 rounded mb-4"></div>
        <div className="bg-white/10 h-4 w-96 rounded"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden h-96 flex flex-col">
              <div className="bg-gray-200 h-56 w-full animate-pulse"></div>
              <div className="p-6 flex-grow space-y-3">
                <div className="bg-gray-200 h-4 w-1/3 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-6 w-full rounded animate-pulse"></div>
                <div className="bg-gray-200 h-6 w-2/3 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-4 w-full rounded mt-4 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}