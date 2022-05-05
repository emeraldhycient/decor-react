import Image from "next/image";
import Link from "next/link";

function Footer() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className="h-fit md:h-[100vh] mt-20">
      <div className="h-fit md:h-3/6 w-full bg-gray-200 pt-16 md:pt-10 pb-8 ">
        <div className="md:w-3/5 mx-3	md:mx-auto text-center">
          <h1 className="text-4xl font-medium text-gray-500">
            Subscribe To Get The Latest
            <br /> news About Us
          </h1>
          <p className="text-gray-400 mt-3 ">
            we recommend you to subscribe to our newsletter ,Enter email <br />
            below to get our daily update.
          </p>
          <form className="flex items-center mt-8 border-[.01rem]">
            <input
              type="email"
              name=""
              id=""
              className="w-full h-12 border-none"
            />
            <button className="bg-amber-500 h-12 text-white px-3 py-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="h-fit md:h-3/6 bg-[#396051] pt-8">
        <div className="md:w-6/12 grid grid-cols-2 md:grid-cols-3 gap-4  mx-auto mt-4 flex justify-between items-center">
          <div className="flex justify-between flex-col items-center order-last md:order-first">
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-globe text-white fa-lg"></i>
            </div>
            <h6 className="text-gray-200 mt-3 text-center">
              64 high road, west rock magie court new york
            </h6>
          </div>
          <div className="flex justify-between flex-col items-center">
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-envelope-o text-white fa-lg"></i>
            </div>
            <h6 className="text-gray-200 mt-3 text-center">
              Admin@mpdesign.org
            </h6>
          </div>
          <div className="flex justify-between flex-col items-center">
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-phone text-white fa-lg"></i>
            </div>
            <h6 className="text-gray-200 mt-3 text-center">+1 628-219-1324</h6>
          </div>
        </div>
        <div className="border-t-[.01rem] border-gray-300 mt-24 md:mt-20 pb-3">
          <div className="w-6/12  mx-auto mt-4 flex justify-between items-center">
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-facebook text-white fa-lg"></i>
            </div>
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-whatsapp text-white fa-lg"></i>
            </div>
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-instagram text-white fa-lg"></i>
            </div>
            <div className="bg-green-700 h-8 w-8 rounded-full flex justify-center items-center">
              <i className="fa fa-twitter text-white fa-lg"></i>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-10 flex items-center justify-center">
          <h6>Mpdesigns</h6> <h6 className="mx-2">{year}</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
