import { Element } from "react-scroll";
import { HeroMainContainer } from "./Hero.styled";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const movingSectionRef = useRef(null);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    handleScroll(); // Set initial scroll position

    // const handleInitialAnimation = () => {
    //   if (movingSectionRef.current) {
    //     movingSectionRef.current.classList.add("normal-position");
    //   }
    // };
    if (movingSectionRef.current && scrollPosition < 450) {
      movingSectionRef.current.style.marginLeft = "0";
    } else if (movingSectionRef.current) {
      movingSectionRef.current.style.marginLeft = "-300%";
    }

    // Trigger initial animation after the component is mounted
    // handleInitialAnimation();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <Element name="hero">
      <HeroMainContainer
        ref={movingSectionRef}
        // $leftCorner={scrollPosition <= 200}
        // $normalPosition={scrollPosition > 200}
      >
        <h1>Hi! I&lsquo;m OLEXANDR HUBSKYI</h1>
        <h2 style={{ textAlign: "center" }}>Front-End Developer</h2>
        <h3>
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
        </h3>
        <span>Try me ! </span>
      </HeroMainContainer>
    </Element>
  );
};

export default Hero;
