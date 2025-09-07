import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 px-32 py-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <a 
              href={item.href}
              className="text-muted font-montserrat text-base hover:text-neutral-600 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-muted font-montserrat text-base">
              {item.label}
            </span>
          )}
          
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 text-muted" strokeWidth={1.5} />
          )}
        </div>
      ))}
    </div>
  );
}
