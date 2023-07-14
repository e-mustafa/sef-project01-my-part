import React from "react";
import { adminSideBarData } from "./adminJobData";
import { Link, useLocation } from "react-router-dom";

function SideBarAdmin() {
	const location = useLocation();

	return (
		<div className="admin__sidebar bg-black bg-opacity-25 rounded text-capitalize p-3 d-none d-xl-block">
			{adminSideBarData &&
				adminSideBarData.map((section, i) => (
					<div key={i}>
						<Link
							to={section.link}
							className={`admin__sidebar-links bg-black bg-opacity-25 d-block rounded fw-bold py-3 px-4
							${location.pathname.includes(section.link) ? "location.pathname" : ""}
							`}
						>
							{section.title}
						</Link>
						
						<ul className="list-unstyled px-4 link-info line_height-2 mt-3 mb-5">
							{section?.content.map((sublink, i) => (
								<li key={i}>
									<Link
										to={sublink.link}
										className={`admin__sidebar-link d-block fs-6 ${
											location.pathname.includes(section.link) ? "location.pathname" : ""
										}`}
									>
										{sublink.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
		</div>
	);
}

export default SideBarAdmin;
