import { useState } from "react";
import LanguageList from "./components/LanguageList";
import LanguageToolList from "./components/LanguageToolList";
import TitleSwitch from "./components/TitleSwitch.jsx";
import ToolList from "./components/ToolList";
import Experience from "./components/Experience.jsx";
import ProjectList from "./components/ProjectList.jsx";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <TitleSwitch />
      <LanguageList />
      <ToolList />
      <LanguageToolList onSelect={setSelected} />
      {/* <div>{selected ? selected : "Nothing Selected"}</div> */}
      <ProjectList />
    </>
  );
}

export default App;
