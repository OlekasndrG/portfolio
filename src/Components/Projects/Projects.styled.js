import styled from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  button {
    cursor: pointer;
  }

  @media screen and (min-width: ${tablet}) {
    gap: 15px;
  }
  @media screen and (min-width: ${desktop}) {
    gap: 20px;
  }
`;

export const ProjectButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 50px;
  padding: 8px;
  border: none;
  font-weight: bold;
  /* border: 1px solid black; */
  border-radius: 12px;
  font-family: inherit;
  font-size: 12px;

  background-color: var(--text-color);
  color: whitesmoke;
  @media screen and (min-width: ${tablet}) {
    width: 120px;
    height: 60px;
    padding: 12px;
    font-size: 18px;
  }
  @media screen and (min-width: ${desktop}) {
    height: 70px;
    width: 160px;
    padding: 10px;
  }
  scale: 1;
  transition: all 500ms ease;
  &:hover,
  &:focus {
    scale: 1.1;
    background-color: whitesmoke;
    color: var(--text-color);
  }
`;
