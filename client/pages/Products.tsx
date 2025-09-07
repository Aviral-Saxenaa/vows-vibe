import { useState, useEffect } from "react";
import { OfferBanner } from "@/components/OfferBanner";
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useApp } from "@/context/AppContext";
import { useSearchParams } from "react-router-dom";

export default function Products() {
  const { products } = useApp();
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  const categories = ["all", "necklaces", "earrings", "bracelets", "rings"];
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" }
  ];

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under-1000":
          filtered = filtered.filter(product => product.price < 1000);
          break;
        case "1000-2000":
          filtered = filtered.filter(product => product.price >= 1000 && product.price <= 2000);
          break;
        case "2000-3000":
          filtered = filtered.filter(product => product.price >= 2000 && product.price <= 3000);
          break;
        case "above-3000":
          filtered = filtered.filter(product => product.price > 3000);
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for featured
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-white">
      <OfferBanner />
      <MainHeader />
      
      <div className="px-4 md:px-8 lg:px-32 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800 font-medium">Products</span>
          {selectedCategory !== "all" && (
            <>
              <span className="text-gray-500">/</span>
              <span className="text-gray-800 font-medium capitalize">{selectedCategory}</span>
            </>
          )}
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-montserrat">
            {selectedCategory === "all" ? "All Products" : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
          </h1>
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border rounded-lg p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2"
                      />
                      <span className="capitalize">
                        {category === "all" ? "All Categories" : category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="all"
                      checked={priceRange === "all"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span>All Prices</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="under-1000"
                      checked={priceRange === "under-1000"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span>Under ₹1,000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="1000-2000"
                      checked={priceRange === "1000-2000"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span>₹1,000 - ₹2,000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="2000-3000"
                      checked={priceRange === "2000-3000"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span>₹2,000 - ₹3,000</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      value="above-3000"
                      checked={priceRange === "above-3000"}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="mr-2"
                    />
                    <span>Above ₹3,000</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">
                {filteredProducts.length} products found
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-3 py-2 bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange("all");
                    setSortBy("featured");
                  }}
                  className="mt-4 text-pink-500 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}