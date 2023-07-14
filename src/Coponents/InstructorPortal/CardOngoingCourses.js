import { Link } from "react-router-dom";

function CardOngoingCourses({ course }) {
	return (
		<div class="row col-lg-12 ongoing-Courses-introuduction-text my-4 ">
			<h4>{course?.name} </h4>
			<br /> <br />
			<div class=" d-flex justify-content-between align-items-center">
				<div class=" d-flex justify-content-between align-items-center  clearfix">
					<h6 class=" ongoing-Courses-lev1 mt-2">LEV.{course?.level || ""} </h6>
				</div>
				<div className="float-end">
					<i class="far fa-user  fs-5 ongoing-Courses-icon pe-2"></i>
					<span class=" pe-4 ongoing-Courses-20student ">
						{course?.students || ""} {course?.students > 1 ? " students" : " student"}
					</span>
					<Link
						type="button"
						class="btn  ongoing-Courses-button "
						to={`/usercoursesdetails/${course?.id}`}
					>
						VIEW DETAILS
					</Link>
				</div>
			</div>
		</div>
	);
}

export default CardOngoingCourses;
