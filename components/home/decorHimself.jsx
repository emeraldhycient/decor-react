import Image from "next/image";
import React from "react";

function DecorHimself() {
  return (
    <section
      id="hero"
      className="h-fit md:h-[92vh] pb-4"
      style={{
        background:
          "linear-gradient(60deg, #ffffff, #b9c7c1, #789287, #396051)",
      }}
    >
      <div className="w-fit mx-5 md:mx-auto md:w-10/12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-92 md:h-[94vh] order-last md:order-first">
            <Image
              src="/images/decor-himself.jpeg"
              width={630}
              height={665}
              alt="decor-himself"
            />
          </div>
          <div className="pt-20">
            <div className="h-fit md:h-96 bg-[#396051] mt-10 text-left p-5">
              <h1 className="text-2xl md:text-3xl font-extrabold  text-white mt-2 tracking-wide leading-normal md:leading-tight">
                Mpdesigns
              </h1>
              <p className="text-white text-base mt-4">
                Mpdesigns dates from 1966, when Cleveland bookkeeper Molly
                Pealer invested in Truman Dunham & Co., a paint
                distributorship.[4] After the partnership dissolved in 1970, he
                formed Mp design . with Edward Williams and A.T. Osborn.[4][5]
                For its first Office, in 1973 the company acquired a cooperage
                in Cleveland from Standard Oil.[4] Mpdesigns was incorporated in
                Ohio on July 16, 1984, two years after Osborn sold his interest
                in the company while retaining the retail operations.[4] The
                company grew through acquisitions and expansions in the late
                20th and early 21th century.
              </p>
              <p className="text-sm font-normal text-white italic mt-4">
                Founder: Molly Pealer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DecorHimself;
