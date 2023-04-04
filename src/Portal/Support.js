import React from "react";
import BannerV3 from "./Bannerv3";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";


const SupportPage = () => {

    return (
        <>
            <BannerV3></BannerV3>
            <SupportSocial row={"1"} bg={"1"}></SupportSocial>
            <Download row={"2"} bg={"1"}></Download>

        </>
    )
}

export default SupportPage;