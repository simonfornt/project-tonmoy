import React from "react";

const DonationCard = () => {
  // Function to show alert
  const handleDonateClick = () => {
    alert("Send money by Bkash 01724239801");
  };

  return (
    <div className="max-w-sm my-4 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      {/* Image */}
      <img
        className="w-full h-52 object-cover"
        src="https://source.unsplash.com/400x300/?children,help"
        alt="Donate"
      />

      {/* Card Content */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-teal-600">Donation</h2>
        <p className="text-gray-600 mt-2">
          Help underprivileged children by donating as little as 300 TK. Every contribution counts!
        </p>

        {/* Donate Button */}
        <button
          className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300"
          onClick={handleDonateClick}
          onTouchStart={handleDonateClick} // Works on touch devices
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
