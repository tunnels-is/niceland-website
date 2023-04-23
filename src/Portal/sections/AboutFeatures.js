import { Link } from "react-router-dom";
import React from "react";

const AboutFeatures = (props) => {

  return (

    < div className={`about-features grid-row-${props.row} inherit-grid`
    }>

      <img className="iceland" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/iceland-map.png"></img>

      <div className="title font-section-title">
        Why Niceland VPN?
      </div>
      <div className="subtitle font-big-section-description">
        Niceland is an Icelandic-based VPN service that was founded by four individuals who wanted to offer a reliable, and user-friendly VPN solution.
        <br></br>
        <br></br>
        Niceland operates under a no-logging and no-tracking policy, additionally Iceland is not in the Five Eyes, Nine Eyes, or Fourteen Eyes and does not collect nor share intelligence with the U.S., UK or Europe. As an added benefit searches by foreign law enforcement cannot be conducted on equipment in Iceland, as espionage intelligence is not a valid reason for issuing a warrant.
        <br></br>
        <br></br>
        We created Niceland VPN from the ground up in order to accomplish
        a high level of customization and control that is not possible with pre-build VPN solutions. When building Niceland VPN, our main focus is on anonymity and quality of service, we wanted to build a VPN that did not collect any logs on user activity and did not track anything related to users. This means we have no idea what our users are doing nor do we have any records of what they have done.

      </div>

    </div >

  );
}

export default AboutFeatures;