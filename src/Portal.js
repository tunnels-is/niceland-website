import { BrowserRouter, HashRouter, Link, Route, Router, Routes, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import FeaturesPage from "./Portal/features";
import SupportPage from "./Portal/Support";
import Pricing from "./Portal/Pricing";
import HomePage from "./Portal/Home";
import Footer from "./Portal/footer";
import Nav from "./Portal/Nav";
import STORE from "./store";

import "./assets/style/portal.scss"
import AboutPage from "./Portal/AboutPage";
import DownloadPage from "./Portal/DownloadPage";
import Beta from "./Portal/Beta";
import Policies from "./Portal/Policies";
import SliderSmall from "./Portal/sliders/Small";
import Payment from "./Portal/sections/Payment";
import BusinessVPNPage from "./Portal/BusinessVPNPage";

const root = createRoot(document.getElementById('root'));

const LaunchPortal = () => {
  console.log("LAUNCHING PORTAL")

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  console.dir(window.location)
  let locationHash = window.location.pathname
  let slider = false
  let payment = false
  if (locationHash.includes("slider")) {
    slider = true
  }
  if (locationHash.includes("payment")) {
    payment = true
  }


  return (
    <>
      <React.StrictMode>
        <HashRouter >
          {(slider === false && payment === false) &&
            <Nav setError={setError} />
          }

          <Routes>
            <Route path="/" element={<HomePage setError={setError} setSuccess={setSuccess} />} />

            <Route path="slider/:dir/:code" element={<SliderSmall />} />
            {/* <Route path="payment" element={<Payment />} />
          <Route path="payment/:data" element={<Payment />} /> */}

            <Route path="support" element={<SupportPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="features" element={<FeaturesPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="pricing" element={<Pricing setError={setError} setSuccess={setSuccess} />} />
            <Route path="about" element={<AboutPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="download" element={<DownloadPage setError={setError} setSuccess={setSuccess} />} />
            {/* <Route path="beta" element={<Beta setError={setError} setSuccess={setSuccess} />} /> */}
            <Route path="policies" element={<Policies setError={setError} setSuccess={setSuccess} />} />
            <Route path="business" element={<BusinessVPNPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="*" element={<HomePage setError={setError} setSuccess={setSuccess} />} />

          </Routes>

          {(slider === false && payment === false) &&
            <Footer></Footer>
          }


        </HashRouter>
      </React.StrictMode>
    </>
  )

}


try {
  console.log("HIGHEST RENDER")
  root.render(<LaunchPortal />)

} catch (error) {
  console.dir(error)
  STORE.Cache.Clear()
  root.render(<div>
    The website had an unexpected error, please try reloading. If reloading does not work please try re-opening the website
    {/* <button onClick={() => ResetApp()} className={`btn`} > RESET APP </button> */}
  </div>
  )
}
