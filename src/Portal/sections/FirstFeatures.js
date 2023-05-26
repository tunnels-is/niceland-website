import { Link } from "react-router-dom";
import React from "react";

const FirstFeatures = (props) => {

  return (

    <div className={`first-features grid-row-${props.row} inherit-grid bg-${props.bg}`}>

      <div className="title font-section-title">
        Highlights
      </div>
      {/* <div className="subtitle font-section-subtitle">
        ???????
      </div> */}

      {props.features[0] &&
        <div className="s1 box">
          <img className="img" src={props.features[0].icon}></img>
          <div className="item-title font-section-item-title">{props.features[0].title}</div>
          <div className="description font-section-description">
            {props.features[0].short}
          </div>

        </div>
      }

      {props.features[1] &&
        <div className="s2 box">
          <img className="img" src={props.features[1].icon}></img>
          <div className="item-title font-section-item-title">
            {props.features[1].title}
          </div>
          <div className="description font-section-description">
            {props.features[1].short}
          </div>

        </div>
      }


      {props.features[1] &&
        <div className="s3 box">
          <img className="img" src={props.features[2].icon}></img>
          <div className="item-title font-section-item-title">
            {props.features[2].title}
          </div>
          <div className="description font-section-description">
            {props.features[2].short}
          </div>
        </div>
      }


    </div>
  );
}

export default FirstFeatures;