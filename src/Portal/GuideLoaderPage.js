import React from "react";
import Download from "./sections/Download";
import SupportSocial from "./sections/SupportSocial.js";
import BannerNew from "./BannerNew";
import { Link, useParams } from "react-router-dom";
import STORE from "../store";


const GuideLoaderPage = () => {
    window.scrollTo(0, 0);

    let { tag } = useParams()
    let g = undefined
    STORE.Content.Guides.map(guide => {
        if (guide.tag === tag) {
            g = guide
        }
    })

    return (
        <>
            <div className="banner-replacement"></div>

            {!g &&
                <div className={`guide-loader grid-row-1 inherit-grid bg-1`}>
                    Guide not found!
                </div>
            }

            {g &&
                <div className={`guide-loader grid-row-1 inherit-grid bg-1`}>
                    <div className="guide-title column-alignment">
                        {g.title}
                    </div>
                    {g.content.map(item => {
                        let splitItem = item.split(":::")
                        if (splitItem[0] === "image") {
                            return (<img className="image column-alignment" src={splitItem[1]}></img>)
                        } else if (splitItem[0] === "text") {
                            return (
                                <div className="text column-alignment">{splitItem[1]}</div>
                            )
                        } else if (splitItem[0] === "title") {
                            return (
                                <div className="title column-alignment ">{splitItem[1]}</div>
                            )
                        } else if (splitItem[0] === "html") {
                            return (
                                <div className="text column-alignment" dangerouslySetInnerHTML={{ __html: splitItem[1] }}>
                                    {/* <div className="html-content column-alignment" ></div> */}
                                </div>
                            )
                        }
                    })}
                </div>
            }

            <Download row={"2"} bg={"1"}></Download>
            <SupportSocial row={"3"} bg={"1"}></SupportSocial>
        </>
    )
}

export default GuideLoaderPage;