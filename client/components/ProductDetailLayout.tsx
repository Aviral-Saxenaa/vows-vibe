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
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
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
      <div className="px-32 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-none">
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
