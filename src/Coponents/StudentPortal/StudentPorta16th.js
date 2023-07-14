import { printDate } from '../../HelperHook/Global/Helpers';
import '../../Pages/StudentePortalPage/style.css';

function StudentPortal6th() {
  const today = printDate();
  return (
    <div>
      <p className="studentportal">Student Portal</p>
      <div className="studentportalline"></div>
      <p className="studentportal">{today}</p>
    </div>
  );
}

export default StudentPortal6th;
