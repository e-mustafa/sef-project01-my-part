import React from "react";
import { LiaTrashAlt } from "react-icons/lia";

function JobListCardsLg({ jobsState, handelDeleteJob }) {
	return (
		<>
			{jobsState &&
				jobsState.map((job, i) => (
					<div
						key={i}
						className="row g-0 bg-black bg-opacity-25 align-items-center rounded p-4"
					>
						<div className="col-6 col-lg-3 px-2">
							<h6 className="mb-0">{job?.company}</h6>
						</div>
						<div className="col-6 col-lg-3 px-2">{job?.position}</div>
						<div className="col-6 col-lg-2 px-2">
							<h6
								className={`badge rounded-pill fs-6 py-2 px-4 ${
									job?.status === "Open" ? "bg_primary" : "bg_gray"
								}`}
							>
								{job?.status}
							</h6>
						</div>
						<div className="col-6 col-lg-2 px-2">
							<h6>{`${job?.postedDay},  ${job?.postedDate}`}</h6>
							<h6>{job?.postedTime}</h6>
						</div>
						<div className="col-6 col-lg-1 px-2">
							<h6>{job?.applications}</h6>
						</div>
						<div className="col-6 col-lg-1 px-2 d-flex align-items-center justify-content-between gap-2 text_primary">
							<div className="clickable active-scale">
								<i className="fa-regular fa-pen-to-square fa-xl" />
							</div>

							<div className="clickable active-scale" onClick={() => handelDeleteJob(i)}>
								{/* <i className="fa-solid fa-trash-can fa-xl" /> */}
								<LiaTrashAlt size={30} />
							</div>
						</div>
					</div>
				))}
		</>
	);
}

export default JobListCardsLg;
