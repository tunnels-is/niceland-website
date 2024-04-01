import React from "react";
import Pricing from "./sections/Pricing";
import Download from "./sections/Download";
import BannerNew from "./BannerNew";

const PricingPage = () => {
	window.scrollTo(0, 0);
	return (
		<>
			{/* <Banner></Banner> */}
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner-mobile.webp"}
				title={"Subscribe To Niceland"}
				subtitle={"Buy your license key today and register in the app!"}
				showLink={false}
				linkText={"Register Here!"}
				linkPath={"/signup"}
			/>
			<Pricing row={1} bg={1}></Pricing>
			<Download row={"2"} bg={"2"}></Download>
		</>
	);
}

export default PricingPage;
