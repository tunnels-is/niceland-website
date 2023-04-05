import React from "react";
import BannerV1 from "./Banner";
import About from "./sections/about";
import Download from "./sections/Download";
import MainFeatures from "./sections/MainFeatures";
import SupportSocial from "./sections/SupportSocial";

const HomePage = () => {

  window.scrollTo(0, 0);
  return (
    <>
      <BannerV1 ></BannerV1>
      <About row={"1"} bg={"1"}></About>
      <MainFeatures row={"2"} bg={"2"}></MainFeatures>
      {/* <Pricing row={3} bg={"1"}></Pricing> */}
      <Download row={"4"} bg={"1"}></Download>
      <SupportSocial row={"5"} bg={"1"}></SupportSocial>
    </>
  );

}

export default HomePage;