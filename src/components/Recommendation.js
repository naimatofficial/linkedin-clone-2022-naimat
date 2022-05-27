import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";
import React from "react";
import "../css/Widegts.css";

function Recommendation({ photoUrl, name, description }) {
	return (
		<div className="recommednation">
			<Avatar src={photoUrl} />
			<div>
				<h4>{name}</h4>
				<p>{description}</p>
				<button>
					<AddIcon />
					<span>Follow</span>
				</button>
			</div>
		</div>
	);
}

export default Recommendation;
