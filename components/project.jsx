import Link from "next/link";

function Project({ slug, image }) {
  const Btn = ({ link }) => (
    <button className="bg-amber-500 text-white mt-6 px-3 py-2 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500 scale-90 hover:scale-75">
      <Link href={link}> View Project</Link>
    </button>
  );

  return (
    <div
      className="h-56 md:h-80 bg-gray-300"
      style={{
        backgroundImage: `url(${
          image[0].length > 0 ? image[0] : `/images/apart1.png`
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Btn link={`/portfolio/${slug}`} />
    </div>
  );
}

export default Project;
