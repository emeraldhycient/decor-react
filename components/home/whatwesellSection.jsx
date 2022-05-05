import React, { useState } from "react";
import CarouselTing from "../carouselTing";
import Link from "next/link";

function WhatwesellSection() {
  const [images, setimages] = useState([
    { id: 45, src: "/images/apart2.png" },
    { id: 56, src: "/images/apart4.png" },
    { id: 23, src: "/images/apart3.png" },
    { id: 34, src: "/images/apart1.png" },
  ]);

  return (
    <section
      className="h-fit md:h-[92vh] pb-4"
      style={{
        backgroundImage: `url(/images/apart4.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-fit md:h-[92vh]"
        style={{ backgroundColor: "rgba(255,255,255,.2)" }}
      >
        <div className="w-fit mx-5 md:mx-auto md:w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="bg-white w-full h-fit md:h-[95vh] -mt-3 rounded md:col-span-2">
            <div className="my-5 md:my-20 mx-5 md:mx-20">
              <h1 className="text-4xl md:text-5xl font-extrabold md:font-extrabold  text-slate-800 mt-2 tracking-wide leading-normal md:leading-tight">
                We don&apos;t sell furniture,
                <br /> We sell feelings!
              </h1>
              <p className="my-8 text-gray-400">
                The latest interior trend making its way around video sharing
                app TikTok? Anything coastal grandmother, an aesthetic coined by
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex   items-center mt-4 md:mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 bg-amber-500 text-white rounded-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <h5 className="text-base font-semibold text-slate-800 mx-3">
                    Flexible Time
                  </h5>
                </div>
                <div className="flex   items-center mt-4 md:mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 bg-amber-500 text-white rounded-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <h5 className="text-base font-semibold text-slate-800 mx-3">
                    Flexible Time
                  </h5>
                </div>
                <div className="flex   items-center mt-4 md:mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 bg-amber-500 text-white rounded-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <h5 className="text-base font-semibold text-slate-800 mx-3">
                    Flexible Time
                  </h5>
                </div>
                <div className="flex   items-center mt-4 md:mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 bg-amber-500 text-white rounded-full"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <h5 className="text-base font-semibold text-slate-800 mx-3">
                    Flexible Time
                  </h5>
                </div>
              </div>
              <Link href="/portfolio" passHref>
                <button className="bg-amber-500 text-slate-600 mt-6 px-3 py-2 rounded-sm">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full h-fit md:h-[80vh]  md:order-last pt-12	">
            <CarouselTing images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatwesellSection;
