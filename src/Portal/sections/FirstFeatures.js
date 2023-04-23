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
          DNS and IPv6 leaks can reveal your real world location, Niceland protects you by disabling IPv6 and changing your DNS settings whenever you connect. Doing so helps prevent big corporations and goverment related entities from tracking you
        </div>

      </div>


      <div className="s2 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-cash.png"></img>
        <div className="item-title font-section-item-title">Anonymous Payments</div>
        <div className="description font-section-description">
          Being extra cautious is a good, and if that applies to you we have just the thing. Subscriptions can be payed for using cash, just send us the Subscription fee via mail carrier and we will activate your account when the payment arrives
        </div>

      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-web-shield.png"></img>
        <div className="item-title font-section-item-title">Anonymous Meta Data</div>
        <div className="description font-section-description">
          Session data and meta data is something many VPN users are worried about. Niceland is designed with a custom Tag-Routing protocol which keeps any session information anonymous. Additionally Niceland does not keep any session data or meta data after users have disconnected
        </div>


      </div>


    </div>
  );
}

export default FirstFeatures;