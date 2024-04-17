import { SiLinkedin, SiGithub, SiTelegram } from "react-icons/si";
import { Title } from "../../App.styled";
import {
  ContactsContainer,
  Container,
  QuoteContainer,
} from "./Contacts.styled";
import { Element } from "react-scroll";

import quotes from "../../data/quotes.json";
const Contacts = () => {
  const randomNumber = Math.floor(Math.random() * 101);

  const randomQuote = quotes.quotes[randomNumber];

  return (
    <>
      <Element name="contacts" className="element active">
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
      <QuoteContainer>
        <Title>Quote of the day</Title>
        <p>{randomQuote.quote}</p>
        <span>{randomQuote.author}</span>
      </QuoteContainer>
    </>
  );
};

export default Contacts;
