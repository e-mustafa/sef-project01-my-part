import React from "react";
import LoadingSpanner from "../../../Global/LoadingSpanner";

const JobApplicationsCard = React.lazy(() => import("./JobApplicationsCard"));


function JobApplicationsContainerLg() {
	return (
		<div className="d-none d-lg-flex flex-column gap-4 text-capitalize">
			<div className="row align-items-center px-3">
				<h6 className="col-3 fw-bold">Applicant</h6>
				<h6 className="col-2 fw-bold">Experience</h6>
				<h6 className="col-2 fw-bold">Email</h6>
				<h6 className="col-3 fw-bold">Mobile Number</h6>
			</div>

			{/* Job Applications list cards in lg screen ---------------------------------- */}
			<React.Suspense fallback={<LoadingSpanner />}>
				<JobApplicationsCard />
			</React.Suspense>
		</div>
	);
}

export default JobApplicationsContainerLg;
