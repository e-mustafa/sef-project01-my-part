import React from "react";

function JobApplicationsContainerLg() {
	return (
		<div className="d-none d-lg-flex flex-column gap-4 text-capitalize">
			<div className="row align-items-center px-3">
				<h6 className="col-3 fw-bold">Applicant</h6>
				<h6 className="col-2 fw-bold">Experience</h6>
				<h6 className="col-2 fw-bold">Email</h6>
				<h6 className="col-3 fw-bold">Mobile Number</h6>
			</div>

			<div>
				<div className="row align-items-center py-4 px-3 mb-4 rounded bg-black bg-opacity-25">
					<h6 className="col-3">Here's the Applicant name</h6>
					<h6 className="col-2">2 Years</h6>
					<h6 className="col-2">user@gmail.com</h6>
					<h6 className="col-2">002011289304</h6>
					<div className="col-3">
						<button className="  _btn rounded text-light w-100">DOWNLOAD CV</button>
					</div>
				</div>

				<div className="row align-items-center py-4 px-3 mb-4 rounded bg-black bg-opacity-25">
					<h6 className="col-3">Here's the Applicant name</h6>
					<h6 className="col-2">2 Years</h6>
					<h6 className="col-2">user@gmail.com</h6>
					<h6 className="col-2">002011289304</h6>
					<div className="col-3">
						<button className="  _btn rounded text-light w-100">DOWNLOAD CV</button>
					</div>
				</div>

				<div className="row align-items-center py-4 px-3 mb-4 rounded bg-black bg-opacity-25">
					<h6 className="col-3">Here's the Applicant name</h6>
					<h6 className="col-2">2 Years</h6>
					<h6 className="col-2">user@gmail.com</h6>
					<h6 className="col-2">002011289304</h6>
					<div className="col-3">
						<button className="  _btn rounded text-light w-100">DOWNLOAD CV</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobApplicationsContainerLg;
