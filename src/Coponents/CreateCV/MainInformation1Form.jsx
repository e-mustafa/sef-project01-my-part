import React from "react";
import egyptFlagImg from "../../Images/Flag_of_Egypt.png";
// import CountryCodeInput from "./CountryCodeInput";
// import PhoneInput from "react-phone-input-2";
//import 'react-phone-input-2/lib/style.css';
import DragDropImg from "./DragDropImg";
// import PhoneInput from "./PhoneInput";
// import PhoneInput2 from "./phoneInput2";

function MainInformation1Form({ formData, handelChange, handelChangeMobile }) {
	console.log(formData);
	return (
		<form className="cv-form row g-3">
			<div className="col-12 col-md-6">
				<label htmlFor="inputFirstName" className="form-label">
					First Name
				</label>
				<input
					type="text"
					className="form-control"
					id="inputFirstName"
					name="firstName"
					value={formData?.firstName ?? ""}
					onChange={handelChange}
					autoFocus
				/>
			</div>
			<div className="col-12 col-md-6">
				<label htmlFor="inputLastName" className="form-label">
					Last Name
				</label>
				<input
					type="text"
					className="form-control"
					id="inputLastName"
					name="LastName"
					value={formData?.LastName ?? ""}
					onChange={handelChange}
				/>
			</div>
			<div className="col-12 col-md-6">
				<label htmlFor="inputProfession" className="form-label">
					Profession
				</label>
				<input
					type="text"
					className="form-control"
					id="inputProfession"
					name="profession"
					value={formData?.profession ?? ""}
					onChange={handelChange}
				/>
			</div>
			<div className="col-12 col-md-6">
				<label htmlFor="inputCountry" className="form-label">
					Country
				</label>
				<input
					type="text"
					className="form-control"
					id="inputCountry"
					name="country"
					value={formData?.country ?? ""}
					onChange={handelChange}
				/>
			</div>
			<div className="col-12 col-md-4">
				<label htmlFor="inputCity" className="form-label">
					City
				</label>
				<input
					type="text"
					className="form-control"
					id="inputCity"
					name="city"
					value={formData?.city ?? ""}
					onChange={handelChange}
				/>
			</div>
			<div className="col-12 col-md-8">
				<label htmlFor="inputMobileNumber" className="form-label">
					Mobile Number
				</label>
				<div className="mobile-data d-flex g-2 align-items-center">
					<span>
						<img src={egyptFlagImg} alt="Egypt Country Flag" className="rounded" width={30} />
					</span>
					<span className="px-3 fw-bold">+20</span>
					<input
						type="tel"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						className="form-control "
						id="inputMobileNumber"
						name="mobileNumber"
						value={formData?.mobileNumber ?? ""}
						onChange={handelChange}
					/>
				</div>
			</div>

			{/* ------------------ email ---------------------- */}
			<div className="col-12">
				<label htmlFor="inputCVEmail" className="form-label">
					Email
				</label>
				<input
					type="email"
					className="form-control"
					id="inputCVEmail"
					name="email"
					value={formData?.email ?? ""}
					onChange={handelChange}
				/>
			</div>

			{/* <div className="col-8">
				<PhoneInput
					country={"eg"}
					name="mobileNumber"
					inputProps={{ name: "mobileNumber" }}
					value={formData?.mobileNumber}
					onChange={handelChangeMobile}
					countryCodeEditable
					// autoFormat={false}
				/>
			</div> */}
			<div className="col-12">
				<DragDropImg />
			</div>
		</form>
	);
}

export default MainInformation1Form;
