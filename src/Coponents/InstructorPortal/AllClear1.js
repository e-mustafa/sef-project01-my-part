function AllClear1({ data }) {
	return (
		<div className="row   AllClear  ">
			{/* {data?.todayExam.length < 1 */}
			{!data?.todayExam ? (
				<div className="col-lg-10 col-12">
					<div className=" col-1 ">
						<i className="fa-regular fa-circle-check fa-2xl " />
					</div>
					<h4>ALL CLEAR,YOU DON'T HAVE EXAMS TODAY.</h4>
				</div>
			) : (
				""
			)}
		</div>
	);
}
export default AllClear1;
