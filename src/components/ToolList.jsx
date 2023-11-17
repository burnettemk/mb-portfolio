import React from "react";
import { createPortal } from "react-dom";
import { tools } from "../data/tools";

const ToolList = () => {
  return (
    <div>
      {createPortal(
        <ul>
          {tools.map((tool, index) => (
            <li key={tool.id} className="tool">
              {tool.name}
            </li>
          ))}
        </ul>,
        document.getElementById("tools-section")
      )}
    </div>
  );
};

export default ToolList;
