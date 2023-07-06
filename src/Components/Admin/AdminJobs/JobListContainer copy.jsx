import React from "react";
import { adminJobsListData } from "./adminJobData";
import svgimg from "../../../Images/coffee-beans-2.svg";
import { LiaTrashAlt } from "react-icons/lia";

function JobListContainer() {
	return (
		<div className=" d-flex flex-column gap-4 mt-5 text-capitalize">
			<div className="row align-items-center fw-bold px-4">
				<div className="col-6 col-lg-3">Company</div>
				<div className="col-6 col-lg-3">Position</div>
				<div className="col-6 col-lg-2">Status</div>
				<div className="col-6 col-lg-2">Posted At</div>
				<div className="col-6 col-lg-2"># Applications</div>
				<div className="col-6 col-lg-1"></div>
			</div>
			{adminJobsListData &&
				adminJobsListData.map((job, i) => (
					<div key={i} className="row bg-black bg-opacity-25 align-items-center rounded p-4">
						<div className="col-6 col-lg-3">
							<h6 className="mb-0">{job?.company}</h6>
						</div>
						<div className="col-6 col-lg-3">{job?.position}</div>
						<div className="col-6 col-lg-2 ">
							<h6
								className={`badge rounded-pill fs-6 py-2 px-4 ${
									job?.status === "Open" ? "bg_primary" : "bg_gray"
								}`}
							>
								{job?.status}
							</h6>
						</div>
						<div className="col-6 col-lg-2">
							<h6>{`${job?.postedDay},  ${job?.postedDate}`}</h6>
							<h6>{job?.postedTime}</h6>
						</div>
						<div className="col-6 col-lg-1">{job?.applications}</div>
						<div className="col-6 col-lg-1 d-flex align-items-center gap-2 text_primary">
							<div>
								<i class="fa-regular fa-pen-to-square fa-xl" />
							</div>

							<div>
								{/* <i class="fa-solid fa-trash-can fa-xl" /> */}
								<LiaTrashAlt size={30} />
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default JobListContainer;
