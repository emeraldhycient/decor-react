import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/dashboard/navbar";
import Project from "../../components/dashboard/project";
import Layout from "../../components/layout";
import WithAuth from "../../Hoc/withAuth";

function Index({ projects }) {
  const [status, setstatus] = useState("all");
  /*const [projects, setprojects] = useState([]);

  useEffect(
    function () {
      axios
        .get(`${process.env.NEXT_PUBLIC_apiUrl}projects/${status}`)
        .then(function (response) {
          setprojects(response.data.projects);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [status]
  );

  */

  return (
    <WithAuth>
      <Layout>
        <Navbar />
        <div className="mt-6 md:w-10/12 mx-2 md:mx-auto  flex justify-between items-center">
          <select
            value={status}
            onChange={(e) => setstatus(e.target.value)}
            className="bg-white border-2 border-gray-200 focus:outline-none focus:border-blue-500 text-base px-4 py-2  rounded-sm"
          >
            <option value="all">All</option>
            <option value="ongoing">Ongoing</option>
            <option value="finished">Finished</option>
            <option value="pending">pending</option>
          </select>
          <button className="flex bg-amber-500 text-white  px-3 py-2 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
            <Link href="/dashboard/upload">
              <a className="flex">
                Upload Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </a>
            </Link>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-10/12 mx-2 md:mx-auto mt-4 md:mt-6">
          {projects ? (
            projects.map((project, index) => (
              <Project project={project} key={index} />
            ))
          ) : (
            <div className="mt-10">
              <h1>nothing found at the moment</h1>
            </div>
          )}
        </div>
      </Layout>
    </WithAuth>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await axios.get(`http://127.0.0.1:8000/api/projects/all`);
  const projects = data.data.projects;

  // Pass data to the page via props
  return { props: { projects } };
}

export default Index;
