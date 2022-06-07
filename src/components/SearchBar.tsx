import { useState } from "react";
import { useGetUserData } from "../StateContainer";

import { SearchStyles } from "../styles/SearchBar.styled";

const Header = () => {
	const [inputState, setInputState] = useState();
	const getUserData = useGetUserData();

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (!inputState) return alert("Enter a username");

		getUserData(inputState);
	};

	const onChange = (e: any) => {
		setInputState(e.target.value);
	};

	return (
		<SearchStyles onSubmit={handleSubmit}>
			<input type="text" name="search" id="search" onChange={onChange} />
			<button type="submit">Search</button>
		</SearchStyles>
	);
};

export default Header;
