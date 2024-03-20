import styled from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";
import { ComponentSection } from "../../App.styled";

export const MainContainer = styled(ComponentSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 36px;
  margin-top: 104px;
  gap: 15px;

  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 30px;
  }

  h3 {
    width: 360px;
  }
  @media screen and (min-width: ${tablet}) {
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 20px;
    }

    h3 {
      width: 650px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 164px;

    h1 {
      font-size: 70px;
    }
    h2 {
      font-size: 16px;
    }

    h3 {
      width: 700px;
    }
  }
`;

export const HeroMainContainer = styled(MainContainer)`
  margin-left: -300%;
  transition: margin-left 3s ease;
  /* ${(props) => props.$leftCorner && "margin-left: -100%;"}
  ${(props) => props.$normalPosition && "margin-left: 0;"} */
`;
