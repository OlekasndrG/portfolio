import styled from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";
import { ComponentSection } from "../../App.styled";

export const ContactsContainer = styled(ComponentSection)`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 80px;
  margin-bottom: 40px;
  margin-top: 60px;
  /* height: 300px; */
  @media screen and (min-width: ${tablet}) {
    min-height: 320px;
    padding-top: 30px;
    padding-bottom: 60px;
    margin-top: 80px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${desktop}) {
    min-height: 350px;
    padding-top: 40px;
    padding-bottom: 80px;
    margin-top: 100px;
    margin-bottom: 40px;
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
    width: 40px;
    height: 40px;
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
      width: 64px;
      height: 64px;
    }
  }
`;
export const QuoteContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
  padding-inline: 15px;
  & p {
    line-height: 1.5;
    font-size: 24px;
    font-weight: bold;
  }
  & span {
    align-self: flex-end;
    font-size: 22px;
    font-style: italic;
    font-weight: bold;
  }
`;
