import { Star, Package, Shield, Award, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ProductDetailsPanelProps {
  title: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

export function ProductDetailsPanel({
  title,
  subtitle,
  rating,
  reviewCount,
  currentPrice,
  originalPrice,
  discount,
}: ProductDetailsPanelProps) {
  const { toast } = useToast();
  const [pincode, setPincode] = useState("");
  const [deliveryMsg, setDeliveryMsg] = useState<string | null>(null);
  const [pinError, setPinError] = useState<string | null>(null);

  const handleAddToCart = () => {
    toast({ title: "Added to cart", description: `${title} added to cart` });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceed to checkout",
      description: "Redirecting to payment...",
    });
  };

  const handleCheckPincode = () => {
    if (!/^[0-9]{6}$/.test(pincode)) {
      setPinError("Enter a valid 6-digit pincode");
      setDeliveryMsg(null);
      return;
    }
    setPinError(null);
    const d = new Date();
    d.setDate(d.getDate() + 3);
    const day = d.toLocaleString("en-GB", { day: "2-digit" });
    const month = d.toLocaleString("en-GB", { month: "short" });
    setDeliveryMsg(`Get it by ${day} ${month}`);
  };

  return (
    <div className="flex flex-col gap-8 max-w-lg">
      {/* Product Title and Rating */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-neutral text-3xl font-medium font-montserrat">
            {title}
          </h1>
          <h2 className="text-muted text-3xl font-bold font-montserrat">
            {subtitle}
          </h2>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 px-1.5 py-0.5 flex items-center gap-2">
              <span className="text-white font-montserrat text-lg font-medium">
                {rating}
              </span>
              <Star
                className="w-4 h-4 text-white"
                fill="white"
                strokeWidth={0}
              />
            </div>
            <span className="text-neutral text-2xl font-bold font-montserrat">
              ({reviewCount})
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-4">
          <span className="text-neutral text-4xl font-bold font-montserrat">
            ₹ {currentPrice.toLocaleString()}
          </span>
          <span className="text-muted text-lg font-bold font-montserrat line-through">
            ₹ {originalPrice.toLocaleString()}
          </span>
          <span className="text-green-600 text-2xl font-bold font-montserrat">
            ({discount}% off)
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-14">
          <div className="flex items-center gap-2.5">
            <Package className="w-12 h-12 text-neutral" strokeWidth={1.5} />
            <span className="text-neutral text-xl font-medium font-montserrat">
              Easy 30 Day Return
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Package className="w-12 h-12 text-neutral" strokeWidth={1.5} />
            <span className="text-neutral text-xl font-medium font-montserrat">
              925 Silver Plating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[3.75rem]">
          <div className="flex items-center gap-2.5">
            <Shield className="w-12 h-12 text-neutral" strokeWidth={1.5} />
            <span className="text-neutral text-xl font-medium font-montserrat">
              6- Month Warranty
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-12 h-12 text-neutral" strokeWidth={1.5} />
            <span className="text-neutral text-xl font-medium font-montserrat">
              Premium Gold
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleAddToCart}
          className="flex-1 h-[68px] px-8 border font-montserrat text-xl font-bold transition-colors hover:bg-pink-50"
          style={{
            borderColor: "#FF8F9D",
            color: "#FF8F9D",
          }}
        >
          ADD TO CART
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 h-[68px] px-8 font-montserrat text-xl font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#FF8F9D" }}
        >
          BUY NOW
        </button>
      </div>

      {/* Delivery and Offers */}
      <div className="flex flex-col gap-3">
        {/* Delivery Time */}
        <div className="flex flex-col gap-3">
          <h3 className="text-neutral text-xl font-bold font-montserrat">
            Estimated Delivery Time
          </h3>
          <div className="flex items-center gap-3">
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              inputMode="numeric"
              maxLength={6}
              placeholder="Enter Pincode"
              className="flex-1 border border-muted px-3.5 py-3 bg-white text-neutral font-montserrat text-lg outline-none"
              aria-label="Enter delivery pincode"
            />
            <button
              onClick={handleCheckPincode}
              className="px-5 py-3 font-montserrat text-lg font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FF8F9D" }}
            >
              Check
            </button>
          </div>
          {pinError && (
            <p className="text-red-600 text-sm font-montserrat">{pinError}</p>
          )}
          {deliveryMsg && (
            <div className="text-lg font-montserrat">
              <span className="text-muted">Delivery to {pincode}: </span>
              <span className="font-bold" style={{ color: "#FF8F9D" }}>
                {deliveryMsg}
              </span>
            </div>
          )}
        </div>

        {/* Offers */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-black text-xl font-bold font-montserrat">
                Offers
              </span>
              <span className="text-muted text-lg font-normal font-montserrat">
                2 available
              </span>
            </div>
            <span
              className="text-xl font-bold font-montserrat"
              style={{ color: "#FF8F9D" }}
            >
              Check
            </span>
          </div>
          <p className="text-neutral text-lg italic font-medium font-montserrat">
            Coupon can be applied at checkout
          </p>
        </div>
      </div>

      {/* Product Description */}
      <div className="border-t pt-8" style={{ borderColor: "#FF8F9D" }}>
        <div className="flex flex-col gap-3">
          <h3 className="text-black text-xl font-bold font-montserrat">
            Product Description
          </h3>

          <div className="flex flex-col gap-2">
            {[
              { label: "Material:", value: "925 Sterling Silver" },
              { label: "Plating:", value: "18K Gold" },
              { label: "Weight:", value: "10grams" },
              { label: "Stone Type:", value: "Premium Jerkin" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <Check className="w-5 h-5 text-green-600" strokeWidth={1.75} />
                <span className="text-lg font-montserrat">
                  <span className="font-bold text-neutral">{item.label}</span>
                  <span className="font-normal text-muted"> {item.value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping */}
        <div className="flex flex-col gap-3 mt-6">
          <h3 className="text-black text-xl font-bold font-montserrat">
            Shipping
          </h3>
          <div className="flex items-center gap-3.5">
            <span className="text-lg font-montserrat">
              <span className="font-normal text-muted">Get it by </span>
              <span className="font-bold" style={{ color: "#FF8F9D" }}>
                25 Sept
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
