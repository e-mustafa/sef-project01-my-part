import React from "react";
import "../../../styles/ma-global-style.css";
import "./job-application-liste.css";

import AdminSectionTitle from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/AdminSectionTitle";
import JobApplicationsContainerLg from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobApplicationsContainerLg";
// import JobApplicationsContainer from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobApplicationsContainer";
import JobApplicationPagination from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobApplicationPagination";
import SideBarAdminShrok from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/SideBarAdminShrok";
import HeaderTitleShrok from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/HeaderTitleShrok";
import Skeleton from "react-loading-skeleton";

const JobApplicationsContainer = React.lazy(() =>
	import("../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobApplicationsContainer")
);

function JobApplicationsListPage() {
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff", minHeight: "100vh" }}>
			<HeaderTitleShrok />

			<div className="container-fluid d-flex flex-column gap-4 my-4 mt-3">
				{/* Sidebar and right table -------------------------*/}
				<div className="row g-5 mt-5">
					<SideBarAdminShrok />
					<div className="col-12 col-xl-9">
						<AdminSectionTitle />

						{/* Job list cards in lg screens ------------------------------------- */}
						<JobApplicationsContainerLg />

						{/* Job list cards in small screens ------------------------------------- */}
						<React.Suspense
							fallback={
								<Skeleton className="sef-Skeleton mt-4" inline count={3} height={200} />
							}
						>
							<JobApplicationsContainer />
						</React.Suspense>

						<JobApplicationPagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobApplicationsListPage;
