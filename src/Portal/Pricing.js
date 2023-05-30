import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import Banner from "./Banner";
import Pricing from "./sections/Pricing";
import Payment from "./sections/Payment";
import Notice from "./NoticeBanner";
import Download from "./sections/Download";

const PricingPage = (props) => {

  const navigate = useNavigate();

  return (
    <>
      <Banner></Banner>
      {/* <Notice row={"1"} bg={"1"}></Notice> */}
      <Pricing row={1} bg={1}></Pricing>
      <Download row={"2"} bg={"2"}></Download>
    </>
  );
}

export default PricingPage;