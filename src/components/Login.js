import React, { useState } from "react";
import logo from "../Linkedin-official-logo.png";
import "../css/Login.css";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");

	const register = () => {
		if (!name) {
			return alert("Please Enter the full name!");
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoUrl: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							})
						);
					});
			})
			.catch((err) => alert(err));
	};
	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch.login({
					email: userAuth.email,
					uid: userAuth.uid,
					displayName: userAuth.displayName,
					photoUrl: userAuth.photoUrl,
				});
			})
			.catch((err) => alert(err));
	};

	return (
		<div className="login">
			<img src={logo} alt="logo" />
			<div className="login__container">
				<h2>Sign in</h2>
				<p>Stay updated on your professional world</p>
				<form action="">
					<input
						type="text"
						placeholder="Full name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Profile pic URL (optional)"
						value={profilePic}
						onChange={(e) => setProfilePic(e.target.value)}
					/>
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit" onClick={loginToApp}>
						Sign In
					</button>
				</form>
				<p className="register-text">
					Not a member?
					<span className="login__register" onClick={register}>
						Register Now
					</span>
				</p>
			</div>
		</div>
	);
}

export default Login;
