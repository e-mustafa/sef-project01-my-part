import { Link } from "react-router-dom";
import image1 from "../../Images/secondary_background.jpg";
import { formatDateLong } from "../../HelperHook/Global/dateFormate";

function CardUpcomingCourses({ course }) {
	const formatedDate = formatDateLong(course?.dateStart);

	return (
		<div className="col-lg-6">
			<div className=" row  mb-5   Upcoming-Courses ">
				<div className="card-body col-lg-4 col-12 ">
					<img
						className="Upcoming-Courses-image m-auto"
						src={course?.img || image1}
						alt="CardImage"
					/>
				</div>

				<div className="card-body col-lg-8 col-12 Upcoming-Courses-text1 ">
					<h4 class="card-title upcoming-courses-title1">{course?.name || ""}</h4>
					<br />
					<div className="row justify-content-center">
						<div className="col-12 ">
							<i class="fas fa-calendar-alt upcoming-courses-icon1 pe-2"> </i>
							<span class="  upcoming-courses-subtitle1 ">
								{formatedDate && formatedDate}
							</span>
							<br />
							<i class="far fa-list-alt  upcoming-courses-icon1 pe-2"> </i>{" "}
							<span class="  upcoming-courses-subtitle1 "> {course?.lessons || ""}</span>
							<br />
							<br />
						</div>

						<div className="col-12 clearfix">
							<h5 className="float-start upcoming-courses-lev1">
								LEV.{course?.level || ""}
							</h5>
							<Link
								class="btn float-end upcoming-courses-button"
								to={`/usercoursesdetails/${course?.id}`}
							>
								VIEWDETAILS
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CardUpcomingCourses;
