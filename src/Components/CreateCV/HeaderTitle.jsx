import React from 'react';
import { printDate } from '../../Logic/Helpers';
//import { printDate } from '../Logic/Helpers';

function HeaderTitle() {
  const today = printDate();
  // function printDate() {
  //   const date = new Date();
  //   const day = date.getDate();
  //   const formattedDay = formateDay(day);
  //   const month = date.getMonth();
  //   const formattedMonth = formateMonth(month);
  //   const year = date.getFullYear();
  //   let currentDate = `${formattedDay} ${formattedMonth} ${year}`;

  //   function formateDay(day) {
  //     let editedDay = day;

  //     if (day === 1 || day === 21 || day === 31) {
  //       editedDay += 'st';
  //     } else if (day === 2 || day === 22) {
  //       editedDay += 'nd';
  //     } else if (day === 3 || day === 23) {
  //       editedDay += 'rd';
  //     } else {
  //       editedDay += 'th';
  //     }
  //     return editedDay;
  //   }

  //   function formateMonth(monthIndex) {
  //     const monthNames = [
  //       'January',
  //       'February',
  //       'March',
  //       'April',
  //       'May',
  //       'June',
  //       'July',
  //       'August',
  //       'September',
  //       'October',
  //       'November',
  //       'December',
  //     ];
  //     return monthNames[monthIndex];
  //   }

  //   return currentDate;
  // }

  return (
		<section className="container-fluid  fs-18">
			<div className="text-gray  py-5">
				<h5 className="head-page-title text-capitalize fs-5">Create CV</h5>
				<h5>{today}</h5>
			</div>

			<div className="row mb-5">
				<div className="col-12 col-lg-6">
					<h2 className="fw-bold text-capitalize">Customize your cv</h2>
					<h6 className="">
						Here you can create your CV by answering questions and getting it ready for
						download or applying to jobs through the platform.
					</h6>
				</div>
			</div>
		</section>
  );
}

export default HeaderTitle;
