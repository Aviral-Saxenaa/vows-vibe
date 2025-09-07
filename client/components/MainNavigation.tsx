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
          className="flex items-center gap-3 px-3 py-4 bg-white rounded-sm hover:bg-gray-50 transition-colors group"
        >
          <div className="relative">
            <User className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
            <div className="absolute -bottom-1 -right-1">
              <div className="w-4 h-4 bg-gray-800 rounded-full flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>
          <span className="text-gray-800 font-montserrat font-medium text-base">
            Login / SignUp
          </span>
        </Link>
      </div>
    </div>
  );
}
