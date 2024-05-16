import React, { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import STORE from "../../store";

const Blogs = (props) => {
	const [filter, setFilter] = useState("")

	const UpdateFilter = (value) => {
		setFilter(value)
	}

	let blogs = []
	if (filter && filter !== "") {
		STORE.Content.Blogs.map(blog => {
			let titleLower = blog.title.toLowerCase()
			if (titleLower.includes(filter.toLowerCase())) {
				blogs.push(blog)
			}
		})

	} else {
		blogs = STORE.Content.Blogs
	}

	return (
		<div className={`guides grid-row-${props.row} inherit-grid bg-${props.bg}`}>

			<input className="link input" placeholder="Search..." value={filter} onChange={(e) => UpdateFilter(e.target.value)} ></input>


			{blogs.map((blog, index) => {
				return (
					<Link to={"/blogs/" + blog.tag} className="link box-shadow">
						{blog.title}
					</Link>
				)
			})}

		</div>
	);
}

export default Blogs;
