import React, { useState } from "react";

const StepperComponent = () => {
	const [step, setStep] = useState(1);

	const handleNextStep = () => {
		setStep(step + 1);
	};

	const handlePreviousStep = () => {
		setStep(step - 1);
	};

	return (
		<div className="my-5">
			{step === 1 && (
				<div>
					<div className="mb-3">
						<label htmlFor="formStep1" className="form-label">
							خطوة 1
						</label>
						<input
							type="text"
							className="form-control"
							id="formStep1"
							placeholder="أدخل البيانات هنا"
						/>
					</div>
					<button className="btn btn-primary" onClick={handleNextStep}>
						التالي
					</button>
				</div>
			)}

			{step === 2 && (
				<div>
					<div className="mb-3">
						<label htmlFor="formStep2" className="form-label">
							خطوة 2
						</label>
						<input
							type="text"
							className="form-control"
							id="formStep2"
							placeholder="أدخل البيانات هنا"
						/>
					</div>
					<button className="btn btn-secondary me-2" onClick={handlePreviousStep}>
						السابق
					</button>
					<button className="btn btn-primary" onClick={handleNextStep}>
						التالي
					</button>
				</div>
			)}

			{step === 3 && (
				<div>
					<div className="mb-3">
						<label htmlFor="formStep3" className="form-label">
							خطوة 3
						</label>
						<input
							type="text"
							className="form-control"
							id="formStep3"
							placeholder="أدخل البيانات هنا"
						/>
					</div>
					<button className="btn btn-secondary me-2" onClick={handlePreviousStep}>
						السابق
					</button>
					<button className="btn btn-primary">إرسال</button>
				</div>
			)}
		</div>
	);
};

export default StepperComponent;
