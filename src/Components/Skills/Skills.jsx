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
import { Title } from "../../App.styled";
const Skills = () => {
  return (
    <Element name="skills" className="element">
      <MainContainer>
        <Title>Skills</Title>
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
