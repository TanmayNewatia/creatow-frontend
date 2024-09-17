import React from "react";

function Schedule() {
  return (
    <div className="text-white font-readex-pro space-y-6">
      <h3 className="text-[24px] lg:text-[32px]">Schedule NFT</h3>

      <div className="space-y-6 lg:w-[480px]">
        <span className="flex flex-col lg:gap-2">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            placeholder="NFT Name"
            className="py-2 px-4 text-sm lg:text-base bg-transparent border-[#363355] border rounded-lg"
            id="date"
            required
          />
        </span>
        <span className="flex flex-col lg:gap-2">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            placeholder="12:15 AM"
            className="py-2 px-4 text-sm lg:text-base bg-transparent border-[#363355] border rounded-lg uppercase"
            id="time"
            required
          />
        </span>
        <span className="flex underline text-sm lg:text-base text-[#D0AAFF] font-light">
          <button>Schedule now</button>
        </span>
      </div>
    </div>
  );
}

export default Schedule;
