import StateContainer from "./StateContainer";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Repositories from "./components/Repositories";

function App() {
	return (
		<StateContainer>
			<main>
				<Header />
				<ProfileCard />
				<Repositories />
			</main>
		</StateContainer>
	);
}

export default App;
