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
        <div className="item-title font-section-item-title">No Data Collection</div>
        <div className="description font-section-description">
          Not tracking ANY user activity is our main objective, we do not collect data on user activity, track users or collect logs on any user related events.
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
          Our platform offers anonymous accounts. Meaning you can sign up with a randomly generated account name. Additionally we accept payments via cash
        </div>
        <Link className="learn-more-button" to={"/features"}>
          Learn More
          <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
        </Link>
      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-quality.png"></img>
        <div className="item-title font-section-item-title">Higher Quality Service</div>
        <div className="description font-section-description">
          Our VPN platform ensures a basic quality of service, each user subscription has a minimum guaranteed bandwidth with no maximum limits
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