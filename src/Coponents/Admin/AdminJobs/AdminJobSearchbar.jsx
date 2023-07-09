import React from "react";

function AdminJobSearchBar() {
	return (
		<>
			<div className="d-none d-lg-flex justify-content-between mt-5">
				<h5 className="head-page-title text-capitalize fs-5">Jobs</h5>

				<div className="admin-job-search bg_gray2-opc rounded-pill d-flex align-items-center px-4">
					<input
						className="form-control rounded-pill"
						type="text"
						placeholder="Search in Jobs"
						aria-label="Search in Jobs"
					/>
					<div className="text_primary clickable active-scale px-2">
						<i className="fa-solid fa-magnifying-glass fa-xl" />
					</div>
				</div>
			</div>
		</>
	);
}

export default AdminJobSearchBar;
