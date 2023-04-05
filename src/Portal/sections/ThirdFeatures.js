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
          Unlocking GEO-blocked content is something VPN users have come to expect. Niceland utilizes Rented IP addresses, IP rotations, full DNS routing and server user limits to ensure GEO-blocked content stay un-blocked.
          <br />
          <br />
          <b>! NOTICE !</b> this feature is still in development and will become available during the open beta
        </div>

      </div>


      <div className="s2 box">
        <div className="item-title extra-title-margin font-section-item-title">Cross-Continent <br />Speed up</div>
        <div className="description font-section-description">
          When possible Niceland will send your traffic accross continents using datacenter private routing. These private routes have a higher capacity for bandwidth then the public internet and in some cases can provide a boost in internet speed (latency)
          <br />
          <br />

          Additionally we will be using this feature to release a <b><u>gaming mode</u></b> later this year
        </div>

      </div>


      <div className="s3 box">
        <div className="item-title font-section-item-title">Flexible Plans</div>
        <div className="description font-section-description">
          Niceland offers three types of subscriptions but each of those subscriptions can be customized. Each subscription type offers access to specific types of customizations, such as:
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