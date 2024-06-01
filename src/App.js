import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.css";

import "./App.css";

import "./Pages/CreateCV/create-cv-style.css";
import { Navigate, Route, Routes } from "react-router-dom";

import CreateCVPage from "./Pages/CreateCV/CreateCVPage";

import AdminPanelJobs from "./Pages/Admin/AdminJobs/admin-panel-jobs";
import JobApplicationsListPage from "./Pages/Admin/AdminJobs/job-applications-list";
import LoginPage from "./Pages/Auth/LoginPage";
import Summary2Form from "./Coponents/CreateCV/Summary2Form";
import Skills3Form from "./Coponents/CreateCV/Skills3Form";
import HonersAndAwards6Form from "./Coponents/CreateCV/HonersAndAwards6Form";
import Experience4Form from "./Coponents/CreateCV/Experience4Form";
import Education5Form from "./Coponents/CreateCV/Education5Form";
import Links8Form from "./Coponents/CreateCV/Links8Form";
import MainInformation1Form from "./Coponents/CreateCV/MainInformation1Form";
import HobbiesAndInterests7Form from "./Coponents/CreateCV/HobbiesAndInterests7Form";
import ForgetPasswordPage from "./Pages/Auth/forget-password-page";
import ResetPasswordPage from "./Pages/Auth/reset-password-page";
import StudentPortalPage from "./Pages/StudentePortalPage/StudentPortalPage";
import InstructorPortalPage from "./Pages/InstructorPortalPage/InstructorPortalPage";
import RegisterPage from "./Pages/Auth/RegisterPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/forget-password" element={<ForgetPasswordPage />} />
				<Route path="/auth/reset-password" element={<ResetPasswordPage />} />
				<Route path="/auth/singup" element={<RegisterPage />} />

				<Route path="/admin/jobs" element={<AdminPanelJobs />} />
				<Route path="/admin/jobs/applications" element={<JobApplicationsListPage />} />

				<Route path="/studentportal" element={<StudentPortalPage />} />
				<Route path="/instructorportal" element={<InstructorPortalPage />} />

				{/* Create Cv */}
				<Route path="/createcv" element={<CreateCVPage />}>
					{/* redirect to first route -------------------------------- */}
					<Route index element={<Navigate replace to="/createcv/main-information" />} />

					<Route path="main-information" element={<MainInformation1Form />} />
					<Route path="summary" element={<Summary2Form />} />
					<Route path="skills" element={<Skills3Form />} />
					<Route path="honers-and-awards" element={<HonersAndAwards6Form />} />
					<Route path="hobbies-and-interests" element={<HobbiesAndInterests7Form />} />
					<Route path="experience" element={<Experience4Form />} />
					<Route path="education" element={<Education5Form />} />
					<Route path="links" element={<Links8Form />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
