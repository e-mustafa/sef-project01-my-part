import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "./App.css"
// import "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Pages/CreateCV/create-cv-style.css";
import { Route, Routes } from "react-router-dom";
import MainInformationPage from "./Pages/CreateCV/main-information";
import SummaryPage from "./Pages/CreateCV/summary";
import SkillsPage from "./Pages/CreateCV/skills";
import HonersAndAwardsPage from "./Pages/CreateCV/honers-and-awards";
import HobbiesAndInterestsPage from "./Pages/CreateCV/hobbies-and-interests";
import ExperiencePage from "./Pages/CreateCV/experience";
import EducationPage from "./Pages/CreateCV/education";
import LinksPage from "./Pages/CreateCV/links";
import CreateCVPage from "./Pages/CreateCV/CreateCVPage";

import AdminPanelJobs from "./Pages/Admin/AdminJobs/admin-panel-jobs";

function App() {
	return (
		<>
			<div className="App">
				{/* <HeaderTitle /> */}
				{/* <CreateCVStipper /> */}

				<Routes>
					{/* Create Cv */}
					<Route path="/createcv" element={<CreateCVPage />} />
					<Route path="/createcv/main-information" element={<MainInformationPage />} />
					<Route path="/createcv/summary" element={<SummaryPage />} />
					<Route path="/createcv/skills" element={<SkillsPage />} />
					<Route path="/createcv/honers-and-awards" element={<HonersAndAwardsPage />} />
					<Route
						path="/createcv/hobbies-and-interests"
						element={<HobbiesAndInterestsPage />}
					/>
					<Route path="/createcv/experience" element={<ExperiencePage />} />
					<Route path="/createcv/education" element={<EducationPage />} />
					<Route path="/createcv/links" element={<LinksPage />} />



					<Route path="/admin/jobs" element={<AdminPanelJobs />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
