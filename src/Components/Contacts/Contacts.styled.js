import styled from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";
import { ComponentSection } from "../../App.styled";

export const ContactsContainer = styled(ComponentSection)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding-top: 20px;
  margin-bottom: 80px;
  margin-top: 40px;
  height: 300px;
  @media screen and (min-width: ${tablet}) {
    padding-top: 30px;

    height: 400px;
    margin-bottom: 120px;
    margin-top: 60px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 40px;
    height: 500px;
    margin-top: 180px;
    margin-bottom: 170px;
  }
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
