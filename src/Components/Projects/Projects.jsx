import { useState } from "react";

import data from "../../data/cases.json";

import { Element } from "react-scroll";
import { Slide } from "./Slide/Slide";
import { MainContainer } from "../Hero/Hero.styled";
import { Title } from "../../App.styled";
import { ButtonContainer, ProjectButton } from "./Projects.styled";

// зробити лендінги просто окремим обєктом
// eslint-disable-next-line react/prop-types

const Projects = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const buttonClickHandler = (buttonNumber) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <Element name="projects" className="element">
      <MainContainer style={{ marginTop: "0" }}>
        <Title>Projects</Title>
        <ButtonContainer>
          {data.map((childData) => (
            <ProjectButton
              key={childData.id}
              type="button"
              onClick={() => buttonClickHandler(childData.id)}
            >
              {childData.name}
            </ProjectButton>
          ))}
        </ButtonContainer>

        {selectedButton && (
          <Slide
            name={data[selectedButton - 1].name}
            images={data[selectedButton - 1].images}
            stack={data[selectedButton - 1].stack}
            description={data[selectedButton - 1].description}
            additional={data[selectedButton - 1].additional}
            link={data[selectedButton - 1].link}
          />
        )}
      </MainContainer>
    </Element>
  );
};

export default Projects;
