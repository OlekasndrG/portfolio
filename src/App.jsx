import { MainContainer } from "./App.styled";

import Header from "./Components/Header/Header";

import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import { scrollSpy } from "react-scroll";

function App() {
  scrollSpy.update();
  return (
    <>
      <Header />
      <MainContainer>
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
      </MainContainer>
    </>
  );
}

export default App;
