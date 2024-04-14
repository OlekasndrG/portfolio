import { styled } from "styled-components";
import { mobile, tablet, desktop } from "./Utils/Breakpoints/Breakpoints";

export const MainContainer = styled.div`
  min-width: 360px;
  /* max-width: ${mobile}; */
  /* height: 100vh; */
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: ${tablet}) {
    /* max-width: none; */
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 30px;

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
  }
  @media screen and (min-width: ${desktop}) {
    font-size: 44px;
  }
`;
export const ComponentSection = styled.section`
  margin-top: 25px;

  padding-bottom: 20px;
  @media screen and (min-width: ${desktop}) {
    margin-top: 40px;
    padding-bottom: 20px;
  }
`;
