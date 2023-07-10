import React from "react";
import { adminJobsApplicationsData } from "./adminJobData";

function JobApplicationsCard() {
	return (
		<div>
			{adminJobsApplicationsData?.map((ele, i) => (
				<div
					key={i}
					className="row align-items-center py-4 px-3 mb-4 rounded bg-black bg-opacity-25"
				>
					<h6 className="col-3">{ele.applicant}</h6>
					<h6 className="col-2">{ele.experience}</h6>
					<h6 className="col-2">{ele.email}</h6>
					<h6 className="col-2">{ele.phone}</h6>
					<div className="col-3">
						<button className=" btn btn-primary rounded text-light py-2 w-100">
							DOWNLOAD CV
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default JobApplicationsCard;
