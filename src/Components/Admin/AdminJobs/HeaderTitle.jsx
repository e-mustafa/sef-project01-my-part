import React from "react";
// import { printDate } from "../../../Logic/Helpers";
import { printDate } from "../../../Logic/Helpers";

function HeaderTitle() {
	const today = printDate();

	return (
		<section className="container-fluid fs-18">
			<div className="text-gray">
				<h6 className="head-page-title text-capitalize">Admin Panel</h6>
				<h6>{today}</h6>
			</div>
		</section>
	);
}

export default HeaderTitle;
