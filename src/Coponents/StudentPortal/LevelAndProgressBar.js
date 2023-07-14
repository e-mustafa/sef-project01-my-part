function LevelAndProgressBar({ data }) {
	return (
		<div>
			<div className="row  LevelAndProgressBar">
				<div className=" col-md-10  col ">
					<h4>{`LEVEL : ${data?.levelNumber || 1}`}</h4>
				</div>
				<div className="col-md-2 col clearfix">
					<h4 className="float-end">{`${data?.personage || 0}%`}</h4>
				</div>
			</div>
			<div className="progress col">
				<div className="progress-bar" style={{ width: `${data?.personage || 0}%` }}></div>
			</div>
			<br />
		</div>
	);
}

export default LevelAndProgressBar;
