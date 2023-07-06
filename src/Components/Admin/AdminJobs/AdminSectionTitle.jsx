import React from "react";

function AdminSectionTitle() {
	return (
		<div>
			<h5 className="my-5 head-page-title text-capitalize fs-5 d-none d-md-inline-block">
				Applications For " Job "at " company name"
			</h5>

			<h5 className="text-capitalize fs-5 d-inline-block d-md-none">
				Applications For " Job " <br /> at " company name"
			</h5>
		</div>
	);
}

export default AdminSectionTitle;
