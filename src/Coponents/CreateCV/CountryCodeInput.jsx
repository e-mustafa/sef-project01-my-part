import React, { useEffect, useState } from "react";

const CountryCodeInput = () => {
	const [countriesCode, setCountriesCode] = useState({});
	const [countryCode, setCountryCode] = useState("+20");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handlePhoneNumberChange = (event) => {
		const { value } = event.target;
		setCountryCode(value);

		// Remove all non-digit characters from the input
		const cleanedValue = value.replace(/\D/g, "");

		// Check if the cleanedValue starts with the country code
		const hasCountryCode = cleanedValue.startsWith("+");

		// If the input value doesn't start with the country code, add it
		const updatedValue = hasCountryCode ? cleanedValue : `+20${cleanedValue}`;

		// Update the phone number state
		setPhoneNumber(updatedValue);
	};

	useEffect(() => {
		fetch("/api/api_countries_en.json")
			.then((response) => response.json())
			.then(({ res }) => {
				console.log(res);
				setCountriesCode(res);
				// FLAG_SELECTOR_OPTION_LIST = [];
				// for (let i = 0; i < results.length; ++i) {
				// 	let flag = getFlagFromCountryCode(results[i]["alpha3"]);
				// 	if (
				// 		!FLAG_SELECTOR_OPTION_LIST.some((item) => item["id"] === results[i]["callingCodes"][0])
				// 	)
				// 		FLAG_SELECTOR_OPTION_LIST.push({
				// 			id: results[i]["callingCodes"][0],
				// 			name: results[i]["name"],
				// 			displayText: `${results[i]["name"]}(${results[i]["callingCodes"][0]})`,
				// 			englishName: results[i]["nativeName"],
				// 			locale: `en-${results[i]["nativeName"].toLowerCase()}`,
				// 			flag: flag,
				// 		});
				// }
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<select value={countryCode} onChange={handlePhoneNumberChange}>
				<option value="">Select country code</option>
				{countriesCode &&
					countriesCode.map((e) => <option value={e.dialCode}>{e.dialCode}</option>)}
			</select>

			<label htmlFor="phoneNumber">Phone Number:</label>
			<input
				type="text"
				id="phoneNumber"
				value={phoneNumber}
				onChange={handlePhoneNumberChange}
				placeholder="+966"
			/>
		</div>
	);
};

export default CountryCodeInput;
