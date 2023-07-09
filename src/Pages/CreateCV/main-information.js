import React, { useState } from "react";
import "./create-cv-style.css";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../../Coponents/Global/HeaderTitle";import CreateCVStipper from "../../Coponents/CreateCV/CreateCVStipper";
import MainInformation1Form from "../../Coponents/CreateCV/MainInformation1Form";
import CVTemplate1 from "../../Coponents/CreateCV/CVTemplate1";
import BackAndContinueBtns from "../../Coponents/CreateCV/BackAndContinueBtns";
import CustomizeYourCv from "../../Coponents/CreateCV/CustomizeYourCv";

function MainInformationPage() {
	const [formData, setFormData] = useState({
		main_information: {
			firstName: "Hani",
			LastName: "Husamuddin",
			profession: "Frontend Developer",
			city: "Cairo",
			country: "Egypt",
			mobileNumber: "2948503402",
			email: "hani.husam@gmail.com",
		},
		// Surakarta, December 2, 1994
	});

	function handelChange(e) {
		console.log("links e ", e);
		const { value, name } = e.target;
		console.log(value, name);
		let data = formData.main_information;
		data = { ...data, [name]: value };
		setFormData((prev) => ({ ...prev, main_information: data }));
	}

	function handelChangeMobile(value, e) {
		// const areaCode = e.dialCode;
		// let number = value;
		// let inputPhoneNumber = inputPhoneNumber.replace(/\D/g, "");
		let fullNumber = `+${value}`;
		setFormData({ ...formData, mobileNumber: fullNumber });
	}

	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff" }}>
			<HeaderTitle title={"Create CV"} />
			<CustomizeYourCv />
			<CreateCVStipper />
			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 p-0 px-lg-3">
						{/* form part ---------------------------------------------- */}
						<MainInformation1Form
							formData={formData.main_information}
							handelChange={handelChange}
							handelChangeMobile={handelChangeMobile}
						/>
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6">
						{/* template part ----------------------------------------- */}
						<CVTemplate1 data={formData.main_information} />
					</div>
				</div>
				<BackAndContinueBtns />
			</section>
		</div>
	);
}

export default MainInformationPage;
