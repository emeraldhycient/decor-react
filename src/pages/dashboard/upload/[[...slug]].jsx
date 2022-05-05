import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../../../components/layout";
import Navbar from "../../../components/dashboard/navbar";
import Image from "next/image";
import WithAuth from "../../../Hoc/withAuth";

function CreateOrUpdate() {
  const router = useRouter();
  const { slug } = router.query;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [project_status, setproject_status] = useState("");
  const [project_date, setproject_date] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const ShowPreview = ({ image }) => {
    if (image) {
      return (
        <Image
          src={image}
          height={100}
          width={100}
          className="w-full h-20 hover:scale-150"
          alt="preview"
        />
      );
    }
  };

  const handleMultipleImages = (evnt) => {
    const selectedFIles = [];
    const targetFiles = evnt.target.files;
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      console.log(URL.createObjectURL(file));
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImages(selectedFIles);
  };

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      axios
        .get(`${process.env.NEXT_PUBLIC_apiUrl}project/${slug}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          const { project } = response.data;
          setTitle(project.slug);
          setDescription(project.description);

          setproject_status(project.Project_status);
          setproject_date(project.Project_date);
          console.log(project);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("slug", title);
    formData.append("description", description);
    formData.append("project_status", project_status);
    formData.append("project_date", project_date);
    formData.append("images", images);

    axios
      .post(`${process.env.NEXT_PUBLIC_apiUrl}projects/create`, formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response);
        router.push("/dashboard/projects");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <WithAuth>
      <Layout>
        <Navbar />
        <div className="w-11/12 md:w-5/12 mx-auto border-[.01rem] border-gray-200 p-2 mt-4 mb-4">
          <h1 className="text-lg text-center font-bold text-blue-300 mt-2 mb-4">
            Create or Update Project
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className=" appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="h-52 appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image
              </label>
              {images.length > 1 ? (
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {images.map((image, index) => (
                    <div key={index}>
                      <ShowPreview image={image} />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
              <input
                className=" appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="image"
                type="file"
                placeholder="Image"
                onChange={handleMultipleImages}
                multiple
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project_status"
              >
                Project Status
              </label>
              <select
                value={project_status}
                onChange={(e) => setproject_status(e.target.value)}
                className=" appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
              >
                <option value="all">All</option>
                <option value="ongoing">Ongoing</option>
                <option value="finished">Finished</option>
                <option value="pending">pending</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="project_date"
              >
                Project Date
              </label>
              <input
                className=" appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                id="project_date"
                type="text"
                placeholder="Project Date"
                value={project_date}
                onChange={(e) => setproject_date(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:-outline"
                type="submit"
              >
                {isLoading ? "Loading..." : "Create"}
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </Layout>
    </WithAuth>
  );
}

export default CreateOrUpdate;
