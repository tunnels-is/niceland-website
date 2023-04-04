import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const BannerSmall = (props) => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false)

  return (
    <div className="banner-container">
      <div className="banner">
        <img className=".img-fluid small-banner" src="https://github.com/tunnels-is/media/raw/master/banner.png"></img>
        <div className="links">
          <a className="link" href="" >Features</a>
          <a className="link" href="" >Pricing</a>
          <a className="link" href="" >Download</a>
          <a className="link" href="" >About</a>
        </div>
      </div >
    </div>
  );
}

export default BannerSmall;