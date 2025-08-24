import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/assets/images/Banner.jpg";

export default function Banner() {
  return (
    <section className="relative w-full h-screen">
      {/* Desktop */}
      <div className="hidden md:block w-full h-full">
        <Image
          src={banner}
          alt="Modern Rodeo"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Mobile Image */}
      <div className="block md:hidden w-full h-full">
        <Image
          src={banner}
          alt="Modern Rodeo"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center text-white px-4 pb-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Modern Rodeo</h2>
        <Link
          href="/collections/modern-rodeo"
          className="inline-block border border-white px-6 py-3 text-lg font-medium hover:bg-white hover:text-black transition"
        >
          SHOP THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
