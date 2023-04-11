import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"

const BannerV2 = (props) => {

  return (
    <>
      <div className="banner2">
        <img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/comp/bannerv2.webp"></img>
        <div className="title font-banner-title">Get informed about Niceland VPN</div>

        <div className="button font-button get-started">Get Niceland VPN
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </div>

      </div>
    </>
  );
}

export default BannerV2;