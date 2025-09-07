import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image?: string;
}

interface ProductRecommendationsProps {
  title: string;
  products: Product[];
}

export function ProductRecommendations({
  title,
  products,
}: ProductRecommendationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(
    new Set(),
  );

  const visibleProducts = 4; // Number of products visible at once
  const maxIndex = Math.max(0, products.length - visibleProducts);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const toggleWishlist = (productId: string) => {
    setWishlistedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  // Demo products if none provided
  const demoProducts: Product[] = [
    {
      id: "1",
      title: "Rose Gold Earrings with alloy",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviewCount: 4,
    },
    {
      id: "2",
      title: "Rose Gold Earrings with alloy",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviewCount: 4,
    },
    {
      id: "3",
      title: "Rose Gold Earrings with alloy",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviewCount: 4,
    },
    {
      id: "4",
      title: "Rose Gold Earrings with alloy",
      price: 1999,
      originalPrice: 2999,
      rating: 4.5,
      reviewCount: 4,
    },
  ];

  const displayProducts = products.length > 0 ? products : demoProducts;

  return (
    <div className="w-full flex flex-col items-center gap-10 py-10">
      {/* Section Title */}
      <h2 className="text-neutral text-4xl font-bold font-montserrat text-center">
        {title}
      </h2>

      {/* Products Carousel */}
      <div className="flex items-center gap-4 w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#F6F5F2" }}
        >
          <ChevronLeft className="w-8 h-8 text-neutral" strokeWidth={1.5} />
        </button>

        {/* Products Grid */}
        <div className="flex gap-4 overflow-hidden flex-1">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (312 + 16)}px)`, // 312px card width + 16px gap
            }}
          >
            {displayProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0">
                <ProductCard
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  image={product.image}
                  isWishlisted={wishlistedItems.has(product.id)}
                  onWishlistToggle={() => toggleWishlist(product.id)}
                  onAddToCart={() => console.log("Add to cart:", product.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={currentIndex === maxIndex}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#F6F5F2" }}
        >
          <ChevronRight className="w-8 h-8 text-neutral" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
