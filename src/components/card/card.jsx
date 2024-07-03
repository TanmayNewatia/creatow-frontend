import React, { useState } from "react";
import calendarVector from "../../assets/card/calendar.svg";
import personVector from "../../assets/card/person.svg";
import avatar1 from "../../assets/card/avatar1.png";
import avatar2 from "../../assets/card/avatar2.png";
import optionsIcon from "../../assets/card/optionsIcon.svg";
import heartIcon from "../../assets/card/heartIcon.svg";
import NFTModal from "../modal/NFTModal";


const Card = (props) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      {showModal && (
        <NFTModal
          closeFn={setShowModal}
        />
      )}
      <div onClick={() => setShowModal(true)} className="w-full max-w-[300px] h-full min-h-[325px] bg-[#27194E] border border-[#d0aaff30] rounded-2xl p-4 flex flex-col justify-start items-center cursor-pointer">
        {/* Top avatars & extra options section - conditionally rendered */}
        {props.showAvatars && (
          <div className="w-full h-fit flex justify-between items-center gap-3 pb-3">
            <div className="relative flex max-w-[150px] min-w-[80px] w-[80%] min-h-[45px]">
              <img src={avatar1} alt="" className="absolute border-4 border-[#1e293b] rounded-full max-h-[100%]" />
              <img src={avatar2} alt="" className="absolute left-[20%] border-4 border-[#1e293b] rounded-full max-h-[100%]" />
              <img src={avatar1} alt="" className="absolute left-[40%] border-4 border-[#1e293b] rounded-full max-h-[100%]" />
            </div>
            <button className="max-h-[18px]">
              <img src={optionsIcon} alt="" />
            </button>
          </div>
        )}
        {/* Main image */}
        <img src={props.imageURL} alt="" className="rounded-2xl" />
        <div className="w-full h-full flex flex-col justify-between gap-4">
          <div className="w-full mt-[-16px] space-y-2">
            {/* Image tag */}
            <div className="w-fit h-[32px] bg-card-tag rounded-lg p-[2px]">
              <div className="w-full h-full bg-black text-white rounded-lg flex justify-center items-center text-[14px] font-semibold px-3">
                ULTIMATE
              </div>
            </div>

            {/* Card & creator name */}
            <div className="space-y-1">
              <p className="text-white font-semibold leading-[24px]">
                {props.collectionName}
              </p>
              <p className="text-[#94A3B8] text-[12px] font-semibold leading-[16px]">
                {props.creatorName}
              </p>
            </div>
          </div>
          {/* Creation date & collector count */}
          <div className="text-white flex justify-between gap-4">
            <div className="flex gap-4">
              <div className="w-fit flex justify-center items-center gap-1">
                <img src={calendarVector} alt="" />
                <p className="text-[12px] leading-[10px] text-nowrap">
                  {props.publishedDate}
                </p>
              </div>
              <div className="w-fit flex justify-center items-center gap-1">
                <img src={personVector} alt="" />
                <p className="text-[12px] leading-[10px]">{props.collectors}</p>
              </div>
            </div>
            <div className="w-fit flex justify-center items-center gap-1">
              <img src={heartIcon} alt="" />
              <p className="text-[12px] leading-[10px]">{props.likes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
