import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im"
import React from "react";

const MainFeatures = (props) => {

  return (
    <div className={`main-features grid-row-${props.row} inherit-grid bg-${props.bg}`}>

      <div className="title font-section-title">
        Core Principles
      </div>

      <div className="s1 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-no-logging.png"></img>
        <div className="item-title font-section-item-title">No Logging</div>
        <div className="description font-section-description">
          Niceland does not track any user activity in any form. The most important functionality of Niceland is not knowing anything about our users  <br /><br /> - You can't share what you do not have
        </div>
        {props.button &&
          <Link className="learn-more-button" to={"/features"}>
            Learn More
            <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
          </Link>
        }
      </div>


      <div className="s2 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-anon-mask.png"></img>
        <div className="item-title font-section-item-title">Anonymity</div>
        <div className="description font-section-description">
          Anonymous user accounts, cash payments, custom routing protocols, forward secrecy, off-site payment processing and so much more. Niceland was built from the ground up with anonymity and privacy as it's main focus.
        </div>
        {props.button &&
          <Link className="learn-more-button" to={"/features"}>
            Learn More
            <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
          </Link>
        }
      </div>


      <div className="s3 box">
        <img className="img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-good.png"></img>
        <div className="item-title font-section-item-title"> Quality</div>
        <div className="description font-section-description">
          Instead of over-crowding servers with users, Niceland only places a limited number of users on each server and with our custom built algorithms we ensure every user has enough bandwidth to enjoy the internet without interruption
        </div>

        {props.button &&
          <Link className="learn-more-button" to={"/features"}>
            Learn More
            <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
          </Link>
        }
      </div>

    </div >

  );
}

export default MainFeatures;