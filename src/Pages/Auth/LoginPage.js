import React from "react";

import "../../styles/ma-global-style.css";
import "./login-page-style.css";
import LoginModal from "../../Coponents/Auth/LoginModal";
import LoginCard from "../../Coponents/Auth/LoginCard";

export default function LoginPage() {
	return (
		<>
			<div className="overlay-body"></div>
			<div className="container login-container d-flex flex-column justify-content-center align-items-center mx-auto min-vh-100">
				<LoginCard />
				<LoginModal />
				
			</div>
		</>
	);
}
