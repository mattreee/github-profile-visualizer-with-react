import { useState } from "react";
import { useData } from "../StateContainer";
import RepositoriesItem from "./RepositoriesItem";

import { RepositoriesWrapper } from "../styles/Repositories.styled";
import { ButtonsWrapper } from "../styles/Repositories.styled";
import { ListWrapper } from "../styles/Repositories.styled";

const Repositories = () => {
	const [repositoryMode, setRepositoryMode] = useState(true);
	const { stateData } = useData();

	const renderedArray = repositoryMode
		? stateData?.repositories
		: stateData?.starred;

	const setRepo = () => {
		setRepositoryMode(true);
	};

	const setStarred = () => {
		setRepositoryMode(false);
	};

	return (
		<RepositoriesWrapper>
			<ButtonsWrapper>
				<button onClick={setRepo}>Repos</button>
				<button onClick={setStarred}>Starred</button>
			</ButtonsWrapper>
			<ListWrapper>
				{renderedArray.map((elem: any) => {
					return (
						<RepositoriesItem
							key={String(elem.id)}
							name={elem.name}
							fullName={elem.full_name}
							html_url={elem.html_url}
						/>
					);
				})}
			</ListWrapper>
		</RepositoriesWrapper>
	);
};

export default Repositories;
