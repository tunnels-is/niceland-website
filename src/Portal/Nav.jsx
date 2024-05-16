import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Nav = (props) => {
	const [fixed, setFixed] = useState(false)
	const [menu, setMenu] = useState(false)
	const location = useLocation();

	document.addEventListener("scroll", (event) => {
		if (window.scrollY > 50 && fixed === false) {
			setFixed(true)
		} else if (window.scrollY < 51 && fixed == true) {
			setFixed(false)
		}
	});



	let { pathname } = location
	let p = pathname.split("/")
	let path = ""
	try {
		path = p[1]
	} catch (error) {
	}

	return (
		<>
			<div className="hamburger" onClick={() => setMenu(!menu)}>
				<img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/temp-mobile.png"></img>
			</div>

			<div className={`fixed-bg bg-transition ${fixed ? "show-bg" : ""}`}></div>

			<div className={`mobile-menu ${menu ? "mobile-menu-width" : ""}`}>

				<div className="mobile-items">
					<Link className={`mobile-item font-mobile-menu-item ${path === "signup" ? "active" : ""}`} to={"/signup"} onClick={() => setMenu(!menu)}>Sign Up</Link>
					<Link className={`mobile-item font-mobile-menu-item ${path === "" ? "active" : ""}`} to={"/"} onClick={() => setMenu(!menu)}>Home</Link>
					<Link className={`mobile-item font-mobile-menu-item ${path === "features" ? "active" : ""}`} to={"/features"} onClick={() => setMenu(!menu)}>Features</Link>
					<Link className={`mobile-item font-mobile-menu-item ${path === "download" ? "active" : ""}`} to={"/download"} onClick={() => setMenu(!menu)}>Download</Link>
					<Link className={`mobile-item font-mobile-menu-item ${path === "guides" ? "active" : ""}`} to={"/guides"} onClick={() => setMenu(!menu)}>Guides</Link>
					<Link className={`mobile-item font-mobile-menu-item ${path === "blogs" ? "active" : ""}`} to={"/blogs"} onClick={() => setMenu(!menu)}>Blog</Link>
					{/* <Link className={`mobile-item font-mobile-menu-item ${path === "signup" ? "active" : ""}`} to={"/signup"} onClick={() => setMenu(!menu)}>Pricing</Link> */}
					<Link className={`mobile-item font-mobile-menu-item ${path === "business" ? "active" : ""}`} to={"/business"} onClick={() => setMenu(!menu)}>Business</Link>
				</div>
			</div>

			<div className={`big-menu ${fixed ? "fixed-menu" : ""}`}>
				<Link className={`item font-menu-item logo-link pos-transition`} to={"/"}>
					<img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/logo-white-orange-bg.svg"></img>
				</Link>
				<div className="items margin-transition">
					<Link className={`item font-menu-item ${path === "signup" ? "active" : ""}`} to={"/signup"}>Sign Up</Link>
					<Link className={`item font-menu-item ${path === "features" ? "active" : ""}`} to={"/features"}>Features</Link>
					<Link className={`item font-menu-item ${path === "download" ? "active" : ""}`} to={"/download"}>Download</Link>
					<Link className={`item font-menu-item ${path === "guides" ? "active" : ""}`} to={"/guides"}>Guides</Link>
					<Link className={`item font-menu-item ${path === "blogs" ? "active" : ""}`} to={"/blogs"}>Blogs</Link>
					{/* <Link className={`item font-menu-item ${path === "signup" ? "active" : ""}`} to={"/signup"}>Pricing</Link> */}
					<Link className={`item font-menu-item ${path === "business" ? "active" : ""}`} to={"/business"}>Business</Link>
				</div>
			</div>
		</>
	)
}

export default Nav;
