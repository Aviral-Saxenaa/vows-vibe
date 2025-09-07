import { useState } from "react";
import { OfferBanner } from "@/components/OfferBanner";
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Truck, Shield } from "lucide-react";

export default function Checkout() {
  const { cart, getCartTotal, getCartItemCount, user, isLoggedIn } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ")[1] || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    paymentMethod: "card"
  });

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      toast({
        title: "Please Login",
        description: "You need to login to place an order.",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }

    // Validate form
    const requiredFields = ['firstName', 'lastName', 'address', 'city', 'state', 'pincode', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate order placement
    toast({
      title: "Order Placed Successfully!",
      description: `Your order #${Date.now()} has been confirmed. You'll receive an email confirmation shortly.`,
    });
    
    // Redirect to order confirmation
    navigate("/order-confirmation", { 
      state: { 
        orderId: Date.now(),
        total: Math.round(getCartTotal() * 1.18)
      }
    });
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const subtotal = getCartTotal();
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <OfferBanner />
      <MainHeader />
      
      <div className="px-4 md:px-8 lg:px-32 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <button onClick={() => navigate('/')} className="text-gray-500 hover:text-gray-700">
            Home
          </button>
          <span className="text-gray-500">/</span>
          <button onClick={() => navigate('/cart')} className="text-gray-500 hover:text-gray-700">
            Cart
          </button>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800 font-medium">Checkout</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 font-montserrat">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold mb-4 font-montserrat">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
                <div className="mt-4 space-y-4">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="PIN Code"
                      className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold mb-4 font-montserrat">Payment Method</h2>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <CreditCard className="w-5 h-5 mr-2" />
                    <span>Credit/Debit Card</span>
                  </label>
                  
                  {formData.paymentMethod === "card" && (
                    <div className="ml-8 space-y-4">
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        placeholder="Card number"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="expiryDate"
                          value={cardData.expiryDate}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          required
                        />
                        <input
                          type="text"
                          name="cvv"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          placeholder="CVV"
                          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                          required
                        />
                      </div>
                      <input
                        type="text"
                        name="cardName"
                        value={cardData.cardName}
                        onChange={handleCardChange}
                        placeholder="Name on card"
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        required
                      />
                    </div>
                  )}

                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <Truck className="w-5 h-5 mr-2" />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
                style={{ backgroundColor: "#FF8F9D" }}
              >
                Place Order - ₹{total.toLocaleString()}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm h-fit sticky top-4">
            <h2 className="text-xl font-semibold mb-6 font-montserrat">Order Summary</h2>
            
            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                    <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="space-y-3 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal ({getCartItemCount()} items)</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{tax.toLocaleString()}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-6 flex items-center justify-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure checkout powered by SSL encryption</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}