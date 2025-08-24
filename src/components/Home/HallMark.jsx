import Image from "next/image";
import React from "react";

const HallMark = () => {
  return (
    <div>
      {" "}
      <section className="w-full text-center py-10 px-5 font-serge">
        <p className="text-lg sm:text-xl md:text-3xl font-medium text-black max-w-3xl mx-auto">
          Every piece is made from{" "}
          <span className="font-">925 Sterling Silver</span>,<br /> designed in
          London and hallmarked at the <br />
          Goldsmiths' Assay Office
        </p>
        <div className="flex justify-center items-center gap-2 mt-6 ">
          <Image
            src="/assets/images/Hallmark_24.svg"
            alt="Hallmark"
            width={150}
            height={150}
          />
        </div>
      </section>
    </div>
  );
};

export default HallMark;
