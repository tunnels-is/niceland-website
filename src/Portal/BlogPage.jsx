import React from "react";
import BannerV4 from "./Bannerv4";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial";
import BannerNew from "./BannerNew";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import Blogs from "./sections/Blog";


const BlogPage = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<BannerNew
				image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/download-banner.webp"}
				mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/download-banner-mobile.webp"}
				title={"Blog"}
				subtitle={"The Blog"}
				showLink={true}
				linkText={"Register Here!"}
				linkPath={"/signup"}
			/>

			<Blogs row={"1"} bg={"1"}></Blogs>

			<Download row={"2"} bg={"1"}></Download>
			<SupportSocial row={"3"} bg={"1"}></SupportSocial>
		</>
	)
}

export default BlogPage;
