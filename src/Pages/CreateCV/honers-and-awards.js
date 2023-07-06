import React, { useState } from "react";
import HeaderTitle from "../../Components/CreateCV/HeaderTitle";
import CreateCVStipper from "../../Components/CreateCV/CreateCVStipper";
import HonersAndAwards6Form from "../../Components/CreateCV/HonersAndAwards6Form";
import CVTemplate from "../../Components/CreateCV/CVTemplate";
import "./create-cv-style.css";
import BackAndContinueBtns from "../../Components/CreateCV/BackAndContinueBtns";

function HonersAndAwardsPage() {
	const [formData, setFormData] = useState({
		honersAndAwards: [
			{
				awardName: "Best Graduated",
				awardYear: "2019",
				description:
					'included in one of the award recipients of the best graduate students in the IV graduation period of UPN "Veteran" Yogyakarta',
			},
		],
	});

	function handelChange(e, i) {
		console.log("links e ", e);
		console.log("links i ", i);
		const { value, name } = e.target;
		let data = [...formData.honersAndAwards];
		data[i] = { ...data[i], [name]: value };
		setFormData((prev) => ({ ...prev, honersAndAwards: data }));
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
		let newArray = formData.honersAndAwards?.filter((_, index) => index !== i);
		console.log(newArray);
		formData.honersAndAwards.splice(i, 1);
		setFormData((prev) => ({
			...prev,
			honersAndAwards: [...formData.honersAndAwards],
		}));
	}

	function addEducationInput() {
		setFormData((prev) => ({
			...prev,
			honersAndAwards: [...formData.honersAndAwards, ""],
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
						<HonersAndAwards6Form
							formData={formData.honersAndAwards}
							handelChange={handelChange}
							deleteEducation={deleteEducation}
							addEducationInput={addEducationInput}
						/>
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6 ">
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

export default HonersAndAwardsPage;
