import React from "react";
import fireIcon from "../../assets/creators/fireIcon.svg";

function CreatorCardBig(props) {
  return (
    <div className="text-white bg-[#1f163d] w-full max-w-[410px] flex flex-col justify-center items-center rounded-xl overflow-hidden">
      {/* artwork */}
      <div className="w-fit flex gap-2 rounded-md overflow-hidden px-2 pt-2">
        <img src={props.artwork1} alt="" className="w-1/3" />
        <img src={props.artwork2} alt="" className="w-1/3" />
        <img src={props.artwork3} alt="" className="w-1/3" />
      </div>

      {/* Logo and content */}
      <div className="mt-[-60px] w-full flex flex-col justify-center items-center gap-4 px-6 pb-6">
        <img
          src={props.creatorIcon}
          alt=""
          className="w-[120px] aspect-square"
        />
        <h2 className="text-[20px] leading-6 font-bold">{props.name}</h2>
        {/* Tags */}
        <div className="flex gap-3 text-sm font-medium">
          <div className="flex justify-center items-center gap-2 bg-[#4E47F5] rounded-lg p-2">
            <img src={fireIcon} alt="" />
            <p>Hot</p>
          </div>
          <div className="bg-[#141227] rounded-lg px-3 py-2">
            {props.collectionCount} Collections
          </div>
        </div>
        <button className="w-full text-[#9A8FFF] border border-[#9A8FFF] rounded-3xl font-medium py-2">
          View Profile &#8594;
        </button>
      </div>
    </div>
  );
}

export default CreatorCardBig;
