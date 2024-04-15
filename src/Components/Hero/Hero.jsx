import { Element } from "react-scroll";
import {
  HeroMainContainer,
  HeroDescritionText,
  TrymeAnchor,
} from "./Hero.styled";
import { useEffect, useRef, useState } from "react";
import { TypedText } from "./TestTyped";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const movingSectionRef = useRef(null);
  const movingTextRef = useRef(null);
  const anchorRef = useRef(null);
  // const el2 = useRef(null);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    handleScroll(); // Set initial scroll position

    if (movingSectionRef.current && !scrollPosition) {
      movingSectionRef.current.style.transform = "translateX(0)";

      movingTextRef.current.style.opacity = "1";
      anchorRef.current.style.opacity = "1";
    } else if (movingSectionRef.current) {
      movingSectionRef.current.style.transform = "translateX(-300%)";
      movingTextRef.current.style.opacity = "0";
      anchorRef.current.style.opacity = "0";
    }

    // Trigger initial animation after the component is mounted
    // handleInitialAnimation();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Element name="hero" className="element active">
      <HeroMainContainer ref={movingSectionRef}>
        <h1>
          Hi! I&lsquo;m <br />
          OLEXANDR HUBSKYI
        </h1>
        <h2 style={{ display: "flex", alignItems: "center" }}>
          <TypedText />
        </h2>

        <HeroDescritionText ref={movingTextRef}>
          With nearly a decade of experience in the logistics sphere, I recently
          transitioned to the dynamic field of IT, driven by a passion for
          tackling exacting challenges and a steadfast commitment to continuous
          hard work and learning. <br /> My hands-on experience includes
          proficiency in crafting applications with responsive user interfaces
          using React, complemented by implementing server-side dynamics through
          Node.js. My tenure as part of a collaborative team enhanced my soft
          skills — communication, collaboration, and adaptability — along with
          the ability to autonomously tackle urgent tasks and problems. <br />
          Prepared to roll up my sleeves, I am eager to contribute my skills and
          passion to the ever-evolving landscape of opportunities.
        </HeroDescritionText>
        <TrymeAnchor href="https://t.me/GubskiyAlexandr" ref={anchorRef}>
          <span>Try me ! </span>
        </TrymeAnchor>
      </HeroMainContainer>
    </Element>
  );
};

export default Hero;
