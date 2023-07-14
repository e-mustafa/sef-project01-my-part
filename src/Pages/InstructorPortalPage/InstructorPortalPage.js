import React, { useState } from 'react';
import './style.css';
import InstructorPortal6th from '../../Coponents/InstructorPortal/InstructorPortal6th';
import WelcomeBackAndViewPortal from '../../Coponents/InstructorPortal/WelcomeBackAndViewPortal';
import NumberUpcomingAndOningAndCompleted from '../../Coponents/InstructorPortal/NumberBarUpcomingOngoingCompleted';
import AllClear1 from '../../Coponents/InstructorPortal/AllClear1';
import OngoingCoursesAndUpcomingExams from '../../Coponents/InstructorPortal/OngoingCoursesAndUpcoming Exams';
import UpcomingCourses from '../../Coponents/InstructorPortal/UpcomingCourses';
import { instructorPortalData } from '../StudentePortalPage/data';

export default function InstructorPortalPage() {
  const [instructorPortal, setInstructorPortal] =
    useState(instructorPortalData);

  return (
    <>
      <div className="container11 ">
        <div className="overlayOnImage1"></div>
        <InstructorPortal6th />
        <WelcomeBackAndViewPortal data={instructorPortal} />
        <NumberUpcomingAndOningAndCompleted data={instructorPortal} />
        <AllClear1 data={instructorPortal} />
      </div>

      <div className="background-color1">
        <div className=" container22">
          <OngoingCoursesAndUpcomingExams data={instructorPortal} />
          <UpcomingCourses data={instructorPortal} />
        </div>
      </div>
    </>
  );
}
