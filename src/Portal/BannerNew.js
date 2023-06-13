import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"
import { Link } from "react-router-dom";

const BannerNew = (props) => {

  return (
    <>
      <div className={`banner`} >
        <img className="banner-bg" src={props.image}></img>
        <div className={`title font-banner-title `}>{props.title}</div>

        <div className={`subtitle font-banner-subtitle`}>{props.subtitle}</div>

        {props.showLink &&
          <Link to={props.linkPath} className="button font-button get-started">{props.linkText}
            <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
          </Link>
        }
      </div>
    </>
  );
}

export default BannerNew;