import React, { useState } from "react";
import HeaderTitle from "../../Components/CreateCV/HeaderTitle";
import CreateCVStipper from "../../Components/CreateCV/CreateCVStipper";
import Links8Form from "../../Components/CreateCV/Links8Form";
import CVTemplate from "../../Components/CreateCV/CVTemplate";
import "./create-cv-style.css";
import BackAndContinueBtns from "../../Components/CreateCV/BackAndContinueBtns";

function LinksPage() {
	const [formData, setFormData] = useState({
		links: [
			{ sitename: "facebook", url: "facebook" },
			{ sitename: "lenkedin", url: "facebook" },
			{ sitename: "twitter", url: "facebook" },
			{ sitename: "github", url: "facebook" },
		],
	});

	function handelChange(e, i) {
		console.log("links e ", e);
		console.log("links i ", i);
		const { value, name } = e.target;
		let data = [...formData.links];
		data[i] = { ...data[i], [name]: value };
		setFormData((prev) => ({ ...prev, links: data }));
	}

	// function handelChangeSkills(e, i) {
	// 	console.log("skills i ", i);
	// 	console.log("skills e ", e);
	// 	const { value, name } = e.target;
	// 	console.log("skills value ", value);
	// 	console.log(formData.skills[i]);

	// 	const values = [...formData.skills];
	// 	values[i] = value;
	// 	setFormData((prev) => ({
	// 		...prev,
	// 		skills: values,
	// 		// skills: [...formData.skills, (formData.skills[i] = value)],
	// 	}));
	// }

	function deleteItem(i) {
		console.log("i ", i);
		let newArray = formData.links?.filter((_, index) => index !== i);
		console.log(newArray);
		formData.links.splice(i, 1);
		setFormData((prev) => ({ ...prev, links: [...formData.links] }));
	}

	function addItem() {
		setFormData((prev) => ({
			...prev,
			links: [...formData.links, ""],
		}));
	}
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff" }}>
			<HeaderTitle />
			<CreateCVStipper />

			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 ">
						{/* form part ---------------------------------------------- */}
						<Links8Form
							formData={formData.links}
							handelChange={handelChange}
							deleteItem={deleteItem}
							addItem={addItem}
						/>
					</div>
					<div className="col-12 d-none d-lg-block col-lg-6">
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

export default LinksPage;
