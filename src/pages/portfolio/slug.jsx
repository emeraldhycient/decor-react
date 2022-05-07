import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import apart3 from "../../images/apart3.png";

function Project() {
  const { slug } = useParams();

  const [project, setproject] = useState();

  useEffect(
    function () {
      axios
        .get(`https://api.mpdesign.org/api/project/${slug}`)
        .then(function (response) {
          //console.log(response.data.project);
          setproject(response.data.project);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [slug]
  );

  return (
    <Layout title={project ? project.slug : "individual project view"}>
      <Navbar />
      <div className="w-11/12 md:w-10/12 mx-auto mt-4 md:mt-6">
        {project ? (
          <>
            <div
              className="h-[400px] bg-gray-400"
              style={{
                backgroundImage: `url(${apart3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/*put carousell here with images from project  */}
            </div>
            <div className="block md:flex md:justify-between items-center w-full">
              <button className="bg-blue-300 text-white mt-6 px-3 py-2 rounded-sm">
                project status : {project.Project_status}
              </button>
              <div className="mt-4 md:mt-0">
                <h4 className="text-slate-600">
                  project start : {project.Project_date}
                </h4>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">{project.description}</p>
            </div>
          </>
        ) : (
          <h1 className="text-slate-800 my-8 mx-8 text-lg font-bold">
            We Could find what you are looking for at the moment
          </h1>
        )}
      </div>

      <Footer />
    </Layout>
  );
}

/*export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const { slug } = params;
  const data = await axios.get(`https://api.mpdesign.org/api/project/${slug}`);
  const project = data.data.project;

  // Pass data to the page via props
  return { props: { project } };
}
*/
export default Project;
