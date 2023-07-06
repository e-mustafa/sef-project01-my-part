import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Skills3Form({ title, formData, handelChangeSkills, addSkillInput, deleteSkill }) {
	return (
		<>
			<h5 className="mb-4  text-capitalize">{title}</h5>
			<div className="cv-form row g-3 fs-18">
				<div className="col-12 d-flex gap-3 align-items-center">
					<div className="d-flex flex-column gap-3 w-100">
						{formData &&
							formData.map((ele, i) => (
								<div className="d-flex gap-2 align-items-center flex-grow-1" key={i}>
									<div className="flex-grow-1 ">
										<input
											type="text"
											className="form-control"
											id="inputSkills"
											name="skills"
											value={ele ?? ""}
											onChange={(e) => handelChangeSkills(e, i)}
										/>
									</div>
									<div className="clickable click-primary" onClick={() => deleteSkill(i)}>
										<i className="fa-regular fa-trash-can"></i>
									</div>
								</div>
							))}
					</div>

					<div className="clickable click-primary align-self-end mb-2" onClick={addSkillInput}>
						<AiOutlinePlusCircle size="28" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Skills3Form;
