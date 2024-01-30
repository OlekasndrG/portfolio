import {
  BurgerMenuContainer,
  HeaderNavLink,
  HeaderContainer,
  HeaderAbsoluteContainer,
} from "./Header.styled";
import BurgerMenu from "../../Pictures/icons/menu.svg?react";

import { useEffect, useState } from "react";
import { Modal } from "../../Utils/Modal/Modal";
import Menu from "../Menu/Menu";

import { NavContainer, NavList } from "../Menu/Menu.styled";
import WindowResizeHook from "../../Utils/Hooks/WindowResizeHook";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [scrolling, setScrolling] = useState(undefined);
  function listenScrollEvent() {
    if (window.scrollY > 20) {
      setScrolling(1);
    } else {
      setScrolling(undefined);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", listenScrollEvent);
    }

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const openModal = () => {
    setShowModal(true);
    // document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setShowModal(false);

    // document.body.style.overflow = "visible";
  };
  const windowWidth = WindowResizeHook();

  return (
    <HeaderContainer scrolling={scrolling}>
      <HeaderAbsoluteContainer>
        <h2>Portfolio</h2>
        <NavContainer>
          {windowWidth >= 768 ? (
            <NavList style={{ flexDirection: "row", gap: "18px" }}>
              <li>
                <HeaderNavLink
                  to="hero"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-150}
                >
                  About
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  to="skills"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-150}
                >
                  Skills
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  to="projects"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-150}
                >
                  Projects
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  to="contacts"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-150}
                >
                  Contacts
                </HeaderNavLink>
              </li>
            </NavList>
          ) : (
            <BurgerMenuContainer
              type="button"
              aria-label="toggle Modal menu"
              onClick={openModal}
            >
              <BurgerMenu />
            </BurgerMenuContainer>
          )}
        </NavContainer>
      </HeaderAbsoluteContainer>

      {showModal && (
        <Modal onClose={closeModal}>
          <Menu onClose={closeModal} />
        </Modal>
      )}
    </HeaderContainer>
  );
};
export default Header;
