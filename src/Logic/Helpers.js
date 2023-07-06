
// print date -----------------------------
export function printDate() {
	const date = new Date();
	const day = date.getDate();
	const formattedDay = formateDay(day);
	const month = date.getMonth();
	const formattedMonth = formateMonth(month);
	const year = date.getFullYear();
	let currentDate = `${formattedDay} ${formattedMonth} ${year}`;

	function formateDay(day) {
		let editedDay = day;

		if (day === 1 || day === 21 || day === 31) {
			editedDay += "st";
		} else if (day === 2 || day === 22) {
			editedDay += "nd";
		} else if (day === 3 || day === 23) {
			editedDay += "rd";
		} else {
			editedDay += "th";
		}
		return editedDay;
	}

	function formateMonth(monthIndex) {
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return monthNames[monthIndex];
	}

	return currentDate;
}