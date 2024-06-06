import React from "react";
import creatorItems from "../../constants/creatorConstants";

function CreatorCard(props) {
  return (
    <div className="w-fit text-white font-medium font-readex-pro flex items-center gap-2">
      <p className="text-sm text-[#94A3B8]">{props.cardNo}</p>
      <img
        src={props.imageURL}
        alt=""
        className="max-w-14 w-1/2 aspect-square ml-1"
      />
      <div>
        <p className="text-sm leading-5 tracking-[0.1px]">{props.creatorName}</p>
        <p className="text-[#94A3B8] text-[12px] leading-4 tracking-[0.5px]">
          {props.amount}
        </p>
      </div>
    </div>
  );
}

export default CreatorCard;
