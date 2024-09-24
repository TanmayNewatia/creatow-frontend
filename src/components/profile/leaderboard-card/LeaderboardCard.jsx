import React from "react";
import smallpfp from "../../../assets/profile/leaderboard/smallPfpPlaceholder.svg";
import sparksIcon from "../../../assets/profile/leaderboard/sparksIcon.svg";

function LeaderboardCard(props) {
  return (
    <div className="w-full bg-[#1d1538] text-white flex justify-between p-4 border border-[#493481] rounded-2xl">
      <div className="flex justify-center items-center gap-4">
        <div className="w-6 aspect-square bg-[#493481] rounded-md text-center flex justify-center items-center">
          <p className="text-sm">{props.position}</p>
        </div>
        <img src={props.pfp} alt="" />
        <p>{props.name}</p>
      </div>

      <div className="flex justify-center items-center gap-1">
        <p className="text-sm font-semibold">{props.sparks}</p>
        <img src={sparksIcon} alt="sparks-icon" />
      </div>
    </div>
  );
}

export default LeaderboardCard;
