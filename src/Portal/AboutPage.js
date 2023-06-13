import React from "react";
import BannerV2 from "./Bannerv2";
import BannerV5 from "./Bannerv5";
import Notice from "./NoticeBanner";
import About from "./sections/about";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";
import BannerNew from "./BannerNew";


const AboutPage = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <BannerNew
                image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/about-banner.webp"}
                title={"Learn About Niceland"}
                subtitle={""}
                showLink={true}
                linkText={"Get NicelandVPN"}
                linkPath={"/download"}
            />

            <About row={"1"} bg={"1"}></About>
            <SupportSocial row={"2"} bg={"1"}></SupportSocial>
            <Download row={"3"} bg={"1"}></Download>

        </>
    )
}

export default AboutPage;