import "../Experience/Experience.css";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
export default function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          23+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years</span>
        <span style={{ color: darkMode ? "--var(--orange)" : "" }}>
          experience
        </span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          333+
        </div>
        <span>completed</span>
        <span>projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          30+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies</span>
        <span>work</span>
      </div>
    </div>
  );
}
