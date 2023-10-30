import React, { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import STORE from "../../store";

const Guides = (props) => {
  const [filter, setFilter] = useState("")

  const UpdateFilter = (value) => {
    setFilter(value)
  }

  let guides = []
  if (filter && filter !== "") {
    STORE.Content.Guides.map(guide => {
      let titleLower = guide.title.toLowerCase()
      if (titleLower.includes(filter.toLowerCase())) {
        guides.push(guide)
      }
    })

  } else {
    guides = STORE.Content.Guides
  }

  return (
    <div className={`guides  grid-row-${props.row} inherit-grid bg-${props.bg}`}>

      <input className="link input" placeholder="Search..." value={filter} onChange={(e) => UpdateFilter(e.target.value)} ></input>


      {guides.map((guide, index) => {
        return (
          <Link to={"/guide/" + guide.tag} target="_blank" className="link box-shadow">
            {guide.title}
          </Link>
        )
      })}

    </div>
  );
}

export default Guides;