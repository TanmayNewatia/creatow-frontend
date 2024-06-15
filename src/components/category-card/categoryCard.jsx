import React from "react";

function CategoryCard(props) {
  return (
    <div className="text-white space-y-[10px]">
      <img
        src={props.imageURL}
        alt=""
        className="max-w-[110px] lg:max-w-[170px]"
      />
      <p className="text-sm font-semibold">{props.name}</p>
    </div>
  );
}

export default CategoryCard;
