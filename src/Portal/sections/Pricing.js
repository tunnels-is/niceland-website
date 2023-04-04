import { BsCheck2All } from "react-icons/bs"
import React from "react";

const Pricing = (props) => {

  return (
    <div className={`container bg-${props.bg}`}>
      <div className={`pricing grid-row-${props.row} inherit-grid`}>
        {/* <BsCheck2All className="checkmark" size={25} /> */}
        <div className="title font-section-title">
          Subscription Options
        </div>

        <div className="subtitle">
          Check out all of our features ...
        </div>

        <div className="s1 box"></div>
        <div className="s2 box"></div>
        <div className="s3 box"></div>
      </div>
    </div>
  );
}

export default Pricing;