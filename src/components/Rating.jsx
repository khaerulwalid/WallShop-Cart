import React from "react";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Rating({ rating, onClick, style }) {
  return (
    <>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <span
            onClick={() => {
              if (onClick) {
                return onClick(index);
              } else {
                return;
              }
            }}
            styel={style}
            key={index}
          >
            {rating > index ? <MdOutlineStarPurple500 fontSize="15px" /> : <MdOutlineStarOutline fontSize="15px" />}
          </span>
        ))}
    </>
  );
}

export default Rating;
