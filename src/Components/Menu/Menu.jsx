import PropTypes from "prop-types";
import Arrow from "../../Pictures/icons/arrow_BurgerMenu.svg?react";

import Cross from "../../Pictures/icons/cross.svg?react";

import {
  MenuContainer,
  CrossContainer,
  NavContainer,
  NavList,
  NavLink,
} from "./Menu.styled";

import { useState } from "react";
const Menu = ({ onClose }) => {
  const [animation, setAnimation] = useState(true);
  const handleClosewithAnimation = () => {
    setAnimation(false);
    setTimeout(() => {
      onClose();
    }, 501);
  };

  return (
    <MenuContainer $isOpen={animation}>
      <CrossContainer onClick={handleClosewithAnimation}>
        <Cross />
        <span>Close</span>
      </CrossContainer>
      <NavContainer>
        <NavList>
          <li>
            <NavLink
              to="hero"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 750)
              }
            >
              <span>About</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 750)
              }
            >
              <span>Skills</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 750)
              }
            >
              <span>Projects</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contacts"
              smooth={true}
              spy={true}
              duration={500}
              offset={+150}
              onClick={() =>
                setTimeout(() => {
                  onClose();
                }, 750)
              }
            >
              <span>Contacts</span> <Arrow />
            </NavLink>
          </li>
        </NavList>
      </NavContainer>
    </MenuContainer>
  );
};
Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Menu;
