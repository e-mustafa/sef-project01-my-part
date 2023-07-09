import React, { useRef, useState } from "react";

import logoImg from "../../Images/seff_logo_black.jpg";
import { Link } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function Login() {
	const useridRef = useRef(null);
	const passwordRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false);
	const [formInput, setFormInput] = useState({
		userid: "",
		password: "",
	});

	const [submitTitl, setSubmitTitl] = useState("Login");
	const [disableLogin, setDisableLogin] = useState(false);

	const [errorMessages, setErrorMessages] = useState({ change: false });

	// function isNotEmptty() {
	// 	setErrorMessages({ ...errorMessages, change: true });
	// 	if (formInput?.userid !== "" && formInput?.password !== "") {
	// 		return true;
	// 	}

	// 	if (formInput?.password === "") {
	// 		setErrorMessages({
	// 			...errorMessages,
	// 			password: { class: "is-invalid", message: "Please! enter your password" },
	// 		});
	// 		// passwordRef.current.focus();
	// 	} else {
	// 		setErrorMessages({ ...errorMessages, password: { class: "is-valid", message: "" } });
	// 	}

	// 	if (formInput?.userid === "") {
	// 		setErrorMessages({
	// 			...errorMessages,
	// 			userid: { class: "is-invalid", message: "Please! enter your user ID" },
	// 		});
	// 		// useridRef.current.focus();
	// 	} else {
	// 		setErrorMessages({ ...errorMessages, userid: { class: "", message: "" } });
	// 	}
	// }

	function UserNotEmpty() {
		setErrorMessages({ ...errorMessages, change: true });
		if (formInput?.userid === "") {
			setErrorMessages({
				...errorMessages,
				userid: { class: "is-invalid", message: "Please! enter your user ID" },
			});

			return false;
		} else {
			setErrorMessages({ ...errorMessages, userid: { class: "", message: "" } });
			// useridRef.current.focus();
			return true;
		}
	}

	function passNotEmpty() {
		setErrorMessages({ ...errorMessages, change: true });
		if (formInput?.password === "") {
			setErrorMessages({
				...errorMessages,
				password: { class: "is-invalid", message: "Please! enter your password" },
			});
			// passwordRef.current.focus();
			return false;
		} else {
			setErrorMessages({ ...errorMessages, password: { valid: "is-valid", message: "" } });
			return true;
		}
	}
	const handleInput = (event) => {
		const { name, value } = event.target;
		setFormInput((prevFormInput) => ({
			...prevFormInput,
			[name]: value,
		}));
		console.log(event.target.type);
		console.log(name, value);
		UserNotEmpty();
		passNotEmpty();
	};

	const handelShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		UserNotEmpty();
		// passNotEmpty();
		setErrorMessages((prev) => ({ ...prev, changed: true }));
		if (UserNotEmpty() && passNotEmpty()) {
			setSubmitTitl("sending...");
			setDisableLogin(true);
			console.log(formInput);
		}
	};

	console.log(errorMessages);

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
					className=" d-flex flex-column gap-3 mb-5"
				>
					<div className="d-flex flex-column text-danger">
						{errorMessages?.userid && <small>{errorMessages?.userid?.message}</small>}
						{errorMessages?.password && <small>{errorMessages?.password?.message}</small>}
					</div>

					<div
						// className={`login-inputs form-control d-flex gap-2 align-items-center rounded px-3 py-1 ${errorMessages?.userid?.class}`}
						className={`login-inputs form-control d-flex gap-2 align-items-center rounded px-3 py-1 ${
							errorMessages?.userid?.class
							// errorMessages?.change &&
							// (errorMessages?.userid?.valid ? "" : "is-invalid")
						}`}
					>
						<i className="fa-regular fa-user fa-lg text_primary" />
						<input
							className={`form-control pe-3`}
							autoFocus
							type="text"
							id="S_username"
							placeholder="USER ID"
							name="userid"
							value={formInput?.userid}
							onChange={handleInput}
							ref={useridRef}
						/>
					</div>

					<div className="login-inputs d-flex gap-2 align-items-center rounded px-3 py-1">
						<i className="fa fa-lock fa-lg text_primary" />

						<input
							id="S_password"
							autoComplete=""
							className="form-control"
							placeholder="PASSWORD"
							name="password"
							type={showPassword ? "text" : "password"}
							value={formInput?.password}
							onChange={handleInput}
							ref={passwordRef}
						/>
						<div className="text-white-50 clickable" onClick={handelShowPassword}>
							{showPassword ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
						</div>
					</div>

					<h6 className=" fw-bold text-end pe-3">
						<a className="text-secondary shadow" href="#">
							Forget your password ?
						</a>
					</h6>

					<button
						className="btn btn-lg btn-primary text-uppercase fw-bold fs-6 py-10"
						type="submit"
						disabled={disableLogin}
					>
						{submitTitl}
					</button>
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

export default Login;