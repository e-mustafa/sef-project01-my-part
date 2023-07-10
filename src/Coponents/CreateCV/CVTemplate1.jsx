import React from "react";

//import egyptFlagImg from '../../Images/Flag_of_Egypt.png';

function CVTemplate1({ data }) {
	const main_info = data.main_information;
	return (
		<div className="ps-2 ">
			<div className="overflow-auto">
				<div className="row cv-part-1">
					<div className="col-4 px-3 py-5 bg_blue">
						<div className="overflow-hidden h-100 d-flex flex-column gap-4 ps-2">
							<div className="cv--avatar">
								<img src="avatar.png" alt="" className="rounded-circle" />
							</div>
							{/* personal information ------------------------------- */}
							<div>
								<h4 className="text-white fs-20">
									{`${main_info?.firstName || ""} ${main_info?.LastName || ""}`}
								</h4>
								<h6 className="text_gray fs-13">{main_info?.profession || ""}</h6>
							</div>

							<div className="d-flex flex-column gap-2 ">
								<div className="cv-squire-info">
									<h6 className="fs-12">Surakarta, December 2, 1994</h6>
								</div>
								<div className="cv-squire-info">
									<h6 className="fs-12">
										{main_info?.mobileNumber && `+20 ${main_info?.mobileNumber || ""}`}
									</h6>
								</div>
								<div className="cv-squire-info">
									<h6 className="fs-12">{(main_info?.email && main_info?.email) || ""}</h6>
								</div>
								<div className="cv-squire-info">
									<h6 className="fs-12">{`${main_info?.city || ""}, ${
										main_info?.country || ""
									}`}</h6>
								</div>
							</div>
							{/* Skills --------------------------------- */}
							<div className="">
								{" "}
								{/* formData.main_information */}
								<h6 className="fw-bold mb-3">Skills</h6>
								{/* <ul className="fs-11 ps-4"></ul> */}
							</div>
							{/* Honers & Awards --------------------------------- */}
							<div className="">
								<h6 className="fw-bold mb-3 mb-4">Honers & Awards</h6>
								{/* <div className="d-flex flex-wrap gap-2" style={{ minHeight: "40px" }}>
									<div className="d-flex justify-content-between w-100"></div>
									<p className="m-0" style={{ fontSize: "10px" }}></p>
								</div> */}
							</div>
							{/* Hobbies & Interests ------------------------------- */}
							<div>
								<h6 className="fw-bold ">Hobbies & Interests</h6>
								{/* <ul className="fs-13 ps-4" style={{ minHeight: "25px" }}>
									{data?.hobbiesAndInterests &&
										data?.hobbiesAndInterests.map(
											(e, i) => e !== "" && <li key={i}>{e}</li>
										)}
								</ul> */}
							</div>
							{/* Links and Credentials --------------------------------- */}
							<div className="">
								<h6 className="fw-bold mb-3">Links and Credentials</h6>

								<div className="d-flex flex-wrap row-gap-2">
									{data?.links &&
										data?.links.map(
											(ele, i) =>
												ele !== "" && (
													<a
														key={i}
														href={ele.url}
														className="text-light underline-none"
														style={{ flex: "1 0 50%" }}
														target="_blank"
														rel="noopener noreferrer"
													>
														<i className={`fa-brands fa-linkedin fa-lg me-2`} />
														<span className="fs-13">{ele.sitename}</span>
													</a>
												)
										)}

									<a
										href={"/"}
										className="text-light underline-none "
										style={{ flex: "1 0 50%" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className={`fa-brands fa-linkedin fa-lg me-2`} />
										<span className="fs-12">Linkedin</span>
									</a>

									<a
										href="h"
										className="text-light underline-none"
										style={{ flex: "1 0 50%" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className={`fa-brands fa-github fa-lg`} />
										<span className="fs-12 ms-2">github</span>
									</a>

									<a
										href="h"
										className="text-light underline-none"
										style={{ flex: "1 0 50%" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fa-solid fa-up-right-from-square" />
										<span className="fs-12 ms-2">Website</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* part 2 right side ------------------------------------------------------ */}
					<div className="col-8 bg-light p-4 ">
						<div className="cv-part-2 overflow-hidden h-100 text-dark">
							<div className="part-title mb-4 ps-2">
								<h4 className="fs-20 fw-bold text_blue cv-section-title">About</h4>
								{/* {data.about && <p>{data.about}</p>} */}
								<p className="fs-11 text-muted"></p>
							</div>

							{/* Education --------------------------------------------- */}
							<div className=" mb-4 ps-2">
								<h4 className="fs-20 fw-bold text_blue cv-section-title">Education</h4>

								<div className=" d-flex flex-column gap-3 ">
									<div className="education-item d-flex gap-2">
										{/* <p className="  w-100" style={{ flex: "1 0 21%" }}>
											2015-2019
										</p>
										<ul className="education-details">
											<li className="cv-li-dot"></li>
										</ul> */}
									</div>
								</div>
							</div>

							{/* Experience --------------------------------------------- */}
							<div className=" mb-4 ps-2">
								<h4 className="fs-20 fw-bold text_blue cv-section-title">Experience</h4>

								<div className=" d-flex flex-column gap-3 pt-2 ">
									<div className="education-item d-flex gap-2">
										<div>
											{/* <img src={egyptFlagImg} alt="" width="50px" height="auto" /> */}
										</div>
										<ul className="education-details">
											{/* <li className="cv-li-dot"></li> */}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CVTemplate1;
