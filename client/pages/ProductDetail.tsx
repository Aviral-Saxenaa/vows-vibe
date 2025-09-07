import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { OfferBanner } from "@/components/OfferBanner";
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { ProductDetailsPanel } from "@/components/ProductDetailsPanel";
import { CustomerReviews } from "@/components/CustomerReviews";
import { ProductRecommendations } from "@/components/ProductRecommendations";
import { useApp } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, setCurrentProduct } = useApp();
  const { toast } = useToast();
  const [product, setProduct] = useState(products[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = [
    product?.image || "",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=400&fit=crop",
  ];

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setCurrentProduct(foundProduct);
      } else {
        navigate('/products');
      }
    }
  }, [id, products, navigate, setCurrentProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast({
        title: "Added to Cart!",
        description: `${product.title} has been added to your cart.`,
      });
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);
      navigate('/cart');
    }
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product?.category || "Category", href: `/products?category=${product?.category}` },
    { label: product?.title || "Product" },
  ];

  const relatedProducts = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <OfferBanner />
        <MainHeader />
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Product not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <OfferBanner />
      <MainHeader />

      {/* Breadcrumb */}
      <div className="px-4 md:px-8 lg:px-32 py-4">
        <div className="flex items-center gap-2 text-sm overflow-x-auto">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 whitespace-nowrap">
              {item.href ? (
                <button
                  onClick={() => navigate(item.href!)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-gray-800 font-medium">{item.label}</span>
              )}
              {index < breadcrumbItems.length - 1 && (
                <span className="text-gray-400">/</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Product Section */}
      <div className="px-4 md:px-8 lg:px-32 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Images */}
          <div className="flex justify-center lg:justify-start">
            <ProductImageGallery
              images={productImages}
              productName={product.title}
              currentIndex={currentImageIndex}
              onImageChange={setCurrentImageIndex}
            />
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col gap-8">
            <ProductDetailsPanel
              title={product.title}
              subtitle={product.description}
              rating={product.rating}
              reviewCount={product.reviewCount}
              currentPrice={product.price}
              originalPrice={product.originalPrice}
              discount={Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}
              features={product.features}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
            />
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="px-4 md:px-8 lg:px-32 py-8">
        <CustomerReviews 
          reviews={[
            {
              id: "1",
              userName: "Sarah Johnson",
              rating: 5,
              comment: "Absolutely beautiful! The quality exceeded my expectations.",
              date: "2024-01-15"
            },
            {
              id: "2", 
              userName: "Mike Chen",
              rating: 4,
              comment: "Great product, fast shipping. Very satisfied with my purchase.",
              date: "2024-01-10"
            }
          ]} 
        />
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="py-16">
          <ProductRecommendations
            title="Similar Products"
            products={relatedProducts.map(p => ({
              id: p.id,
              title: p.title,
              price: p.price,
              originalPrice: p.originalPrice,
              rating: p.rating,
              reviewCount: p.reviewCount,
              image: p.image
            }))}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}