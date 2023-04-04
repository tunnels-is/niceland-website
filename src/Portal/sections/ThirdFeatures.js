import { Link } from "react-router-dom";
import React from "react";

const ThirdFeatures = (props) => {

  return (

    <div className={`third-features grid-row-${props.row} inherit-grid bg-${props.bg}`}>

      <div className="title font-section-title">
        Basic Features
      </div>

      <div className="s1 box">
        <div className="item-title font-section-item-title">GEO unblocking</div>
        <div className="description font-section-description">
          Unlocking GEO-blocked content is something VPN users have come to expect. Our platform utilizes Rented IP addresses, IP rotations, full DNS routing and server user limits to ensure GEO-blocked content stay un-blocked.
          <br />
          <br />
          <b>! NOTICE !</b> this feature is still in development and will become available during the open BETA
        </div>

      </div>


      <div className="s2 box">
        <div className="item-title extra-title-margin font-section-item-title">Cross-Continent <br />Speed up</div>
        <div className="description font-section-description">
          Our custom routing system sends your internet traffic accross continents using the private internet cables reserved for big companies. This can in some cases increase your browsing speed.
          <br />
          <br />

          Additionally we will be using this feature to release a <b>GAMING MODE</b> later this year
        </div>

      </div>


      <div className="s3 box">
        <div className="item-title font-section-item-title">Flexible Plans</div>
        <div className="description font-section-description">
          Wether you are a beginner or a  professional we have a subscription that fits your needs. Subscriptions can be customed to include additional permanent IPs, increased bandwidth and a higher device connection limit.
        </div>

      </div>

    </div >

  );
}

export default ThirdFeatures;