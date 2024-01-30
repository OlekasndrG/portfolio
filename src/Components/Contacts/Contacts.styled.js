import styled from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";

export const ContactsContainer = styled.footer`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  padding-bottom: 40px;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  svg {
    fill: black;
    stroke: white;
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: ${tablet}) {
    gap: 30px;
    svg {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    gap: 35px;
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
