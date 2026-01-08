import React from 'react';

const DonateNow = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 w-full max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-pink-500 mb-4">
          Thank You for Your Kindness!
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-6">
          We're currently not accepting donations, but your support means the world to us! 💖
        </p>

        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3468/3468369.png"
            alt="Thank you"
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Please check back again soon. 😊
        </p>
      </div>
    </div>
  );
};

export default DonateNow;
