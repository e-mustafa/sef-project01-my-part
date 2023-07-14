import { Link } from "react-router-dom";

function PropsTitlePages({ data }) {
	return (
		<div className="row">
			<div className="  col-9 ">
				<h1 className="welcom-back">
					welcom back <span className="welcom-back1 d-inline ">{data?.name || ""}</span>
				</h1>
			</div>
			<div className=" col-3 clearfix">
				<Link to={`/userprofile/${data.id}`} className="btn-view-profile float-end btn py-1 ">
					view profile
				</Link>
			</div>
		</div>
	);
}

export default PropsTitlePages;
