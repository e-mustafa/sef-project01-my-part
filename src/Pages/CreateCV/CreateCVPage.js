import React, {useState } from "react";
import "./create-cv-style.css";
import { Outlet } from "react-router-dom";

import HeaderTitle from "../../Coponents/Global/HeaderTitle";
import CreateCVStipper from "../../Coponents/CreateCV/CreateCVStipper";
import BackAndContinueBtns from "../../Coponents/CreateCV/BackAndContinueBtns";
import CustomizeYourCv from "../../Coponents/CreateCV/CustomizeYourCv";
import { formDataFiled } from "../../Coponents/CreateCV/data";
import CVTemplate from "../../Coponents/CreateCV/CVTemplate";

function CreateCVPage() {
	const [formData, setFormData] = useState(formDataFiled);
	// Surakarta, December 2, 1994

	function handelChange(e, type) {
		console.log("links e ", e);
		const { value, name } = e.target;
		console.log(value, name);
		let data = formData?.[type];
		data = { ...data, [name]: value };
		setFormData((prev) => ({ ...prev, [type]: data }));
	}

	function handelChangeAbout(e) {
		const { value, name } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function handelChangeMobile(value, e) {
		// const areaCode = e.dialCode;
		// let number = value;
		// let inputPhoneNumber = inputPhoneNumber.replace(/\D/g, "");
		let fullNumber = `+${value}`;
		setFormData({ ...formData, mobileNumber: fullNumber });
	}

	//  handel Change in array form -----------------------------------------------
	function handelChangeSkills(e, i, type) {
		console.log("skills i ", i);
		console.log("skills e ", e);
		const { value } = e.target;
		console.log("skills value ", value);
		console.log(formData.skills[i]);

		const values = [...formData?.[type]];
		values[i] = value;
		setFormData((prev) => ({
			...prev,
			[type]: values,
		}));
	}

	function deleteSkill(i, type) {
		console.log("i ", i);
		let newArray = formData.skills?.filter((_, index) => index !== i);
		console.log(newArray);
		formData?.[type].splice(i, 1);
		setFormData((prev) => ({ ...prev, [type]: [...formData?.[type]] }));
	}

	function addSkillInput(type) {
		setFormData((prev) => ({
			...prev,
			[type]: [...prev?.[type], ""],
		}));
	}

	// handel Change in Complex form -----------------------------------
	function handelChangeComplex(e, i, type) {
		console.log(type + " e ", e);
		console.log(type + " i ", i);
		const { value, name } = e.target;
		let data = [...formData?.[type]];
		data[i] = { ...data[i], [name]: value };
		setFormData((prev) => ({ ...prev, [type]: data }));
	}
	function deleteComplexItem(i, type) {
		console.log("i ", i);
		let newArray = formData?.[type]?.filter((_, index) => index !== i);
		console.log(newArray);
		formData?.[type].splice(i, 1);
		setFormData((prev) => ({ ...prev, [type]: [...formData?.[type]] }));
	}

	function addComplexItem(type) {
		setFormData((prev) => ({
			...prev,
			[type]: [...formData?.[type], ""],
		}));
	}

	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff" }}>
			<HeaderTitle title={"Create CV"} />
			<CustomizeYourCv />
			<CreateCVStipper />
			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 p-0 px-lg-3">
						{/* forms part ---------------------------------------------- */}
						<Outlet
							context={[
								formData,
								handelChange,
								handelChangeAbout,
								handelChangeMobile,
								handelChangeSkills,
								addSkillInput,
								deleteSkill,
								handelChangeComplex,
								deleteComplexItem,
								addComplexItem,
							]}
						/>
					</div>
					<div className="col-12 col-lg-6 d-none d-lg-block">
						{/* template part ----------------------------------------- */}
						<CVTemplate data={formData} />
					</div>
				</div>
				<BackAndContinueBtns />
			</section>
		</div>
	);
}

export default CreateCVPage;
