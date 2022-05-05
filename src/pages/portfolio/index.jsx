import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/navbar";
import Project from "../../components/portfolio/project";
import Layout from "../../components/layout";

function Index({ projects }) {
  const [status, setstatus] = useState("all");

  //console.log(projects);
  //const [projects, setprojects] = useState([]);

  /* useEffect(
    function () {
      axios
        .get(`${process.env.NEXT_PUBLIC_apiUrl}projects/${status}`)
        .then(function (response) {
          setprojects(response.data.projects);
        })
        .catch(function (error) {
          alert(error.response.data.message);
          console.log(error);
        });
    },
    [status]
  );*/

  return (
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
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-10/12 mx-2 md:mx-auto mt-4 md:mt-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Project project={project} key={index} />
          ))
        ) : (
          <h2>Nothing found at the moment</h2>
        )}
      </div>
    </Layout>
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
