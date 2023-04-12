import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"
import { Link } from "react-router-dom";

const BannerV2 = (props) => {

  return (
    <>
      <div className="banner2">
        <img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/comp/bannerv2.webp"></img>
        <div className="title font-banner-title">This is where it gets interesting</div>

        <Link to={"/download"} className="button font-button get-started">Get Niceland VPN
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </Link>

      </div>
    </>
  );
}

export default BannerV2;