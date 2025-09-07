import { OfferBanner } from "@/components/OfferBanner";
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { products } = useApp();
  const navigate = useNavigate();

  const categories = [
    { name: "Necklaces", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop", count: 25 },
    { name: "Earrings", image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=300&h=300&fit=crop", count: 18 },
    { name: "Bracelets", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop", count: 12 },
    { name: "Rings", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop", count: 30 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <OfferBanner />
      <MainHeader />
      
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-montserrat">
            Discover Your Perfect
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-pink-600 mb-6 font-montserrat">
            Jewelry Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Handcrafted with love, designed for elegance. Find the perfect piece for every occasion.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
            style={{ backgroundColor: "#FF8F9D" }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate(`/products?category=${category.name.toLowerCase()}`)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-center font-montserrat">
                {category.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {category.count} items
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 md:px-8 lg:px-32 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
            style={{ backgroundColor: "#FF8F9D" }}
          >
            View All Products
          </button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-8 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-montserrat">
          Why Choose Vows Vibe?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Premium Quality</h3>
            <p className="text-gray-600">
              All our jewelry is crafted with the finest materials and attention to detail.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Free Shipping</h3>
            <p className="text-gray-600">
              Enjoy free shipping on all orders above ₹1000 with secure packaging.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Easy Returns</h3>
            <p className="text-gray-600">
              30-day hassle-free returns and exchanges for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}