import React from "react";
import HeaderTitle from "./HeaderTitle";
import CreateCVStipper from "./CreateCVStipper";
import CVTemplate from "./CVTemplate";
import MainInformation1Form from "./MainInformation1Form";

function ConstPage({ formData, setFormData, handelChange, handelChangeMobile }) {
	return (
		<>
			<HeaderTitle />
			<CreateCVStipper />

			<section className="container-fluid">
				<div className="row create-cv p-3 bg_black-opc my-4 mx-0 p-0 p-lg-4 rounded ">
					<div className="col-12 col-lg-6 p-0 px-lg-3">
						<MainInformation1Form
							formData={formData}
							setFormData={setFormData}
							handelChange={handelChange}
							handelChangeMobile={handelChangeMobile}
						/>
					</div>
					<div className="col-12  d-none d-lg-block col-lg-6">
						<CVTemplate data={formData} />
					</div>
				</div>
				<div className="d-flex flex-wrap flex-column flex-md-row p-2 gap-4 text-capitalize ">
					<button className="btn btn-gray btn-lg btn-width">Back</button>
					<button className="btn btn-primary btn-lg btn-width">Continue</button>
				</div>
			</section>
		</>
	);
}

export default ConstPage;
