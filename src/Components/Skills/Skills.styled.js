import styled from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  h3 {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    width: 100%;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;

    svg {
      fill: black;
      stroke: white;
      width: 30px;
      height: 30px;
    }

    @media screen and (min-width: ${tablet}) {
      svg {
        width: 44px;
        height: 44px;
      }
    }

    @media screen and (min-width: ${desktop}) {
      svg {
        width: 60px;
        height: 60px;
      }
    }
  }
`;
