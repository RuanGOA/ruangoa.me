import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const APIGithub = axios.create({
	baseURL: GITHUB_API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
});

export const github = {
	async searchRepos(repos) {
		const response = APIGithub.get('/users/ruangoa/repos?per_page=300')
			.then(response => {
				const repositories = response.data.filter((repo) => repos.includes(repo.name.toLowerCase()));
				return repositories.map((repo) => {
					return {
						name: repo.name.toLowerCase(),
						description: repo.description ? repo.description.toString('utf8') : '...',
						mainLanguage: repo.language,
						stars: repo.stargazers_count,
						forks: repo.forks_count,
						url: repo.html_url,
					}
				})
			});
		return response;
	}
};
