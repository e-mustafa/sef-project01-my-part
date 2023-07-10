import React from "react";
import "./admin-jobs-style.css";
import "../../../styles/ma-global-style.css";
import SideBarAdmin from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/SideBarAdmin";
// import JobListContainer from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobListContainer";
import AdminJobSearchBar from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/AdminJobSearchbar";
import JobsListPagination from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobsListPagination";
import TopBarAdmin from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/TopBarAdmin";
import JobListContainerLg from "../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobListContainerLg";
import HeaderTitle from "../../../Coponents/Global/HeaderTitle";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const JobListContainer = React.lazy(() =>
	import("../../../Coponents/Admin/AdminJobs/AdminAllJobs/JobListContainer")
);

function AdminPanelJobs() {
	return (
		<div style={{ backgroundColor: "rgb(26 26 26 / .9)", color: "#fff", minHeight: "100vh" }}>
			<HeaderTitle title={"Admin Panel"} />

			<div className="container-fluid d-flex flex-column gap-4 my-4 mt-3">
				{/* create new job button ---------------------- */}
				<div className="col align-self-lg-end px-3 mb-5 mb-lg-0 order-last order-lg-first">
					<Link className="btn btn-primary btn-block py-2 px-lg-5 w-100 fs-5">
						create new job
					</Link>
				</div>
				{/* Sidebar and right table -------------------------*/}
				<div className="row gx-5">
					<div className="col-12 col-xl-3">
						<SideBarAdmin />
						<TopBarAdmin />
					</div>
					<div className="col-12 col-xl-9">
						<AdminJobSearchBar />
						<JobListContainerLg />

						{/* Job list cards in small screens ------------------------------------- */}
						<React.Suspense
							fallback={
								<Skeleton className="sef-Skeleton mt-4" inline count={3} height={200} />
							}
						>
							<JobListContainer />
						</React.Suspense>

						<JobsListPagination />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminPanelJobs;
