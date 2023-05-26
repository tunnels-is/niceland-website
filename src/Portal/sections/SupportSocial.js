import { Link } from "react-router-dom";
import React from "react";

const SupportSocial = (props) => {

  return (

    <div className={`support grid-row-${props.row} bg-${props.bg} inherit-grid`}>

      <div className="title font-section-title">
        Communities
      </div>
      <div className="subtitle font-section-subtitle">
        Find us on any of these platforms
      </div>

      <div className="box slack">
        <a href="https://join.slack.com/t/nicelandvpn/shared_invite/zt-1rfv4ks6d-A5lLr9W4FdjEzlmZXwrMzw" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/social/slack.svg" />
        </a >
      </div>

      <div className="box discord">
        <a href="https://discord.gg/7Ts3PCnCd9" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/social/discord.svg" />
        </a >
      </div>

      <div className="box reddit">
        <a href="https://www.reddit.com/r/nicelandvpn" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/social/reddit.svg" />
        </a >
      </div>

      <div className="box twitter">
        <a href="https://www.twitter.com/nicelandvpn" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/social/twitter.svg" />
        </a >
      </div>

      <div className="box telegram">
        <a href="https://t.me/+hTRZ3W3YyuQwZGFk" target={"_blank"}>
          <img src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/social/telegram.svg" />
        </a >
      </div>



    </div>
  );
}

export default SupportSocial;