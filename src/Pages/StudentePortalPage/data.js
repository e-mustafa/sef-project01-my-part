export const studentPortalData = {
	id: 1,
	name: "BALOEES SABIR",
	level: { levelNumber: 1, personage: 97 },
	todayExam: false,

	registeredCourses: [
		{ id: 1, name: "Introduction to React js", instructor: "Tariq Ali", level: 1 },
		{ id: 2, name: "Introduction to React js", instructor: "Sara Ahmed", level: 1 },
	],

	completedCourses: [
		{ id: 1, name: "Introduction to React js", instructor: "Tariq Ali", level: 1 },
		{ id: 2, name: "Introduction to React js", instructor: "Sara Ahmed", level: 1 },
	],
	ongoingCourses: [{ id: 1, name: "Introduction to React js", instructor: "Tariq Ali", level: 1 }],
	coursesStatus: [
		{
			id: 1,
			name: "Introduction to React js",
			level: 1,
			personage: 91,
			finishedHours: 27,
			fullHours: 30,
		},
		{
			id: 2,
			name: "Introduction to Data Analysis",
			level: 1,
			personage: 75,
			finishedHours: 13,
			fullHours: 17,
		},
		{
			id: 3,
			name: "System analisis and design",
			level: 1,
			personage: 91,
			finishedHours: 24,
			fullHours: 24,
		},
		{
			id: 4,
			name: "Introduction to React js",
			level: 1,
			personage: 91,
			finishedHours: 27,
			fullHours: 30,
		},
	],
	upcomingExams: [
		{
			id: 1,
			name: "Introduction to React js",
			instructor: "Tariq Ali",
			level: "1 Exam",
			date: "2023-06-07",
			time: "12:30 PM",
		},
		{
			id: 2,
			name: "Introduction to JavaScript",
			instructor: "Sara Ahmed",
			level: "1 Exam",
			date: "2023-11-07",
			time: "8:00 PM",
		},
	],

	earnedCertificates: [
		{
			id: 1,
			name: "Introduction to React js",
			instructor: "Tariq Ali",
			dateAcquired: "2023-06-05",
			link: "#",
		},
	],
};

export const instructorPortalData = {
	id: 1,
	name: "BALOEES SABIR",
	level: { levelNumber: 1, personage: 97 },
	todayExam: false,

	ongoingCourses: [
		{ id: 1, name: "Introduction to React js", students: 20, level: 1 },
		{ id: 2, name: "Introduction to React js", students: 18, level: 1 },
	],

	upcomingCourses: [
		{
			id: 1,
			name: "Introduction to React js",
			dateStart: "2023-08-07",
			lessons: 12,
			level: 1,
			img: "",
		},
		{
			id: 2,
			name: "Introduction to JavaScript",
			dateStart: "2023-09-01",
			lessons: 14,
			level: 1,
			img: "",
		},
	],
	completedCourses: [
		{ id: 1, name: "Introduction to React js", students: 20, level: 1 },
		{ id: 2, name: "Introduction to JavaScript", students: 18, level: 1 },
		{ id: 3, name: "Introduction to React js", students: 18, level: 1 },
		{ id: 4, name: "Introduction to React js", students: 18, level: 1 },
	],

	coursesStatus: [
		{
			id: 1,
			name: "Introduction to React js",
			level: 1,
			personage: 91,
			finishedHours: 27,
			fullHours: 30,
		},
		{
			id: 1,
			name: "Introduction to Data Analysis",
			level: 1,
			personage: 75,
			finishedHours: 13,
			fullHours: 17,
		},
		{
			id: 1,
			name: "System analisis and design",
			level: 1,
			personage: 91,
			finishedHours: 24,
			fullHours: 24,
		},
		{
			id: 1,
			name: "Introduction to React js",
			level: 1,
			personage: 91,
			finishedHours: 27,
			fullHours: 30,
		},
	],
	upcomingExams: [
		{
			id: 1,
			name: "Introduction to React js",
			instructor: "Tariq Ali",
			level: "1 Exam",
			date: "2023-06-07",
			dayName: "wed",
			time: "12:30 PM",
		},
		{
			id: 2,
			name: "Introduction to JavaScript",
			instructor: "Sara Ahmed",
			level: "1 Exam",
			date: "2023-11-07",
			dayName: "Mon",
			time: "8:00 PM",
		},
	],

	earnedCertificates: [
		{
			id: 1,
			name: "Introduction to React js",
			instructor: "Tariq Ali",
			dateAcquired: "2023-06-05",
			link: "#",
		},
	],
};
