import React, { useEffect, useState } from 'react'
import { Octokit } from "@octokit/core";
import { token as authToken } from '../../authToken';

const RepositoryList = ( {text} ) => {
  const username = 'burnettemk'
  const [data, setData] = useState([]);

  useEffect(() => {
    // Octokit.js
    // https://github.com/octokit/core.js#readme
    const octokit = new Octokit({
      auth: authToken
    })
    
    const response = octokit.request(`GET /users/${username}/repos`, {
      username: username,
      headers: {
      'X-GitHub-Api-Version': '2022-11-28'
      },
    }).then(res => setData(res.data))
  }, []);

  return (
    <>
      <p>{text}</p>
      <ul>{data.map(repo => <li key={repo.id}>{repo.name}</li>)}</ul>
    </>
  )
}

export default RepositoryList