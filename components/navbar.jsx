import Image from "next/image";
import Link from "next/link";
import ScrollIntoView from "react-scroll-into-view";

function Navbar() {
  return (
    <nav className="bg-[#396051] h-[4rem] w-screen sticky top-0 backdrop-blur	z-20">
      <div className="flex justify-between  items-center w-full md:w-10/12 md:mx-auto">
        <div className="mt-3 ml-4">
          <Link href="/">
            <div className="text-white font-bold text-xl flex">
              <Image
                src="/images/logo512.png"
                alt="Mpdesigns logo"
                width={40}
                height={40}
                className="h-full"
              />
              <h1 className="text-2xl font-extrabold antialiased text-gray-50">
                designs
              </h1>
            </div>
          </Link>
        </div>
        <ul className="hidden md:flex  md:w-3/12 text-white  justify-between items-center">
          <li>
            <Link href="/">
              <a className="text-white  text-base">Home</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a className="text-white  text-base">Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <a className="text-white  text-base">Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a className="text-white  text-base">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
