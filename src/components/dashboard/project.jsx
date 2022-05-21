import { Link } from "react-router-dom";
import apart4 from "../../images/apart4.png";
import axios from "axios";

function Project({ project }) {
  const Btn = ({ link }) => (
    <button className="m-0 bg-amber-500 text-white px-3 py-1 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
      <Link to={link}> View Project</Link>
    </button>
  );

  const deletebtn = (slug) => {
    if (!confirm("are you sure , you want to delete this")) {
      return false;
    }

    axios
      .get(`https://api.mpdesign.org/api/projects/delete/${slug}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        //console.log(response.data);
        alert(response.data.message);
        window.location.reload();
      })
      .catch(function (error) {
        //console.log(error.response.data);
        alert(error.response.data.message);
      });
  };

  console.log(project.images[0].path);

  return (
    <section className="flex flex-col w-full">
      <div
        className="h-56 md:h-80 bg-gray-300"
        style={{
          backgroundImage: `url(https://api.mpdesign.org/storage/${project.images[0].path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*update bg image by the first index */}
        <div className="flex justify-between items-center">
          <Btn link={`/portfolio/${project.slug}`} />

          <button className="bg-blue-300 px-2 rounded-sm  hover:bg-white hover:text-amber-500 ">
            <Link to={`/dashboard/update/${project.slug}`}>
              <div className="flex">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
            </Link>
          </button>
        </div>
      </div>
      <h1 className="text-lg font-bold my-4 mx-1 w-full">{project.slug}</h1>
      <button
        onClick={(e) => deletebtn(project.slug)}
        className="bg-slate-900 text-white px-3 py-1 rounded-sm  hover:bg-white hover:text-slate-900 hover:border-[.01rem] hover:border-slate-900 scale-90 hover:scale-75"
      >
        Delete
      </button>
    </section>
  );
}

export default Project;
