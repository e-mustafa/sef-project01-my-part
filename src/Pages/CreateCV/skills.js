import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../../Coponents/Global/HeaderTitle";import CreateCVStipper from "../../Coponents/CreateCV/CreateCVStipper";
import Skills3Form from "../../Coponents/CreateCV/Skills3Form";
import CVTemplate from "../../Coponents/CreateCV/CVTemplate";
import CustomizeYourCv from "../../Coponents/CreateCV/CustomizeYourCv";

function SkillsPage() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		skills: [
			"HTML and CSS",
			"Scripting language: Javascript, Typescript, Python, Java",
			"Framework/Library: Django, React, Next, Bootstrap, TailwindCSS, etc",
			"Understanding UI Design; Visual Hierarchy, Design System, etc",
		],
	});

	function handelChangeSkills(e, i) {
		console.log("skills i ", i);
		console.log("skills e ", e);
		const { value, name } = e.target;
		console.log("skills value ", value);
		console.log(formData.skills[i]);

		const values = [...formData.skills];
		values[i] = value;
		setFormData((prev) => ({
			...prev,
			skills: values,
			// skills: [...formData.skills, (formData.skills[i] = value)],
		}));
	}

	function deleteSkill(i) {
		console.log("i ", i);
		let newArray = formData.skills?.filter((_, index) => index !== i);
		console.log(newArray);
		formData.skills.splice(i, 1);
		setFormData((prev) => ({ ...prev, skills: [...formData.skills] }));
	}

	function addSkillInput() {
		setFormData((prev) => ({
			...prev,
			skills: [...formData.skills, ""],
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
						<Skills3Form
							title="Skills"
							formData={formData.skills}
							handelChangeSkills={handelChangeSkills}
							deleteSkill={deleteSkill}
							addSkillInput={addSkillInput}
						/>
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6">
						{/* template part ----------------------------------------- */}
						<CVTemplate data={formData} />
					</div>
				</div>
				<div className="d-flex flex-wrap flex-column flex-md-row p-2 gap-4 text-capitalize pb-5 ">
					<button className="btn btn-gray btn-lg btn-width" onClick={() => navigate(-1)}>
						Back
					</button>
					<button
						className="btn btn-primary btn-lg btn-width"
						onClick={() => navigate("/createcv/experience")}
					>
						Continue
					</button>
				</div>
			</section>
		</div>
	);
}

export default SkillsPage;
