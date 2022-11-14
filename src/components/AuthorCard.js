import React from "react";

export default function AuthorCard() {
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
            am not your typical IT guy who does all  the techinal hardware
            chores.

            I write programs using different syntaxes which are later compiled to 0s and 1s. 
          </p>
        </div>
      </div>
    </>
  );
}
