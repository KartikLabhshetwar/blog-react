const LoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse"
        >
          {/* Image skeleton */}
          <div className="aspect-w-16 aspect-h-9 bg-gray-200" />
          
          {/* Content skeleton */}
          <div className="p-6">
            {/* Meta info skeleton */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-4 w-20 bg-gray-200 rounded" />
              <div className="h-4 w-1 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
            
            {/* Title skeleton */}
            <div className="space-y-2 mb-3">
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
              <div className="h-6 w-1/2 bg-gray-200 rounded" />
            </div>
            
            {/* Description skeleton */}
            <div className="space-y-2 mb-6">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
            </div>
            
            {/* Footer skeleton */}
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton; 