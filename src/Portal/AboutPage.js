import React from "react";
import BannerV2 from "./Bannerv2";
import BannerV5 from "./Bannerv5";
import Notice from "./NoticeBanner";
import About from "./sections/about";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";


const AboutPage = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <BannerV5></BannerV5>
            <Notice row={"1"} bg={"1"}></Notice>
            <About row={"1"} bg={"1"}></About>
            <SupportSocial row={"2"} bg={"2"}></SupportSocial>
            <Download row={"3"} bg={"2"}></Download>

        </>
    )
}

export default AboutPage;