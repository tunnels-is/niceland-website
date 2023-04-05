import React from "react";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im"


const About = (props) => {

  return (
    < div className={`about grid-row-${props.row} inherit-grid`}>

      <img className="lock" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/logo-green-orange-bg.svg"></img>

      <div className="title font-section-title">
        What Niceland VPN is all about
      </div>
      <div className="subtitle font-big-section-description">
        Niceland is an Icelandic-based VPN service that was founded by four individuals who wanted to offer a reliable, secure, and user-friendly VPN solution. Our focus is on providing a high-quality service that emphasizes privacy and anonymity. Niceland uses an industry standard encryption to keep outsiders from spying on users activities and also operates under a strict no-logs policy, ensuring maximum privacy for our users. Customer support is available 24/7, and there is a 30-day money-back guarantee for users who aren't completely satisfied. Niceland´s goal is to provide a top-tier VPN service that is easy to use and dependable.
      </div>

      <Link className="learn-more-button" to={"/about"}>
        Learn More
        <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
      </Link>

    </div >
  );
}

export default About;