import React from 'react'

const ProgressBar = ({ exp, maxE }) => {
  if (exp == null) return null

  let progressExp = (exp / maxE) * 100;

  // $cyan-400
  // $yellow-600
  // $gray-600
  // $yellow-800
  // $indigo-700
  let colorClass = ''
  progressExp == 100 ? colorClass = 'most-exp' :
  progressExp > 70 ? colorClass = 'experienced' :
  progressExp > 60 ? colorClass = 'intermediate' :
  progressExp > 40 ? colorClass = 'knowledgable' :
  colorClass = 'novice'
  
  return (
    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={`${progressExp}`} aria-valuemin="0" aria-valuemax="100">
      <div className={`progress-bar ${colorClass}`} style={{width: `${progressExp}%`}}></div>
    </div>
  )
}

export default ProgressBar