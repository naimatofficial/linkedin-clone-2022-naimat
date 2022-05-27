import { Avatar } from "@mui/material";
import React from "react";
import "../css/Sidebar.css";
// import UserAvatar from "../naimat.jpg";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

const recentItem = (topic) => {
	return (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
};

function Sidebar() {
	const user = useSelector(selectUser);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images.unsplash.com/photo-1653376813085-9ce473ec934e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870"
					alt="background__img"
					className="sidebar__img"
				/>
				<Avatar className="sidebar__avatar" src={user.photoUrl}>
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<span>{user.email}</span>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you </p>
					<p className="sidebar__stat-number">25,582</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post </p>
					<p className="sidebar__stat-number">25,272</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recents</p>
				{recentItem("reactjs")}
				{recentItem("angular")}
				{recentItem("webdevelopment")}
				{recentItem("fullstack")}
				{recentItem("merndeveloper")}
			</div>
		</div>
	);
}

export default Sidebar;
