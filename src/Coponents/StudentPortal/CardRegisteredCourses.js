import { Link } from "react-router-dom";

function CardRegisteredCourses({ course }) {
	return (
		<div className="row col-lg-12 Registered-Courses-introuduction-text  my-4 py-2">
			<h4>{course?.name || ""} </h4>
			<span>
				{" "}
				<span className="Registered-Courses-instructor-text">Instructor :</span>{" "}
				<span className=" Registered-Courses-instructor-subtext ">
					{" "}
					{course?.instructor || ""}{" "}
				</span>
			</span>
			<br /> <br />
			<div className="row ">
				<h3 className="col-6 Registered-Courses-lev1 ">LEV.{course?.level || ""}</h3>
				<div className="col-6  clearfix">
					<Link
						className="view-profile float-end btn mb-4 Registered-Courses-button"
						to={`/usercoursesdetails/${course?.id}`}
					>
						VIEW DETAILS
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CardRegisteredCourses;
