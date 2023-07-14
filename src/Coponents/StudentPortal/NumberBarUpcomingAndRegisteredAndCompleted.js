import "../../Pages/StudentePortalPage/style.css";

import CardNumberUpcomingAndRegisteredAndCompleted from "./CardNumberUpcomingAndRegisteredAndCompleted";
function StudentPortalNumberUpcomingAndRegisteredAndCompleted({ data }) {
	return (
		<div className="my-5 row Number-Upcoming-Registered-Completed ">
			<CardNumberUpcomingAndRegisteredAndCompleted
				number={data?.upcomingExams?.length || 0}
				title1="UPCOMING"
				title2="EXAMS"
			/>
			<CardNumberUpcomingAndRegisteredAndCompleted
				number={data?.registeredCourses?.length || 0}
				registeredCourses
				title1="REGISTERED"
				title2="COURSES"
			/>
			<CardNumberUpcomingAndRegisteredAndCompleted
				number={data?.completedCourses?.length || 0}
				completedCourses
				title1="COMPLETED"
				title2="COURSES"
			/>
		</div>
	);
}

export default StudentPortalNumberUpcomingAndRegisteredAndCompleted;
