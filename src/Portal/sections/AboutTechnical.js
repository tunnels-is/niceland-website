import { Link } from "react-router-dom";
import React from "react";

const AboutTechnical = (props) => {

  return (

    < div className={`about-features grid-row-${props.row} inherit-grid`
    }>

      <img className="iceland" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/mehs-net-about.svg"></img>

      <div className="title font-section-title">
        Mesh-Network VPN
      </div>
      <div className="subtitle font-big-section-description">

        Niceland VPN could be considered a mix between TOR and a VPN. At its core it is a global mesh-network of routers that have VPN endpoints. Niceland operates on Layer 3, more specifically it forwards TCP and UDP traffic to the designated VPN endpoint. The reason it operates on Layer 3 and not Layer 2 is for security and performance reasons. Layer 2 VPNs tend to forward more network packets then needed for connectivity and enables a number of malicious application to function within the VPN network.
        <br></br>
        <br></br>
        Niceland is programmed from the ground up using golang, and it was designed at its core to not function like normal VPNs. It does not rely on the traditional way of Packet Forwarding but instead relies on user-specific TCP tunnels and packet manipulation to forward network packets. This increases the isolation of each user network flow within the system and prevents malicious actors from abusing packet forwarding.
        <br></br>
        <br></br>
        Last but not least, Niceland was created with user anonymity and privacy as its number one priority. Creating Niceland from scratch, instead of re-selling pre-made solutions, allows us to control where, when, how and if user data is stored but mostly, it allows us to create and maintain network flows without having to log or keep track of user information, such as IPs, Device IDs, Mac Addresses, etc..


      </div>

    </div >

  );
}

export default AboutTechnical;