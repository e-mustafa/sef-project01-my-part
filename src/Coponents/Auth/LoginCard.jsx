import React, { useRef, useState } from "react";

import logoImg from "../../Images/seff_logo_black.jpg";
import { Link, useNavigate } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function LoginCard() {
	const navigate = useNavigate();
	const useridRef = useRef(null);
	const passwordRef = useRef(null);
	const [showPassword, setShowPassword] = useState(false);
	const [formInput, setFormInput] = useState({
		userid: "",
		password: "",
	});

	const [isValid, setIsValid] = useState({});
	const [submitTitl, setSubmitTitl] = useState("Login");
	const [disableLogin, setDisableLogin] = useState(false);
	const [messages, setMessages] = useState("");

	const handleInput = (event) => {
		setFormInput((prevFormInput) => ({
			...prevFormInput,
			userid: event.target?.value,
		}));

		checkUserIdValidate(event.target?.value);
	};

	const handleInputPass = (event) => {
		setFormInput((prevFormInput) => ({
			...prevFormInput,
			password: event.target?.value,
		}));

		checkPassValidate(event.target?.value);
	};

	const handelShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const checkUserIdValidate = (word) => {
		if (word === "") {
			setIsValid((prev) => {
				return {
					...prev,
					userid: {
						invalid: "is-invalid",
						message: "User ID cannot be empty",
					},
				};
			});
			return false;
		} else if (word !== "" && word?.length >= 3) {
			setIsValid((prev) => {
				return {
					...prev,
					userid: {
						invalid: "is-valid",
						message: "",
					},
				};
			});
			return true;
		} else {
			setIsValid((prev) => {
				return {
					...prev,
					userid: {
						invalid: "is-invalid",
						message: "User ID should be at least 3 characters long",
					},
				};
			});
			return false;
		}
	};

	const checkPassValidate = (word) => {
		if (word !== "" && word?.length >= 3) {
			setIsValid((prev) => {
				return {
					...prev,
					password: {
						invalid: "is-valid",
						message: "",
					},
				};
			});
			return true;
		} else if (word === "" || word?.length < 3) {
			setIsValid((prev) => {
				return {
					...prev,
					password: {
						invalid: "is-invalid",
						message: "Password should be at least 3 characters long",
					},
				};
			});
			return false;
		} else {
			setIsValid((prev) => {
				return {
					...prev,
					password: {
						invalid: "is-invalid",
						message: "Password Cannot be empty",
					},
				};
			});
			return false;
		}
	};

	const handleSubmit = async (e, actions) => {
		e.preventDefault();

		const checkUserid = checkUserIdValidate(formInput?.userid);
		const checkPass = checkPassValidate(formInput?.password);

		if (checkUserid && checkPass) {
			setSubmitTitl("sending...");
			setDisableLogin(true);

			// try {
			// 	const response = await axios.post("http://...", formInput);
			// 	setMessages("You login successfully, You will redirect now...");
			// 	navigate(-1);
			// 	console.log( response.data);
			// } catch (error) {
			// 	console.error("Something went wrong!, Please try agin later", error);
			// 	setMessages("Something went wrong!, Please try agin later");
			// }

			await new Promise((resolve) =>
				setTimeout(() => {
					setSubmitTitl("send");
					setDisableLogin(false);
					setMessages("You login successfully, You will redirect now...");
					navigate(-1);
				}, 1000)
			);
		} else {
			checkUserIdValidate(formInput?.userid);
			checkPassValidate(formInput?.password);
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
					className=" d-flex flex-column gap-3 mb-5"
				>
					{messages && <p className="text-secondary mb-0">{messages}</p>}
					<div className="d-flex flex-column text-danger"> </div>

					<div className="login-inputs rounded">
						<i className="login_left-icon fa-regular fa-user fa-lg text_primary" />
						<input
							className={`form-control ps-5 ${isValid?.userid?.invalid}`}
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

					<div className="login-inputs rounded">
						<i className="login_left-icon fa fa-lock fa-lg text_primary" />

						<input
							id="S_password"
							autoComplete=""
							className={`form-control px-5 ${isValid?.password?.invalid}`}
							placeholder="PASSWORD"
							name="password"
							type={showPassword ? "text" : "password"}
							value={formInput?.password}
							onChange={handleInputPass}
							ref={passwordRef}
						/>
						<div
							className="login_right-icon text-white-50 clickable me-4"
							onClick={handelShowPassword}
						>
							{showPassword ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
						</div>
					</div>

					<h6 className=" fw-bold text-end pe-3">
						<Link className="text-secondary shadow" to="/auth/forget-password">
							Forget your password ?
						</Link>
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
				<Link className="shadow text_primary fw-bold" to="/auth/signup">
					Sign up
				</Link>
			</h6>
		</div>
	);
}

export default React.memo(LoginCard);
