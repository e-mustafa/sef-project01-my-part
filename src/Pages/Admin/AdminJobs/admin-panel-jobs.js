import React from "react";
import "./admin-jobs-style.css";
import "./admin-jobs-global.css";
import HeaderTitle from "../../../Components/Admin/AdminJobs/HeaderTitle";
import SideBarAdmin from "../../../Components/Admin/AdminJobs/SideBarAdmin";
import JobListContainer from "../../../Components/Admin/AdminJobs/JobListContainer";
import AdminJobSearchBar from "../../../Components/Admin/AdminJobs/AdminJobSearchbar";
import JobsListPagination from "../../../Components/Admin/AdminJobs/JobsListPagination";
import TopBarAdmin from "../../../Components/Admin/AdminJobs/TopBarAdmin";
import JobListContainerLg from "../../../Components/Admin/AdminJobs/JobListContainerLg";

function AdminPanelJobs() {
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff", minHeight: "100vh" }}>
			<HeaderTitle />

			<div className="container-fluid d-flex flex-column gap-4 my-4 mt-3">
				{/* create new job button ---------------------- */}
				<div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
					<button className="btn btn-primary btn-block py-2 px-lg-5 w-100 fs-5">
						create new job
					</button>
				</div>
				{/* Sidebar and right table -------------------------*/}
				<div className="row g-5">
					<div className="col-12 col-xl-3">
						<SideBarAdmin />
						<TopBarAdmin />
					</div>
					<div className="col-12 col-xl-9">
						<AdminJobSearchBar />
						<JobListContainerLg />
						<JobListContainer />
						<JobsListPagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminPanelJobs;
