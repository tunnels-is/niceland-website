import React from "react";
import BannerV4 from "./Bannerv4";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";


const DownloadPage = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <BannerV4></BannerV4>
            <Notice row={"1"} bg={"1"}></Notice>
            <Download row={"1"} bg={"1"}></Download>
            <SupportSocial row={"2"} bg={"1"}></SupportSocial>
        </>
    )
}

export default DownloadPage;