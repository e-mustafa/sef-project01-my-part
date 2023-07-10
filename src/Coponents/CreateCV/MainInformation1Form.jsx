import React from "react";
import egyptFlagImg from "../../Images/Flag_of_Egypt.png";
// import CountryCodeInput from "./CountryCodeInput";
// import PhoneInput from "react-phone-input-2";
//import 'react-phone-input-2/lib/style.css';
import DragDropImg from "./DragDropImg";
import { useOutletContext } from "react-router-dom";
// import PhoneInput from "./PhoneInput";
// import PhoneInput2 from "./phoneInput2";

function MainInformation1Form() {
	const [formData, handelChange, handelChangeMobile] = useOutletContext();
	const main_info = formData?.main_information;
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
					value={main_info?.firstName ?? ""}
					onChange={(e) => handelChange(e, "main_information")}
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
					value={main_info?.LastName ?? ""}
					// onChange={handelChange}
					onChange={(e) => handelChange(e, "main_information")}
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
					value={main_info?.profession ?? ""}
					// onChange={handelChange}
					onChange={(e) => handelChange(e, "main_information")}
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
					value={main_info?.country ?? ""}
					// onChange={handelChange}
					onChange={(e) => handelChange(e, "main_information")}
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
					value={main_info?.city ?? ""}
					// onChange={handelChange}
					onChange={(e) => handelChange(e, "main_information")}
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
						value={main_info?.mobileNumber ?? ""}
						// onChange={handelChange}
						onChange={(e) => handelChange(e, "main_information")}
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
					value={main_info?.email ?? ""}
					// onChange={handelChange}
					onChange={(e) => handelChange(e, "main_information")}
				/>
			</div>

			{/* <div className="col-8">
				<PhoneInput
					country={"eg"}
					name="mobileNumber"
					inputProps={{ name: "mobileNumber" }}
					value={main_info?.mobileNumber}
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
