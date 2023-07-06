import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Links8Form({ formData, handelChange, addItem, deleteItem }) {
	console.log(formData);
	return (
		<>
			<h5 className="mb-4">Links</h5>

			<div className="d-flex flex-column flex-lg-row gap-3 w-100 py-4">
				<div className="d-flex flex-column w-100 gap-3">
					{formData?.map((ele, i) => (
						<div
							className="d-flex flex-column flex-lg-row gap-2 w-100 align-items-center "
							key={i}
						>
							<div className="row d-flex w-100 flex-column flex-lg-row align-items-center g-3">
								<div className="col-12 col-lg-4">
									<label htmlFor="inputSiteName" className="form-label  text-capitalize">
										website
									</label>
									<input
										type="text"
										className="form-control"
										id="inputSiteName"
										name="sitename"
										value={ele.sitename ?? ""}
										onChange={(e) => handelChange(e, i)}
									/>
								</div>
								<div className="col-12 col-lg-8 ">
									<label htmlFor="inputURL" className="form-label text-capitalize">
										URL
									</label>
									<input
										type="text"
										className="form-control"
										id="inputURL"
										name="url"
										value={ele.url ?? ""}
										onChange={(e) => handelChange(e, i)}
									/>
								</div>
							</div>
							<div
								className="clickable click-primary align-self-end mb-2 pe-5 pt-1"
								onClick={() => deleteItem(i)}
							>
								<i className="fa-regular fa-trash-can"></i>
							</div>
						</div>
					))}
				</div>
				<div
					className="clickable click-primary align-self-end mb-2 pe-2"
					onClick={addItem}
					style={{ marginTop: "-44px" }}
				>
					<AiOutlinePlusCircle size="28" />
				</div>
			</div>
		</>
	);
}

export default Links8Form;
