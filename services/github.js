import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const APIGithub = axios.create({
	baseURL: GITHUB_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
});

export const github = {
	async getPosts() {
		const response = await APIGithub.get("/repos/ruangoa/ruangoa.me/issues");

		return response.data;
	},
	async getPost(index) {
		const response = await APIGithub.get(`/repos/ruangoa/ruangoa.me/issues/${index}`);
		
		return response.data;
	}
};
