import { HashRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
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
import Policies from "./Portal/Policies";
import SliderSmall from "./Portal/sliders/Small";
import BusinessVPNPage from "./Portal/BusinessVPNPage";
import CountriesPage from "./Portal/CountriesPage";
import PricingPage from "./Portal/Pricing";
import CashPage from "./Portal/Cash";
import GuidePage from "./Portal/GuidePage";
import GuideLoaderPage from "./Portal/GuideLoaderPage";
import PaymentPage from "./Portal/PaymentPage";
import RegisterPage from "./Portal/RegisterPage";

const root = createRoot(document.getElementById('root'));

const LaunchPortal = () => {
  console.log("LAUNCHING PORTAL")

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  console.dir(window.location)
  let locationHash = window.location.hash
  let slider = false
  if (locationHash.includes("slider")) {
    slider = true
  }

  return (
    <>
      <React.StrictMode>
        <HashRouter >
          {!slider &&
            <Nav setError={setError} />
          }

          <Routes>
            <Route path="/" element={<HomePage setError={setError} setSuccess={setSuccess} />} />

            <Route path="slider/:dir/:code" element={<SliderSmall />} />

            <Route path="register" element={<RegisterPage setError={setError} setSuccess={setSuccess} />} />

            <Route path="code/:paramCode" element={<RegisterPage setError={setError} setSuccess={setSuccess} />} />

            <Route path="payment" element={<PaymentPage setError={setError} setSuccess={setSuccess} />} />

            <Route path="support" element={<SupportPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="cash" element={<CashPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="features" element={<FeaturesPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="pricing" element={<Pricing setError={setError} setSuccess={setSuccess} />} />
            <Route path="about" element={<AboutPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="download" element={<DownloadPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="guide/:tag" element={<GuideLoaderPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="guides" element={<GuidePage setError={setError} setSuccess={setSuccess} />} />
            <Route path="policies" element={<Policies setError={setError} setSuccess={setSuccess} />} />
            <Route path="countries" element={<CountriesPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="pricing" element={<PricingPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="business" element={<BusinessVPNPage setError={setError} setSuccess={setSuccess} />} />
            <Route path="*" element={<HomePage setError={setError} setSuccess={setSuccess} />} />

          </Routes>

          {!slider &&
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
