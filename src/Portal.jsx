import { HashRouter, Route, Routes } from "react-router-dom";
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

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const root = createRoot(document.getElementById('root'));

const LaunchPortal = () => {

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
						<Nav />
					}

					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="slider/:dir/:code" element={<SliderSmall />} />
						<Route path="register" element={<RegisterPage />} />
						<Route path="code/:paramCode" element={<RegisterPage />} />
						<Route path="payment" element={<PaymentPage />} />
						<Route path="support" element={<SupportPage />} />
						<Route path="cash" element={<CashPage />} />
						<Route path="features" element={<FeaturesPage />} />
						<Route path="pricing" element={<Pricing />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="download" element={<DownloadPage />} />
						<Route path="guide/:tag" element={<GuideLoaderPage />} />
						<Route path="guides" element={<GuidePage />} />
						<Route path="policies" element={<Policies />} />
						<Route path="countries" element={<CountriesPage />} />
						<Route path="pricing" element={<PricingPage />} />
						<Route path="business" element={<BusinessVPNPage />} />
						<Route path="*" element={<HomePage />} />
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
