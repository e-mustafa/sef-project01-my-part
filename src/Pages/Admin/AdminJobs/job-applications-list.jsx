import React from "react";
import "./admin-jobs-global.css";
import "./job-application-liste.css";

import AdminSectionTitle from "../../../Components/Admin/AdminJobs/AdminSectionTitle";
import JobApplicationsContainerLg from "../../../Components/Admin/AdminJobs/JobApplicationsContainerLg";
import JobApplicationsContainer from "../../../Components/Admin/AdminJobs/JobApplicationsContainer";
import JobApplicationPagination from "../../../Components/Admin/AdminJobs/JobApplicationPagination";
import SideBarAdminShrok from "../../../Components/Admin/AdminJobs/SideBarAdminShrok";
import HeaderTitleShrok from "../../../Components/Admin/AdminJobs/HeaderTitleShrok";

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
						<JobApplicationsContainerLg />
						<JobApplicationsContainer />
						<JobApplicationPagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobApplicationsListPage;
