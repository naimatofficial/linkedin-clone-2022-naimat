import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "../css/Post.css";
import InputOption from "./InputOption.js";
import {
	ChatOutlined,
	SendOutlined,
	ShareOutlined,
	ThumbUpAltOutlined,
} from "@mui/icons-material";

const Post = forwardRef(
	({ name, description, message, photoUrl, sharedImage }, ref) => {
		return (
			<div ref={ref} className="post">
				<div className="post__header">
					<Avatar src={photoUrl} className="photo">
						{name[0]}
					</Avatar>
					<div className="post__info">
						<h2>{name}</h2>
						<p>{description}</p>
					</div>
				</div>
				<div className="post__body">
					<p>{message}</p>
				</div>

				<div className="post__buttons">
					<InputOption Icon={ThumbUpAltOutlined} title={"Like"} color="gray" />
					<InputOption Icon={ChatOutlined} title={"Chat"} color="gray" />
					<InputOption Icon={ShareOutlined} title={"Share"} color="gray" />
					<InputOption Icon={SendOutlined} title={"Send"} color="gray" />
				</div>
			</div>
		);
	}
);
export default Post;
