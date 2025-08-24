"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "About Us",
    links: [
      { label: "About Us", href: "/pages/about-us" },
      { label: "Hallmarking", href: "/pages/hallmarking" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/pages/terms-conditions" },
      { label: "Privacy Policy", href: "/pages/privacy-policy" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Delivery", href: "/pages/delivery" },
      { label: "Returns", href: "/pages/returns" },
      { label: "Product Search", href: "/search" },
    ],
  },
  {
    title: "Customer Services",
    links: [
      { label: "Care Guide", href: "/pages/care-guide" },
      { label: "Size Guide", href: "/pages/size-guides" },
      {
        label: "Student Discount",
        href: "/pages/student-discount",
      },
      {
        label: "Help Centre",
        href: "/pages/help-centre",
      },
      {
        label: "Track Your Order",
        href: "/pages/track-your-order",
      },
    ],
  },
  {
    title: "Stockists",
    links: [{ label: "View Stockists", href: "/pages/stockists" }],
  },
];

const socials = [
  {
    href: "https://www.facebook.com/SDNIMES/",
    src: "/assets/images/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/sergedenimes/",
    src: "/assets/images/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://twitter.com/SergeDeNimes/",
    src: "/assets/images/twitter.svg",
    alt: "Twitter",
  },
  {
    href: "https://www.tiktok.com/@sergedenimes",
    src: "/assets/images/tiktok.svg",
    alt: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-10 px-6 text-sm font-semibold">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-gray-800 uppercase mb-3">{section.title}</h3>
            <ul className="space-y-4 px-20 ps-0">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex gap-4">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={social.src}
                alt={social.alt}
                className="h-6 w-6 opacity-70 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Serge DeNimes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
