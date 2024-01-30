import styled from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";
import { NavLink } from "../Menu/Menu.styled";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 3;
  background-color: ${({ scrolling }) =>
    scrolling ? "white" : "var(--body-background)"};
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  width: 100%;

  min-width: 360px;

  @media screen and (min-width: ${tablet}) {
    min-width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    min-width: ${desktop};
  }
`;

export const HeaderAbsoluteContainer = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
export const BurgerMenuContainer = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 50%;
  border: none;
  background-color: var(--primary-light-color);
  transition: background-color 0.4s ease;

  &:hover {
    background-color: var(--primary-green-color);
  }
`;

export const HeaderNavLink = styled(NavLink)`
  color: black;
  &:hover {
    color: black;
    scale: 1.1;
  }

  &.active {
    color: var(--primary-green-color);
  }
`;
