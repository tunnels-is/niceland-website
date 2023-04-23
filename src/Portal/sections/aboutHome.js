import React from "react";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im"


const AboutHome = (props) => {

  return (
    < div className={`about grid-row-${props.row} inherit-grid`}>

      <img className="lock" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/logo-green-orange-bg.svg"></img>

      <div className="title font-section-title">
        What is Niceland VPN?
      </div>
      <div className="subtitle font-big-section-description">
        Niceland is a startup-company registered and operated out of Iceland.
        The focus of the platform is to create a VPN that prioritizes anonymity while still maintaining a high degree of quality.
        In order to accomplish this goal Niceland had to be built from the ground up without using pre-built VPN solutions while avoiding the use of any platforms and tools that utilize analytics or user tracking.
        <br></br>
        <br></br>
        In its core, Niceland is a global routing network that offers VPN functionality but does not operate like a normal VPN.

      </div>

      <Link className="learn-more-button" to={"/about"}>
        Learn More
        <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
      </Link>

    </div >
  );
}

export default AboutHome;