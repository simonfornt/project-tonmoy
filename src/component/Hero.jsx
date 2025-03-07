import React from "react";

const Hero = () => {
  // Function to show alert
  const handleDonateClick = () => {
    alert("Send money by Bkash 01724239801");
  };

  return (
    <section
      className="flex items-center justify-center h-dvh bg-cover bg-center text-white px-6 md:px-12 relative"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/613253596/photo/group-of-happy-gypsy-indian-children-desert-village-india.jpg?s=612x612&w=0&k=20&c=L5zHBbisaiGg098L_Txc8v6r8oOFBylw47EA8pEWhic=')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="bg-opacity-60 p-8 md:p-12 rounded-lg text-center max-w-lg">
   
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Help Poor Children by Giving Only 300TK
        </h1>
        <p className="text-gray-100 mt-4">
          Every small act of kindness makes a difference. Your donation helps provide food, education, and a better future.
        </p>
        <button
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          onClick={handleDonateClick}
          onTouchStart={handleDonateClick} // Mobile touch event
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
