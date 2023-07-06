import React from "react";
import { adminJobsListData } from "./adminJobData";
import { LiaTrashAlt, LiaTrashAltSolid } from "react-icons/lia";

function JobListContainer() {
	return (
		<div className=" d-flex flex-column gap-4 mt-5 text-capitalize">
			<div className="row d-none d-lg-flex align-items-center fw-bold px-4">
				<div className="col-6 col-lg-3">Company</div>
				<div className="col-6 col-lg-3">Position</div>
				<div className="col-6 col-lg-2">Status</div>
				<div className="col-6 col-lg-2">Posted At</div>
				<div className="col-6 col-lg-2"># Applications</div>
				<div className="col-6 col-lg-1"></div>
			</div>
			{adminJobsListData &&
				adminJobsListData.map((job, i) => (
					<div key={i} className="row bg-black bg-opacity-25 align-items-center rounded p-4 position-relative ">
						<div className="col-12 col-lg-3">
							<div className="d-flex flex-column flex-wrap column-gap-3 mb-4 mb-lg-0">
								<h5 className="d-block d-lg-none flex-basis-50 mb-3 text-light text-opacity-75 fw-bold text-capitalize">
									Company
								</h5>
								<h6 className="mb-0">{job?.company}</h6>
							</div>
						</div>
						<div className="col-12 col-lg-3">
							<div className="d-flex flex-wrap column-gap-3 mb-4 mb-lg-0">
								<h5 className="d-block d-lg-none flex-basis-50 mb-3 text-light text-opacity-75 fw-bold text-capitalize">
									Job Position
								</h5>
								<h6>{job?.position}</h6>
							</div>
						</div>
						<div className="col-12 col-lg-3 d-block d-lg-none">
							<div className="d-flex flex-wrap column-gap-3 mb-4 mb-lg-0">
								<h5 className="d-block d-lg-none flex-basis-50 mb-3 text-light text-opacity-75 fw-bold text-capitalize">
									Filed
								</h5>
								<h6>{job?.field}</h6>
							</div>
						</div>
						<div className="col-12 col-lg-2 d-non job-status-badge d-lg-flex">
							<h6
								className={`badge rounded-pill fs-6 py-2 px-4 ${
									job?.status === "Open" ? "bg_primary" : "bg_gray"
								}`}
							>
								{job?.status}
							</h6>
						</div>
						<div className="col-12 col-lg-2">
							<div className="d-flex flex-wrap column-gap-3 mb-4 mb-lg-0">
								<h5 className="d-block d-lg-none flex-basis-50 mb-3 text-light text-opacity-75 fw-bold text-capitalize">
									Date Published
								</h5>
								<h6>
									{job?.postedDay}, &#160; <span>{job?.postedDate}</span>
								</h6>
							</div>

							<div className="d-flex flex-wrap column-gap-3 mb-4 mb-lg-0">
								<h5 className="d-block d-lg-none flex-basis-50 mb-3 text-light text-opacity-75 fw-bold text-capitalize">
									Time Published
								</h5>
								<h6>{job?.postedTime}</h6>{" "}
							</div>
						</div>
						<div className="col-12 col-lg-1">
							<div className="d-flex flex-wrap column-gap-3 mb-4 mb-lg-0">
								<h5 className="d-block d-lg-none flex-basis-50 mb-3 text-light text-opacity-75 fw-bold text-capitalize">
									Applications
								</h5>
								<h6>{job?.applications}</h6>
							</div>
						</div>

						<div className="col-12 col-lg-1 ">
							<div className="jobs-delete-add-icon d-flex align-items-center justify-content-end gap-2 text_primary mt-lg-0">
								<div>
									<i class="fa-regular fa-pen-to-square fa-xl" />
								</div>
								<div>
									{/* <i class="fa-solid fa-trash-can fa-xl" /> */}
									<LiaTrashAlt size={30} />
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default JobListContainer;
