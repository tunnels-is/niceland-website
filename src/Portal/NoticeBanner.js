import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"
import { Link } from "react-router-dom";

const Notice = (props) => {


  return (
    < div className={`notice-banner grid-row-${props.row} inherit-grid`
    }>

      <div className="title">
        !! NOTICE: Niceland VPN is currently in open beta
      </div>
      <Link to={"/beta"} className="learn-more-button">Beta notice
        <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
      </Link>

    </div >
  );
}

export default Notice;