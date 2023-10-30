import { Link } from "react-router-dom";
import React from "react";

const XXXXFeatures = (props) => {

  return (
    <>
      < div className={`second-features grid-row-${props.row} inherit-grid ${props.class} bg-${props.bg}`
      }>

        {props.title &&
          <div className="title font-section-title">
            {props.title}
          </div>
        }

        {props.features[0] &&
          <div className="s1 box">
            {props.features[0].icon &&
              <img className="img" src={props.features[0].icon}></img>
            }
            {!props.features[0].icon &&
              <div className="img fake-img" style={{ height: "50px" }}></div>
            }
            <div className="item-title font-section-item-title">{props.features[0].title}</div>
            <div className="description font-section-description">
              {props.features[0].short}
            </div>

          </div>
        }

        {props.features[1] &&
          <div className="s2 box">
            {props.features[1].icon &&
              <img className="img" src={props.features[1].icon}></img>
            }

            <div className="item-title font-section-item-title">{props.features[1].title}</div>
            <div className="description font-section-description">
              {props.features[1].short}
            </div>
          </div>
        }


        {props.features[2] &&
          <div className="s3 box">
            {props.features[2].icon &&
              <img className="img" src={props.features[2].icon}></img>
            }
            {!props.features[2].icon &&
              <div className="img fake-img" style={{ height: "50px" }}></div>
            }
            <div className="item-title font-section-item-title">{props.features[2].title}</div>
            <div className="description font-section-description">
              {props.features[2].short}
            </div>
          </div>
        }

        {props.features[3] &&
          <div className="s4 box">
            {props.features[3].icon &&
              <img className="img" src={props.features[3].icon}></img>
            }


            <div className="item-title font-section-item-title">
              {props.features[3].title}
            </div>
            <div className="description font-section-description">{props.features[3].short}
            </div>
          </div>
        }

      </div >
    </>




  );
}

export default XXXXFeatures;