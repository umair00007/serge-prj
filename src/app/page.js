import Banner from "@/components/Home/Banner";
import Header from "@/components/Header";
import React from "react";
import CoreBanner from "@/components/Home/CoreBanner";
import ProductsHome from "@/components/Home/ProductsHome";
import PerleBanner from "@/components/Home/PerleBanner";
import HallMark from "@/components/Home/HallMark";
import SignupBlock from "@/components/Home/SignupBlock";
import OurBrandsCarousel from "@/components/Home/OurBrandsCarousel";
import Footer from "@/components/Home/Footer";
import MarksSection from "@/components/Home/MarksSection";

const page = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProductsHome type="modern" />
      <CoreBanner />
      <ProductsHome type="core" />
      <PerleBanner />
      <ProductsHome type="perle" />
      <HallMark />
      <div className="h-85">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="/assets/images/Perle.jpg"
        >
          <source src="/assets/videos/Polishing.mp4" type="video/mp4" />
        </video>
      </div>
      <SignupBlock />
      <OurBrandsCarousel />
      <MarksSection />
      <Footer />
      <div className="fixed bottom-0 right-4">
        <button className="bg-black text-white p-2 px-3 font-semibold shadow-lg">
          Loyalty Scheme
        </button>
      </div>
    </div>
  );
};

export default page;
