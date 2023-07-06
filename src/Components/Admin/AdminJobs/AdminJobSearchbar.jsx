import React from "react";

function AdminJobSearchBar() {
	return (
		<>
			<div className="d-flex justify-content-between mt-5">
				<h5 className="head-page-title text-capitalize fs-5">Jobs</h5>

				<div className="admin-job-search d-flex">
					<input
						class="form-control rounded-pill"
						type="text"
						placeholder="Default input"
						aria-label="default input example"
					/>
					<i class="fa-solid fa-magnifying-glass"></i>
				</div>
			</div>
		</>
	);
}

export default AdminJobSearchBar;
