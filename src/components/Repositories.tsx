import { useState } from "react";
import { useData } from "../StateContainer";
import RepositoriesItem from "./RepositoriesItem";

const Repositories = () => {
	const [repositoryMode, setRepositoryMode] = useState(true);
	const { stateData } = useData();

	const setRepo = () => {
		setRepositoryMode(true);
	};

	const setStarred = () => {
		setRepositoryMode(false);
	};

	return (
		<div>
			<div>
				<button onClick={setRepo}>Repos</button>
				<button onClick={setStarred}>Starred</button>
			</div>
			{repositoryMode && (
				<div>
					{stateData?.repositories.map((elem: any) => {
						return (
							<RepositoriesItem
								key={String(elem.id)}
								name={elem.name}
								fullName={elem.full_name}
							/>
						);
					})}
				</div>
			)}
			{!repositoryMode && (
				<div>
					{stateData?.starred.map((elem: any) => {
						return (
							<RepositoriesItem
								key={String(elem.id)}
								name={elem.name}
								fullName={elem.full_name}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Repositories;
