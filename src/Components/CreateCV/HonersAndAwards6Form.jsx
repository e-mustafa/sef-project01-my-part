import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function HonersAndAwards6Form({ formData, handelChange, addEducationInput, deleteEducation }) {
	console.log(formData);
	return (
		<>
			<h5 className="mb-4 mb-lg-5 text-capitalize">Honers And Awards</h5>
			<div className="d-flex flex-column gap-3 w-100">
				{formData?.map((ele, i) => (
					<div key={i}>
						<div
							className="add-experience-container row row-gap-3 g-2 align-items-center mx-0 mx-lg-2 px-0 px-lg-3 py-4 mb-3"
							key={i}
						>
							<div className="col-12 col-lg-8">
								<label htmlFor="inputAwardName" className="form-label text-capitalize">
									Award Name
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAwardName"
									name="awardName"
									value={ele?.awardName ?? ""}
									onChange={(e) => handelChange(e, i)}
								/>
							</div>

							<div className="col-12 col-lg-4">
								<label htmlFor="inputAwardYear" className="form-label text-capitalize">
									Year
								</label>
								<input
									type="text"
									className="form-control"
									id="inputAwardYear"
									name="awardYear"
									value={ele?.awardYear ?? ""}
									onChange={(e) => handelChange(e, i)}
								/>
							</div>

							<div className="col-12 h-100">
								<label htmlFor="inputDescription" className="form-label">
									Description
								</label>
								<textarea
									className="form-control"
									id="inputDescription"
									name="description"
									rows="2"
									value={ele?.description ?? ""}
									onChange={(e) => handelChange(e, i)}
									autoFocus
								></textarea>
							</div>
						</div>

						<div
							className="clickable click-primary text-end pe-5 mb-4"
							onClick={() => deleteEducation()}
						>
							<i className="fa-regular fa-trash-can fa-xl" />
						</div>
					</div>
				))}
			</div>
			<div
				className="align-self-end mb-2 pe-2 clickable click-primary text-end"
				style={{ marginTop: "-48px" }}
				onClick={addEducationInput}
			>
				<AiOutlinePlusCircle size="28" />
			</div>
		</>
	);
}

export default HonersAndAwards6Form;
