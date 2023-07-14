import CardRegisteredCourses from "./CardRegisteredCourses";
import CardUpcomingExams from "./CardUpcomingExams";

function RegisteredCoursesAndUpcomingExams({ data }) {
	return (
		<div className="clearfix mt-5  Registered-Upcoming">
			<div className="float-end  col-lg-5 col-12 ">
				<h3 className="Upcoming-Exams-title  mt-5 mb-4">Upcoming Exams</h3>
				{data?.upcomingExams?.map((course) => (
					<CardUpcomingExams key={course?.id} course={course} />
				))}
			</div>
			<div className="float-start  col-lg-5 col-12 mt-5">
				<h3 className="Registered-Courses-title">Registered Courses </h3>
				{data?.registeredCourses?.map((course) => (
					<CardRegisteredCourses key={course?.id} course={course} />
				))}
			</div>
		</div>
	);
}

export default RegisteredCoursesAndUpcomingExams;
