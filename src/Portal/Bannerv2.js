import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"

const BannerV2 = (props) => {

  return (
    <>
      <div className="banner2">
        <img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/bannerv2.png"></img>
        <div className="title font-banner-title">Experience everything niceland has to offer</div>

        <div className="button font-button get-started">Get niceland VPN
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </div>

      </div>
    </>
  );
}

export default BannerV2;