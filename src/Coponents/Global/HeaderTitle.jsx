import React from "react";

import { printDate } from "../../HelperHook/Global/Helpers";

function HeaderTitle({ title }) {
	const today = printDate();

	return (
		<section className="container-fluid fs-18 mb-5">
			<div className="text-gray">
				<h6 className="head-page-title text-capitalize">{title}</h6>
				<h6>{today}</h6>
			</div>
		</section>
	);
}

export default HeaderTitle;
