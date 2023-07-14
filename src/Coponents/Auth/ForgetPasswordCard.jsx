import React, { useState } from "react";

import logoImg from "../../Images/seff_logo_black.jpg";
import { Link } from "react-router-dom";
const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ResetPasswordCard() {
	const [email, setEmail] = useState("");

	const [isValid, setIsValid] = useState({});

	const [submitTitl, setSubmitTitl] = useState("Send");
	const [disableLogin, setDisableLogin] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [timer, setTimer] = useState(2);
	const [showTimer, setShowTimer] = useState(false);
	const handleInput = (event) => {
		setEmail(event.target.value);
		setIsSent(false);
		checkValidate(event.target.value);
	};

	const checkValidate = (e) => {
		if (e === "" || !e?.trim().match(validRegex)) {
			setIsValid((prev) => {
				return {
					email: {
						invalid: "is-invalid",
						message: "Please enter a valid email",
					},
				};
			});
			return false;
		} else if (e !== "" || e?.trim().match(validRegex)) {
			setIsValid((prev) => {
				return {
					email: {
						invalid: "is-valid",
						message: "",
					},
				};
			});
			return true;
		}
	};

	// countdown for minutes -----------------------
	function countdown(minutes) {
		let seconds = minutes * 60;
		setDisableLogin(true);

		const interval = setInterval(function () {
			let m = Math.floor(seconds / 60);
			let s = seconds % 60;
			let timeFormat = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
			setTimer(timeFormat);
			setShowTimer(true);
			seconds--;
			if (seconds < 0) {
				clearInterval(interval);
				setDisableLogin(false);
			}
		}, 1000);
	}

	const handleSubmit = async (e, actions) => {
		e.preventDefault();

		const check = checkValidate(email);

		if (check) {
			setSubmitTitl("sending...");
			setDisableLogin(true);

			await new Promise((resolve) =>
				setTimeout(() => {
					setSubmitTitl("send");

					setIsSent(true);
					countdown(2);
				}, 1000)
			);
		} else {
			checkValidate(email);
		}
	};

	return (
		<div className="Login__card">
			<div className="p-4 shadow-lg position-relative bg-black bg-opacity-25 rounded-3">
				<div className="login_logo text-center mb-5">
					<img src={logoImg} alt="Sign In" className=" rounded-circle" width="120" />
				</div>

				<form
					id="form_login"
					method="POST"
					onSubmit={handleSubmit}
					className=" d-flex flex-column gap-3 mb-4"
				>
					<h4 className=" text-center">Forgot Password</h4>

					{isSent && isSent ? (
						<p className="text-secondary mb-0">Please! check yor email...</p>
					) : (
						<p className="text-secondary mb-0">
							Enter your email and we'll send you a link to reset your password.
						</p>
					)}

					{isValid.email?.invalid && (
						<p className=" mb-0 text-danger">{isValid?.email?.message}</p>
					)}

					<div className="login-inputs rounded">
						<i className="login_left-icon fa-solid fa-envelope fa-lg text_primary" />
						<input
							autoFocus
							className={`form-control ps-5 ${isValid?.email?.invalid}`}
							type="text"
							id="Forget-email"
							placeholder="Enter your email"
							name="email"
							value={email}
							onChange={handleInput}
						/>
					</div>

					<button
						className="btn btn-lg btn-primary text-uppercase fw-bold fs-6 py-10"
						type="submit"
						disabled={disableLogin}
					>
						{submitTitl}
					</button>

					{showTimer && (
						<p className="text-secondary mb-0">{`did not received an email you can resend after  ${timer}`}</p>
					)}

					<h6 className=" text-center fw-bold pe-3">
						<Link className=" hover_primary shadow" to="/login">
							<i className="fa-solid fa-angle-left" /> Back to Login
						</Link>
					</h6>
				</form>
			</div>
			<h6 className="mt-4 ps-3">
				Don't have an account yet?{" "}
				<Link className="shadow text_primary fw-bold" to="/singup">
					Sign up
				</Link>
			</h6>
		</div>
	);
}

export default React.memo(ResetPasswordCard);
