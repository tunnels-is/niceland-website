import React from "react";
import BannerV3 from "./Bannerv3";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";


const SupportPage = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <BannerV3></BannerV3>
            <Notice row={"1"} bg={"1"}></Notice>
            <SupportSocial row={"1"} bg={"1"}></SupportSocial>
            <Download row={"2"} bg={"1"}></Download>

        </>
    )
}

export default SupportPage;