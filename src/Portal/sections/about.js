import React from "react";
import { Link } from "react-router-dom";


const About = (props) => {

  return (
    < div className={`about grid-row-${props.row} inherit-grid`}>

      <img className="lock" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/logo-green-orange-bg.svg"></img>

      <div className="title font-section-title">
        What Niceland VPN is all about
      </div>
      <div className="subtitle font-big-section-description">
        We are an Icelandic-based VPN service that was founded by four individuals who wanted to offer a reliable, secure, and user-friendly VPN solution. Our focus is on providing a high-quality service that emphasizes privacy and anonymity. Our VPN uses an industry standard encryption to keep outsiders from spying on users activities. We also operates under a strict no-logs policy, ensuring maximum privacy for our users. The customer support is available 24/7, and we offer a 30-day money-back guarantee for users who aren't completely satisfied. Out goal is to provide a top-tier VPN service that is easy to use and dependable.
      </div>

      <Link className="learn-more-button" to={"/about"}>
        Learn More
        <img className="arrow" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/right-arrow.svg"></img>
      </Link>

    </div >
  );
}

export default About;