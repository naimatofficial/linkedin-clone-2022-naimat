import React from "react";
import Recommendation from "./Recommendation";
import "../css/Widegts.css";
import linkedinLogo from "../Linkedin-official-logo.png";
function Widgets() {
	return (
		<div className="widgets">
			<div className="widegts__feed">
				<div className="widegts__top">
					<p>Add to your feed</p>
					<img
						src="https://img.icons8.com/metro/26/000000/info.png"
						alt="icon"
					/>
				</div>
				<Recommendation
					photoUrl={
						"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/State_emblem_of_Pakistan.svg/1200px-State_emblem_of_Pakistan.svg.png"
					}
					name={"Pakistan Jobs"}
					description={"Company - Human Resources"}
				/>
				<Recommendation
					photoUrl={
						"https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					}
					name={"Hamad Khan"}
					description={"Company - IT Skills"}
				/>
				<Recommendation
					photoUrl={
						"https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
					}
					name={"Ali Khan"}
					description={"HR Officier"}
				/>
				<Recommendation
					photoUrl={
						"https://media.wired.com/photos/5dbc7936c955950008b26760/125:94/w_2375,h_1786,c_limit/Ideas_VSCO-Girls-1182943443.jpg"
					}
					name={"Maryum"}
					description={"Talent Acquistion Specialist"}
				/>
				<a href="/">View all recommendations &rarr;</a>
			</div>
			<div className="widgets__bottom">
				<div className="topJobs">
					<img
						src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
						alt="jobs hiring "
					/>
				</div>
				<div className="app__footer">
					<ul>
						<li>
							<a href="/">About</a>
						</li>
						<li>
							<a href="/">Accessiblility</a>
						</li>
						<li>
							<a href="/">Help Center</a>
						</li>
						<li>
							<a href="/">Privacy & Terms</a>
						</li>
						<li>
							<a href="/">Ad Choices</a>
						</li>
						<li>
							<a href="/">Advertising</a>
						</li>
						<li>
							<a href="/">Business Services</a>
						</li>
						<li>
							<a href="/">Get the Linkedin app</a>
						</li>
						<li>
							<a href="/">More</a>
						</li>
					</ul>
					<div className="copyright">
						<img src={linkedinLogo} alt="" />
						<p>
							Linkedin Clone &copy; 2022 <span>Created By Naimat Ullah</span>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Widgets;
