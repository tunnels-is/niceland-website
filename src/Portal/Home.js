import React from "react";
import BannerV1 from "./Banner";
import Notice from "./NoticeBanner";
import AboutHome from "./sections/aboutHome";
import Download from "./sections/Download";
import MainFeatures from "./sections/MainFeatures";
import SecondFeatures from "./sections/SecondFeatures";
import SupportSocial from "./sections/SupportSocial";
import FirstFeatures from "./sections/FirstFeatures";
import STORE from "../store";
import Countries from "./sections/Countries";

const HomePage = () => {

  window.scrollTo(0, 0);
  return (
    <>
      <BannerV1 ></BannerV1>
      {/* <Notice row={"1"} bg={"1"}></Notice> */}
      <AboutHome row={"1"} bg={"1"}></AboutHome>
      <MainFeatures row={"2"} bg={"2"} button={true}></MainFeatures>
      <Countries row={4} bg={1}></Countries>
      <FirstFeatures row={"3"} bg={"2"}
        features={[
          STORE.Content.Features["NoLogging"],
          STORE.Content.Features["SandboxedUserActions"],
          STORE.Content.Features["AnonymousAccounts"],
        ]}
      ></FirstFeatures>
      {/* <SecondFeatures row={"3"} bg={"1"}></SecondFeatures> */}
      {/* <Pricing row={3} bg={"1"}></Pricing> */}
      <Download row={"5"} bg={"1"}></Download>
      <SupportSocial row={"6"} bg={"2"}></SupportSocial>
    </>
  );

}

export default HomePage;
