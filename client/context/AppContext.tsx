import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
}

interface CartItem extends Product {
  quantity: number;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppContextType {
  user: User | null;
  cart: CartItem[];
  products: Product[];
  currentProduct: Product | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password: string) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setCurrentProduct: (product: Product) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

const demoProducts: Product[] = [
  {
    id: '1',
    title: 'Gold-Plated Pearls Necklace',
    price: 1600,
    originalPrice: 2000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop',
    category: 'necklaces',
    rating: 4.1,
    reviewCount: 23,
    description: 'Elegant gold-plated necklace with premium pearls',
    features: ['925 Sterling Silver', '18K Gold Plating', '10 grams', 'Premium Pearls']
  },
  {
    id: '2',
    title: 'Rose Gold Diamond Earrings',
    price: 1999,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=400&fit=crop',
    category: 'earrings',
    rating: 4.5,
    reviewCount: 45,
    description: 'Beautiful rose gold earrings with sparkling diamonds',
    features: ['Rose Gold Plated', 'Cubic Zirconia', '8 grams', 'Hypoallergenic']
  },
  {
    id: '3',
    title: 'Silver Chain Bracelet',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=400&fit=crop',
    category: 'bracelets',
    rating: 4.3,
    reviewCount: 32,
    description: 'Stylish silver chain bracelet for everyday wear',
    features: ['925 Sterling Silver', 'Adjustable Size', '6 grams', 'Tarnish Resistant']
  },
  {
    id: '4',
    title: 'Gold Wedding Ring Set',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=400&fit=crop',
    category: 'rings',
    rating: 4.8,
    reviewCount: 67,
    description: 'Perfect wedding ring set for couples',
    features: ['18K Gold', 'Diamond Accents', '12 grams', 'Lifetime Warranty']
  },
  {
    id: '5',
    title: 'Pearl Drop Earrings',
    price: 1299,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=400&fit=crop',
    category: 'earrings',
    rating: 4.2,
    reviewCount: 28,
    description: 'Classic pearl drop earrings for elegant occasions',
    features: ['Freshwater Pearls', 'Silver Posts', '5 grams', 'Gift Box Included']
  },
  {
    id: '6',
    title: 'Diamond Tennis Bracelet',
    price: 2799,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=400&fit=crop',
    category: 'bracelets',
    rating: 4.6,
    reviewCount: 41,
    description: 'Stunning tennis bracelet with brilliant diamonds',
    features: ['White Gold Plated', 'Lab Diamonds', '15 grams', 'Secure Clasp']
  }
];

const demoUsers = [
  { id: '1', name: 'Demo User', email: 'demo@vowsvibe.com', password: 'demo123' },
  { id: '2', name: 'John Doe', email: 'user@example.com', password: 'password' },
  { id: '3', name: 'Admin User', email: 'admin@vowsvibe.com', password: 'admin123' }
];

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(demoProducts[0]);
  const [products] = useState<Product[]>(demoProducts);

  const login = (email: string, password: string): boolean => {
    const foundUser = demoUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser({ id: foundUser.id, name: foundUser.name, email: foundUser.email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const register = (name: string, email: string, password: string): boolean => {
    if (name && email && password) {
      const newUser = { id: Date.now().toString(), name, email };
      setUser(newUser);
      return true;
    }
    return false;
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getCartTotal = (): number => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = (): number => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value: AppContextType = {
    user,
    cart,
    products,
    currentProduct,
    isLoggedIn: !!user,
    login,
    logout,
    register,
    addToCart,
    removeFromCart,
    updateQuantity,
    setCurrentProduct,
    getCartTotal,
    getCartItemCount
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};