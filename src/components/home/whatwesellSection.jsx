import React, { useState } from "react";
import CarouselTing from "../carouselTing";
import { Link } from "react-router-dom";

import sun from "../../images/sun.png";
import apart1 from "../../images/apart1.png";
import apart2 from "../../images/apart2.png";
import apart3 from "../../images/apart3.png";
import apart4 from "../../images/apart4.png";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
              <Link to="/portfolio">
                <button className="bg-amber-500 text-slate-600 mt-6 px-3 py-2 rounded-sm">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full h-fit md:h-[80vh]  md:order-last pt-12	">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={125}
              totalSlides={3}
            >
              <Slider
                className="bg-white h-96 md:h-[72vh]"
                isPlaying={true}
                infinite={true}
              >
                <Slide>
                  <img
                    src={apart3}
                    className="h-96"
                    width={550}
                    alt="Mpdesigns images"
                  />
                </Slide>
                <Slide>
                  <img
                    src={apart1}
                    className="h-96"
                    width={550}
                    alt="Mpdesigns images"
                  />
                </Slide>
                <Slide>
                  <img
                    src={apart4}
                    className="h-96"
                    width={550}
                    alt="Mpdesigns images"
                  />
                </Slide>
                <Slide>
                  <img
                    src={apart2}
                    className="h-96"
                    width={550}
                    alt="Mpdesigns images"
                  />
                </Slide>
              </Slider>
              <ButtonBack className="bg-white border-[.012rem] border-[#396051] rounded-sm px-5 py-2 mx-3 mt-4 hover:scale-75	">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                </svg>{" "}
              </ButtonBack>
              <ButtonNext className="bg-white border-[.012rem] border-[#396051] rounded-sm px-5 py-2 mt-4 hover:scale-90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>{" "}
              </ButtonNext>
            </CarouselProvider>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatwesellSection;
