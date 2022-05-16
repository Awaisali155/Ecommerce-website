import React, { useContext } from "react";
import "./Services.css";
import Card from "../cards/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import cv from "../../1.docx";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* leftside */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          <br />
          fugit exercitationem atque consequuntur maxime.
        </span>
        <a href={cv} download className="button">
          Download CV
        </a>
      </div>
      {/* rightside */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "25rem" }}
          initial={{ left: "25%" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Desgin"}
            details={"Figma,sketch,Photoshop,adobe,adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"Figma,sketch,Photoshop,adobe,adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/Ux"}
            details={"Figma,sketch,Photoshop,adobe,adobe xd"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
