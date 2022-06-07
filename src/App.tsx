import StateContainer from "./StateContainer";
import SearchBar from "./components/SearchBar";
import ProfileCard from "./components/ProfileCard";
import Repositories from "./components/Repositories";

import GlobalStyles from "./styles/Globals";
import { AppWrapper } from "./styles/AppWrapper.styled";

function App() {
	return (
		<StateContainer>
			<GlobalStyles />
			<SearchBar />
			<AppWrapper>
				<ProfileCard />
				<Repositories />
			</AppWrapper>
		</StateContainer>
	);
}

export default App;
