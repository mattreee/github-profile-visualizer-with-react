import { useData } from "../StateContainer";

const ProfileCard = () => {
	const { stateData } = useData();

	return (
		<div>
			<img src={stateData?.user.avatar_url} alt="" />

			<div>
				<h1>{stateData?.user.name}</h1>
				<p>Username: {stateData?.user.login}</p>
				<p>Company: {stateData?.user.company}</p>
				<p>Location: {stateData?.user.location}</p>
				<p>Blog: {stateData?.user.blog}</p>
			</div>

			<ul>
				<li>Followers: {stateData?.user.followers}</li>
				<li>Following: {stateData?.user.following}</li>
				<li>Gists: {stateData?.user.public_gists}</li>
				<li>Repos: {stateData?.user.public_repos}</li>
			</ul>
		</div>
	);
};

export default ProfileCard;
