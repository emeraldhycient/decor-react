import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

function CarouselTing({ images }) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider
        className="bg-white h-96 md:h-[72vh]"
        isPlaying={true}
        infinite={true}
      >
        {images.map((image) => (
          <Slide key={image.id}>
            <Image
              src={image.src}
              height={700}
              width={550}
              alt="Mpdesigns images"
            />
          </Slide>
        ))}
      </Slider>
      <ButtonBack className="bg-white border-[.012rem] border-[#396051] rounded-sm px-5 py-2 mx-3 mt-4 hover:scale-75	">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>{" "}
      </ButtonBack>
      <ButtonNext className="bg-white border-[.012rem] border-[#396051] rounded-sm px-5 py-2 mt-4 hover:scale-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>{" "}
      </ButtonNext>
    </CarouselProvider>
  );
}

export default CarouselTing;
