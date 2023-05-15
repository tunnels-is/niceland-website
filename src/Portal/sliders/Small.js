
import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const SliderSmall = (props) => {

    let { code } = useParams()
    let { dir } = useParams()

    return (
        <>
            <div className="slider-small">
                {dir === "right" &&
                    <div className="content-left">
                        <img src={`https://raw.githubusercontent.com/tunnels-is/media/master/marketing/banner-` + code + `.png`}></img>
                    </div>
                }
                {dir === "left" &&
                    <div className="content-right">
                        <img src={`https://raw.githubusercontent.com/tunnels-is/media/master/marketing/banner-` + code + `.png`}></img>
                    </div>
                }
                {(dir !== "right" && dir !== "left") &&
                    <div className="content-left">
                        <img src={`https://raw.githubusercontent.com/tunnels-is/media/master/marketing/banner-` + code + `.png`}></img>
                    </div>
                }
            </div >
        </>
    );
}

export default SliderSmall;