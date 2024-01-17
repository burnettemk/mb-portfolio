import React, { useEffect, useState } from "react";

const firstTitle = "Front End Developer";
const secondTitle = "Website Designer";

const TitleSwitch = () => {
  const [text, setText] = useState(secondTitle);

  // Create interval
  useEffect(() => {
    const interval = setInterval(() => {
      const jobTitle = document.getElementById("job-title");
      jobTitle.className = "active";

      text === firstTitle ? setText(secondTitle) : setText(firstTitle);

      jobTitle.innerText = text;
    }, 2500);

    return () => clearInterval(interval);
  }, [text]); // Make 'text' state a dependency. Componenet rerenders.
};

export default TitleSwitch;
