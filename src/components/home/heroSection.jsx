import StartportBtn from "./startportBtn";
import bg from "../../images/decor2.svg";
import apart1 from "../../images/apart1.png";
import apart2 from "../../images/apart2.png";
import apart3 from "../../images/apart3.png";

function HeroSection() {
  return (
    <section
      id="hero"
      className="h-fit md:h-[92vh]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-fit mx-5 md:mx-auto md:w-10/12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          <div className="w-fit md:w-10/12">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold md:font-extrabold  text-white mt-2 tracking-wide leading-snug md:leading-none">
                Create a home that defines who you are
              </h1>
            </div>
            <h6 className="text-gray-200 mt-6 break-normal	">
              Do i have permission to record this meeting gain traction, root-
              and- branch review.
            </h6>
            <StartportBtn color="text-gray-50" nextsection="offerSection" />
            <div className="flex justify-between  items-center mt-4 md:mt-6">
              <div className="w-24">
                <h3 className="text-amber-500 text-lg font-bold">100+</h3>
                <h3 className="break-normal text-sm font-semibold text-gray-400">
                  Finished projects
                </h3>
              </div>
              <div className="w-24 mt-6">
                <h3 className="text-amber-500 text-lg font-bold">20+</h3>
                <h3 className="break-normal text-sm font-semibold text-gray-400">
                  Professional Designers
                </h3>
              </div>
              <div className="w-24 mt-10">
                <h3 className="text-amber-500 text-lg font-bold">10+</h3>
                <h3 className="break-normal text-sm font-semibold text-gray-400">
                  Ongoing projects
                </h3>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={apart1}
              alt="Mpdesigns images 1"
              width={600}
              height={400}
              className="h-full rounded"
            />
            <div className="grid grid-cols-2 gap-4 mt-1 mb-4">
              <img
                src={apart2}
                alt="Mpdesigns images 1"
                width={100}
                height={100}
                className="h-20 w-full rounded"
              />
              <img
                src={apart3}
                alt="Mpdesigns images 1"
                width={100}
                height={100}
                className="h-20 w-full rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
