import { Layout } from "./Layout";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium mb-4">
              This page is coming soon!
            </p>
            <p className="text-blue-700 text-sm">
              Continue prompting to help us build out this section with the
              specific content and features you'd like to see.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
