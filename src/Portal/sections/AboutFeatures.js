import { Link } from "react-router-dom";
import React from "react";

const AboutFeatures = (props) => {

  return (

    < div className={`about-features grid-row-${props.row} inherit-grid`
    }>

      <img className="iceland" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/iceland-map.png"></img>

      <div className="title font-section-title">
        Focusing on anonymity and quality service
      </div>
      <div className="subtitle font-big-section-description">

        We created Niceland VPN from the ground up in order to accomplish
        a high level of customization and control that is not possible with pre-build VPN solutions. When building Niceland VPN our main focus was on anonymity and quality of service, we wanted to build a VPN that did not collect any logs on user activity and did not track anything related to users. This means we have no idea what our users are doing nor do we have any records of what they have done. <br /><br />
        Niceland VPN is a startup company registered in Iceland, which is not a part of the EU and has it's own laws and regulations when it comes to online services.

      </div>

    </div >

  );
}

export default AboutFeatures;