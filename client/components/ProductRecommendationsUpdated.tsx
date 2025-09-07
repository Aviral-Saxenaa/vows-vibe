import { ProductCard } from "./ProductCard";

interface RecommendedProduct {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
}

interface ProductRecommendationsProps {
  title: string;
  products: RecommendedProduct[];
}

export function ProductRecommendations({ title, products }: ProductRecommendationsProps) {
  // Convert to full product format for ProductCard
  const fullProducts = products.map(p => ({
    ...p,
    category: "jewelry",
    description: p.title,
    features: ["Premium Quality", "Handcrafted", "Warranty Included"]
  }));

  return (
    <div className="px-4 md:px-8 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-montserrat">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {fullProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}