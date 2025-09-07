import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OfferBanner } from "@/components/OfferBanner";
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";
import { CheckCircle, Package, Truck, Home } from "lucide-react";

export default function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, total } = location.state || {};

  useEffect(() => {
    if (!orderId) {
      navigate('/');
    }
  }, [orderId, navigate]);

  if (!orderId) {
    return null;
  }

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="min-h-screen bg-white">
      <OfferBanner />
      <MainHeader />
      
      <div className="px-4 md:px-8 lg:px-32 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-montserrat">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Order Number</h3>
                <p className="text-gray-600">#{orderId}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Total Amount</h3>
                <p className="text-gray-600">₹{total?.toLocaleString()}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Order Date</h3>
                <p className="text-gray-600">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Estimated Delivery</h3>
                <p className="text-gray-600">{estimatedDelivery.toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Order Status Timeline */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6 font-montserrat">Order Status</h2>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium">Order Placed</span>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
              
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Package className="w-6 h-6 text-gray-500" />
                </div>
                <span className="text-sm font-medium text-gray-500">Processing</span>
                <span className="text-xs text-gray-500">1-2 days</span>
              </div>
              
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Truck className="w-6 h-6 text-gray-500" />
                </div>
                <span className="text-sm font-medium text-gray-500">Shipped</span>
                <span className="text-xs text-gray-500">3-4 days</span>
              </div>
              
              <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <Home className="w-6 h-6 text-gray-500" />
                </div>
                <span className="text-sm font-medium text-gray-500">Delivered</span>
                <span className="text-xs text-gray-500">5-7 days</span>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-3">What happens next?</h3>
            <ul className="text-left text-blue-700 space-y-2">
              <li>• You'll receive an email confirmation shortly</li>
              <li>• We'll send you tracking information once your order ships</li>
              <li>• Your order will be delivered within 5-7 business days</li>
              <li>• You can track your order status anytime</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-colors"
              style={{ backgroundColor: "#FF8F9D" }}
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/')}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
          </div>

          {/* Contact Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              Need help with your order?
            </p>
            <button className="text-pink-500 hover:underline font-medium">
              Contact Customer Support
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}