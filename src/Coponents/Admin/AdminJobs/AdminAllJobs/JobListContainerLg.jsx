import React, { useState } from "react";
import { adminJobsListData } from "./adminJobData";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../../../../styles/ma-global-style.css";

const JobListCardsLg = React.lazy(() => import("./JobListCardsLg"));


function JobListContainerLg() {
	const [jobsState, setJobsState] = useState(adminJobsListData);

	const handelDeleteJob = (index) => {
		setJobsState(jobsState?.filter((e, i) => i !== index));
	};
	return (
		<div className="d-none d-lg-flex flex-column gap-4 mt-5 text-capitalize">
			<div className="row align-items-center fw-bold px-4">
				<div className="col-6 col-lg-3">Company</div>
				<div className="col-6 col-lg-3">Position</div>
				<div className="col-6 col-lg-2">Status</div>
				<div className="col-6 col-lg-2">Posted At</div>
				<div className="col-6 col-lg-2"># Applications</div>
				<div className="col-6 col-lg-1"></div>
			</div>

			{/* Job list cards in lg screen ------------------------------------- */}
			<React.Suspense fallback={<Skeleton className="sef-Skeleton d-none d-lg-block" count={3} height={100} />}>
				<JobListCardsLg jobsState={jobsState} handelDeleteJob={handelDeleteJob} />
			</React.Suspense>
		</div>
	);
}

export default JobListContainerLg;
