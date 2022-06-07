const RepositoriesItem = ({ name, fullName }: any) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>full name</p>
			<p>{fullName}</p>
		</div>
	);
};

export default RepositoriesItem;
