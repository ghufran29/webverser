import React from "react";

function Herosection() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-15">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      WebVerseR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "} for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, modi
        nostrum esse numquam voluptatum sapiente obcaecati ut, facere ducimus
        aperiam suscipit pariatur!
      </p>
      <div className="flex-justify-center my-10">
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 mx-3 py-3 px-4 rounded-md">
          Start for free
        </button>
        <button className="py-3 px-4 mx-3 border rounded-md">
          Documentation
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src="/videos/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Herosection;
