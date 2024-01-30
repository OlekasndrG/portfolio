import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { Title } from "../../App.styled";
import { ContactsContainer, Container } from "./Contacts.styled";
import { Element } from "react-scroll";
const Contacts = () => {
  return (
    <Element name="contacts">
      <ContactsContainer>
        <Title>Contacts</Title>
        <Container>
          <a href="www.linkedin.com/in/alexandr-gubskiy">
            <SiLinkedin />
          </a>
          <a href="https://github.com/OlekasndrG">
            <SiGithub />
          </a>
          <a href="https://t.me/GubskiyAlexandr">
            <SiTelegram />
          </a>
        </Container>
      </ContactsContainer>
    </Element>
  );
};

export default Contacts;
