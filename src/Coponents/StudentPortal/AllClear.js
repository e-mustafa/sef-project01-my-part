function AllClear({ data }) {
	return (
		<div className="row   AllClear  ">
			{/* {data?.todayExam?.length < 1 ? */}
			{!data?.todayExam ? (
				<div className="col-lg-10 col-12">
					<div className=" col-1 ">
						<i className="fa-regular fa-circle-check fa-2xl " />
					</div>
					<div className=" col-11 ms-2">
						<h4>ALL CLEAR,YOU DON'T HAVE EXAMS TODAY.</h4>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
export default AllClear;
