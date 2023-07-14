import React from "react";

import "../../styles/ma-global-style.css";
import "./login-page-style.css";
import ForgetPasswordCard from "../../Coponents/Auth/ForgetPasswordCard";

export default function ForgetPasswordPage() {
	return (
		<>
			<div className="overlay-body"></div>
			<div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
				<ForgetPasswordCard />
			</div>
		</>
	);
}
