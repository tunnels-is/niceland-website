import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import Banner from "./Banner";
import Pricing from "./sections/Pricing";
import Payment from "./PaymentPage";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";
import BannerPricing from "./BannervPricing";
import BannerNew from "./BannerNew";

const PricingPage = (props) => {
  window.scrollTo(0, 0);

  const navigate = useNavigate();

  return (
    <>
      {/* <Banner></Banner> */}
      <BannerNew
        image={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner.webp"}
        mobileImage={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/banners/pricing-banner-mobile.webp"}
        title={"Nice Subscription Options"}
        subtitle={"With official launch discounts!"}
        showLink={true}
        linkText={"Free Trial"}
        linkPath={"/register"}
      />
      {/* <Notice row={"1"} bg={"1"}></Notice> */}
      <Pricing row={1} bg={1}></Pricing>
      <Download row={"2"} bg={"2"}></Download>
    </>
  );
}

export default PricingPage;