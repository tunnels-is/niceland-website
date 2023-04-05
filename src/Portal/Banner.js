import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"

const BannerV1 = (props) => {


  return (
    <>
      <div className="banner">
        <img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/bannerv1.png"></img>
        <div className="title font-banner-title">Welcome to Niceland</div>

        <div className="subtitle font-banner-subtitle">focusing on security to protect your anonymity</div>

        <div className="button font-button get-started">Get Niceland VPN
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </div>
      </div>
    </>
  );
}

export default BannerV1;