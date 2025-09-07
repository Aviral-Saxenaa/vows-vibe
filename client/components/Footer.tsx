import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const quickLinks = [
    "Customer Reviews",
    "Our Blogs",
    "Store Locator",
    "Jewellery Care",
    "Join Us",
  ];

  const details = [
    "Shipping & Returns",
    "Privacy Policy",
    "International Shipping",
    "FAQ's and Support",
    "Terms of Service",
  ];

  return (
    <footer className="w-full bg-gray-200/68">
      {/* Main Footer Content */}
      <div className="px-32 py-9">
        <div className="flex justify-between gap-32 mb-12">
          {/* Quick Links */}
          <div className="flex flex-col gap-9">
            <h3 className="text-accent font-montserrat text-base font-bold">
              Quick Links
            </h3>
            <div className="flex flex-col gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral font-montserrat text-base font-medium hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-9">
            <h3 className="text-accent font-montserrat text-base font-bold">
              Details
            </h3>
            <div className="flex flex-col gap-6">
              {details.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral font-montserrat text-base font-medium hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Details (Second Column) */}
          <div className="flex flex-col gap-9">
            <h3 className="text-accent font-montserrat text-base font-bold">
              Details
            </h3>
            <div className="flex flex-col gap-6">
              {details.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral font-montserrat text-base font-medium hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-9 max-w-xs">
            <h3 className="text-accent font-montserrat text-base font-bold">
              Contact Us
            </h3>
            <div className="flex flex-col gap-6 text-neutral font-montserrat text-base font-medium">
              <div>
                <p className="mb-4">
                  Elegant Jewels SF-11, Ansal Fortune Arcade, K Block, K-27,
                  Sector 18, Noida, Uttar Pradesh 201301
                </p>
                <p className="mb-4">
                  For any suggestions, queries or complaints please contact us:
                </p>
                <p className="mb-2">Elegantjewel Private Limited</p>
                <p className="mb-2">contact@elegantjewels.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-neutral font-montserrat text-base font-medium mr-4">
            Our Social Links:
          </span>
          <a
            href="#"
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <Linkedin className="w-6 h-6 text-accent" />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <Facebook className="w-6 h-6 text-accent" />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-gray-100 rounded transition-colors"
          >
            <Instagram className="w-6 h-6 text-accent" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full px-32 py-3" style={{ backgroundColor: "#CA8787" }}>
        <p className="text-white font-montserrat text-sm font-medium">
          © 2024 Elegant Jewels. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
