import { createContext, useState, useContext } from "react";
import { api } from "./service/api";
import { StateDataInterface } from "./types";

const StateContext = createContext({});

export default function StateContainer({ children }: any) {
	const [stateData, setStateData] = useState<StateDataInterface>({
		hasUser: false,
		user: {},
		repositories: [],
		starred: [],
	});

	async function getUserData(username: string) {
		const usersRes = await api.get(`users/${username}`);
		const data = usersRes.data;

		setStateData({
			hasUser: true,
			user: {
				login: data.login,
				id: data.id,
				avatar_url: data.avatar_url,
				name: data.name,
				html_url: data.html_url,
				blog: data.blog,
				company: data.company,
				location: data.location,
				followers: data.followers,
				following: data.following,
				public_gists: data.public_gists,
				public_repos: data.public_repos,
			},
			repositories: [...(await getReposFromLink(username))],
			starred: [...(await getStarredFromLink(username))],
		});
	}

	async function getReposFromLink(username: string) {
		const resArray = await api.get(`users/${username}/repos`);
		const data = resArray.data;
		return data;
	}

	async function getStarredFromLink(username: string) {
		const resArray = await api.get(`users/${username}/starred`);
		const data = resArray.data;
		return data;
	}

	const contextValue = {
		stateData,
		setStateData,
		getUserData,
	};

	return (
		<StateContext.Provider value={contextValue}>
			{children}
		</StateContext.Provider>
	);
}

export function useData() {
	const context = useContext(StateContext);
	const { stateData, setStateData }: any = context;
	return { stateData, setStateData };
}

export function useGetUserData() {
	const context = useContext(StateContext);
	const { getUserData }: any = context;
	return getUserData;
}
