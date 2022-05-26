import React from "react";
import "../css/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AppLogo from "../linkedin.png";
import NaimatAvatar from "../naimat.jpg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<img src={AppLogo} alt="logo" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" placeholder="Search" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption title="Home" Icon={HomeIcon} />
				<HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
				<HeaderOption title="Jobs" Icon={WorkIcon} />
				<HeaderOption title="Messaging" Icon={ChatIcon} />
				<HeaderOption title="Notifications" Icon={NotificationsIcon} />
				<HeaderOption avatar={NaimatAvatar} title={"Me"} />
			</div>
		</div>
	);
}

export default Header;
