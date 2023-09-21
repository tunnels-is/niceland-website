import AboutFeatures from "./sections/AboutFeatures";
import MainFeatures from "./sections/MainFeatures";
import Download from "./sections/Download";
import React from "react";
import BannerV2 from "./Bannerv2";
import FirstFeatures from "./sections/FirstFeatures";
import SupportSocial from "./sections/SupportSocial";
import XXXXFeatures from "./sections/4xFeatures";
import STORE from "../store";
import AboutBusinessVPN from "./sections/AboutBusinessVPN";
import Countries from "./sections/Countries";
import AboutTechnical from "./sections/AboutTechnical";
import BannerNew from "./BannerNew";

const FeaturesPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      {/* <BannerV2 ></BannerV2> */}
      <BannerNew
        image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/features-banner.webp"}
        mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/features-banner-mobile.webp"}
        title={"Features And Roadmap"}
        subtitle={"Learn more about Niceland and what is to come"}
        showLink={true}
        linkText={"Get NicelandVPN"}
        linkPath={"/download"}
      />

      <AboutFeatures row={"1"} bg={"1"}></AboutFeatures>

      <FirstFeatures row={"2"} bg={"2"}
        features={[
          STORE.Content.Features["NoLogging"],
          STORE.Content.Features["SandboxedUserActions"],
          STORE.Content.Features["AnonymousAccounts"],
        ]}
      ></FirstFeatures>

      <AboutTechnical row={"3"} bg={"1"}></AboutTechnical>

      <XXXXFeatures row={"4"} bg={"1"} class={"no-bottom-padding"}
        title={"Feature Overview"}
        features={[
          STORE.Content.Features["NoLogging"],
          STORE.Content.Features["AnonymousMetaData"],
          STORE.Content.Features["AnonymousAccounts"],
          STORE.Content.Features["CashPayments"]
        ]}></XXXXFeatures>

      <XXXXFeatures row={"5"} bg={"1"} class={"no-top-padding  no-bottom-padding"} features={[
        STORE.Content.Features["PaymentProcessor"],
        STORE.Content.Features["OffsitePaymentProcessing"],
        STORE.Content.Features["ProtectedKeys"],
        STORE.Content.Features["CookiePolicy"]
      ]}></XXXXFeatures>

      <XXXXFeatures row={"6"} bg={"1"} class={"no-top-padding  no-bottom-padding"} features={[
        STORE.Content.Features["DNSLeaks"],
        STORE.Content.Features["IPv6Leaks"],
        STORE.Content.Features["DoubleVPN"],
        STORE.Content.Features["TwoFactorAuthentication"]
      ]}></XXXXFeatures>

      <XXXXFeatures row={"7"} bg={"1"} class={"no-top-padding  no-bottom-padding"} features={[
        STORE.Content.Features["GuaranteedBandwidth"],
        STORE.Content.Features["Multithreading"],
        STORE.Content.Features["UniqueBuffersAndTunnels"],
        STORE.Content.Features["NoPersistanceService"]
      ]}></XXXXFeatures>

      <XXXXFeatures row={"8"} bg={"1"} class={"no-top-padding no-bottom-padding"} features={[
        STORE.Content.Features["CrossContinent"],
        STORE.Content.Features["CustomDNS"],
        STORE.Content.Features["SandboxedUserActions"],
        STORE.Content.Features["GEOUnblocking"],
      ]}></XXXXFeatures>

      <XXXXFeatures row={"9"} bg={"1"} class={"no-top-padding no-bottom-padding"} features={[
        STORE.Content.Features["OpenSource"],
        STORE.Content.Features["PrivateVPN"],
        STORE.Content.Features["DomainBlocking"],
        STORE.Content.Features["FirewallPenetration"],
      ]}></XXXXFeatures>

      <XXXXFeatures row={"10"} bg={"1"} class={"no-top-padding"} features={[
        STORE.Content.Features["FastIPTurnover"],
      ]}></XXXXFeatures>

      <MainFeatures row={"2"} bg={"2"} button={false}></MainFeatures>
      <AboutBusinessVPN row={"10"} bg={"1"} button={true}></AboutBusinessVPN>
      <Countries row={13} bg={2}></Countries>

      <XXXXFeatures row={"10"} bg={"1"} class={"no-bottom-padding"}
        title={"On The Horizon"}
        features={[
          STORE.Content.Features["PersistentSessions"],
          STORE.Content.Features["CryptoPayments"],
          STORE.Content.Features["GamingMode"],
          STORE.Content.Features["IncreasedMinimumBandwidth"]
        ]}></XXXXFeatures>

      <XXXXFeatures row={"11"} bg={"1"} class={"no-top-padding no-bottom-padding"} features={[
        STORE.Content.Features["AndroidAPP"],
        STORE.Content.Features["iOSAPP"],
        STORE.Content.Features["SecurityAudit"],
        STORE.Content.Features["PortForwarding"],
      ]}></XXXXFeatures>

      <XXXXFeatures row={"12"} bg={"1"} class={"no-top-padding no-bottom-padding"} features={[
        STORE.Content.Features["DetailedDocs"],
        STORE.Content.Features["StandAloneCLI"],
        STORE.Content.Features["LinuxSecuritySigning"],
        STORE.Content.Features["RouteOnlyVPN"],
      ]}></XXXXFeatures>

      <XXXXFeatures row={"12"} bg={"1"} class={"no-top-padding no-bottom-padding"} features={[
        STORE.Content.Features["HardwareCompatibility"],
      ]}></XXXXFeatures>


      <Download row={"14"} bg={"2"}></Download>
    </>
  );

}

export default FeaturesPage;
