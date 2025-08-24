"use client";

import Image from "next/image";
import Link from "next/link";
import core from "../../../public/assets/images/Core.jpg";

export default function CoreBanner() {
  return (
    <section className="relative w-full">
      {/* Desktop Image */}
      <div className="hidden md:block relative h-screen">
        <Image
          src={core}
          alt="Core Collection"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Mobile Image */}
      <div className="block md:hidden relative aspect-[5/7]">
        <Image
          src={core}
          alt="Core Collection"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center text-center text-white p-6">
        <h2 className="text-3xl md:text-5xl font-semibold">Core Collection</h2>
        <Link
          href="/collections/core-collection"
          className="mt-4 px-6 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
