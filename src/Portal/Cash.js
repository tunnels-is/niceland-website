import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import Banner from "./Banner";
import Cash from "./sections/Cash";
import Payment from "./sections/Payment";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";
import BannerPricing from "./BannervPricing";
import BannerCash from "./BannervCash";
import BannerNew from "./BannerNew";

const CashPage = (props) => {
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
        linkText={"Get NicelandVPN"}
        linkPath={"/download"}
      />
      <Cash row={1} bg={1}></Cash>
      <Download row={"2"} bg={"2"}></Download>

    </>
  );
}

export default CashPage;