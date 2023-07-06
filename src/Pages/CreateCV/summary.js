import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderTitle from "../../Components/CreateCV/HeaderTitle";
import CreateCVStipper from "../../Components/CreateCV/CreateCVStipper";
import Summary2Form from "../../Components/CreateCV/Summary2Form";
import CVTemplate2 from "../../Components/CreateCV/CVTemplate2";
import "./create-cv-style.css";
import BackAndContinueBtns from "../../Components/CreateCV/BackAndContinueBtns";

function SummaryPage() {
	const [formData, setFormData] = useState({
		about: "I have a background in information technology, with a focus on frontend development and UI design. I am the type of person who seizes every opportunity to learn something new. That is why I enjoy challenges. From there, I'm under pressure to learn quickly and gain a lot of new experience.",
	});

	function handelChange(e) {
		console.log("about e ", e);
		const { value, name } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff" }}>
			<HeaderTitle />
			<CreateCVStipper />

			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 p-0 px-lg-3">
						{/* form part ---------------------------------------------- */}
						<Summary2Form formData={formData} handelChange={handelChange} />
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6">
						{/* template part ----------------------------------------- */}
						<CVTemplate2 data={formData} />
					</div>
				</div>

				{/* back, continue, download buttons -- dynamic ------------------ */}
				<BackAndContinueBtns />
			</section>
		</div>
	);
}

export default SummaryPage;
