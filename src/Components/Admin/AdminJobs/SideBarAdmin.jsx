import React from "react";
import { adminSideBarData } from "./adminJobData";

function SideBarAdmin() {
	return (
		<div className="bg-black bg-opacity-25 rounded text-capitalize p-3 d-none d-xl-block">
			{adminSideBarData &&
				adminSideBarData.map((section, i) => (
					<div key={i}>
						<h5 className="bg-black bg-opacity-25 rounded fw-bold py-3 px-4">{section.title}</h5>
						<ul className=" list-unstyled px-4 link-info line_height-2 mt-3 mb-5">
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

export default SideBarAdmin;
