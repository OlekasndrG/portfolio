import { scrollSpy } from "react-scroll";
import { MainContainer } from "./App.styled";

import Header from "./Components/Header/Header";

import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  scrollSpy.update();
  return (
    <>
      <Header />

      <MainContainer>
        <Hero />
        <Skills />
        <Projects />
      </MainContainer>
      <MainContainer>
        <Contacts />
      </MainContainer>
    </>
  );
}

export default App;
