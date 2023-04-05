import AboutFeatures from "./sections/AboutFeatures";
import MainFeatures from "./sections/MainFeatures";
import Download from "./sections/Download";
import React from "react";
import BannerV2 from "./Bannerv2";
import FirstFeatures from "./sections/FirstFeatures";
import SecondFeatures from "./sections/SecondFeatures";
import ThirdFeatures from "./sections/ThirdFeatures";
import SupportSocial from "./sections/SupportSocial";

const FeaturesPage = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <BannerV2 ></BannerV2>
      <AboutFeatures row={"1"} bg={"1"}></AboutFeatures>
      <MainFeatures row={"2"} bg={"2"}></MainFeatures>
      <FirstFeatures row={"3"} bg={"1"}></FirstFeatures>
      <ThirdFeatures row={"5"} bg={"2"}></ThirdFeatures>
      <SecondFeatures row={"4"} bg={"1"}></SecondFeatures>
      <Download row={"10"} bg={"1"}></Download>
      <SupportSocial row={"11"} bg={"2"}></SupportSocial>
    </>
  );

}

export default FeaturesPage;