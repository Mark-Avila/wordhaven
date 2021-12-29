import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.footer`
  padding: 0;
  margin: 0.5em 0;
  display: flex;
  justify-content: center;

  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`;

const Body = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Link = styled(motion.button).attrs((props) => ({
  whileHover: {
    borderBottom: `2px solid ${props.theme.colors.primary}`,
    cursor: "pointer",
    transition: { type: "spring" },
  },
}))`
  padding: 0;
  padding-bottom: 0.2em;
  margin: 0 0.4rem;
  background: none;
  font-weight: bold;
  border: none;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

const Footer = () => {
  const goToLink = (url) => window.open(url);

  return (
    <Container>
      <Body>
        Developed using 🞄
        <Link onClick={() => goToLink("https://reactjs.org/")}>React</Link>
        🞄
        <Link onClick={() => goToLink("https://styled-components.com/")}>
          Styled Components
        </Link>
        🞄
        <Link onClick={() => goToLink("https://www.framer.com/motion/")}>
          Framer Motion
        </Link>
      </Body>
    </Container>
  );
};

export default Footer;
