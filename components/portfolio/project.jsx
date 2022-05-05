import Link from "next/link";

function Project({ project }) {
  const Btn = ({ link }) => (
    <button className="m-0 bg-amber-500 text-white px-3 py-1 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
      <Link href={link}> View Project</Link>
    </button>
  );

  return (
    <section className="flex flex-col w-full">
      <div
        className="h-56 md:h-80 bg-gray-300"
        style={{
          backgroundImage: `url(images/apart2.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*update bg image by the first index */}

        <Btn link={`/portfolio/${project.slug}`} />
      </div>
      <h1 className="text-lg font-bold my-4 mx-1 w-full">{project.slug}</h1>
    </section>
  );
}

export default Project;
