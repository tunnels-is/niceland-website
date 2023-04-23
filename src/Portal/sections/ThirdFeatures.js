import { Link } from "react-router-dom";
import React from "react";

const ThirdFeatures = (props) => {

  return (

    <div className={`third-features grid-row-${props.row} inherit-grid bg-${props.bg}`}>

      <div className="title font-section-title">
        Basic Features
      </div>

      <div className="s1 box">
        <div className="item-title font-section-item-title">GEO Unblocking</div>
        <div className="description font-section-description">
          Unlocking GEO-blocked content is something VPN users have come to expect. Niceland utilizes Rented IP addresses, IP rotations, full DNS routing and server user limits to ensure GEO-blocked content stays un-blocked
          <br />
          <br />
          <b>! NOTICE !</b> this feature is still in development and will become available during the open beta
        </div>

      </div>


      <div className="s2 box">
        <div className="item-title extra-title-margin font-section-item-title">Cross-Continent <br />Speed up</div>
        <div className="description font-section-description">
          When possible Niceland will send your traffic across continents using private datacenter routes. These private routes have a higher capacity for bandwidth than the public internet and in some cases can provide a boost in internet speed
          <br />
          <br />

          Additionally, we will be using this feature to release a <b><u>gaming mode</u></b> at a later date
        </div>

      </div>


      <div className="s3 box">
        <div className="item-title font-section-item-title">Flexible Plans</div>
        <div className="description font-section-description">
          Niceland offers three types of subscriptions which can be customized. Each of them offers access to specific types of features, such as:
          <br />
          <br /><b>Permanent sessions </b>(Statis IPs)<br />
          <b>Increased minimum bandwidth</b> <br />
          <b>Connecting Additional device</b>s<br />
          <br />
          With more to come..
        </div>

      </div>

    </div >

  );
}

export default ThirdFeatures;