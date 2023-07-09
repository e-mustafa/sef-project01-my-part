import React from "react";

function SideBarAdminShrok() {
	return (
		<div className="col-12 col-xl-3">
			<div className="container_job rounded p-4 d-none d-xl-block ">
				<div className="jobs_container p-3 m-2 rounded bg-black bg-opacity-25">
					<h5>Users</h5>
				</div>
				<div className="p-3 m-2 pt-1">
					<p className="m-1">Admins</p>
					<p className="m-1">Editors</p>
					<p className="m-1">Instructors</p>
					<p className="m-1">Students</p>
				</div>
				<div className="jobs_container p-3 m-2 rounded bg-black bg-opacity-25">
					<h5>Articles</h5>
				</div>
				<div className="p-3 m-2 pt-1">
					<p className="m-1">Published Articles</p>
					<p className="m-1">Scheduled Articles</p>
					<p className="m-1">Saved Drafts</p>
				</div>
				<div className="jobs_container p-3 m-2 rounded bg-black bg-opacity-25">
					<h5>Jobs</h5>
				</div>
				<div className="p-3 m-2 pt-1">
					<p className="m-1">Published Jobs</p>
					<p className="m-1">Saved Drafts</p>
				</div>
				<div className="jobs_container p-3 m-2 rounded bg-black bg-opacity-25">
					<h5>Courses</h5>
				</div>
				<div className="p-3 m-2 pt-1">
					<p className="m-1">published Courses</p>
					<p className="m-1">Scheduled Courses</p>
					<p className="m-1">Saved Drafts</p>
				</div>
			</div>
		</div>
	);
}

export default SideBarAdminShrok;
