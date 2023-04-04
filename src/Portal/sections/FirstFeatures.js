import { Link } from "react-router-dom";
import React from "react";

const FirstFeatures = (props) => {

  return (

    <div className={`first-features grid-row-${props.row} inherit-grid`}>

      <div className="title font-section-title">
        Anonymity
      </div>
      <div className="subtitle font-section-subtitle">
        One of our main goals is anonimity on the internet.
      </div>

      <div className="s1 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-dns-protect.png"></img>
        <div className="item-title font-section-item-title">DNS/IPv6 leak prevention</div>
        <div className="description font-section-description">
          DNS leak prevention is important to keep your location and indentity hidden when accessing website
        </div>

      </div>


      <div className="s2 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png"></img>
        <div className="item-title font-section-item-title">Anonymous Payments</div>
        <div className="description font-section-description">
          Subscriptions can be payed for using cash. Send us USD using the postal service and we will enable your subscription.
        </div>

      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-web-shield.png"></img>
        <div className="item-title font-section-item-title">IP-Free session data</div>
        <div className="description font-section-description">
          Routing within our platform is done using custom Tags. This means any routing information on our servers does not include any IP information
        </div>


      </div>


    </div>
  );
}

export default FirstFeatures;