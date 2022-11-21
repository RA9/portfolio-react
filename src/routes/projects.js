import React from "react";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl py-8 px-4 md:px-20 md:py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-lg">
            <div>
            <img
                className="w-full object-cover"
                src="https://picsum.photos/400/260"
                alt=""
              />
            </div>
            <div className="bg-gray-100 px-8 py-4 font-mono font-medium rounded-b-lg">
              <h3 className="py-2 md:py-4 font-bold  text-2xl">
                Dummy Project
              </h3>
              <p className="text-md text-gray-800 font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultrices vitae ante nec pretium. Nulla dapibus ante ac enim
                elementum dapibus vitae ac sapien. Donec sit amet elit mi.
                Nullam ut felis a lorem efficitur lobortis iaculis facilisis
                leo. Nulla vulputate commodo quam ut dictum. Pellentesque ornare
                tincidunt elit eget dignissim.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="w-full">
              <img
                className="rounded-t-lg"
                src="https://picsum.photos/400/260"
                alt=""
              />
            </div>
            <div className="bg-gray-100 px-8 py-4 font-mono font-medium rounded-b-lg">
              <h3 className="py-2 md:py-4 font-bold  text-2xl">
                Dummy Project
              </h3>
              <p className="text-md text-gray-800 font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultrices vitae ante nec pretium. Nulla dapibus ante ac enim
                elementum dapibus vitae ac sapien. Donec sit amet elit mi.
                Nullam ut felis a lorem efficitur lobortis iaculis facilisis
                leo. Nulla vulputate commodo quam ut dictum. Pellentesque ornare
                tincidunt elit eget dignissim.{" "}
              </p>
            </div>
          </div>
          <div className="border rounded-lg">
            <div className="w-full">
              <img
                className="rounded-t-lg"
                src="https://picsum.photos/400/260"
                alt=""
              />
            </div>
            <div className="bg-gray-100 px-8 py-4 font-mono font-medium rounded-b-lg">
              <h3 className="py-2 md:py-4 font-bold  text-2xl">
                Dummy Project
              </h3>
              <p className="text-md text-gray-800 font-mono">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                ultrices vitae ante nec pretium. Nulla dapibus ante ac enim
                elementum dapibus vitae ac sapien. Donec sit amet elit mi.
                Nullam ut felis a lorem efficitur lobortis iaculis facilisis
                leo. Nulla vulputate commodo quam ut dictum. Pellentesque ornare
                tincidunt elit eget dignissim.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
