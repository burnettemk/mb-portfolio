import React from 'react'

const ProgressBar = ({ exp }) => {
  let progressExp = exp * 5;

  return (
    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${progressExp}`} aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar" style={{width: `${progressExp}%`}}></div>
    </div>
  )
}

export default ProgressBar