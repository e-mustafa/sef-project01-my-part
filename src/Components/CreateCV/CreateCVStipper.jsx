import React, { useEffect, useState } from "react";
import { stepperData } from "./data";
import { useLocation } from "react-router-dom";

function CreateCVStipper({ data }) {
	const [activePage, setActivePage] = useState(1);
	const [stepperItemsSlices, setStepperItemsSlices] = useState(stepperData);
	console.log("activePage ", activePage);

	const location = useLocation();
	console.log(location);

	useEffect(() => {
		// get active page's index depends of location.pathname;
		const activePageIndex = stepperData.findIndex((step) =>
			location.pathname.includes(step.link)
		);
		console.log(activePageIndex);
		setActivePage(activePageIndex);

		let startCut = () => {
			if (activePageIndex === 3) {
				return 1;
			} else if (activePageIndex === 4) {
				return 2;
			} else if (activePageIndex >= 5) {
				return 3;
			}
		};
		console.log(startCut());
		const newStepperData = stepperData.slice(startCut(), stepperData.length);
		console.log(newStepperData);
		setStepperItemsSlices(newStepperData);
		console.log(newStepperData);
	}, [location.pathname]);

	return (
		<section className="container-fluid container-fluid-0">
			<div className="stepper-container bg_black-opc py-7 px-7 rounded">
				<div className=" stepper-wrapper bg-black-opc d-flex gap-8 flex-nowrap text-uppercase overflow-hidden">
					{stepperData &&
						// stepperData.map((step) => (
						stepperItemsSlices?.map((step) => (
							// <NavLink
							// 	to={`/createcv/${step.link}`}
							// 	
							// 	className="step d-flex gap-3 align-items-center underline-none "
							// >
							<div key={step.id} className="step d-flex gap-3 align-items-center underline-none">
								<div
									className={`step-button btn-outline-primary btn-indicator
								${step.id <= activePage + 1 ? "active" : ""} `}
								>
									{step.id}
								</div>
								<h5 className="text-light fw-normal m-0">{step.title}</h5>
							</div>
							// </NavLink>
						))}
				</div>
			</div>
		</section>
	);
}

export default CreateCVStipper;
