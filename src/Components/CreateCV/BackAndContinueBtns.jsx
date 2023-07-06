import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { stepperData } from "./data";

function BackAndContinueBtns() {
	const navigate = useNavigate();
	const location = useLocation();
	const [nextLink, setNextLink] = useState("");
	const [prevLink, setPrevLink] = useState("");
	const [isLastIndex, setIsLastIndex] = useState(false);

	// handel links for continue and back button ---------------------------
	useEffect(() => {
		const linkIndex = stepperData.findIndex((e) => location.pathname.includes(e.link));
		const nextIndex = linkIndex < stepperData.length - 1 ? linkIndex + 1 : stepperData.length - 1;
		setNextLink(stepperData[nextIndex]?.link);
		setPrevLink(stepperData[linkIndex > 0 ? linkIndex - 1 : 0]?.link);

		setIsLastIndex(stepperData?.length - 1 === linkIndex);
	}, [location.pathname]);

	return (
		<div
			className={`d-flex flex-column flex-md-row p-2 gap-4 text-capitalize pb-5 ${
				isLastIndex ? "justify-content-between" : ""
			}`}
		>
			<button
				className="btn btn-gray btn-lg btn-width order-last order-lg-first"
				// onClick={() => navigate(-1)}
				onClick={() => navigate(`/createcv/${prevLink}`)}
			>
				Back
			</button>

			{/* show continue or download button depends location.pathname ------------- */}

			{!isLastIndex ? (
				<button
					className="btn btn-primary btn-lg btn-width "
					onClick={() => navigate(`/createcv/${nextLink}`)}
				>
					Continue
				</button>
			) : (
				<button className="btn btn-primary btn-lg btn-width justify-self-end">Download</button>
			)}
		</div>
	);
}

export default BackAndContinueBtns;
