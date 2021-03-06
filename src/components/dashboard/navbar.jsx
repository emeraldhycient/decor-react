import { useState, useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Navbar() {
  let navigate = useNavigate();

  const [user, setuser] = useState(null);
  const logout = () => {
    if (!confirm("Are you sure you want to logout?")) {
      return;
    }
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setuser(sessionStorage.getItem("token"));
    }
  }, []);

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
        {user ? (
          <div
            onClick={(e) => logout()}
            className="bg-gray-200 border-[.01rem] border-gray-300 hover:bg-blue-400 hover:text-white rounded-sm px-2 text-danger-400 text-lg font-bold"
          >
            Logout
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;
