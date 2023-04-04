import { Link } from "react-router-dom";
import React from "react";

const AboutFeatures = (props) => {

  return (

    < div className={`about-features grid-row-${props.row} inherit-grid`
    }>

      <img className="server" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/server.svg"></img>

      <div className="title font-section-title">
        Access geo-restricted content from anywhere in the world with Niceland VPN's global network of servers.
      </div>
      <div className="subtitle font-big-section-description">
        Niceland VPN offers advanced security features to protect your online privacy. With
        military-grade encryption, your internet activity is shielded from prying eyes, ensuring that your sensitive information and personal data remain secure. Niceland VPN also employs various protocols, including OpenVPN and IKEv2, to safeguard your internet connection from hackers and cybercriminals. Niceland VPN provides access to geo-restricted content from anywhere in the world. Whether you're traveling or living in a country where certain websites or services are blocked, Niceland VPN's global network of servers allows you to bypass these restrictions and access your favorite content.
      </div>

    </div >

  );
}

export default AboutFeatures;