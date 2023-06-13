import React from "react";
import BannerV4 from "./Bannerv4";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";
import BannerNew from "./BannerNew";


const DownloadPage = () => {
    window.scrollTo(0, 0);

    return (
        <>
            <BannerNew
                image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/download-banner.webp"}
                mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/download-banner-mobile.webp"}
                title={"Experience Niceland"}
                subtitle={"On MacOS, Windows and Linux"}
                showLink={true}
                linkText={"Get NicelandVPN"}
                linkPath={"/download"}
            />
            {/* <Notice row={"1"} bg={"1"}></Notice> */}
            <Download row={"1"} bg={"1"}></Download>
            <SupportSocial row={"2"} bg={"1"}></SupportSocial>
        </>
    )
}

export default DownloadPage;