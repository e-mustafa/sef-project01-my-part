// import './style.css'

import { printDate } from "../../HelperHook/Global/Helpers";

function InstructorPortal6th() {
	const today = printDate();
	return (
		<div>
			<p className="studentportal"> instructor portal</p>
			<div className="studentportalline"></div>
			<p className="studentportal">{today}</p>
		</div>
	);
}

export default InstructorPortal6th;
