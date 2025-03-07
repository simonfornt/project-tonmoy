import React from "react";


function About({ title, description, imageUrl }) {
  console.log(title, description, imageUrl);
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12">
      <h1 className="text-center text-4xl font-extrabold text-teal-700 mb-8">
        {title}
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="bg-white p-6 md:p-10 shadow-lg border-l-4 border-teal-500 rounded-lg max-w-2xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="rounded-lg shadow-md object-cover w-auto h-auto"
            src={imageUrl}
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
}



export default About;