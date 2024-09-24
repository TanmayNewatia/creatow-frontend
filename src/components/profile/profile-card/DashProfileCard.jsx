import React from "react";
import profilePfp from "../../../assets/profile/profilepfp.png";
import dotsIcon from "../../../assets/profile/dotsIcon.svg";
import pencilIcon from "../../../assets/profile/pencilIcon.svg";
import walletIcon from "../../../assets/profile/walletIcon.svg";
import copyIcon from "../../../assets/profile/copyIcon.svg";


function DashProfileCard() {
  return (
    <>
      {/* Profile card */}
      <div className="w-fit h-fit bg-[#151329] text-white p-6 space-y-5 rounded-2xl mt-[-350px] lg:mt-[-80px]">
        {/* Profile image */}
        <img
          src={profilePfp}
          alt=""
          className="max-w-[254px] aspect-square rounded-md"
        />

        {/* Name & joined date */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="font-readex-pro text-2xl font-extrabold leading-6">
              lofikiss
            </p>
            <button>
              <img src={dotsIcon} alt="" />
            </button>
          </div>
          {/* Joined date */}
          <p className="text-sm opacity-65">Joined 20-04-2012</p>
        </div>

        {/* Wallet address */}
        <div className="bg-[#201a41] flex justify-between items-center rounded-md p-2">
          <div className="flex gap-2">
            <img src={walletIcon} alt="" />
            <p className="max-w-[120px] text-sm text-[#9A8FFF] truncate">
              3213124142412412312
            </p>
          </div>
          <button onClick={() => navigator.clipboard.writeText("copied text")}>
            <img src={copyIcon} alt="" />
          </button>
        </div>

        {/* Stats */}
        <div className="pb-8">
          <div className="flex justify-between py-3 border-b border-[#1e1c31]">
            <p>Subscription</p>
            <p className="font-semibold">54</p>
          </div>
          <div className="flex justify-between py-3 border-b border-[#1e1c31]">
            <p>Collectibles</p>
            <p className="font-semibold">03</p>
          </div>
          <div className="flex justify-between py-3">
            <p>Sparks</p>
            <p className="font-semibold">01</p>
          </div>
        </div>

        {/* Edit profile button */}
        <button className="w-full bg-white flex justify-center items-center gap-2 py-3 rounded-3xl">
          <p className="text-black font-medium">Edit your Profile</p>
          <img src={pencilIcon} alt="" />
        </button>
      </div>
    </>
  );
}

export default DashProfileCard;
