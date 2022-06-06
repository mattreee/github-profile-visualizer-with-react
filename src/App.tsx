import StateContainer from "./StateContainer";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
	return (
		<StateContainer>
			<main>
				<Header />
				<ProfileCard />
			</main>
		</StateContainer>
	);
}

export default App;
