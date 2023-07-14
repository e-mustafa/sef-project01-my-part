// import './style.css'
import CardNumberUpcomingAndOningAndCompleted from "./CardNumberBarUpcomingOngoingCompleted";

function NumberUpcomingAndOningAndCompleted({ data }) {
	return (
		<div className="my-5 row Number-Upcoming-Registered-Completed ">
			<CardNumberUpcomingAndOningAndCompleted
				number={data?.upcomingExams?.length || 0}
				title1="UPCOMING"
				title2="EXAMS"
			/>
			<CardNumberUpcomingAndOningAndCompleted
				number={data?.ongoingCourses?.length || 0}
				title1="REGISTERED"
				title2="COURSES"
			/>
			<CardNumberUpcomingAndOningAndCompleted
				number={data?.completedCourses?.length || 0}
				title1="COMPLETED"
				title2="COURSES"
			/>
		</div>
	);
}

export default NumberUpcomingAndOningAndCompleted;
