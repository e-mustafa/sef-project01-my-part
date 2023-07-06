import React from "react";
import { adminSideBarData } from "./adminJobData";

function TopBarAdmin() {
	return (
		<div className="bg-black bg-opacity-25 rounded text-capitalize p-3 d-block d-xl-none">
			{adminSideBarData &&
				adminSideBarData.map((section, i) => (
					<div key={i}>
						<h5 className="bg-black bg-opacity-25 rounded fw-bold p-3">{section.title}</h5>

						<div class="admin-jobs dropdown">
							<div
								class="btn btn-secondary opacity-50 dropdown-toggle d-flex justify-content-between align-items-center px-4 w-100"
								href="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown link
								
							</div>

							<ul class="dropdown-menu w-100 ">
								<li>
									<a class="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</div>
						<ul className=" list-unstyled px-3 link-info line_height-2">
							{section?.content.map((e, i) => (
								<li key={i}>
									<a href="/" className="text-light d-block fs-6">
										{e}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
		</div>
	);
}

export default TopBarAdmin;
