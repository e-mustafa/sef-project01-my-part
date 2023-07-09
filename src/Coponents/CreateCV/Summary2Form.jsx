import React from "react";

function Summary2Form({ formData, handelChange, handelChangeMobile }) {
	return (
		<form className="cv-form row g-3 fs-18">
			<div className="col-12">
				<label htmlFor="inputAbout" className="form-label">
					About
				</label>
				<textarea
					className="form-control"
					id="inputAbout"
					name="about"
					rows="5"
					value={formData?.about ?? ""}
					onChange={handelChange}
					autoFocus
				></textarea>
			</div>
		</form>
	);
}

export default Summary2Form;
