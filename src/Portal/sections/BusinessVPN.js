import React from "react";

const BusinessVPN = (props) => {

  return (
    <div className={`business-vpn grid-row-${props.row} inherit-grid bg-${props.bg}`}>
      <img className="section business-img" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/private/business.svg"></img>
    </div>
  );
}

export default BusinessVPN;