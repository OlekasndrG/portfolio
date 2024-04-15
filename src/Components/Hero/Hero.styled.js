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
  text-align: center;
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

export const HeroDescritionText = styled.h3`
  opacity: 0;
  transform: none;
  transition: opacity 3.3s ease 3.3s;

  @media screen and (min-width: ${tablet}) {
    width: 700px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 1000px;
  }
`;

export const TrymeAnchor = styled.a`
  margin: 10px auto;

  border-radius: 8px;
  -webkit-box-shadow: 1px 1px 5px 3px rgba(23, 61, 51, 0.4);
  -moz-box-shadow: 1px 1px 5px 3px rgba(23, 61, 51, 0.4);
  box-shadow: 1px 1px 5px 3px rgba(23, 61, 51, 0.4);
  opacity: 0;
  padding: 10px;
  transform: none;
  transition: opacity 3.3s ease 3.3s;
  font-size: 28px;
  font-family: "Oswald-Regular", sans-serif;
  font-weight: bold;
  width: fit-content;

  cursor: pointer;

  @media screen and (min-width: ${desktop}) {
    font-size: 28px;
  }
`;
export const HeroMainContainer = styled(MainContainer)`
  transform: translateX(-300%);
  transition: all 3s ease;
`;
