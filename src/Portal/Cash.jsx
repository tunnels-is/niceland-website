import React from "react";
import { useNavigate } from "react-router-dom";
import Cash from "./sections/Cash";
import Download from "./sections/Download";
import BannerNew from "./BannerNew";

const CashPage = (props) => {
	window.scrollTo(0, 0);

	return (
		<>
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner-mobile.webp"}
				title={"Nice Subscription Options"}
				subtitle={"With official launch discounts!"}
				showLink={true}
				linkText={"Register Here"}
				linkPath={"/signup"}
			/>
			<Cash row={1} bg={1}></Cash>
			<Download row={"2"} bg={"2"}></Download>
		</>
	);
}

export default CashPage;
