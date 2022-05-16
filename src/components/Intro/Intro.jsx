import React, { useContext } from "react";
import "../Intro/Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { themeContext } from "../../Context";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from "../FloatingDiv/floatingDiv";
import { motion } from "framer-motion";
function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I am</span>
          <span>
            Awais / <span className="sec-name">Junaid</span>{" "}
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            iusto numquam nam vitae officiis, aliquam commodi maiores velit,
            quod sunt amet maxime totam rem eos dolorum asperiores repellat.
            Unde, ullam?
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        {" "}
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4% ", right: "4%" }}
          whileInView={{ left: "18%" }}
          transition={transition}
          style={{ marginTop: "-4%", marginLeft: "68%" }}
          className="floatingDiv"
        >
          <FloatingDiv text1={"Web"} text2={"Developer"} img={crown} />
        </motion.div>
        <motion.div
          initial={{ top: "-4% ", right: "4%" }}
          whileInView={{ left: "58%" }}
          transition={transition}
          style={{ marginTop: "58%", marginLeft: "0%" }}
          className="floatingDiv"
        >
          <FloatingDiv text1={"Best Design"} text2={"Award"} img={thumbup} />
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
