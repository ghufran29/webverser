import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

function Pricing() {
  return (
    <div className="mt-20">
      <div className="text-center">
      <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-xl font-semibold px-2 py-1 uppercase">
          pricing
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-8 tracking-wider">
        Our Packages
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex justify-center items-center text-center w-full p-5 h-12 mt-20 tracking-tight text-xl hover:bg-gradient-to-r hover:from-indigo-800 hover:to-blue-600 border border-violet-900 rounded-lg transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
