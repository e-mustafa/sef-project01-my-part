import React from "react";
import "./admin-jobs-style.css";
import "./admin-jobs-global.css";
import HeaderTitle from "../../../Components/Admin/AdminJobs/HeaderTitle";
import { adminSideBarData } from "../../../Components/Admin/AdminJobs/adminJobData";
import SideBarAdmin from "../../../Components/Admin/AdminJobs/SideBarAdmin";
import JobListContainer from "../../../Components/Admin/AdminJobs/JobListContainer";
import AdminJobSearchBar from "../../../Components/Admin/AdminJobs/AdminJobSearchbar";
import JobsListPagination from "../../../Components/Admin/AdminJobs/JobsListPagination";
import TopBarAdmin from "../../../Components/Admin/AdminJobs/TopBarAdmin";

function AdminPanelJobs() {
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff" }}>
			<HeaderTitle />

			<div className="container-fluid d-flex flex-column gap-4 my-4 mt-3">
				{/* <div className="row order-last order-lg-first"> */}
				<div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
					<button className="btn btn-primary btn-block py-2 px-lg-5 w-100 fs-5">
						create new job
					</button>
				</div>
				{/* </div> */}
				<div className="row g-5">
					<div className="col-12 col-lg-3">
						<SideBarAdmin />
						<TopBarAdmin />
					</div>
					<div className="col-12 col-xl-9">
						<AdminJobSearchBar />
						<JobListContainer />
						<JobsListPagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminPanelJobs;
