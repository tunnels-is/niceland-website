import React from "react";
import BannerV1 from "./Banner";
import Notice from "./NoticeBanner";
import AboutHome from "./sections/aboutHome";
import Download from "./sections/Download";
import MainFeatures from "./sections/MainFeatures";
import SupportSocial from "./sections/SupportSocial";

const HomePage = () => {

  window.scrollTo(0, 0);
  return (
    <>
      <BannerV1 ></BannerV1>
      <Notice row={"1"} bg={"1"}></Notice>
      <AboutHome row={"1"} bg={"1"}></AboutHome>
      <MainFeatures row={"2"} bg={"2"}></MainFeatures>
      {/* <Pricing row={3} bg={"1"}></Pricing> */}
      <Download row={"4"} bg={"1"}></Download>
      <SupportSocial row={"5"} bg={"1"}></SupportSocial>
    </>
  );

}

export default HomePage;
