import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

const Download = (props) => {

  const navigate = useNavigate();

  return (
    <div className={`download grid-row-${props.row} inherit-grid`}>

      <div className="download-title font-section-title">
        Register in the app!
      </div>
      <div className="subtitle font-section-subtitle">

        <a target="_blank" href="https://github.com/tunnels-is/nicelandVPN/releases/latest">
          Click here for all available downloads
        </a>
      </div>

      <div className="s1 box">

        <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-win11.svg"></img>
        <div className="title">
          <a target="_blank" href="https://github.com/tunnels-is/nicelandVPN/releases/latest">
            Download for Windows
          </a>
        </div>
      </div>

      <div className="s2 box">
        <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/mac.svg"></img>
        <div className="title">
          <a target="_blank" href="https://github.com/tunnels-is/nicelandVPN/releases/latest">
            Download for MacOS
          </a>
        </div>
      </div>

      <div className="s3 box">
        <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-linux.png"></img>
        <div className="title">
          <a target="_blank" href="https://github.com/tunnels-is/nicelandVPN/releases/latest">
            Download for Linux
          </a>
        </div>
      </div>

    </div >
  );
}

export default Download;