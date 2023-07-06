import React from "react";

import DragDropImgSmall from "./DragDropImgSmall";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Experience4Form({ formData, handelChange, addExperienceInput, deleteExperience }) {
	console.log(formData);
	return (
		<>
			<h5 className="mb-4 mb-lg-5">Experience</h5>

			<div className="d-flex flex-column gap-3 w-100">
				{formData?.map((ele, i) => (
					<div key={i}>
						<div className="add-experience-container row row-gap-3 g-2 align-items-center mx-0 mx-lg-2 px-0 px-lg-3 py-4 mb-3">
							<div className="col-12">
								<label htmlFor="inputCompanyName" className="form-label text-capitalize">
									company Name
								</label>
								<input
									type="text"
									className="form-control"
									id="inputCompanyName"
									name="companyName"
									value={ele?.companyName ?? ""}
									onChange={(e) => handelChange(e, i)}
								/>
							</div>

							<div className="col-12">
								<label htmlFor="inputPositionName" className="form-label text-capitalize">
									Position
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPositionName"
									name="position"
									value={ele?.position ?? ""}
									onChange={(e) => handelChange(e, i)}
								/>
							</div>

							<div className="col-12 col-lg-6 ">
								<label htmlFor="inputPeriodFrom" className="form-label text-capitalize">
									From
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPeriodFrom"
									name="periodFrom"
									value={ele?.periodFrom ?? ""}
									onChange={(e) => handelChange(e, i)}
								/>
							</div>

							<div className="col-12 col-lg-6">
								<label htmlFor="inputPeriodTo" className="form-label text-capitalize">
									To
								</label>
								<input
									type="text"
									className="form-control"
									id="inputPeriodTo"
									name="periodTo"
									value={ele?.periodTo ?? ""}
									onChange={(e) => handelChange(e, i)}
								/>
							</div>

							<div className="col-12 col-lg-4 order-last order-lg-0 h-100">
								<DragDropImgSmall />
							</div>

							<div className="col-12 col-lg-8 h-100">
								<label htmlFor="inputDescription" className="form-label">
									Description
								</label>
								<textarea
									className="form-control"
									id="inputDescription"
									name="description"
									rows="5"
									value={ele?.description ?? ""}
									onChange={(e) => handelChange(e, i)}
									autoFocus
								></textarea>
							</div>
						</div>

						<div
							className="clickable click-primary text-end pe-5 mb-4"
							onClick={() => deleteExperience()}
						>
							<i className="fa-regular fa-trash-can fa-xl" />
						</div>
					</div>
				))}
			</div>

			<div
				className="align-self-end mb-2 pe-2 clickable click-primary text-end"
				style={{ marginTop: "-48px" }}
				onClick={addExperienceInput}
			>
				<AiOutlinePlusCircle size="28" />
			</div>
		</>
	);
}

export default Experience4Form;
