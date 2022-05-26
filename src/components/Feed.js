import React, { useState, useEffect } from "react";
import "../css/Feed.css";
import Post from "./Post.js";
import UserAvatar from "../naimat.jpg";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { CalendarViewDay } from "@mui/icons-material";
import { db } from "./FirebaseConnection";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function Feed() {
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				);
			});
	}, []);

	const sendPost = (event) => {
		event.preventDefault();

		db.collection("posts").add({
			name: "Naimat Ullah",
			description: "26 May 2022",
			message: input,
			photoUrl: UserAvatar,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput("");
	};
	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form action="">
						<input
							type="text"
							value={input}
							onChange={(e) => {
								setInput(e.target.value);
							}}
						/>
						<button type="submit" onClick={sendPost}>
							Send
						</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption title={"Photo"} Icon={ImageIcon} color={"#7085f9"} />
					<InputOption
						title={"Video"}
						Icon={SubscriptionsIcon}
						color={"#e7a33e"}
					/>
					<InputOption title={"Event"} Icon={EventNoteIcon} color={"#c0cbcd"} />
					<InputOption
						title={"Write article"}
						Icon={CalendarViewDay}
						color={"#7fc153"}
					/>
				</div>
			</div>

			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}

			{/* <Post
				name={"Naimat Ullah"}
				description={"this is test disctiption"}
				photoUrl={
					"https://images.unsplash.com/photo-1549237511-bbe6a0979d6a?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887"
				}
				message={
					"test message: how are you :) lakjfkl sdklfjlksdjfklsdjlkfjsdjf kldsj kfljsdklfjklsdjfklds jfkl jsd kdsjfkldsj lkfjsdkljf lksdjfkldsj fkljsdklf jdsfkl jsdkl j"
				}
			/> */}
		</div>
	);
}

export default Feed;
