import React from "react";
import { headline_cards_data } from "../utils/data";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* cards */}
      {headline_cards_data.map(({ main, note, pic }) => (
        <div key={main} className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{main}</p>
            <p className="px-2">{note}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            alt="/"
            src={pic}
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
