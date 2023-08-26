import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";

function handleWindowsClick() {
  window.open('https://github.com/tunnels-is/nicelandvpn-desktop/releases/download/v1.1.3/NicelandVPN-Windows.exe', '_blank');
}

function handleMacClick() {
  window.open('https://github.com/tunnels-is/nicelandvpn-desktop/releases/download/v1.1.3/NicelandVPN-MacOS.zip', '_blank');
}

function handleLinuxClick() {
  window.open('https://github.com/tunnels-is/nicelandvpn-desktop/releases/latest', '_blank');
}

const Download = (props) => {

  const navigate = useNavigate();

  return (
    <div id="download" className={`download grid-row-${props.row} inherit-grid`}>

      <div className="download-title font-section-title">
        Available Downloads
      </div>
      
      <div className="subtitle font-section-subtitle">

        <a target="_blank" href="https://github.com/tunnels-is/nicelandVPN/releases/latest">
          Click here for all available downloads
        </a>

      </div>
    
      <div className="s1 box box-shadow" onClick={handleWindowsClick} style={{cursor: 'pointer'}}>
        <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-win11.svg"></img>
        <div className="title">
            Download for Windows
        </div>
      </div>
      <div className="s2 box box-shadow" onClick={handleMacClick} style={{cursor: 'pointer'}}>
        <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/mac.svg"></img>
        <div className="title">
            Download for MacOS
        </div>
      </div>

      <div className="s3 box box-shadow" onClick={handleLinuxClick} style={{cursor: 'pointer'}}>
        <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-linux.png"></img>
        <div className="title">      
            Download for Linux
        </div>
      </div>

    </div >
  );
}

export default Download;