import { Link } from "react-router-dom";
import React from "react";

const SupportSocial = (props) => {

  return (

    <div className={`support grid-row-${props.row} bg-${props.bg} inherit-grid`}>

      <div className="title font-section-title">
        Join our communities for additional support
      </div>

      <div className="box slack">
        <a href="https://join.slack.com/t/nicelandvpn/shared_invite/zt-1no4cjdjr-zv7JAbUhqL4cq0MSW1jPBQ" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/slack-logo.svg" />
        </a >
      </div>

      <div className="box discord">
        <a href="https://discord.gg/7Ts3PCnCd9" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/discord-logo.svg" />
        </a >
      </div>

      <div className="box reddit">
        <a href="https://www.reddit.com/r/nicelandvpn" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/reddit-logo.svg" />
        </a >
      </div>

      <div className="box twitter">
        <a href="https://www.twitter.com/nicelandvpn" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/twitter-logo.svg" />
        </a >
      </div>



    </div>
  );
}

export default SupportSocial;