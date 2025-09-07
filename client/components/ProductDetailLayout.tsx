import { OfferBanner } from "./OfferBanner";
import { MainHeader } from "./MainHeader";
import { Breadcrumb } from "./Breadcrumb";
import { ProductImageGallery } from "./ProductImageGallery";
import { ProductDetailsPanel } from "./ProductDetailsPanel";
import { CustomerReviews } from "./CustomerReviews";
import { ProductRecommendations } from "./ProductRecommendations";
import { Footer } from "./Footer";

export function ProductDetailLayout() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Jewellery", href: "/jewellery" },
    { label: "Gifts", href: "/gifts" },
    { label: "Necklace", href: "/necklace" },
    { label: "Chains", href: "/chains" },
    { label: "Shining Diva..." },
  ];

  const productImages = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=400&fit=crop",
  ];

  const productData = {
    title: "Gold-Plated Pearls Necklace",
    subtitle: "Made with 925 Silver",
    rating: 4.1,
    reviewCount: 23,
    currentPrice: 1600,
    originalPrice: 2000,
    discount: 20,
  };

  const demoProducts = [
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <OfferBanner />
      <MainHeader />

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Product Section */}
      <div className="px-4 md:px-8 lg:px-32 py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-none">
          {/* Left Column - Images */}
          <div className="flex justify-start">
            <ProductImageGallery
              images={productImages}
              productName={productData.title}
            />
          </div>

          {/* Right Column - Product Details */}
          <div className="flex flex-col gap-8">
            <ProductDetailsPanel {...productData} />
            <CustomerReviews reviews={[]} />
          </div>
        </div>
      </div>

      {/* Product Recommendations */}
      <div className="py-16">
        <ProductRecommendations
          title="Similar to this"
          products={demoProducts}
        />
      </div>

      <div className="py-16">
        <ProductRecommendations
          title="Top picks for you"
          products={demoProducts}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
