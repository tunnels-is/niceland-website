import { Link } from "react-router-dom";
import React from "react";
import { ImArrowRight2 } from "react-icons/im"

const AboutBusinessVPN = (props) => {

  // Simple setup VPN for companies
  // No port forwarding configurations required
  // 
  return (

    < div className={`about-features grid-row-${props.row} inherit-grid bg-${props.bg}`
    }>

      <img className="office" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/icons/office-work.svg"></img>

      <div className="title font-section-title">
        VPN For The Office
      </div>
      <div className="subtitle font-big-section-description">
        At NicelandVPN, we believe that maintaining secure, private network connections shouldn't be a chore. It should be simple, efficient, and accessible to all.
        <br />
        <br />
        We've designed our business VPN solution to be as user-friendly as possible. With NicelandVPN, you can establish your own VPNs without the need for complex port forwarding configurations or in-depth networking knowledge.
        <br />
        <br />
        Niceland uses a combination of routers and VPN endpoints, making it easily scalable for large infrastructure and cloud projects. For businesses with exceptionally high demands, Niceland offers a custom deployment of it's global VPN Mesh network.

        {props.button &&
          <Link className="learn-more-button" to={"/business"}>
            Learn More
            <ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
          </Link>
        }

      </div>

    </div >

  );
}

export default AboutBusinessVPN;