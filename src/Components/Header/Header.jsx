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

  const handleSetActive = (to, element) => {
    console.log(to);
    console.log(element);
    // setActiveSection(to);
    element.classList.add("active");
    // console.log(activeSection);
    // activeSection.classList.add("active");
  };
  const handleSetInactive = (to, element) => {
    element.classList.remove("active");
  };
  // eslint-disable-next-line no-unused-vars
  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setShowModal(false);

    document.body.style.overflow = "visible";
  };
  const windowWidth = WindowResizeHook();

  return (
    <HeaderContainer scrolling={scrolling}>
      <HeaderAbsoluteContainer>
        <a href="portfolio-olekasndrg.vercel.app">
          <h2>Portfolio</h2>
        </a>

        <NavContainer>
          {windowWidth >= 768 ? (
            <NavList style={{ flexDirection: "row", gap: "18px" }}>
              <li>
                <HeaderNavLink
                  to="hero"
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-250}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
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
                  offset={-250}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                >
                  Skills
                </HeaderNavLink>
              </li>
              <li>
                <HeaderNavLink
                  to="projects"
                  activeClass="active"
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-250}
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
                  offset={-300}
                  onSetActive={handleSetActive}
                  onSetInactive={handleSetInactive}
                >
                  Contacts
                </HeaderNavLink>
              </li>
            </NavList>
          ) : (
            <>
              <NavList style={{ width: "0", height: "0", opacity: "0" }}>
                <li>
                  <HeaderNavLink
                    to="hero"
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-250}
                    onSetActive={handleSetActive}
                    onSetInactive={handleSetInactive}
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
                    offset={-250}
                    onSetActive={handleSetActive}
                    onSetInactive={handleSetInactive}
                  >
                    Skills
                  </HeaderNavLink>
                </li>
                <li>
                  <HeaderNavLink
                    to="projects"
                    activeClass="active"
                    onSetActive={handleSetActive}
                    onSetInactive={handleSetInactive}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-250}
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
                    offset={-300}
                    onSetActive={handleSetActive}
                    onSetInactive={handleSetInactive}
                  >
                    Contacts
                  </HeaderNavLink>
                </li>
              </NavList>
              <BurgerMenuContainer
                type="button"
                aria-label="toggle Modal menu"
                onClick={openModal}
              >
                <BurgerMenu />
              </BurgerMenuContainer>
            </>
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
