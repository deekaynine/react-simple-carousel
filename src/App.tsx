import { useEffect, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(autoSlide);
    };
  });

  const slides: Array<{ url: string }> = [
    {
      url: "https://images.unsplash.com/photo-1679850134579-472a06699a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1678618480468-e85c54dd0159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1679927341810-6032f01ca354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1678619314960-2b0ea027ec19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4  relative group">
      {/* image */}

      <img
        className="w-full h-full bg-cover rounded-2xl transition duration-700 ease-in-out"
        src={slides[currentIndex].url}
        alt="carousel-image"
      />

      {/* left button */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block  absolute top-1/2 left-6 "
      >
        <button className="bg-black/20 py-4 px-4 text-white rounded-full cursor-pointer">
          <ArrowLongLeftIcon className="h-6 w-6" />
        </button>
      </div>
      {/* right button */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block  absolute top-1/2 right-6 "
      >
        <button className="bg-black/20 py-4 px-4 text-white rounded-full cursor-pointer">
          <ArrowLongRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* bottom circles */}
      <div className="hidden group-hover:block  absolute bottom-[15%] right-6 left-6 ">
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <div
              onClick={() => setCurrentIndex(index)}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currentIndex === index ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
