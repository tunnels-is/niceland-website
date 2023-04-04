import React from "react";
import BannerV4 from "./Bannerv4";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";


const DownloadPage = () => {

    return (
        <>
            <BannerV4></BannerV4>
            <Download row={"1"} bg={"1"}></Download>
            <SupportSocial row={"2"} bg={"1"}></SupportSocial>
        </>
    )
}

export default DownloadPage;