import { useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Array<{ url: string }> = [
    {
      url: "https://images.unsplash.com/photo-1679855779469-62442bb7cd6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1679926398477-c35c89ba1da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1679927341810-6032f01ca354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1627483297886-49710ae1fc22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1670588959096-3b8a286ae994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="max-w-[1400px] h-[780px] m-auto py-16 px-4 relative group ">
      {/* image */}
      <div
        style={{ background: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500  "
      ></div>

      {/* left button */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:block  absolute top-1/2 -translate-x-0 translate-y-1/2 left-6 "
      >
        <button className="bg-black/20 py-2 px-2 text-white rounded-full cursor-pointer">
          <ArrowLongLeftIcon className="h-4 w-4" />
        </button>
      </div>
      {/* right button */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block  absolute top-1/2 -translate-x-0 translate-y-1/2 right-6 "
      >
        <button className="bg-black/20 py-2 px-2 text-white rounded-full cursor-pointer">
          <ArrowLongRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default App;
