import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format_date } from "../../HelperHook/Global/dateFormate";

function CardUpcomingExams({ course }) {
	const [formatedDate, setFormatedDate] = useState("");

	useEffect(() => {
		if (course?.date) {
			const date = new Date(course?.date);
			const formatted_date = format_date(date);
			setFormatedDate(formatted_date);
		}
	}, [course?.date]);

	return (
		<div className="row col-lg-12">
			<div className="col-3 ">
				<ul class="list-group text-center  pt-0">
					<h4 className="Upcoming-Exams-wed ">{formatedDate?.day || ""}</h4>
					<h5 className=" Upcoming-Exams-wed">{formatedDate?.month || ""}</h5>
					<li className="list-group-item active mb-4 ">
						{" "}
						<h4 className="Upcoming-Exams-wed">{formatedDate?.weekday || ""}</h4>
					</li>
				</ul>
			</div>
			<div className="col-9  Upcoming-Exams-introuduction-text clearfix ">
				<h4>
					{course?.name}
					<Link to={`/updateexam/${course?.id}`}>
						<i class="far fa-edit fs-5 Upcoming-Exams-introuduction-icon mt-1 float-end"></i>
					</Link>
				</h4>
				<span className="Upcoming-Exams-instructor-text">Instructor :</span>{" "}
				<span className="Upcoming-Exams-instructor-subtext "> {course?.instructor || ""} </span>
				<div className="row my-3">
					<h6 className="col-6 Upcoming-Exams-lev1Exam">LEV.{course?.level || ""}</h6>
					<div className="col-6  clearfix">
						<h6 className=" float-end Upcoming-Exams-lev1Exam ">
							<i class="fa-regular fa-clock"></i> {course?.time || ""}
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardUpcomingExams;
