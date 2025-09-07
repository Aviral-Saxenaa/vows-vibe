import { Heart, Star } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image?: string;
  isWishlisted?: boolean;
  onWishlistToggle?: () => void;
  onAddToCart?: () => void;
}

export function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  isWishlisted = false,
  onWishlistToggle,
  onAddToCart
}: ProductCardProps) {
  return (
    <div className="w-78 bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Image Section */}
      <div className="relative w-full h-79 bg-gray-100">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Bestseller Tag */}
        <div 
          className="absolute top-8 left-0 px-2 py-1 rounded-r-xl"
          style={{ backgroundColor: '#A40303' }}
        >
          <span className="text-white font-montserrat text-base font-medium">
            BestSeller
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={onWishlistToggle}
          className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
        >
          <Heart 
            className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral'}`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-0">
        <div className="flex flex-col gap-1 mb-2">
          <h3 className="text-neutral font-montserrat text-base font-medium line-clamp-2">
            {title}
          </h3>
          
          {/* Pricing */}
          <div className="flex items-center gap-3.5">
            <span className="text-neutral text-2xl font-bold font-montserrat">
              ₹ {price.toLocaleString()}
            </span>
            <span className="text-muted text-base font-medium font-montserrat line-through">
              ₹ {originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className="w-3 h-3 text-yellow-400"
                  fill={i < Math.floor(rating) ? '#FCD34D' : 'none'}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="text-neutral text-xs font-medium font-montserrat">
              ({reviewCount})
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={onAddToCart}
          className="w-full h-13 px-21 flex items-center justify-center font-montserrat text-lg font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#CA8787' }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
