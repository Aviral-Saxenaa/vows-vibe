import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { OfferBanner } from "@/components/OfferBanner";
import { MainHeader } from "@/components/MainHeader";
import { Footer } from "@/components/Footer";
import { useApp } from "@/context/AppContext";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login, register } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      const success = login(email, password);
      if (success) {
        toast({
          title: "Login Successful!",
          description: "Welcome back!",
        });
        navigate('/');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Try demo@vowsvibe.com / demo123",
          variant: "destructive",
        });
      }
    } else {
      const success = register(name, email, password);
      if (success) {
        toast({
          title: "Registration Successful!",
          description: `Welcome to Vows Vibe, ${name}!`,
        });
        navigate('/');
      } else {
        toast({
          title: "Registration Failed",
          description: "Please fill in all fields",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <OfferBanner />
      <MainHeader />
      
      <div className="px-4 md:px-8 lg:px-32 py-8 md:py-16">
        <div className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg border">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 font-montserrat">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors"
              style={{ backgroundColor: "#FF8F9D" }}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-pink-500 font-medium hover:underline"
                style={{ color: "#FF8F9D" }}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
          
          {isLogin && (
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className="text-xs text-gray-600 text-center">
                <strong>Demo Accounts:</strong><br/>
                demo@vowsvibe.com / demo123<br/>
                user@example.com / password
              </p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
