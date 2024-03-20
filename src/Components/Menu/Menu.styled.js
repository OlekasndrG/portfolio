import styled, { keyframes } from "styled-components";
import { tablet } from "../../Utils/Breakpoints/Breakpoints";
import { Link } from "react-scroll";

export const fadeIn = keyframes`
  0% {
   
    transform: translateY(-100%);
  }
  /* 50% {
      transform: translateY(0);
  } */
  100% {
  transform: translateY(0);
  
      /* display: none; */
  }
`;

export const fadeOut = keyframes`
  0% {
   
    transform: translateY(0);
  }
  /* 50% {
    transform:translateY(-140%);
  } */
  100% {
    transform: translateY(-140%);
display: none;
    
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 4;
  top: 108px;
  right: 20px;
  width: calc(100% - 40px);
  min-height: 360px;
  max-height: calc(100vh - 60px);

  padding: 24px;

  background-color: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  border-radius: 25px;

  /* @media screen and (min-width: ${tablet}) {
    width: 320px;
  } */

  animation-name: ${(props) => (props.$isOpen ? fadeIn : fadeOut)};
  animation-duration: 700ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;
export const CrossContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  margin-bottom: 32px;

  padding: 0;

  font-size: 16px;

  letter-spacing: -0.64px;

  color: var(--text-menu-white);
  background-color: transparent;
  border: none;
  transition: var(--transition);

  &:hover {
    color: var(--primary-green-color);
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -8px;
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  /* margin-left: auto; */
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: rgba(255, 255, 255, 0.25);
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: var(--transition);

  &:hover {
    color: var(--text-menu-white);
  }
  &.active {
    color: var(--primary-green-color);
  }
`;
