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

const CashPage = (props) => {
  window.scrollTo(0, 0);

  const navigate = useNavigate();

  return (
    <>
      {/* <Banner></Banner> */}
      <BannerCash></BannerCash>
      {/* <Notice row={"1"} bg={"1"}></Notice> */}
      <Cash row={1} bg={1}></Cash>
      <Download row={"2"} bg={"2"}></Download>

    </>
  );
}

export default CashPage;