import React from "react";
import image from "../../assets/carousel/carouselPlaceholder.png";
import calendarIcon from "../../assets/carousel/calendarGray.svg";
import personIcon from "../../assets/carousel/personGray.svg";
import creatorIcon from "../../assets/carousel/creatorIcon.png";

function CarouselSlide() {
  return (
    <div className="w-fit flex flex-col items-center lg:flex-row-reverse lg:items-end lg:justify-center lg:gap-10 text-white p-4 space-y-4 mx-auto">
      <div className="w-full space-y-4">
        <h4 className="w-fit text-[22px] lg:text-4xl font-semibold">ALTA</h4>
        <div className="w-fit flex items-center gap-3">
          {/* creator name */}
          <div className="w-fit flex items-center gap-3">
            <img src={creatorIcon} alt="" className="w-7 aspect-square" />
            <p className="text-sm lg:text-base font-semibold">Demarco</p>
          </div>
          {/* date */}
          <div className="w-fit flex items-center gap-1">
            <img src={calendarIcon} alt="" />
            <p className="text-[12px] text-[#a19fb8]">7/3/2024</p>
          </div>
          {/* collector count */}
          <div className="flex items-center gap-1">
            <img src={personIcon} alt="" />
            <p className="text-[12px] text-[#a19fb8]">1</p>
          </div>
        </div>
      </div>
      {/* main image */}
      <img src={image} alt="" className="w-full max-w-[375px] rounded-lg" />
    </div>
  );
}

export default CarouselSlide;
