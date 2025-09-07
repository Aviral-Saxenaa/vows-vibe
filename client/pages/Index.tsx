import { Layout } from '@/components/Layout';

export default function Index() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            Welcome to Jewelry Collection
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover our exquisite collection of gold and silver jewelry. 
            Browse through our categories or shop by occasion to find the perfect piece for you.
          </p>
          <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
            <p className="text-rose-800 font-medium">
              Use the navigation menu to explore our collections and find your perfect jewelry piece.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
