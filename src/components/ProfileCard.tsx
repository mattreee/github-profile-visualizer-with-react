import { useData } from "../StateContainer";
import { ProfileWrapper } from "../styles/ProfileWrapper.styled";

const ProfileCard = () => {
	const { stateData } = useData();

	return (
		<ProfileWrapper>
			<img src={stateData?.user.avatar_url} alt="" />

			<div>
				<h1>{stateData?.user.name}</h1>
				<p>Username: {stateData?.user.login}</p>
				<p>Company: {stateData?.user.company}</p>
				<p>Location: {stateData?.user.location}</p>
				<p>Blog: {stateData?.user.blog}</p>
			</div>

			<div>
				<p>Followers: {stateData?.user.followers}</p>
				<p>Following: {stateData?.user.following}</p>
				<p>Gists: {stateData?.user.public_gists}</p>
				<p>Repos: {stateData?.user.public_repos}</p>
			</div>
		</ProfileWrapper>
	);
};

export default ProfileCard;
