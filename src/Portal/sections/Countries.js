import React from "react";
import { Link } from "react-router-dom";


var countries = [
  { code: "is", name: "Iceland" },
  { code: "us", name: "United States" },
  { code: "fi", name: "Finland" },
  { code: "de", name: "Germany" },
  { code: "gb", name: "United Kingdom" },
  { code: "hk", name: "Hong Kong" },
]
const Countries = (props) => {

  return (
    <div className={`countries grid-row-${props.row} inherit-grid bg-${props.bg}`}>
      <div className="title font-section-title">
        Available Countries
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
          Is your country missing ?<br /> you can request a server in one of our community channel
        </Link>
      </div>

    </div>
  );
}

export default Countries;