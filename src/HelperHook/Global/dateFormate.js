// (YYYY-MM-DD)
export function format_date(date) {
	const months = [
		"JAN",
		"FEB",
		"MAR",
		"APR",
		"MAY",
		"JUN",
		"JUL",
		"AUG",
		"SEP",
		"OCT",
		"NOV",
		"DEC",
	];

	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	let day = date.getDate().toString();

	if (day.endsWith("1") && day !== "11") {
		day += "st";
	} else if (day.endsWith("2") && day !== "12") {
		day += "nd";
	} else if (day.endsWith("3") && day !== "13") {
		day += "rd";
	} else {
		day += "th";
	}

	const month = months[date.getMonth()];

	const year = date.getFullYear().toString();

	const formatted_date = {
		day: day,
		month: month,
		year: year,
		weekday: days[date.getDay()], 
	};

	return formatted_date;
}

// (YYYY-MM-DD)
export function formatDateLong(dateStr) {
	const date = new Date(dateStr);

	const options = { weekday: "long", month: "long", day: "numeric" };
	const formattedDate = date
		.toLocaleDateString("en-US", options)
		.replace(/(\d+)(st|nd|rd|th)/, "$1$2");

	return formattedDate;
}

