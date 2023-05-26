import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import Banner from "./Banner";
import Pricing from "./sections/Pricing";
import Payment from "./sections/Payment";
import Notice from "./NoticeBanner";

const PricingPage = (props) => {

  const navigate = useNavigate();

  return (
    <>
      <Banner></Banner>
      {/* <Notice row={"1"} bg={"1"}></Notice> */}
      <div className="home container">
        <h1 className="TBA">TO BE ANNOUNCED</h1>
      </div>
    </>
  );
}

export default PricingPage;