import React from "react";
import { createPortal } from "react-dom";
import { languages } from "../data/languages";
import ProgressBar from "./ProgressBar";

const LanguageList = () => {
  let sortedLanguages = languages.sort((l1, l2) =>
    l1.value < l2.value ? 1 : l1.value > l2.value ? -1 : 0
  );

  let maxExp = sortedLanguages[0].value;

  return (
    <div>
      {createPortal(
        <ul>
          {sortedLanguages.map((lang, index) => (
            <li key={lang.id} className="lang" id={lang.name}>
              {lang.name}
              <ProgressBar exp={lang.value} maxE={maxExp} />
            </li>
          ))}
        </ul>,
        document.getElementById("languages-section")
      )}
    </div>
  );
};

export default LanguageList;
