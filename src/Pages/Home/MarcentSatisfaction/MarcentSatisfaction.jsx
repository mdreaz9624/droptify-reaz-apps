// MarcentSatisfaction

import { useEffect, useState } from "react";
import customerPic from "../../../assets/customerSatisfied.jpeg"


const MerchantSatisfaction = () => { // Changed to MerchantSatisfaction (with "chan")
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setFade(true), 100);
  }, []);

  return (
    <div data-aos="fade-right">
      <section
        className="
        bg-gradient-to-r from-[#002B5B] to-[#00A884] rounded-2xl
        py-16 px-6
      "
      >
        <div
          className={`
          max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center 
          transition-opacity duration-1000 ease-out
          ${fade ? "opacity-100" : "opacity-0"}
        `}
        >
          {/* Text Section */}
          <div className="text-white space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>

            <p className="text-lg text-gray-200">
              We offer the lowest delivery charge with the highest value along with
              100% safety of your product. DropTify courier delivers your parcels
              in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="btn bg-white text-[#002B5B] font-semibold hover:bg-gray-200">
                Become a Merchant
              </button>

              <button className="btn bg-[#00F2A2] text-[#002B5B] font-semibold hover:bg-[#00c985]">
                Earn with DropTify Courier
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={customerPic}
              alt="courier rider"
              className="w-full max-w-md rounded-xl shadow-2xl
              transform transition-all duration-1000
              hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MerchantSatisfaction; // Changed to match the component name