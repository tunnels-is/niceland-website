import React, { useEffect, useState, useId } from "react";
import { ImArrowRight2 } from "react-icons/im"
import { Link } from "react-router-dom";

const BannerV4 = (props) => {

	return (
		<>
			<div className="banner4">
				<img className="banner-bg" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/comp/bannerv4.webp"></img>

				<div className="title font-banner-title">Experience Niceland</div>


				<Link to={"/signup"} className="button font-button get-started">Register Here
					<ImArrowRight2 className="arrow" size={15}></ImArrowRight2>
				</Link>

			</div>
		</>
	);
}

export default BannerV4;
