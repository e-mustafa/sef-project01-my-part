// import './style.css'
import CardUpcomingCourses from "./CardUpcomingCourses";

function UpcomingCourses({ data }) {
	return (
		<div>
			{/* <div >
        <h3 className=' Upcoming-Courses-title  mt-5 mb-4'>Upcoming Courses</h3>
        </div> */}
			<div class="row py-5">
				<h3 className=" Upcoming-Courses-title mb-4 ">Upcoming Courses</h3>
				{data?.upcomingCourses &&
					data?.upcomingCourses?.map((course) => (
						<CardUpcomingCourses key={course?.id} course={course} />
					))}
			</div>
		</div>
	);
}

export default UpcomingCourses;
