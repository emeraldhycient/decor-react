import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Project from "../project";

function Projects({ projects }) {
  /* const [projects, setprojects] = useState([]);

  useEffect(function () {
    axios
      .get(`${process.env.NEXT_PUBLIC_apiUrl}projects/all`)
      .then(function (response) {
        setprojects(response.data.projects);
      })
      .catch(function (error) {
        alert(error.response.data.message);
        console.log(error);
      });
  }, []);

  */

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
          <Link href="/portfolio" passHref>
            <button
              className={`mt-8 md:mt-1 border-[.01rem] border-amber-500 px-3 py-2 rounded-sm text-amber-500 hover:bg-amber-500 hover:text-white`}
            >
              See Our Portfolio
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 pt-12">
          {projects.length > 0 ? (
            projects.map((project) => (
              <Project
                key={project.id}
                slug={project.slug}
                image={project.images}
              />
            ))
          ) : (
            <h1>No projects Found</h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
