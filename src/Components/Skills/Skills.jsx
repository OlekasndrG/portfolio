import { Element } from "react-scroll";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  //   FaFigma,
} from "react-icons/fa";
import {
  SiSass,
  SiJavascript,
  SiTypescript,
  SiRedux,
  //   SiNestjs,
  SiStyledcomponents,
  SiExpress,
  SiMongodb,
  //   SiPostgresql,
  SiPostman,
  SiReacthookform,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { MainContainer } from "../Hero/Hero.styled";
import { SkillsContainer } from "./Skills.styled";
const Skills = () => {
  return (
    <Element name="skills">
      <MainContainer style={{ marginTop: "40px" }}>
        <h3 style={{ textAlign: "center", fontSize: "45px" }}>Skills</h3>
        <SkillsContainer>
          <h3>Front-End</h3>
          <div>
            <FaHtml5 />
            <FaCss3Alt />
            <SiSass />
            <SiJavascript />
            <SiTypescript />
            <FaReact />
            <SiRedux />
            <SiStyledcomponents />
            <TbBrandNextjs />
            <FaGit />
          </div>
          <h3>Back-End</h3>
          <div>
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
            <SiPostman />
            <SiReacthookform />
          </div>
        </SkillsContainer>
      </MainContainer>
    </Element>
  );
};

export default Skills;
