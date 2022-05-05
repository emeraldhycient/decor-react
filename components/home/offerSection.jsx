import React, { useState } from "react";
import StartportBtn from "./startportBtn";
import CarouselTing from "../carouselTing";

function OfferSection() {
  const [images, setimages] = useState([
    { id: 23, src: "/images/apart3.png" },
    { id: 56, src: "/images/apart4.png" },
    { id: 34, src: "/images/apart1.png" },
    { id: 45, src: "/images/apart2.png" },
  ]);

  return (
    <section
      id="offerSection"
      className="h-fit md:h-[92vh] pb-4"
      style={{
        backgroundImage: `url(/images/sun.png)`,
        backgroundSize: "contain",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-fit md:h-[92vh]"
        style={{ backgroundColor: "rgba(255,255,255,.2)" }}
      >
        <div className="w-fit mx-5 md:mx-auto md:w-10/12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          <div className="w-full h-fit md:h-[80vh] order-last md:order-first	">
            <CarouselTing images={images} />
          </div>
          <div className="bg-white w-full h-fit md:h-[80vh] rounded pt-12">
            <div className="my-3 mx-5">
              <h1 className="text-4xl md:text-5xl font-extrabold md:font-extrabold  text-slate-800 mt-2 tracking-wide leading-normal md:leading-tight">
                Natural
                <br /> inspiration in <br /> every room
              </h1>
              <p className="mt-4 text-gray-400">
                The latest interior trend making its way around video sharing
                app TikTok? Anything coastal grandmother, an aesthetic coined by
              </p>
              <StartportBtn
                color="text-gray-300"
                nextsection="whatwesellSection"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
