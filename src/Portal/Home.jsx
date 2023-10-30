import React from "react";
import AboutHome from "./sections/aboutHome";
import Download from "./sections/Download";
import MainFeatures from "./sections/MainFeatures";
import SupportSocial from "./sections/SupportSocial";
import FirstFeatures from "./sections/FirstFeatures";
import STORE from "../store";
import Countries from "./sections/Countries";
import BannerNew from "./BannerNew";

const HomePage = () => {

	window.scrollTo(0, 0);

	return (
		<>
			{/* <BannerV1 ></BannerV1> */}
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/home-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/home-banner-mobile.webp"}
				title={"Welcome To Niceland"}
				subtitle={"The Global Mesh-Network VPN"}
				showLink={true}
				linkText={"Free Trial"}
				linkPath={"/register"}
			/>
			{/* <Notice row={"1"} bg={"1"}></Notice> */}
			<AboutHome row={"1"} bg={"1"}></AboutHome>
			<MainFeatures row={"2"} bg={"2"} button={true}></MainFeatures>
			<Countries row={4} bg={1}></Countries>
			<FirstFeatures row={"3"} bg={"2"}
				features={[
					STORE.Content.Features["NoLogging"],
					STORE.Content.Features["FastIPTurnover"],
					STORE.Content.Features["AnonymousAccounts"],
				]}
			></FirstFeatures>
			{/* <SecondFeatures row={"3"} bg={"1"}></SecondFeatures> */}
			{/* <Pricing row={3} bg={"1"}></Pricing> */}
			<Download row={"5"} bg={"1"}></Download>
			<SupportSocial row={"6"} bg={"2"}></SupportSocial>
		</>
	);

}

export default HomePage;
