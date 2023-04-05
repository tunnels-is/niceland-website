import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"

const BannerV3 = (props) => {

  return (
    <>
      <div className="banner3">
        <img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/bannerv6.png"></img>
        <div className="title font-banner-title">Niceland is here for you</div>

        <div className="subtitle font-banner-subtitle">join our communities for advanced customer support</div>

        <div className="button font-button get-started">Get Niceland VPN
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </div>

      </div>
    </>
  );
}

export default BannerV3;