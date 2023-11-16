import React from 'react'
import { createPortal } from 'react-dom'
import { languages } from '../data/languages'
import ProgressBar from './ProgressBar';

const LanguageList = () => {
  let sortedLanguages = languages.sort(
    (l1, l2) => (l1.value < l2.value) ? 1 : (l1.value > l2.value) ? -1 : 0
  );

  return (
    <div>
      {createPortal(
        <ul>
          {sortedLanguages.map(lang => 
            <>
              <li className='lang' id={lang.name}>
              {lang.name}
              </li>
              <ProgressBar exp={lang.value}/>
            </>
          )}
        </ul>,
        document.getElementById("languages-section")
      )}
    </div>
  )
}

export default LanguageList