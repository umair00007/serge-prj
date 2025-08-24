import Image from "next/image";
import Link from "next/link";

export default function Products({ products }) {
  return (
    <section className="w-full text-black p-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product, idx) => (
          <Link href={product.href} key={idx}>
            <div className="flex flex-col group">
              <div className="relative w-full aspect-square">
                <div className="relative w-full aspect-square">
                  {product?.tag && (
                    <span className="absolute top-3 left-2 z-10 bg-black text-white text-[10px] px-2 py-1 uppercase rounded-sm">
                      {product?.tag}
                    </span>
                  )}

                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={product.images[1]}
                    alt={product.title}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-xs font-semibold uppercase">
                  {product.title}
                </h3>
                <p className="text-xs mt-1">{product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
