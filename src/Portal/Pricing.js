import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { BsCheck2All } from "react-icons/bs"
import Banner from "./Banner";
import Pricing from "./sections/Pricing";
import Payment from "./sections/Payment";

const PricingPage = (props) => {

  const navigate = useNavigate();

  return (
    <>
      <Banner></Banner>
      <div className="home container">
        <Pricing></Pricing>
        <Payment></Payment>

      </div>
    </>
  );
}

export default PricingPage;