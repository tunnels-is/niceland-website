import React from "react";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im"


const About = (props) => {

  return (
    < div className={`about grid-row-${props.row} inherit-grid`}>

      <img className="lock" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/logo-green-orange-bg.svg"></img>

      <div className="title font-section-title">
        Niceland at it´s Core
      </div>
      <div className="subtitle font-big-section-description">
        Niceland VPN is a platform created by Tunnels EHF, which is a newly founded startup-company from Iceland. Tunnels EHF was founded by four individual.
        <br></br>
        Tjörvi Guðjónsson is the acting CEO his background in business administration. The COO is Andrea Líf Ægisdóttir, her background comes from international business and relations. Grímur Ásgeir Björnsson is our CLO, an LLM law graduate from the University of Iceland, having specialized in corporate law and Our CTO is Sveinn Óttar Lárusson, his background is in IT tech and network programming.
        <br></br>
        <br></br>
        Niceland VPN was built from the ground up with anonymity at its core. Every decision we make is centered around keeping our users' data anonymous. How the platform was built, how data is stored, what third party providers to use, even where we registered the company.

      </div>

      {/* <Link className="learn-more-button" to={"/about"}>
        Learn More
        <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
      </Link> */}

    </div >
  );
}

export default About;