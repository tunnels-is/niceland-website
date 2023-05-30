import React from "react";
import Download from "./sections/Download";
import AboutBusinessVPN from "./sections/AboutBusinessVPN";
import BannerBusiness from "./BannerBusiness";
import XXXXFeatures from "./sections/4xFeatures";
import STORE from "../store";
import BusinessVPN from "./sections/BusinessVPN";
import ContactUS from "./sections/ContactUS";

const PrivateVPNPage = () => {

    window.scrollTo(0, 0);

    return (
        <>
            <BannerBusiness></BannerBusiness>
            <AboutBusinessVPN row={"1"} bg={1}></AboutBusinessVPN>
            <BusinessVPN row={"1"} bg={1}></BusinessVPN>

            <XXXXFeatures row={"4"} bg={"1"} class={"no-bottom-padding"}
                title={"Feature Overview"}
                features={[
                    STORE.Content.Features["BUSINESS-SimpleSetup"],
                    STORE.Content.Features["BUSINESS-UnlimitedUsers"],
                    STORE.Content.Features["BUSINESS-CustomDNS"],
                    STORE.Content.Features["BUSINESS-NAT"]
                ]}></XXXXFeatures>

            <XXXXFeatures row={"4"} bg={"1"} class={" no-top-padding"}
                features={[
                    STORE.Content.Features["BUSINESS-ToggleAccess"],
                    STORE.Content.Features["BUSINESS-BlackWhiteListing"],
                ]}></XXXXFeatures>

            <ContactUS row={"1"} bg={1}></ContactUS>



            <Download row={"2"} bg={"2"}></Download>
        </>
    )
}

export default PrivateVPNPage;