import React, { useState } from "react";
import StartportBtn from "./startportBtn";
import CarouselTing from "../carouselTing";
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

function OfferSection() {
  return (
    <section
      id="offerSection"
      className="h-fit md:h-[92vh] pb-4"
      style={{
        backgroundImage: `url(${sun})`,
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
                    src={apart4}
                    width={550}
                    alt="Mpdesigns images"
                    className="h-96"
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
            </CarouselProvider>
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
