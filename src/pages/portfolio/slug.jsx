import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CarouselTing from "../../components/carouselTing";

function Project() {
  const { slug } = useParams();

  const [project, setproject] = useState([]);
  const [images, setimages] = useState([]);

  useEffect(
    function () {
      axios
        .get(`https://api.mpdesign.org/api/project/${slug}`)
        .then(function (response) {
          console.log(response.data.project);
          const Images = Object.values(response.data.project.images);
          setimages(Images);
          setproject(response.data.project);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [slug]
  );

  return (
    <Layout>
      <Navbar />
      <div className="w-11/12 md:w-10/12 mx-auto mt-4 md:mt-6">
        <div className="h-[400px] bg-gray-400">
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
