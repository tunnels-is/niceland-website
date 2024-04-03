import React from "react";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";
import Countries from "./sections/Countries";
import BannerNew from "./BannerNew";

const CountriesPage = () => {

	window.scrollTo(0, 0);

	return (
		<>
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/download-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/download-banner-mobile.webp"}
				title={"Niceland Is Growing"}
				subtitle={"Find your country in the list below"}
				showLink={true}
				linkText={"Register Here"}
				linkPath={"/signup"}
			/>
			<Countries row={2} bg={1}></Countries>
			<Download row={"4"} bg={"1"}></Download>
			<SupportSocial row={"5"} bg={"1"}></SupportSocial>
		</>
	);

}

export default CountriesPage;
