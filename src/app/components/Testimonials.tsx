import React from "react";
import Image from "next/image";
import { testimonials } from "../constants";
function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
      <div className="text-center">
      <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-xl font-semibold px-2 py-1 uppercase">
          testimonials
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-5 lg:my-10">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-m p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <Image
                  className="w-12 h-12 mr-6 rounded-full border border-neuteral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
