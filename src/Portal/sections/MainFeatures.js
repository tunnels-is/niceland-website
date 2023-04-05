import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im"
import React from "react";

const MainFeatures = (props) => {

  return (
    <div className={`main-features grid-row-${props.row} inherit-grid bg-${props.bg}`}>

      <div className="title font-section-title">
        These are our Core Principles
      </div>

      <div className="s1 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-no-logging.png"></img>
        <div className="item-title font-section-item-title">No Tracking or Logging</div>
        <div className="description font-section-description">
          Niceland was built from the ground up to with anonymity as it's primary focus. Niceland does not rely on third party VPN clients or analytics services. <br /><br /> - You can't share what you don't have
        </div>
        <Link className="learn-more-button" to={"/features"}>
          Learn More
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </Link>
      </div>


      <div className="s2 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-anon-mask.png"></img>
        <div className="item-title font-section-item-title">Anonymity</div>
        <div className="description font-section-description">
          Anonymous (Token) user accounts, anonymous (Cash) payments, anonymous (Tag) routing, Niceland implemented these features from the very first stage of development and we welcome any new feature that helps our users stay safe
        </div>
        <Link className="learn-more-button" to={"/features"}>
          Learn More
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </Link>
      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-good.png"></img>
        <div className="item-title font-section-item-title">Higher Quality Service</div>
        <div className="description font-section-description">
          Instead of over-crowding servers with users, Niceland only places a limited number of users on each server and with our custom built algorithms we ensure every user has enough bandwidth to enjoy the internet without interruption from other users
        </div>

        <Link className="learn-more-button" to={"/features"}>
          Learn More
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </Link>
      </div>

    </div >

  );
}

export default MainFeatures;