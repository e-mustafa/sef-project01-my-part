import React, { useState } from 'react';
//import './style.css';
import AllClear from '../../Coponents/StudentPortal/AllClear';
import EarnedCertificates from '../../Coponents/StudentPortal/EarnedCertificates';
import HereIsHowYou from '../../Coponents/StudentPortal/HereIsHowYou';
import LevelAndProgressBar from '../../Coponents/StudentPortal/LevelAndProgressBar';
import StudentPortalNumberUpcomingAndRegisteredAndCompleted from '../../Coponents/StudentPortal/NumberBarUpcomingAndRegisteredAndCompleted';
import RegisteredCoursesAndUpcomingExams from '../../Coponents/StudentPortal/RegisteredCoursesAndUpcomingExams';
import StudentPortal6th from '../../Coponents/StudentPortal/StudentPorta16th';
import StudentPortalTitleAndView from '../../Coponents/StudentPortal/StudentPortalTitleAndView';
import { studentPortalData } from './data';

function StudentPortalPage() {
  const [studentInfo, setStudentInfo] = useState(studentPortalData);
  return (
    <>
      <div className="container1 ">
        <div className="overlayOnImage"></div>
        <StudentPortal6th />
        <StudentPortalTitleAndView data={studentInfo} />
        <StudentPortalNumberUpcomingAndRegisteredAndCompleted
          data={studentInfo}
        />
        <LevelAndProgressBar data={studentInfo} />
        <AllClear data={studentInfo} />
      </div>
      <div className="background-color">
        <div className=" container2">
          <RegisteredCoursesAndUpcomingExams data={studentInfo} />
          <HereIsHowYou data={studentInfo} />
          <EarnedCertificates data={studentInfo} />
        </div>
      </div>
    </>
  );
}

export default StudentPortalPage;
