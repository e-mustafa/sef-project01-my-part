import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import "./create-cv-style.css";
import BackAndContinueBtns from "../../Components/CreateCV/BackAndContinueBtns";
import HeaderTitle from "../../Components/CreateCV/HeaderTitle";
import CreateCVStipper from "../../Components/CreateCV/CreateCVStipper";
import CVTemplate from "../../Components/CreateCV/CVTemplate";
import Education5Form from "../../Components/CreateCV/Education5Form";

function EducationPage() {
	const [formData, setFormData] = useState({
		education: [
			{
				organizationName: 'Informtics, Universities Pembangunan Nasional "Veteran"* Yogyakarta',
				degree: "Bachelor of Computer Science, Artificial intelligence",
				periodFrom: "2015",
				periodTo: "2019",
				description:
					"I graduated in July 2019 with a GPA of 3.63. One of the award recipients for the best graduate of the university at the time. in my thesis, I looked into how Natural Language Processing (NLP) was used in Telegram Bot. For the NLP approach method, I used Neural Network (Deep Learning) and Text Mining.",
			},
		],
	});

	function handelChange(e, i) {
		console.log("links e ", e);
		console.log("links i ", i);
		const { value, name } = e.target;
		let data = [...formData.education];
		data[i] = { ...data[i], [name]: value };
		setFormData((prev) => ({ ...prev, education: data }));
	}

	// function handelChangeExperiences(e, i) {
	// 	console.log("experience i ", i);
	// 	console.log("experience e ", e);
	// 	const { value, name } = e.target;
	// 	console.log("experience value ", value);
	// 	console.log(formData.experience[i]);
	// 	const values = [...formData.experience];
	// 	values[i] = value;
	// 	setFormData((prev) => ({
	// 		...prev,
	// 		experience: values,
	// 	}));
	// }

	function deleteEducation(i) {
		console.log("i ", i);
		let newArray = formData.education?.filter((_, index) => index !== i);
		console.log(newArray);
		formData.education.splice(i, 1);
		setFormData((prev) => ({ ...prev, education: [...formData.education] }));
	}

	function addEducationInput() {
		setFormData((prev) => ({
			...prev,
			education: [...formData.education, ""],
		}));
	}
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff" }}>
			<HeaderTitle />
			<CreateCVStipper />
			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 p-0 px-lg-2">
						{/* form part ---------------------------------------------- */}
						<Education5Form
							formData={formData.education}
							handelChange={handelChange}
							deleteEducation={deleteEducation}
							addEducationInput={addEducationInput}
						/>
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6">
						{/* template part ----------------------------------------- */}
						<CVTemplate data={formData} />
					</div>
				</div>

				{/* back, continue, download buttons -- dynamic ------------------ */}
				<BackAndContinueBtns />
			</section>
		</div>
	);
}

export default EducationPage;
