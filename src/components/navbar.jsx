import { Link } from "react-router-dom";
import { logo } from "../images/logo.png";
function Navbar() {
  return (
    <nav className="bg-[#396051] h-[4rem] w-screen sticky top-0 backdrop-blur	z-20">
      <div className="flex justify-between  items-center w-full md:w-10/12 md:mx-auto">
        <div className="mt-3 ml-4">
          <Link to="/">
            <div className="text-white font-bold text-xl flex">
              <img
                src={logo}
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
            <Link to="/">
              <span className="text-white  text-base">Home</span>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <span className="text-white  text-base">Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <span className="text-white  text-base">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="text-white  text-base">Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
