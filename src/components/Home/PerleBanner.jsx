import Image from "next/image";
import Link from "next/link";

export default function PerleBanner() {
  return (
    <section className="relative w-full">
      {/* Desktop image */}
      <div className="hidden md:block">
        <Image
          src="/assets/images/Perle.jpg"
          alt="Perle Banner"
          width={1946}
          height={851}
          className="w-full h-screen object-cover"
          priority
        />
      </div>
      {/* Mobile image */}
      <div className="block md:hidden">
        <Image
          src="/assets/images/Perle.jpg"
          alt="Perle Banner Mobile"
          width={1946}
          height={2434}
          className="w-full object-cover aspect-[5/7]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center text-white pb-6">
        <h2 className="text-3xl font-bold mb-4">Perle</h2>
        <Link
          href="/collections/perle"
          className="inline-block border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
