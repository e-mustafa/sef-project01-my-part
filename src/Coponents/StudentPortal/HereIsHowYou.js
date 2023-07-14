import CardHereIsHowYou from "./CardHereIsHowYou";

function HereIsHowYou({ data }) {

	return (
		<div>
			<div className="col-lg-7 col-sm-12  my-4">
				<h3 className="here-is-how-title">
					Here's how you've been doing for the{" "}
					<span className=" here-is-how-title1 d-inline ">last month</span>{" "}
				</h3>
			</div>
			<div className="row ">
				{data?.coursesStatus?.map((course) => (
					<CardHereIsHowYou key={course?.id} course={course} />
				))}
			</div>
		</div>
	);
}

export default HereIsHowYou;
