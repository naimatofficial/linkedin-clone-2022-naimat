import React from "react";
import "../css/InputOption.css";
function InputOption({ Icon, title, color }) {
	return (
		<div class="inputOption">
			<Icon style={{ color: color }} />
			<h4>{title}</h4>
		</div>
	);
}

export default InputOption;
