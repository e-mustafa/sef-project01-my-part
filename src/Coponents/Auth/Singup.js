import React, { useState } from "react";
import signuplogo from "../../Images/seff_logo_black.jpg";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const registerSchema = yup.object().shape({
	fName: yup
		.string()
		.min(3, "must be at least 3 characters")
		.max(30, "must be at least 30 characters or less")
		.required("This filed is Required"),
	lName: yup
		.string()
		.min(3, "must be at least 3 characters")
		.max(30, "must be at least 30 characters or less")
		.required("This  filed is Required"),
	email: yup.string().email("Please enter a valid email").required("Email filed is Required"),
	password: yup
		.string()
		.min(5, "Password must be at least 5 characters")
		.required("This filed is Required"),
	//  .matches(passwordRules, { message: "Please create a stronger password" })
	passwordCon: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match")
		.required("This filed is Required"),
});

function Singup() {
	const navigate = useNavigate();
	const [showPass, setShowPass] = useState(false);
	const [showPassCon, setShowPassCon] = useState(false);

	const [disableLogin, setDisableLogin] = useState(false);
	const [messages, setMessages] = useState("");

	const initialInputData = {
		fName: "",
		lName: "",
		email: "",
		password: "",
		passwordCon: "",
	};

	const submitRegister = async (values, actions) => {
		setDisableLogin(true);

		await new Promise((resolve) =>
			setTimeout(() => {
				setMessages(
					"You Signed Up successfully, Please! Check your email to active your account"
				);
				setDisableLogin(false);
				actions.resetForm();
				// redirect after 5sec to login page--------------------
				setTimeout(() => {
					navigate("/login");
				}, 5000);
			}, 1000)
		);
	};

	const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
		initialValues: initialInputData,
		validationSchema: registerSchema,
		onSubmit: submitRegister,
	});

	return (
		<div className="Sign-Up-container">
			<div className="sign-up-parent-box">
				<img className=" sign-up-image" alt="SEF Future logo" src={signuplogo} />

				<form className="sign-up-child-box row" action="POST" onSubmit={handleSubmit}>
					{messages && <p className="text-secondary fs-6 text-center">{messages}</p>}

					<div className="col-lg-6 col-12 sign-up-first-name-box mb-3 ">
						<i class="fa-regular fa-user sign-up-first-name-icon"></i>
						<input
							className={`form-control sign-up-first-name ${
								touched?.fName && (!errors.fName ? "is-valid" : "is-invalid")
							}`}
							type="text"
							placeholder="FIRST NAME"
							name="fName"
							value={values?.fName}
							onChange={handleChange}
							onBlur={handleBlur}
						/>{" "}
						<div class="ms-1 ms-lg-3 invalid-tooltip">{errors?.fName}</div>
					</div>
					<div className=" col-lg-6 col-12  sign-up-last-name-box mb-3 ">
						<i class="fa-regular fa-user sign-up-last-name-icon"></i>
						<input
							className={`sign-up-last-name form-control ${
								touched?.lName && (!errors.lName ? "is-valid" : "is-invalid")
							}`}
							type="text"
							placeholder="LAST NAME"
							name="lName"
							value={values?.lName}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<div class="ms-1 ms-lg-3 invalid-tooltip">{errors?.lName}</div>
					</div>
					<br />

					<div className="col-12  sign-up-email-box1 mb-3">
						<i class="fa-regular fa-envelope  sign-up-email-icon"></i>
						<input
							className={`sign-up-email form-control ${
								touched?.email && (!errors.email ? "is-valid" : "is-invalid")
							}`}
							// type="email"
							type="text"
							placeholder="EMAIL ADDRESS"
							name="email"
							value={values?.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<div class="ms-1 ms-lg-3 invalid-tooltip">{errors?.email}</div>
					</div>
					<br />
					<div className="col-lg-6 col-12 sign-up-password-box mb-3 signup-inputs">
						<i class="fa-solid fa-lock sign-up-password-icon "></i>
						<input
							className={`sign-up-password form-control pass-padding ${
								touched?.password && (!errors.password ? "is-valid" : "is-invalid")
							}`}
							placeholder="PASSWORD"
							type={showPass ? "text" : "password"}
							name="password"
							value={values?.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<div class="ms-1 ms-lg-3 invalid-tooltip">{errors?.password}</div>
						{/* <i class="fa-regular fa-eye sign-up-password-icon2"></i> */}

						{/* show/hide password icons ----------------------------------- */}
						<div
							className="login_right-icon text-white-50 clickable me-4"
							onClick={() => setShowPass((prev) => !prev)}
						>
							{showPass ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
						</div>
					</div>
					<div className="col-lg-6 col-12 sign-up-password-confirmation-box mb-3 signup-inputs">
						<i class="fa-solid fa-lock sign-up-password-confirmation-icon"></i>
						<input
							className={`sign-up-password-confirmation form-control pass-padding ${
								touched?.passwordCon && (!errors.passwordCon ? "is-valid" : "is-invalid")
							}`}
							placeholder="PASSWORD CONFIRMATION "
							name="passwordCon"
							type={showPassCon ? "text" : "password"}
							value={values?.passwordCon || ""}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{/* show/hide password icons ----------------------------------- */}
						<div
							className="login_right-icon text-white-50 clickable me-4"
							onClick={() => setShowPassCon((prev) => !prev)}
						>
							{showPassCon ? <FaRegEyeSlash size={22} /> : <FaRegEye size={22} />}
						</div>{" "}
						<div class="ms-1 ms-lg-3 invalid-tooltip">{errors?.passwordCon}</div>
					</div>
					<br />

					<button type="submit" className=" sign-up-button btn" disabled={disableLogin}>
						{disableLogin ? (
							<>
								<div class="spinner-border spinner-border-sm" role="status"></div>
								&#160;
								<span>Sending...</span>
							</>
						) : (
							"SIGN UP"
						)}
					</button>
				</form>
				<p className=" sign-up-already">
					{" "}
					Already have an account?{" "}
					<Link to={`/auth/login`} className="sign-up-login">
						login
					</Link>
				</p>
			</div>
		</div>
	);
}
export default React.memo(Singup);
