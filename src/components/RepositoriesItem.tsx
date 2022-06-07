import { ItemWrapper } from "../styles/RepositoryItem.styled";

const RepositoriesItem = ({ name, fullName, html_url }: any) => {
	return (
		<ItemWrapper>
			<h2>{name}</h2>
			<p>Full name:</p>
			<a href={html_url}>{fullName}</a>
		</ItemWrapper>
	);
};

export default RepositoriesItem;
