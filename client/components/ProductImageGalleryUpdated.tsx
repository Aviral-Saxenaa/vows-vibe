import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useState } from "react";

interface ProductImageGalleryProps {
  images: string[];
  productName?: string;
  currentIndex?: number;
  onImageChange?: (index: number) => void;
}

export function ProductImageGallery({
  images,
  productName,
  currentIndex = 0,
  onImageChange,
}: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    onImageChange?.(newIndex);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
    onImageChange?.(index);
  };

  // Placeholder images for demo
  const placeholderImages = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=400&fit=crop",
  ];

  const displayImages = images.length > 0 ? images : placeholderImages;

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-md mx-auto lg:mx-0">
      {/* Main Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={displayImages[currentImageIndex]}
          alt={productName || `Product image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex items-center justify-center w-12 h-16 md:w-20 md:h-28 bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-neutral" strokeWidth={1.5} />
        </button>

        {/* Thumbnails */}
        <div className="flex gap-2 md:gap-3 flex-1 overflow-x-auto">
          {displayImages.slice(0, 4).map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`relative w-16 h-20 md:w-[104px] md:h-[112px] rounded overflow-hidden flex-shrink-0 ${
                index === currentImageIndex ? "ring-2 ring-neutral" : ""
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
          className="flex items-center justify-center w-12 h-16 md:w-20 md:h-28 bg-gray-50 hover:bg-gray-100 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-neutral" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}