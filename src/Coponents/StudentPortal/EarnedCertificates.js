import { formatDateLong } from "../../HelperHook/Global/dateFormate";
import EarnedCertificateCard from "./EarnedCertificateCard";

function EarnedCertificates({ data }) {
	return (
		<div className="py-5">
			<div className="col-lg-5 col-sm-12  mb-4 ">
				<h3 className=" Earned-Certificates-title">Earned Certificates </h3>
			</div>

			{data?.earnedCertificates &&
				data.earnedCertificates.map((certificate) => (
					<EarnedCertificateCard key={certificate?.id} certificate={certificate} />
				))}
		</div>
	);
}

export default EarnedCertificates;
