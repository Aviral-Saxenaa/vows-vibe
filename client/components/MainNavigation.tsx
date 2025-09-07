import { Link } from 'react-router-dom';
import { Plus, ArrowUpRight, User, Check } from 'lucide-react';

const navigationItems = [
  {
    id: 'add-account',
    label: 'Add Account',
    icon: <Plus className="w-5 h-5" strokeWidth={1.5} />,
    href: '/add-account',
    type: 'action'
  },
  {
    id: 'gold-jewellery',
    label: 'Gold jewellery',
    icon: <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />,
    href: '/gold-jewellery',
    type: 'category'
  },
  {
    id: 'silver-jewellery',
    label: 'Silver Jewellery',
    icon: <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />,
    href: '/silver-jewellery',
    type: 'category'
  },
  {
    id: 'trending-collection',
    label: 'Trending Collection',
    icon: <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />,
    href: '/trending-collection',
    type: 'category'
  },
  {
    id: 'gifts',
    label: 'Gifts',
    icon: <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />,
    href: '/gifts',
    type: 'category'
  },
  {
    id: 'shop-by-occasion',
    label: 'Shop by Occasion',
    icon: <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />,
    href: '/shop-by-occasion',
    type: 'category'
  }
];

export function MainNavigation() {
  return (
    <div className="min-h-screen lg:w-80 w-full" style={{ backgroundColor: '#CA8787' }}>
      <div className="flex flex-col pt-6 px-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
        {/* Navigation Items */}
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="flex items-center gap-3 px-3 py-3.5 border-b border-white hover:bg-white/10 transition-colors group h-12"
          >
            <div className="text-white group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-white font-montserrat font-medium text-base">
              {item.label}
            </span>
          </Link>
        ))}

        {/* Login/SignUp Special Item */}
        <Link
          to="/login"
          className="flex items-center gap-3 px-3 py-3.5 bg-white hover:bg-gray-50 transition-colors group h-12"
        >
          <div className="relative">
            <User className="w-5 h-5" strokeWidth={1.5} style={{ color: '#2D2D2D' }} />
            <div className="absolute -bottom-1 -right-1">
              <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2D2D2D' }}>
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>
          <span className="font-montserrat font-medium text-base" style={{ color: '#2D2D2D' }}>
            Login / SignUp
          </span>
        </Link>
      </div>
    </div>
  );
}
