import React from "react";
import { Link } from "react-router-dom";

import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

function JobsListPagination() {
	return (
		<nav className="mt-5" aria-label="Admin job list pagination">
			<ul className="admin-Joblist-pagination pagination justify-content-center justify-content-lg-end align-items-center">
				<li className="page-item text_primary disabled">
					<Link className="page-link fs-2">
						<TfiArrowCircleLeft />
					</Link>
				</li>
				<li className="page-item job-list-active">
					<Link className="page-link fs-5" href="#">
						1
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link fs-5" href="#">
						2
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link fs-5" href="#">
						3
					</Link>
				</li>
				<li className="page-item">
					<Link className="page-link fs-5" href="#">
						...
					</Link>
				</li>
				<li className="page-item text_primary">
					<Link className="page-link fs-2" href="#">
						<TfiArrowCircleRight />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default JobsListPagination;
