import { useState } from "react";
import { useGetUserData } from "../StateContainer";

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
		<form onSubmit={handleSubmit}>
			<input type="text" name="search" id="search" onChange={onChange} />
			<button type="submit">Search</button>
		</form>
	);
};

export default Header;
