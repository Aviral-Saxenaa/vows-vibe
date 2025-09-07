import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to Cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div 
      onClick={handleProductClick}
      className="w-full max-w-[312px] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative w-full h-[316px] bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />

        {/* Bestseller Tag */}
        <div
          className="absolute top-8 left-0 px-2 py-1 rounded-r-xl"
          style={{ backgroundColor: "#A40303" }}
        >
          <span className="text-white font-montserrat text-base font-medium">
            BestSeller
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
        >
          <Heart
            className="w-5 h-5 text-neutral hover:text-red-500 transition-colors"
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-0">
        <div className="flex flex-col gap-1 mb-2">
          <h3 className="text-neutral font-montserrat text-base font-medium line-clamp-2">
            {product.title}
          </h3>

          {/* Pricing */}
          <div className="flex items-center gap-3.5">
            <span className="text-neutral text-2xl font-bold font-montserrat">
              ₹ {product.price.toLocaleString()}
            </span>
            <span className="text-muted text-base font-medium font-montserrat line-through">
              ₹ {product.originalPrice.toLocaleString()}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 text-yellow-400"
                  fill={i < Math.floor(product.rating) ? "#FCD34D" : "none"}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="text-neutral text-xs font-medium font-montserrat">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full h-[52px] px-6 flex items-center justify-center font-montserrat text-lg font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#CA8787" }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
