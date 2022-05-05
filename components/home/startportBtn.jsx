import ScrollIntoView from "react-scroll-into-view";
import Link from "next/link";

function StartportBtn({ color, nextsection }) {
  return (
    <div className="flex justify-between  items-center mt-4 md:mt-6">
      <ScrollIntoView selector={`#${nextsection}`}>
        <button className="bg-amber-500 text-white  px-3 py-2 rounded-sm  hover:bg-white hover:text-amber-500 hover:border-[.01rem] hover:border-amber-500">
          Get Started
        </button>
      </ScrollIntoView>
      <Link href="/portfolio" passHref>
        <button
          className={`border-[.01rem] border-gray-500 px-3 py-2 rounded-sm ${color} hover:bg-amber-500 hover:text-white`}
        >
          See Our Portfolio
        </button>
      </Link>
    </div>
  );
}

export default StartportBtn;
