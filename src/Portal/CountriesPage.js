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

const CountriesPage = () => {

  window.scrollTo(0, 0);

  return (
    <>
      <BannerV1 ></BannerV1>
      <Countries row={2} bg={1}></Countries>
      <Download row={"4"} bg={"1"}></Download>
      <SupportSocial row={"5"} bg={"1"}></SupportSocial>
    </>
  );

}

export default CountriesPage;
