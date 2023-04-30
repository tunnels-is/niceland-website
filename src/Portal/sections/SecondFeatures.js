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
          When browsing the web you are protected by the HTTPS standard. However, Niceland adds another layer of encryption on-top for all activity within our VPN platform
        </div>

      </div>


      <div className="s2 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-double.png"></img>
        <div className="item-title font-section-item-title">Double VPN By Default</div>
        <div className="description font-section-description">
          Niceland uses what is called Double VPN as its default mode of transport. What that means is your internet traffic will travel through two separate servers or IPs before reaching the internet
        </div>

      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-two-factor.png"></img>
        <div className="item-title font-section-item-title">Two-Factor Authentication</div>
        <div className="description font-section-description">
          Standard email/password authentication is sometimes not enough to keep your accounts safe, which is why Niceland enables users to activate Two-Factor Authentication for their accounts
        </div>
      </div>

      <div className="s4 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-dns.png"></img>
        <div className="item-title font-section-item-title">Custom DNS servers</div>
        <div className="description font-section-description">
          Niceland will encrypt all DNS traffic over its internal network, even so some users want to control which DNS servers they use. Changing your DNS servers while connected is easy using the settings menu in our app
        </div>
      </div>
    </div >

  );
}

export default SecondFeatures;