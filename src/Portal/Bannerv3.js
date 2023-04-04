import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"

const BannerV3 = (props) => {

  return (
    <>
      <div className="banner">
        <img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/bannerv6.png"></img>
        <div className="title font-banner-title">Experience seamless <br /> and reliable online security</div>

        <div className="subtitle font-banner-subtitle">Say goodbye to complicated setups and connection issues</div>

        <div className="button font-button get-started">Get niceland VPN
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </div>

      </div>
    </>
  );
}

export default BannerV3;