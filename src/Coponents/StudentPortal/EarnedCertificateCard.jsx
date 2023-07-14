import React from "react";
import { formatDateLong } from "../../HelperHook/Global/dateFormate";

function EarnedCertificateCard({ certificate }) {
	const formattedDate = formatDateLong(certificate?.dateAcquired);

	return (
		<div className="row  Earned-Certificates-box  ">
			<div className=" col-sm-10  Earned-Certificates-introuduction-text">
				<h4>{certificate?.name} </h4>
				<div className="row ">
					<span className="col-md-4 col-sm-12">
						<span className="Earned-Certificates-instructor-text ">Instructor : </span>
						<span className="Earned-Certificates-instructor-subtext">
							{" "}
							{certificate?.instructor || ""}
						</span>
					</span>
					<span className="col-md-7 col-sm-12">
						{" "}
						<span className="Earned-Certificates-instructor-text">Date Acquired : </span>
						<span className=" Earned-Certificates-instructor-subtext">
							{" "}
							{formattedDate || ""}
						</span>
					</span>
				</div>
			</div>

			<div className="col-sm-2  clearfix ">
				<a
					className="view-profile float-end btn Earned-Certificates-button"
					type="button"
					href={certificate?.link || ""}
				>
					Download
				</a>
			</div>
		</div>
	);
}

export default EarnedCertificateCard;
