import React from "react";
import { Link } from "react-router-dom";


var countries = [
	{ code: "is", name: "Iceland" },
	{ code: "us", name: "United States" },
	{ code: "gb", name: "United Kingdom" },
]
const Countries = (props) => {

	return (
		<div className={`countries grid-row-${props.row} inherit-grid bg-${props.bg}`}>
			<div className="title font-section-title">
				VPN Servers In Key Locations
			</div>


			<div className="country-list">
				{countries.map(country => {
					return (
						<div className="country">
							<img
								className="flag"
								src={"https://raw.githubusercontent.com/tunnels-is/media/master/nl-website/v2/flags/" + country.code + ".svg"}
							/>
							<div className="name font-section-description">{country.name}</div>
						</div>
					)
				})}
			</div>

			<div className="subtitle font-section-subtitle">
				<Link to={"/support"}>
					New locations can be requested in our support channels
				</Link>
			</div>

		</div>
	);
}

export default Countries;
