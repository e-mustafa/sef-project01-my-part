import { Link } from "react-router-dom";
import CardOngoingCourses from "./CardOngoingCourses";
import CardUpcomingExams from "./CardUpcomingExam";

function OngoingCoursesAndUpcomingExams({ data }) {
	return (
		<div className="row mt-5 ongoing-Upcoming">
			<div className=" col-lg-6 col-12 ">
				<h3 className="ongoing-Courses-title">Ongoing Courses </h3>
				{data?.ongoingCourses?.map((course) => (
					<CardOngoingCourses key={course?.id} course={course} />
				))}
			</div>
			<div className=" col-lg-6 col-12  ">
				<div className="d-flex justify-content-between align-items-center mb-2">
					<Link to={`/upcomingexam`} className=" Upcoming-Exams-title mb-2">
						Upcoming Exams
					</Link>
					<Link to={`/createexam`} className="btn Upcoming-Exams-button ">
						{" "}
						CREATE NEW Exam{" "}
					</Link>
				</div>
				{data?.upcomingExams?.map((course) => (
					<CardUpcomingExams key={course?.id} course={course} />
				))}
			</div>
		</div>
	);
}

export default OngoingCoursesAndUpcomingExams;
