import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apart1 from "../../images/apart1.png";

function Projects() {
  const [projects, setprojects] = useState([]);

  useEffect(function () {
    axios
      .get(`https://api.mpdesign.org/api/projects/all`)
      .then(function (response) {
        //console.log(response.data.projects);
        const data = response.data.projects.slice(0, 8);
        setprojects(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section id="Portfolio" className="h-fit">
      <div className="w-[98vw] mx-auto md:w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center  ">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-black  text-slate-800 mt-2 tracking-wide leading-normal md:leading-tight">
              Our Recent
              <br /> Design Projects.
            </h1>
          </div>
          <Link to="/portfolio">
            <button
              className={`mt-8 md:mt-1 border-[.01rem] border-amber-500 px-3 py-2 rounded-sm text-amber-500 hover:bg-amber-500 hover:text-white`}
            >
              See Our Portfolio
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 pt-12">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="h-56 md:h-80 bg-gray-300"
                style={{
                  backgroundImage: `url(https://api.mpdesign.org/storage/${project.images[0].path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="bg-amber-500 text-white mt-6 px-3 py-2 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
                  <Link to={`/portfolio/${project.slug}`}> View Project</Link>
                </button>
              </div>
            ))
          ) : (
            <h2 className="text-slate-800 my-8 mx-8 text-lg font-bold">
              Nothing found at the moment
            </h2>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
