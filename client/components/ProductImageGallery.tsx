import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName?: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Placeholder images for demo
  const placeholderImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg'
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-md">
      {/* Main Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={displayImages[currentImageIndex]}
          alt={productName || `Product image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex items-center justify-center w-20 h-28 bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-neutral" strokeWidth={1.5} />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-3 flex-1">
          {displayImages.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative w-26 h-28 rounded overflow-hidden ${
                index === currentImageIndex ? 'ring-2 ring-neutral' : ''
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Video overlay for demo */}
              {index === 2 && (
                <div className="absolute inset-0 bg-black/55 flex items-center justify-center">
                  <div className="bg-white/20 p-2 rounded">
                    <Play className="w-4 h-4 text-white" fill="white" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex items-center justify-center w-20 h-28 bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-neutral" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
