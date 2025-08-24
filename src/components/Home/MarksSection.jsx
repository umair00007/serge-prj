"use client";

import Image from "next/image";
import Link from "next/link";

const marks = [
  {
    icon: "/assets/images/yearmark.svg",
    title: "YEAR MARK",
    description: "The year that the article was marked.",
    link: "#",
  },
  {
    icon: "/assets/images/sdn.svg",
    title: "SPONSORS MARK",
    description: "Shows the company that made the product.",
    link: "#",
  },
  {
    icon: "/assets/images/fitness.svg",
    title: "FINENESS MARK",
    description: "The product is made from sterling silver.",
    link: "#",
  },
];

export default function MarksSection() {
  return (
    <section className="w-full py-20 border-y  border-gray-300 text-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-5">
        {marks.map((mark, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 mt-2 relative">
              <Image
                src={mark.icon}
                alt={mark.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold">{mark.title}</h3>
              <p className="text-sm text-gray-700">{mark.description}</p>
              <Link
                href={mark.link}
                className="text-sm underline mt-1 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
