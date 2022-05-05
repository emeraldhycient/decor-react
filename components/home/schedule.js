import Link from "next/link";

function Schedule() {
  return (
    <section id="schedule" className="h-fit  pb-4">
      <div className="w-fit mx-5 md:mx-auto md:w-10/12 ">
        <div className="flex flex-col justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-medium  text-gray-500 mt-2 tracking-wide leading-normal md:leading-tight">
            Schedule
          </h1>
          <div className="flex mt-4">
            <div className="bg-slate-600 h-1 w-[100px]"></div>
            <div className="bg-slate-600 h-2 w-4 mx-2"></div>
            <div className="bg-slate-600 h-1 w-[100px]"></div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center mt-4">
          <h1 className="text-lg md:text-2xl font-bold	  text-gray-500 mt-2 tracking-wide leading-normal md:leading-tight">
            Open Houses:
          </h1>
          <h6 className="text-xl font-normal text-gray-500 mt-4">
            Monday to Friday (24 hrs)
          </h6>
          <h6 className="text-xl font-normal text-gray-500 mt-3">
            Saturday : 8am -6pm
          </h6>
          <h6 className="text-xl font-normal text-gray-500 mt-3">
            Sunday : 8am -6pm
          </h6>
          <h1 className="text-lg md:text-2xl font-bold	  text-gray-500 mt-3 tracking-wide leading-normal md:leading-tight">
            Additional Shwowings by appointment :
          </h1>
          <h6 className="text-xl font-normal text-gray-500 mt-3">
            Contact Us On
          </h6>
          <h6 className="text-xl font-normal text-gray-500 mt-3">
            <a href="tel:+16282191324">+1 628-219-1324</a>
          </h6>
          <h6 className="text-xl font-normal text-gray-500 mt-3">
            <a href="mailto:admin@mpdesign.org">admin@mpdesign.org</a>
          </h6>
          <div
            className="bg-gray-200 w-56 h-56 rounded-full mt-8"
            style={{
              backgroundImage: "url(images/decor-2.jpeg)",
              backgroundSize: "contain",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
