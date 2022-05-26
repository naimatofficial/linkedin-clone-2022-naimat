import React from "react";
import "../css/HeaderOption.css";
import { Avatar } from "@mui/material";

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className="headerOption">
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && (
				<Avatar className="headerOption__icon" src={avatar} alt="profile-img" />
			)}
			<span className="headerOption__title">{title}</span>
		</div>
	);
}

export default HeaderOption;
