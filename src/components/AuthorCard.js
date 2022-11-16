import React, { useState } from "react";

export default function AuthorCard({setIsActive, isActive}) {
 
  function handleActive(e) {
    e.preventDefault();

    setIsActive({
      active: true,
      name: e.target.id,
    });
  }

  return (
    <>
      {/* AuthorCard */}
      <div
        id="intro"
        class="bg-[#
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4"
      >
        <div id="avatar" class="flex justify-center py-2">
          <img
            class="w-40"
            src="https://api.multiavatar.com/JB.svg "
            alt="JB image"
          />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">
            Carlos S. Nah
          </h1>
          <small class="text-center block text-md text-gray-800">
            Writer, Teacher &amp; Software Engineer
          </small>
          <p class="text-justify text-lg text-gray-800">
            Hi! I am the guy who doesn't know how to repair a computer. Yeah, I
            am not your typical IT guy who does all the techinal hardware
            chores. I write programs using different syntaxes which are later
            compiled to 0s and 1s.
          </p>

          <div id="hero-nav" className="p-6 max-w-full mx-auto">
            <ul className="flex items-center justify-center mx-4 gap-4">
              <li className="border border-[#B2B2B2] p-2 rounded-lg">
                <a
                  href="#education"
                  id="education"
                  onClick={handleActive}
                  className={`${
                    isActive.active &&
                    isActive.name === "education" &&
                    "font-bold"
                  } font-lato text-xl`}
                >
                  Education
                </a>
              </li>

              <li className="border border-[#B2B2B2] p-2 rounded-lg">
                <a
                  href="#work"
                  id="work"
                  onClick={handleActive}
                  className={`${
                    isActive.active && isActive.name === "work" && "font-bold"
                  } font-lato text-xl`}
                >
                  Work
                </a>
              </li>

              <li className="border border-[#B2B2B2] p-2 rounded-lg">
                <a
                  href="#hobbies"
                  id="hobbies"
                  onClick={handleActive}
                  className={`${
                    isActive.active &&
                    isActive.name === "hobbies" &&
                    "font-bold"
                  } font-lato text-xl`}
                >
                  Hobbies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
