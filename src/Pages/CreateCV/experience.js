import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../../Coponents/Global/HeaderTitle";import CreateCVStipper from "../../Coponents/CreateCV/CreateCVStipper";
import Experience4Form from "../../Coponents/CreateCV/Experience4Form";
import CVTemplate from "../../Coponents/CreateCV/CVTemplate";
import CustomizeYourCv from "../../Coponents/CreateCV/CustomizeYourCv";

function ExperiencePage() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		experience: [
			{
				companyName: "upwork",
				position: "frontend developer",
				periodFrom: "Nov 2019",
				periodTo: "present",
				description:
					"Upwork is an American freelancing platform where enterprises and individuals connect in order to conduct business. I am currently accepting remote or freelance Web Development and UI Design work from this platform",
				img: "",
			},
		],
	});

	function handelChange(e, i) {
		console.log("links e ", e);
		console.log("links i ", i);
		const { value, name } = e.target;
		let data = [...formData.experience];
		data[i] = { ...data[i], [name]: value };
		setFormData((prev) => ({ ...prev, experience: data }));
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

	function deleteExperience(i) {
		console.log("i ", i);
		let newArray = formData.experience?.filter((_, index) => index !== i);
		console.log(newArray);
		formData.experience.splice(i, 1);
		setFormData((prev) => ({ ...prev, experience: [...formData.experience] }));
	}

	function addExperienceInput() {
		setFormData((prev) => ({
			...prev,
			experience: [...formData.experience, ""],
		}));
	}
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)" }}>
			<HeaderTitle title={"Create CV"} />
			<CustomizeYourCv />
			<CreateCVStipper />

			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 p-0 px-lg-2">
						{/* form part ---------------------------------------------- */}
						<Experience4Form
							formData={formData.experience}
							handelChange={handelChange}
							deleteExperience={deleteExperience}
							addExperienceInput={addExperienceInput}
						/>
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6">
						{/* template part ----------------------------------------- */}
						<CVTemplate data={formData} />
					</div>
				</div>
				<div className="d-flex flex-wrap flex-column flex-md-row p-2 gap-4 text-capitalize pb-5">
					<button className="btn btn-gray btn-lg btn-width" onClick={() => navigate(-1)}>
						Back
					</button>
					<button
						className="btn btn-primary btn-lg btn-width"
						onClick={() => navigate("/createcv/education")}
					>
						Continue
					</button>
				</div>
			</section>
		</div>
	);
}

export default ExperiencePage;
