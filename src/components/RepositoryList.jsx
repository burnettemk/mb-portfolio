import React, { useEffect, useState } from 'react'
import { Octokit } from "@octokit/core";

const RepositoryList = ( {text} ) => {
  const username = 'burnettemk'
  const [data, setData] = useState([]);

  useEffect(() => {
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
      auth: import.meta.env.githubAuthToken
    })
    
    const response = octokit.request(`GET /users/${username}/repos`, {
      username: username,
      headers: {
      'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(res => setData(res.data))

    const repoDetailsResponse = octokit.request(`GET /repos/{owner}/{repo}/languages`, {
      owner: username,
      repo: 'fire-film',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then((res) => {
      console.log(res)
      console.log(res.data)
    })
  }, []);

  return (
    <>
      <p>{text}</p>
      <ul>{data.map(repo => <li key={repo.id}>{repo.name}</li>)}</ul>
    </>
  )
}

export default RepositoryList