import React from "react";

const Hero = ({
  backgroundImage,
  title,
  description,
  donationAmount,
  bkashNumber,
}) => {
  // Function to show alert with dynamic Bkash number
  const handleDonateClick = () => {
    alert(`Bkash Number: ${bkashNumber}`);
  };

  return (
    <section
      className="flex items-center justify-center h-dvh bg-cover bg-center text-white px-6 md:px-12 relative"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
      <div className="bg-opacity-60 p-8 md:p-12 rounded-lg text-center max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          {title}
        </h1>
        <p className="text-gray-100 mt-4">{description}</p>
        <button
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          onClick={handleDonateClick}
          onTouchStart={handleDonateClick} // Mobile touch event
        >
          Donate {donationAmount}TK Now
        </button>
      </div>
    </section>
  );
};

export default Hero;