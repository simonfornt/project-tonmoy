function About() {
    return (
      <section className="bg-gray-100 py-12 px-4 md:px-12">
        <h1 className="text-center text-4xl font-extrabold text-teal-700 mb-8">
          About Us
        </h1>
  
        <div className="flex flex-col md:flex-row items-center gap-10">
        
          <div className="bg-white p-6 md:p-10 shadow-lg border-l-4 border-teal-500 rounded-lg max-w-2xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2023, <span className="text-teal-600 font-semibold">Shuddhangan</span> is a non-profit voluntary educational institution in Bangladesh 
              dedicated to serving underprivileged children. Focused on youth power, we actively work to eradicate poverty, 
              ensure access to education, healthcare, and nutrition, and overcome socio-economic challenges.
              <br /><br />
              Our initiatives include financially empowering marginalized communities, providing free education, emergency 
              healthcare, and extending relief assistance to those in need. Our ultimate goal is to empower the underprivileged, 
              promote self-sufficiency, and eradicate poverty and illiteracy from Bangladesh.
            </p>
          </div>
  
       
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg shadow-md object-cover w-full h-auto"
              src="https://static.vecteezy.com/system/resources/thumbnails/035/473/314/small/ai-generated-a-young-child-holding-a-book-and-smiling-surrounded-by-school-supplies-like-pencils-and-notebooks-free-photo.jpg"
              alt="Child Learning"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  