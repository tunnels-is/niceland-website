import { Link } from "react-router-dom";
import React from "react";

const SecondFeatures = (props) => {

  return (

    <div className={`second-features grid-row-${props.row} inherit-grid`}>

      <div className="title font-section-title">
        Advanced Security
      </div>


      <div className="s1 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-lock.png"></img>
        <div className="item-title font-section-item-title">Additional Encryption</div>
        <div className="description font-section-description">
          When browsing the web you are protected by the HTTPS standard. However, we add another layer of encryption on-top of that for all activity within our VPN platform
        </div>

      </div>


      <div className="s2 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-double.png"></img>
        <div className="item-title font-section-item-title">Double VPN by default</div>
        <div className="description font-section-description">
          Our VPN system is built from the ground up by us, which enabled us to integrade double VPN routing by default.
        </div>

      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-two-factor.png"></img>
        <div className="item-title font-section-item-title">Two-Factor authentication</div>
        <div className="description font-section-description">
          Additional authentication can be enabled to ensure an extra layer of security for your account.
        </div>
      </div>

      <div className="s4 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-dns.png"></img>
        <div className="item-title font-section-item-title">Custom DNS servers</div>
        <div className="description font-section-description">
          Unlike some other VPNs, we allow you to use any DNS servers you prefer while still routing your DNS queries through our system.
        </div>
      </div>
    </div >

  );
}

export default SecondFeatures;