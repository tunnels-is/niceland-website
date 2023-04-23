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
                    <Link className={`mobile-item font-mobile-menu-item ${path === "" ? "active" : ""}`} to={"/"} onClick={() => setMenu(!menu)}>Home</Link>
                    <Link className={`mobile-item font-mobile-menu-item ${path === "download" ? "active" : ""}`} to={"/download"} onClick={() => setMenu(!menu)}>Download</Link>
                    {/* <Link className={`mobile-item font-mobile-menu-item ${path === "pricing" ? "active" : ""}`} to={"/pricing"} onClick={() => setMenu(!menu)}>Pricing</Link> */}
                    <Link className={`mobile-item font-mobile-menu-item ${path === "features" ? "active" : ""}`} to={"/features"} onClick={() => setMenu(!menu)}>Features</Link>
                    <Link className={`mobile-item font-mobile-menu-item ${path === "support" ? "active" : ""}`} to={"/support"} onClick={() => setMenu(!menu)}>Support</Link>
                    <Link className={`mobile-item font-mobile-menu-item ${path === "about" ? "active" : ""}`} to={"/about"} onClick={() => setMenu(!menu)}>About</Link>
                    <Link className={`mobile-item font-mobile-menu-item ${path === "beta" ? "active" : ""}`} to={"/beta"} onClick={() => setMenu(!menu)}>Beta</Link>
                </div>
            </div>

            <div className={`big-menu ${fixed ? "fixed-menu" : ""}`}>
                <Link className={`item font-menu-item logo-link pos-transition`} to={"/"}>
                    {/* Home */}
                    <img className="icon" src="https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/logo-white-orange-bg.svg"></img>
                </Link>
                <div className="items margin-transition">
                    <Link className={`item font-menu-item ${path === "download" ? "active" : ""}`} to={"/download"}>Download</Link>
                    {/* <Link className={`item font-menu-item ${path === "pricing" ? "active" : ""}`} to={"/pricing"}>Pricing</Link> */}
                    <Link className={`item font-menu-item ${path === "features" ? "active" : ""}`} to={"/features"}>Features</Link>
                    <Link className={`item font-menu-item ${path === "support" ? "active" : ""}`} to={"/support"}>Support</Link>
                    <Link className={`item font-menu-item ${path === "about" ? "active" : ""}`} to={"/about"}>About</Link>
                    <Link className={`item font-menu-item ${path === "beta" ? "active" : ""}`} to={"/beta"}>Beta</Link>
                </div>
            </div>
        </>
    )
}

export default Nav;